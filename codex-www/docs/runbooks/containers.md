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
| Secrets (when needed) | `/mnt/DataStore/home/agent/secrets/projectcodex.env` | Never commit values |

**Carve-out:** only TrueNAS app slug **`projectcodex`**. Fleet prune / MAM / other compose stays Work-only.

## Identity

| Field | Value |
|-------|-------|
| Doc / compose slug | `projectcodex` |
| TrueNAS app name | `projectcodex` |
| LAN | `http://192.168.1.200:4003/` (workers: not `127.0.0.1`) |

## Portability rule

Service names and env vars must match the cloud topology from `docs/stack.md`:

`web` · `worker` · `postgres` · `pgbouncer` · `redis` (+ object storage later)

P1 placeholder is **`web` only** (static nginx). P3 expands the graph.

## Maintain cycle

```bash
# Edit staging (placeholders only)
$EDITOR /mnt/DataStore/home/agent/compose-live/projectcodex.yaml

/mnt/DataStore/home/agent/scripts/compose-live.sh propose projectcodex
# paste propose output in chat

# Same turn (unless Brian says don't apply compose):
/mnt/DataStore/home/agent/scripts/compose-live.sh apply projectcodex --execute --brian-approved

sudo -n docker logs web-projectcodex --tail 50
curl -sf http://192.168.1.200:4003/ | head
```

### Net-new install

If the TrueNAS app does not exist yet, `app.update` cannot run. Create once via TrueNAS **Apps → Custom App** (name `projectcodex`) pasting merged compose from `render-compose.sh projectcodex`, **or** `midclt call app.create` with `custom_compose_config_string` when that path works on this SCALE build. After the app exists, all updates use `compose-live.sh apply`.

## Opt-out

Brian says **`don't apply compose`** → stop after propose.
