---
name: M1 Account — 5 admin foundation
overview: V1 /admin — users list, disable/enable (peer-admin needs off-site master secret), absolute companion_credits with floor 0 + exploit checks; top subnav; Invites stub. No promote UI.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
  - Admin foundation V1 (backlog Security/Account) — cite (this plan is the vehicle)
  - E — Account close + delete (backlog alpha/beta) — leave (M5-adjacent; disable ≠ delete)
  - R4 Unlock / credits UX (www-feed Ready) — leave (M11 spend/language; this plan = admin wallet set only)
  - R1 Auth shell (www-feed Ready) — cite (umbrella; Plans 1–4 shipped)
  - Moderator / promote UI — leave (umbrella lock)
intake_folded: []
todos:
  - id: admin-shell
    content: "/admin server layout + top subnav (Users | Invites stub); requireAdmin Node gate (queue pattern — not Edge); quiet link from /queue"
    status: completed
  - id: users-table
    content: List users (email, role, credits, disabled); disable/enable with self-disable block + peer-admin master secret
    status: completed
  - id: peer-admin-secret
    content: BOOKFELLOW_ADMIN_PEER_DISABLE_SECRET from secrets only; required to disable another admin; never settable via web UI
    status: completed
  - id: credits-adjust
    content: Absolute companion_credits set (confirm, ≥0); harden validation + anomaly/exploit detection; admin_audit
    status: completed
  - id: admin-audit-migration
    content: "005 SQL — thin admin_audit (id, actor_user_id, action, payload jsonb, created_at) + indexes"
    status: completed
  - id: no-promote
    content: Confirm no role-edit controls in UI; role remains env-bootstrap only
    status: completed
  - id: gate-verify
    content: Non-admin 403; user disable; peer-admin disable needs secret; credit set + anomaly path; flip chain-5
    status: completed
isProject: false
---

# M1 Account — Plan 5: admin foundation V1

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [auth UX](2026-07-22-m1-account-4-auth-ux-redeem.plan.md) · next: [invites + email](2026-07-22-m1-account-6-invites-email.plan.md)

**This plan = #5 of 7**

## Plain English

| | |
|---|---|
| **What this is** | The first real **Admin** area — foundation for the eventual back-office, not a throwaway lab page. |
| **What you get** | `/admin` with user list, disable/enable (extra lock when disabling another admin), and manual companion-credit adjust. |
| **Why it matters** | Ops control now, growth shell for invites next, and a hard “never lock myself out” rule between admin accounts. |
| **Your part** | Sign in as env-bootstrapped admin; set peer-disable secret only in NAS secrets (never on the site). |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md). Matcher re-scan: **cite** backlog Admin V1 (this vehicle) + R1; **leave** account-delete (≠ disable), R4 spend UX, promote UI. No new folds.

## Scope

**In:** `/admin` shell (top subnav); Users; disable/enable with self-block + peer-admin master secret; absolute credit set (≥0) with validation + exploit/anomaly detection; `admin_audit`; Invites stub; quiet `/queue` → `/admin` link.

**Out:** Promote/demote; grant book entitlements (M10/M11); full CMS; invite send (Plan 6); billing admin (M13); self-serve account **delete** (M5 — distinct from disable); pagination/search beyond lab-scale list; setting the peer-disable secret via any website UI.

## Design

1. Route prefix **`/admin`** (product foundation — not `/lab/admin`). Live-bound back-office shell.
2. **Top subnav:** **Users** | **Invites** (Invites = Plan 6 stub). Mobile-first; no card spam.
3. Gate via **`requireAdmin()`** in server layout (Plan 2): unauthed → `/sign-in`; non-admin → soft 403; APIs 401/403. Not Edge middleware.
4. Quiet **Admin** link on `/queue` (already admin-only) + direct `/admin` URL until M2 rail.
5. **Disable rules (consult lock):**
   - **Self-disable always refused** (API + UI).
   - **role=user:** admin may disable/enable with confirm; no extra secret.
   - **role=admin (peer):** disable requires **`BOOKFELLOW_ADMIN_PEER_DISABLE_SECRET`** — value lives only in `secrets/bookfellow.env` (NAS / off-site files). Constant-time compare. **Never** readable, writable, or rotatable via the website. If secret unset/empty → peer-admin disable fails closed (clear error). Enable peer admin: no secret (recovery path).
6. Disable: set `disabled_at` → **`revokeUserSessions`**. Enable: clear `disabled_at` only. **Disable ≠ delete** (M5 purge).
7. Credits: **set absolute** with confirm; **floor ≥ 0**; no artificial max. Prefs PATCH already rejects credits.
8. **Credit exploit posture (consult lock):** reject non-integers / NaN / overflow; requireAdmin on every write; audit before→after + actor; detect anomalies (e.g. huge delta, rapid repeated sets) → refuse or accept-with-`payload.anomaly` flag + distinct audit `action` so ops can see abuse attempts. No website path to bypass the admin API.
9. Migration **`005_admin_audit.sql`**: `admin_audit` (`id`, `actor_user_id`, `action`, `payload` jsonb, `created_at`). Rows on disable/enable/credit set (+ anomaly events).
10. No role edit / promote / demote in UI or admin API.

## Acceptance

- Non-admin → soft 403 on `/admin`; unauthed → `/sign-in` (no bounce loop)
- `/queue` shows quiet Admin link for admins
- Admin disables a **user** → cannot sign in; sessions revoked
- Self-disable refused; peer-admin disable without secret refused; with correct secret succeeds
- Peer-disable secret cannot be changed from the site
- Admin sets credits (≥0) → reload shows value; audit row; bad/anomaly attempts leave a detectable trail (and refuse when appropriate)
- No promote/role controls; Invites nav stub present

## Full review / consult (Plan 5 — 2026-07-22)

| Topic | Lock |
|-------|------|
| Disable safety | Block self-disable; peer-admin disable needs off-site master secret (Q1=a + Brian) |
| Admin entry | Quiet link from `/queue` + URL (Q2=a) |
| Credits | Floor ≥ 0; no max; harden + exploit/anomaly detection (Q3=a + Brian) |
| Chrome | Top subnav (Q4=a) |

## Shipped (2026-07-22)

Lab `bookfellow-web:p5` live. Migration `005_admin_audit` applied. Unauthed `/admin` → `/sign-in`; `/api/admin/users` → 401. Peer secret in NAS secrets only.

## Habit

Flip umbrella `chain-5-admin` on ship. Document peer-disable secret in containers runbook (set/rotate via secrets only).
