# bookfellow-www

Product / website silo for **Bookfellow**.

**Status:** P4 lab — foundation shell on `:4003` (sidebar landscape ≥1024 / hamburger elsewhere). Stack: [`docs/stack.md`](docs/stack.md).

| Path | Purpose |
|------|---------|
| [`app/`](app/) | Next.js App Router (`@bookfellow/web`) |
| [`worker/`](worker/) | Python BullMQ consumer + Postgres job claims |
| [`packages/queue-contracts/`](packages/queue-contracts/) | TS job SSOT → Pydantic codegen |
| [`db/migrations/`](db/migrations/) | Explicit SQL migrations |
| [`docs/`](docs/) | Stack, feeds, runbooks |
| [`sites/placeholder/`](sites/placeholder/) | Public coming-soon lander → **bookfellow.io** (Cloudflare Pages) |
| [`lab/placeholder/`](lab/placeholder/) | Retired from `:4003` (kept as asset) |

## Local dev

Node **22** + **pnpm** via **nvm**. Source: `. "$HOME/.nvm/nvm.sh"` or `. "$HOME/.config/agent-node.env"`.

```bash
cd /mnt/DataStore/Ventures/project-codex/codex-www
cp .env.example .env.local
# Set DATABASE_URL → 127.0.0.1:6432 (pgbouncer)
# Set DATABASE_DIRECT_URL → 127.0.0.1:5433 (postgres migrate)
. "$HOME/.nvm/nvm.sh"
pnpm install
pnpm migrate
pnpm gen:queue
pnpm dev                     # http://127.0.0.1:3000 — needs lab Redis + PgBouncer
```

Lab URL: `http://192.168.1.200:4003/` · Ready: `/api/health/ready` · Containers: [`docs/runbooks/containers.md`](docs/runbooks/containers.md)

## Git

Monorepo: see [`../GIT.md`](../GIT.md) and [`docs/git.md`](docs/git.md).
