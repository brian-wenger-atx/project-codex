# Strategy → product feed

Canonical handoff for `bookfellow-www` builders. Strategy canon stays in thesis / north-star / backlog / decisions; this file is a curated projection only.

**Reverse feed:** Www owns `/mnt/DataStore/Ventures/bookfellow/bookfellow-www/docs/business-feed.md` — **live**. Business reads it; does not write www. **Contract SoT:** [protocol/dual-feed.md](protocol/dual-feed.md).

## Meta

- **Last updated:** 2026-07-23
- **Updated because:** **P51** content density dial (condensed / average / verbose) — mainly chapter reviews; AI-phase proposal

## Direction snapshot

- **Brand (locked):** **Bookfellow** @ **bookfellow.io** live (P13 placeholder; **bookfellow.cc** + www redirect). **Rename shipped** (A–G): tree `…/Ventures/bookfellow/{bookfellow-business,bookfellow-www}`, GitHub `brian-wenger-atx/bookfellow`, NAS lab **`bookfellow`** on `:4003` — [bookfellow-rename](../.cursor/plans/archive/2026-07-21-bookfellow-rename-cutover.plan.md). See [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md).
- Framing: **companion for your books** — recall + return-to-book; not a substitute. See [thesis.md](thesis.md). **Founder-first lean:** gold for Brian; others if worth his time. DIY NotebookLM-class = **not** a peer threat (bad chapter UX).
- **Guiding principle (company / P40):** we want people to **read more**, help them **understand** what they read, and **encourage reflection** — why the site exists. **1 free companion / 3 months (all tiers)** expresses that principle. Must land on **logged-out** home / How / Pricing / FAQ. Canon: [decisions/2026-07-22-guiding-principle-read-understand-reflect.md](decisions/2026-07-22-guiding-principle-read-understand-reflect.md).
- **Marketing voice (lean):** short punchy hooks — *Enhance the books you own* · *Supercharge / Upgrade your learning* · *Dig deeper into the characters/story* · *Recall the throughlines*. Bank: [product/voice-copy.md](product/voice-copy.md) (P39). Hooks sit **under** P40.
- Equal **fiction/nonfiction** from day one; genre buckets with default layouts (user-overridable).
- Site model: **trial → subscription** (Audible-adjacent: bought the book → companion here).
- Pricing sketch (math unproven): **all tiers 1 free / 3 months** (mission-backed); paid **~$10/mo → +2 books/month**; à la carte **$6**; members **$4** extras (active sub). Position **under** Blinkist-class **~$15/mo unlimited** (comparison is inevitable even though product differs). Quarterly free makes the floor **concrete**.
- **Unlock paths (lean):** **credits** (membership allotment) · à-la-carte · **partner redeem / QR** (code or publisher QR → companion free for that title; no credit spend). See [ideas/publisher-free-with-purchase-2026-07-21.md](ideas/publisher-free-with-purchase-2026-07-21.md). Default reading: free **companion**, not free hosted book.
- **User-facing copy:** never “notify Brian” / founder names — professional product voice. Declined titles → waitlist (“we’ll email you if support expands”). **Internal ops** may still route waitlist demand to Brian.
- **Unlock permanence (lean / differentiator):** unlocked companions usable **without** active membership **for the life of the site**; if we fold, **~3 months guaranteed** access. Not absolute forever — **legal / ToS**. Permanence = more value (can support price). Cancel keeps prior unlocks under those terms; loses allotments + member pricing. See [north-star.md](north-star.md), [decisions/2026-07-20-v1-launch-leans.md](decisions/2026-07-20-v1-launch-leans.md).
- Rights: enhancement framing; **paid APIs only** for book text (free unpaid forbidden); **prefer publisher pilots** for free-with-purchase GTM. **Publisher plan (P45):** offer + redeem/attribution + economics + Partner page + later placement — [ideas/publisher-plan-2026-07-22.md](ideas/publisher-plan-2026-07-22.md). Redeem: **enter = assign unlock** (one event). **Covers (P41):** signed-in Library/book pages via Associates **API image URLs** first (scrape = gaps only); buy links optional; commissions **nice-to-have / OK if $0**; **look** compliant always; **no** logged-out Amazon covers until Brian says ([ideas/cover-art-referral-lean-2026-07-22.md](ideas/cover-art-referral-lean-2026-07-22.md)).
- **Models (lean):** Gemini = convenience default only — **route by task** (parse / MCQ / chat / image / ASR) for best quality×price; hard-lock Brian-reviewed image prompts; see [ideas/model-routing-eval-2026-07-21.md](ideas/model-routing-eval-2026-07-21.md). **Friends alpha** may ship **Codex-bootstrap** packs first (**P44**); full P20 = post-alpha quality/cost.
- **Repo layout (lean / P42):** human-readable **modules** (lanes ↔ folders); **AI/LLM module** (code + loop/pack guide) separate from **packs/artifacts** — [ideas/modular-repo-layout-2026-07-22.md](ideas/modular-repo-layout-2026-07-22.md).
- **Alpha/beta feedback (P43):** every-page button (bug / feedback / feature) → bucketed → strategy-queue; pairs with verbose diagnostics — [ideas/alpha-feedback-button-2026-07-22.md](ideas/alpha-feedback-button-2026-07-22.md).
- **Alpha/beta program (lean / P47–P50):** phase banners; **dual beta** (site → chat); verbose diagnostics **required** thru beta (locked toggle) + session replay; refuse → account delete; **AI-off** for companion surfaces (packs stay on). Business owns NDA/consent copy. Canon: [ideas/alpha-beta-program-2026-07-22.md](ideas/alpha-beta-program-2026-07-22.md).
- **Image copy (lean):** words **on** images are intentional — **more for nonfiction, less for fiction**. Fix dupe/garble via model bake-off + prompt lock, not by stripping text.
- **Core surfaces (Brian):** **library** · **AI chat about the book** · **notes/reflections** (with resurfacing). Progress SoT = **user-marked** read/listened.
- Day-one supply (ops lean): prototype ingest via MAM; **purchase** when proven — public path must not depend on unlicensed supply.
- **Catalog boundaries (lean, edges locked):** **not every book.** In: trade fiction + trade NF (**English only**). Hard out includes textbooks, academic/scientific, comics/manga/GN, unofficial/unpublished, **self-pub/KDP (no allow-list)**, reference, periodicals, workbooks, picture books, tech standards. **Indefinitely parked** (not roadmap): poetry, plays/scripts, scripture, recipe cookbooks, art/coffee-table, CYOA, multi-rights anthologies, extreme long-tail, non-English. Declined → **waitlist notifies Brian**. Eligibility copy on **P13 placeholder**. See [decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md).
- **Geo / TM (Brian 2026-07-21):** **US-first** in privacy + unavailable copy; **web geo = AU only** (enough for now). **US ITU:** Phase A clear; **file before launch if product is real** — not now (fickle path; same for Melbourne). Canon: [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md).
- **Www foundation (harvested):** P0–P4 **complete** — stack locked (**Next.js App Router + TypeScript + PostgreSQL + Redis + BullMQ + Stripe + Python AI workers**); NAS lab **`bookfellow`** `:4003` live (Monarch-quiet shell); cloud = final home. **P13 placeholder shipped** — https://bookfellow.io (lane `placeholder-site`). **P25 Privacy · P26 waitlist · P27 Terms** live on placeholder (**adopted**). Product lanes / SPs = separate www plans. See www `docs/business-feed.md` / `docs/stack.md`.
- **Product IA (2026-07-22):** **Mockups approved** — Library home; Overview + companion frame (Recap default); credits; square covers; Slate+Harbor; phone hamburger+crumbs; account persistence — [decisions/2026-07-22-product-ia-mockup-locks.md](decisions/2026-07-22-product-ia-mockup-locks.md). **Ready** = ok to plan from (requirement readiness); **www owns module/Build sequence** (M1–M13 in www `build-order.md` / `lanes.md`) — R-IDs are **not** execution order.
- **Foundation vs www:** business foundation map is **parallel** — not a gate for www shell modules **M1–M4**.
- Idea-gen remains paused for random invention; **Product proposals below are intentional handoffs** from strategy chat — www fleshes out and Builds.

## Priorities (now)

1. **Calendar (lean):** **friends alpha ~mid-August 2026** → **Beta-1 site ~October** → **Beta-2 chat** (or GA without chat — open) → **legal before October** (incl. NDA/diagnostics). Canon: [proposal/milestones.md](proposal/milestones.md) · [alpha-beta-program](ideas/alpha-beta-program-2026-07-22.md). Www: **M4→M5** for mid-Aug; depth **M6–M10** tandem. **No alpha Build plan yet**.
2. **Foundation (parallel):** Core 3 + fuller map — [proposal/foundation-map.md](proposal/foundation-map.md). Next business night: [foundation meeting](meetings/2026-07-23-foundation-business-meeting.md) (checklist until haul). Does **not** gate mid-Aug alpha; still needed before clean paid/public.
3. **GTM lean:** friends alpha on **bootstrap packs/AI** (**P44**) before full P20 — [ideas/friends-alpha-bootstrap-2026-07-22.md](ideas/friends-alpha-bootstrap-2026-07-22.md). Full AI checklist: [ideas/ai-llm-decision-backlog-2026-07-22.md](ideas/ai-llm-decision-backlog-2026-07-22.md).
4. **Www product:** Ready requirements below = preference input. **Www sequences** modules. Do not treat full AI as finished until P20 (post–friends-alpha).
5. **Layout lean (P42):** modules ↔ lanes; AI/LLM folder ≠ packs folder — [ideas/modular-repo-layout-2026-07-22.md](ideas/modular-repo-layout-2026-07-22.md) (**M4** thin cut).
6. **Publisher plan (P45):** Partner page + remaining econ (unit / who invoices) before pilots; billable event **locked** (enter = unlock).
7. Answer asks-back **before billing (M13)**: $ vs ~$15, credit roll, trial, public supply cutover. Permanence leaned yes.
8. Chrome / marketing: **Bookfellow**; stills **V1/V8/V9** when convenient — [visual-assets.md](product/visual-assets.md).

## Ready requirements (not Build order)

**Mockups approved 2026-07-22.** Rows below = **ok to plan from** — requirement clusters + preference input only. **Www owns Active/next** (modules **M1–M13**); do **not** copy R1–R7 as the queue. Canon: [decisions/2026-07-22-product-ia-mockup-locks.md](decisions/2026-07-22-product-ia-mockup-locks.md) · digest [conversations/2026-07-22-mockup-product-ia.md](conversations/2026-07-22-mockup-product-ia.md).

| ID | Item | Canon | Notes |
|----|------|-------|-------|
| R1 | **Auth shell + account persistence** | P33 auth · **P38** · [user-state](ideas/user-state-persistence-2026-07-22.md) | Server SoT for prefs + entered data; Create-account redeem field; Sign in → redeem in-app. Www: **M1** |
| R2 | **Library + rail + Appearance** | **P17** · **P37** · **P28** | Signed-in home = Library; square covers; credits subtle; Bf/Settings/Collapse + hover-expand; default **Slate + Harbor**. Www: **M2–M3** |
| R3 | **Overview + companion frame** | **P29** · **P35** · **P30** · **P10** · **P11** · **P18** · **P19** · **P15** | Recap default + auto-open; FAB chat; Notes/Cast/Quizzes; ~2 min audio donut; day-1 motion subset. Www splits across **M4–M9** (not one slice) |
| R4 | **Unlock / credits / redeem+QR UX** | **P2** · **P9** | Credit language + redeem/QR paths. **Do not Build billing SKUs** until open $ / trial / roll questions lock (P1). Www: **M10** |
| R5 | **Pregen + pack versions** | **P6** · **P32** | Full-title generate on unlock; versioned packs + opt-in refresh — with gen pipeline. Www: bootstrap **M4**; real AI / pregen depth **M6+** (tandem in alpha) |
| R6 | **Logged-out + mobile** | **P33** · **P34** · **P39** · **P40** | Public Home/How/Pricing/FAQ + phone chrome; copy = punchy hooks under guiding principle. Www: chrome early / public **M12** |
| R7 | **Covers + buy + gates** | **P41** · **P14** · **P22** | Signed-in covers via Associates **API** first (scrape = gaps); buy links optional; $0 OK; **no** logged-out Amazon covers yet; spoiler-safe + eligibility waitlist. Www: covers **M3**; spoiler with chat **M6** |

## Product proposals

Www should treat these as **incoming from strategy** — flesh out in www (plans/UI), not re-decide from scratch unless blocked. Status: **Ready** = ok to plan from (requirement readiness; **not** Build order); **proposal** = still fleshing or blocked; **adopted in www** = www owns in `lanes.md` / shipped (or **adopted for sequencing** = on www module map, not Built yet).

| ID | Proposal | Why it matters | Status |
|----|----------|----------------|--------|
| P1 | Trial → subscription site flow | Monetization shape; Audible-adjacent motion | proposal |
| P2 | Pricing UX: **credits** (1 free/qtr; paid ~$10 → +2 credits/mo); $6/$4 extras; unlocks usable after cancel **for life of site** (+ ~3mo if fold). Credits shown **subtly** (expanded sidebar above avatar; quiet on Library; **primary on Add a book**). No hero “unlocked” count. **Logged-out Pricing:** free floor = **mission** (P40), not fine print. | SKU + cancel/keep-access copy must match ToS; credit language replaces “books left” allotment speak | **Ready** (R4 — UX only; SKUs wait P1) |
| P3 | Professional companion **build-in-progress** status UI — mainly at **unlock / credit spend** while full-title generation runs | Launch-quality trust; pairs with pregen lean (P6/P29) | proposal |
| P4 | **Dummy/build theater** — short intentional “building” at unlock even when fast — **not** per chapter-mark (content already on server) | Perceived craft at unlock; avoid Codex-style wait on mark-read | proposal |
| P5 | **Genre buckets** — genre-native elements; default layout per genre; user override | Equal fiction/nonfiction; differentiation; layout system | proposal |
| P6 | Day-one supply + **pregenerate on unlock** — when a title is unlocked (credit / redeem / QR), **run all AI companion processes for the whole book immediately** so chapter packs are on the server before the user marks chapters read (unlike Codex on-demand). Mark-read mainly advances spoiler bounds (+ light personalization). | Unblocks instant chapter open; backend heavy at unlock | **Ready** (R5) |
| P7 | **iOS + Android** apps as **website wrappers** with **core assets pre-downloaded/cached** | Store presence; offline-ish core; web stays SoT — schedule after web solid; watch store/IAP rules | proposal |
| P8 | **Public brand name** — **Bookfellow**; domains **owned:** `bookfellow.io` + `bookfellow.cc` (no hosting yet) | Chrome/marketing = Bookfellow; full path/repo/NAS rename = [bookfellow-rename](../.cursor/plans/archive/2026-07-21-bookfellow-rename-cutover.plan.md); DNS when public hostname ready | **locked** (rename plan separate) |
| P9 | **Publisher redeem / QR** — Signed-in → Redeem / Scan QR in Library. **Signed-out new user** → Create account with “Have a redemption code?” (prefill from QR/`/r/[code]`). **Sign in side: no code field** — members add codes in-app. Companion free; no credit. **Lean (Brian):** code **entered** → **auto-assign book** → enter = unlock = **one billable event**. Www may keep `pending_redeem_code` → fulfill plumbing; **commercially one count** (do not bill/settle twice). Create-account pending + `/r/[code]` **shipped** (M1 Plan 4); fulfill unlock later module. Unit / who invoices still open. | Third unlock path; auth UX P33; part of **P45** | **Ready** (R4 UX); auth/redeem wire **shipped**; event locked; unit open |
| P10 | **In-book chat (FAB)** — floating control **bottom-right on all book surfaces** (not an “Ask” nav item). Opens prompt about the book / current mark. Grounded in pack + notes. **Fiction:** hard-block future plot even if asked — refuse and tell user to mark chapters X… as read. **Nonfiction:** may preview later themes (“as we’ll see later…”). Overview is the hub most links leave from. | **Core surface**; spoiler self-awareness is the product | **Ready** (R3) |
| P11 | **Notes** — user-entered notes (typed / chat / voice). **Same note objects** on Notes tab and on each **chapter page**. Full-width rows with metadata: chapter link, source, updated. Edit in either place. | **Core surface** | **Ready** (R3) |
| P12 | **Voice agent** — speak with companion (same ground rules as P10); voice→text; discard audio | Brian; audiobook-adjacent capture | proposal |
| P13 | **Placeholder site on bookfellow.io** — waitlist/coming-soon; **eligibility / what we support** (trade F/NF; not every book); **no secret leak** (no public Google Doc feature/stack dump) | Brand live for Reddit/friends; DNS when www ready; Brian wants bounds visible early | **adopted in www** (shipped 2026-07-21 — https://bookfellow.io) |
| P14 | **Spoiler-safe / progress-bounded** — chat FAB, chapter open, MCQ, cast, images/copy. **Fiction chat:** refuse future even on direct ask + CTA to mark further chapters. **Nonfiction chat/citations:** future pointers OK (P24). | **Yes** (Brian) | **Ready** (R7) |
| P15 | **~2 min audio recap (Previously on)** — Overview control left of cover: idle = audio + “~2 min recap”; on play → **donut progress** in the same control. Brief retrieve (audio pregen’d at unlock). Distinct from companion **Recap tab** (P35 quick-read). No Session tab. | Audio jog on Overview | **Ready** (R3) |
| P16 | **Quick capture while listening** (Snipd-shaped) | **Parked / unlikely** — niche PKM love; needs *their* player (not Audible overlay); OCR photo ≠ Snipd. Marks + post-session notes cover our job | parked |
| P17 | **Library** — **signed-in home / default page**. Shelf of companions + light status. **Bf mark** (sidebar) + **Library** nav + top **Bookfellow** wordmark → Library. **Add a book** = Library CTA / popout (not sidebar). View: **table ↔ covers** + **S/M/L**; covers are **square audiobook art** (Audible-style). Sort + **Custom**. Sidebar: Library · divider · Recent 3 **or** Pin 3. **Credits** subtle under Library header. Footer: quiet “N books in your library.” | **Core surface** (Brian); not Goodreads-as-job | **Ready** (R2) |
| P18 | **Cast sheet** — fiction; **full-width table/roster** (name, status, where, about). User **notes on characters**. **History** popout per character (plot points to mark). | Required for fiction | **Ready** (R3) |
| P19 | **Quizzes** — cumulative ~50% width primary; chapter rows with times/avg/last %. User picks **run length 5 / 10 / 15** questions before start. Quiz page + attempt history. Server **item bank** still scales with book length/type (P31). | Brian | **Ready** (R3) |
| P20 | **Model routing / AI logic** — task→model map; bake-off; hard-lock image prompts; Codex upgrade (pregen, not Gemini-everywhere) | **Backlogged** — full checklist [ideas/ai-llm-decision-backlog-2026-07-22.md](ideas/ai-llm-decision-backlog-2026-07-22.md); charter [model-routing-eval](ideas/model-routing-eval-2026-07-21.md); reopen after foundation | proposal |
| P21 | **Listen-along visual guide** (research) — phone visuals while listening: denser words NF / lighter fiction; documentary-like beats | Brian thought; sync/distraction/rights open — research before Build | proposal |
| P22 | **Catalog eligibility gate** — decline unsupported classes before unlock/generate; clear “not supported”; **waitlist** with professional copy (“we’ll email you if support expands”) — **never** founder-named in UI. Internal demand routing to Brian OK. No suggest-similar required. | Prevents “every book” promise; demand signal ops-side — [decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md) | **Ready** (R7) |
| P23 | **Genre quality baselines** (later) — research / ML·data pass on ~25 F + ~25 NF genres → what companion elements matter most; informs P5 layouts | Brian; **not immediate** | parked |
| P24 | **Citations** — cite **prior** chapters; **direct quotes** properly sourced; **future-chapter pointers** (“comes up later”) — **strong for nonfiction, light/rare for fiction** (spoil risk / low value). Prefer chapter/pack section over edition page #s | Brian | proposal |
| P25 | **Privacy policy** — draft + publish on-site; placeholder stub → waitlist-era → full launch policy | Live on bookfellow.io — [legal/privacy-policy.md](legal/privacy-policy.md); effective **May 14, 2026**; expand again at full launch | **adopted in www** (shipped 2026-07-21) |
| P26 | **Placeholder waitlist CTA** — launch-adjacent connect; no “beta” copy | Counter Melbourne “private beta” with **waitlist / early access** posture — [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md) | **adopted in www** (shipped 2026-07-21) |
| P27 | **Terms of Service** — draft + publish `terms.html` + footer link; Privacy §2 already promises it | Live on bookfellow.io — [legal/terms-of-service.md](legal/terms-of-service.md); §7 unlock permanence | **adopted in www** (shipped 2026-07-21) |
| P28 | **Appearance + account chrome** — avatar menu (sidebar footer) → Settings; **Account** is a settings line item (not top-nav). Appearance = **two dials:** (1) **Background** warm→cool: **Terminal · Paper · Carbon · Slate · Ink** (drop Ion; Classic+Horizon → Slate); (2) **Theme color** — discrete **~15 accents** incl. **Harbor** (`#3d6e8c` from placeholder), visual swatches + live preview, no free picker. Light/Dark/System separate. **Product default: Slate + Harbor** (placeholder continuity). Terminal + Amber = Brian personal option, not the ship default. | DB-inspired craft; brand continuity from bookfellow.io | **Ready** (R2) |
| P29 | **Book companion IA** — Overview: cover + CTAs; Your mark; companion frame. Tabs (order): **Recap (default)** · Chapters · Cast sheet · Quizzes · Notes. **Auto-expand companion on Recap** when opening a book. Companion **Edit** submenu: hide/show tabs (never deletes data) + **open companion by default** (per-book; account default in Settings → Account → Reading). Deep: chapter · quiz pages. Chat FAB. Pregen on unlock. | Locked from mockup | **Ready** (R3) |
| P30 | **Day-1 motion** — living list [product/animation-surfaces.md](product/animation-surfaces.md). Cover morph, panels/FAB/frame tabs, recap retrieve + donut, companion auto-open to Recap. Respect `prefers-reduced-motion`. | Brian: animations day 1 | **Ready** (R3) |
| P31 | **Quiz item-bank sizing** — server bank size by book length + fiction/nonfiction (later genre). Separate from user run length **5 / 10 / 15** (P19). | Bank size open | proposal |
| P32 | **Pack versioning** — unlocked titles are versioned packs. New unlocks get current version; existing stay pinned. Opt-in refresh. See [ideas/pack-versioning-2026-07-22.md](ideas/pack-versioning-2026-07-22.md). | Trust when LLMs improve | **Ready** (R5) |
| P33 | **Logged-out / public surface** — Home above-fold. How: large # + 2 grabs/2 boxes. Nav Sign in · Start free → same auth. **`/faq`**. Redeem code UI **only on Create account**; Sign in → redeem in-app. **Phone:** hamburger + breadcrumbs + Start free top-bar (chrome pairs with P34). **Copy must carry P40** (read more / understand / reflect + free-floor why). **Footer:** Partner with us (**P45** surface). | [ideas/logged-out-public-seo-2026-07-22.md](ideas/logged-out-public-seo-2026-07-22.md) · [product/faq-draft.md](product/faq-draft.md) · mobile canvas | **Ready** (R1 auth · R6 public); publisher plan still proposal |
| P34 | **Mobile logged-in IA** — Phone: hamburger (books → **Overview**, no book submenu) + breadcrumbs (`Library › Book`; tabs not crumbs). Book page = **Overview hero + companion below** (Recap default). **Shrink overview** → compact top bar (cover / ♪ / Ch. N) to expand companion. Pref: start compact. Library Covers↔Table. iPad landscape = desktop. See [ideas/mobile-logged-in-2026-07-22.md](ideas/mobile-logged-in-2026-07-22.md). | Phone canvas | **Ready** (R6) |
| P35 | **Companion Recap tab (quick-read)** — Codex-shaped glance: Story So Far / Foundation · Looking Ahead · Pulse / Reflection · Questions. First/default tab; faster than ~2 min audio (P15) or chapter solidify. Continue → last chapter. Open-on-load prefs under companion **Edit** (+ account Settings). | Get back in fast | **Ready** (R3) |
| P36 | **Publisher placement + store referrals (V2)** — curate/steer titles with partners; Amazon (or store) referral links for purchase monetization. Not V1. **Buy CTA in Add/search** may pull earlier via P41. | [ideas/publisher-placement-referrals-v2-2026-07-22.md](ideas/publisher-placement-referrals-v2-2026-07-22.md) | parked (V2) |
| P41 | **Covers via Associates API** — primary goal = quality covers on **signed-in** Library + book pages. API image URLs first; scrape gaps only. Buy links + disclosures so we **look** compliant; affiliate $ optional (OK if $0). **Not** on logged-out until Brian decides. | [ideas/cover-art-referral-lean-2026-07-22.md](ideas/cover-art-referral-lean-2026-07-22.md) | **Ready** (R7) |
| P37 | **Rail chrome (Monarch-shaped)** — Top of sidebar: **Bf** · **Settings** · **Collapse**. **Hover auto-expand** when collapsed (cursor enters left rail — A6 Must; product Build, mockup may stay click). **V1 skip:** notifications bell. **Search:** deferred until Library filter need is real (shelf grows / in-book find) — not chrome day-1. Gear opens Settings (same destination as avatar → Settings). | Monarch craft; quiet chrome | **Ready** (R2) |
| P38 | **Persist user state across sessions** — Anything the user **sets, reorders, enters, or changes in the UI** must survive reload / new browser / other devices on the same account. **SoT = server (account)**, not `localStorage`-only. Covers Library custom order + view dials, Appearance, Reading prefs, per-book companion Edit, progress marks, Notes, cast notes, quiz history, rail collapse, unlocks. Ephemeral chrome (scroll, open dialog) may stay local. Inventory: [ideas/user-state-persistence-2026-07-22.md](ideas/user-state-persistence-2026-07-22.md). | Trust; core product hygiene | **adopted in www** (M1 Plan 3 shipped — prefs API + companion_credits) |
| P39 | **Punchy marketing voice** — short hooks for logged-out home / How / FAQ. Seed bank: *Enhance the books you own*; *Supercharge your learning*; *Upgrade your learning*; *Dig deeper into the characters/story*; *Recall the throughlines*. Style = short + punchy; tagline stays **companion for your books**. Sits **under** P40. Canon: [product/voice-copy.md](product/voice-copy.md). Hero pick still open. | Copy direction for P33 cutover | **Ready** (R6) |
| P40 | **Company guiding principle** — exist so people **read more**; help them **understand** what they read; **encourage reflection**. Free floor (**1 companion / 3 months**, all tiers) is how that shows in the offer. **Must appear on logged-out** sites (home support, How, Pricing, FAQ) — not strategy-only. Canon: [decisions/2026-07-22-guiding-principle-read-understand-reflect.md](decisions/2026-07-22-guiding-principle-read-understand-reflect.md). | Messaging SoT for public surfaces | **Ready** (R6) |
| P42 | **Modular repo layout** — site built as **human-browsable modules** (align with www lanes). Backend: dedicated **AI/LLM folder** (runtime code + guide for loops / how packs are made) **separate from packs/artifacts folder**. Www owns exact paths when planning. | Humans + agents navigate the same tree; AI ops visible without hunting | **adopted in www** (sequencing — **M4** thin); [ideas/modular-repo-layout-2026-07-22.md](ideas/modular-repo-layout-2026-07-22.md) |
| P43 | **Alpha/beta feedback button** — visible **every page** during alpha + beta. Buckets: bug · feedback · feature request (capture wants; no implement promise). Surface rollups to business **strategy-queue**. | Friends/Reddit signal without email archaeology | **adopted in www** (sequencing — **M5**); plan closer to alpha; [ideas/alpha-feedback-button-2026-07-22.md](ideas/alpha-feedback-button-2026-07-22.md) |
| P44 | **Friends alpha on bootstrap AI** — invite-gated; curated titles; Codex-port prompts/schema inside AI module (`codex_bootstrap_v0`); pregen whitelist; full P20 after feedback. Depth + real AI (**M6–M10**) ship **in tandem** during alpha. | Faster friend feedback; long AI list doesn’t block alpha | **adopted in www** (sequencing — **M4** bootstrap / **M5** alpha); no Build plan yet; [ideas/friends-alpha-bootstrap-2026-07-22.md](ideas/friends-alpha-bootstrap-2026-07-22.md) |
| P45 | **Publisher plan** (umbrella) — free-with-purchase (**P9**), redeem enter=unlock settle, partner economics (unit / who invoices open), public **Partner with us** page (footer), later placement (**P36**). Page ≠ the plan. **P46** insights parked. | Supply GTM + measurable partner attach | **proposal**; [ideas/publisher-plan-2026-07-22.md](ideas/publisher-plan-2026-07-22.md) · page [partner-with-us-page](ideas/partner-with-us-page-2026-07-22.md) |
| P46 | **Publisher reader insights** — sell aggregated companion engagement / “who readers are” (paperback lean floated) | Brainstorm only — Brian does **not** want to pursue | **parked** (backlog); under [publisher-plan](ideas/publisher-plan-2026-07-22.md) |
| P47 | **Phase banners + dual beta** — alpha → beta banners point at **P43**. **Beta-1** = main site (no chat required); **Beta-2** = companion chat (+ later AI). Chat built in friends alpha; may ship mid/late beta-2 **or GA without chat** (open). | GTM calendar + M5 copy + M8 release gate | **proposal**; [alpha-beta-program](ideas/alpha-beta-program-2026-07-22.md) |
| P48 | **Verbose diagnostics + session replay** — journey events + what-happened context **pair with** P43 feedback. **Required** through alpha + beta (Settings toggle visible but **locked/greyed**). Session replay in same program. Refuse → offer **close account + data delete**. Business owns NDA + consent copy (retention / same-vs-separate checkbox open). | Alpha trust + legal; privacy/ToS bump | **proposal**; [alpha-beta-program](ideas/alpha-beta-program-2026-07-22.md) |
| P49 | **AI-off toggle** — user disables AI *companion* surfaces (chat + later AI features); **pack/book generation stays on**. Future AI features must respect the toggle. | “AI-optional companion” positioning; Settings + M6+ | **proposal**; [alpha-beta-program](ideas/alpha-beta-program-2026-07-22.md) |
| P50 | **Self-serve account delete** — close account + data delete (esp. if they refuse diagnostics). | Privacy/ToS; alpha onboarding escape | **proposal**; pairs with P48 |
| P51 | **Content density levels** — user picks **condensed · average · verbose** for companion text **per book**. **Primary:** chapter reviews. Prefer stored variants (or structured pack + views) so switching is instant. Account default + per-book override (**P38**). **AI-phase** — not friends-alpha bootstrap unless Brian expands. | Depth dial without leaving the book; cost/pregen tradeoff with **P6** | **proposal**; [ideas/content-density-levels-2026-07-23.md](ideas/content-density-levels-2026-07-23.md); ties **P20** / pack schema |

## Lane proposals

Www consolidated Adopted map 2026-07-22 (`bookfellow-www/.cursor/lanes.md`). Status here tracks that — **adopted for sequencing** = on module map, not Built.

| Proposed lane | Why | Status |
|---------------|-----|--------|
| `companion-build-ux` | Status + dummy theater (P3/P4) | **adopted in www** (sequencing — under AI path **M6+**) |
| `genre-layouts` | Genre buckets + defaults + override (P5) | proposal (later) |
| `billing-trial` | Trial→sub + pricing sketch (P1/P2) | proposal (**M13** gated) |
| `companion-chat` | In-book FAB chat + voice (P10/P12) | **adopted in www** (**M6**) |
| `notes` | Notes + auto-fill from chat/voice (P11) | **adopted in www** (**M5**) |
| `placeholder-site` | bookfellow.io waitlist / coming-soon (P13) | **adopted in www** (shipped 2026-07-21) |
| `spoiler-safe` | Progress-bounded AI (P14) | **adopted in www** (**M6** with chat) |
| `session-jog` | ~2 min recap on Overview (P15); Session tab still out | **adopted in www** (**M9**) |
| `listen-capture` | Quick capture while listening (P16) | **parked** |
| `library` | Owned/unlocked library (P17) | **adopted in www** (**M3**) |
| `covers-referral` | Associates API covers + optional buy (P41) | **adopted in www** (**M3** with library) |
| `cast-sheet` | Spoiler-safe cast sheet (P18) | **adopted in www** (under `recall` **M7**) |
| `progress-mcq` | Quizzes tab — cumulative + chapter (P19) | **adopted in www** (under `recall` **M8**) |
| `book-companion-ia` | Overview + companion frame (P29) | **adopted in www** (**M4**) |
| `companion-recap` | Quick-read Recap tab (P35); open-on-load prefs | **adopted in www** (under `book-companion-ia` **M4**) |
| `companion-pregen` | Full-title generate on unlock (P6) | **adopted in www** (bootstrap **M4**; real AI **M6+**) |
| `pack-versions` | Versioned companion packs + opt-in refresh (P32) | **adopted in www** (**M6+** with AI path) |
| `motion` | Day-1 animation surfaces (P30) | **adopted in www** (**M4** subset first) |
| `model-routing` | Task→model bake-off (P20) | proposal (backlogged — beyond first M6 slices) |
| `listen-along-visual` | While-listen visual guide research (P21) | proposal |
| `catalog-eligibility` | Title class gate + decline UX (P22) | **adopted in www** (under `library` **M3**) |
| `genre-baselines` | Genre quality research / ML later (P23) | parked |
| `citations` | Prior/future chapter + quote citations (P24) | proposal (after M7/M8) |
| `appearance` | Background + accent dials; settings shell + avatar menu (P28) | **adopted in www** (**M2**) |
| `public-seo` | Logged-out marketing + stills (P33) + punchy voice (P39) + Partner page surface; deep title-SEO later | **adopted in www** (**M12**); Partner page under **P45** still **proposal** |
| `publisher-partners` | Full publisher plan (**P45**): offer, redeem settle, Partner page, placement (**P36**); **P46** parked | **proposal** |
| `mobile-logged-in` | Phone vertical + iPad landscape lean (P34); wrappers P7 later | **adopted in www** (**M2** chrome / **M4+** surfaces) |
| `rail-chrome` | Monarch-shaped rail icons + hover-expand (P37) | **adopted in www** (**M2**) |
| `user-state` | Persist prefs + entered data across sessions (P38) | **adopted in www** (**M1** with security) |
| `modules-layout` | Human-readable module folders + AI/LLM vs packs split (P42) | **adopted in www** (sequencing — **M4**) |
| `alpha-feedback` | Global feedback/bug/feature widget → strategy-queue (P43) | **adopted in www** (sequencing — **M5**) |
| `friends-alpha` | Invite alpha + bootstrap packs cut (P44) | **adopted in www** (sequencing — **M4**/**M5**) |
| `alpha-program` | Phase banners, dual beta, diagnostics+replay, AI-off, account delete (P47–P50) | **proposal** (www M5 / M6+ / Settings) |
| `content-density` | Condensed / average / verbose dial — chapter reviews first (**P51**) | **proposal** (AI packs / M6+) |

## Open questions that block product

1. ~~Unlocked books survive cancel?~~ **Lean yes, scoped** — keep using without active sub **for life of site**; **~3 months guaranteed** if we fold. Not absolute forever — **legal**. $4 rate still needs active sub. Permanence = more value.
2. Exact membership $ vs Blinkist-class ~$15 unlimited (hold ~$10 / lower / closer under $15)? Do $6/$4 move? *(before billing Build)*
3. Trial length / what trial includes? *(www asks-back — before billing Build)*
4. When anything **public-facing** must cut over from NAS lab / prototype supply to purchased/cloud-only? *(www asks-back — before public URL)*
5. Unused allotments roll? *(before billing Build)*
6. ~~Publisher redeem billable event~~ **Locked 2026-07-22** — code **entered** auto-assigns the book → enter = unlock = **one event**. Still open: unit ($/redeem, %, publisher-funded gen) + who invoices whom. ([publisher-plan](ideas/publisher-plan-2026-07-22.md))
7. **Dual beta / chat:** Confirm Beta-1 = site without chat; Beta-2 = chat. **GA without chat** allowed? Same friends vs Reddit cohorts for each phase? *(www asks-back — before Reddit beta / legal)*
8. **NDA + diagnostics (+ session replay) consent:** retention window; replay same consent blob vs separate checkbox; privacy/ToS delta vs live P25/P27. *(before friends alpha)*
9. **AI-off public copy:** OK to market “turn off AI features” (companion off / packs on)? Any must-stay-AI-on surfaces? *(before beta-2 / GA messaging)*

~~10. Catalog eligibility edges~~ **Locked 2026-07-21** — self-pub hard no; parked classes indefinite (not soft-allow); waitlist→Brian; eligibility on P13. See decision doc.

(Entity/LLC timing is venture ops — not listed here.)

## Out of scope / do not build yet

| Item | Why |
|------|-----|
| Topic video outlinks | Parked — dilutes core ([ideas/backlog.md](ideas/backlog.md)) |
| Location/brand tie-ins | Parked — maybe/never ([ideas/backlog.md](ideas/backlog.md)) |
| Snipd-style one-tap listen capture (P16) | Parked/unlikely — niche; needs in-app player; Audible overlay unrealistic |
| Genre ML baselines across ~50 genres (P23) | Later research — after F/NF polish elsewhere |
| **Publisher reader insights / sell data (P46)** | Parked — Brian brainstorm only; not wanted |
| **Session tab / session-jog nav** (P15) | Parked/undecided — not in book IA |
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

- 2026-07-23 — **P51 content density** — condensed / average / verbose per book; mainly chapter reviews; AI-phase proposal; [content-density-levels](ideas/content-density-levels-2026-07-23.md)
- 2026-07-23 — **Founder-first + DIY downgrade** — Bookfellow for Brian first; NotebookLM DIY not peer threat (chapter UX); meeting addenda A7/A8; thesis/market reject updated
- 2026-07-22 — **Foundation business meeting prepared** — [meetings/2026-07-23-foundation-business-meeting.md](meetings/2026-07-23-foundation-business-meeting.md) + [research prep](research/2026-07-22-foundation-meeting-prep.md); walk checklist until haul
- 2026-07-22 — **Harvest alpha/beta program** — www feed: banners, dual beta (site→chat), verbose diagnostics+replay (locked thru beta), AI-off (not packs), account delete; **P47–P50**; milestones dual-beta; P9 auth/redeem **shipped** noted
- 2026-07-22 — **P9 feed clarify** — pending→fulfill plumbing OK; commercially **one** settle count (enter = unlock) — loud on www-feed P9 row
- 2026-07-22 — **Redeem event locked** — enter code = auto-assign book = one billable event (Brian); unit/invoice party still open; **P46** → **parked**/backlog (brainstorm only, not wanted)
- 2026-07-22 — **Calendar lean** — friends **alpha ~mid-Aug**; **beta ~Oct** (feedback-gated); **legal before Oct**; [milestones.md](proposal/milestones.md)
- 2026-07-22 — **Publisher plan + www harvest** — **P45** = umbrella (offer/redeem/econ/page/placement), not page-only; **P46** later parked; www `pending_redeem_code` ask → Q6 then locked; P42–P44 refs **M4–M6**; [publisher-plan](ideas/publisher-plan-2026-07-22.md)
- 2026-07-22 — **P45 Partner with us** (superseded same day by umbrella) — page was first cut; now surface of publisher plan
- 2026-07-22 — **Www owns Build order (acked)** — harvested business-feed; dropped “first Builds” / R-as-queue framing; Ready = **requirements only**; lanes + P42–P44 marked **adopted in www** (sequencing); foundation parallel ≠ gate for M1–M4; billing-trial / genre / parked stay proposal
- 2026-07-22 — **Foundation map + AI backlog** — [foundation-map](proposal/foundation-map.md); clusters filed [ai-llm-decision-backlog](ideas/ai-llm-decision-backlog-2026-07-22.md); Core 3 = next writing; P20 stays proposal until reopen
- 2026-07-22 — **P42–P44** — modular AI/LLM folder + separate packs folder; alpha feedback → strategy-queue; friends alpha on Codex-bootstrap; www buckets → **M4–M6** (resequence; was M11)
- 2026-07-22 — **Pre–full Build gates** — foundation packet parallel; full P20 before “AI done”; friends-alpha (P44) can ship bootstrap first (**M4→M5**)
- 2026-07-22 — **Mockups approved → Ready** — Brian sign-off; Ready **R1–R7** as requirement clusters (www sequences as **M1–M13**); P1 billing stays proposal until $ / trial / roll lock
- 2026-07-22 — **P33 mobile voice** — logged-out phone mockup copy carries P40 (read/understand/reflect + free-floor why) with P39 hooks (*Enhance…*, *Recall the throughlines*, dig deeper)
- 2026-07-22 — **P41 refine** — covers = primary (signed-in Library/book); API URLs first, scrape gaps; compliance optics; commissions optional/$0 OK; logged-out covers deferred
- 2026-07-22 — **P41 covers + buy referral** — real covers; Audible-class purchase links + affiliate; forgiveness lean; prefer affiliate API over scrape; [ideas/cover-art-referral-lean-2026-07-22.md](ideas/cover-art-referral-lean-2026-07-22.md); north-star rights updated
- 2026-07-22 — **P40 guiding principle** — read more · understand · reflect; 1 free / 3mo = mission; logged-out must carry it; [decisions/2026-07-22-guiding-principle-read-understand-reflect.md](decisions/2026-07-22-guiding-principle-read-understand-reflect.md); voice/FAQ/P33/P2 updated
- 2026-07-22 — **P39 punchy voice** — enhance / supercharge / upgrade learning / dig deeper / recall throughlines; [product/voice-copy.md](product/voice-copy.md); hero line still open
- 2026-07-22 — **Harvest / capture pass** — morning mockup ideas → digest + IA decision; P25–P27 **adopted**; Ready cleared; post-mockup first-Build order; pins refreshed
- 2026-07-22 — **P34 book page** — hamburger → Overview (not Recap); no book submenu; companion always below title; shrink overview → compact top bar to expand Recap
- 2026-07-22 — **P38 user-state persistence** — all settings, custom order, notes, UI changes, entered data → account SoT across sessions; lane `user-state`; [ideas/user-state-persistence-2026-07-22.md](ideas/user-state-persistence-2026-07-22.md)
- 2026-07-22 — **P33 mobile home** — drop peek-inside; keep hook + Start free + trust (no product tease on first screen)
- 2026-07-22 — **P33 mobile logged-out** — phone canvas; hamburger + breadcrumbs + Start free top-bar; pages synced to desktop public surface
- 2026-07-22 — **P34 mobile sync** — phone canvas caught up to desktop product (Recap/Edit, deep chapter/quiz, notes/cast/quizzes, Reading prefs); chrome stays hamburger + breadcrumbs + sheet
- 2026-07-22 — **P37 rail chrome** — Settings + Collapse V1; hover-expand Must (A6); Search/Notifications deferred
- 2026-07-22 — **P33 redeem** — “Have a redemption code?” only on Create account; Sign in → in-app redeem; no lecture copy
- 2026-07-22 — **P33 FAQ** — public `/faq` collapsibles; what-we-support = dropout only; [faq-draft.md](product/faq-draft.md)
- 2026-07-22 — **P33 How layout** — large # left; 2 screen grabs + 2 feature boxes (drop highlights-first grid)
- 2026-07-22 — **Library home** — signed-in default = Library; Bf icon + Library + Bookfellow wordmark navigate home
- 2026-07-22 — **P33** — How it works highlights first + numbered loop; nav Sign in then Start free → same auth toggle; drop “More of the product”
- 2026-07-22 — **Tab order** — Recap · Chapters · Cast sheet · Quizzes · Notes
- 2026-07-22 — **Companion Edit** — rename Edit tabs → Edit; open-by-default lives in Edit submenu
- 2026-07-22 — **P35 Recap tab** — Codex-shaped quick-read first/default; auto-open companion; account + per-book prefs; publisher placement renumbered **P36**
- 2026-07-22 — **P33 UX pass** — above-fold home; unified auth+redeem; subtle What we support; **P36** publisher placement/referrals V2 parked
- 2026-07-22 — **P34 chrome** — hamburger menu + breadcrumb back-nav (drop bottom tabs lean)
- 2026-07-22 — **P34 mobile logged-in** — phone vertical canvas (bottom nav; companion full-screen sheet); iPad landscape = desktop; iPad portrait open
- 2026-07-22 — **P33 locks** — no logged-out demo (UI stills); live frictionless signup; guides signed-in later; `/books/[slug]` SEO parked; placeholder invite-code BR; [visual-assets.md](product/visual-assets.md) living list; canvas logged-out mockup
- 2026-07-22 — **P33 logged-out + SEO** — public vs signed-in; curated title pages; demo/redeem conversion; [ideas/logged-out-public-seo-2026-07-22.md](ideas/logged-out-public-seo-2026-07-22.md); lane `public-seo`
- 2026-07-22 — **Quizzes + recap + packs** — user run length **5/10/15**; recap **donut-in-button** + retrieve motion (pregen at unlock); **P32 pack versioning** (opt-in refresh); V1 mockup Brian-happy
- 2026-07-22 — **Overview chrome** — CTAs flush top-left of cover; Your mark stops at cover; Show/Hide companion = same toggle
- 2026-07-22 — **Overview chrome** — CTAs **left of cover** (♪ recap · Ch. N → chapter page); quiet **Show/Hide companion** on frame; onboarding deferred
- 2026-07-22 — **Companion depth** — CTAs under cover; Notes/Cast/Quiz UX; chapter + quiz sample pages; Edit tabs (hide≠delete); P31 quiz bank sizing open
- 2026-07-22 — **Overview actions** — Play ~2 min recap (in-page); Review Ch. N → Chapters focus; P15 = recap yes / Session tab still out
- 2026-07-22 — **P30 animations** — living list [product/animation-surfaces.md](product/animation-surfaces.md) (cover morph Must; panels/popups/FAB/frame tabs…)
- 2026-07-22 — **P29 companion frame** — Overview embeds Chapters (default) / Notes / Cast / Quizzes; not separate pages
- 2026-07-22 — **P29 Overview chrome** — no This-book column; hero square cover (~6× rail); destinations = grouped list; subpages ← Overview
- 2026-07-22 — **P17 covers** — **square audiobook** art (Audible-style), not portrait print jackets; Library + sidebar
- 2026-07-22 — **Credits + Add-book paths** — allotment speak → **credits** (subtle sidebar/Library; primary on Add); **Redeem code** + **Scan QR** (signed-in add / signed-out auth); UI copy never “notify Brian” (P2/P9/P17/P22)
- 2026-07-22 — **P17 sidebar slots** — under Library + divider: Recent 3 **or** Pin up to 3; condensed=covers, expanded=title+progress
- 2026-07-22 — **P17 expanded** — Library Add popout; covers↔table; S/M/L; sort + Custom rearrange + first-load cue (tooltips/walkthrough later)
- 2026-07-22 — **P28 default flip** — product default **Slate + Harbor** (placeholder); Terminal stays personal option
- 2026-07-22 — **P28 Appearance + account chrome** — split background (5 warm→cool) vs theme color (~15 swatches + live preview); avatar→Settings (Account line item); lane `appearance`
- 2026-07-21 — **P27 Terms of Service draft** — [legal/terms-of-service.md](legal/terms-of-service.md); **Ready** for www apply (`terms.html` + footer); Effective **May 14, 2026**
- 2026-07-21 — **Rename plan archived** — [bookfellow-rename](../.cursor/plans/archive/2026-07-21-bookfellow-rename-cutover.plan.md)
- 2026-07-21 — **Rename Phase G / Built:** verify green (lab, queue smoke, dual-feed, git remote, Codex product untouched)
- 2026-07-21 — **Rename Phase F:** NAS lab `projectcodex` → `bookfellow` on `:4003` (fresh `bookfellow_pgdata`); queue `bookfellow-jobs` / health `bookfellow-web`
- 2026-07-21 — **Rename Phase E:** absolute path sweep — feeds/pins/rules → `…/Ventures/bookfellow/{bookfellow-business,bookfellow-www}`; NAS `projectcodex` still Phase F
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
- 2026-07-21 — **Rename plan:** full Project Codex → Bookfellow (folders/GitHub/NAS/packages) — [bookfellow-rename](../.cursor/plans/archive/2026-07-21-bookfellow-rename-cutover.plan.md); P8 brand **locked**; path migration pending Build
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
