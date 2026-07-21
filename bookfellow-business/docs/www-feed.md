# Strategy → product feed

Canonical handoff for `codex-www` builders. Strategy canon stays in thesis / north-star / backlog / decisions; this file is a curated projection only.

**Reverse feed:** Www owns `/mnt/DataStore/Ventures/project-codex/codex-www/docs/business-feed.md` — **live**. Business reads it; does not write www. **Contract SoT:** [protocol/dual-feed.md](protocol/dual-feed.md).

## Meta

- **Last updated:** 2026-07-21
- **Updated because:** rename Phase C done — GitHub + local origin → `brian-wenger-atx/bookfellow`

## Direction snapshot

- **Brand (locked):** **Bookfellow** @ **bookfellow.io** live (P13 placeholder; **bookfellow.cc** + www redirect). **Rename in progress:** GitHub + local origin → `brian-wenger-atx/bookfellow` (Phase C ✅). Folder / NAS still `project-codex` · `codex-*` · `projectcodex` until Phases D–F — [bookfellow-rename](../.cursor/plans/2026-07-21-bookfellow-rename.plan.md). See [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md).
- Framing: **companion for your books** — recall + return-to-book; not a substitute. See [thesis.md](thesis.md).
- Equal **fiction/nonfiction** from day one; genre buckets with default layouts (user-overridable).
- Site model: **trial → subscription** (Audible-adjacent: bought the book → companion here).
- Pricing sketch (math unproven): **all tiers 1 free / 3 months**; paid **~$10/mo → +2 books/month**; à la carte **$6**; members **$4** extras (active sub). Position **under** Blinkist-class **~$15/mo unlimited** (comparison is inevitable even though product differs). Quarterly free makes the floor **concrete**.
- **Unlock paths (lean):** allotment · à-la-carte · **partner free-with-purchase** (proof user bought the book → companion free for that title). See [ideas/publisher-free-with-purchase-2026-07-21.md](ideas/publisher-free-with-purchase-2026-07-21.md). Default reading: free **companion**, not free hosted book.
- **Unlock permanence (lean / differentiator):** unlocked companions usable **without** active membership **for the life of the site**; if we fold, **~3 months guaranteed** access. Not absolute forever — **legal / ToS**. Permanence = more value (can support price). Cancel keeps prior unlocks under those terms; loses allotments + member pricing. See [north-star.md](north-star.md), [decisions/2026-07-20-v1-launch-leans.md](decisions/2026-07-20-v1-launch-leans.md).
- Rights: enhancement framing; **paid APIs only** for book text (free unpaid forbidden); **prefer publisher pilots** for free-with-purchase GTM.
- **Models (lean):** Gemini = convenience default only — **route by task** (parse / MCQ / chat / image / ASR) for best quality×price; hard-lock Brian-reviewed image prompts; see [ideas/model-routing-eval-2026-07-21.md](ideas/model-routing-eval-2026-07-21.md).
- **Image copy (lean):** words **on** images are intentional — **more for nonfiction, less for fiction**. Fix dupe/garble via model bake-off + prompt lock, not by stripping text.
- **Core surfaces (Brian):** **library** · **AI chat about the book** · **notes/reflections** (with resurfacing). Progress SoT = **user-marked** read/listened.
- Day-one supply (ops lean): prototype ingest via MAM; **purchase** when proven — public path must not depend on unlicensed supply.
- **Catalog boundaries (lean, edges locked):** **not every book.** In: trade fiction + trade NF (**English only**). Hard out includes textbooks, academic/scientific, comics/manga/GN, unofficial/unpublished, **self-pub/KDP (no allow-list)**, reference, periodicals, workbooks, picture books, tech standards. **Indefinitely parked** (not roadmap): poetry, plays/scripts, scripture, recipe cookbooks, art/coffee-table, CYOA, multi-rights anthologies, extreme long-tail, non-English. Declined → **waitlist notifies Brian**. Eligibility copy on **P13 placeholder**. See [decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md).
- **Geo / TM (Brian 2026-07-21):** **US-first** in privacy + unavailable copy; **web geo = AU only** (enough for now). **US ITU:** Phase A clear; **file before launch if product is real** — not now (fickle path; same for Melbourne). Canon: [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md).
- **Www foundation (harvested):** P0–P4 **complete** — stack locked (**Next.js App Router + TypeScript + PostgreSQL + Redis + BullMQ + Stripe + Python AI workers**); NAS lab `projectcodex` `:4003` live (Monarch-quiet shell); cloud = final home. **P13 placeholder shipped** — https://bookfellow.io (lane `placeholder-site`). Product lanes / SPs = separate www plans. See www `docs/business-feed.md` / `docs/stack.md`.
- Idea-gen remains paused for random invention; **Product proposals below are intentional handoffs** from strategy chat — www fleshes out and Builds.

## Priorities (now)

1. Dual foundation continues: business proposal packet (this silo) in parallel with www **product lanes** (foundation closed).
2. Flesh out Product proposals below into www plans when Brian works the www seat — do not wait for re-dictation.
3. Answer www asks-back before billing Builds: exact $ vs ~$15 competitor anchor, allotment roll, trial shape, public cutover. Unlock permanence leaned yes — design cancel/keep-access around that.
4. Chrome / marketing: use **Bookfellow** (not Project Codex) on any public-facing UI.

## Ready for planning

| ID | Item | Canon | Notes |
|----|------|-------|-------|
| P25 | **Privacy policy — apply to placeholder** | [legal/privacy-policy.md](legal/privacy-policy.md) | Publish **§1–§15 + both date lines**; Effective **May 14, 2026** (stable) · Last updated **July 21, 2026** (bump on each edit). **Banned public copy:** “original Bookfellow,” “first reading companion,” first-mover claims — [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md) |
| P26 | **Placeholder waitlist CTA** — replace “Say hello” | [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md) § waitlist posture | Primary CTA: **Join the waitlist** (or Get early access). Eyebrow: **Launching soon** OK. **No “beta”** on site. Mailto `?subject=Waitlist` OK until form; optional one-line under CTA: “US readers — early access opening soon.” |

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
| P8 | **Public brand name** — **Bookfellow**; domains **owned:** `bookfellow.io` + `bookfellow.cc` (no hosting yet) | Chrome/marketing = Bookfellow; full path/repo/NAS rename = [bookfellow-rename](../.cursor/plans/2026-07-21-bookfellow-rename.plan.md); DNS when public hostname ready | **locked** (rename plan separate) |
| P9 | **Publisher free-with-purchase** — proof user bought the book → **companion free** for that title (not hosted full book by default) | Third unlock path; publisher GTM; entitlements + redeem codes / affiliate buy — after product proof; see [ideas/publisher-free-with-purchase-2026-07-21.md](ideas/publisher-free-with-purchase-2026-07-21.md) | proposal |
| P10 | **In-book Q&A / chat** — ask about content for an unlocked title (grounded in pack + user notes; push back into the book) | **Core surface** (Brian); + P14 | proposal |
| P11 | **Notes / reflections** — user notes; auto-fill from chat/voice; **AI-assisted resurfacing** later | **Core surface** (Brian) | proposal |
| P12 | **Voice agent** — speak with companion (same ground rules as P10); voice→text; discard audio | Brian; audiobook-adjacent capture | proposal |
| P13 | **Placeholder site on bookfellow.io** — waitlist/coming-soon; **eligibility / what we support** (trade F/NF; not every book); **no secret leak** (no public Google Doc feature/stack dump) | Brand live for Reddit/friends; DNS when www ready; Brian wants bounds visible early | **adopted in www** (shipped 2026-07-21 — https://bookfellow.io) |
| P14 | **Spoiler-safe / progress-bounded** — applies to **chat, chapter preview, MCQ (chapter + cumulative), cast sheet, images/copy** — only up to **user-marked** progress | **Yes** (Brian); not chat-only | proposal |
| P15 | **Session solidify + “Previously on” jog** — **significant polish**; **fiction vs nonfiction variance** now; genre layouts later | Not reinvent — deepen; genre-quality research later (P23) | proposal |
| P16 | **Quick capture while listening** (Snipd-shaped) | **Parked / unlikely** — niche PKM love; needs *their* player (not Audible overlay); OCR photo ≠ Snipd. Marks + post-session notes cover our job | parked |
| P17 | **Library** — owned/unlocked titles + status (want / reading / finished light) | **Core surface** (Brian); not Goodreads-as-job | proposal |
| P18 | **Cast sheet** — characters/terms from **only what’s marked read** | **Required** (Brian); spoiler-safe fiction | proposal |
| P19 | **Progress-cumulative MCQ** — quiz on content **up to** marked progress (beyond per-chapter only); spoiler-gated like P14 | Brian | proposal |
| P20 | **Model routing** — task→model map; bake-off by need×cost; hard-lock image prompts; images keep text (more NF / less fiction) | **Strategy charter only** for now (Brian — lots to build; www good enough minus name). Bake-off plan later. [ideas/model-routing-eval-2026-07-21.md](ideas/model-routing-eval-2026-07-21.md) | proposal |
| P21 | **Listen-along visual guide** (research) — phone visuals while listening: denser words NF / lighter fiction; documentary-like beats | Brian thought; sync/distraction/rights open — research before Build | proposal |
| P22 | **Catalog eligibility gate** — decline unsupported classes before unlock/generate; clear “not supported”; **waitlist that notifies Brian** (no suggest-similar required) | Prevents “every book” promise; demand signal to Brian — [decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md) | proposal |
| P23 | **Genre quality baselines** (later) — research / ML·data pass on ~25 F + ~25 NF genres → what companion elements matter most; informs P5 layouts | Brian; **not immediate** | parked |
| P24 | **Citations** — cite **prior** chapters; **direct quotes** properly sourced; **future-chapter pointers** (“comes up later”) — **strong for nonfiction, light/rare for fiction** (spoil risk / low value). Prefer chapter/pack section over edition page #s | Brian | proposal |
| P25 | **Privacy policy** — draft + publish on-site; placeholder stub → waitlist-era → full launch policy | **Draft ready** — [legal/privacy-policy.md](legal/privacy-policy.md); apply now on placeholder; effective **May 14, 2026**; expand again at full launch | **ready (www apply)** |
| P26 | **Placeholder waitlist CTA** — launch-adjacent connect; no “beta” copy | Counter Melbourne “private beta” with **waitlist / early access** posture — [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md) | **ready (www apply)** |

## Lane proposals

| Proposed lane | Why | Status |
|---------------|-----|--------|
| `companion-build-ux` | Status + dummy theater (P3/P4) | proposal |
| `genre-layouts` | Genre buckets + defaults + override (P5) | proposal |
| `billing-trial` | Trial→sub + pricing sketch (P1/P2) | proposal |
| `companion-chat` | In-book Q&A + voice (P10/P12) | proposal |
| `notes` | Notes + auto-fill from chat/voice (P11) | proposal |
| `placeholder-site` | bookfellow.io waitlist / coming-soon (P13) | **adopted in www** (shipped 2026-07-21) |
| `spoiler-safe` | Progress-bounded AI (P14) | proposal |
| `session-jog` | Solidify + Previously-on jog — significant polish; F/NF variance (P15) | proposal |
| `listen-capture` | Quick capture while listening (P16) | **parked** |
| `library` | Owned/unlocked library (P17) | proposal |
| `cast-sheet` | Spoiler-safe cast sheet (P18) | proposal |
| `progress-mcq` | Cumulative MCQ to progress (P19) | proposal |
| `model-routing` | Task→model bake-off (P20) | proposal |
| `listen-along-visual` | While-listen visual guide research (P21) | proposal |
| `catalog-eligibility` | Title class gate + decline UX (P22) | proposal |
| `genre-baselines` | Genre quality research / ML later (P23) | parked |
| `citations` | Prior/future chapter + quote citations (P24) | proposal |

## Open questions that block product

1. ~~Unlocked books survive cancel?~~ **Lean yes, scoped** — keep using without active sub **for life of site**; **~3 months guaranteed** if we fold. Not absolute forever — **legal**. $4 rate still needs active sub. Permanence = more value.
2. Exact membership $ vs Blinkist-class ~$15 unlimited (hold ~$10 / lower / closer under $15)? Do $6/$4 move? *(before billing Build)*
3. Trial length / what trial includes? *(www asks-back — before billing Build)*
4. When anything **public-facing** must cut over from NAS lab / prototype supply to purchased/cloud-only? *(www asks-back — before public URL)*
5. Unused allotments roll? *(before billing Build)*

~~6. Catalog eligibility edges~~ **Locked 2026-07-21** — self-pub hard no; parked classes indefinite (not soft-allow); waitlist→Brian; eligibility on P13. See decision doc.

(Entity/LLC timing is venture ops — not listed here.)

## Out of scope / do not build yet

| Item | Why |
|------|-----|
| Topic video outlinks | Parked — dilutes core ([ideas/backlog.md](ideas/backlog.md)) |
| Location/brand tie-ins | Parked — maybe/never ([ideas/backlog.md](ideas/backlog.md)) |
| Snipd-style one-tap listen capture (P16) | Parked/unlikely — niche; needs in-app player; Audible overlay unrealistic |
| Genre ML baselines across ~50 genres (P23) | Later research — after F/NF polish on session/jog |
| Wholesale backlog stubs as www plans | Idea-gen paused; use Product proposals table instead |
| Public dependence on unlicensed supply | Prototype-only lean; acquisition/publisher story forbids it |
| **Every / any book** as promise | Catalog boundaries lean — [decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md) |
| Textbooks; academic/scientific monographs & journals | Wrong job + edition/rights hell |
| Comics / manga / graphic novels / webtoons | Different progress + image-primary product |
| Unofficial / unpublished / fanfic / “my PDF” | Rights + quality + support |
| Self-pub / KDP-only / no imprint | Hard decline — no allow-list |
| Reference, periodicals, workbooks, picture books, tech standards | Not chapter companion job |
| Poetry, plays/scripts, scripture, recipe cookbooks, art/coffee-table, CYOA, multi-rights anthologies, extreme long-tail, non-English | **Indefinitely parked** — not roadmap |

## Changelog (short)

- 2026-07-21 — **Rename Phase C:** GitHub + local origin → `brian-wenger-atx/bookfellow`; GIT.md/README updated; folders/NAS still pending D–F
- 2026-07-21 — **P25 privacy policy draft** — [legal/privacy-policy.md](legal/privacy-policy.md); **Ready** for www apply; effective **May 14, 2026**
- 2026-07-21 — **P26 waitlist CTA** — launch-adjacent connect; no “beta” on public site
- 2026-07-21 — Competitive canon: substantive US surface (policy, dates, product path) vs Melbourne beta; no first-mover public copy
- 2026-07-21 — **P25 privacy policy** proposal; **backlog** draft; **AU geo live** (Cloudflare)
- 2026-07-21 — **Geo + US TM plan:** US-first; **AU excluded at launch**; US ITU Phase A clear; Phase B deferred pre-launch — [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md)
- 2026-07-21 — P13 / `placeholder-site` **adopted in www** — bookfellow.io live (Cloudflare Pages; .cc + www redirect)
- 2026-07-21 — Catalog edges **locked:** self-pub hard no; parked indefinite; waitlist→Brian; eligibility on P13; P22/P13 updated
- 2026-07-21 — Future-chapter pointers **NF-strong / fiction-light**; model bake-off stays strategy (www good enough minus name — Brian pivots to naming)
- 2026-07-21 — Spoiler-safe = all progress-gated surfaces (chat/preview/MCQ/…); P15 significant polish + F/NF; P16 parked (Snipd niche); P24 citations lean; P23 genre ML later
- 2026-07-21 — **Catalog boundaries:** not every book; trade F/NF in; textbooks/academic/comics/unofficial/etc. hard out; P22 eligibility gate ([decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md))
- 2026-07-21 — **Image copy lean:** words on images intentional — more nonfiction, less fiction (reject “strip text” advice); fix dupe via bake-off + prompt lock
- 2026-07-21 — Brian product lean: library/chat/notes core; P14 yes; cast sheet required; cumulative MCQ; model routing (not Gemini-locked); listen-along visual research; P16 optional/explained; [ideas/model-routing-eval-2026-07-21.md](ideas/model-routing-eval-2026-07-21.md)
- 2026-07-21 — Broader companion glean (BookPal/Recall/Snipd/Readwise/…) → P14 spoiler-safe, P15 session/jog, P16 listen-capture; [ideas/glean-bookfellow-app-2026-07-21.md](ideas/glean-bookfellow-app-2026-07-21.md)
- 2026-07-21 — **Rename plan:** full Project Codex → Bookfellow (folders/GitHub/NAS/packages) — [bookfellow-rename](../.cursor/plans/2026-07-21-bookfellow-rename.plan.md); P8 brand **locked**; path migration pending Build
- 2026-07-21 — Competitor glean → P10 chat Q&A, P11 notes auto-fill, P12 voice agent, P13 placeholder (no leak); [ideas/glean-bookfellow-app-2026-07-21.md](ideas/glean-bookfellow-app-2026-07-21.md)
- 2026-07-21 — **Domains owned:** bookfellow.io + bookfellow.cc (no hosting yet)
- 2026-07-21 — **Bookfellow locked as name lean** — primary **bookfellow.io**; Brian swoops despite Melbourne .app beta; pass .com; GTM friends→Reddit
- 2026-07-21 — **bookfellow.app collision** — live Melbourne reading-companion beta; P8 paused keep-vs-rename; GTM: friends alpha → Reddit beta
- 2026-07-21 — Bookfellow domain: prefer **bookfellow.io**; pass .com @ ~$3895
- 2026-07-21 — P9 publisher free-with-purchase (companion free with proof of book buy); third unlock path ([ideas/publisher-free-with-purchase-2026-07-21.md](ideas/publisher-free-with-purchase-2026-07-21.md))
- 2026-07-21 — Brand lean **Bookfellow** (Brian likes); `bookfellow.io`/`.cc` likely free; watch BookFellows study platform; not locked ([naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md))
- 2026-07-21 — Companion five check: Pageside/Bookfellow clearest; drop Storymate; Alongside/Bookside crowded ([naming/companion-five-2026-07-21.md](naming/companion-five-2026-07-21.md))
- 2026-07-21 — Shortlist pass (Inkglow clearest; drop Afterlight/Throughline/Afterthought) + companion names ([naming/shortlist-companions-2026-07-21.md](naming/shortlist-companions-2026-07-21.md))
- 2026-07-21 — Afterglow cousins: reading + continuing-memory name set ([naming/afterglow-cousins-2026-07-21.md](naming/afterglow-cousins-2026-07-21.md))
- 2026-07-21 — Naming shortlist: `.read` Amazon-closed; Continuum Reader collision → prefer drop Continuum; Afterglow/Lodestone need non-`.read` URLs ([naming/shortlist-2026-07-21.md](naming/shortlist-2026-07-21.md))
- 2026-07-20 — Brand naming: 100 ideas filed (`docs/naming/…`); P8 public name proposal (not Ready — Brian shortlists first)
- 2026-07-20 — Mobile lean: iOS + Android website wrappers + core cache (P7 / `mobile-wrappers`); after web
- 2026-07-20 — Unlock permanence scoped: life of site + ~3mo if fold; legal/ToS flag; marketing must not say absolute forever
- 2026-07-20 — Competitive ~$15 Blinkist-class anchor; aim cheaper; permanence = value (not discount); quarterly free = concrete clarity
- 2026-07-20 — Unlock permanence lean (keep content w/o active sub); considering lower membership price; P2 + open Qs updated
- 2026-07-20 — Pricing lean → allotment + à-la-carte (1 free/qtr all tiers; paid $10→+2/mo; $6/$4); P2 + open questions updated
- 2026-07-20 — Harvested www reverse feed; dual-feed pair complete; Ready reverse-feed cleared; echoed P0+P1 foundation baseline (stack + NAS lab)
- 2026-07-20 — dual-feed-business Built; contract SoT `docs/protocol/dual-feed.md`; Ready brief points at schema
- 2026-07-20 — V1 leans + Product proposals P1–P6 + lane proposals; Ready: business-feed; pricing/supply/fiction locks updated
- 2026-07-20 — Initial feed seeded from thesis / north-star / backlog (Ready empty)
