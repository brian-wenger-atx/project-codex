---
name: Bookfellow placeholder site
overview: Design a leak-safe, more inviting static Bookfellow coming-soon page, host it on Cloudflare Pages at bookfellow.io, redirect bookfellow.cc → .io, and stand up support@bookfellow.io via Cloudflare Email Routing.
status: closed
shipped: 2026-07-21
todos:
  - id: design-static
    content: "Build codex-www/sites/placeholder/ — ink+amber wordmark lander; OG/privacy; mailto support@; mobile-first motion"
    status: completed
  - id: runbook-dns
    content: Write docs/runbooks/bookfellow-placeholder-dns.md (CF zones, Pages, .cc redirect, Email Routing for support@)
    status: completed
  - id: brian-cf-dns-mail
    content: "Brian: add .io/.cc to Cloudflare DNS (domains already owned), NS cutover, Email Routing support@, verify receive"
    status: completed
  - id: deploy-pages
    content: "Wrangler/Direct Upload Pages; attach bookfellow.io; www → apex 301"
    status: completed
  - id: cc-redirect
    content: "Cloudflare Redirect Rule: bookfellow.cc → https://bookfellow.io/ (301)"
    status: completed
  - id: pins-feed
    content: Adopt placeholder-site lane; update build-order; business-feed Shipped row on go-live
    status: completed
  - id: move-plan-www
    content: Move plan into codex-www/.cursor/plans/ before Build
    status: completed
isProject: false
---

# Bookfellow.io placeholder + DNS

**Status:** **Closed / shipped** 2026-07-21 — live at https://bookfellow.io

Lane: **`placeholder-site`**. Habit graduate of P13.

## Outcome

| Item | Result |
|------|--------|
| Site | https://bookfellow.io — Cloudflare Pages (`sites/placeholder/`) |
| Redirects | `www.bookfellow.io` → apex; `bookfellow.cc` + `www.bookfellow.cc` → `.io` |
| Email | `support@bookfellow.io` via Cloudflare Email Routing |
| Runbook | [`docs/runbooks/bookfellow-placeholder-dns.md`](../../../docs/runbooks/bookfellow-placeholder-dns.md) |

## Locked decisions (record)

| Choice | Decision |
|--------|----------|
| Domains | `bookfellow.io` + `bookfellow.cc` |
| Host | Cloudflare Pages + Cloudflare DNS |
| Contact | `mailto:support@bookfellow.io` only |
| Hostname | Apex primary; `www` 301 → apex |
| Deploy | Wrangler / Direct Upload |
| Mark | Wordmark only (SVG later) |
| Mood | Deep ink + warm amber → shipped as **light theme** + Cormorant Garamond |

## Maintain

Redeploy after edits:

```bash
cd codex-www/sites/placeholder
npx wrangler pages deploy . --project-name=bookfellow-placeholder --branch=main
```
