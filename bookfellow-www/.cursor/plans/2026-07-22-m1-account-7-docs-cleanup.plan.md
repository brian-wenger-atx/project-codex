---
name: M1 Account — 7 docs cleanup
overview: Auth/admin/invites runbook; stack.md Better Auth lock; rename __projectCodexDb; Redis in ready; pins + business-feed; full M1 module smoke.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
intake_folded: []
todos:
  - id: runbook-account
    content: docs/runbooks/account-auth-admin.md — auth, admin, invites, smoke curls, secrets list
    status: pending
  - id: stack-auth-line
    content: Update docs/stack.md Auth row to Better Auth + explicit SQL
    status: pending
  - id: rename-db-global
    content: Rename __projectCodexDb → __bookfellowDb in app/src/lib/db.ts
    status: pending
  - id: redis-ready
    content: Ping Redis in /api/health/ready alongside Postgres
    status: pending
  - id: pins-feed-smoke
    content: Module smoke checklist; build-order M1 set-ready; backlog; business-feed Shipped; flip chain-7 + all umbrella todos
    status: pending
isProject: false
---

# M1 Account — Plan 7: docs + cleanup

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [invites + email](2026-07-22-m1-account-6-invites-email.plan.md) · **chain closer**

**This plan = #7 of 7**

## Plain English

| | |
|---|---|
| **What this is** | Write down how Account works, tidy leftovers, and prove the whole M1 smoke list. |
| **What you get** | Runbook + stack lock + health ready includes Redis + pins/feed updated + M1 ready to call set. |
| **Why it matters** | Next module (M2) should not rediscover auth by archaeology. |
| **Your part** | Confirm module smoke on lab if you want a human pass; agent runs checklist in Build. |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md) — no extra folds in this child.

## Scope

**In:** Docs, rename, Redis ready, pins, reverse feed, umbrella close, module smoke.

**Out:** New features; M2 chrome.

## Design

1. Runbook covers: env vars (`BOOKFELLOW_ADMIN_EMAILS`, `BOOKFELLOW_APP_URL`, CF email token, DB URLs), migrate order, admin bootstrap **before invite gate**, invite mint, queue smoke as admin (cookie), disable user; note durable headers shipped in Plan 2 and **CSP deferred to M12**.
2. [`docs/stack.md`](../../docs/stack.md) Auth cell → Better Auth (email/password); schema via explicit SQL migrations. *(May already be updated mid-chain — verify.)* Confirm live-bound / hard-rule 7 still present.
3. Redis ping in [`health/ready/route.ts`](../../app/src/app/api/health/ready/route.ts) using existing Redis URL pattern from queue lib.
4. [`docs/business-feed.md`](../../docs/business-feed.md) Shipped row: Account module (auth, admin foundation, invite email) — filter-matching ship.
5. build-order: M1 marked set only after smoke; Active → M2 queued.

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
