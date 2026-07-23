# Content density levels (condensed / average / verbose)

**Status:** proposal — **AI-phase** (not friends-alpha bootstrap; not Ready).  
**www-feed:** **P51**.  
**Related:** pack schema (**AI-A1**), pregen (**P6**), Recap (**P35**), chapter companion surfaces, user-state (**P38**), model routing (**P20**).

## Lean (Brian 2026-07-23)

Users should choose how much companion text they see per book:

| Level | Intent |
|-------|--------|
| **Condensed** | Short — skim / jog |
| **Average** | Default middle depth |
| **Verbose** | Full — more detail / teach |

**Primary surface:** **chapter reviews** (chapter companion write-ups). Other pack surfaces (Recap blocks, Looking Ahead, Pulse, etc.) may follow later; do not invent scope beyond chapter reviews until Brian expands.

## Product implications (for www when planning AI)

- Prefer **three stored variants** (or one structured pack + density views) so switching levels is instant — not a live re-gen on every toggle.
- Cost: if all three are pregenerated at unlock (**P6**), budget **$/unlocked-book** rises (**AI-E2**). Alt: generate default + lazy-fill other levels on first select.
- Pref: account default + **per-book override** (fits **P38** Reading / companion Edit).
- UI: density control near chapter review content (and/or Settings → Reading) — exact chrome later.
- F/NF may differ in what “verbose” means; keep one user-facing dial unless bake-off says otherwise.

## Open (do not lock yet)

1. Generate all three at unlock vs on-demand for non-default?
2. Does Recap / audio script / quiz stems also respect the dial, or chapter review only?
3. Default = **Average**?
4. Labels: Condensed / Average / Verbose vs Short / Standard / Deep?

## Not for

- Friends alpha bootstrap (**P44**) unless Brian says otherwise — single density OK for alpha.
- Mockup shell (**M1–M4**) — no need to fake three levels before real packs.
