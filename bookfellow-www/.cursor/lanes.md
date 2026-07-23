# Website lanes

Adopted + inferred map for Bookfellow www work. Taxonomy may change — add/remove/rename with a one-line why.

Strategy may **propose** lanes / Ready items in `www-feed.md`. Www **owns** consolidation and **module sequence** (see `.cursor/build-order.md` Active/next). Feed proposals are not a Pending mirror and Ready IDs are not Build order.

**Ingest (2026-07-22):** mockup locks + Ready requirements; P42–P44; AI P20 backlogged. **Resequence (Brian same day):** friends alpha → **M5**; M4 = bootstrap; real AI → **M6**; **M6–M10 tandem during friends alpha** (not serial after). **Program (Brian later same day):** phase banners · diagnostics+P43 · dual beta (site→chat) · AI-off · account delete. **PII/security (2026-07-23):** layered posture filed in backlog; M1 additive only — no Plans 1–5 rewrite.

## Adopted

| Lane | Purpose | Notes |
|------|---------|-------|
| foundation | App shell, routing, shared UI primitives | **closed** — P0–P4 |
| placeholder-site | bookfellow.io coming-soon lander | **shipped** 2026-07-21; **Timeline** page live 2026-07-23 (phases); **M5 Plan 1** = header/corner Sign in → live app host (when public-ready); waitlist stays |
| security | Auth/sessions, secrets, lab exposure, `/admin`, invite email, PII posture | **M1 set** 2026-07-23 — Plans 1–7 (incl. 5b) shipped; volume encrypt + CSP → M12/cloud. **MFA:** admins only (Brian lean); user MFA = business debate. Matrix: backlog § Security / PII posture |
| user-state | Account SoT for prefs + entered data (P38) | **M1** with security |
| rail-chrome | Monarch rail (Bf · Settings · Collapse + hover) | **M2** — P37 |
| appearance | Background + accent dials; Settings shell | **M2** — P28; default Slate+Harbor |
| mobile-logged-in | Phone hamburger + crumbs; iPad = desktop | **M2** chrome / **M4+** book surfaces — P34 |
| library | Signed-in home; shelf; eligibility; covers | **M3** — P17 · P22 · P41 |
| covers-referral | Associates API covers (signed-in); buy optional | **M3** — P41; no logged-out covers yet |
| book-companion-ia | Overview + companion frame; Recap default | **M4** bootstrap — P29 · P35 |
| motion | Day-1 animation surfaces | **M4** subset first — P30 |
| modules-layout | Human-readable module folders; AI vs packs split | **M4** bootstrap thin — P42 |
| ai-module | Bootstrap packs (M4) → real AI/LLM (M6) | **M4** P44 thin · **M6** during M5 tandem · P20 trajectory · P6 · P3/P4 |
| pack-versions | Versioned packs + opt-in refresh | **M4** thin · deepen in **M6** — P32 |
| friends-alpha | Invite-gated alpha cut | **M5** — invite+email **shipped** M1 Plan 6; **Plan 1** = header/corner Sign in → live app host (when public-ready); phase banners |
| alpha-feedback | Every-page bug/feedback/feature → strategy-queue | **M5** — P43; attach diagnostic events |
| alpha-diagnostics | Verbose journey logs + session replay (required thru beta; locked Settings toggle) | **M5** — pairs with P43; unlock toggle post-beta |
| account-delete | Self-serve close + data purge | **M5-adjacent** — escape if refuse diagnostics; ≠ admin disable |
| ai-companion-toggle | User off-switch for AI companion surfaces (not pack gen) | Prefs early; enforce **M8+**; future AI honors |
| session-jog | ~2 min Overview audio recap | **M6** (during M5 tandem band) — P15 |
| notes | Notes tab + chapter notes | **M7** (during M5 tandem) — P11 |
| companion-chat | In-book FAB chat; voice later | **M8** (during M5 tandem) — P10; **release** gated Beta-2 / GA lean (business) |
| spoiler-safe | Progress ceiling across AI surfaces | **M8** with chat — P14 |
| recall | Cast + quizzes (+ citations later) | **M9** / **M10** (during M5 tandem) — P18 · P19 |
| user-control | Credits · redeem/QR unlock UX | **M11** — P2 · P9; SKUs wait P1 |
| public-seo | Logged-out Home/How/Pricing/FAQ; P39/P40 | **M12** — after product loop smokeable |
| billing-trial | Trial → sub + SKUs | **M13 gated** — P1 |

## Inferred sequence

Www-owned modules — detail + smoke criteria live in `.cursor/build-order.md` **Active / next**.

| # | Module | Lanes |
|---|--------|-------|
| M1 | Account | `security` · `user-state` |
| M2 | App chrome | `rail-chrome` · `appearance` · `mobile-logged-in` (chrome) |
| M3 | Library | `library` · `covers-referral` |
| M4 | Bootstrap | `book-companion-ia` · `motion` (subset) · `modules-layout` · `ai-module` (bootstrap) · `pack-versions` (thin) |
| M5 | Friends alpha | `friends-alpha` · `alpha-feedback` · `alpha-diagnostics` · `account-delete` (adjacent) — **opens M6–M10 tandem** |
| M6–M10 | **Tandem during M5** | M6 `ai-module`+`session-jog` · M7 `notes` · M8 `companion-chat`+`spoiler-safe`+`ai-companion-toggle` enforce · M9–M10 `recall` — as-wanted, not serial; **chat release ≠ build** |
| M11 | Unlock UX | `user-control` |
| M12 | Public cutover | `public-seo` |
| M13 | Billing | `billing-trial` (gated) |

## Later / park

| Item | Feed | Status |
|------|------|--------|
| Full model routing / AI checklist — P20 | `model-routing` | **backlogged** — M6 opens the track; full checklist not a single-module blocker |
| Genre buckets / layouts — P5 | `genre-layouts` | later |
| Genre ML baselines — P23 | `genre-baselines` | parked |
| Citations — P24 | *(recall depth)* | after M9/M10 |
| Voice agent — P12 | `companion-chat` | after M8 text chat |
| Listen-along visual — P21 | `listen-along-visual` | research only |
| Mobile wrappers — P7 | *(other silo)* | deferred |
| Snipd listen capture — P16 | `listen-capture` | parked |
| Publisher placement V2 — P36 | *(V2)* | parked |
| Session tab nav | *(P15)* | parked |
| Logged-out Amazon covers | `covers-referral` | until Brian says |
| Business foundation packet | *(business)* | parallel — not a www Build gate for M1–M5 |

## Habit

- **Auto-ingest:** when `www-feed.md` Meta bumps (or Brian says check the feed) → bucket into Adopted / Later / backlog same turn; **do not** adopt business Build order
- One module active for **M1–M5**; smoke before set. **Exception:** during friends alpha, **M6–M10 tandem / as-wanted**. Revisit OK; bounce mid-module not OK
- On adopt → note business to mark feed `adopted in www` (www does not edit the feed)
- Sequence SoT = `.cursor/build-order.md` Active/next
