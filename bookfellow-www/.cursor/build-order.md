# Build order (bookfellow-www)

Agent-maintained. Update same-turn when a plan is created, reordered, Built, or shipped.
No hub-work-queue Python clone.

**Ownership:** Www sequences Builds. Business feed = requirements / Ready / leans — **not** execution order. Do not copy feed “first Builds” or R1–R7 labels into this file as authority.

**Cadence:** One **module** at a time for **M1–M5** (smoke before set). **During friends alpha (M5), M6–M10 are tandem / as-wanted.** May revisit a module later; do not bounce mid-module.

## Upstream (other silo)

| Plan | Path | Status |
|------|------|--------|
| Strategy feed | `/mnt/DataStore/Ventures/bookfellow/bookfellow-business/docs/www-feed.md` | **live** — ingest on Meta change; bucket into lanes/backlog; www owns sequence |
| Product IA locks | `…/decisions/2026-07-22-product-ia-mockup-locks.md` | locked — requirements, not Build order |
| dual-feed contract | `…/protocol/dual-feed.md` | schema SoT for `docs/business-feed.md` |

Lab: `http://192.168.1.200:4003/` · Public placeholder: **https://bookfellow.io/** · stack [`docs/stack.md`](../docs/stack.md)

**Standing:** mobile-first web (iPhone/iPad) on every UI Build.

---

## Active / next (this silo)

Www judgment **2026-07-22** (Brian resequence) — shell → home → **bootstrap** → **friends alpha**, then **M6–M10 in tandem during alpha** → unlock → public. Feed Ready items are **folded into** modules; they do not define module order.

**Cadence note:** M1–M5 stay one-module / smoke / set. **During M5 (friends alpha), M6–M10 are parallel / as-wanted** — not a serial queue after alpha.

| Status | Module | Scope (smoke this, then stop) | Feed inputs (not order) |
|--------|--------|-------------------------------|-------------------------|
| **set** | **M1 — Account** | Auth (Better Auth) · lab lockdown · P38 prefs + companion_credits · auth UX + redeem wire · `/admin` · **5b credit security** · invite email · **auth harden** (12 + HIBP + DB rate limits; cookie/lifetime docs) · docs + Redis ready. **Smoke (2026-07-23):** ready db+redis; rate limit 429; password/HIBP gates; invite path + admin/queue gates from Plans 1–6. | Ready auth/P38 · P9 · Brian admin/invites · PII/security 2026-07-23 |
| **ACTIVE** | **M2 — App chrome** | Rail (Bf · Settings · Collapse · hover-expand) · Appearance (Slate+Harbor default) · Settings shell · phone hamburger + crumbs pattern. **Smoke:** empty signed-in shell phone+desktop; theme persists. | P37 · P28 · P34 chrome |
| queued | **M3 — Library** | Signed-in home · covers↔table · S/M/L · sort/custom · Recent/Pin · Add-a-book shell · eligibility decline+waitlist · signed-in covers (P41 API; placeholders OK until API wired). **Smoke:** empty + seeded shelf; decline path; covers look right. | P17 · P22 · P41 |
| queued | **M4 — Bootstrap** | Book room (Overview + companion frame · Recap structure · marks · day-1 motion subset) **plus** Codex-bootstrap AI folder/packs split (P42/P44 thin) · whitelist pregen enough to host curated titles · thin build theater OK. **Not** full AI/LLM. **Smoke:** open curated title → Recap/marks with bootstrap pack. | P29 · P35 · P30 · P42 · P44 · P6 subset · P32 thin |
| queued | **M5 — Friends alpha** | **Plan 1 (first slice):** **Sign in on placeholder** (bookfellow.io) for alpha + beta — small **header/corner** control; label “Sign in” only; href → **live app host `/sign-in` once public-ready** (not lab `:4003`); waitlist stays; create stays invite-gated. Then: invite-gated cut · phase banners · P43 + diagnostics · verbose logging required · session replay · account-delete escape · curated whitelist polish. **Opens M6–M10 tandem.** **Smoke (slice 1):** corner Sign in → live app `/sign-in`; **module smoke:** invite friend opens curated title E2E on bootstrap; feedback+events works. | P43 · P44 product cut · Brian alpha/beta program · placeholder entry 2026-07-23 |
| tandem (w/ M5) | **M6 — Real AI / LLM** | Real AI workers · pack pipeline beyond bootstrap · toward P20 (not kitchen-sink in one pass). Includes **audio recap (P15)** when Brian pulls it. **Smoke:** real gen path for a title; audio control UX when in scope. | P20 trajectory · P6 · P3/P4 · P15 |
| tandem (w/ M5) | **M7 — Notes** | Notes tab + chapter notes; same objects. **Smoke:** create/edit/survive reload. | P11 |
| tandem (w/ M5) | **M8 — Chat + spoiler contract** | FAB on book surfaces · fiction hard-block future · NF later-OK. **Build during alpha; release** per business Beta-2 / possible GA-without-chat. Honor **AI-off** toggle. **Smoke:** grounded answers; refuse spoiler; CTA to mark further; AI-off hides chat. | P10 · P14 |
| tandem (w/ M5) | **M9 — Cast** | Fiction roster + character notes + history-to-mark. **Smoke:** one title. | P18 |
| tandem (w/ M5) | **M10 — Quizzes** | Cumulative + chapter · run length 5/10/15 · history. **Smoke:** one attempt path. | P19 |
| queued | **M11 — Unlock UX** | Credits language · redeem/QR paths (no Stripe SKUs). **Smoke:** unlock a title without payment. | P2 · P9 |
| queued | **M12 — Public cutover** | Logged-out Home/How/Pricing/FAQ with P39/P40; replace placeholder when loop is demoable. | P33 · P39 · P40 |
| gated | **M13 — Billing** | Trial→sub SKUs · Checkout/Portal. | P1 — blocked on $ / trial / roll asks-back |

**Why this order (not feed R1–R7):**
- Chrome before Library / Book so surfaces share one shell (no redesign thrash).
- **Friends alpha early (M5)** on **bootstrap (M4)** — humans in before depth is finished.
- **M4 ≠ M6:** bootstrap packs/room to stand up alpha; **real AI/LLM is M6**.
- **During friends alpha, M6–M10 run in tandem** (real AI, Notes, Chat+spoiler, Cast, Quizzes — audio with M6 as wanted). Not serial after alpha.
- Public marketing after a smokeable product loop; placeholder already covers brand share.
- Full model-routing checklist (P20) stays backlogged beyond first M6 slices.

**Open plan files:** [M1 Account umbrella](plans/2026-07-22-m1-account-umbrella.plan.md) — chain **1–7 shipped** (incl. 5b). **M1 set.** Next module: **M2 — App chrome**.

---

## Queued plans

| Order | Plan | Path | Depends |
|------:|------|------|---------|
| — | **M1 umbrella** (shipped) | [`.cursor/plans/2026-07-22-m1-account-umbrella.plan.md`](plans/2026-07-22-m1-account-umbrella.plan.md) | — |
| 1–7 | M1 children (all shipped) | Plans 1–5 · 5b · 6 · 7 under `.cursor/plans/` | umbrella |

## Shipped

| Order | Plan | Lane | Path | Status |
|------:|------|------|------|--------|
| 1 | www-queue-lanes | foundation | `.cursor/plans/archive/2026-07-20-www-queue-lanes.plan.md` | **closed** 2026-07-20 — archived 2026-07-21 |
| 2 | dual-feed-www | foundation | `.cursor/plans/archive/2026-07-20-dual-feed-www.plan.md` | **closed** 2026-07-20 — archived 2026-07-21 |
| 3 | www-foundation-stack | foundation | `/mnt/DataStore/home/agent/.cursor/plans/www_foundation_stack_71f9027b.plan.md` | **complete** P0–P4 2026-07-20 |
| 4 | bookfellow-placeholder-site | placeholder-site | `.cursor/plans/archive/2026-07-21-bookfellow-placeholder-site.plan.md` | **closed** 2026-07-21 — https://bookfellow.io |
| 5 | privacy-page-professional | placeholder-site | `.cursor/plans/archive/2026-07-21-privacy-page-professional.plan.md` | **shipped** 2026-07-21 — P25 |
| 6 | terms-page-professional | placeholder-site | `.cursor/plans/archive/2026-07-21-terms-page-professional.plan.md` | **shipped** 2026-07-21 — P27 |
| 7 | placeholder-copy-pass | placeholder-site | `/mnt/DataStore/home/agent/.cursor/plans/placeholder_copy_pass_e5ce80b3.plan.md` | **shipped** 2026-07-21 |
| 8 | placeholder-timeline | placeholder-site | `sites/placeholder/timeline.html` | **shipped** 2026-07-23 — https://bookfellow.io/timeline.html |

## Habit

- Feed Meta bumps → **auto-ingest** (bucket Adopted / Later / backlog); refresh this Active/next only when www judgment changes — never paste business R-order
- New www plan → Active or Queued same turn; mark module smoke criteria in the plan
- Module “set” only after lab smoke; then advance Active to next module
- Reverse feed on filter-matching ship / stumble / learning / ask-back
