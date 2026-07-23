# Product signals (www → business)

**Purpose:** Point at www’s outbound feed so strategy stays current on ships, stumbles, and asks-back.

**Contract:** [docs/protocol/dual-feed.md](../../docs/protocol/dual-feed.md)

**Canonical file (www-owned):** `/mnt/DataStore/Ventures/bookfellow/bookfellow-www/docs/business-feed.md`

**Status:** Live — reverse feed exists; dual-feed pair complete (Order 1→2).

**Expected sections:** Meta | Shipped | Learnings | Asks-back | Changelog (columns in contract).

## Last harvested

- **When:** 2026-07-22 (this turn — alpha/beta program + P9 ship)
- **Feed Meta (www):** Last updated 2026-07-22 — Brian alpha/beta program locks (banners, dual-beta, diagnostics+replay, AI-off, account delete)
- **Shipped noted:** **P9** auth UX + Create-account redeem / `pending_redeem_code` + `/r/[code]` (M1 Plan 4); **P38** account SoT (M1 Plan 3); prior P13/P25–P27 + rename + foundation P0–P4
- **Stumbles:** none
- **Learnings folded:** alpha/beta **program shape** → [alpha-beta-program](../../docs/ideas/alpha-beta-program-2026-07-22.md) + milestones dual-beta; redeem durable on account; live-bound product; friends alpha **M4→M5** / **M6–M10** tandem; www owns Build sequence; P42–P44 → M4–M6
- **Feed edits this turn:** [www-feed.md](../../docs/www-feed.md) (**P47–P50**); [milestones](../../docs/proposal/milestones.md)

## Open asks from www

| Ask | Urgency | Business status |
|-----|---------|-----------------|
| **Dual beta + chat release:** Beta-1 site / Beta-2 chat; GA without chat?; same friends vs Reddit cohorts? | Before Reddit beta / legal (~pre-Oct) | **Program lean folded** (dual beta). **Still open:** cohorts + GA-without-chat — Your turn |
| **NDA + verbose diagnostics (+ session replay) consent:** retention; replay same blob vs separate; privacy delta vs P25 | Before friends alpha (~mid-Aug) | **Product locks folded.** **Still open:** consent blob + retention + NDA copy — Your turn / legal |
| **AI-off positioning:** OK for marketing/ToS? Any must-stay-AI-on features? | Before beta-2 / GA messaging | **Lean yes** for companion surfaces off / packs on (**P49**). Confirm public FAQ/ToS wording — Your turn |
| **Publisher redeem billing:** unit; who invoices whom? | Before M11 / partner pilots | **Event locked** (enter = unlock). **Still open:** unit + who invoices |
| Ack: www sets Build / module order; stop R-as-queue framing | Next session | **Done** 2026-07-22 |
| Friends-alpha / P42–P44 www refs → **M4–M6**; lanes adopted | Next session | **Done** 2026-07-22 |
| Exact membership $ vs ~$15 Blinkist-class; $6/$4 move? | Before billing (M13) | **Still open** — Your turn |
| Trial length / what trial includes | Before billing (M13) | **Still open** — Your turn |
| Unused credits/allotments roll? | Before M10 copy + M13 | **Still open** — Your turn |
| When public product must leave NAS lab for purchased/cloud-only | Before public product URL | **Still open** — Your turn / ops |
| Confirm “books for life” = survives cancel | Before billing Build | **Lean yes, scoped** (life of site + ~3mo) |
| Ack native iOS/Android = other silo | Low | **Acked** via P7 |

## Habit

On resume: read business-feed if present. If changed since last harvest → update relevant `docs/` + this pin + `strategy-queue.md` same turn (see contract harvest triggers).
