---
name: M1 Account — 2 lab lockdown
overview: Gate /api/queue/smoke and /queue to admin only; durable security headers (no CSP yet); fail-fast if BETTER_AUTH_SECRET missing at runtime; Redis requirepass + compose/REDIS_URL; update containers runbook for authenticated admin smoke.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
  - Lock down queue smoke (backlog Security/Account) — fold (this plan is the vehicle; already umbrella-folded)
  - R1 Auth shell (www-feed Ready) — cite (Plan 1 shipped; lockdown depends on it)
  - Hostname / public cutover / CSP — leave (M12 / cloud)
  - Fail-fast BETTER_AUTH_SECRET (2026-07-22 production-shape audit) — fold
  - Redis AUTH / host-port hardening (same audit) — fold (requirepass; keep loopback publish)
  - Full WAF / rate-limit product — leave (Plan 2 Out)
intake_folded:
  - Fail-fast BETTER_AUTH_SECRET at runtime (not during next build)
  - Redis requirepass + REDIS_URL / secrets / compose-live bookfellow
todos:
  - id: require-admin-helper
    content: Export requireAdmin() in lib/auth.ts (Node layouts/API only — not Edge middleware)
    status: completed
  - id: gate-queue-api
    content: Require admin session on POST /api/queue/smoke (401 no session / 403 non-admin)
    status: completed
  - id: gate-queue-page
    content: Server layout gate for /queue; unauthed→/sign-in; non-admin→403 page; keep client tools page
    status: completed
  - id: headers-config
    content: next.config headers — nosniff, Referrer-Policy, X-Frame-Options (no CSP this plan)
    status: completed
  - id: auth-secret-failfast
    content: Fail closed at runtime if BETTER_AUTH_SECRET unset/empty/placeholder; build-only placeholder when no DATABASE_URL
    status: completed
  - id: redis-requirepass
    content: REDIS_PASSWORD in secrets; compose requirepass + AUTH healthcheck; REDIS_URL from password for web/worker; propose→apply
    status: completed
  - id: runbook-smoke
    content: Update docs/runbooks/containers.md — admin cookie-jar curls, secret fail-fast note, Redis AUTH; page warning copy
    status: completed
  - id: gate-verify
    content: Prove unauthed + signed-in user denied; admin OK; Redis AUTH works; flip umbrella chain-2
    status: completed
isProject: false
---
# M1 Account — Plan 2: lab lockdown

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [foundation](2026-07-22-m1-account-1-foundation.plan.md) · next: [account SoT](2026-07-22-m1-account-3-account-sot.plan.md)

**This plan = #2 of 7**

## Plain English

| | |
|---|---|
| **What this is** | Closing open lab smoke tools and tightening auth/Redis so the NAS lab is production-shaped, not throwaway. |
| **What you get** | Only admins hit `/queue` and `/api/queue/smoke`; durable baseline security headers; app refuses to start without a real auth secret; Redis requires a password. |
| **Why it matters** | Smoke paths were unauthenticated lab proofs; weak secret fallback and passwordless Redis are misconfig risks that must not port to cloud. Gates and hardening are **product-shaped**, not throwaway NAS hacks. |
| **Your part** | Use an admin session for smoke curls after this ships; Redis password lives in `secrets/bookfellow.env` (never chat/git). |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md). Backlog “Lock down queue smoke” is this plan. **2026-07-22 audit folds:** runtime `BETTER_AUTH_SECRET` fail-fast; Redis `requirepass`. Public hostname + real CSP stay M12. Rate-limit / WAF stay Out.

## Scope

**In:** `requireAdmin()`; admin gate on [`queue/smoke/route.ts`](../../app/src/app/api/queue/smoke/route.ts) + server gate for [`queue/page.tsx`](../../app/src/app/queue/page.tsx); durable headers; **fail-fast auth secret**; **Redis requirepass** (hub compose carve-out `bookfellow` + secrets); runbook + page warning copy.

**Out:** CSP; Full WAF / rate-limit product; Host allowlist; public hostname cutover (cloud / M12); drop Redis host publish (keep loopback for host tooling).

## Design

1. **`requireAdmin()`** in [`lib/auth.ts`](../../app/src/lib/auth.ts) on top of `getSessionUser` — `role === 'admin'` and not disabled. **Node only** (route handlers + Server Components / layouts). Do **not** call it from Edge middleware (Plan 5 reuses the same layout pattern).
2. API `POST /api/queue/smoke`: 401 if no session; 403 if session but not admin.
3. **`/queue` page is `"use client"`** — gate in a **server `app/queue/layout.tsx`** (or server wrapper) before the client UI is served. API gate alone is not enough.
4. **Browser denial (consult lock):** unauthenticated → redirect `/sign-in`; signed-in non-admin → **soft 403 Forbidden page** (no redirect to `/sign-in` — that bounces home via middleware).
5. **Headers (consult lock):** [`next.config.ts`](../../app/next.config.ts) `headers()` for all routes — `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options` (DENY or SAMEORIGIN). **No Content-Security-Policy in this plan** — defer real CSP to public cutover (M12) so we don’t ship a weak policy that looks “done.”
6. **Hostname habit:** runbook note only — lab host stays on LAN `:4003`; do not put a public hostname on this stack in M1. No Host allowlist in this plan.
7. **Runbook (consult lock):** admin **cookie-jar** `curl -b` examples for job-claim proofs; browser `/queue` remains a valid admin smoke path. Update queue page warning — remove “without auth” as status quo.
8. **Auth secret fail-fast (audit fold):** In [`lib/auth.ts`](../../app/src/lib/auth.ts), at **runtime** (when `DATABASE_URL` is set), require `BETTER_AUTH_SECRET` non-empty and **not** equal to the build placeholder string — throw otherwise. Placeholder allowed **only** on the inert `next build` path (no `DATABASE_URL`). Document in runbook + `.env.example`.
9. **Redis requirepass (audit fold + consult revise):**
   - **`REDIS_PASSWORD`** + **`REDIS_URL=redis://:${REDIS_PASSWORD}@redis:6379`** in `secrets/bookfellow.env` (canonical pair). Compose uses `${REDIS_URL}` for web/worker and `${REDIS_PASSWORD}` for redis env — do **not** inline password into compose list args (propose redaction misses bare list values).
   - Redis service: shell `redis-server --requirepass "$$REDIS_PASSWORD"` with `REDIS_PASSWORD` / `REDISCLI_AUTH` in environment (AUTH healthcheck via `REDISCLI_AUTH`).
   - Keep host publish `127.0.0.1:6379` (AUTH required for host tooling).
   - Hub carve-out: stage → `compose-live.sh propose bookfellow` → apply same turn. Update hub `docs/apps/bookfellow.md` + www containers runbook. Never print password in chat/git. Rotate if propose/diff ever leaks.

## Acceptance

- Unauthed POST smoke → 401
- Signed-in `user` POST → 403; browser gets Forbidden (not a bounce loop)
- Admin → smoke still works (API + `/queue`)
- Unauthed / non-admin do not receive a usable queue UI shell from the server
- Response headers include nosniff / referrer / frame; **no CSP header** yet
- App without `BETTER_AUTH_SECRET` (or with placeholder) fails closed at runtime (build still works)
- Web + worker enqueue/claim with passworded Redis; unauthenticated `redis-cli` without `-a` fails
- Redis container **healthy** with AUTH healthcheck
- Runbook curls work with documented admin cookie; page copy matches; Redis/secret notes present

## Full review / consult (Plan 2 — 2026-07-22)

CP1 folded; consult locks:

| Topic | Lock |
|-------|------|
| Non-admin `/queue` | Soft **403** page (Q1=a) |
| Headers / CSP | Durable headers only; **CSP deferred** (Q2=b) |
| Smoke proof | Cookie-jar curl + browser OK (Q3=a) |
| Server gate | `queue/layout.tsx` + `requireAdmin` Node-only |
| Live-bound | Product code ports; NAS = host only (standing req) |
| Auth secret | **Fail-fast** if unset/empty/**placeholder** at runtime |
| Redis | **`REDIS_PASSWORD`** → compose `REDIS_URL` + requirepass; **AUTH healthcheck**; keep loopback publish |

## Habit

Flip umbrella `chain-2-lockdown` on ship.

**Shipped 2026-07-22:** Admin gate on `/queue` + `/api/queue/smoke`; durable headers; auth-secret fail-fast; Redis requirepass + AUTH healthcheck; runbook cookie smoke. Verified: unauthed 401, non-admin 403 + Forbidden page, admin smoke OK, Redis NOAUTH without password.
