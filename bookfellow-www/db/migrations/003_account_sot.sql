-- M1 Plan 3 / P38 — account SoT
-- Domains in account_preferences.prefs JSONB:
--   appearance (P28) · library (P17) · reading · rail (P37)
-- Per-book entered data (marks, notes, cast, quizzes, companion Edit) → user_book_state (M4+)
-- companion_credits = wallet on user (admin adjust Plan 5; spend/entitlements M10)
-- Do not reshape entitlements here.

ALTER TABLE "user"
  ADD COLUMN IF NOT EXISTS companion_credits INT NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS account_preferences (
  user_id TEXT PRIMARY KEY REFERENCES "user" ("id") ON DELETE CASCADE,
  prefs JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_book_state (
  user_id TEXT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
  book_id TEXT NOT NULL,
  state JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, book_id)
);

CREATE INDEX IF NOT EXISTS user_book_state_book_id_idx
  ON user_book_state (book_id);
