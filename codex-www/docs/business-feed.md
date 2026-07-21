# Product → strategy feed

Www-owned outbound for `codex-business`. Strategy canon stays in business; this file is a curated projection only.

Business reads this path; does not write www. Schema SoT: `/mnt/DataStore/Ventures/project-codex/codex-business/docs/protocol/dual-feed.md`.

## Meta

- **Last updated:** 2026-07-21
- **Updated because:** P25 privacy policy applied on placeholder

## Shipped

| When | What | Why it matters (user/commercial) | Plan / lane |
|------|------|----------------------------------|---------------|
| 2026-07-21 | **Privacy policy on bookfellow.io (P25)** | Full §1–§15 policy with Effective **May 14, 2026** + Last updated **July 21, 2026**; sticky TOC, US-only §11, substantive legal surface vs stub — Melbourne competitive posture. | [privacy-page-professional](.cursor/plans/archive/2026-07-21-privacy-page-professional.plan.md) · lane `placeholder-site` · www-feed P25 |
| 2026-07-21 | **Placeholder waitlist CTA (P26)** | Public connect = **Join the waitlist** (mailto `?subject=Waitlist`); eyebrow **Launching soon**; US early-access subline. Launch-adjacent posture vs Melbourne “private beta.” | www-feed P26 · lane `placeholder-site` |
| 2026-07-21 | **Bookfellow public placeholder live** | **bookfellow.io** on Cloudflare Pages; **bookfellow.cc** + **www** redirect to apex; **support@bookfellow.io** receives mail. Brand shareable for friends/Reddit GTM — leak-safe coming-soon only (not product/NAS). | [bookfellow-placeholder-site](.cursor/plans/archive/2026-07-21-bookfellow-placeholder-site.plan.md) · lane `placeholder-site` · [`runbooks/bookfellow-placeholder-dns.md`](runbooks/bookfellow-placeholder-dns.md) |
| 2026-07-21 | **Bookfellow placeholder site (repo)** | Static lander + DNS runbook Built in monorepo (ink+amber light theme, wordmark, privacy stub). | same plan |
| 2026-07-20 | **Foundation baseline — stack lock (P0)** | Production target locked for scale: **Next.js (App Router) + TypeScript + PostgreSQL + Redis + BullMQ (Node+Python) + Stripe + Python AI workers**. Cloud = final home; NAS = lab only. Five scaffolding hard rules (queue SSOT, Stripe raw body, DB singleton + PgBouncer, explicit SQL migrations, idempotent Gemini job claims). Competitor-informed (Blinkist/Shortform/Headway/Speechify/Snipd/…). | [www-foundation-stack](/mnt/DataStore/home/agent/.cursor/plans/www_foundation_stack_71f9027b.plan.md) P0 · lane `foundation` · [`docs/stack.md`](stack.md) |
| 2026-07-20 | **Foundation baseline — NAS lab containers (P1)** | Agent can create/update TrueNAS app **`projectcodex`** on LAN `:4003`. Prove maintain path before cloud cutover; no public hostname yet. | same plan P1 · [`runbooks/containers.md`](runbooks/containers.md) · hub `docs/apps/projectcodex.md` |
| 2026-07-20 | **Foundation complete — P2–P4** | Lab live: Next scaffold + Redis/BullMQ (P2), Postgres+PgBouncer+job claims (P3), Monarch-quiet shell — dark sidebar landscape ≥1024 / hamburger elsewhere (P4). Foundation plan **closed**; product lanes/SPs = separate www plans. Brian may hire designer before public polish. | same plan P2–P4 · lab `http://192.168.1.200:4003/` |

## Stumbles

| When | What hit | Impact (cost / rights / timeline / feasibility) | Ask / next |
|------|----------|--------------------------------------------------|-------------|
| _(none for this baseline)_ | | | |

## Learnings

| When | Learning | Money / positioning impact | Suggest business does |
|------|----------|----------------------------|------------------------|
| 2026-07-20 | Book-summary competitors converge on **React/Next + Stripe**; AI companions (e.g. Snipd) lean **Python workers** — we matched that split rather than Blinkist Rails/Vue inertia | Faster path to trial→sub + Gemini pack economics; avoids greenfield on a legacy twin | Echo stack one-liner on `www-feed.md` Direction/Meta; keep SP1–SP2 priced against this stack’s unit-cost assumptions later |
| 2026-07-20 | **NAS is explicitly not production** — portable compose for cloud cutover | Hosting/vendor choice and public launch stay business/ops timing, not blocked by lab | When ready: cloud cutover plan + “books for life” / trial open questions still gate monetization UX |
| 2026-07-20 | **Mobile-first responsive web is required from day 1** (iPhone + iPad) — not post-launch polish. Native **iOS + Android** apps come later in a **separate silo** (Brian already noted to business). | Most companion use will be phone/tablet; desktop-only would burn trial conversion. Native apps are a later GTM/channel bet, not www P2. | Track native-apps silo in venture map when ready; keep www scoped to responsive web until that silo feeds Ready |

## Asks-back

| When | Question for business | Blocks what | Urgency |
|------|----------------------|-------------|---------|
| 2026-07-21 | Mark **P13** + **`placeholder-site`** lane **adopted in www** on `www-feed.md` | Strategy feed stays aligned with shipped placeholder | Next business session |
| 2026-07-20 | Echo foundation baseline (stack + lab) onto `www-feed.md` so strategy pin/dashboard harvest is explicit | Cross-silo awareness only (www already locked) | Soon — next business session |
| 2026-07-20 | Confirm **“books for life”** = unlock survives cancel vs while-subscribed | SP2 pricing UX / entitlements schema | Before billing Build |
| 2026-07-20 | Trial length / what trial includes | SP1 trial→sub flow | Before billing Build |
| 2026-07-20 | When anything **public-facing** must leave NAS lab for purchased/cloud-only supply | Public launch + rights story | Before public URL — placeholder on Cloudflare Pages is brand-only; product cutover still gated |
| 2026-07-20 | Ack native iOS/Android = **other silo** (not www) when you file it on strategy side — www will not invent app-dev plans here | Avoid duplicate planning across silos | Low — whenever native silo is named |

## Changelog (short)

- 2026-07-21 — **P25 privacy policy** on placeholder (§1–§15, dates, sticky TOC)
- 2026-07-21 — **P26 waitlist CTA** on placeholder (Join the waitlist; Launching soon)
- 2026-07-21 — Placeholder plan archived/closed; asks-back P13/lane adoption on business
- 2026-07-21 — **bookfellow.io live** (Pages + redirects + support@)
- 2026-07-21 — Bookfellow placeholder Built (static site + DNS runbook); public go-live pending Brian
- 2026-07-20 — Mobile-first required (www backlog #1); native apps = other silo note
- 2026-07-20 — Foundation baseline handoff (P0+P1); full foundation plan still Active at P2+
- 2026-07-20 — Initial reverse feed seeded (empty tables); dual-feed-www Built
