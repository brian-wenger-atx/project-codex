# Animation surfaces (Bookfellow → www)

Living list of motion that should ship **day one** (or soon after) in the product UI. Strategy owns this file; www plans against it. When IA changes in business mockups, **update this list same turn**.

**Related:** [www-feed.md](../www-feed.md) P29 / P30 · mockup canvas `bookfellow-logged-in-mockup`

**Principles**
- Prefer purposeful transitions (orientation, hierarchy, continuity) over decoration
- Respect reduced-motion (`prefers-reduced-motion: reduce` → instant or opacity-only)
- Match Docking Bay / Monarch craft bar: quiet, paid-product feel — no bounce spam
- **Codex carry-forward:** shared-element **cover morph** Library/rail → Overview hero is required intent

---

## Must (day 1)

| ID | Surface | Motion | Why |
|----|---------|--------|-----|
| A1 | **Cover morph** | Square cover in Library grid **or** sidebar rail **expands / morphs** into Overview hero cover (~6× rail size); reverse on leave Overview → Library | Continuity of “this title”; Codex-proven pattern Brian wants |
| A2 | **Add a book** | Popout / modal **open + close** (scale+fade or slide from Library CTA) | Primary conversion surface |
| A3 | **User menu** | Avatar menu **open + close** upward from sidebar footer | Chrome standard |
| A4 | **Chat FAB panel** | Bottom-right chat sheet **open + close** | Frequent; must feel native |
| A5 | **Companion frame tabs** | Overview embedded frame: switch **Recap** / Chapters / Cast / Quizzes / Notes with **crossfade or short horizontal slide** | Default = **Recap**; order locked |
| A5a | **Open book → Recap** | Entering a book **auto-expands** companion on Recap (unless account/book pref off) | Return-to-book speed; Codex book-page pattern |
| A5b | **~2 min recap control** | Idle → brief **retrieve** spin → control **morphs to donut** progress (pause/resume in place). No separate player strip. Audio pregen’d at unlock. | Compact audio jog; pack asset — distinct from Recap tab |
| A5c | **Review last chapter** | **Ch. N →** opens **chapter page** (frame expands if hidden) | Continuity |
| A5d | **Chapter / quiz deep pages** | Frame content swap (slide/crossfade) within companion frame | Sample pages day-1 |
| A5e | **Cast history popout** | Panel open/close over cast roster | Character plot points |
| A5f | **Companion Edit** | Reveal Edit submenu: tab hide/show + open-companion-by-default | Customize without data loss |
| A5g | **Companion frame show/hide** | Show companion ▾ ↔ Hide companion ▴ in place | Overview calm |
| A6 | **Rail expand / collapse** | Width morph + title/progress **fade in/out** under covers. **Also (Must):** when rail is collapsed, **pointer entering the left edge / rail hit area auto-expands** (Monarch pattern); leave or explicit collapse icon collapses. Respect reduced-motion. Mockup may use click-only. | Condensed ↔ expanded; Monarch craft Brian wants |
| A7 | **Settings / Appearance** | Live preview + swatch selection **settle** (border/preview update, not rainbow flash) | Theme is a first-class dial |

## Should (day 1 if cheap; else week-1)

| ID | Surface | Motion | Why |
|----|---------|--------|-----|
| A8 | Library **covers ↔ table** | Layout morph or crossfade | View mode is frequent |
| A9 | Cover size **S / M / L** | Smooth resize of square tiles | Audible-style shelf |
| A10 | Custom sort **first-load cue** | Dashed hint **enter / dismiss** | Onboarding without full walkthrough yet |
| A11 | Custom sort **drag** | Lift + gap animation while rearranging | Makes Custom mode teach itself |
| A12 | Chapter **bulk select** mode | Toolbar morph + checkbox stagger | Edit mode clarity |
| A13 | **Mark read** → progress | Overview progress bar + pills **animate** to new mark | Spoiler-bound feedback |
| A14 | Unlock / credit spend **build theater** | Professional in-progress panel (P3/P4) even when pregen finishes fast | Trust at unlock |
| A15 | Redeem code / **Scan QR** modals | Open/close; QR success → “Add this title?” confirm | Partner path |

## Might (polish / later but keep listed)

| ID | Surface | Motion | Why |
|----|---------|--------|-----|
| A16 | Chat **message stream** | Soft appear for assistant reply (esp. fiction refuse + mark-CTA) | Softens hard spoiler blocks |
| A17 | Quiz **answer select** | Selected option settle + correct/incorrect feedback | Engagement |
| A17b | Quiz **question-count chips** | 5/10/15 selection settle before start | Run length clarity |
| A18 | Cast sheet **stagger in** | Cards fade/slide by progress unlock | Fiction delight |
| A19 | Credits **spend flash** | Subtle credit line update on Add book | Makes metering legible without hero stats |
| A20 | Library empty → first book | Cover appears into shelf after unlock | First-run moment |
| A21 | Pin / unpin rail books | Cover slide into/out of rail slots | Recent vs Pinned mode |
| A23 | **Mobile shrink overview** | Overview hero **collapses** to compact top bar (cover / ♪ / Ch. N); companion expands (defaults Recap). Expand restores hero. | Phone book page — more room for companion |
| A24 | **Mobile hamburger menu** | Drawer open/close from top-bar control | Primary logged-in chrome on phone |
| A25 | **Breadcrumb back-nav** | Crumb tap steps back; truncate long titles | Phone hierarchy without bottom tabs |

---

## Out of scope for motion

- Decorative ambient particles / constant looping “AI glow”
- Animating every list row on every re-render
- Blocking interaction for long theater after content is already ready (keep build theater **short**)

---

## Changelog

- 2026-07-22 — A23 → **shrink overview** (inline companion below; drop full-screen sheet lean)
- 2026-07-22 — A6 Monarch-style **hover auto-expand** when rail collapsed (Must; mockup click-only OK)
- 2026-07-22 — A5 default → Recap; A5a open-book → Recap auto-expand
- 2026-07-22 — A24/A25 hamburger + breadcrumbs (drop bottom-nav lean); A23 companion sheet
- 2026-07-22 — A23/A24 mobile companion sheet + bottom nav (P34)
- 2026-07-22 — A5b donut-in-button recap + retrieve; A17b quiz 5/10/15 chips
- 2026-07-22 — A5g frame show/hide; CTAs left of cover; recap icon; Ch. N → chapter page
- 2026-07-22 — A5d–f chapter/quiz deep pages; cast history popout; edit tabs; Overview CTAs under cover
- 2026-07-22 — A5b/A5c — inline ~2 min recap player; Review Ch. N → chapters focus
- 2026-07-22 — Initial list from logged-in mockup pass (library, overview frame, chat FAB, settings, credits, chapters)
