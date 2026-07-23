# Research brief — Foundation business meeting prep

**Prepared:** 2026-07-22 (late)  
**For meeting:** [../meetings/2026-07-23-foundation-business-meeting.md](../meetings/2026-07-23-foundation-business-meeting.md)  
**Purpose:** Facts to feed Core 3 (esp. market analysis + unit econ + pricing). Not decisions — Brian locks in the meeting.

**Caveat:** Third-party price pages disagree and promo heavily. Treat bands as **orientation**, re-check official pages if locking dollars.

---

## 1. Competitor / substitute price snaps

### Summarizers (people will compare even if we reject the job)

| Product | Job | Price band (2026 sources) | Notes for us |
|---------|-----|---------------------------|--------------|
| **Blinkist** | Skip / skim NF | Monthly often cited **~$15–16** Premium; annual promo often **~$80–100/yr** (~$7–8/mo effective); Pro/AI tiers higher (~$140–175/yr intro) | Our lean “under ~$15” = **monthly sticker** comparison. Annual-effective is lower — don’t only fight $15/mo. Official: [blinkist.com/pricing](https://www.blinkist.com/pricing) |
| **Shortform** | Deeper NF guides | **~$24/mo** or **~$197/yr** (~$16/mo) | Closer to “understand” than Blinkist; still **not** while-reading companion for owned fiction |
| **Headway** | Gamified summaries | Roughly **~$8–13/mo** depending on term | Habit/streak competitor for attention, not our job |

**Locked reject (already):** Blinkist/Shortform-style strip-anecdote substitute is **not** our model — [market-analysis stub](../proposal/market-analysis.md).

### Source-grounded / “chat my book” (DIY — weak substitute)

| Product | Job | Notes for us |
|---------|-----|--------------|
| **Gemini Notebook** (ex-NotebookLM) | Upload sources → grounded Q&A, audio overview | Free tier + Google AI Pro bundle. **Brian lean 2026-07-23:** **not a peer threat.** Chapter-by-chapter / DIY chat = **inconsistent experience**, **bad UX** for return-to-book companion — **why Bookfellow exists**. Treat as attention alternative / “people can cobble something,” not competitive product peer. No Library/credits/spoiler product; no publisher story; not fiction-native packs |

**Meeting prompt (updated):** Lead with **summarizer price-comparison trap** + **why DIY fails our job**. Do **not** spend meeting time treating NotebookLM as the main competitive risk (**Addendum A7**).

### Founder-first (ICP lean)

**Brian 2026-07-23:** Building Bookfellow **for himself**; others may partake if the gold is worth his time. Meeting **Addendum A8** — primary ICP = dogfood Brian; commercial ICP secondary.

### Still look up / verify in meeting or next pass

- [ ] Live Blinkist US pricing screenshot (promo vs renew)  
- [ ] Audible / Kindle “notes & bookmarks” — do they own return-to-book enough?  
- [ ] Any **fiction**-forward companion apps (cast/quiz/recap) shipping 2026  
- [ ] Melbourne / named rivals Brian cares about (from naming competitive posture)  
- [ ] Publisher companion pilots (any public “buy book → free companion”)  

---

## 2. Unit-econ research (ranges only — not a model yet)

### API sticker (Gemini family — one provider; we route by task)

Orientation from public Gemini API pricing pages (Jul 2026; verify before bake-off):

| Class | Rough $/MTok in·out | Use |
|-------|---------------------|-----|
| Flash-Lite class | ~$0.25–0.30 · ~$1.50–2.50 | Bulk parse / cheap jobs |
| Flash class | ~$0.50–1.50 · ~$3–9 | Pack draft / chat mid |
| Pro class | ~$2 · ~$12 (+ long-context uplift) | Hard MCQ / reasoning |

**Paid APIs only** for book text (north-star). Free tier = train-on-prompts risk — out.

### What we still need for a real $/unlock (meeting Block 4)

| Gap | Why |
|-----|-----|
| Tokens per full-title pregen (parse + packs + quizzes + cast + images + TTS) | No fixture run yet |
| Image + TTS unit prices | Separate from text $/MTok |
| Retry / reject rate | Charter says meter finished task |
| Shared catalog pack vs per-user | Amortization assumption |
| Chat $/active user-month | After unlock |

**Meeting ask of Brian:** What’s a **pain ceiling** for $/unlock before the allotment sketch breaks (e.g. $0.50 / $2 / $5)? Even a gut number beats vibes.

---

## 3. Internal canon to bring into the room (already decided)

| Topic | Lean |
|-------|------|
| Framing | Companion for your books; not substitute |
| Equal F/NF | Day one |
| Offer sketch | 1 free/qtr; ~$10 → +2/mo; $6 / $4 extras; permanence life-of-site + ~3mo fold |
| Catalog | Trade F/NF English; hard outs locked |
| Calendar | mid-Aug friends α · legal before Oct · Beta-1 ~Oct · Beta-2 chat |
| Publisher | Offer A lean (companion free); redeem event = enter=unlock; unit/invoice open |
| AI full P20 | Backlogged; alpha may Codex-bootstrap |

Sources: north-star, v1-launch-leans, milestones, publisher-plan, foundation-map.

---

## 4. Research agent should do *before* meeting starts (checklist)

If Brian’s next night is soon, finish these first (agent):

1. [ ] Re-open Blinkist + Shortform pricing pages; note promo vs list  
2. [ ] One-page substitute map draft into `market-analysis.md` **Draft research** section (still stub until Brian edits)  
3. [ ] Optional: rough token estimate from Codex/homelab if Brian allows peek (else leave gap)  
4. [ ] Open meeting file + foundation-map + this brief in Glass  

---

## 5. Sources touched for this prep

- blinkist.com/pricing · Subger / BeFreed / Calmevo secondary summaries (disagree — use official)  
- Shortform hub comparisons · Headway comparison posts  
- notebooklm.google / Gemini Notebook help · AIUnpacking review  
- ai.google.dev/gemini-api/docs/pricing · BenchLM Gemini pricing registry  

---

## Changelog

- 2026-07-23 — DIY/NotebookLM **downgraded** as peer threat (Brian); founder-first ICP lean noted; meeting A7/A8
- 2026-07-22 — Seeded for foundation business meeting.
