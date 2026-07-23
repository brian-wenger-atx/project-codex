# Account — auth, admin, invites

Lab: `http://192.168.1.200:4003/` · Product code is **live-bound** ([`docs/stack.md`](../stack.md) hard rule 7). NAS is host only.

Related: [containers.md](./containers.md) (compose, migrate, queue smoke curls).

## Secrets / env

| Var | Role |
|-----|------|
| `BETTER_AUTH_SECRET` | Session signing — **fail-fast** if unset / build placeholder at runtime |
| `BETTER_AUTH_URL` / `BOOKFELLOW_APP_URL` | Canonical app base (no trailing slash). Lab default `http://192.168.1.200:4003` |
| `BOOKFELLOW_ADMIN_EMAILS` | Comma allow-list → `role=admin` on **successful invited** create (does **not** bypass invite gate) |
| `BOOKFELLOW_ADMIN_MASTER_SECRET` | Peer-admin disable + anomalous credit **increases** — NAS secrets only, never via UI |
| `CLOUDFLARE_ACCOUNT_ID` + `CLOUDFLARE_EMAIL_API_TOKEN` | Invite + admin alert email via CF Email Sending |
| `DATABASE_URL` | PgBouncer (runtime / Better Auth pool) |
| `DATABASE_DIRECT_URL` | Postgres direct (migrations only) |
| `REDIS_URL` | BullMQ + ready ping (`requirepass` in lab) |

Hub SoT: `/mnt/DataStore/home/agent/secrets/bookfellow.env` · Www: [`.env.lab`](../../.env.lab) symlink.

## Migrate order

```bash
# Prefer compose-network one-shot (see containers.md)
sudo docker run --rm --network ix-bookfellow_default \
  --env-file /mnt/DataStore/home/agent/secrets/bookfellow.env \
  -v /mnt/DataStore/Ventures/bookfellow/bookfellow-www:/w -w /w \
  node:22-bookworm bash -lc 'npm install --no-save pg@8.16.3 >/dev/null && node scripts/migrate.mjs'
```

Auth tables live in `db/migrations/002_auth.sql` … through `008_rate_limit.sql`. Schema is **explicit SQL** — Better Auth does not own migrations.

## Bootstrap (first admins)

1. Create admin accounts **before** flipping the invite gate (Plan 6 shipped the gate).
2. Every create still needs a valid invite; `BOOKFELLOW_ADMIN_EMAILS` only sets `role`.
3. Mint invites from `/admin` → Invites; email from `invites@bookfellow.io` (link + pasteable code).

## Auth posture (M1)

| Topic | Lock |
|-------|------|
| Library | Better Auth email/password + DB sessions |
| Password | Min **12** + Have I Been Pwned (k-anonymity); allow long passphrases |
| Rate limits | Database-backed; stricter on sign-in / sign-up / reset paths |
| Email verify | **Invite-as-verified** on successful invited create (`requireEmailVerification: false`) |
| Session | Absolute **7d** (`expiresIn`); refresh **1d** (`updateAge`) when used |
| Cookies | Better Auth session cookie: **HttpOnly**; **Secure** when HTTPS; **SameSite** (framework default). Lab HTTP → Secure off until TLS (M12 / cloud) |
| Disable | `disabled_at` + session revoke; self-disable blocked; peer-admin needs master secret |
| PII in logs | Never log passwords, session tokens, or full emails in verbose paths |

Security matrix: [`.cursor/backlog.md`](../../.cursor/backlog.md) § Security / PII posture.

## Admin

- Entry: quiet link from `/queue` + direct `/admin` (top subnav).
- Users: list, disable/enable, absolute `companion_credits` set (≥ 0).
- Credit anomaly / freeze / scan: Plan 5b — master secret on large increases; alerts email **all** `BOOKFELLOW_ADMIN_EMAILS`.
- Invites: mint + resend unused (token **rotates** on resend).

## Headers / CSP

Plan 2 shipped durable **nosniff / referrer / frame** via `next.config`. **CSP deferred to M12** (public cutover).

## Health

`GET /api/health/ready` — fail closed if Postgres **or** Redis ping fails. Expect `{ ok, db: "ok", redis: "ok" }`.

## Module smoke (M1 set)

Lab `:4003` — all must pass before calling M1 set:

1. Admin mints invite → email arrives → Create account with invite → signed-in shell
2. Sign out → Sign in again; disabled user cannot sign in
3. Session + one account pref survive reload and a second browser (same account)
4. Queue smoke/`/queue` denied for unauthed **and** signed-in non-admin; admin can smoke
5. `/admin`: list users, disable/enable, adjust `companion_credits`
6. Create-account shows redeem field (stored for M11; no unlock yet) **and** requires a valid invite
7. Create without invite (or used/expired invite) fails cleanly

### Auth harden smoke (Plan 7)

```bash
# Ready includes Redis
curl -sf http://192.168.1.200:4003/api/health/ready | jq .

# Short password rejected (client + server)
# Compromised password → PASSWORD_COMPROMISED from HIBP (use a known breached string in a throwaway invite path)

# Sign-in rate limit (expect 429 after bursts)
# for i in 1 2 3 4 5; do curl -s -o /dev/null -w '%{http_code}\n' -X POST \
#   http://192.168.1.200:4003/api/auth/sign-in/email \
#   -H 'content-type: application/json' \
#   -d '{"email":"nobody@example.com","password":"wrong-password-xx"}'; done
```

Queue smoke curls (admin cookie): see [containers.md](./containers.md).
