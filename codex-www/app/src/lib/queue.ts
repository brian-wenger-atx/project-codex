import { Queue } from "bullmq";
import IORedis from "ioredis";
import { QUEUE_NAME, type PackBuildJob } from "@project-codex/queue-contracts";

let connection: IORedis | null = null;

export function getRedisConnection(): IORedis {
  if (!connection) {
    const url = process.env.REDIS_URL || "redis://127.0.0.1:6379";
    connection = new IORedis(url, { maxRetriesPerRequest: null });
  }
  return connection;
}

export function getJobQueue(): Queue<PackBuildJob> {
  return new Queue<PackBuildJob>(QUEUE_NAME, { connection: getRedisConnection() });
}

export async function enqueuePackBuild(
  jobId: string,
  bookId = "lab-smoke",
): Promise<string> {
  const queue = getJobQueue();
  const job: PackBuildJob = {
    type: "pack.build",
    jobId,
    bookId,
    requestedAt: new Date().toISOString(),
  };
  const added = await queue.add("pack.build", job, {
    removeOnComplete: 100,
    removeOnFail: 100,
  });
  return String(added.id);
}

export async function enqueuePackBuildSmoke(bookId = "lab-smoke"): Promise<string> {
  return enqueuePackBuild(`smoke-${Date.now()}`, bookId);
}

/** Seed a stale claimed row so worker reclaim path can be proven. */
export async function seedStaleClaim(
  jobId: string,
  bookId: string,
  staleSeconds = 120,
): Promise<void> {
  const { getDb } = await import("@/lib/db");
  const db = getDb();
  await db.query(
    `INSERT INTO job_claims (job_id, status, claimed_at, book_id)
     VALUES ($1, 'claimed', now() - ($2::text || ' seconds')::interval, $3)
     ON CONFLICT (job_id) DO UPDATE
       SET status = 'claimed',
           claimed_at = now() - ($2::text || ' seconds')::interval,
           completed_at = NULL,
           book_id = EXCLUDED.book_id`,
    [jobId, String(staleSeconds), bookId],
  );
}
