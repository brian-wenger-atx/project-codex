# Product signals (www → business)

**Purpose:** Point at www’s outbound feed so strategy stays current on ships, stumbles, and asks-back.

**Contract:** [docs/protocol/dual-feed.md](../../docs/protocol/dual-feed.md)

**Canonical file (www-owned):** `/mnt/DataStore/Ventures/project-codex/codex-www/docs/business-feed.md`

**Status:** Live — reverse feed exists; dual-feed pair complete (Order 1→2).

**Expected sections:** Meta | Shipped | Stumbles | Learnings | Asks-back | Changelog (columns in contract).

## Last harvested

- **When:** 2026-07-20 (this session)
- **Feed Meta:** Foundation baseline handoff (P0 stack + P1 NAS lab); full foundation plan still open at P2+
- **Shipped noted:**
  - P0 stack lock — Next.js App Router + TS + PostgreSQL + Redis + BullMQ + Stripe + Python AI workers; cloud = prod, NAS = lab only
  - P1 NAS lab — TrueNAS app `projectcodex` on LAN `:4003` (placeholder); no public hostname
- **Not yet:** P2 scaffold · P3 multi-service compose · P4+ product shell / SP1–SP6
- **Stumbles:** none this baseline
- **Learnings folded:** competitor stack convergence (React/Next + Stripe + Python workers); NAS ≠ production

## Open asks from www

| Ask | Urgency | Business status |
|-----|---------|-----------------|
| Echo foundation baseline onto `www-feed.md` | Soon | **Done** this harvest (Direction + Changelog) |
| Confirm “books for life” = survives cancel vs while-subscribed | Before billing Build | **Still open** — Your turn |
| Trial length / what trial includes | Before billing Build | **Still open** — Your turn |
| When public-facing must leave NAS lab for purchased/cloud-only supply | Before public URL | **Still open** — Your turn / ops |

## Habit

On resume: read business-feed if present. If changed since last harvest → update relevant `docs/` + this pin + `strategy-queue.md` same turn (see contract harvest triggers).
