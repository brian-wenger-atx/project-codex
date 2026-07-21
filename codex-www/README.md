# codex-www

Product / website silo for **Project Codex**.

**Status:** P2 scaffold — Next.js lab on `:4003` (mobile-first). Stack: [`docs/stack.md`](docs/stack.md).

| Path | Purpose |
|------|---------|
| [`app/`](app/) | Next.js App Router (`@project-codex/web`) |
| [`worker/`](worker/) | Python BullMQ consumer stub |
| [`packages/queue-contracts/`](packages/queue-contracts/) | TS job SSOT → Pydantic codegen |
| [`docs/`](docs/) | Stack, feeds, runbooks |
| [`lab/placeholder/`](lab/placeholder/) | Retired from `:4003` (kept as asset) |

## Local dev

```bash
cd /mnt/DataStore/Ventures/project-codex/codex-www
cp .env.example .env.local   # REDIS_URL=redis://127.0.0.1:6379
pnpm install
pnpm gen:queue
pnpm dev                     # http://127.0.0.1:3000 — needs lab Redis on loopback
```

Lab URL: `http://192.168.1.200:4003/`

## Git

Monorepo: see [`../GIT.md`](../GIT.md) and [`docs/git.md`](docs/git.md).
