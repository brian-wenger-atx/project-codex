# Build order (codex-www)

Agent-maintained. Update same-turn when a plan is created, reordered, Built, or shipped.
No hub-work-queue Python clone.

## Upstream (other silo)

| Plan | Path | Status |
|------|------|--------|
| strategy-www-feed | `/mnt/DataStore/Ventures/project-codex/codex-business/.cursor/plans/2026-07-20-strategy-www-feed.plan.md` | built |
| Strategy feed doc | `/mnt/DataStore/Ventures/project-codex/codex-business/docs/www-feed.md` | exists — required before product plans from Ready |
| dual-feed-business (sibling) | `/mnt/DataStore/Ventures/project-codex/codex-business/.cursor/plans/2026-07-20-dual-feed-business.plan.md` | built — Order 1→2 aligned 2026-07-20 |
| dual-feed contract | `/mnt/DataStore/Ventures/project-codex/codex-business/docs/protocol/dual-feed.md` | exists — schema SoT for `docs/business-feed.md` |

## Active / next (this silo)

| Plan | Lane | Path | Status |
|------|------|------|--------|
| www-foundation-stack | foundation | `/mnt/DataStore/home/agent/.cursor/plans/www_foundation_stack_71f9027b.plan.md` | **P0–P3 shipped 2026-07-20** → **next: P4** (foundation shell placeholder) |

Lab: `http://192.168.1.200:4003/` (Next) · stack [`docs/stack.md`](../docs/stack.md) · containers [`docs/runbooks/containers.md`](../docs/runbooks/containers.md)

**Next requirement (backlog):** [mobile-first web — iPhone/iPad required from day 1](backlog.md) — baked into P2 scaffold; native iOS/Android = other silo (not www).

## Queued

_(P4+ stay inside foundation plan until P3 Built; SP1–SP6 are separate product plans)_

## Shipped

| Order | Plan | Lane | Path | Status |
|------:|------|------|------|--------|
| 1 | www-queue-lanes | foundation | `.cursor/plans/2026-07-20-www-queue-lanes.plan.md` | shipped 2026-07-20 |
| 2 | dual-feed-www | foundation | `.cursor/plans/2026-07-20-dual-feed-www.plan.md` | shipped 2026-07-20 |
| — | www-foundation-stack **P0** | foundation | `/mnt/DataStore/home/agent/.cursor/plans/www_foundation_stack_71f9027b.plan.md` | P0 2026-07-20 |
| — | www-foundation-stack **P1** | foundation | same | P1 2026-07-20 |
| — | www-foundation-stack **P3** | foundation | same | P3 2026-07-20 (Postgres+PgBouncer+migrations+claims) |

## Habit

- New www plan → add to Queued or Active same turn (Lane optional; leave blank if unclear)
- Before planning from strategy → read `/mnt/DataStore/Ventures/project-codex/codex-business/docs/www-feed.md` Ready + Priorities + Product proposals (habit-only graduate)
- Feed → Pending: hook auto-runs `scripts/www-lanes-sync.py` on www-feed Read/shell; manual `python3 scripts/www-lanes-sync.py` / `--check` on resume
- Lane adopt/drop → update adopted table in `lanes.md` same turn (Pending is generated); note business to mark feed `adopted in www` (www-only does not edit the feed)
- Reverse feed: same-turn write `docs/business-feed.md` on filter-matching ship / stumble / learning / ask-back; refresh pins if affected
- **Sent to business (2026-07-20):** foundation **baseline** (P0 stack + P1 lab) written to [`docs/business-feed.md`](../docs/business-feed.md) — harvest on next business session; www-only cannot edit `www-feed.md`
