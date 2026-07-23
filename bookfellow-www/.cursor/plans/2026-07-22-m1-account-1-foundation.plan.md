---
name: M1 Account — 1 foundation
overview: Better Auth email/password + DB sessions; explicit SQL for auth tables plus role and disabled_at; BOOKFELLOW_ADMIN_EMAILS bootstrap; session middleware; minimal sign-up/in/out gate.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
intake_folded: []
todos:
  - id: deps-better-auth
    content: Pin better-auth version; add deps; generate schema from that version → hand-adapt 002_auth.sql
    status: completed
  - id: migration-002-auth
    content: "db/migrations/002_auth.sql + role/disabled_at; migrate via scripts/migrate.mjs"
    status: completed
  - id: pool-singleton
    content: Refactor db.ts — shared pg.Pool singleton; getPool() for Better Auth; getDb() wraps same pool
    status: completed
  - id: admin-env
    content: BETTER_AUTH_SECRET, BETTER_AUTH_URL, BOOKFELLOW_ADMIN_EMAILS, BOOKFELLOW_APP_URL in .env.example + secrets
    status: completed
  - id: auth-routes
    content: auth.ts + api/auth/[...all]; hooks for admin role + disabled checks; export revokeUserSessions
    status: completed
  - id: minimal-forms
    content: Throwaway /sign-in + /create-account (email/password + name strategy); Plan 4 polishes
    status: completed
  - id: gate-verify
    content: Lab smoke sign up/in/out; admin email → role admin; disabled blocked; flip umbrella chain-1
    status: completed
isProject: false
---

# M1 Account — Plan 1: foundation (identity & sessions)

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · next: [lab lockdown](2026-07-22-m1-account-2-lab-lockdown.plan.md)

**This plan = #1 of 7**

## Plain English

| | |
|---|---|
| **What this is** | Standing up real accounts — library, database tables, sessions, and a bare sign-up/in/out so later plans have a `user_id`. |
| **What you get** | Email/password auth on the lab app; admin emails from env become `admin`; disabled users cannot sign in. |
| **Why it matters** | Every later M1 slice and M2+ feature hangs off identity. |
| **Your part** | Put admin emails in `secrets/bookfellow.env` when ready (`BOOKFELLOW_ADMIN_EMAILS`). **Create both admin accounts before Plan 6** (while signup is still open). |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md) — no extra folds in this child.

## Scope

**In:** Better Auth; explicit SQL auth schema; `role`, `disabled_at`; env admin bootstrap; session middleware; minimal forms for gate.

**Out:** Polished auth UI (Plan 4); queue lockdown (Plan 2); prefs/credits (Plan 3); `/admin` (Plan 5); invites (Plan 6).

## Design

1. **Package:** Pin a specific `better-auth` version in `app/package.json`. Generate reference schema from **that** version (CLI generate), then **hand-adapt** into `db/migrations/002_auth.sql` with Bookfellow columns — commit the SQL; do not leave CLI as runtime authority.
2. **Schema:** `002_auth.sql` = Better Auth tables (user, session, account, verification as required by pinned version) **plus** on user: `role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user','admin'))`, `disabled_at TIMESTAMPTZ NULL`. Migrate via existing [`scripts/migrate.mjs`](../../scripts/migrate.mjs) + `DATABASE_DIRECT_URL`.
3. **DB singleton for Better Auth:** Refactor [`app/src/lib/db.ts`](../../app/src/lib/db.ts) so a single **`pg.Pool`** is the global singleton on **`DATABASE_URL` (PgBouncer)**; export `getPool()` for Better Auth `database: getPool()` and keep `getDb().query` as a thin wrapper over that same pool. **No second Pool.** **No auth-only `DATABASE_DIRECT_URL` path** (direct URL stays migrations-only). If pooler/Kysely issues appear at Build, fix in-plan (driver flags / runbook) before any carve-out.
4. **Runtime:** `app/src/lib/auth.ts` + `app/src/app/api/auth/[...all]/route.ts` via `toNextJsHandler`. Secrets: **`BETTER_AUTH_SECRET`** (required), **`BETTER_AUTH_URL`** = same value as **`BOOKFELLOW_APP_URL`** (default `http://192.168.1.200:4003` behind proxy/lab).
5. **Email/password:** `emailAndPassword.enabled: true`, **`requireEmailVerification: false`** for M1 lab (invite email is Plan 6; no verify sender in Plan 1).
6. **Admin bootstrap:** Database hook on user create — if email (case-insensitive) ∈ `BOOKFELLOW_ADMIN_EMAILS`, set `role='admin'`. Fields `role` / `disabled_at` registered as `additionalFields` with **`input: false`**.
7. **Disabled enforcement (explicit):** Do **not** assume Better Auth bans on `disabled_at`. Implement `hooks` / session checks that reject sign-in and session use when `disabled_at` is set. Export **`revokeUserSessions(userId)`** for Plan 5 disable path. Middleware: cookie gate for redirects; full session + disabled check in server routes/layouts that need it (Node runtime OK on Next 15.3).
8. **Minimal UI:** Temporary forms on umbrella routes **`/sign-in`** and **`/create-account`** (Plan 4 replaces polish in place — routes stay). Auth stack itself is live-bound. Plan 2: unauthed queue denial redirects to `/sign-in`; non-admin gets 403.
9. **Name field:** On signup, **auto-set `name` from the email local-part** (hook). No name input on Plan 1 forms; Plan 4 may add display-name polish later.
10. **Pre–Plan 6:** Create both admin accounts while signup is open.


## Acceptance

- Create account → session cookie → reload still signed in
- Sign out / sign in works
- Admin allow-list email gets `role=admin`
- User with `disabled_at` set cannot sign in or use session; `revokeUserSessions` exists for Plan 5
- `BETTER_AUTH_SECRET` + `BETTER_AUTH_URL` / `BOOKFELLOW_APP_URL` documented in `.env.example`
- Forms live at `/sign-in` and `/create-account`

## Full review notes (Plan 1 — 2026-07-22)

Folded from CP1: Pool singleton export; `BETTER_AUTH_*` secrets; verification off; hooks for disabled; route names; version-pin + generate-then-commit SQL.

**Consult locks (Brian 2026-07-22):** Better Auth on shared Pool via PgBouncer `DATABASE_URL` (Q1=a); signup `name` auto from email local-part (Q2=a).

## Habit

Flip umbrella `chain-1-foundation` on ship.

**Shipped 2026-07-22:** Better Auth 1.6.24 live on lab `:4003`; migration `002_auth.sql` applied; smoke: signup/session/signin; allow-list → `admin`; disabled → 403.
