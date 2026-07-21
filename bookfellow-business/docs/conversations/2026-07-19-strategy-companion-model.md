# Strategy digest — companion model (2026-07-19)

Seeded on Build from the living plan strategy log. Idea-generation was **paused** 2026-07-19 (pivot to business-tool mode). Resume product brainstorming only when Brian says so.

---

## Core user job

People often don’t go back to a book because they forgot:

- where they were,
- what they already read/heard,
- any usable detail about the book.

Sometimes they forget **what they just listened to**. So:

1. **Solidify immediately after** a chapter (or listening session).
2. **Jog memory before returning** — continuing, not starting over.

That pair (post-session cement + pre-session jive) is a primary reason the product exists.

## Product thesis (locked lean)

- Job: **while-reading / while-listening companion** for recall and engagement — **not** a book substitute.
- Blinkist/Shortform remove enjoyment: strip anecdotes, humor, stories, self-relation. *Sapiens* works because of those.
- Drive people **into** the source they already bought; finish rates + perceived value → publishers; more books over time.
- Reject: regurgitated teach-the-book summaries; Shortform wall-of-text with weak recall.
- Want: tools that improve **recall** — especially **return-to-book** confidence.

## Competitive map

| Class | Examples | Relation to us |
|-------|----------|----------------|
| Curated micro-learning | Blinkist, Headway, getAbstract, 15Minutes | Replace the book — opposite job |
| Deep curated guides | Shortform | Closer depth, still catalog + substitute vibe |
| Upload-any-book AI | Summarsky, Notelify, NotebookLM/Gemini Notebook | Any-book; weak rights story; not retention product |
| Lit study guides | SuperSummary, SparkNotes | Title-bound, not companion UX |

**Legal pattern (not advice):** Blinkist/Shortform argue original transformative summaries (ideas ≠ expression) + sometimes partner revenue share; Summarsky pushes liability to uploader. Fair use is a defense, not a license. Guardian criticism = substitute apps steal revenue — we position against that.

**Buy-and-parse:** purchasing a copy for *our* generation quality is good ops; it is **not** alone a commercial derivative license. Still plan publisher alignment.

## Monetization lean

- Freemium and/or tip-the-dev as love (not the business).
- Subscription preferred; **`$12–20/mo` for N active books** over `$5` unlimited.
- Controls: N active books, chapter-by-chapter Build, no bulk ZIP, rate limits.
- Brian: sub does **not** require ownership KYC day one — metering is enough at launch.

## Rights / publisher stance

- Enhancement to **already owned** books; not a replacement library.
- Prefer publisher allies; can start without formal permission with enhancement framing; pivot to licensed/pilot titles.
- Paid Gemini for generation (business billing).

## Google / Gemini stake

| | Paid billed API | Free unpaid |
|--|-----------------|-------------|
| Output ownership | You | You |
| Train on your prompts | No | Yes (improve products) |
| Venture rule | **Required** class of API for book text | Forbidden for book text |

**2026-07-21 update:** Gemini was convenience, not the forever stack. **Route by task** (parse / MCQ / chat / image / ASR) for quality×price — [ideas/model-routing-eval-2026-07-21.md](../ideas/model-routing-eval-2026-07-21.md). Image prompts Brian-reviewed / hard-locked.

## Fiction + UX ideas (backlog)

- Fiction-native wedge (industry is nonfiction-heavy).
- Spoiler-safe **cast-at-place** — who/what the character is *so far*.
- Modular packs — drop image, reorder sections, learning-style profiles.
- ~**2‑minute audio summary** to jog memory before next chapter (**pre-return jive**).
- **Immediate post-chapter solidify** flow (pack / quiz / short cement).
- Outlinks to topic videos; location/brand tie-ins — **parked** as maybe/never.
- Progress bridges, knowledge checks, engagement over blips.

## Ops / roles

- Agent = product/development.
- Brian = logistics, venture, business Cursor seat, publisher outreach later.
- Homelab Docking Bay Codex = personal prototype; commercial work is greenfield under Project Codex.

## Open questions

1. First paid SKU: freemium+N-book vs waitlist-only until fiction packs feel magic?
2. Day-one supply: buy-and-parse vs user-upload vs both?
3. Public story: fiction-first vs equal fiction/nonfiction?
4. Entity timing: LLC before paid beta vs after waitlist?

## Resume here (business account)

1. Userdata Switcher → Ventures (`Cmd+Shift+U`).
2. Open `/mnt/DataStore/Ventures` root.
3. This digest + `docs/thesis.md` + `docs/north-star.md` + `docs/ideas/backlog.md`.
4. `docs/dual-account.md` + protocol + `cursor-shared/phrases.md`.
5. Continue: env ready → next product plan — not re-litigating Blinkist.
