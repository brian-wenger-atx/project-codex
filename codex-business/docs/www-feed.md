# Strategy → product feed

Canonical handoff for `codex-www` builders. Strategy canon stays in thesis / north-star / backlog / decisions; this file is a curated projection only.

**Reverse feed:** Www owns `/mnt/DataStore/Ventures/project-codex/codex-www/docs/business-feed.md` — **live**. Business reads it; does not write www. **Contract SoT:** [protocol/dual-feed.md](protocol/dual-feed.md).

## Meta

- **Last updated:** 2026-07-20
- **Updated because:** Mobile lean — iOS + Android website wrappers with core assets cached (P7); after web solid

## Direction snapshot

- Framing: **companion for your books** — recall + return-to-book; not a substitute. See [thesis.md](thesis.md).
- Equal **fiction/nonfiction** from day one; genre buckets with default layouts (user-overridable).
- Site model: **trial → subscription** (Audible-adjacent: bought the book → companion here).
- Pricing sketch (math unproven): **all tiers 1 free / 3 months**; paid **~$10/mo → +2 books/month**; à la carte **$6**; members **$4** extras (active sub). Position **under** Blinkist-class **~$15/mo unlimited** (comparison is inevitable even though product differs). Quarterly free makes the floor **concrete**.
- **Unlock permanence (lean / differentiator):** unlocked companions usable **without** active membership **for the life of the site**; if we fold, **~3 months guaranteed** access. Not absolute forever — **legal / ToS**. Permanence = more value (can support price). Cancel keeps prior unlocks under those terms; loses allotments + member pricing. See [north-star.md](north-star.md), [decisions/2026-07-20-v1-launch-leans.md](decisions/2026-07-20-v1-launch-leans.md).
- **Mobile (lean):** **iOS + Android** apps — website **wrappers** with **core elements already downloaded/cached**; web remains source of truth. After web product is solid — not day-one www foundation. See [north-star.md](north-star.md).
- Rights: enhancement framing; paid Gemini only for book text.
- Day-one supply (ops lean): prototype ingest via MAM; **purchase** when proven — public path must not depend on unlicensed supply.
- **Www foundation baseline (harvested):** production stack locked — **Next.js (App Router) + TypeScript + PostgreSQL + Redis + BullMQ + Stripe + Python AI workers**; cloud = final home; NAS lab only (`projectcodex` `:4003`). P2+ still open. See www `docs/business-feed.md` / `docs/stack.md`.
- Idea-gen remains paused for random invention; **Product proposals below are intentional handoffs** from strategy chat — www fleshes out and Builds.

## Priorities (now)

1. Dual foundation continues: business proposal packet (this silo) in parallel with www foundation P2+ (scaffold / compose / shell).
2. Flesh out Product proposals below into www plans when Brian works the www seat — do not wait for re-dictation.
3. Answer www asks-back before billing Builds: exact $ vs ~$15 competitor anchor, allotment roll, trial shape, public cutover. Unlock permanence leaned yes — design cancel/keep-access around that.

## Ready for planning

_(none — reverse feed Ready cleared 2026-07-20 after dual-feed-www Built)_

## Product proposals

Www should treat these as **incoming from strategy** — flesh out in www (plans/UI), not re-decide from scratch unless blocked. Status: proposal until a www plan owns them.

| ID | Proposal | Why it matters | Status |
|----|----------|----------------|--------|
| P1 | Trial → subscription site flow | Monetization shape; Audible-adjacent motion | proposal |
| P2 | Pricing UX: 1 free/qtr; paid ~$10 (under ~$15 comps); $6/$4; unlocks usable after cancel **for life of site** (+ ~3mo if fold) | SKU + cancel/keep-access copy must match ToS (not absolute forever) | proposal |
| P3 | Professional companion **build-in-progress** status UI | Replace homelab-style indicator; launch-quality trust | proposal |
| P4 | **Dummy/build theater** — short intentional “building” even when packs already live | Perceived craft; avoids instant-dump feel | proposal |
| P5 | **Genre buckets** — genre-native elements; default layout per genre; user override | Equal fiction/nonfiction; differentiation; layout system | proposal |
| P6 | Day-one supply plumbing — internal/prototype ingest path; design for later purchased/user-owned supply | Unblocks companion loop before commercial catalog | proposal |
| P7 | **iOS + Android** apps as **website wrappers** with **core assets pre-downloaded/cached** | Store presence; offline-ish core; web stays SoT — schedule after web solid; watch store/IAP rules | proposal |

## Lane proposals

| Proposed lane | Why | Status |
|---------------|-----|--------|
| `companion-build-ux` | Status + dummy theater (P3/P4) | proposal |
| `genre-layouts` | Genre buckets + defaults + override (P5) | proposal |
| `billing-trial` | Trial→sub + pricing sketch (P1/P2) | proposal |
| `mobile-wrappers` | iOS/Android shell + core cache (P7) — after web | proposal |

## Open questions that block product

1. ~~Unlocked books survive cancel?~~ **Lean yes, scoped** — keep using without active sub **for life of site**; **~3 months guaranteed** if we fold. Not absolute forever — **legal**. $4 rate still needs active sub. Permanence = more value.
2. Exact membership $ vs Blinkist-class ~$15 unlimited (hold ~$10 / lower / closer under $15)? Do $6/$4 move? *(before billing Build)*
3. Trial length / what trial includes? *(www asks-back — before billing Build)*
4. When anything **public-facing** must cut over from NAS lab / prototype supply to purchased/cloud-only? *(www asks-back — before public URL)*
5. Unused allotments roll? *(before billing Build)*

(Entity/LLC timing is venture ops — not listed here.)

## Out of scope / do not build yet

| Item | Why |
|------|-----|
| Topic video outlinks | Parked — dilutes core ([ideas/backlog.md](ideas/backlog.md)) |
| Location/brand tie-ins | Parked — maybe/never ([ideas/backlog.md](ideas/backlog.md)) |
| Wholesale backlog stubs as www plans | Idea-gen paused; use Product proposals table instead |
| Public dependence on unlicensed supply | Prototype-only lean; acquisition/publisher story forbids it |

## Changelog (short)

- 2026-07-20 — Mobile lean: iOS + Android website wrappers + core cache (P7 / `mobile-wrappers`); after web
- 2026-07-20 — Unlock permanence scoped: life of site + ~3mo if fold; legal/ToS flag; marketing must not say absolute forever
- 2026-07-20 — Competitive ~$15 Blinkist-class anchor; aim cheaper; permanence = value (not discount); quarterly free = concrete clarity
- 2026-07-20 — Unlock permanence lean (keep content w/o active sub); considering lower membership price; P2 + open Qs updated
- 2026-07-20 — Pricing lean → allotment + à-la-carte (1 free/qtr all tiers; paid $10→+2/mo; $6/$4); P2 + open questions updated
- 2026-07-20 — Harvested www reverse feed; dual-feed pair complete; Ready reverse-feed cleared; echoed P0+P1 foundation baseline (stack + NAS lab)
- 2026-07-20 — dual-feed-business Built; contract SoT `docs/protocol/dual-feed.md`; Ready brief points at schema
- 2026-07-20 — V1 leans + Product proposals P1–P6 + lane proposals; Ready: business-feed; pricing/supply/fiction locks updated
- 2026-07-20 — Initial feed seeded from thesis / north-star / backlog (Ready empty)
