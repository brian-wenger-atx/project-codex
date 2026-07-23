-- M1 Plan 7 — Better Auth rateLimit table (database storage)

CREATE TABLE IF NOT EXISTS "rateLimit" (
  "id" TEXT PRIMARY KEY,
  "key" TEXT NOT NULL UNIQUE,
  "count" INTEGER NOT NULL,
  "lastRequest" BIGINT NOT NULL
);

CREATE INDEX IF NOT EXISTS "rateLimit_lastRequest_idx"
  ON "rateLimit" ("lastRequest");
