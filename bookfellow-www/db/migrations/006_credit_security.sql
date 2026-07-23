-- M1 Plan 5b — credit freeze + balance snapshots for scan job

ALTER TABLE "user"
  ADD COLUMN IF NOT EXISTS credits_frozen_at TIMESTAMPTZ NULL;

CREATE TABLE IF NOT EXISTS credit_balance_snapshots (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
  companion_credits INT NOT NULL,
  taken_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS credit_balance_snapshots_user_taken_idx
  ON credit_balance_snapshots (user_id, taken_at DESC);
