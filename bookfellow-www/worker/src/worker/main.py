"""BullMQ consumer — claim job_id in Postgres before fake Gemini (P3)."""

from __future__ import annotations

import asyncio
import json
import logging
import os
import signal
from datetime import datetime, timezone

import psycopg
from bullmq import Worker
from psycopg.rows import dict_row

from generated.jobs import QUEUE_NAME, PackBuildJob

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("projectcodex-worker")

STALE_SECONDS = int(os.environ.get("JOB_CLAIM_STALE_SECONDS", "60"))


def _db_url() -> str:
    url = os.environ.get("DATABASE_URL")
    if not url:
        raise RuntimeError("DATABASE_URL is required")
    return url


def try_claim(job_id: str, book_id: str | None, bullmq_id: str | None) -> str:
    """
    Returns: 'claimed' | 'reclaimed' | 'skip_completed' | 'skip_inflight'
    """
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


async def process_job(job, _token):
    raw = job.data
    if isinstance(raw, str):
        raw = json.loads(raw)
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


async def amain() -> None:
    redis_url = os.environ.get("REDIS_URL", "redis://127.0.0.1:6379")
    _db_url()  # fail fast if missing
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
