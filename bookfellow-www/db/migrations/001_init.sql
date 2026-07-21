-- P3 schema: job claims (hard rule 5) + entitlements skeleton (hard rule 4)

CREATE TABLE IF NOT EXISTS job_claims (
  job_id TEXT PRIMARY KEY,
  status TEXT NOT NULL CHECK (status IN ('claimed', 'completed', 'failed')),
  claimed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  bullmq_id TEXT,
  book_id TEXT
);

CREATE INDEX IF NOT EXISTS job_claims_status_claimed_at_idx
  ON job_claims (status, claimed_at);

CREATE TABLE IF NOT EXISTS entitlements (
  user_id TEXT NOT NULL,
  book_id TEXT NOT NULL,
  granted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  source TEXT NOT NULL DEFAULT 'lab',
  PRIMARY KEY (user_id, book_id)
);

CREATE INDEX IF NOT EXISTS entitlements_book_id_idx ON entitlements (book_id);
