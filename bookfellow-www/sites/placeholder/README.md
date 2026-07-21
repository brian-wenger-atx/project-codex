# Bookfellow placeholder (bookfellow.io)

Static coming-soon lander. Deploy separately from the Next.js lab app.

**Go-live:** [`docs/runbooks/bookfellow-placeholder-dns.md`](../../docs/runbooks/bookfellow-placeholder-dns.md)

## Local preview

```bash
cd /mnt/DataStore/Ventures/project-codex/codex-www/sites/placeholder
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

## Deploy (Cloudflare Pages)

From this directory, after `npx wrangler login`:

```bash
npx wrangler pages deploy . --project-name=bookfellow-placeholder --branch=main
```

Attach custom domains in the Cloudflare dashboard (see runbook).

**AU geo-block:** optional — see runbook Phase E after deploy.
