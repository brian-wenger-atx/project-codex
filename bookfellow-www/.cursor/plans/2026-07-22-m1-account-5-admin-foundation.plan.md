---
name: M1 Account — 5 admin foundation
overview: V1 /admin foundation — admin-only shell with users list, disable/enable, companion_credits adjust; nav slot for Invites (filled in Plan 6). No promote/demote UI.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
intake_folded: []
todos:
  - id: admin-shell
    content: "/admin server layout + nav (Users now; Invites placeholder); requireAdmin Node gate (same pattern as /queue — not Edge)"
    status: pending
  - id: users-table
    content: List users (email, role, credits, disabled); disable/enable sets disabled_at
    status: pending
  - id: credits-adjust
    content: Admin API + UI to set/adjust companion_credits (audit-friendly single endpoint)
    status: pending
  - id: no-promote
    content: Confirm no role-edit controls in UI; role remains env-bootstrap only
    status: pending
  - id: gate-verify
    content: Non-admin 403; admin disable + credit bump works; flip umbrella chain-5
    status: pending
isProject: false
---

# M1 Account — Plan 5: admin foundation V1

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [auth UX](2026-07-22-m1-account-4-auth-ux-redeem.plan.md) · next: [invites + email](2026-07-22-m1-account-6-invites-email.plan.md)

**This plan = #5 of 7**

## Plain English

| | |
|---|---|
| **What this is** | The first real **Admin** area — foundation for the eventual back-office, not a throwaway lab page. |
| **What you get** | `/admin` with user list, disable/enable, and manual companion-credit adjust. |
| **Why it matters** | You need ops control now, and a place later modules can grow into (invites next plan, then more). |
| **Your part** | Sign in as an env-bootstrapped admin to use it. |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md) — no extra folds in this child.

## Scope

**In:** `/admin` shell; Users; disable/enable; credit adjust; Invites nav stub.

**Out:** Promote/demote; grant specific book entitlements (M10); full CMS; invite send (Plan 6); billing admin (M13).

## Design

1. Route prefix **`/admin`** (product foundation — not `/lab/admin`). Live-bound: this is the real back-office shell that ports to cloud.
2. Layout: simple sidebar or top subnav — **Users** | **Invites** (Invites page = “coming in Plan 6” stub or empty state).
3. All `/admin/*` gated via shared **`requireAdmin()`** in a **server layout** (same Plan 2 pattern). Unauthed → `/sign-in`; signed-in non-admin → **403**. Do **not** put `requireAdmin` in Edge middleware.
4. Credit adjust: **set absolute** value with confirmation. Migration includes required thin `admin_audit` (`id`, `actor_user_id`, `action`, `payload jsonb`, `created_at`) — write a row on disable/enable and credit set.
5. Disable path calls shared revoke-sessions helper from Plan 1.
6. Mobile-usable table (horizontal scroll OK); no card spam.

## Acceptance

- Non-admin cannot open `/admin` (403; no bounce loop via `/sign-in`)
- Admin lists users, disables one → that user cannot sign in
- Admin sets credits → value shows on reload
- No role dropdown / promote control exists
- Invites nav present (stub OK)

## Habit

Flip umbrella `chain-5-admin` on ship.
