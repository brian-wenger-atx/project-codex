# Product signals (www → business)

**Purpose:** Point at www’s outbound feed so strategy stays current on ships, stumbles, and asks-back.

**Contract:** [docs/protocol/dual-feed.md](../../docs/protocol/dual-feed.md)

**Canonical file (www-owned):** `/mnt/DataStore/Ventures/project-codex/codex-www/docs/business-feed.md` *(moves to `bookfellow/bookfellow-www/docs/business-feed.md` during rename Build)*

**Status:** Live — reverse feed exists; dual-feed pair complete (Order 1→2).

**Expected sections:** Meta | Shipped | Stumbles | Learnings | Asks-back | Changelog (columns in contract).

## Last harvested

- **When:** 2026-07-21 (P13 adoption)
- **Feed Meta:** Foundation P0–P4 **complete**; **bookfellow.io live** (placeholder-site shipped)
- **Shipped noted:**
  - **P13 placeholder** — bookfellow.io on Cloudflare Pages; bookfellow.cc + www redirect; support@bookfellow.io; lane `placeholder-site` **adopted**
  - P0 stack lock — Next.js App Router + TS + PostgreSQL + Redis + BullMQ + Stripe + Python AI workers; cloud = prod, NAS = lab only
  - P1 NAS lab — TrueNAS app `projectcodex` on LAN `:4003`
  - P2–P4 — Next+Redis+worker, Postgres+PgBouncer+claims, Monarch-quiet shell; foundation **closed**
- **Stumbles:** none this baseline
- **Learnings folded:** competitor stack convergence; NAS ≠ production; mobile-first web required day 1; native apps = other silo

## Open asks from www

| Ask | Urgency | Business status |
|-----|---------|-----------------|
| Echo foundation **complete** (P0–P4) onto www-feed / pins | Soon | **Done** 2026-07-21 harvest |
| Confirm “books for life” = survives cancel vs while-subscribed | Before billing Build | **Lean yes, scoped** (life of site + ~3mo) — still open for exact $ |
| Trial length / what trial includes | Before billing Build | **Still open** — Your turn |
| When public-facing must leave NAS lab for purchased/cloud-only supply | Before public URL | **Still open** — Your turn / ops |
| Ack native iOS/Android = other silo | Low | **Acked** via P7 / mobile-wrappers proposal |

## Habit

On resume: read business-feed if present. If changed since last harvest → update relevant `docs/` + this pin + `strategy-queue.md` same turn (see contract harvest triggers).
