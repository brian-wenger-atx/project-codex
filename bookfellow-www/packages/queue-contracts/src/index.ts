/** Queue job contracts — TypeScript is SSOT. Run `pnpm gen:queue` to emit Pydantic. */

export const QUEUE_NAME = "bookfellow-jobs" as const;

export type PackBuildJob = {
  type: "pack.build";
  /** Stable id claimed in Postgres before Gemini (P3). */
  jobId: string;
  bookId: string;
  requestedAt: string;
};

/** Periodic credit balance scan (Plan 5b) — no Gemini / job_claims. */
export type CreditScanJob = {
  type: "credit.scan";
  requestedAt: string;
};

export type JobPayload = PackBuildJob | CreditScanJob;

export function isPackBuildJob(job: JobPayload): job is PackBuildJob {
  return job.type === "pack.build";
}

export function isCreditScanJob(job: JobPayload): job is CreditScanJob {
  return job.type === "credit.scan";
}
