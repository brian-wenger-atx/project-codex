# Stack (locked 2026-07-20)

**Status:** locked in P0 of [www foundation plan](/mnt/DataStore/home/agent/.cursor/plans/www_foundation_stack_71f9027b.plan.md).

**Final home:** production-grade **cloud** (vendor TBD). **NAS** (`bookfellow` on TrueNAS) is **lab host only** — same service graph, portable compose.

**Live-bound product code (Brian 2026-07-22):** Host ≠ quality bar. App, auth, admin, and security work on the NAS lab must be **production-shaped** and ready to port — no throwaway product paths “because it’s just lab.” Staged UI polish is OK when a later plan explicitly owns the polish pass.

## Recommendation

| Layer | Choice |
|-------|--------|
| App / BFF / marketing | **Next.js (App Router) + React + TypeScript** |
| Styling | Tailwind (detail at scaffold; no design system invent in P0) |
| Primary data | **PostgreSQL** (managed in cloud; containerized on NAS lab) |
| Cache / queues / rate limits | **Redis** + **BullMQ** (Node producers/webhooks **and** Python AI consumers) |
| Queue contract | **TypeScript interfaces SSOT** → generated **Pydantic** via pre-commit/codegen |
| Payments | **Stripe** (Checkout + Portal; App Router webhook = `req.text()` + idempotent events) |
| Data access | **Explicit SQL migrations**; Next DB client **singleton**; **PgBouncer** in compose |
| AI / pack generation | **Python workers** + **job_id claim in Postgres before Gemini**; artifacts to object storage |
| Auth | **Better Auth** (email/password + DB sessions) — M1; OAuth later |
| Interim host | Docker Compose on NAS (`bookfellow`, lab host only, LAN `:4003`) |
| Final host | Managed cloud — separate cutover plan |

### Rejected

- Rails + Vue (Blinkist-like legacy)
- PHP / Laravel
- NAS as forever home
- Gemini on the HTTP request path
- Second UI language
- RQ/Celery **alongside** BullMQ
- Dual hand-maintained TS + Pydantic queue types
- `req.json()` for Stripe webhooks
- Naive per-request Postgres clients
- ORM-only toy schemas as schema authority
- Non-idempotent AI worker retries

## Scaffolding hard rules (non-negotiable)

Also mirrored in [`.cursor/rules/stack-hard-rules.mdc`](../.cursor/rules/stack-hard-rules.mdc).

| # | Risk | Hard rule |
|---|------|-----------|
| 1 | TS / Python queue drift | **BullMQ** for Node **and** Python. TS job interfaces are SSOT; pre-commit codegen emits Pydantic. Never hand-edit the generated side. |
| 2 | Stripe App Router body bugs | Webhook: **`await req.text()`** only. No Pages `bodyParser: false`. Verify signature on raw bytes, then parse. |
| 3 | DB connection exhaustion | Next Postgres client = **global singleton**. Compose includes **PgBouncer** in front of Postgres. |
| 4 | Weak tutorial schemas | **Explicit SQL migrations** (indexes, composite keys, entitlements). ORM optional as thin query layer — not schema authority. |
| 5 | Double Gemini on Redis retry | Before Gemini: **claim/lock `job_id` in Postgres**. Retries no-op if claimed; no overwrite of finished artifacts without explicit re-run job type. |
| 6 | Desktop-only UI | **Mobile-first required** (iPhone + iPad) from day 1 — viewport, fluid layout, Safari safe-areas, touch targets. See [`.cursor/backlog.md`](../.cursor/backlog.md). Native iOS/Android = **other silo** later. |
| 7 | Lab-host excuse for weak product | **Live-bound product code** — NAS is lab **host** only; app/auth/admin/security must be production-shaped and portable to cloud. No throwaway product paths “because lab.” |

## Competitor landscape (research 2026-07-20)

We are a **companion for owned books**, not a Blinkist/Shortform substitute. Competitors still inform **web/SaaS engineering** (growth site, trial→sub, audio, AI jobs).

Sources: job posts, founder/CTO statements, detector sites, case studies. Live HTML fingerprints from NAS workers were often 403; confidence noted per row.

| Competitor | Posture vs us | Detected / reported stack | Confidence | Takeaway |
|------------|---------------|---------------------------|------------|----------|
| **Blinkist** | Substitute summaries (rejected by thesis) | Vue/Nuxt + Rails + AWS + Cloudflare; hiring also cites React/TS/GraphQL | High | Mature AWS growth web; FE migrating toward React/TS. Do not start greenfield on Rails+Vue. |
| **Shortform** | Deep guides / substitute-adjacent | React; jobs historically Vue + Flask/Python; AWS CloudFront + Cloudflare; Stripe; Sentry | Med–High | Stripe + CDN + React; Python where AI/content R&D lives. |
| **Headway** (makeheadway.com) | Microlearning summaries | Next.js + React; Vercel signals; Storyblok CMS | High | Closest book-category **web** twin. *(Not Headway mental-health Co.)* |
| **Speechify** | TTS / listen-to-anything | Next.js + React; Node/TS; multi-cloud K8s; Stripe; Sentry; Tailwind | High | Next+Stripe scales for consumer audio SaaS. |
| **Audible** | Bought-the-book motion we sit beside | React web; Stencil/Tailwind design system; heavy AWS | Med | Enterprise React + CDN — not our ops model. |
| **Snipd** | AI podcast recall companion | Flutter mobile; Python on GCP; Whisper/LLM pipelines | High | AI companion backends lean **Python workers**. |
| **getAbstract** | Enterprise summaries | Older Java/Kotlin + modular FE; HubSpot/Pardot | Med | Enterprise gravity — not a greenfield template. |
| **Instaread** | Summary + audio | Firebase + Nginx + CDN signals | Low–Med | Lightweight; not a demand blueprint. |
| **Four Minute Books** | Free SEO summaries | Content/newsletter site | Low | SEO content play only. |

**Patterns:** React/Next for growth web; Stripe for billing; Python for AI pipelines; cloud + CDN — not self-hosted NAS forever.

## Best practices (design for)

- **12-factor:** env config; stateless web; Postgres, Redis, object storage as attached resources.
- **Split roles:** `web` · async workers · `postgres` · `redis` (+ PgBouncer) · object storage.
- **Queue:** long pack builds / build theater never block HTTP — BullMQ only.
- **Billing:** trial→sub; Stripe Checkout + Portal; raw-body webhooks; entitlements in **our** DB.
- **Ops:** structured logging; Sentry (or equiv.); healthchecks; secrets never in git; rate limits; no bulk ZIP.
- **SEO:** SSR/SSG for marketing; private companion content not publicly indexed.
- **Agents:** TypeScript + Next for product surface; Python only for AI/data workers.

## Next phases (not P0)

| Phase | Job |
|-------|-----|
| P1 | NAS lab container access + `bookfellow` on `:4003` |
| P2 | Next.js scaffold + BullMQ SSOT stubs + Stripe raw-body stub + DB singleton |
| P3 | Multi-service portable compose (web/worker/postgres/pgbouncer/redis) — **shipped 2026-07-20** |
| Later | Cloud cutover plan (vendor, DNS, CI/CD) |

## Ask business session

Www locked stack 2026-07-20 (this file). Please echo a one-liner on `bookfellow-business/docs/www-feed.md` Direction / Meta when convenient — www did not edit the business vault.

## Changelog

- 2026-07-20 — P0 lock: Next.js + Postgres + Redis + BullMQ + Stripe + Python workers; five hard rules; competitor matrix.
