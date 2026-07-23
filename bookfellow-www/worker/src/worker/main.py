"""BullMQ consumer — pack.build (claim + fake Gemini) + credit.scan (Plan 5b)."""

from __future__ import annotations

import asyncio
import json
import logging
import os
import signal
from datetime import datetime, timezone

import psycopg
from bullmq import Queue, Worker
from psycopg.rows import dict_row

from generated.jobs import QUEUE_NAME, CreditScanJob, PackBuildJob

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("bookfellow-worker")

STALE_SECONDS = int(os.environ.get("JOB_CLAIM_STALE_SECONDS", "60"))
AUTHORIZED_ACTIONS = (
    "credits_set",
    "credits_set_anomaly",
    "credits_trusted_grant",
)


def _db_url() -> str:
    url = os.environ.get("DATABASE_URL")
    if not url:
        raise RuntimeError("DATABASE_URL is required")
    return url


def _scan_interval_ms() -> int:
    phase = (os.environ.get("BOOKFELLOW_PRODUCT_PHASE") or "alpha").strip().lower()
    if phase == "alpha":
        return 240 * 60 * 1000
    return 15 * 60 * 1000


def try_claim(job_id: str, book_id: str | None, bullmq_id: str | None) -> str:
    with psycopg.connect(_db_url(), row_factory=dict_row) as conn:
        with conn.transaction():
            cur = conn.execute(
                """
                INSERT INTO job_claims (job_id, status, claimed_at, book_id, bullmq_id)
                VALUES (%s, 'claimed', now(), %s, %s)
                ON CONFLICT (job_id) DO NOTHING
                RETURNING job_id
                """,
                (job_id, book_id, bullmq_id),
            )
            row = cur.fetchone()
            if row:
                return "claimed"

            existing = conn.execute(
                "SELECT status, claimed_at FROM job_claims WHERE job_id = %s",
                (job_id,),
            ).fetchone()
            if not existing:
                return "skip_inflight"

            if existing["status"] == "completed":
                return "skip_completed"

            if existing["status"] == "claimed":
                claimed_at = existing["claimed_at"]
                if claimed_at.tzinfo is None:
                    claimed_at = claimed_at.replace(tzinfo=timezone.utc)
                age = (datetime.now(timezone.utc) - claimed_at).total_seconds()
                if age >= STALE_SECONDS:
                    updated = conn.execute(
                        """
                        UPDATE job_claims
                        SET status = 'claimed',
                            claimed_at = now(),
                            completed_at = NULL,
                            bullmq_id = %s,
                            book_id = COALESCE(%s, book_id)
                        WHERE job_id = %s
                          AND status = 'claimed'
                          AND claimed_at <= now() - (%s || ' seconds')::interval
                        RETURNING job_id
                        """,
                        (bullmq_id, book_id, job_id, str(STALE_SECONDS)),
                    ).fetchone()
                    if updated:
                        return "reclaimed"
                return "skip_inflight"

            return "skip_inflight"


def mark_completed(job_id: str) -> None:
    with psycopg.connect(_db_url()) as conn:
        with conn.transaction():
            conn.execute(
                """
                UPDATE job_claims
                SET status = 'completed', completed_at = now()
                WHERE job_id = %s
                """,
                (job_id,),
            )


async def fake_gemini() -> None:
    log.info("gemini.stub start")
    await asyncio.sleep(0.5)
    log.info("gemini.stub done")


def run_credit_scan() -> dict:
    """Snapshot balances; freeze users with uncovered credit rises."""
    frozen = 0
    scanned = 0
    with psycopg.connect(_db_url(), row_factory=dict_row) as conn:
        with conn.transaction():
            users = conn.execute(
                'SELECT id, companion_credits, credits_frozen_at FROM "user"'
            ).fetchall()
            for u in users:
                scanned += 1
                uid = u["id"]
                current = int(u["companion_credits"])
                prev = conn.execute(
                    """
                    SELECT companion_credits, taken_at
                    FROM credit_balance_snapshots
                    WHERE user_id = %s
                    ORDER BY taken_at DESC
                    LIMIT 1
                    """,
                    (uid,),
                ).fetchone()

                conn.execute(
                    """
                    INSERT INTO credit_balance_snapshots (user_id, companion_credits)
                    VALUES (%s, %s)
                    """,
                    (uid, current),
                )
                # keep last 2
                conn.execute(
                    """
                    DELETE FROM credit_balance_snapshots
                    WHERE id IN (
                      SELECT id FROM credit_balance_snapshots
                      WHERE user_id = %s
                      ORDER BY taken_at DESC
                      OFFSET 2
                    )
                    """,
                    (uid,),
                )

                if prev is None:
                    continue  # baseline

                previous = int(prev["companion_credits"])
                rise = current - previous
                if rise <= 0:
                    continue

                since = prev["taken_at"]
                auth = conn.execute(
                    """
                    SELECT COALESCE(SUM( (payload->>'delta')::int ), 0) AS covered
                    FROM admin_audit
                    WHERE action = ANY(%s)
                      AND payload->>'target_user_id' = %s
                      AND created_at > %s
                      AND (payload->>'delta')::int > 0
                    """,
                    (list(AUTHORIZED_ACTIONS), uid, since),
                ).fetchone()
                covered = int(auth["covered"] or 0)
                unauthorized = rise - covered
                if unauthorized <= 0:
                    continue
                if u["credits_frozen_at"] is not None:
                    continue

                conn.execute(
                    """
                    UPDATE "user"
                    SET credits_frozen_at = now(), "updatedAt" = now()
                    WHERE id = %s AND credits_frozen_at IS NULL
                    """,
                    (uid,),
                )
                conn.execute(
                    """
                    INSERT INTO admin_audit (actor_user_id, action, payload)
                    VALUES (%s, 'credits_scan_freeze', %s::jsonb)
                    """,
                    (
                        uid,
                        json.dumps(
                            {
                                "target_user_id": uid,
                                "previous": previous,
                                "current": current,
                                "rise": rise,
                                "covered": covered,
                                "unauthorized": unauthorized,
                            }
                        ),
                    ),
                )
                conn.execute(
                    """
                    INSERT INTO admin_audit (actor_user_id, action, payload)
                    VALUES (%s, 'admin_notify_pending', %s::jsonb)
                    """,
                    (
                        uid,
                        json.dumps(
                            {
                                "event": "credits_scan_freeze",
                                "target_user_id": uid,
                                "unauthorized": unauthorized,
                            }
                        ),
                    ),
                )
                frozen += 1
                log.info(
                    "credit.scan freeze user=%s rise=%s covered=%s unauthorized=%s",
                    uid,
                    rise,
                    covered,
                    unauthorized,
                )

    return {"ok": True, "scanned": scanned, "frozen": frozen}


async def process_job(job, _token):
    raw = job.data
    if isinstance(raw, str):
        raw = json.loads(raw)

    job_type = raw.get("type") if isinstance(raw, dict) else None

    if job_type == "credit.scan":
        CreditScanJob.model_validate(raw)
        result = await asyncio.to_thread(run_credit_scan)
        log.info("credit.scan done %s", result)
        return result

    payload = PackBuildJob.model_validate(raw)
    bullmq_id = str(job.id) if job.id is not None else None

    decision = await asyncio.to_thread(
        try_claim, payload.job_id, payload.book_id, bullmq_id
    )
    log.info(
        "claim decision=%s job_id=%s book_id=%s bullmq_id=%s",
        decision,
        payload.job_id,
        payload.book_id,
        bullmq_id,
    )

    if decision in ("skip_completed", "skip_inflight"):
        return {"ok": True, "jobId": payload.job_id, "skipped": decision}

    await fake_gemini()
    await asyncio.to_thread(mark_completed, payload.job_id)
    log.info("completed job_id=%s", payload.job_id)
    return {"ok": True, "jobId": payload.job_id, "decision": decision}


async def ensure_credit_scan_schedule(redis_url: str) -> None:
    interval = _scan_interval_ms()
    queue = Queue(QUEUE_NAME, {"connection": redis_url})
    try:
        await queue.add(
            "credit.scan",
            {
                "type": "credit.scan",
                "requestedAt": datetime.now(timezone.utc).isoformat(),
            },
            {
                "repeat": {
                    "every": interval,
                    "jobId": "credit-scan-repeatable",
                },
                "removeOnComplete": 50,
                "removeOnFail": 50,
            },
        )
        log.info(
            "credit.scan schedule registered every_ms=%s phase=%s",
            interval,
            os.environ.get("BOOKFELLOW_PRODUCT_PHASE", "alpha"),
        )
    finally:
        await queue.close()


async def amain() -> None:
    redis_url = os.environ.get("REDIS_URL", "redis://127.0.0.1:6379")
    _db_url()  # fail fast if missing
    await ensure_credit_scan_schedule(redis_url)
    worker = Worker(QUEUE_NAME, process_job, {"connection": redis_url})
    log.info(
        "worker listening queue=%s redis=%s stale_s=%s",
        QUEUE_NAME,
        redis_url,
        STALE_SECONDS,
    )

    stop = asyncio.Event()

    def _stop(*_args):
        stop.set()

    loop = asyncio.get_running_loop()
    for sig in (signal.SIGTERM, signal.SIGINT):
        try:
            loop.add_signal_handler(sig, _stop)
        except NotImplementedError:
            signal.signal(sig, lambda *_: _stop())

    await stop.wait()
    await worker.close()


def main() -> None:
    asyncio.run(amain())


if __name__ == "__main__":
    main()
