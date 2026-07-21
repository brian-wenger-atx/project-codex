# North star (end-goal assumption — not built in env plan)

Greenfield web app: **companion for your books** while reading/listening; recall + return-to-book; equal fiction/nonfiction; genre-aware packs; trial→subscription; publisher-aligned enhancement; optional purchased supply after prototype.

## Public framing

- Tagline lean: **companion for your books**.
- Enhancement to titles the user is already consuming — not a replacement library of copyrighted text.
- Audible-adjacent motion: bought the audiobook/ebook → attach the companion here (trial → sub).

## Monetization lean

- Freemium and/or tip-the-dev as love (not the business).
- **Trial → subscription** preferred; allotment + à-la-carte sketch (2026-07-20 evening, math unproven):
  - **All tiers:** 1 book free every **3 months**
  - **Paid (~$10/mo):** + **2 books/month** on top of the quarterly free
  - **À la carte:** **$6**/book (non-member / outside allotment)
  - **Members:** additional books at **$4**/book
- Framing Brian likes: value floor for everyone; hard users can pay for more. Unit economics still open.
- **Unlock permanence (lean):** once unlocked (allotment or purchase), usable **without** an active membership. **Not absolute forever** — **for the life of the site**, with a **guaranteed ~3 months of access if we fold / shut down**. Brian: permanence is **more value** (can justify higher price), not a discount reason. **Member $4 rate** still needs an active sub; cancel → keep prior unlocks (under those terms), lose allotments + member price. **Legal** will need to define/warranty this (ToS / wind-down).
- **Competitive anchor (lean):** people will compare to Blinkist-class apps even though the product differs — those often land around **~$15/mo unlimited**. Aim to feel **clearly cheaper** than that band. Sketch still **~$10/mo** (or nearby); permanence may support holding price rather than racing to the bottom.
- **Clarity of offer:** quarterly free (all tiers) makes the free/floor value **concrete** — you know exactly what you get — vs opaque “unlimited.”
- Prior sketches superseded until unit econ says otherwise: ~$10/mo → 2 books for life; ~$12–20/mo “N active books”.
- Controls still matter: no bulk ZIP, rate limits, chapter-by-chapter Build; ownership KYC not required day one.
- Catalog economics: generated companion packs are **ours** once built — supply cost should amortize across subscribers; long-tail / edge-title buy-cost is a known risk (see decision doc).

## Rights / publisher stance

- Launch story: enhancement to **already owned** / actively consumed books.
- Prefer publisher allies; pivot to licensed/pilot titles when ready.
- **Day-one ops lean (prototype):** MAM ingest to prove the product; **purchase** when success is proven. Public/commercial path and any acquisition story must not depend on unlicensed supply — see [decisions/2026-07-20-v1-launch-leans.md](decisions/2026-07-20-v1-launch-leans.md).
- Buy-and-parse for generation quality is good ops — **not** alone a commercial derivative license.
- Paid Gemini (business billing) required for book text; free unpaid Gemini forbidden.

## Product shape (V1)

- Job pair: post-session solidify + pre-return jog (~2‑min audio + packs/quizzes).
- **Equal fiction/nonfiction** from day one.
- **Genre buckets** — genre-native elements; default layouts per genre; user can override.
- Build UX: professional in-progress status; short **dummy/build theater** even when packs are already available.
- **Mobile (lean):** **both iOS and Android** apps — thin **wrappers of the website** with **core elements pre-downloaded / cached** (not a separate native product). Web remains source of truth; store apps follow after web product is solid. Store-policy / IAP rules are follow-on for www + legal.
- Depth / IP: prefer experiences that are hard to clone overnight (trademark / distinctive UX) if a strategic buyer (e.g. Audible/Amazon) is ever in play.

## Roles

- Agent = product / development (www Builds); business silo = strategy, money, proposals → www-feed.
- Brian = logistics, venture, business Cursor seat, publisher outreach later; fleshes out www proposals into Builds in the www silo.

## Open questions (carry forward)

1. Exact membership dollar vs Blinkist-class ~$15 anchor (hold ~$10, go lower, or use permanence to sit closer under $15)? Do $6/$4 move with it?
2. Trial length / card-on-file / what “trial” includes (N books? one genre?).
3. Entity timing: LLC before paid beta vs after waitlist? (pairs with legal on permanence / wind-down)
4. When to cut over from prototype supply to purchased/user-owned-only for anything public-facing.
5. Unused allotments roll? (Quarterly free stacks with paid monthly — lean says yes.)
