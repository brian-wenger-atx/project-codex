---
name: M1 Account — 6 invites email
overview: Invite codes table; admin mint + Cloudflare Email Sending; Create-account requires valid invite; distinct from P9 redeem field.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
  - Backlog Invite email / M1 Plan 6 — fold (this plan)
  - Backlog Email stub → CF wire (`admin_notify_pending`) — fold
  - Backlog Email verification (post–CF Sending) — fold (invite-as-verified, consult Q1=a)
  - Backlog login rate limits + password/breached check — leave Plan 7 (consult Q2=a)
  - R1 Auth shell (www-feed Ready) — cite (shipped Plans 1–4)
  - Account close + delete — leave (M5)
intake_folded:
  - Invite mint + CF Email Sending + create-account gate
  - Wire `admin_notify_pending` → live CF send (all ADMIN_EMAILS)
  - Invite-as-verified + resend unused invite
todos:
  - id: migration-invites
    content: "invites table (token hash, email, created_by, expires_at, used_at, used_by); migration + indexes"
    status: completed
  - id: cf-email-sending
    content: Enable CF Email Sending for bookfellow.io; REST client; secrets; from invites@bookfellow.io
    status: completed
  - id: admin-invites-ui
    content: Fill /admin Invites — mint invite (email), send mail with create-account link+token
    status: completed
  - id: gate-create
    content: Create-account requires unused non-expired invite; consume on success; clear errors
    status: completed
  - id: gate-verify
    content: End-to-end mint→email→create; reject without invite; flip umbrella chain-6
    status: completed
isProject: false
---

# M1 Account — Plan 6: invites + email

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [credit security](2026-07-23-m1-account-5b-credit-security.plan.md) · next: [docs cleanup](2026-07-22-m1-account-7-docs-cleanup.plan.md)

**This plan = #6 of 8** (after 5b)

## Plain English

| | |
|---|---|
| **What this is** | Friends can’t just wander in — an admin emails an invite, and Create account only works with that invite. |
| **What you get** | Invite records, email send via Cloudflare, gated signup, admin Invites UI. |
| **Why it matters** | Alpha control without buying a separate auth/invite SaaS. |
| **Your part** | Approve CF Email Sending enable on `bookfellow.io` if not already; API token in secrets (Brian). |

## Also brought in (intake)

| Item | Disposition |
|------|-------------|
| Umbrella invite email lock | **Fold** — inherited |
| Backlog Invite email / Plan 6 | **Fold** — this plan |
| `admin_notify_pending` → live CF | **Fold** — wire in this plan |
| Email verification posture | **Fold** — invite-as-verified (consult Q1=a) |
| Rate limits + password/breached check | **Leave** — Plan 7 (consult Q2=a) |
| R1 auth shell | **Cite** — shipped |
| Account close + delete | **Leave** — M5 |

## Scope

**In:** `invites` schema; mint+send; create-account gate; `/admin` Invites live; wire `admin_notify_pending` → CF; email-verify posture (per consult); runbook notes for DNS/auth (SPF/DKIM via CF). Secrets: CF API token **and** account id.

**Out:** Public waitlist marketing (placeholder already); friends-alpha pack product (M11); redeem/book unlock (M10); OAuth; rate limits + password/breached check (**Plan 7**).

## Locked decisions (full review consult 2026-07-23)

| Topic | Lock |
|-------|------|
| Email verify | **Invite-as-verified** — set `"emailVerified"=true` on successful invited create for that address (Q1=a) |
| Auth harden | **Plan 7** — rate limits + password/breached stay out of Plan 6 (Q2=a) |
| Admin alerts | CF send to **every** `BOOKFELLOW_ADMIN_EMAILS` address (Q3=a) |
| Resend | **Resend unused** invite row; **token rotates** on resend (hash-only SoT — old email links die) (Q4=a) |
| CF secrets | `CLOUDFLARE_ACCOUNT_ID` + `CLOUDFLARE_EMAIL_API_TOKEN` — fail closed if unset |

## Design

1. **Invite ≠ redeem:** Invite = permission to create an account. Redeem = optional book code (Plan 4) still separate.
2. **Token:** Store **hash** only; email link carries raw token once (`/create-account?invite=…` prefills).
3. **Email:** Cloudflare Email Sending **REST** from Next. From: `invites@bookfellow.io`. Body: create-account **link** + **pasteable invite code**.
4. **App URL:** Links use env **`BOOKFELLOW_APP_URL`** (no trailing slash), default **`http://192.168.1.200:4003`** for M1 lab smoke. Document in runbook: change APP_URL when a Tunnel/public app host exists; pasteable code always works on LAN.
5. **Gate:** Create account **requires** valid unused non-expired invite bound to the signup email. **`BOOKFELLOW_ADMIN_EMAILS` does not bypass** the invite — it only assigns `role=admin` after a successful invited create. Consume **atomically** with user create; normalize emails lowercase.
6. **Expiry:** Default 14 days; admin sees pending/used/expired.
7. **Send path:** **Live CF send required.** Fail closed if CF secrets missing — no dry-run gate. Resend reuses unused token.
8. **Cost:** No paid invite product.

## Acceptance

- Admin mints invite → live email delivers with link (lab APP_URL) + pasteable code
- Create with invite succeeds; create without invite fails (including admin allow-list emails)
- Used/expired invite rejected
- Redeem field still optional and independent

## Your part (before Build Plan 6)

1. `npx wrangler email sending enable bookfellow.io` (or dashboard equivalent); confirm SPF/DKIM via `wrangler email sending dns get bookfellow.io`
2. CF Email Sending **API token + account id** → `/mnt/DataStore/home/agent/secrets/bookfellow.env` (names locked at Build into `.env.example`)
3. Confirm both admin accounts already exist (created under open signup before this gate)

## Full review / consult (2026-07-23)

- CP1 Bugbot: no findings.
- Consult: Q1–Q4 all **a** — locks above. Brian said Build same turn.

## Ship notes (2026-07-23)

- Workers Paid purchased; CF secrets injected; `bookfellow-web:p6` live.
- Smoke: CF send API `success=true` to first admin; create without invite rejected; create with invite → `emailVerified=true` + invite consumed; reuse rejected.
- Umbrella `chain-6-invites` flipped.

## Habit

Flip umbrella `chain-6-invites` on ship.
