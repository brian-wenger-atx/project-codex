# Decision — Catalog boundaries (not every book) (2026-07-21)

Status: **lean** (edges locked same day). Source: Brian chats 2026-07-21.

## Principle

Bookfellow is a **companion for books people actually finish chapter-by-chapter** — trade fiction and trade nonfiction where **recall + return-to-book** is the job.

It is **not** a universal library, not a textbook platform, not a comics reader, and not “upload anything.”

Allotment / à-la-carte already meters **how many** unlocks someone gets. This doc meters **which kinds of titles** we support at all (eligibility).

## In scope (target corpus)

| Class | Notes |
|-------|--------|
| **Trade fiction** | Novels, series — chapter/progress model fits |
| **Trade nonfiction** | Narrative / argument books (memoir, history, business, science *popularization*, narrative food writing, etc.) — not academic apparatus; not recipe-led cookbooks |
| **Mainstream published** | Trad publisher imprint **or** clearly commercial ebook/audiobook edition with buy-proof path later — **not** self-pub / KDP-only |
| **Language** | **English only** for now (non-English = indefinitely parked) |

Equal fiction/nonfiction still holds **inside** this band.

## Out of scope (hard — do not promise / do not build for)

| Class | Why |
|-------|-----|
| **College / K–12 textbooks** | Edition churn, problem sets, rights, not “return to story/argument” job |
| **Academic / scientific monographs, journals, conference proceedings** | Dense citation apparatus; wrong UX; low finish-rate companion fit |
| **Comics, manga, graphic novels, webtoons** | Page/panel progress ≠ chapter packs; image-primary; different product |
| **Unofficial / unpublished** | Fanfic, drafts, pirated scans, “my PDF,” workshop manuscripts — rights + quality + support nightmare |
| **Self-published / KDP-only / no imprint** | **Hard decline** — no curated allow-list (Brian 2026-07-21) |
| **Reference works** | Dictionaries, encyclopedias, atlases, code/API references, statute books — lookup job, not companion |
| **Periodicals** | Magazines, newspapers, newsletters |
| **Workbooks / exam prep / activity books** | Exercises ≠ reading companion |
| **Picture books / board books** (young children) | Too short / image-led; different caregiver job |
| **Technical standards / manuals as corpus** | ISO-like, appliance manuals, pure how-to reference |

## Parked indefinitely (not a roadmap)

Brian: cannot imagine wanting these, but unsure — so **parked**, not soft-allow, not “phase 2.” Do not build packs or promise support. Reopen only if Brian explicitly unparks.

| Class | Notes |
|-------|--------|
| **Poetry collections** | Sparse narrative; pack shape unclear |
| **Plays / screenplays** | Different progress model |
| **Religious scripture editions** | Sensitive + edition chaos |
| **Cookbooks / recipe-led** | Reference-shaped; narrative food writing stays under trade NF if it qualifies |
| **Art / photography / coffee-table** | Image-primary |
| **Interactive / gamebooks / CYOA** | Branching breaks spoiler + chapter model |
| **Anthologies (many rights)** | Ops/rights heavy; single-author OK as trade |
| **Extreme long-tail obscurity** | Economic filter — decline, not “support all ISBNs” |
| **Non-English** | Not a near-term language expansion plan |

## Ops / product implications (locked)

1. **Eligibility gate** before generate/unlock — metadata + heuristics (BISAC/subject, format, publisher type, page/panel flags) + refuse list.
2. **Marketing copy:** never “any book” / “every book.” Prefer “trade books you’re reading” / “novels and narrative nonfiction.” **Show eligibility on P13 placeholder** (Brian).
3. **Declined title:** clear “not supported” + **waitlist** — waitlist **notifies Brian** (demand signal). No “suggest similar” requirement.
4. **Prototype (MAM):** may ingest edge titles privately to test engines — **public catalog promise** follows this boundary.
5. **SWOT / proposal:** wedge is **depth on supported titles**, not breadth theater.

## Locked answers (2026-07-21)

| Q | Answer |
|---|--------|
| Self-pub / KDP curated allow-list? | **No** — hard decline |
| Soft-allow poetry / plays / scripture (or other parked)? | **No** — indefinitely parked |
| Declined-title UX | **Waitlist → notify Brian** |
| Eligibility on marketing | **Yes — on placeholder (P13)** |

## Links

- [north-star.md](../north-star.md)
- [www-feed.md](../www-feed.md) — P13 / P22
- [2026-07-20-v1-launch-leans.md](2026-07-20-v1-launch-leans.md) — long-tail economics tension
