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
| **ACTIVE** | **M1 — Account** | Auth (Better Auth) · lab lockdown (admin queue + durable headers + auth-secret fail-fast + Redis requirepass; CSP→M12) · P38 prefs + companion_credits · auth UX + redeem wire · `/admin` foundation · invite email gate · docs. **Smoke:** invite→create→session/prefs; queue admin-only; admin credits/disable. | Ready auth/P38 · P9 · Brian admin/invites |
| queued | **M2 — App chrome** | Rail (Bf · Settings · Collapse · hover-expand) · Appearance (Slate+Harbor default) · Settings shell · phone hamburger + crumbs pattern. **Smoke:** empty signed-in shell phone+desktop; theme persists. | P37 · P28 · P34 chrome |
| queued | **M3 — Library** | Signed-in home · covers↔table · S/M/L · sort/custom · Recent/Pin · Add-a-book shell · eligibility decline+waitlist · signed-in covers (P41 API; placeholders OK until API wired). **Smoke:** empty + seeded shelf; decline path; covers look right. | P17 · P22 · P41 |
| queued | **M4 — Bootstrap** | Book room (Overview + companion frame · Recap structure · marks · day-1 motion subset) **plus** Codex-bootstrap AI folder/packs split (P42/P44 thin) · whitelist pregen enough to host curated titles · thin build theater OK. **Not** full AI/LLM. **Smoke:** open curated title → Recap/marks with bootstrap pack. | P29 · P35 · P30 · P42 · P44 · P6 subset · P32 thin |
| queued | **M5 — Friends alpha** | Invite-gated cut · alpha feedback button (P43) · curated whitelist polish. **Opens the tandem band** for M6–M10. **Smoke:** invite friend opens curated title end-to-end on bootstrap. | P43 · P44 product cut |
| tandem (w/ M5) | **M6 — Real AI / LLM** | Real AI workers · pack pipeline beyond bootstrap · toward P20 (not kitchen-sink in one pass). Includes **audio recap (P15)** when Brian pulls it. **Smoke:** real gen path for a title; audio control UX when in scope. | P20 trajectory · P6 · P3/P4 · P15 |
| tandem (w/ M5) | **M7 — Notes** | Notes tab + chapter notes; same objects. **Smoke:** create/edit/survive reload. | P11 |
| tandem (w/ M5) | **M8 — Chat + spoiler contract** | FAB on book surfaces · fiction hard-block future · NF later-OK. **Smoke:** grounded answers; refuse spoiler; CTA to mark further. | P10 · P14 |
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

**Open plan files:** [M1 Account umbrella](plans/2026-07-22-m1-account-umbrella.plan.md) — **7-plan chain**. Plans 1–2 **shipped** 2026-07-22. Next Build: Plan 3 account SoT.

---

## Queued plans

| Order | Plan | Path | Depends |
|------:|------|------|---------|
| — | **M1 umbrella** | [`.cursor/plans/2026-07-22-m1-account-umbrella.plan.md`](plans/2026-07-22-m1-account-umbrella.plan.md) | — |
| 1 | Foundation — identity & sessions | […-1-foundation](plans/2026-07-22-m1-account-1-foundation.plan.md) | umbrella |
| 2 | Lab lockdown | […-2-lab-lockdown](plans/2026-07-22-m1-account-2-lab-lockdown.plan.md) | Plan 1 |
| 3 | Account SoT (P38) | […-3-account-sot](plans/2026-07-22-m1-account-3-account-sot.plan.md) | Plan 2 |
| 4 | Auth UX + redeem wire | […-4-auth-ux-redeem](plans/2026-07-22-m1-account-4-auth-ux-redeem.plan.md) | Plan 3 |
| 5 | Admin foundation V1 | […-5-admin-foundation](plans/2026-07-22-m1-account-5-admin-foundation.plan.md) | Plan 4 |
| 6 | Invites + email | […-6-invites-email](plans/2026-07-22-m1-account-6-invites-email.plan.md) | Plan 5 |
| 7 | Docs + cleanup | […-7-docs-cleanup](plans/2026-07-22-m1-account-7-docs-cleanup.plan.md) | Plan 6 |

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

## Habit

- Feed Meta bumps → **auto-ingest** (bucket Adopted / Later / backlog); refresh this Active/next only when www judgment changes — never paste business R-order
- New www plan → Active or Queued same turn; mark module smoke criteria in the plan
- Module “set” only after lab smoke; then advance Active to next module
- Reverse feed on filter-matching ship / stumble / learning / ask-back
