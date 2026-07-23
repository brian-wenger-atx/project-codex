# Digest — 2026-07-22 mockup / product IA

**Source chats (business silo):** logged-in desktop mockup pass → logged-out public → Recap tab + Library home + rail → mobile logged-in/out → user-state persistence.  
**Canon projection:** [www-feed.md](../www-feed.md) P17–P38 · idea files under `docs/ideas/*-2026-07-22.md` · [product/](../product/).

## What locked (do not re-decide lightly)

### Chrome & home
- **Signed-in home = Library.** Bf mark · Library nav · Bookfellow wordmark → Library.
- **Credits** (not “books left”); subtle in rail + Library; primary on **Add a book**. No hero unlocked count; quiet “N books in your library” footer OK.
- **Add a book** = Library popout (not sidebar). Paths: credit spend · **Redeem code** · **Scan QR**. Never “notify Brian” in UI.
- **Covers = square audiobook art** (Audible-style). Table ↔ covers + S/M/L + sort + **Custom** order (first-load cue; tooltips/walkthrough later).
- **Rail:** Library · divider · Recent 3 **or** Pin 3. Condensed = covers; expanded = title + progress. **Settings + Collapse** at top (Monarch-shaped). **Hover auto-expand** when collapsed = Must (A6). Search deferred; notifications V1 skip.
- **Appearance:** Background warm→cool (Terminal · Paper · Carbon · **Slate** · Ink) × ~15 accents incl. **Harbor**. Product default **Slate + Harbor**. Avatar → Settings (Account is a settings line).

### Book companion IA
- **Overview** is the hub — no “This book” column. Hero cover (~6× rail) + CTAs **left of / flush with** cover: ♪ ~2 min recap · Ch. N → chapter page. Your mark stops at cover.
- **Companion frame** embeds tabs (order): **Recap (default)** · Chapters · Cast sheet · Quizzes · Notes. Show/Hide companion = same control in place. **Edit** submenu: hide/show tabs (never deletes data) + open-companion-by-default.
- Opening a book **auto-expands companion on Recap** unless account/per-book pref off.
- **Recap tab** = Codex-shaped quick-read (Story So Far / Looking Ahead / Pulse / Questions) — distinct from ~2 min **audio** recap (donut-in-button; audio pregen at unlock).
- **Chat FAB** bottom-right on book surfaces. Fiction: refuse future plot even if asked + CTA to mark further. Nonfiction: may preview later themes.
- **Notes** = same objects on Notes tab and chapter pages (full-width + metadata). **Cast** = full-width roster + character notes + History popout.
- **Quizzes:** cumulative + per-chapter; user picks run length **5 / 10 / 15**. Server item bank sizing separate (P31).
- **Packs versioned** (P32): pin at unlock; opt-in refresh; notes/marks/history survive.

### Logged-out / public (P33)
- Live posture (not waitlist theater): frictionless **Start free**. Home **above the fold** only. No interactive demo — stills only.
- How: large # left; **2 screen grabs + 2 feature boxes**. Eligibility = FAQ dropout, not a marketing page. Public **`/faq`**.
- Auth unified; top nav Sign in · Start free. **Redeem code UI only on Create account**; Sign in → redeem in-app.
- Placeholder era: waitlist + invite-code BR; at go-live waitlist drops.
- Publisher placement / store referrals = **V2 (P36)**.

### Mobile (P34)
- Phone: hamburger + breadcrumbs (not bottom tabs). Books in menu → **Overview** (no book submenu). Book page = Overview hero + **companion below**; **shrink overview** → compact top bar to expand Recap. Library Covers↔Table. iPad landscape = desktop.

### Persistence (P38)
- Everything the user sets, reorders, enters, or changes in UI → **account SoT** across sessions/devices. Not `localStorage`-only. Inventory: [ideas/user-state-persistence-2026-07-22.md](../ideas/user-state-persistence-2026-07-22.md).

### Motion (P30)
- Day-1 list lives in [product/animation-surfaces.md](../product/animation-surfaces.md) — cover morph Must; panels/FAB/frame; donut recap; rail hover-expand; phone shrink overview.

## Placeholder / legal (www already shipped — harvest)
- P13 placeholder live; P25 Privacy + P26 waitlist + P27 Terms on bookfellow.io → mark **adopted** on www-feed (this digest turn).

## Still open (blocks billing / public product cutover — not mockup IA)
1. Exact membership $ vs ~$15 Blinkist-class band; do $6/$4 move?
2. Allotment / credit roll?
3. Trial length / contents?
4. When public product leaves NAS lab / prototype supply?
5. Publisher offer A (companion free w/ purchase) vs B (host book) — confirm A.

## Post-mockup → build readiness
When Brian signs off remaining mockup polish (esp. mobile shrink overview + visual stills V1/V8/V9):
1. Www seat: graduate P* proposals into www plans / lanes (do not re-dictate).
2. Prefer starting with **Library + Overview/companion frame + auth shell + persistence schema** — billing after open $ questions lock.
3. Business foundation packet (proposal/SWOT/market) continues in parallel; not a gate on first product Builds.
4. Keep dual-feed: product ships → business-feed; strat ideas → www-feed same turn.

## Idea files filed this day
- [logged-out-public-seo-2026-07-22.md](../ideas/logged-out-public-seo-2026-07-22.md)
- [mobile-logged-in-2026-07-22.md](../ideas/mobile-logged-in-2026-07-22.md)
- [pack-versioning-2026-07-22.md](../ideas/pack-versioning-2026-07-22.md)
- [publisher-placement-referrals-v2-2026-07-22.md](../ideas/publisher-placement-referrals-v2-2026-07-22.md)
- [user-state-persistence-2026-07-22.md](../ideas/user-state-persistence-2026-07-22.md)
- [product/faq-draft.md](../product/faq-draft.md) · [product/visual-assets.md](../product/visual-assets.md) · [product/animation-surfaces.md](../product/animation-surfaces.md)
