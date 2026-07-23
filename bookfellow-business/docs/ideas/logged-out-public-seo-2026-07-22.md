# Logged-out / public surface (locked lean — 2026-07-22)

**Proposal:** P33 · lane `public-seo`  
**Status:** UX locks updated this turn (Brian). Deep SEO architecture parked for a separate pass.

**Pairs with:** [thesis.md](../thesis.md), [north-star.md](../north-star.md), P1 trial→sub, P9 redeem/QR, P13 placeholder → cutover, P22 eligibility (copy lives in FAQ), [product/visual-assets.md](../product/visual-assets.md), [product/faq-draft.md](../product/faq-draft.md), [product/voice-copy.md](../product/voice-copy.md) (**P39** punchy hooks). V2 publisher placement: **P36**. Partner inbound: **P45** ([partner-with-us-page](partner-with-us-page-2026-07-22.md)).

## Job

1. **Explain** — we exist so people **read more**, **understand** what they read, and **reflect** — companion for *your* books (not a substitute). Home/How/Pricing must carry that principle + free floor; punchy hooks from **P39** sit under it (**P40**).
2. **Convert** — frictionless **Start free** → unified auth window.
3. **Tease** — one hero still above the fold; How it works numbered loop — no interactive demo.

Signed-in = Library + companion depth. Guides = **signed-in only**, later in V1.

## Locked forks (Brian 2026-07-22)

| Fork | Lock |
|------|------|
| Home | **Above the fold only** — brand, headline, one sentence, CTA. **Must carry** company why (read more / understand / reflect) and/or free-floor why in that one sentence. **Mobile:** welcome composition (hook → Start free → trust); **no** product peek / hero still on first screen (depth lives on How it works). Desktop may still use one V1 still — open. |
| Product stills | On **`/how-it-works`**: **large numbered steps on the left**. Right = **2 screen grabs + 2 feature boxes**. Wording TBD — include understand + reflect beats. |
| Demo | **No** interactive `/demo`. |
| Eligibility | **Not** a standalone marketing page. **Dropout FAQ item** (“What books do you support?”) on **`/faq`**. Catalog gate in-product still P22. |
| FAQ | **Public `/faq`** — collapsible Q&As; includes **why we exist**, support bounds, free floor (principle), cancel/permanence, Blinkist contrast, redeem codes, geo. Footer + How link to FAQ. |
| Pricing | Free floor copy = **mission**, not only SKU table. |
| Auth | Unified `/login`. Top nav: How · Pricing · **Sign in** · **Start free**. |
| Redeem when logged out | **Create account only:** “Have a redemption code?” (+ prefill from `/r/[code]`). **Sign in** has no code UI — members redeem in-app (Library). No lecture copy on the form. |
| Title SEO `/books/[slug]` | Parked for SEO agent. |
| CTA when live | Waitlist removed. Frictionless sign-up. |
| Placeholder | Waitlist (P26) + invite code BR → auth. |
| Guides | Signed-in only; later V1. |
| Publisher placement / referrals | **V2** — P36. |
| Partner with us | **P45** surface — `/partners` (or `/partner-with-us`); **footer** link; publishers first; contact CTA. Full plan = [publisher-plan](publisher-plan-2026-07-22.md). Proposal — not locked for Build yet. |

## Pages (live logged-out)

| Route | Purpose | Primary CTA |
|-------|---------|-------------|
| `/` | Above-fold home | Start free |
| `/how-it-works` | Large # + grab/box mix | Sign in · Start free · FAQ |
| `/pricing` | Floor / membership / permanence | Start free |
| `/faq` | Collapsible FAQ (incl. what we support) | Start free |
| `/partners` (lean) | Publishers / partners inbound (**P45**) | Contact / interest |
| `/privacy`, `/terms` | Legal | — |
| `/unavailable-au` | Geo | — |
| `/login` | Unified auth. Code ▾ **only on Create account** | — |
| `/login?code=` / `/r/[code]` | Opens **Create account** with code open + prefilled | — |

**Top nav:** How it works · Pricing · Sign in · Start free  
**Footer:** Privacy · Terms · Pricing · **FAQ** · **Partner with us** (P45)

## IA sketch

```
Public shell (nav: How it works · Pricing · Sign in · Start free)
├── /  /how-it-works  /pricing  /faq
├── /partners                 publishers / partners (P45) — footer
├── /login                    Sign in | Create account (code ▾ on create only)
│     └── ?code= / /r/[code]  → Create account + prefilled code
└── /privacy  /terms
```

## Canvas

| Surface | File |
|---------|------|
| Desktop | `bookfellow-logged-out-mockup.canvas.tsx` |
| Phone vertical | `bookfellow-mobile-logged-out-mockup.canvas.tsx` |

**Phone chrome (congruent with P34 logged-in):** hamburger drawer (Home · How · Pricing · FAQ · Sign in · Start free) + breadcrumbs + **Start free** in the top bar. Same pages/info as desktop; stacked layout (How steps: number + copy, then grab/box under).
