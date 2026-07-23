---
name: M1 Account — 3 account SoT
overview: P38 account preferences table + companion_credits; GET/PATCH prefs API (deep-merge); forward-stub user_book_state with jsonb; no entitlements grant UI.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
  - P38 / R1 account persistence (www-feed Ready) — cite (umbrella-folded; this child is the vehicle)
  - Account persistence (P38) backlog row — cite (already Plan 3 vehicle; no new scope)
  - user-state lane + persistence inventory — cite (account-scoped keys + per-book stub)
  - Appearance Slate+Harbor (product IA locks) — fold (default prefs keys locked this consult)
  - entitlements table (001_init) — leave (grant/spend M10/M11; do not reshape)
  - Admin credit adjust UI — leave (Plan 5)
  - P9 redeem / pending_redeem_code — leave (Plan 4)
  - R2 Library+rail+Appearance UI — leave (M2/M3)
  - R3/P29 per-book companion — leave (M4; stub only here)
  - R4 unlock/credits UX — leave (M10/M11)
  - Redis ready / rename __projectCodexDb — leave (Plan 7)
  - Remnant registry paths (www intake-sources) — leave (none seeded)
intake_folded:
  - Locked account-scoped default prefs keys (Slate+Harbor + Library/Reading/rail defaults from P38 inventory)
todos:
  - id: migration-003-prefs
    content: "003 SQL — account_preferences (prefs jsonb + updated_at); ALTER user companion_credits; user_book_state (PK + state jsonb + updated_at)"
    status: completed
  - id: prefs-api
    content: Authenticated GET/PATCH /api/account/preferences — deep-merge domains; lazy default row; return companion_credits on GET
    status: completed
  - id: credits-column
    content: companion_credits INT NOT NULL DEFAULT 0 on user; SQL/app only (not Better Auth additionalFields); no spend path
    status: completed
  - id: gate-verify
    content: Patch one domain, reload/other browser persists; credits default 0; stub table exists; flip umbrella chain-3
    status: completed
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

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md). **Consult fold:** locked default prefs key inventory (Slate+Harbor + account-scoped Library/Reading/rail defaults from P38).

**Cited / left (re-scan 2026-07-22):** backlog P38 row = this plan; redeem → Plan 4; Appearance/Library UI → M2/M3; per-book companion → M4; unlock UX → M10/M11; entitlements reshape → leave; Plan 7 chores → leave. Www remnant registry has **no extra seeded paths**.

## Scope

**In:** `account_preferences` (`user_id` PK, `prefs` JSONB, `updated_at`); `companion_credits INT` on `"user"` (SQL/app only); GET/PATCH `/api/account/preferences`; `user_book_state` stub (`user_id` × `book_id`, `state` jsonb, `updated_at`).

**Out:** Appearance UI (M2); Library dials UI (M3); spending credits / writing entitlements (M10); admin adjust UI (Plan 5); Better Auth session fields for credits.

## Design

1. Migration `003_account_sot.sql` after `002_auth`.
2. **`account_preferences`:** one row per user; create **lazily on first GET** with defaults below; `updated_at` on write.
3. **PATCH:** authenticated user only; **deep-merge** top-level domains (`appearance`, `library`, `reading`, `rail`) and nested keys under each. Unknown top-level keys allowed (forward-compat). Do **not** replace the whole blob unless client sends every domain intentionally (merge is the contract).
4. **GET:** returns `{ prefs, companion_credits }` for the signed-in user (credits read-only here).
5. **`companion_credits`:** `ALTER TABLE "user" ADD companion_credits INT NOT NULL DEFAULT 0`. App SQL only — **not** Better Auth `additionalFields`. Writes = Plan 5 admin only.
6. **`user_book_state`:** `(user_id, book_id)` PK + `state jsonb NOT NULL DEFAULT '{}'` + `updated_at`. Unused in this plan OK.
7. **Default `prefs` (locked):**
   ```json
   {
     "appearance": { "background": "slate", "accent": "harbor", "theme": "system" },
     "library": { "viewMode": "covers", "size": "M", "sortMode": "recent", "customOrder": [], "pinMode": "recent", "pins": [] },
     "reading": { "openCompanionByDefault": true, "overviewCompactPhone": true },
     "rail": { "collapsed": false }
   }
   ```
8. Migration comment maps domains → P38 inventory; full runbook in Plan 7. Do not touch `entitlements`.

## Acceptance

- Signed-in PATCH one domain → GET returns merged prefs after reload
- Second browser same account sees same pref
- `companion_credits` exists, defaults to 0, appears on GET
- `user_book_state` table exists with jsonb stub (unused OK)
- Credits not exposed as Better Auth client-writable fields

## Habit

Flip umbrella `chain-3-account-sot` on ship.

**Shipped 2026-07-22:** `003_account_sot.sql` applied; GET/PATCH `/api/account/preferences` live on lab `:4003`; smoke: unauth 401, lazy defaults (Slate+Harbor), deep-merge PATCH, second-session persist, credits default 0 + PATCH reject, `user_book_state` present.

---

## Full review / consult (2026-07-22)

| Topic | Lock |
|-------|------|
| PATCH | Deep-merge top-level domains (Q1=a) |
| `user_book_state` | PK + `state jsonb` + `updated_at` (Q2=a) |
| Default prefs keys | Locked account-scoped inventory now (Q3=a) |
| Credits wiring | SQL + prefs GET only; no BA `additionalFields` (Q4=a) |

CP1 Bugbot: clean. Intake re-scan after answers: no additional remnant folds beyond default-keys lock.
