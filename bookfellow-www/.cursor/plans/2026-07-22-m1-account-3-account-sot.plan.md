---
name: M1 Account — 3 account SoT
overview: P38 account preferences table + companion_credits; GET/PATCH prefs API; forward-stub user_book_state for M4+; no entitlements grant UI.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
intake_folded: []
todos:
  - id: migration-003-prefs
    content: "003 SQL — account_preferences + companion_credits INT on user; stub user_book_state table empty/minimal"
    status: pending
  - id: prefs-api
    content: Authenticated GET/PATCH /api/account/preferences (LWW); default row on first access
    status: pending
  - id: credits-column
    content: companion_credits INT NOT NULL DEFAULT 0; readable on account; no spend path yet
    status: pending
  - id: gate-verify
    content: Patch a pref, reload/other browser — value persists; flip umbrella chain-3
    status: pending
isProject: false
---

# M1 Account — Plan 3: account SoT (P38)

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [lab lockdown](2026-07-22-m1-account-2-lab-lockdown.plan.md) · next: [auth UX](2026-07-22-m1-account-4-auth-ux-redeem.plan.md)

**This plan = #3 of 7**

## Plain English

| | |
|---|---|
| **What this is** | Putting user settings and companion credits on the server so they survive reload and devices. |
| **What you get** | A preferences row per account, a credit balance admins can later bump, and a named stub for per-book state. |
| **Why it matters** | M2 Appearance/rail and M10 unlocks need this SoT — not `localStorage`. |
| **Your part** | None beyond Build approval later. |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md) — no extra folds in this child.

## Scope

**In:** `account_preferences` table keyed by `user_id` with JSONB `prefs` (Appearance / Library / Reading / rail keys documented); `companion_credits INT` **on user**; GET/PATCH API; `user_book_state` stub (`user_id` × `book_id`).

**Out:** Appearance UI (M2); Library dials UI (M3); spending credits / writing entitlements (M10); admin adjust UI (Plan 5).

## Design

1. Migration after auth (`003_account_sot.sql`).
2. Defaults match product locks where known (e.g. Appearance default Slate+Harbor keys present even if UI later).
3. Only the signed-in user can read/write **their** prefs. Credits on **user** row; readable on GET; writes only from admin paths (Plan 5).
4. Document inventory mapping from P38 in migration comment — full runbook in Plan 7.

## Acceptance

- Signed-in PATCH pref → GET returns it after reload
- Second browser same account sees same pref
- `companion_credits` exists and defaults to 0
- `user_book_state` table exists (unused OK)

## Habit

Flip umbrella `chain-3-account-sot` on ship.
