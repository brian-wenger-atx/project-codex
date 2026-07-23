-- M1 Plan 5 — admin foundation audit trail
-- Writes on disable / enable / credit set (+ anomaly events). No role-edit path.

CREATE TABLE IF NOT EXISTS admin_audit (
  id BIGSERIAL PRIMARY KEY,
  actor_user_id TEXT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
  action TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS admin_audit_actor_created_idx
  ON admin_audit (actor_user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS admin_audit_action_created_idx
  ON admin_audit (action, created_at DESC);
