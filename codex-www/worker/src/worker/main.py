"""BullMQ consumer stub — no Gemini in P2."""

from __future__ import annotations

import asyncio
import json
import logging
import os
import signal

from bullmq import Worker

from generated.jobs import QUEUE_NAME, PackBuildJob

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("projectcodex-worker")


async def process_job(job, _token):
    raw = job.data
    if isinstance(raw, str):
        raw = json.loads(raw)
    payload = PackBuildJob.model_validate(raw)
    # P3: claim job_id in Postgres before Gemini. P2: log only.
    log.info(
        "consumed pack.build job_id=%s book_id=%s bullmq_id=%s",
        payload.job_id,
        payload.book_id,
        job.id,
    )
    return {"ok": True, "jobId": payload.job_id}


async def amain() -> None:
    redis_url = os.environ.get("REDIS_URL", "redis://127.0.0.1:6379")
    worker = Worker(QUEUE_NAME, process_job, {"connection": redis_url})
    log.info("worker listening queue=%s redis=%s", QUEUE_NAME, redis_url)

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
