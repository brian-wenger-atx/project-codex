# Mobile logged-in IA (P34)

**Date:** 2026-07-22  
**Status:** lean draft — phone book page = Overview + inline companion  
**Mockups:** desktop `bookfellow-logged-in-mockup` · phone `bookfellow-mobile-vertical-mockup`

## Breakpoints (lean)

| Surface | Layout |
|---------|--------|
| **Phone vertical** | Hamburger + breadcrumbs; **book page** = Overview hero + companion below |
| **iPad / tablet landscape** | Same as desktop V1, scaled |
| **iPad portrait** | **Open** — try compact-desktop first |

## Phone chrome

- **Hamburger** — Library · Recent/Pinned (books → **Overview**, not Recap) · Settings · credits. **No book submenu** — Recap / Chapters / Cast / Quizzes / Notes live only in companion.
- **Breadcrumbs** — `Library › Hail Mary` (deep: `… › Ch. 12` / Quiz). Companion tabs are **not** crumb destinations.
- **Library** — Covers ↔ Table (+ S/M/L; sort)

## Book page (phone)

1. **Overview hero** — title, cover, ♪ ~2 min recap, Ch. N →, Your mark  
2. **Companion below** (always) — tabs default **Recap** · Chapters · Cast · Quizzes · Notes  
3. **Shrink overview ▴** — collapses cover / ♪ / Ch. N into a **compact top bar** so companion expands. **Expand ▾** restores full hero.  
4. Pref (Settings → Account → Reading + companion Edit): **Start with overview compact** (account + per-book)

## Product (synced with desktop where noted)

### Companion tabs (order)
**Recap (default)** · Chapters · Cast sheet · Quizzes · Notes  
Cast = fiction only. Recap + Chapters always on in Edit.

### Deep views
Chapter page · Quiz run (5/10/15) · Cast history — inside companion

### Chat FAB
On book page; fiction refuse / nonfiction preview

## Out of scope here
- Logged-out (P33)  
- Native wrappers (P7)  
