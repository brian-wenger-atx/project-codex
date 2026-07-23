# Product → strategy feed

Www-owned outbound for `bookfellow-business`. Strategy canon stays in business; this file is a curated projection only.

Business reads this path; does not write www. Schema SoT: `/mnt/DataStore/Ventures/bookfellow/bookfellow-business/docs/protocol/dual-feed.md`.

## Meta

- **Last updated:** 2026-07-23
- **Updated because:** M1 Account module set (Plan 7 docs + auth harden)

## Shipped

| When | What | Why it matters (user/commercial) | Plan / lane |
|------|------|----------------------------------|---------------|
| 2026-07-23 | **M1 Account module set** | Sign-in/up is invite-gated with real email; admin can manage users/credits; password floor 12 + breached-password block + login rate limits. Friends alpha can stand on a production-shaped account layer. | [m1-account-7-docs-cleanup](.cursor/plans/2026-07-22-m1-account-7-docs-cleanup.plan.md) · `security` |
| 2026-07-23 | **Timeline on bookfellow.io** | Public phase story: Codex start → success → policies → placeholder live; hopeful Alpha late Q3 / Beta early Q4. Footer link next to Terms. | `placeholder-site` (direct publish) |
| 2026-07-23 | **Invite email gate (Plan 6)** | Create-account requires a live invite; admin mints/resends via Cloudflare Email Sending (`invites@bookfellow.io`). Invite-as-verified. Admin anomaly alerts email all allow-listed admins. Workers Paid (~$5/mo) required for arbitrary recipients. | [m1-account-6-invites-email](.cursor/plans/2026-07-22-m1-account-6-invites-email.plan.md) · `security` |
| 2026-07-23 | **Credit security (Plan 5b)** | Large credit increases need an off-site master secret (3 strikes locks the admin who tried). Periodic scan freezes unexplained credit drips without false-freezing purchases/redeems (trusted grant path). Email notify stubs wait on Plan 6 CF Sending. | [m1-account-5b-credit-security](.cursor/plans/2026-07-23-m1-account-5b-credit-security.plan.md) · `security` |
| 2026-07-22 | **Admin foundation V1 (`/admin`)** | Ops can list users, disable accounts, set companion credits. Peer-admin disable needs a master secret that only lives in NAS secrets (never on the website) so Brian can’t lock himself out. Invites UI slot ready for Plan 6. | [m1-account-5-admin-foundation](.cursor/plans/2026-07-22-m1-account-5-admin-foundation.plan.md) · `security` |
| 2026-07-22 | **Auth UX + Create-account redeem wire (P9)** | Mobile Sign in / Create account; optional redeem stored on account; `/r/[code]` prefills Create. Attribution seed for later publisher settle (invoice rules open). | [m1-account-4-auth-ux-redeem](.cursor/plans/2026-07-22-m1-account-4-auth-ux-redeem.plan.md) · `user-control` |
| 2026-07-22 | **Account prefs + companion credits SoT (P38)** | Settings survive reload / other devices on the same account — not `localStorage`. Credits wallet column ready for admin adjust. | [m1-account-3-account-sot](.cursor/plans/2026-07-22-m1-account-3-account-sot.plan.md) · `user-state` |
| 2026-07-21 | **Terms of Service on bookfellow.io (P27)** | Full §1–§20; sticky TOC; footer Terms; **§7 unlock permanence** (life of Service + ~3mo wind-down). | [terms-page-professional](.cursor/plans/archive/2026-07-21-terms-page-professional.plan.md) · `placeholder-site` |
| 2026-07-21 | **NAS lab rename → `bookfellow`** | App slug matches product; `:4003` continues. | [bookfellow-rename](/mnt/DataStore/Ventures/bookfellow/bookfellow-business/.cursor/plans/archive/2026-07-21-bookfellow-rename-cutover.plan.md) Phase F |
| 2026-07-21 | **Privacy policy on bookfellow.io (P25)** | Full §1–§15; US-only §11; substantive vs stub. | [privacy-page-professional](.cursor/plans/archive/2026-07-21-privacy-page-professional.plan.md) |
| 2026-07-21 | **Placeholder waitlist CTA (P26)** | Join the waitlist; Launching soon; US early-access. | P26 · `placeholder-site` |
| 2026-07-21 | **Bookfellow public placeholder live** | bookfellow.io + .cc/www redirect; support@. Brand shareable — not product. | [bookfellow-placeholder-site](.cursor/plans/archive/2026-07-21-bookfellow-placeholder-site.plan.md) |
| 2026-07-20 | **Foundation P0–P4** | Stack lock + NAS lab + scaffold + data plane + Monarch-quiet shell. | [www-foundation-stack](/mnt/DataStore/home/agent/.cursor/plans/www_foundation_stack_71f9027b.plan.md) |

## Stumbles

| When | What hit | Impact (cost / rights / timeline / feasibility) | Ask / next |
|------|----------|--------------------------------------------------|-------------|
| 2026-07-23 | **CF Email Sending paywall** — Dashboard: “only available with the Workers Paid plan.” Free plan can send only to *verified destination* addresses (admin self-mail), not arbitrary friend invites. | **Cost:** ~$5/mo Workers Paid (3k emails included). Brian purchased Workers Paid 2026-07-23; Plan 6 shipped on CF. | Resolved — paid CF |
| _(none prior)_ | | | |

## Learnings

| When | Learning | Money / positioning impact | Suggest business does |
|------|----------|----------------------------|------------------------|
| 2026-07-23 | **Placeholder is the alpha/beta front door** — First **M5** slice: small **header/corner Sign in** on bookfellow.io → **live app host** once public-ready (not NAS lab). Waitlist stays; create-account invite-link gated. No program jargon on the lander. | Friends/Reddit land on brand URL and return via Sign in; waitlist still captures non-invites; needs public app hostname before slice ships | GTM: tell invitees “Sign in on bookfellow.io”; lock public app host timing vs mid-Aug alpha |
| 2026-07-22 | **Alpha/beta program shape (Brian)** — Phase **banners** (alpha → beta) point users at **P43 feedback**. **Verbose diagnostics** (journey events + what-happened context) **pair with** feedback (“what they say broke” + logs). Consent/NDA = business; www implements. Verbose logging is **required through alpha + beta** (Settings toggle visible but **locked/greyed** with hover: required in {phase}; after beta unlock). Offer **close account + data delete** if they refuse. **Session replay** in the same diagnostics program (not default forever-logs). **Beta = two phases:** (1) main site functionality; (2) companion **chat** beta — chat built during friends alpha, may ship mid/late beta-2 or even **GA without chat first** (open). **AI off toggle:** users can disable AI *companion surfaces* (chat and later AI features) while **pack/book generation stays on**; future AI features must respect the same toggle. | GTM calendar, legal/consent copy, Reddit beta framing, “AI-optional companion” positioning | Fold into milestones / GTM / legal: NDA + verbose-logging (+ replay) consent; dual-beta copy; privacy/ToS for diagnostics + delete; decide GA-with-or-without-chat |
| 2026-07-22 | **Create-account redeem code is durable on the account** (`pending_redeem_code`) — not UI-only. Enables counting which codes/partners drove signups; foundation for later publisher bill/settle when unlock fulfills (**M11**). Pending at signup ≠ fulfilled unlock. | Partner economics / P9 path can be measured and billed once invoice rules lock | Decide billable event (code entered vs unlock fulfilled vs both) + who invoices whom; fold into P9/partner lean |
| 2026-07-22 | **Live-bound product code** — NAS remains lab **host** only (cloud = final home), but www product/auth/admin/security work is **production-shaped** and must port. No throwaway product paths “because lab.” Clarifies earlier “NAS ≠ production.” | Less rewrite risk at cloud cutover; alpha/friends run on real foundations | Keep cloud timing separate; treat www M1+ as product, not prototype discard |
| 2026-07-22 | **Friends alpha earlier + depth in tandem** — Www resequence (Brian): **M4 bootstrap** → **M5 friends alpha**; then **M6–M10 (real AI, Notes, Chat+spoiler, Cast, Quizzes) all in tandem during alpha** — not a serial queue after. Audio with M6 as wanted. Alpha starts on bootstrap; depth + real AI ship into the live alpha. | Faster friend feedback; alpha improves while live | Update feed copy that still says friends-alpha / P42–P44 = www **M11**; point at M4–M5 + M6–M10 tandem. Keep P20 beyond first M6 slices. |
| 2026-07-22 | **Www owns product Build sequence** — Brian corrected: business must not dictate www Active/next. Feed Ready / “Post-mockup → first Builds” / R1–R7 labels are **requirement readiness + preference input only**. Www sequences as **modules** (smoke one → set → next). Copied R-order was wrong. | Avoids thrash and kitchen-sink “R3” slices; clearer alpha path | Relabel feed section as **Ready requirements** (not “first Builds order”). Drop “First Build” wording on R1. Keep proposing; do not frame R-IDs as execution order. |
| 2026-07-22 | **P42–P44 ingested** — modular repo/AI vs packs (P42), alpha feedback (P43), friends-alpha Codex-bootstrap (P44). **Updated bucket:** P42/P44 thin → **M4**; P43 + alpha cut → **M5**; real AI → **M6**. Full P20 stays backlogged beyond first M6 slices. Business foundation map = parallel, not a gate for M1–M5. | Friends alpha can ship without finishing AI checklist | Mark lane proposals accordingly on next feed touch |
| 2026-07-20 | Competitors → Next + Stripe + Python workers matched | Faster trial→sub path | Keep unit-econ assumptions on this stack |
| 2026-07-20 | NAS ≠ production | Cloud timing = business/ops | Cloud cutover when ready |
| 2026-07-20 | Mobile-first web day 1; native = other silo | Phone/tablet conversion | Track native silo when named |

## Asks-back

| When | Question for business | Blocks what | Urgency |
|------|----------------------|-------------|---------|
| 2026-07-23 | **MFA scope:** Www lean = **MFA for admins only** (protect `/admin` / elevated ops). **No end-user MFA** assumed. Confirm or debate: keep users password-only (invite/rate-limit/password policy), or offer optional user MFA later? NIST prefers MFA at consumer scale — tradeoff is friction vs risk for a reading companion. | Admin MFA plan timing · Settings/auth UX · privacy/security copy | Soft — before public open signup; not friends-alpha blocker |
| 2026-07-22 | **Dual beta + chat release:** Confirm calendar/GTM: **Beta-1** = main site (no chat required); **Beta-2** = chat (and later AI surfaces). May **GA without chat**, then chat beta — open. Who is in each cohort (same friends vs Reddit split)? | M5 banners/copy · M8 chat release gate · milestones | Before Reddit beta / legal pass (~pre-Oct) |
| 2026-07-22 | **NDA + verbose diagnostics (+ session replay) consent:** Business owns NDA + program copy. Www will require verbose logging through alpha+beta (locked toggle); offer account delete if they refuse. Confirm retention window, whether **session replay** is same consent blob as verbose logging or separate checkbox, and counsel-facing privacy delta vs live P25. | M5 alpha cut · privacy/ToS bump · Settings diagnostics UI | Before friends alpha (~mid-Aug) |
| 2026-07-22 | **AI-off positioning:** Product will ship a user toggle that hides AI companion features (chat+, not pack gen). OK for marketing / ToS (“you can turn off AI features”)? Any features that must stay AI-on? | Settings prefs · M8+ surfaces · public FAQ | Before beta-2 / GA messaging |
| 2026-07-22 | **Publisher redeem billing:** Www stores `pending_redeem_code` at Create (fulfill unlocks in **M11**). What is the billable event for partners — code entered at signup, companion unlocked, both, or something else? Unit ($/redeem, % of book, free-with-purchase only)? Who invoices whom? | **M11** unlock UX + any partner ops/reporting | Before **M11** Build (or earlier if partner pilots) |
| 2026-07-22 | **Ack:** www (not business) sets Build / module order. Please treat Ready as “ok to plan from” and stop presenting R1–R7 / “first Builds” as the www queue. Soften or remove that framing on `www-feed.md` next edit. | Cross-silo confusion / agents copying wrong order | **Next business session** |
| 2026-07-22 | On next feed edit: friends-alpha / P42–P44 www refs are **M4–M6** (not M11). Mark consolidated lane proposals **`adopted in www`** when convenient. | Feed status / M# drift | Next business session |
| 2026-07-20 | Exact membership $ vs ~$15 Blinkist-class; $6/$4 move? | M13 billing SKUs | Before billing Build |
| 2026-07-20 | Trial length / what trial includes | M13 | Before billing Build |
| 2026-07-20 | Unused credits/allotments roll? | M11 unlock copy + M13 | Before billing Build |
| 2026-07-20 | When public product must leave NAS lab for purchased/cloud-only supply | Public product URL | Before public product URL |
| 2026-07-20 | Ack native iOS/Android = other silo when filed | Avoid duplicate plans | Low |

## Changelog (short)

- 2026-07-23 — **Timeline page shipped** on bookfellow.io (Codex → policies → placeholder; hopeful Alpha late Q3 / Beta early Q4)
- 2026-07-23 — **M1 Account set (Plan 7):** auth harden + Redis ready + runbook; module closed → M2 chrome next
- 2026-07-23 — **M5 A0 locks:** header/corner Sign in → live app host when public-ready (not lab); waitlist stays; create invite-gated
- 2026-07-23 — **M5 first slice filed:** Sign in on bookfellow.io placeholder for alpha + beta (waitlist stays; create stays invite-gated)
- 2026-07-23 — **Plan 6 shipped:** invite gate + CF Email Sending; invite-as-verified; admin alerts to ADMIN_EMAILS; Workers Paid purchased
- 2026-07-23 — **Stumble:** CF Email Sending requires Workers Paid (~$5/mo); free = verified destinations only — blocks arbitrary friend invites until pay or ESP swap
- 2026-07-23 — **Plan 5b shipped:** master secret rename; anomaly/freeze/scan; trusted grant stub; notify_pending → Plan 6 email
- 2026-07-23 — **MFA lean (Brian):** admins only; user MFA not assumed — ask-back for business debate
- 2026-07-22 — **Plan 5 shipped:** `/admin` users/disable/credits; peer-admin disable secret off-site only; Invites stub
- 2026-07-22 — **Alpha/beta program (Brian):** banners + P43; dual beta (site → chat); verbose diagnostics required thru beta (locked toggle + delete escape); session replay in program; AI-off toggle (not pack gen); self-serve account delete — learning + asks-back
- 2026-07-22 — **Plan 4 shipped:** auth UX + `pending_redeem_code` + `/r/[code]` prefill; publisher bill ask-back (fulfill **M11**)
- 2026-07-22 — **Redeem attribution seed** (Plan 4 consult): durable `pending_redeem_code`; ask-back on publisher billable event
- 2026-07-22 — **P38 account SoT** shipped (M1 Plan 3): prefs API + companion_credits + per-book stub
- 2026-07-22 — **Live-bound product code** standing req (NAS = host; product ports); clarifies NAS ≠ production
- 2026-07-22 — **Resequence:** M4 bootstrap · M5 friends alpha · M6–M10 tandem during alpha; ask-back to fix feed M11 refs
- 2026-07-22 — **Www owns Build order** (Brian); module Active/next M1–M13; ask-back to drop R-order framing; P42–P44 ingested; prior “copied R1–R7” learning superseded
- 2026-07-21 — P27 Terms · P25 Privacy · P26 waitlist · bookfellow.io live · rename lab
- 2026-07-20 — Foundation handoff; mobile-first; dual-feed seeded
