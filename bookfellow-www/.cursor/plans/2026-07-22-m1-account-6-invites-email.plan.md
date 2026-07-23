---
name: M1 Account — 6 invites email
overview: Invite codes table; admin mint + Cloudflare Email Sending; Create-account requires valid invite; distinct from P9 redeem field.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
intake_folded: []
todos:
  - id: migration-invites
    content: "invites table (token hash, email, created_by, expires_at, used_at, used_by); migration + indexes"
    status: pending
  - id: cf-email-sending
    content: Enable CF Email Sending for bookfellow.io; REST client; secrets; from invites@bookfellow.io
    status: pending
  - id: admin-invites-ui
    content: Fill /admin Invites — mint invite (email), send mail with create-account link+token
    status: pending
  - id: gate-create
    content: Create-account requires unused non-expired invite; consume on success; clear errors
    status: pending
  - id: gate-verify
    content: End-to-end mint→email→create; reject without invite; flip umbrella chain-6
    status: pending
isProject: false
---

# M1 Account — Plan 6: invites + email

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [admin foundation](2026-07-22-m1-account-5-admin-foundation.plan.md) · next: [docs cleanup](2026-07-22-m1-account-7-docs-cleanup.plan.md)

**This plan = #6 of 7**

## Plain English

| | |
|---|---|
| **What this is** | Friends can’t just wander in — an admin emails an invite, and Create account only works with that invite. |
| **What you get** | Invite records, email send via Cloudflare, gated signup, admin Invites UI. |
| **Why it matters** | Alpha control without buying a separate auth/invite SaaS. |
| **Your part** | Approve CF Email Sending enable on `bookfellow.io` if not already; API token in secrets (Brian). |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md) — no extra folds in this child.

## Scope

**In:** `invites` schema; mint+send; create-account gate; `/admin` Invites live; runbook notes for DNS/auth (SPF/DKIM via CF).

**Out:** Public waitlist marketing (placeholder already); friends-alpha pack product (M11); redeem/book unlock (M10); OAuth.

## Design

1. **Invite ≠ redeem:** Invite = permission to create an account. Redeem = optional book code (Plan 4) still separate.
2. **Token:** Store **hash** only; email link carries raw token once (`/create-account?invite=…` prefills).
3. **Email:** Cloudflare Email Sending **REST** from Next. From: `invites@bookfellow.io`. Body: create-account **link** + **pasteable invite code**.
4. **App URL:** Links use env **`BOOKFELLOW_APP_URL`** (no trailing slash), default **`http://192.168.1.200:4003`** for M1 lab smoke. Document in runbook: change APP_URL when a Tunnel/public app host exists; pasteable code always works on LAN.
5. **Gate:** Create account **requires** valid unused non-expired invite bound to the signup email. **`BOOKFELLOW_ADMIN_EMAILS` does not bypass** the invite — it only assigns `role=admin` after a successful invited create.
6. **Expiry:** Default 14 days; admin sees pending/used/expired.
7. **Send path:** **Live CF send required.** Brian enables Email Sending on `bookfellow.io` and places the API token in `secrets/bookfellow.env` **before** saying Build Plan 6. If missing at Build, stop with runbook — no dry-run gate.
8. **Cost:** No paid invite product.

## Acceptance

- Admin mints invite → live email delivers with link (lab APP_URL) + pasteable code
- Create with invite succeeds; create without invite fails (including admin allow-list emails)
- Used/expired invite rejected
- Redeem field still optional and independent

## Your part (before Build Plan 6)

1. `npx wrangler email sending enable bookfellow.io` (or dashboard equivalent)
2. API token → `/mnt/DataStore/home/agent/secrets/bookfellow.env`
3. Confirm both admin accounts already exist (created under open signup before this gate)

## Habit

Flip umbrella `chain-6-invites` on ship.
