# Foundation map — what to lock before “this is a real business”

**Status:** working map (2026-07-22)  
**Purpose:** Brian rattled off proposal / SWOT / market analysis — those are the **framing packet**, not the whole foundation. This map lists what else belongs at the foundational layer for starting Bookfellow, what’s already done, and a sensible order.

**Dashboard pin:** [`.cursor/dashboard/proposal.md`](../../.cursor/dashboard/proposal.md)  
**AI gen system (separate pre-Build backlog):** [../ideas/ai-llm-decision-backlog-2026-07-22.md](../ideas/ai-llm-decision-backlog-2026-07-22.md) — do not confuse with this packet. Friends-alpha may use **Codex-bootstrap** (**P44**) before full P20; that does not replace foundation Core 3 or the full AI checklist.

**Foundation ready:** Brian marks explicitly on the proposal pin (or chat). Agents do not auto-promote.

---

## What “foundation” means here

Three different layers often get mixed:

| Layer | Job | Examples |
|-------|-----|----------|
| **A. Venture framing** | Can we explain the business to ourselves (and later counsel / partners)? | Proposal, SWOT, market analysis |
| **B. Operating model** | Can we run it without guessing every week? | Pricing locks, unit econ, supply/rights path, entity, GTM milestones |
| **C. Product / AI system** | Can we build the companion without re-deciding the engine? | Pack schema, spoiler contract, model routing — **backlogged separately** |

This file is **A + B**. Layer C stays on the AI backlog until foundation A/B is far enough that gen decisions have a cost and rights context.

Shell UI Builds (auth / Library / Overview) can proceed when Brian green-lights — they do not require a finished foundation packet. **Paid beta, billing SKUs, and public supply cutover** do.

---

## Already in place (do not rebuild)

| Area | Where |
|------|--------|
| Thesis / north-star / vision | `docs/thesis.md`, `north-star.md`, `vision.md` |
| Guiding principle (read · understand · reflect) | decisions P40 |
| Catalog boundaries | `decisions/2026-07-21-catalog-boundaries.md` |
| Brand / domains | Bookfellow · bookfellow.io — naming lean |
| V1 launch leans (pricing sketch, permanence, supply cheese) | `decisions/2026-07-20-v1-launch-leans.md` |
| Placeholder legal (Privacy / Terms / waitlist) | live · P25–P27 |
| Dual-seat / dual-feed ops | protocol docs |
| Product IA mockups | approved · Ready R1–R7 on www-feed |
| GTM lean | friends alpha (~mid-Aug) → Beta-1 site (~Oct) → Beta-2 chat; legal before Oct — [milestones.md](milestones.md) · [alpha-beta-program](../ideas/alpha-beta-program-2026-07-22.md) |
| Competitive reject framing | not Blinkist/Shortform substitute |

---

## The framing packet you named (Core 3)

| Artifact | Why it matters | Status |
|----------|----------------|--------|
| **Business proposal** | Single narrative: problem, solution, offer, rights stance, milestone ask | stub |
| **SWOT** | Forces the hard tensions (MAM vs acquisition story; long-tail cost; AI burn) into one page | empty |
| **Market analysis** | Who owns “while consuming” vs “skip the book”; substitutes; fiction/NF story; publisher landscape | stub + reject framing locked |

These three are the right **spine**. Everything below either feeds them or is the next layer after a first draft exists.

---

## Other foundational work (full thought process)

### 1. Unit economics & financial model *(high — missing)*

Distinct from market analysis. Without this, allotment ~$10 / $6 / $4 and free-floor mission stay vibes.

- Cost per unlocked title (AI gen + images + TTS + storage + retries)  
- Cost per active chat month  
- Contribution margin at sketch prices  
- Free-tier / free-unlock burn (1/qtr + publisher redeem)  
- Sensitivity: obscure-title demand vs amortizable catalog hits  
- Bootstrap runway assumptions (Brian’s capital; no invented raise)

**Durable home (suggested):** `docs/proposal/unit-economics.md` when drafted.

### 2. ICP & buyer story *(medium — lean starting)*

**Brian lean 2026-07-23:** Product is built **for Brian first** (gold for him); others partake **if worth his time**. Primary ICP = founder dogfood. Commercial ICP is a secondary filter, not the starting point. Meeting **Addendum A8**.

Still to lock in proposal:

- Who else (beyond Brian) is worth the time — serious fiction re-readers? learners?  
- Buyer vs user (same person day one for friends alpha — yes)  
- Jobs-to-be-done: recall / return-to-book / understand / reflect  
- Why trial→sub beats “another AI chat on a PDF” / DIY NotebookLM (**A7**: DIY UX fails the job)

**Can live inside** business proposal § customer — or a short `docs/proposal/icp.md`.

### 3. Rights, supply & publisher path *(high — leans only)*

This *is* the business risk for Bookfellow. Umbrella: [ideas/publisher-plan-2026-07-22.md](../ideas/publisher-plan-2026-07-22.md) (**P45**).

- Exit criteria from MAM prototype → purchased / licensed / user-owned supply  
- Publisher pilot offer: **A** companion free with purchase vs **B** host the book (still open)  
- Who funds free-unlock generation  
- **Billable event** for redeem — **locked:** enter = unlock (one event); unit + who invoices still open  
- What we claim publicly about “books you own”  
- Counsel triggers (when to pay a lawyer vs lean ToS)  
- ~~Reader-insights product (P46)~~ — **parked** (brainstorm only; not wanted)

**Feeds SWOT + market analysis + proposal rights section.** Deeper notes → `docs/research/` as needed.

### 4. Pricing & packaging locks *(high — sketch only)*

Foundation should **stress-test** then either lock or explicitly keep “lean until costs land.”

- Exact membership $ vs ~$15 Blinkist-class anchor  
- Credit / allotment **roll**  
- Trial length + contents  
- Cancel / keep-access copy vs ToS §7 permanence  
- SKU list billing can implement (blocks P1 Builds)

**Home:** decisions file when locked; until then open questions on monetization pin.

### 5. Risk register *(medium — missing)*

One page: legal, IP, supply, AI hallucination/spoiler, payment, App Store later, key-person (Brian).

- Likelihood × impact; mitigation; “stop-ship” items for public launch  
- Separates anxiety from plan

**Suggested:** `docs/proposal/risk-register.md`.

### 6. Entity, money movement, compliance *(ops — timing open)*

Not framing-blocking, but foundation should **decide timing**.

- LLC before paid beta vs after waitlist  
- Banking / Stripe entity  
- Sales tax / nexus (US-first)  
- Counsel pass on ToS permanence + venue when entity forms  
- US ITU trademark: already deferred until “product is real”

**Pin:** ops dashboard. Don’t pretend the proposal packet creates the LLC.

### 7. GTM plan beyond the lean *(medium — calendar lean now)*

Market *analysis* ≠ go-to-market *plan*.

- **Calendar (Brian 2026-07-22):** friends **alpha ~mid-August** → **Beta-1 site ~October** → **Beta-2 chat** (GA without chat open) — [milestones.md](milestones.md) · [alpha-beta-program](../ideas/alpha-beta-program-2026-07-22.md)
- Friends alpha: who, how many, feedback + diagnostics ([ideas/friends-alpha-bootstrap](../ideas/friends-alpha-bootstrap-2026-07-22.md))  
- Reddit Beta-1: communities, positioning **without** over-promising chat  
- Waitlist → frictionless signup cutover (P33)  
- Narrative: enhancement to owned books; no first-mover copy claims  
- SEO / App Store as later wedges (parked title SEO)

**Pin:** market.md · expand when alpha approaches.

### 8. Success metrics & milestones *(calendar lean live — metrics still thin)*

**Calendar lean:** [milestones.md](milestones.md) — mid-Aug alpha · legal before Oct · Beta-1 site ~Oct · Beta-2 chat (feedback-dependent).

Still open for metrics / ship gates:

- Product: return-to-book rate, companion session depth, unlock→open chapter  
- Business: waitlist→trial→paid, cost/unlock vs price  
- Exact alpha “done enough”; what legal means before Oct (incl. NDA/diagnostics); dual-beta cohorts / GA-without-chat; later gates (NAS cutover, public paid)

### 9. Competitive / substitute map (depth) *(feeds market analysis)*

Beyond “not Blinkist”:

- Summarizers (price-comparison trap even though job differs)  
- DIY NotebookLM-class — **weak substitute** (Brian: chapter UX inconsistent / bad for our job — **A7**)  
- Publisher apps, audiobook apps with notes  
- Where fiction-native companion is empty vs crowded  
- Research stubs under `docs/research/` as depth grows

### 10. Brand, voice, trust assets *(mostly done — finish edges)*

- Voice bank + guiding principle: done  
- Visual stills V1/V8/V9: when convenient  
- FAQ draft: exists  
- Public claims discipline: already in feed  

Not blocking foundation draft — polish for public cutover.

### 11. Capital & capacity *(low visibility — ask Brian)*

- Solo + agents vs contractor budget  
- Time budget (evenings vs push)  
- What “done enough to charge” means personally  

Usually a short note in proposal or ops — not a 20-page plan.

### 12. Strategic narrative / exit imagination *(optional in proposal)*

Already leaned (e.g. Audible-class bundling). One paragraph in proposal is enough; don’t build the company for an exit.

### 13. AI / LLM system definition *(backlogged — Layer C)*

Necessary before **gen/pregen Builds**, not before drafting Core 3. Full checklist: [ai-llm-decision-backlog-2026-07-22.md](../ideas/ai-llm-decision-backlog-2026-07-22.md).

---

## Recommended order of work

```text
1. Business proposal — first real draft (absorb thesis, north-star, allotment, rights lean)
2. SWOT — same week (force MAM / long-tail / AI cost tensions onto paper)
3. Market analysis — substitutes + while-consuming job + publisher notes
4. Unit economics sketch — even rough ranges beat vibes (unblocks pricing honesty)
5. Pricing / trial / roll — lock or explicitly defer with criteria
6. Supply / publisher offer A vs B — lock lean for outreach
7. Milestones + success metrics — calendar lean lives in [milestones.md](milestones.md); still define alpha ship gate + metrics
8. Risk register — one page
9. Entity / legal — **before October** soft target (scope TBD); lock contents, not just the month
10. GTM detail — tighten before mid-Aug alpha
11. AI backlog clusters A–D — before R5 gen Builds
```

Core 3 first. Items 4–8 make the packet **investor/counsel/partner grade**. Calendar dates do **not** wait for Core 3 — www still aims mid-Aug alpha in parallel. Item 11 is product-engine foundation, tracked separately.

---

## What we are *not* treating as foundation

- Random idea-gen (paused)  
- Deep App Store / IAP design (after web solid)  
- Genre ML baselines (P23 parked)  
- Publisher placement V2 (P36 parked)  
- Full non-US geo mesh  
- Filing trademark “just in case” now  

---

## Open questions for Brian (foundation scope)

1. Is **unit economics** in-scope for this foundation pass, or after Core 3 drafts?  
2. Should **ICP** be its own short doc or a proposal section?  
3. Is **entity timing** a foundation decision this month, or park until paid beta approaches?  
4. When is **foundation ready** — Core 3 drafted, or Core 3 + unit econ + pricing locks?

---

## Changelog

- 2026-07-23 — ICP lean: founder-first; DIY NotebookLM downgraded as peer threat (meeting A7/A8)
- 2026-07-22 — Created; Brian asked what else belongs at foundational level beyond proposal/SWOT/market analysis; AI items filed to separate backlog.
