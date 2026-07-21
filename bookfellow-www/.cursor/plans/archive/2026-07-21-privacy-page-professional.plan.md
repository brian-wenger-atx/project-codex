---
name: Privacy page professional
overview: "Upgrade bookfellow.io/privacy.html from a two-paragraph stub to a professional legal page: sticky sidebar table of contents, full-document scroll, full prose styling, and the current P25 business draft (sections 1–15) — keeping ink+amber placeholder chrome and manual copy re-sync (render script deferred to backlog)."
todos:
  - id: prose-css
    content: "Extend styles.css: shell-policy (~56rem), policy grid, sticky TOC, prose headings/lists/tables (thead/th), mobile details TOC, scroll-margin-top, html scroll-behavior smooth"
    status: completed
  - id: privacy-html
    content: "Rewrite privacy.html: shell-policy (not shell-narrow), dates, synthesized intro lede, semantic-anchor TOC + 15 sections from business §1–§15, update title + meta description"
    status: completed
  - id: verify-mobile
    content: Local preview 375px + 1280px — anchor/TOC match, table overflow + a11y headers, CSS scroll, meta, P25 banned-copy scan, footer parity
    status: completed
  - id: deploy-feed
    content: "business-feed Shipped row for P25; wrangler pages deploy from sites/placeholder (manual if agent lacks CF auth)"
    status: completed
isProject: false
---

# Professional privacy page (bookfellow.io)

**Shipped 2026-07-21** — repo Built; see hub plan `privacy_page_professional_c636eb9c.plan.md` for full spec.

## Decisions (locked — consult 2026-07-21)

| Decision | Choice |
|----------|--------|
| Copy re-sync | **Manual** for v1 — re-copy §1–§15 when business md changes; **render script deferred** to www backlog |
| TOC scroll | **CSS-only** — `scroll-behavior: smooth` on `html`; no `privacy.js` |
| Deploy scope | **Privacy page only** (P25) |
| Intro | **Synthesized intro** before Section 1 |

## Shipped artifacts

- `sites/placeholder/privacy.html` — full P25 policy
- `sites/placeholder/styles.css` — policy layout + prose extensions
- `docs/business-feed.md` — P25 Shipped row
- `.cursor/build-order.md` — order 5 shipped
