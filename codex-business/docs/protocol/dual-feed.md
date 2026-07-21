# Dual feed contract (strategy ↔ product)

**SoT** for bidirectional handoff between `codex-business` and `codex-www`. Agents keep feeds current; Brian does not maintain them. No shared registry / no hub-work-queue clone.

**Build order (aligned 2026-07-20):** `dual-feed-business` (this contract) → `dual-feed-www` (`business-feed.md`).

## Direction

| Direction | File | Who writes | Who reads |
|-----------|------|------------|-----------|
| Strategy → product | `codex-business/docs/www-feed.md` | Business | Www (before product planning / lane work) |
| Product → strategy | `codex-www/docs/business-feed.md` | Www | Business (resume / foundation–GTM–money) |

**Neither silo writes the other’s vault.**

## `www-feed.md` sections (business writes)

| Section | Role |
|---------|------|
| Meta | Last updated + why |
| Direction snapshot | Short lean summary; link thesis / north-star / decisions |
| Priorities (now) | What www should care about first |
| Ready for planning | Items ready for a www plan (pointer + brief) |
| Product proposals | Ideas from business chat for www to flesh out (habit-only adopt on www — no mirror table) |
| Lane proposals | Proposed lane names until `lanes.md` adopts |
| Open questions that block product | Product-gating only |
| Out of scope / do not build yet | Parked / forbidden |
| Changelog | Short dated lines |

## `business-feed.md` sections (www writes)

Www implements this schema. Seed empty tables except Meta / Changelog.

### Meta

- **Last updated:** YYYY-MM-DD
- **Updated because:** …

### Shipped

| When | What | Why it matters (user/commercial) | Plan / lane |
|------|------|----------------------------------|---------------|
| | | | |

### Stumbles

| When | What hit | Impact (cost / rights / timeline / feasibility) | Ask / next |
|------|----------|--------------------------------------------------|-------------|
| | | | |

### Learnings

| When | Learning | Money / positioning impact | Suggest business does |
|------|----------|----------------------------|------------------------|
| | | | |

### Asks-back

| When | Question for business | Blocks what | Urgency |
|------|----------------------|-------------|---------|
| | | | |

### Changelog (short)

Dated lines only.

## Content filter (reverse feed)

**Include:** user/commercial-meaningful ships; stumbles that hit cost, rights, timeline, or feasibility; learnings that change money or positioning; asks-back to business.

**Skip:** routine eng noise (refactors, lint, local DX, pin housekeeping unless commercially relevant).

## Triggers

### Business → `www-feed.md` (same turn)

- Direction / pricing / supply / UX intent / open questions change
- Brian states product ideas in a business chat → **Product proposals** (and lane proposals if useful)
- Ready graduation when Brian says so **or** clearly authorizes proposal pass-through
- Then refresh affected `.cursor/dashboard/` pins + `strategy-queue.md` (`build-order.md` if plans change)

### Www → `business-feed.md` (same turn)

- Ship / stumble / learning / ask-back that passes the content filter
- Then refresh www `.cursor/build-order.md` / `lanes.md` when those signals affect pins

### Business harvest (inbound)

- On resume (or before foundation/GTM/monetization): read `business-feed.md` if present
- New rows → fold into `docs/` + update [`.cursor/dashboard/product-signals.md`](../../.cursor/dashboard/product-signals.md) + other sector pins as needed

### Www inbound

- Read `www-feed.md` before product planning
- Mirror **Lane proposals** into `lanes.md` Pending
- **Product proposals / Ready:** habit-only — graduate into www plans when Brian asks; no Pending Product proposals mirror table

## Pin refresh lists

| Silo | After own feed write |
|------|----------------------|
| Business | `strategy-queue.md` + affected sector pins (`proposal`, `product`, `product-signals`, `market`, `monetization`, `ops`); `build-order.md` if plans change |
| Www | `build-order.md`, `lanes.md` as affected |

## Non-goals

- Cross-vault writes
- Python / shared registry / hub-work-queue clone
- Brian manually editing feeds as SoT
- Implementing product features (P1–P6) inside dual-feed Builds

## Related plans

| Plan | Role |
|------|------|
| [dual-feed-business](../../.cursor/plans/2026-07-20-dual-feed-business.plan.md) | This contract + business habits |
| [dual-feed-www](/mnt/DataStore/Ventures/project-codex/codex-www/.cursor/plans/2026-07-20-dual-feed-www.plan.md) | Creates `business-feed.md` + www habits |
| [strategy-www-feed](../../.cursor/plans/2026-07-20-strategy-www-feed.plan.md) | Original one-way feed (Built; extended by dual feed) |
