# Www backlog (bookfellow-www)

Agent-maintained deferred / upcoming product work. **Not** strategy idea-gen — that stays in business. Feed Ready = requirements to fold; **module sequence** lives in `.cursor/build-order.md`.

Update same turn when Brian adds prefs or priority, and on feed auto-ingest.

## Standing requirements

| Item | Notes |
|------|-------|
| **Mobile-first web** — iPhone + iPad from day 1 | Required on every UI Build. Native iOS/Android = other silo. |
| **Live-bound product code** | NAS = **lab host only** (cloud = final home). App/auth/admin/security code is **production-shaped** and must port — no throwaway product paths “because lab.” Staged UI polish OK when a later plan owns it. Brian 2026-07-22. |
| **Professional front-facing copy** | All UI, emails, and anything a non-agent may see must read as a finished product. Internal names (friends alpha, lab, Ops, smoke) stay in plans/docs only — never on pages, badges, email subjects, or admin chrome. Brian 2026-07-23. |
| **Placeholder Wrangler deploy** | After Builds that change `sites/placeholder/`, run `wrangler pages deploy` same turn. Assume go-ahead — Brian 2026-07-21. Opt-out: “don’t deploy” / “no push”. |
| **Mockup locks** | Product IA approved 2026-07-22 — requirements without re-dictation. Not Build order. |
| **One module · smoke · set** | Brian 2026-07-22 — work one module; smoke before calling set; may revisit; no bouncing. **Exception:** during friends alpha, **M6–M10 tandem**. Sequence SoT = build-order Active/next. |
| **Www owns sequencing** | Business proposes / Ready’s; www decides module order. |
| **Chained plans** | Brian 2026-07-22 — when he asks for a chain: decide count first, then write **1 umbrella + N children**. Plan 1 = foundational; last = docs/cleanup; middles generally >1, like-item slices, each builds on prior. |
| **Alpha/beta program (Brian 2026-07-22)** | Phase banners → P43 feedback. Verbose diagnostics **required** thru alpha+beta (Settings toggle visible, locked; hover = required in {phase}; unlock after beta). Escape = close account + delete. Session replay in same diagnostics program. Dual beta: **Beta-1 site** → **Beta-2 chat** (chat built in alpha tandem; may GA without chat — business). **AI-off** toggle: companion AI surfaces off; pack/book gen stays on; future AI features honor toggle. Self-serve account close + delete. Detail → § Alpha / beta program below. |

## Next (modules)

| # | Module | Status |
|---|--------|--------|
| M1 | Account (auth · P38 · lockdown · redeem · admin V1 · credit security · invite email · auth harden) | **set** 2026-07-23 — Plan 7 shipped; Active → M2 |
| M2 | App chrome (rail · Appearance · phone chrome) | queued — **nav lock (Brian 2026-07-23):** Admin flush under primary nav (admins only); bottom slot for account/user icon with spacing gap only (no separator line above user) |
| M3 | Library (+ covers · eligibility) | queued |
| M4 | Bootstrap (book room + thin Codex packs / layout) | queued — stands up friends alpha |
| M5 | Friends alpha | queued — **Plan 1 first:** Sign in on placeholder for alpha/beta; then invite cut · P43 · banners · diagnostics · delete. Opens M6–M10 tandem |
| M6–M10 | Real AI · Notes · Chat+spoiler · Cast · Quizzes | **tandem during M5** (as-wanted; audio with M6). **Chat release** gated by business Beta-2 / GA-without-chat lean — build ≠ public-on |
| M11 | Unlock UX (no SKUs) | queued |
| M12 | Public cutover (P39/P40) | queued |
| M13 | Billing | gated on business $ / trial / roll |

Smoke criteria: `.cursor/build-order.md`.

## Security / Account scope (M1) — filed in chain

| Item | Notes |
|------|-------|
| **Auth / sessions** | **Better Auth** + explicit SQL; email/password; `user`\|`admin` |
| **Account persistence (P38)** | **Plan 3 shipped** — prefs + `companion_credits`; per-book stub |
| **Create-account redeem** | **Plan 4 shipped** — wire + `/r/[code]`; fulfillment **M11** |
| **Lock down queue smoke** | Plan 2 — admin-only; durable headers; auth-secret fail-fast; Redis requirepass; CSP deferred |
| **Admin foundation V1** | **Plan 5 shipped** — `/admin` list/disable/credits; peer-admin master secret; Invites stub |
| **Admin credit anomaly harden (Brian 2026-07-23)** | **Plan 5b shipped** — master secret rename; anomaly/freeze/scan; trusted grant stub |
| **Auth harden (PII/login)** | **Shipped** Plan 7 — rate limits (DB) · min 12 + HIBP · cookie/lifetime docs · invite-as-verified. Full matrix → § Security / PII posture |
| **Invite email** | **Shipped** Plan 6 — CF Email Sending; create-account gated |
| **Docs / Redis ready / rename db global** | **Shipped** Plan 7 |

### Admin credit / master-secret needs (Brian 2026-07-23) — **shipped Plan 5b**

| Need | Status |
|------|--------|
| **Q locks** | **Shipped** — (1a) lock actor admin; (2a) increases only; (3a) email when Plan 6 CF is on (`admin_notify_pending` until then). |
| **Master secret rename** | **Shipped** — `BOOKFELLOW_ADMIN_MASTER_SECRET` (NAS secrets only). |
| **Interactive harden** | **Shipped** — anomalous increases need master secret; 3 strikes / 1h force-disable actor. |
| **Periodic credit scan job** | **Shipped** — BullMQ `credit.scan`; 15m / 240m alpha; coverage vs authorized audits; last 2 snapshots. |
| **Failed master-secret attempts** | **Shipped** — 3/1h + notify stub at 2 fails (Plan 6 wires CF email). |
| **Trusted grant / bypass** | **Shipped stub** — `grantCompanionCreditsTrusted` + same-txn audit. |
| **Unlock** | **Shipped** — clear `credits_frozen_at` from `/admin` with master secret. |
| **Email** | **Shipped** — CF Email Sending; `admin_notify_pending` → live send to all `BOOKFELLOW_ADMIN_EMAILS` |

## Alpha / beta program (sorted — Brian 2026-07-22)

Additive to shipped M1 schema — **no rewrite** of Plans 1–4. Prefs stay JSONB domains; new tables when those modules Build.

| Bucket | Requirement | Module / when | DB / schema note |
|--------|-------------|----------------|------------------|
| **A0 — Placeholder entry (Brian 2026-07-23)** | **First M5 slice:** Small **header/corner** Sign in on **bookfellow.io** for **alpha and beta** → live app `/sign-in`. Label = “Sign in” only (no program jargon). **Href locks when app host is public-ready** — do not point at NAS lab `:4003`. Waitlist stays; create-account stays invite-link gated (not a placeholder CTA unless Brian says otherwise). | **M5 Plan 1** (before banners/P43/diagnostics) | None — static Pages + href to public app host |
| **A — Phase UX** | Banner: you are in alpha / beta-{1\|2}; bugs → feedback link (P43) | **M5** (+ phase string as beta splits) | No schema; env/flag or `product_phase` config |
| **B — Feedback + diagnostics** | P43 button every page; submissions attach last N diagnostic events (“what they say” + “what happened”) | **M5** | `feedback_submissions` + `diagnostic_events` (new). Consent timestamps on user or prefs |
| **C — Verbose logging** | Required thru alpha+beta. Settings toggle **visible, greyed**; hover: required in {phase}. Unlock after beta. Refuse → account delete path | **M5** Settings slice (chrome in **M2** shell) | Prefs domain `diagnostics.verbose` + server enforce; events table above |
| **D — Session replay** | In diagnostics program (with verbose). Vendor TBD at plan time | **M5** (wire when consent copy ready) | Mostly client + vendor; store consent flag; short retention |
| **E — Account close + delete** | Self-serve close account; automatic data deletion (auth + prefs + book state + diagnostics + feedback; revoke sessions). Distinct from admin **disable** (Plan 5) | Plan near **M5** (or small Account follow-on) — needed before friends refuse-logging escape | Delete job / cascade; audit row. Existing FKs already `ON DELETE CASCADE` for prefs + book_state — need full wipe path + async purge of logs/objects |
| **F — AI-off toggle** | User can turn off AI **companion** features (chat and later AI add-ons). **Does not** turn off pack/book generation. Future AI features must check same flag | Prefs default early (**M2**/Settings); **enforce M8+** | Prefs domain `ai.companionEnabled` (name TBD) — JSONB only, no migration churn |
| **G — Dual beta / chat release** | Beta-1 = main site; Beta-2 = chat. Chat **developed** in M8 during alpha tandem; **released** when business says (mid/late beta-2 or post-GA). May launch full release without chat | Business calendar + www feature flags | Feature flag / phase gate — not schema |

### Already built — impact

| Shipped | Impact |
|---------|--------|
| Auth + sessions (Plan 1) | **None now.** Delete path adds revoke + purge later (reuse `revokeUserSessions`) |
| Lab lockdown (Plan 2) | None |
| Prefs + credits + `user_book_state` (Plan 3) | **Additive only** — new prefs domains; CASCADE already helps delete |
| Auth UX + redeem (Plan 4) | None |
| Plan 5 admin | **Shipped** — disable ≠ delete; peer-admin needs off-site master secret. **5b shipped** — anomaly harden + scan/freeze + secret rename |

## Security / PII posture (Brian 2026-07-23) — filed by module

**Goal:** make a breach *relatively not viable* — layered controls, not one magic encrypt-everything switch.

**Sources used:** OWASP ASVS 5.0 (auth/session), OWASP Password Storage Cheat Sheet, NIST SP 800-63B-4 (passwords), Better Auth security defaults, Postgres at-rest guidance (disk/volume + optional column encrypt).

### How encryption actually works here (plain English)

| Data | Right control | Why |
|------|---------------|-----|
| **Passwords** | **Hash** (slow + salted) — Better Auth uses **scrypt** today | Encryption is reversible; hashes are not. OWASP prefers Argon2id; scrypt is the approved fallback when the framework ships it. Do **not** “encrypt passwords.” |
| **Everything on disk** (DB + Redis dumps + backups) | **Volume / disk encryption at rest** | Stops a stolen disk/snapshot from being readable. Cloud managed Postgres usually has this as a checkbox; NAS lab = ZFS dataset crypto when we care about physical theft. |
| **Highest-liability fields** (later: payment tokens we hold, gov IDs — we should **not** store most of these) | **Column / app-level encrypt** + key in KMS, **never** in the same DB | Only if a DB dump alone would still expose something catastrophic. Email is usually **not** worth this early (breaks search/admin; keys live next to the app anyway). |
| **In flight** (browser ↔ app ↔ DB) | **TLS** | Lab LAN may be plain today; **public / cloud must be HTTPS + DB SSL**. |
| **Sessions** | Server-side session rows + secure cookies; revoke on logout/disable | Stolen cookie window is limited; Better Auth DB sessions + our `revokeUserSessions`. |

**Already in good shape (shipped M1 Plans 1–5 + 5b):** Better Auth email/password + DB sessions; password hashes not plaintext; `BETTER_AUTH_SECRET` fail-fast; Redis `requirepass`; admin-only queue; durable headers (nosniff/referrer/frame); role + `disabled_at` + session revoke; admin credit rate-limit + timing-safe master-secret compare; credit anomaly/freeze/scan + trusted grant stub; live-bound auth (no lab throwaway path).

**Plan 5b (shipped 2026-07-23):** credit anomaly master-secret + scan/freeze + trusted grant stub.

### Implement by module (Build cycle)

| When | Control | Status |
|------|---------|--------|
| **M1 now (Plan 6)** | Invites + CF Email Sending · wire `admin_notify_pending` · email verify | **Shipped** 2026-07-23 |
| **M1 Plan 7** | Docs + **auth harden** (rate limits · password/breached · cookie docs) | **Shipped** 2026-07-23 |
| **M1 Plan 7** | **Auth rate limits** on sign-in / sign-up / password-reset (Better Auth DB storage) | **Shipped** |
| **M1 Plan 7** | **Password policy:** min **12** + HIBP (Brian v1 lock) | **Shipped** |
| **M1 Plan 6** | Invite email via CF; create-account gate | **Shipped** |
| **M1 Plan 6** | **Email verification** (invite-as-verified) | **Shipped** — set on invited create |
| **M1 Plan 7** | Cookies: `HttpOnly` · `Secure` (when HTTPS) · `SameSite`; session **7d/1d** documented | **Shipped** — runbook |
| **M1 / standing** | **No PII in logs** — never log passwords, session tokens, full emails in verbose paths; redact in Sentry later | **Standing habit** — enforce harder at **M5** diagnostics |
| **M5 (friends alpha)** | Account delete / purge (already filed); diagnostics consent + short retention; session-replay vendor with DPA; refuse → delete | Filed in Alpha/beta § |
| **M5** | Invite-only + phase banners already reduce public attack surface | Planned |
| **M8+ / notes** | Notes & reflections = user content — access control by `user_id` always; consider encrypt-at-rest **volume** first; column encrypt only if counsel requires | Defer column encrypt unless counsel says |
| **M12 public cutover** | Real **CSP**; HSTS; HTTPS-only; Host allowlist / no lab ports public; cookie `Secure` mandatory | CSP already stubbed here |
| **M12 / cloud** | Managed Postgres **storage encryption** + encrypted backups; Redis TLS; secrets in cloud secret manager (not compose files on disk long-term) | Cloud cutover plan |
| **M13 billing** | Stripe holds card data — **we never store PAN**; webhook raw-body verify (stack hard rule); persist Stripe event ids idempotently | Stack + optional stub |
| **Pre-public / Beta-1** | **Admin MFA** (TOTP/passkey on `/admin` / elevated actions) — **Brian lean 2026-07-23: MFA for admins only, not end users.** User MFA = open business debate (may stay off). | **Later** — admin MFA before public admin exposure; user MFA not assumed |
| **Pre-public** | WAF / bot (Cloudflare) in front of app; abuse rate limits on public APIs | With public hostname |
| **Anytime / standing** | Least privilege SQL; parameterized queries only; admin actions audited; secrets never in git/chat | Ongoing |
| **Do not** | App-encrypt every column “just in case”; invent home-grown crypto; store payment PANs; ship a fake weak CSP early | — |

### M1 scope impact

**No rewrite of shipped Plans 1–5 + 5b + 6 + 7.** Additive only:
1. **Plan 7 shipped** — docs + auth harden (rate limits, password/breached, cookie docs) + Redis ready.
2. Email verify landed as **invite-as-verified** in Plan 6.
3. Everything else stays on the module rows above (M5 / M12 / M13 / cloud).

## Optional stubs

| Item | Notes |
|------|-------|
| **Real CSP (Content-Security-Policy)** | **M12** public cutover — design a real policy then; do not ship a weak “lab-safe” CSP earlier |
| **Redis in `/api/health/ready`** | **Shipped** Plan 7 (fail closed) |
| **Persist Stripe webhook events** | When billing path is touched (M13) |
| **Login rate limits + password policy + breached-password check** | **Shipped** Plan 7 |
| **Email verification (post–CF Sending)** | **Shipped** Plan 6 — invite-as-verified |
| **MFA (TOTP/passkey)** | **Admins only** (Brian lean 2026-07-23). User MFA deferred — debate in business. Not M1. |
| **Volume encryption @ cloud + Redis TLS** | Cloud cutover / M12 |

## Ingested — later / not M1–M5 blockers

| Item | Bucket | Notes |
|------|--------|-------|
| P42 modular repo layout | M4 thin | Align folders; AI vs packs split in bootstrap |
| P43 alpha feedback button | M5 | Every-page; with friends alpha + banners; attach diagnostics |
| P44 friends alpha bootstrap AI | M4 → M5 | Codex-bootstrap before real AI (M6) |
| Verbose diagnostics + session replay | M5 | Required thru beta; locked Settings toggle; see § Alpha / beta |
| Self-serve account delete | M5-adjacent | Escape hatch for diagnostics refuse; full purge |
| AI-off (companion) toggle | Prefs early · enforce M8+ | Not pack gen; future AI honors flag |
| Dual beta / chat release gate | Business + M5/M8 | Beta-1 site · Beta-2 chat; build ≠ release |
| P15 audio recap | M6 (in M5 tandem band) | As-wanted with real AI during friends alpha |
| P20 model routing / AI checklist | M6+ / Later | Opens with M6; full checklist not one-shot |
| Business foundation map | Business parallel | Not a www gate for shell → alpha |
| Build theater P3/P4 | M4 thin / M6 deepen | |
| Voice P12, citations P24, genre P5 | After core depth (M8+) | |

## Post-foundation leftovers

| Item | Module | Notes |
|------|--------|-------|
| Real Gemini / replace `fake_gemini` | M6 | Bootstrap first in M4 |
| Object storage for pack artifacts | M4/M6 | |
| Stripe Checkout + Portal | M13 | |
| Use entitlements table | M11 | Exists unused in `001_init.sql` |
| Rename `__projectCodexDb` | chore | anytime |

## Copy / brand (M12)

| Item | Notes |
|------|-------|
| **P40 guiding principle** | Read more · understand · reflect; free floor as mission on logged-out |
| **P39 punchy voice** | Hooks under P40; hero pick still open (business) |

## Shipped

| Item | Status |
|------|--------|
| Foundation P0–P4 | **complete 2026-07-20** |
| Placeholder + P25 · P26 · P27 | **shipped 2026-07-21** — https://bookfellow.io |

## Deferred

| Item | Notes |
|------|-------|
| Privacy render script | Automate when policy copy churns |
| Placeholder / marketing imagery | Dedicated image-gen or designer |
| Visual stills V1/V8/V9 | Business visual-assets — when convenient |
| Cloud cutover | Separate plan |
| Hire designer | Before public polish — not a www plan yet |

## Out of this silo

| Item | Where |
|------|-------|
| Native iOS + Android | Other silo |
| Billing $ / trial / allotment answers | Business — before M13 |
| Foundation packet writing | Business |

## Changelog

- 2026-07-23 — **M1 Plan 7 shipped:** auth harden (12 + HIBP + DB rate limits); Redis ready fail-closed; account runbook; M1 set → Active M2
- 2026-07-23 — **Password min v1 (Brian):** **12** + HIBP locked for Plan 7; NIST 15 noted as reference only — not adopted (middle ground above BA default 8)
- 2026-07-23 — **M5 A0 locks (Brian):** header/corner Sign in; href → live app host once public-ready (not lab); waitlist stays; create invite-gated
- 2026-07-23 — **M5 first slice (Brian):** Sign in on placeholder for alpha + beta users (professional label; waitlist stays) — filed A0; build-order + lanes updated
- 2026-07-23 — **Nav chrome (Brian):** signed-in hides auth links; Admin flush under primary nav; bottom reserved for user icon (gap/separator above) — M2 continues this
- 2026-07-23 — **Professional front-facing copy (Brian):** no friends-alpha / lab / ops jargon on UI, emails, or chrome others may see; scrubbed Lab badge + copy; standing req
- 2026-07-23 — **MFA lean (Brian):** admins only; end-user MFA not assumed — business debate later; backlog + reverse-feed ask-back
- 2026-07-23 — **Security / PII posture (Brian):** researched OWASP ASVS 5 / NIST 800-63B-4 / password hashing / at-rest layers; filed implement-by-module matrix; M1 = additive harden only (rate limits, password policy, verify, cookie docs) — **no Plans 1–5 rewrite**; volume encrypt + CSP + MFA later
- 2026-07-23 — **Plan 5b shipped:** `BOOKFELLOW_ADMIN_MASTER_SECRET`; anomalous credit increases + 3fails/1h; `credits_frozen_at` + `credit.scan` (240m alpha); trusted grant stub; notify_pending for Plan 6
- 2026-07-23 — **Admin credit / master-secret needs (Brian):** Q1–3 = a/a/a; rename peer-disable secret; scan job 15m / 240m alpha + drip detection + credit-freeze until unlock; trusted bundle/purchase bypass; email via Plan 6 CF — **shipped as Plan 5b**
- 2026-07-23 — **Admin credit anomaly harden (Brian):** large credit increase → master secret; unauthorized → lock account; email notify Brian; Plan 5 follow-on → **5b**
- 2026-07-22 — **Alpha/beta program (Brian):** banners · P43+diagnostics · locked verbose thru beta · session replay · dual beta (site→chat) · AI-off · self-serve delete; schema impact = additive; reverse-fed business
- 2026-07-22 — **Resequence (Brian):** M4 bootstrap · M5 friends alpha · **M6–M10 tandem during alpha** · Unlock→M11 · Public→M12 · Billing→M13
- 2026-07-22 — **M1 Account chain filed** (7 plans): Better Auth + SQL, `/admin` V1, CF invite email, credits wallet; umbrella + children under `.cursor/plans/`
- 2026-07-22 — Standing: chained-plan shape (umbrella + bookends + middles)
- 2026-07-22 — Www module sequence (M1–M13); one-module smoke cadence; P42–P44 ingested; dropped feed R-order as authority
- 2026-07-21 — Standing: placeholder Wrangler deploy same turn
- 2026-07-21 — Lab foundation review: security scope, optional stubs, leftovers
- 2026-07-20 — Foundation closed; mobile-first; native = other silo
