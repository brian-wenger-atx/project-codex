# Www backlog (bookfellow-www)

Agent-maintained deferred / upcoming product work. **Not** strategy idea-gen — that stays in business. Feed Ready = requirements to fold; **module sequence** lives in `.cursor/build-order.md`.

Update same turn when Brian adds prefs or priority, and on feed auto-ingest.

## Standing requirements

| Item | Notes |
|------|-------|
| **Mobile-first web** — iPhone + iPad from day 1 | Required on every UI Build. Native iOS/Android = other silo. |
| **Live-bound product code** | NAS = **lab host only** (cloud = final home). App/auth/admin/security code is **production-shaped** and must port — no throwaway product paths “because lab.” Staged UI polish OK when a later plan owns it. Brian 2026-07-22. |
| **Placeholder Wrangler deploy** | After Builds that change `sites/placeholder/`, run `wrangler pages deploy` same turn. Assume go-ahead — Brian 2026-07-21. Opt-out: “don’t deploy” / “no push”. |
| **Mockup locks** | Product IA approved 2026-07-22 — requirements without re-dictation. Not Build order. |
| **One module · smoke · set** | Brian 2026-07-22 — work one module; smoke before calling set; may revisit; no bouncing. **Exception:** during friends alpha, **M6–M10 tandem**. Sequence SoT = build-order Active/next. |
| **Www owns sequencing** | Business proposes / Ready’s; www decides module order. |
| **Chained plans** | Brian 2026-07-22 — when he asks for a chain: decide count first, then write **1 umbrella + N children**. Plan 1 = foundational; last = docs/cleanup; middles generally >1, like-item slices, each builds on prior. |

## Next (modules)

| # | Module | Status |
|---|--------|--------|
| M1 | Account (auth · P38 · lockdown · redeem · admin V1 · invite email) | **ACTIVE** — Plans 1–2 shipped; next Build Plan 3 account SoT |
| M2 | App chrome (rail · Appearance · phone chrome) | queued |
| M3 | Library (+ covers · eligibility) | queued |
| M4 | Bootstrap (book room + thin Codex packs / layout) | queued — stands up friends alpha |
| M5 | Friends alpha (invite cut · P43 feedback) | queued — opens M6–M10 tandem |
| M6–M10 | Real AI · Notes · Chat+spoiler · Cast · Quizzes | **tandem during M5** (as-wanted; audio with M6) |
| M11 | Unlock UX (no SKUs) | queued |
| M12 | Public cutover (P39/P40) | queued |
| M13 | Billing | gated on business $ / trial / roll |

Smoke criteria: `.cursor/build-order.md`.

## Security / Account scope (M1) — filed in chain

| Item | Notes |
|------|-------|
| **Auth / sessions** | **Better Auth** + explicit SQL; email/password; `user`\|`admin` |
| **Account persistence (P38)** | Plan 3 — prefs + `companion_credits`; per-book stub |
| **Create-account redeem** | Plan 4 wire; fulfillment M10 |
| **Lock down queue smoke** | Plan 2 — admin-only; durable headers; auth-secret fail-fast; Redis requirepass; CSP deferred |
| **Admin foundation V1** | Plan 5 — `/admin` list/disable/credits; no promote UI |
| **Invite email** | Plan 6 — CF Email Sending; create-account gated |
| **Docs / Redis ready / rename db global** | Plan 7 |

## Optional stubs

| Item | Notes |
|------|-------|
| **Real CSP (Content-Security-Policy)** | **M12** public cutover — design a real policy then; do not ship a weak “lab-safe” CSP earlier |
| **Redis in `/api/health/ready`** | Folded into M1 Plan 7 |
| **Persist Stripe webhook events** | When billing path is touched (M13) |

## Ingested — later / not M1–M5 blockers

| Item | Bucket | Notes |
|------|--------|-------|
| P42 modular repo layout | M4 thin | Align folders; AI vs packs split in bootstrap |
| P43 alpha feedback button | M5 | Every-page; with friends alpha |
| P44 friends alpha bootstrap AI | M4 → M5 | Codex-bootstrap before real AI (M6) |
| P15 audio recap | M6 (in M5 tandem band) | As-wanted with real AI during friends alpha |
| P20 model routing / AI checklist | M6+ / Later | Opens with M6; full checklist not one-shot |
| Business foundation map | Business parallel | Not a www gate for shell → alpha |
| Build theater P3/P4 | M4 thin / M6 deepen | |
| Voice P12, citations P24, genre P5 | After core depth (M8+) | |

## Post-foundation leftovers

| Item | Module | Notes |
|------|--------|-------|
| Real Gemini / replace `fake_gemini` | M6 | Bootstrap first in M4 |
| Object storage for pack artifacts | M4/M6 | |
| Stripe Checkout + Portal | M13 | |
| Use entitlements table | M11 | Exists unused in `001_init.sql` |
| Rename `__projectCodexDb` | chore | anytime |

## Copy / brand (M12)

| Item | Notes |
|------|-------|
| **P40 guiding principle** | Read more · understand · reflect; free floor as mission on logged-out |
| **P39 punchy voice** | Hooks under P40; hero pick still open (business) |

## Shipped

| Item | Status |
|------|--------|
| Foundation P0–P4 | **complete 2026-07-20** |
| Placeholder + P25 · P26 · P27 | **shipped 2026-07-21** — https://bookfellow.io |

## Deferred

| Item | Notes |
|------|-------|
| Privacy render script | Automate when policy copy churns |
| Placeholder / marketing imagery | Dedicated image-gen or designer |
| Visual stills V1/V8/V9 | Business visual-assets — when convenient |
| Cloud cutover | Separate plan |
| Hire designer | Before public polish — not a www plan yet |

## Out of this silo

| Item | Where |
|------|-------|
| Native iOS + Android | Other silo |
| Billing $ / trial / allotment answers | Business — before M13 |
| Foundation packet writing | Business |

## Changelog

- 2026-07-22 — **Resequence (Brian):** M4 bootstrap · M5 friends alpha · **M6–M10 tandem during alpha** · Unlock→M11 · Public→M12 · Billing→M13
- 2026-07-22 — **M1 Account chain filed** (7 plans): Better Auth + SQL, `/admin` V1, CF invite email, credits wallet; umbrella + children under `.cursor/plans/`
- 2026-07-22 — Standing: chained-plan shape (umbrella + bookends + middles)
- 2026-07-22 — Www module sequence (M1–M13); one-module smoke cadence; P42–P44 ingested; dropped feed R-order as authority
- 2026-07-21 — Standing: placeholder Wrangler deploy same turn
- 2026-07-21 — Lab foundation review: security scope, optional stubs, leftovers
- 2026-07-20 — Foundation closed; mobile-first; native = other silo
