# Decision — V1 launch leans (2026-07-20)

Status: **lean** (pricing math unproven; revisit when unit economics exist). Source: Brian chat 2026-07-20.

## Locked / preferred

| Topic | Lean |
|-------|------|
| Public framing | **Companion for your books** — enhancement to titles the user is consuming; not a substitute library |
| Fiction / nonfiction | **Equal from day one** (not fiction-first marketing) |
| Site model | **Trial → subscription** (Audible-adjacent: bought the book → buy/attach the companion) |
| Pricing sketch | **Allotment + à-la-carte (lean):** all tiers **1 free / 3 months**; paid **~$10/mo → +2 books/month**; à la carte **$6**; members **$4** extra (active sub required). Compare as **cheaper** than Blinkist-class **~$15/mo unlimited** (people will compare anyway). Quarterly free = **concrete** floor vs opaque unlimited. Math unproven. |
| Unlock permanence | **Lean yes, scoped:** usable without active sub **for the life of the site**; if we fold, **guaranteed ~3 months** access. Not absolute forever. Permanence = more value (can justify price). Cancel keeps prior unlocks under those terms; loses allotments + $4 rate. **Legal / ToS** must define this. |
| Catalog / packs | Once built, we **own the generated companion assets**; buy-and-parse cost amortizes across subscribers |
| Day-one supply (ops) | **Interim cheese:** ingest from MAM to prove the product; **purchase** titles when success is proven |
| Public story / genres | Equal fiction/nonfiction; **genre buckets** with genre-native elements and **default layouts per genre**, user-overridable |
| Build UX | Professional in-progress status (not homelab Codex indicator); **dummy/build theater** even when packs are already live so the experience still feels intentional |
| Mobile apps | **Both iOS + Android** — website **wrapper** with **core elements pre-downloaded/cached**; web is SoT. After web is solid; store policy / IAP is follow-on |
| Exit imagination | Possible strategic buyer (e.g. Audible/Amazon bundling companion with audiobook purchase) — implies care for **IP / trademark / hard-to-copy** depth |

## Explicit tensions (do not paper over)

1. **MAM interim supply vs acquisition / publisher story** — commercial product + “enhancement to owned books” + future Audible-style partnership sit poorly next to unlicensed catalog ingest. Treat MAM as **private prototype fuel only**; public launch path should assume purchased/licensed/user-owned supply. Capture in SWOT / market analysis.
2. **Long-tail economics** — if most demand is obscure titles, buy-cost stays high and amortization fails. Metering + unlock permanence + catalog reuse must be stress-tested in foundation packet. **Also:** eligibility boundaries (not every book) — [2026-07-21-catalog-boundaries.md](2026-07-21-catalog-boundaries.md).
3. **Pricing math** — Brian likes the allotment framework but is unsure the math works; lean until real AI + supply costs land.
5. **Store wrappers** — Apple especially can reject thin WebView shells; plan enough offline/cache + app-like affordances (and IAP vs web billing) when www schedules store Builds.

## Product proposals → www

Flesh-out and Builds happen in `codex-www`. Business projects them via [www-feed.md](../www-feed.md) **Product proposals** (agents pass without waiting for Brian to re-type).
