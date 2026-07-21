# Bookfellow placeholder — DNS, email, deploy

**For:** Brian (Cloudflare dashboard + laptop)  
**When:** After Build of [`sites/placeholder/`](../../sites/placeholder/)  
**Plan:** [`.cursor/plans/2026-07-21-bookfellow-placeholder-site.plan.md`](../../.cursor/plans/2026-07-21-bookfellow-placeholder-site.plan.md)

Domains **owned:** `bookfellow.io` (primary) + `bookfellow.cc` (301 → `.io`).  
This is a **marketing placeholder only** — not the NAS lab app (`:4003`) or product cutover.

---

## Order of operations

1. Add both zones to Cloudflare + NS cutover (Phase A)
2. Enable Email Routing + verify `support@bookfellow.io` (Phase B) — **before** public mailto matters
3. Deploy static site to Cloudflare Pages (Phase C)
4. Redirect `.cc` → `.io` (Phase D)

---

## Phase A — Cloudflare DNS zones

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Add site** → `bookfellow.io` (Free plan).
2. Repeat for `bookfellow.cc`.
3. At each **registrar**, set nameservers to the Cloudflare pair shown for that zone.
4. Wait until both zones show **Active** (often minutes; rarely a few hours).

Optional check:

```bash
dig +short NS bookfellow.io @1.1.1.1
dig +short NS bookfellow.cc @1.1.1.1
```

---

## Phase B — Email: `support@bookfellow.io`

Pattern matches dockingbay — see [project-codex-email-cursor-setup.md](/mnt/DataStore/Ventures/project-codex/codex-business/docs/protocol/project-codex-email-cursor-setup.md).

**Hard gate:** Do not treat the site as live until a test message to `support@bookfellow.io` arrives in your inbox.

1. Zone **bookfellow.io** → **Email** → **Email Routing** → enable (Cloudflare adds MX + SPF TXT).
2. **Destination addresses** → add your personal inbox → verify via Cloudflare’s email.
3. **Routing rules** → create **`support@bookfellow.io`** → forward to that inbox.
4. From a **different** account (not the destination inbox), send a test to `support@bookfellow.io`.
5. Confirm delivery (check spam).

**Gotcha:** Gmail → forward → same Gmail often shows only in Sent (loop suppression). Use iCloud, Outlook, or another person.

**Receive only:** You cannot send *as* `support@bookfellow.io` from Gmail without extra SMTP setup (out of scope).

**After Pages attach:** Re-test mail — do **not** delete Email Routing MX/SPF when Pages adds web records.

---

## Phase C — Cloudflare Pages deploy

Static files live in [`codex-www/sites/placeholder/`](../../sites/placeholder/).

### C1. One-shot deploy (Wrangler)

```bash
cd /mnt/DataStore/Ventures/project-codex/codex-www/sites/placeholder
npx wrangler login
npx wrangler pages deploy . --project-name=bookfellow-placeholder --branch=main
```

Or dashboard: **Workers & Pages** → **Create** → **Pages** → **Direct Upload** → upload the folder contents.

### C2. Custom domains (zone bookfellow.io)

1. Pages project **bookfellow-placeholder** → **Custom domains**.
2. Add **`bookfellow.io`** (apex) — primary.
3. Add **`www.bookfellow.io`** → configure **301 redirect to apex** (`bookfellow.io`).
4. Confirm HTTPS on `https://bookfellow.io/`.

### C3. Verify

- Mobile layout (iPhone Safari)
- OG tags (share link preview)
- `mailto:support@bookfellow.io` works after Phase B
- Re-test email after domain attach

---

## Phase D — `bookfellow.cc` → `bookfellow.io`

Only after **Phase A Active** and **Phase C live on `.io`**.

1. Zone **bookfellow.cc** → **DNS** → add **proxied** (orange cloud) records:
   - Apex `@` → `192.0.2.1` (placeholder; traffic goes to redirect rule) **or** use Cloudflare’s recommended dummy A for redirect-only zones.
   - Optional: `www` CNAME → `@`, proxied.
2. **Rules** → **Redirect Rules** → create:
   - **When:** hostname equals `bookfellow.cc` OR `www.bookfellow.cc`
   - **Then:** dynamic redirect to `https://bookfellow.io/` — status **301**
3. Test:

```bash
curl -sI https://bookfellow.cc/ | head -5
curl -sI https://www.bookfellow.cc/ | head -5
```

Both should 301 to `https://bookfellow.io/`.

---

## Phase E — Geo-block Australia (optional)

**Why:** US-first launch; AU excluded per [business naming canon](/mnt/DataStore/Ventures/project-codex/codex-business/docs/naming/bookfellow-lean-2026-07-21.md). IP-based only (VPN bypasses).

**Redeploy first** (includes `unavailable.html`):

```bash
cd /mnt/DataStore/Ventures/project-codex/codex-www/sites/placeholder
npx wrangler pages deploy . --project-name=bookfellow-placeholder --branch=main
```

### Option A — Redirect to region page (recommended)

Zone **bookfellow.io** → **Rules** → **Redirect Rules** → **Create rule**

| Field | Value |
|--------|--------|
| **Name** | `AU geo — unavailable` |
| **When** (expression editor) | `(ip.src.country eq "AU" and not http.request.uri.path in {"/unavailable.html" "/styles.css" "/favicon.svg" "/privacy.html"})` |
| **Then** | Dynamic redirect → `https://bookfellow.io/unavailable.html` |
| **Status** | **302** (or 307) |

AU visitors see the US-first **unavailable** page — not the main coming-soon CTA. The page does not name excluded regions; the edge rule still targets AU only.

### Option B — Hard block

Zone **bookfellow.io** → **Security** → **Security rules** → **Create rule** → **Custom rule**

| Field | Value |
|--------|--------|
| **Name** | `Block Australia` |
| **When** | Country **equals** `Australia` (or expression `ip.src.country eq "AU"`) |
| **Then** | **Block** |

Visitors get Cloudflare’s default block response (no custom page on Free).

### Test

- VPN endpoint in Australia → should hit unavailable page (A) or block (B)
- US / no VPN → `https://bookfellow.io/` unchanged

`.cc` redirects to `.io` first; geo rule on `.io` covers AU traffic either way.

---

## What we deliberately do not publish

No stack, pricing, pack engine, AI vendors, supply path, or roadmap on the placeholder. Privacy stub stays short and on-site.

---

## Changelog

- 2026-07-21 — Phase E: optional AU geo-block (redirect or WAF block)
- 2026-07-21 — Initial runbook (Build placeholder-site plan)
