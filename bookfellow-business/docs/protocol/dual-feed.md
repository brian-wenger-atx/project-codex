# Dual feed contract (strategy ↔ product)

**SoT** for bidirectional handoff between `bookfellow-business` and `bookfellow-www`. Agents keep feeds current; Brian does not maintain them. No shared registry / no hub-work-queue clone.

**Build order (aligned 2026-07-20):** `dual-feed-business` (this contract) → `dual-feed-www` (`business-feed.md`).

## Direction

| Direction | File | Who writes | Who reads |
|-----------|------|------------|-----------|
| Strategy → product | `bookfellow-business/docs/www-feed.md` | Business | Www (before product planning / lane work) |
| Product → strategy | `bookfellow-www/docs/business-feed.md` | Www | Business (resume / foundation–GTM–money) |

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
- Consolidate **Lane proposals** into `lanes.md` (Adopted / Inferred / Later) — no Pending mirror table
- **Two verbs:**
  - **graduate-to-Ready-on-feed** — business/Brian authorize Ready rows on `www-feed.md` (www never invents Ready)
  - **promote-into-plan** — at plan time, www scans feed Ready (shortcut) **plus** backlog, lanes, remnant registry paths; fit-check → fold into the plan (max 5). No prior Ready move required for backlog/lanes that fit.
- Evidence: `intake_considered` + `intake_folded` on new www plans — [intake-fold.md](/mnt/DataStore/home/agent/docs/runbooks/intake-fold.md)

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
| [dual-feed-business](../../.cursor/plans/archive/2026-07-20-dual-feed-business.plan.md) | This contract + business habits (archived) |
| [dual-feed-www](/mnt/DataStore/Ventures/bookfellow/bookfellow-www/.cursor/plans/2026-07-20-dual-feed-www.plan.md) | Creates `business-feed.md` + www habits |
| [strategy-www-feed](../../.cursor/plans/archive/2026-07-20-strategy-www-feed.plan.md) | Original one-way feed (Built + archived; extended by dual feed) |
