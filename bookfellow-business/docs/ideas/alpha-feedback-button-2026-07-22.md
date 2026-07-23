# Alpha / beta feedback button → strategy queue

**Date:** 2026-07-22  
**Status:** lean / proposal (P43)  
**Why:** Friends alpha (and later Reddit beta) need a one-tap way to flag bugs, feedback, and feature wants **from every page**. Brian should see buckets here in the business silo — not dig through chat or email.

## Product lean

- **Visible on every page** during **alpha and beta** (logged-in product + public pages as needed).
- Types (at least): **Bug** · **Feedback** · **Feature request** (nice-to-have OK — capture everything; no implement promise).
- Professional copy — no founder names in the widget.
- Hide or retire for general public launch if noise outweighs signal (Brian decides).
- **Pairs with verbose diagnostics** (journey events + what-happened context) so “what they say broke” attaches to logs — [alpha-beta-program](alpha-beta-program-2026-07-22.md). Phase banners point here.
- Diagnostics **required** through alpha + beta (locked Settings toggle); **session replay** in the same program (consent blob open).

## Routing / surfacing

1. User submits → stored in product (www owns intake / DB) **with** diagnostic context when available.
2. Bucketed (bug / feedback / feature; optional tags: page, book, severity).
3. **Surfaced to Brian** in business: rollup into [`.cursor/dashboard/strategy-queue.md`](../../.cursor/dashboard/strategy-queue.md) (dedicated **Alpha / beta feedback** section) — agents refresh from www `business-feed.md` or a agreed export when new signal arrives.
4. Strategy decides keep / park / Ready — not every ask becomes a Build.

## Out of scope for this lean

- Public roadmap board
- Auto-creating www plans from every feature request
- Replacing support email for legal/privacy issues (keep legal channels separate)

## Plan timing

**Need a plan eventually — not yet.** Still a ways from alpha Build. When Brian asks: www plan for widget + API + dual-feed harvest into strategy-queue.
