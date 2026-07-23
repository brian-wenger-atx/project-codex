# North star (end-goal assumption — not built in env plan)

Greenfield web app: **companion for your books** while reading/listening; recall + return-to-book; equal fiction/nonfiction; genre-aware packs; trial→subscription; publisher-aligned enhancement; optional purchased supply after prototype.

## Public framing

- **Brand (locked):** **Bookfellow** — primary URL **bookfellow.io** (also own **bookfellow.cc**). *Project Codex* was temporary. See [naming/bookfellow-lean-2026-07-21.md](naming/bookfellow-lean-2026-07-21.md).
- Tagline lean: **companion for your books**.
- **Guiding principle (company):** **read more** · **understand** what you read · **reflect** on what you have read. Why the product exists; must show on **logged-out** surfaces. Free floor (**1 companion / 3 months**, all tiers) expresses the principle. Canon: [decisions/2026-07-22-guiding-principle-read-understand-reflect.md](decisions/2026-07-22-guiding-principle-read-understand-reflect.md) · P40.
- **Punchy marketing voice (lean):** short hooks — *Enhance the books you own*; *Supercharge / Upgrade your learning*; *Dig deeper into the characters/story*; *Recall the throughlines*. Seed bank: [product/voice-copy.md](product/voice-copy.md) (P39). Punchy lines sit **under** the principle — they don’t replace it.
- Enhancement to titles the user is already consuming — not a replacement library of copyrighted text.
- Audible-adjacent motion: bought the audiobook/ebook → attach the companion here (trial → sub).

## Monetization lean

- Freemium and/or tip-the-dev as love (not the business).
- **Trial → subscription** preferred; allotment + à-la-carte sketch (2026-07-20 evening, math unproven):
- **All tiers:** 1 book free every **3 months** — mission-backed (read more / understand / reflect), not only a pricing trick
- **Paid (~$10/mo):** + **2 books/month** on top of the quarterly free
- **À la carte:** **$6**/book (non-member / outside allotment)
- **Members:** additional books at **$4**/book
- Framing Brian likes: value floor for everyone as company principle; hard users can pay for more. Unit economics still open.
- **Unlock permanence (lean):** once unlocked (allotment or purchase), usable **without** an active membership. **Not absolute forever** — **for the life of the site**, with a **guaranteed ~3 months of access if we fold / shut down**. Brian: permanence is **more value** (can justify higher price), not a discount reason. **Member $4 rate** still needs an active sub; cancel → keep prior unlocks (under those terms), lose allotments + member price. **Legal** will need to define/warranty this (ToS / wind-down).
- **Competitive anchor (lean):** people will compare to Blinkist-class apps even though the product differs — those often land around **~$15/mo unlimited**. Aim to feel **clearly cheaper** than that band. Sketch still **~$10/mo** (or nearby); permanence may support holding price rather than racing to the bottom.
- **Clarity of offer:** quarterly free (all tiers) makes the free/floor value **concrete** — you know exactly what you get — vs opaque “unlimited.” It also expresses the company principle (P40).
- Prior sketches superseded until unit econ says otherwise: ~$10/mo → 2 books for life; ~$12–20/mo “N active books”.
- Controls still matter: no bulk ZIP, rate limits, chapter-by-chapter Build; ownership KYC not required day one.
- Catalog economics: generated companion packs are **ours** once built — supply cost should amortize across subscribers; long-tail / edge-title buy-cost is a known risk (see decision doc).
- **Catalog boundaries (lean, edges locked):** **not every book.** Target = **trade fiction + trade nonfiction** (**English only**). Hard out includes textbooks, academic/scientific, comics/manga/GN, unofficial/unpublished, **self-pub/KDP (no allow-list)**, reference, periodicals, workbooks, picture books, tech standards. **Indefinitely parked** (not roadmap): poetry, plays/scripts, scripture, recipe cookbooks, art/coffee-table, CYOA, multi-rights anthologies, extreme long-tail, non-English. Declined → waitlist **notifies Brian**; eligibility on placeholder. See [decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md).

## Rights / publisher stance

- Launch story: enhancement to **already owned** / actively consumed books.
- Prefer publisher allies; pivot to licensed/pilot titles when ready.
- **Publisher plan (P45):** offer + redeem/attribution + economics + Partner page + later placement/insights — [ideas/publisher-plan-2026-07-22.md](ideas/publisher-plan-2026-07-22.md).
- **Partner offer (lean / Brian 2026-07-21):** free **companion** with proof of purchase of that title — third unlock path beside allotment / à-la-carte. Default is **not** hosting the full book for free (heavier rights). See [ideas/publisher-free-with-purchase-2026-07-21.md](ideas/publisher-free-with-purchase-2026-07-21.md).
- **Redeem billable event (locked 2026-07-22):** code **entered** → auto-assign book → enter = unlock = **one event**. Unit / who invoices still open.
- **Reader insights (P46):** brainstormed then **parked** — Brian does not want to pursue; backlog only.
- **Day-one ops lean (prototype):** MAM ingest to prove the product; **purchase** when success is proven. Public/commercial path and any acquisition story must not depend on unlicensed supply — see [decisions/2026-07-20-v1-launch-leans.md](decisions/2026-07-20-v1-launch-leans.md).
- Buy-and-parse for generation quality is good ops — **not** alone a commercial derivative license.
- **Covers + buy referral (Brian lean 2026-07-22):** **primary = quality covers** on signed-in Library/book pages via Associates **API image URLs** (scrape = gaps only). Buy links + compliance optics; affiliate $ optional (OK if $0). **No** logged-out Amazon covers until Brian unlocks. Known grey vs “advertising-only” program framing — accept for now. Canon: [ideas/cover-art-referral-lean-2026-07-22.md](ideas/cover-art-referral-lean-2026-07-22.md).
- **Paid APIs only** for book text (business billing) — free unpaid endpoints forbidden (train-on-prompts). **Gemini is not locked:** route by task for quality×price ([ideas/model-routing-eval-2026-07-21.md](ideas/model-routing-eval-2026-07-21.md)). Image prompts hard-locked after Brian review. **Image text lean:** words on images — more nonfiction, less fiction.

## Product shape (V1)

- Job pair: post-session solidify + pre-return jog (~2‑min **audio** + packs/quizzes) **plus** a faster **Recap** quick-read tab to get back into the book.
- **Signed-in home = Library** (shelf of companions). Metering = **credits** (subtle). Covers = **square audiobook** art. Unlock paths: credits · à-la-carte · **redeem / QR**.
- **Book hub = Overview** → companion **frame** (tabs: **Recap · Chapters · Cast · Quizzes · Notes**). Recap default; auto-open on book entry (prefs override). Chat = **FAB**, not a nav item.
- **Core surfaces:** library · AI chat (spoiler-safe) · notes/reflections (incl. resurfacing). **Cast sheet** from progress only. Progress = **user-marked** read/listened. Quizzes: cumulative + chapter; user run length **5/10/15**.
- **Spoiler gate** applies to chat, chapter preview, MCQ, cast sheet, generated copy/images — not chat alone. Fiction chat refuses future even on ask; nonfiction may preview later themes.
- **Citations (lean):** prior-chapter refs; direct quotes sourced; future-chapter pointers **useful mainly in nonfiction** (fiction: light/rare). Chapter/pack section, not edition page #s.
- **Equal fiction/nonfiction** from day one; session/jog needs **significant polish** with F/NF variance; deeper genre baselines later. **No Session tab** for now.
- **Genre buckets** — genre-native elements; default layouts per genre; user can override.
- **Appearance default:** Slate + Harbor (placeholder continuity). Terminal stays a personal option.
- **Persistence:** prefs + entered data → **account SoT** across sessions (P38).
- **Packs versioned** at unlock; opt-in refresh when pipeline improves (P32). Pregenerate companion on unlock (not on mark-read).
- **Content density (lean / AI-phase):** user picks **condensed · average · verbose** per book — mainly **chapter reviews** (**P51**). Not required for friends-alpha bootstrap.
- Build UX: professional in-progress status; short **dummy/build theater** even when packs are already available. Day-1 **motion** (cover morph, panels, donut recap, rail hover-expand) — [product/animation-surfaces.md](product/animation-surfaces.md).
- **Logged-out:** above-fold home; How + Pricing + FAQ; footer **Partner with us** (publisher plan surface); frictionless Start free; no interactive demo. Public copy carries **read more / understand / reflect** + free-floor why (P40).
- **Mobile web day 1:** phone hamburger + breadcrumbs; Overview + inline companion (shrink hero). **Native later:** **both iOS and Android** as thin **website wrappers** with core cache (P7) — web stays SoT.
- Depth / IP: prefer experiences that are hard to clone overnight (trademark / distinctive UX) if a strategic buyer (e.g. Audible/Amazon) is ever in play.
- Mockup IA locks: [decisions/2026-07-22-product-ia-mockup-locks.md](decisions/2026-07-22-product-ia-mockup-locks.md).

## Roles

- Agent = product / development (www Builds); business silo = strategy, money, proposals → www-feed.
- Brian = logistics, venture, business Cursor seat, publisher outreach later; fleshes out www proposals into Builds in the www silo.

## Open questions (carry forward)

1. Exact membership dollar vs Blinkist-class ~$15 anchor (hold ~$10, go lower, or use permanence to sit closer under $15)? Do $6/$4 move with it?
2. Trial length / card-on-file / what “trial” includes (N books? one genre?).
3. Entity timing: LLC before paid beta vs after waitlist? (pairs with legal on permanence / wind-down)
4. When to cut over from prototype supply to purchased/user-owned-only for anything public-facing.
5. Unused allotments roll? (Quarterly free stacks with paid monthly — lean says yes.)
6. ~~Publisher redeem billable event~~ **Locked** — enter = unlock (one event). Still open: unit + who invoices?

Catalog eligibility edges locked 2026-07-21 — see [decisions/2026-07-21-catalog-boundaries.md](decisions/2026-07-21-catalog-boundaries.md).
