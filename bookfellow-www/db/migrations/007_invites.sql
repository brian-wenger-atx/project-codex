-- M1 Plan 6 — invite codes (permission to create account; ≠ redeem)

CREATE TABLE IF NOT EXISTS invites (
  id TEXT PRIMARY KEY,
  token_hash TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  created_by TEXT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  used_by TEXT REFERENCES "user" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS invites_email_created_idx
  ON invites (email, created_at DESC);

CREATE INDEX IF NOT EXISTS invites_expires_idx
  ON invites (expires_at);

CREATE INDEX IF NOT EXISTS invites_used_at_idx
  ON invites (used_at);

-- Audit link + ephemeral signup input (always nulled in auth before-hook)
ALTER TABLE "user"
  ADD COLUMN IF NOT EXISTS invite_id TEXT REFERENCES invites (id) ON DELETE SET NULL;

ALTER TABLE "user"
  ADD COLUMN IF NOT EXISTS invite_token_input TEXT;
