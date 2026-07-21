/** Queue job contracts — TypeScript is SSOT. Run `pnpm gen:queue` to emit Pydantic. */

export const QUEUE_NAME = "bookfellow-jobs" as const;

export type PackBuildJob = {
  type: "pack.build";
  /** Stable id claimed in Postgres before Gemini (P3). */
  jobId: string;
  bookId: string;
  requestedAt: string;
};

export type JobPayload = PackBuildJob;

export function isPackBuildJob(job: JobPayload): job is PackBuildJob {
  return job.type === "pack.build";
}
