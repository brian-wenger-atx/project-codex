-- M1 Plan 4 / P9 — Create-account redeem wire (fulfillment M11 Unlock UX)
-- Attribution seed for later publisher count/bill; no unlock here.

ALTER TABLE "user"
  ADD COLUMN IF NOT EXISTS pending_redeem_code TEXT NULL;
