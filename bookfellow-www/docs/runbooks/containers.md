# Bookfellow — NAS lab containers

**NAS ≠ production host.** Final home is cloud ([`docs/stack.md`](../stack.md)). Product code is live-bound. This lab mirrors the future service graph so agents can propose/apply/logs before cutover.

## Access verified (P1)

| Check | Result (2026-07-20) |
|-------|---------------------|
| `sudo -n docker ps` | OK on host (UID 3001 `agent`) |
| `midclt call system.info` | OK |
| `compose-live.sh` | OK (`/mnt/DataStore/home/agent/scripts/compose-live.sh`) |
| Sandbox / worker without host perms | `sudo`/`midclt` fail — re-run with host/`all` privileges |

## Seat protocol

| What | Where | Who |
|------|-------|-----|
| App code | `bookfellow-www/` (this silo) | Ventures www |
| Compose staging | `/mnt/DataStore/home/agent/compose-live/bookfellow.yaml` | Www Builds via multi-root **or** Work seat |
| Hub app doc | `/mnt/DataStore/home/agent/docs/apps/bookfellow.md` | Same |
| Secrets | `/mnt/DataStore/home/agent/secrets/bookfellow.env` | Never commit values |

**Carve-out:** only TrueNAS app slug **`bookfellow`**. Fleet prune / MAM / other compose stays Work-only.

## Identity

| Field | Value |
|-------|-------|
| Doc / compose slug | `bookfellow` |
| TrueNAS app name | `bookfellow` |
| LAN | `http://192.168.1.200:4003/` (workers: not `127.0.0.1`) |
| Queue | `bookfellow-jobs` |
| Health service | `bookfellow-web` |

## Portability rule

Service names and env vars match cloud topology from `docs/stack.md`:

`web` · `worker` · `postgres` · `pgbouncer` · `redis`

| Service | Role | Publish |
|---------|------|---------|
| `web` | Next standalone | LAN `4003:3000` |
| `worker` | Python BullMQ + job claims | internal |
| `postgres` | Postgres 16 | loopback `127.0.0.1:5433` (migrate / direct) |
| `pgbouncer` | Transaction pooler | loopback `127.0.0.1:6432` (runtime) |
| `redis` | BullMQ (**requirepass**) | loopback `127.0.0.1:6379` |

**Dual URLs:** `DATABASE_URL` → PgBouncer; `DATABASE_DIRECT_URL` → Postgres (migrations only). Compose secrets use Docker DNS hosts (`pgbouncer` / `postgres`). Host `pnpm` uses loopback ports above.

**Redis AUTH:** `REDIS_PASSWORD` + `REDIS_URL=redis://:…@redis:6379` in `secrets/bookfellow.env`; compose uses `${REDIS_URL}` for web/worker and env-based requirepass for redis (AUTH healthcheck via `REDISCLI_AUTH`). Host tooling: `redis-cli -a "$REDIS_PASSWORD" …` (never commit the password).

**Auth secret:** `BETTER_AUTH_SECRET` required at runtime — app fails closed if unset or set to the build placeholder.

## Migrations

```bash
cd /mnt/DataStore/Ventures/bookfellow/bookfellow-www
# Host (after postgres up on :5433) — set DATABASE_DIRECT_URL to loopback form
. "$HOME/.nvm/nvm.sh"
export DATABASE_DIRECT_URL='postgresql://bookfellow:…@127.0.0.1:5433/bookfellow'
pnpm migrate
```

Or one-shot on the compose network (preferred in Builds):

```bash
sudo docker run --rm --network ix-bookfellow_default \
  --env-file /mnt/DataStore/home/agent/secrets/bookfellow.env \
  -v /mnt/DataStore/Ventures/bookfellow/bookfellow-www:/w -w /w \
  node:22-bookworm bash -lc 'npm install --no-save pg@8.16.3 >/dev/null && node scripts/migrate.mjs'
```

## Job claim / retry proofs (admin session)

Queue smoke is **admin-only**. Sign in as an allow-listed admin in the browser, copy the `better-auth.session_token` cookie, then:

```bash
# Replace COOKIE with the session cookie value from DevTools
curl -sf -X POST 'http://192.168.1.200:4003/api/queue/smoke?mode=double' \
  -H "Cookie: better-auth.session_token=COOKIE"

curl -sf -X POST 'http://192.168.1.200:4003/api/queue/smoke?mode=staleClaim' \
  -H "Cookie: better-auth.session_token=COOKIE"
```

Or use the admin UI at `http://192.168.1.200:4003/queue`.

| Proof | How |
|-------|-----|
| Post-complete skip | Admin cookie + `mode=double` (above) |
| Stale reclaim | Admin cookie + `mode=staleClaim` (above) |
| Unauthed denied | `curl -s -o /dev/null -w '%{http_code}' -X POST …/api/queue/smoke` → `401` |
| Logs | `sudo -n docker logs worker-bookfellow --tail 80` |

`JOB_CLAIM_STALE_SECONDS` (default 60) controls reclaim age.

## Maintain cycle

```bash
$EDITOR /mnt/DataStore/home/agent/compose-live/bookfellow.yaml

/mnt/DataStore/home/agent/scripts/compose-live.sh propose bookfellow
# paste propose output in chat

# Same turn (unless Brian says don't apply compose):
/mnt/DataStore/home/agent/scripts/compose-live.sh apply bookfellow --execute --brian-approved

# After postgres healthy: migrate (see above), then wait for ready
curl -sf http://192.168.1.200:4003/api/health/ready
sudo -n docker logs web-bookfellow --tail 50
```

## Opt-out

Brian says **`don't apply compose`** → stop after propose.
