# Cover art + store referral lean

**Date:** 2026-07-22 (refined same day)  
**Status:** Brian lean (risk posture) — not counsel clearance  
**Pairs with:** P17 Library covers · P36 referrals · P33 logged-out (covers deferred) · [north-star.md](../north-star.md) rights

## Primary job

**Get good-quality covers** for signed-in product chrome. Affiliate commission is **optional / nice-to-have** — fine if **$0**.

## Brian lean (locked)

1. **Where covers appear:** Library + book pages (Overview / search-add results). **Not** for “advertising” as the product job. **Not** on logged-out / marketing surfaces until Brian decides later.
2. **Source order:** Amazon Associates / Product Advertising (→ Creators API) **image URLs first**. Scrape only gaps the API cannot fill. Prefer their CDN URLs over permanent opaque rehost when practical.
3. **Compliance optics:** always **look** compliant — Associates disclosure, tagged link formats, site registration, FTC affiliate disclosure where links exist. Goal: keep program access; present as a good citizen even when primary motive is covers.
4. **Buy path:** still offer Audible/Amazon-class purchase links from search/add where useful (legal obtain path + publisher-positive story). Money secondary.
5. **Risk posture:** early forgiveness OK; letter of “advertising-only” license vs Library identity use is **known grey** — accept for now.

## What actually holds

| Piece | Holds? | Why |
|-------|--------|-----|
| API covers as primary supply | **Yes — ops lean** | Cleanest path to square audiobook-quality art at scale |
| Commission as success metric | **No** | Covers first; $0 affiliate still success |
| Logged-out Amazon covers | **Deferred** | Brian hold — rethink before public marketing |
| Letter-perfect “advertising only” use | **Grey** | Program text is ad/referral framed; we reuse for Library/Overview identity |
| Scrape fallback | **Gap-fill only** | Prefer undetectable / low-friction; not the default |

## Www implications

- Library / Overview / Add-book search: real covers via API path.
- Logged-out home / How / Pricing / OG: **no** Amazon cover dependency until Brian unlocks.
- Affiliate UI: quiet buy link + required disclosures — not a storefront redesign.
- Migrate PA-API → Creators API on Amazon’s timeline (~mid-2026 deprecation).

## Do not claim in public copy

- “We’re licensed to use all covers because we send buyers to Audible.”
- “Fair use covers our full commercial Library.”

Do claim (when buy links exist): we help people **find and buy** the book they want a companion for.

## Open

- When (if) logged-out may show real covers / title stills.
- Audible-primary vs Amazon multi-format for the buy CTA.
- Cache policy: hotlink-only vs short TTL cache of API images (program terms permitting).
