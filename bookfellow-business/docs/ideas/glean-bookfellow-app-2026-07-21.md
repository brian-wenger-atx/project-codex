# Companion market glean — bookfellow.app + peers (2026-07-21)

Sources: public marketing/privacy only. Inspiration — build our wedge, don’t clone.

## Part A — bookfellow.app (Melbourne)

Their pitch: *reading companion that remembers what you thought* · tracker + AI “The BookFellow” chat · private beta.

Ours: *companion for books you own* · **solidify after** + **jog before return** · not a substitute.

## Feature map

| They have (public) | Fit for us? | How we’d shape it |
|--------------------|-------------|-------------------|
| Library / want·reading·finished | **Yes (light)** | Status on *owned/unlocked* titles — not a Goodreads clone as the core job |
| Reading sessions / streaks / duration | **Maybe later** | Habit candy; don’t let it overshadow return-to-book |
| Page progress / calibration | **Weak** | We care about *chapter/session memory*, not competing with Kindle position sync |
| **AI chat about the book** (“The BookFellow”) | **Yes — Brian already wants** | Q&A **grounded in companion pack + user notes** for *this* title; drive back into the book, not replace reading |
| Conversation style personalization | **Nice later** | Tone presets once chat exists |
| **Notes / reflections** | **Yes — Brian** | Notes surface; **auto-fill from chat + voice** so the log isn’t empty homework |
| **Voice notes → text** (discard audio) | **Yes adjacent** | Capture while walking/driving after a listen session |
| **Voice agent (speak with)** | **Yes — Brian** | Same job as chat, hands-free; especially audiobook-adjacent |
| Photo OCR of marked quotes (discard photo) | **Maybe later** | Nice for print readers; not V1 vs post-session solidify |
| Assembled reflection essays/reviews | **Careful** | Risk of substitute/summary vibe; OK as *user’s own* export from *their* notes, not “the book in 800 words” |
| Recommendations from history | **Park** | Dilutes owned-book focus; GTM later |
| Onboarding taste / favourite author | **Light** | Genre buckets already lean; keep short |
| Google Books lookup/covers | **Yes ops** | Catalog metadata — already implied for any library UI |
| Supabase / Claude / Whisper stack | **Ignore as requirement** | We have Next/Postgres/Stripe/Gemini path; borrow *jobs*, not their stack |

## Brian’s three (confirm fit)

1. **Ask questions about the content** — in-pack Q&A / chat for the unlocked book  
2. **Notes auto-filled** from what they write/talk about — conversation → durable notes  
3. **Voice agent** — speak with the companion (same ground rules as chat)

All three serve **solidify** and **return-to-book** if answers cite *their* session memory and push back to the chapter — not “skip the book.”

## Extra gleams worth stealing (shaped)

| Idea | Why it fits us |
|------|----------------|
| **Session-end capture** | After listen/read: “Want to talk for 2 minutes?” → voice/chat → notes + optional jog seed |
| **Pre-return brief from *your* notes** | Jog isn’t only generated pack — include *what you said last time* |
| **Quote shelf (manual or OCR later)** | User-owned lines to re-enter the voice of the book |
| **Discard media, keep text** | Privacy posture: voice/photo processed then dropped — good trust story |
| **Streaks as secondary** | Optional; never the homepage job |
| **Persona name for the agent** | They use “The BookFellow”; we can keep product Bookfellow and agent quieter (“your fellow” / chapter guide) so it doesn’t feel like a second brand |

## Do not borrow

- Positioning as **tracker-first**  
- AI essays that **substitute** for reading  
- Public dump of **stack + full feature list** in a Google Doc privacy policy before launch (they did — we won’t)

## Placeholder site — live without leaking

**Goal:** bookfellow.io resolves to a real Bookfellow page (waitlist / “coming soon” / friends alpha gate).

**Safe to show**
- Name, one-line pitch (*companion for your books* / between sittings)
- Waitlist or “request alpha” email
- Minimal footer: contact, later ToS/Privacy stubs that say *little*

**Do not publish yet**
- Detailed roadmap, pack engine, MAM/supply, pricing math, Gemini/stack, voice/OCR pipeline
- Long privacy policy that lists every AI vendor and feature (their Doc is a free competitor brief — learn from that mistake)
- Until launch-ready: privacy = short “we collect email for waitlist; full policy at launch” — hosted **on our site**, not a public Google Doc

**Ops:** DNS bookfellow.io → www when placeholder is ready; `.cc` can redirect to `.io`.

---

## Broader market glean (2026-07-21)

Apps scanned (public marketing): **BookPal**, **Recall Reader**, **Fabulè**, **Snipd**, **Readwise / Ghostreader**, **Kindleaf**, **BookRecall**, **PocketShelf**, Kindle **Ask this Book** (awareness). Not clone targets — job extraction only.

### Highest-fit ideas (recommend)

| Idea | Who does it | Why it fits Bookfellow |
|------|-------------|------------------------|
| **Spoiler-safe / progress-bounded AI** | BookPal, Recall, Fabulè, Kindle Ask this Book | Fiction-critical: Q&A/recaps only up to *where you are*. Without this, chat (P10) ruins books. |
| **“Previously on…” / where-you-left-off recap** | BookPal, Recall, PocketShelf | = our **pre-return jog**, named in TV language users already know |
| **Session insights after a sitting** | BookPal | = our **post-session solidify** — themes/aha from *this* stretch, not whole-book summary |
| **Character / cast sheet from what you’ve read only** | Recall, PocketShelf glossary | Fiction return-to-book: “who was that again?” without wiki spoilers |
| **One-tap capture while listening** | Snipd (headphone tap → snip + transcript) | Audiobook gold — pairs with P12; “mark this moment” without opening the phone |
| **Resurface *your* notes later** | Readwise Daily Review, BookRecall, Kindleaf | Spaced return of *user* highlights/notes — strengthens permanence story |
| **Cite the source in answers** | Recall (“Based on Chapter 7”) | Trust + drives back into the book |
| **Position without full reader** | Fabulè (last few words), BookPal (snap page) | We don’t need to be Kindle — rough chapter/position for spoiler bounds |

### Nice later

| Idea | Notes |
|------|--------|
| Cross-book / series memory | Recall Pro — only finished prior volumes; easy to spoil if sloppy |
| Export to Obsidian/Notion/Readwise | Power users; not V1 |
| Custom AI prompt presets | Ghostreader-style — after chat exists |
| Active rewrite of highlights in own words | Kindleaf — deep but heavy UX |
| Libro.fm / owned-audio attach | Snipd pattern — aligns with publisher free-with-purchase |

### Do not copy

| Pattern | Why |
|---------|-----|
| Full substitute summaries / “decide if worth your time” | Thesis reject |
| Built-in EPUB as the product | We’re enhancement to books they already have |
| Wiki / web search for “who is X” | Spoiler factory |
| Tracker + social feed as home | Dilutes companion job |

### Competitive awareness

Kindle **Ask this Book** legitimates in-book Q&A — race is *quality + ownership story + fiction/audio equal + publisher path*, not “first AI chat.”

## Brian votes on market gleams (2026-07-21)

| Idea | Vote | Notes |
|------|------|-------|
| Spoiler-safe / progress-bounded AI | **Yes — all surfaces** | Chat, chapter preview, MCQ, cast sheet, etc. |
| Previously on + post-session insights | **Significant polish** | F vs NF variance now; genre later (P23 research) |
| Cast sheet from only what’s read | **Required** | Fiction return-to-book |
| One-tap listen capture (Snipd) | **Parked / unlikely** | Loved by podcast PKM niche; audiobooks only inside Snipd (Libro.fm), not over Audible; photo-OCR ≠ Snipd |
| Resurface your notes later | **Yes** | AI-assisted notes page |
| Cite chapter/source | **Yes — scoped** | Prior chapters + quotes always; **future “later” pointers = NF-strong / fiction-light** |
| Rough position without full reader | **Yes via marks** | User-marked read/listened progress is SoT |
| Library + AI chat + notes/reflections | **Want / core** | First-class product surfaces |
| While-reading/listening visual companion | **Idea — research** | Denser words NF / lighter fiction; sync + distraction + rights TBD |

## One-tap listen capture — verdict (2026-07-21)

**Snipd is well-liked** — but for a **narrow** job: podcast (and some Libro.fm audiobook) listeners who live in PKM (Readwise/Notion/Obsidian). The magic requires listening **inside Snipd**, which owns the audio + can snip the last ~60s. It does **not** overlay Audible/Libby, and it is **not** “photo the page of your book” (that’s OCR elsewhere).

For Bookfellow: without owning playback, one-tap capture is mostly a second product. **Park.** Marks + post-session notes/voice are the honest path.
