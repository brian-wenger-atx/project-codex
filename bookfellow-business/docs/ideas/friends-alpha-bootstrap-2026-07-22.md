# Friends alpha — bootstrap packs / AI

**Date:** 2026-07-22  
**Status:** lean / proposal (P44)  
**Why:** Get friends onto the platform sooner for feedback. Full P20 AI/LLM upgrade stays the quality/cost path — it should **not** block a curated friends alpha.

## Two finishes

| Track | Goal | AI bar |
|-------|------|--------|
| **Friends alpha** | Real companion loop; invite-gated | Bootstrap: Codex-quality prompts/schema in AI module; curated title list; pregen on unlock for that list |
| **Full Build / wider beta** | Cost, quality, scale, billing | P20 task→model map, bake-off, versioned pipeline beyond bootstrap |

GTM already leans **friends alpha → Reddit beta** ([naming/bookfellow-lean-2026-07-21.md](../naming/bookfellow-lean-2026-07-21.md)). **Calendar lean (2026-07-22):** alpha **~mid-August**; beta **~October** (feedback-gated) — [proposal/milestones.md](../proposal/milestones.md).

## Alpha cut (sketch)

1. Shell: auth → Library → Overview + companion (Recap / packs / mark-read spoiler bounds; chat/quiz if cheap)
2. Unlock without full Stripe SKUs (invite / redeem / Brian-granted credits)
3. Bootstrap R5 for a **fixed whitelist** of titles — `pipeline=codex_bootstrap_v0` under P32 versioning
4. Feedback button on every page (P43) — paired with **verbose diagnostics** (required / locked toggle)
5. Phase **alpha banner** → points at feedback; honest “alpha — packs will improve” framing
6. **Account delete** escape if they refuse diagnostics consent
7. Chat may be **built** in alpha but is **not** required for alpha ship (dual-beta: site first) — [alpha-beta-program](alpha-beta-program-2026-07-22.md)

Defer for alpha: model bake-off, genre layouts, covers polish, logged-out SEO depth, full billing, TTS bake-off, open “any book” catalog. **Chat public release** = Beta-2 / later (open).

## Layout

Bootstrap code lives in the **AI / LLM module** folder (P42); pack artifacts in the **packs** store — not mixed.

## Plan timing

**No alpha Build plan yet.** Mid-Aug target means file the www plan soon (shell + bootstrap AI scheduleable). Exact ship gate still open on [milestones.md](../proposal/milestones.md).
