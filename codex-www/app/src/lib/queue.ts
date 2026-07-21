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

export async function enqueuePackBuildSmoke(bookId = "lab-smoke"): Promise<string> {
  const queue = getJobQueue();
  const job: PackBuildJob = {
    type: "pack.build",
    jobId: `smoke-${Date.now()}`,
    bookId,
    requestedAt: new Date().toISOString(),
  };
  const added = await queue.add("pack.build", job, {
    removeOnComplete: 100,
    removeOnFail: 100,
  });
  return String(added.id);
}
