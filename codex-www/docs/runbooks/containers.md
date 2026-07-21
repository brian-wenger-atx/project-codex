# Project Codex — NAS lab containers

**NAS ≠ production.** Final home is cloud ([`docs/stack.md`](../stack.md)). This lab mirrors the future service graph so agents can propose/apply/logs before cutover.

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
| App code | `codex-www/` (this silo) | Ventures www |
| Compose staging | `/mnt/DataStore/home/agent/compose-live/projectcodex.yaml` | Www Builds via multi-root **or** Work seat |
| Hub app doc | `/mnt/DataStore/home/agent/docs/apps/projectcodex.md` | Same |
| Secrets | `/mnt/DataStore/home/agent/secrets/projectcodex.env` | Never commit values |

**Carve-out:** only TrueNAS app slug **`projectcodex`**. Fleet prune / MAM / other compose stays Work-only.

## Identity

| Field | Value |
|-------|-------|
| Doc / compose slug | `projectcodex` |
| TrueNAS app name | `projectcodex` |
| LAN | `http://192.168.1.200:4003/` (workers: not `127.0.0.1`) |

## Portability rule

Service names and env vars match cloud topology from `docs/stack.md`:

`web` · `worker` · `postgres` · `pgbouncer` · `redis`

| Service | Role | Publish |
|---------|------|---------|
| `web` | Next standalone | LAN `4003:3000` |
| `worker` | Python BullMQ + job claims | internal |
| `postgres` | Postgres 16 | loopback `127.0.0.1:5433` (migrate / direct) |
| `pgbouncer` | Transaction pooler | loopback `127.0.0.1:6432` (runtime) |
| `redis` | BullMQ | loopback `127.0.0.1:6379` |

**Dual URLs:** `DATABASE_URL` → PgBouncer; `DATABASE_DIRECT_URL` → Postgres (migrations only). Compose secrets use Docker DNS hosts (`pgbouncer` / `postgres`). Host `pnpm` uses loopback ports above.

## Migrations

```bash
cd /mnt/DataStore/Ventures/project-codex/codex-www
# Host (after postgres up on :5433) — set DATABASE_DIRECT_URL to loopback form
. "$HOME/.nvm/nvm.sh"
export DATABASE_DIRECT_URL='postgresql://projectcodex:…@127.0.0.1:5433/projectcodex'
pnpm migrate
```

Or one-shot on the compose network (preferred in Builds):

```bash
sudo docker run --rm --network ix-projectcodex_default \
  --env-file /mnt/DataStore/home/agent/secrets/projectcodex.env \
  -v /mnt/DataStore/Ventures/project-codex/codex-www:/w -w /w \
  node:22-bookworm bash -lc 'npm install --no-save pg@8.16.3 >/dev/null && node scripts/migrate.mjs'
```

## Job claim / retry proofs

| Proof | How |
|-------|-----|
| Post-complete skip | `curl -sf -X POST 'http://192.168.1.200:4003/api/queue/smoke?mode=double'` — one claim+complete, second skip |
| Stale reclaim | `curl -sf -X POST 'http://192.168.1.200:4003/api/queue/smoke?mode=staleClaim'` — reclaim aged `claimed` then complete |
| Logs | `sudo -n docker logs worker-projectcodex --tail 80` |

`JOB_CLAIM_STALE_SECONDS` (default 60) controls reclaim age.

## Maintain cycle

```bash
$EDITOR /mnt/DataStore/home/agent/compose-live/projectcodex.yaml

/mnt/DataStore/home/agent/scripts/compose-live.sh propose projectcodex
# paste propose output in chat

# Same turn (unless Brian says don't apply compose):
/mnt/DataStore/home/agent/scripts/compose-live.sh apply projectcodex --execute --brian-approved

# After postgres healthy: migrate (see above), then wait for ready
curl -sf http://192.168.1.200:4003/api/health/ready
sudo -n docker logs web-projectcodex --tail 50
```

## Opt-out

Brian says **`don't apply compose`** → stop after propose.
