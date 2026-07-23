# Publisher partnership — free with purchase (2026-07-21)

Brian idea: partner with book makers so users who **buy the book** get something **free on the site**.

Status: **proposal / lean** — not day-one www Build. Pairs with Bookfellow brand lean + existing “enhancement to owned books” thesis.

## Two readings (pick deliberately)

| Variant | What is free on Bookfellow | What user bought | Rights weight |
|---------|----------------------------|------------------|---------------|
| **A — Companion free with purchase** (thesis-default) | Companion pack (jog + chapter tools) | Retail ebook/audiobook/print (proof) | Lighter — we’re not redistributing the book |
| **B — Book free with purchase** | Access to the book itself (read/listen on-site) | Same title elsewhere (or via partner) | Heavy — host/licensed copy, DRM, retailer politics |

**Agent lean:** lead with **A**. It matches thesis (drive people *into* the book they bought), publisher story (“we increase finish rates / value of *your* title”), and exit imagination (Audible-style attach). **B** is a different product (storefront / owned-library host) — only if Brian wants that scope.

Tagline shape (A): *Bought the book? Your Bookfellow for that title is free.*

## Why publishers might say yes (A)

- More finishers → better reviews, series uptake, word-of-mouth  
- Differentiates their title vs “summary apps” that substitute  
- Co-marketing: “Official Bookfellow for [Title]”  
- Optional: affiliate / buy-link so purchase happens through their preferred retailer  
- Data they care about (if shared carefully): return-to-book rates, not raw book text

## Why users like it

- Clear deal: I already paid for the book → companion shouldn’t gatekeep that title  
- Trust: feels publisher-blessed, not grey-area AI dump  
- Fits unlock permanence: free unlock still “for life of site” (+ ~3mo if fold)

## How it sits next to current monetization lean

Current sketch: trial→sub; 1 free/qtr all tiers; paid ~$10 → +2/mo; $6/$4 à la carte.

**Purchase-verified free** becomes a **third unlock path** alongside allotment and à-la-carte:

| Unlock path | Who pays Bookfellow | Who pays publisher/retail |
|-------------|--------------------|---------------------------|
| Allotment / sub | Subscriber | User already owns book (assumed) |
| À la carte $6/$4 | User | Same |
| **Partner free-with-purchase** | Publisher deal and/or $0 to user | User’s book purchase |

Implications:

- Sub still sells for **discovery + multi-title + non-partner catalog**  
- Partner titles might be **$0 companion** with proof → pressure on $6 à la carte for those ISBNs (good — that’s the point)  
- Unit econ: partner may subsidize generation cost, revenue-share, or pay placement; or Bookfellow eats cost for GTM / catalog prestige  
- “Ownership KYC not required day one” (north-star) **does** become required for this path — receipt, retailer account link, code-in-book, ISBN+order ID, etc.

## Proof-of-purchase patterns (sketch)

1. **Publisher code** in print/ebook/audio liner → redeem on Bookfellow  
2. **Retailer partner** (Audible, Libro, Bookshop) — OAuth / entitlement API  
3. **Upload receipt** / order screenshot (weak; fraud)  
4. **Buy button on Bookfellow** → affiliate to retail → webhook unlock (cleanest attribution)

Start with **1 + 4** for pilot publishers; defer hard retailer integrations.

## What we are *not* doing in A

- Not giving away the copyrighted book text as a substitute library  
- Not Blinkist-style “skip the book”  
- Not requiring users to abandon Audible/Kindle — companion attaches *to* those habits

## Risks

| Risk | Note |
|------|------|
| BookFellows name clash | Unrelated; separate from this model |
| Publisher sales cycle | Slow; not V1 blocker — pilot 1–3 titles after product proof |
| Fraud on free unlocks | Codes + rate limits; don’t rely on screenshots alone |
| Cannibalize sub | Acceptable for partner SKUs; sub = catalog breadth + non-partner |
| Variant B rights | Hosting full book = license, DRM, retailer conflict — don’t blur with A in pitches |
| Generation cost | Free unlock still costs Gemini/compute — need partner fee or GTM budget |

## Suggested phasing

1. **Now (strategy):** lock Variant A vs B; name the offer in proposal/SWOT  
2. **Product (www, later):** entitlement model — `unlock_source = purchase_verified | allotment | alacarte`  
3. **GTM:** after companion quality proven on paid path — outreach to 1 indie + 1 mid publisher  
4. **Dream:** Audible/Amazon-class attach (already in exit imagination)

## Open questions for Brian

1. Confirm **A (companion free)** vs **B (book hosted free)** vs both later?  
2. Does free-with-purchase **replace** à la carte for that ISBN, or stack with a premium tier?  
3. Who funds generation on free unlocks — Bookfellow, publisher fee, or rev-share?
4. **Billable event** ~~open~~ **Locked 2026-07-22:** code entered → auto-assign book (enter = unlock = one event). Still open: unit? Who invoices whom? → [publisher-plan](publisher-plan-2026-07-22.md)
