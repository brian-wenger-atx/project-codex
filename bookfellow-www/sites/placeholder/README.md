# Bookfellow placeholder (bookfellow.io)

Static coming-soon lander. Deploy separately from the Next.js lab app.

**Go-live:** [`docs/runbooks/bookfellow-placeholder-dns.md`](../../docs/runbooks/bookfellow-placeholder-dns.md)

## Local preview

```bash
cd /mnt/DataStore/Ventures/bookfellow/bookfellow-www/sites/placeholder
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

## Deploy (Cloudflare Pages)

**Standing (Brian 2026-07-21):** After any placeholder Build that changes files here, agents **deploy same turn** — do not wait for a second “go ahead.”

```bash
cd /mnt/DataStore/Ventures/bookfellow/bookfellow-www/sites/placeholder
npx wrangler pages deploy . --project-name=bookfellow-placeholder --branch=main
```

First-time auth only: `npx wrangler login`. Attach custom domains in the Cloudflare dashboard (see runbook).

**AU geo-block:** optional — see runbook Phase E after deploy.
