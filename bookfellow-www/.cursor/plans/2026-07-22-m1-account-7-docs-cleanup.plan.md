---
name: M1 Account — 7 docs cleanup
overview: Auth/admin/invites runbook; stack.md verify; rename verify; Redis ready fail-closed; auth harden (12-char + HIBP + DB rate limits); pins + business-feed; full M1 module smoke.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
  - Backlog Auth harden (PII/login) — fold (this plan; Plan 6 consult Q2=a)
  - Backlog Docs / Redis ready / rename db global — fold (this plan)
  - Backlog M1 remaining (Plan 7) — fold (this plan)
  - docs/stack.md Auth Better Auth — cite (already locked mid-chain; verify + PII link)
  - R1 Auth shell (www-feed Ready) — cite (shipped Plans 1–4)
  - P33 / CSP — leave (M12)
  - Admin MFA / user MFA — leave (pre-public / business)
  - Account close + delete — leave (M5)
intake_folded:
  - Auth harden — rate limits + password policy/breached + cookie/lifetime docs
  - Redis ping in /api/health/ready
  - Runbook account-auth-admin + pins/feed/module smoke
  - Rename verify (__bookfellowDb already done mid-chain)
todos:
  - id: runbook-account
    content: docs/runbooks/account-auth-admin.md — auth, admin, invites, cookies/lifetimes, PII-in-logs habit, smoke curls, secrets list
    status: completed
  - id: stack-auth-line
    content: Verify docs/stack.md Auth = Better Auth + explicit SQL; link PII posture (may already be current)
    status: completed
  - id: rename-db-global
    content: Verify __bookfellowDb rename (already done mid-chain in app/src/lib/db.ts)
    status: completed
  - id: auth-harden-close
    content: "Land minPasswordLength 12 + haveIBeenPwned + rateLimit (database storage); document cookies + 7d/1d lifetimes + invite-as-verified"
    status: completed
  - id: redis-ready
    content: Ping Redis in /api/health/ready — fail closed (503) when Redis down
    status: completed
  - id: pins-feed-smoke
    content: Module smoke checklist; build-order M1 set-ready; backlog; business-feed Shipped; flip chain-7 + all umbrella todos
    status: completed
isProject: false
---

# M1 Account — Plan 7: docs + cleanup

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [invites + email](2026-07-22-m1-account-6-invites-email.plan.md) · **chain closer**

**This plan = #7 of 8** (closer; after 5b)

## Plain English

| | |
|---|---|
| **What this is** | Write down how Account works, tidy leftovers, and prove the whole M1 smoke list. |
| **What you get** | Runbook + stack lock + health ready includes Redis + pins/feed updated + M1 ready to call set. |
| **Why it matters** | Next module (M2) should not rediscover auth by archaeology. |
| **Your part** | Confirm module smoke on lab if you want a human pass; agent runs checklist in Build. |

## Also brought in (intake)

| Item | Disposition |
|------|-------------|
| Umbrella inherited | **Fold** — closer scope only |
| Backlog Auth harden (rate limits · password/breached · cookie docs) | **Fold** — this plan (Plan 6 consult Q2=a) |
| Backlog Docs / Redis ready / rename | **Fold** — this plan; rename = verify (already `__bookfellowDb`) |
| Backlog M1 remaining Plan 7 | **Fold** — this plan |
| stack.md Auth Better Auth | **Cite** — verify + link PII posture |
| R1 auth shell | **Cite** — shipped |
| P33 / CSP · MFA · account delete · column-encrypt | **Leave** — M12 / pre-public / M5 / later |

## Scope

**In:** Docs, rename **verify**, Redis ready, pins, reverse feed, umbrella close, module smoke. **Auth harden (required here):** Plan 6 left rate limits + password policy/breached-password check for Plan 7 — land them; document cookie flags (`HttpOnly` / `Secure` / `SameSite`) + session idle/absolute lifetimes in the account runbook; confirm invite-as-verified posture (already shipped Plan 6).

**Out:** New product surfaces; M2 chrome; CSP (M12); MFA (pre-public); column-encrypt PII.

## Locked decisions (full review consult 2026-07-23)

| Topic | Lock |
|-------|------|
| Password min | **12** chars + `haveIBeenPwned` (Q1=b; Brian reconfirmed 2026-07-23 — NIST 15 not for v1) |
| Rate-limit storage | Better Auth `rateLimit` with **database** storage; customRules for sign-in/sign-up (+ reset if present) (Q2=a) |
| Redis ready | **Fail closed** — 503 when Redis ping fails; JSON includes `db` + `redis` (Q3=a) |
| Session lifetimes | **Document** Better Auth defaults: `expiresIn` 7d absolute, `updateAge` 1d; cookie `HttpOnly` / `Secure` (HTTPS) / `SameSite` (Q4=a) |

## Design

1. Runbook covers: env vars (`BOOKFELLOW_ADMIN_EMAILS`, `BOOKFELLOW_APP_URL`, CF email token/account id, `BOOKFELLOW_ADMIN_MASTER_SECRET`, DB URLs, `BETTER_AUTH_SECRET`, `REDIS_URL`), migrate order, admin bootstrap **before invite gate**, invite mint, queue smoke as admin (cookie), disable user; credit anomaly/freeze; note durable headers shipped in Plan 2 and **CSP deferred to M12**; **session cookie attributes + 7d/1d lifetimes** (ASVS V7); **no PII in logs** habit; full umbrella M1 set checklist.
2. [`docs/stack.md`](../../docs/stack.md) Auth cell → already Better Auth mid-chain — **verify** + link backlog § Security / PII posture. Confirm live-bound / hard-rule 7 still present.
3. Redis ping in [`health/ready/route.ts`](../../app/src/app/api/health/ready/route.ts) via existing [`getRedisConnection()`](../../app/src/lib/queue.ts) — **fail closed** (consult Q3=a).
4. [`docs/business-feed.md`](../../docs/business-feed.md) Shipped row: Account module (auth, admin foundation, invite email) — filter-matching ship.
5. build-order: M1 marked set only after smoke; Active → M2 queued.
6. **Auth harden gate:** `minPasswordLength: 12` + `haveIBeenPwned` plugin; `rateLimit` enabled with **database** storage + path rules for sign-in/sign-up (+ reset if present); document invite-as-verified (already true on invited create).

## Module smoke (must all pass)

Per umbrella “M1 set” list (invite path, session/prefs, queue admin gate, admin credits/disable, redeem field + invite required).

## Acceptance

- Runbook + stack updated
- `__bookfellowDb` rename done
- Ready returns db + redis ok
- Pins + business-feed updated
- Umbrella todos all completed

## Habit

Flip `chain-7-docs`; archive habit after Brian ships chain if that’s the www pattern.

## Full review / consult (2026-07-23)

- CP1 Bugbot: no findings (recorded).
- Cross-check: rename + stack Auth already current; ready still DB-only; auth harden not in `auth.ts` yet; runbook missing; umbrella M1 set list is smoke SoT.
- Intake: folded Auth harden + Docs/Redis/rename + M1 Plan 7; left CSP/MFA/delete/column-encrypt.
- Consult: Q1=b, Q2=a, Q3=a, Q4=a — locks above.

## Ship notes (2026-07-23)

- Auth harden: `minPasswordLength: 12`, `haveIBeenPwned()`, `rateLimit` database + path rules; migration `008_rate_limit.sql`.
- Ready fail-closed with `db` + `redis`; image `bookfellow-web:p7`.
- Runbook `docs/runbooks/account-auth-admin.md`; stack Auth + PII link; rename verified (`__bookfellowDb`).
- Smoke: ready ok; sign-in 429 after 3; short password + HIBP compromised rejected; queue unauth 401.
- CP2: business silo doc findings waived (pre-existing; not Plan 7).
- Umbrella `chain-7-docs` flipped; M1 set → Active M2.
