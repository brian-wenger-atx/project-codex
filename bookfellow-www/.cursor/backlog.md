# Www backlog (codex-www)

Agent-maintained deferred / upcoming product work. **Not** strategy idea-gen — that stays in business. Ready feed items + Brian directs become plans; this list holds requirements and sequencing notes.

Update same turn when Brian adds prefs or priority.

## Standing requirements

| Item | Notes |
|------|-------|
| **Mobile-first web** — iPhone + iPad from day 1 | Required on every UI Build. Native iOS/Android = other silo. |

## Next (priority)

| # | Item | Why | Status |
|---|------|-----|--------|
| 1 | Lane stubs + product SPs | security / user-control / ai-module / feed proposals | **separate plans** when Ready / Brian asks |

## Shipped (foundation)

| Item | Status |
|------|--------|
| Foundation P0–P4 (`www-foundation-stack`) | **complete 2026-07-20** — stack, NAS lab, scaffold, data plane, shell |

## Deferred (www)

| Item | Notes |
|------|-------|
| **Privacy render script** | `scripts/render-placeholder-privacy.py` — read `codex-business/docs/legal/privacy-policy.md`, strip internal sections, emit HTML fragment for `sites/placeholder/privacy.html`; run before deploy. **Manual copy for P25 Build**; automate when policy copy churns or at full launch. |
| **Placeholder / marketing imagery** | Bookfellow lander background art (open-book accent, etc.) — **not** agent SVG/CSS iteration; use dedicated image-gen tool or designer. Candidate services: Recraft (vector/brand), Leonardo (visual-first + API), Fal/Replicate (Flux API), Wireflow (illustration sets). Revisit before next placeholder polish. |
| Security / user-control / AI-module stubs | Separate www plans |
| SP1–SP6 product surfaces | Separate plans when Ready / Brian asks |
| Cloud cutover | Separate plan; NAS lab only until then |
| Hire designer for go-live polish | Brian may hire before public launch — not a www plan yet |

## Out of this silo (do not plan here)

| Item | Where |
|------|-------|
| **Native iOS + Android apps** | Future **other silo**. Www stays responsive web first. |

## Changelog

- 2026-07-21 — Backlog: privacy render script stub (manual copy for P25; automate later)
- 2026-07-21 — Backlog: placeholder/marketing imagery → dedicated image-gen or designer (not SVG/CSS agent iteration)
- 2026-07-20 — Foundation closed (P0–P4); backlog cleaned for next lane/SP plans
- 2026-07-20 — P4 chrome: dark sidebar landscape ≥1024; hamburger portrait + iPhone
- 2026-07-20 — Foundation plan ends at P4; lanes/SPs = separate plans
- 2026-07-20 — Mobile-first required; native apps = other silo
