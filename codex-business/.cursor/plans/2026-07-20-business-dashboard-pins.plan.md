---
name: Business dashboard pins
overview: "Add a hub-style pin directory at `.cursor/dashboard/` for Project Codex: a build-plans file, a strategy/direction dashboard, a foundation bucket (proposal/SWOT/market analysis), then Core 4 sector lanes — agent-maintained markdown with an AGENTS.md update ceremony."
todos:
  - id: mkdir-dashboard
    content: Create .cursor/dashboard/ + docs/proposal/ stubs
    status: completed
  - id: write-pins
    content: Write build-order.md, strategy-queue.md, proposal.md, and Core 4 sector files (templates + vault-seeded proposal/queue)
    status: completed
  - id: wire-agents
    content: Update AGENTS.md resume/ceremony and silo README.md map
    status: completed
isProject: true
---

# Business dashboard pins (codex-business)

**Built:** 2026-07-20

## Decisions locked

- **Directory:** [`.cursor/dashboard/`](../dashboard/) — one place for all operational pins
- **Buckets:** Foundation first (`proposal`), then Core 4 (`product`, `market`, `monetization`, `ops`)
- **Maintenance:** Agent-updated markdown (no Python generator in v1)
- **Consult (2026-07-20):** Durable drafts under `docs/proposal/`; dashboards-first resume; ideas backlog link-only; Brian marks foundation ready

## Recheck at Build

- `strategy-www-feed` already shipped — listed Done in build-order; AGENTS keeps www-feed habit
- `.cursor/plans/` already existed — no empty-only plans dir
- Www queue/lanes still sibling (www-owned) — noted, not edited

## File map

See [`.cursor/dashboard/README.md`](../dashboard/README.md) and [`docs/proposal/README.md`](../../docs/proposal/README.md).
