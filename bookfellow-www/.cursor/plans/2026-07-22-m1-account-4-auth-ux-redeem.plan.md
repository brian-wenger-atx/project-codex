---
name: M1 Account — 4 auth UX redeem
overview: Polish /sign-in + /create-account; pending_redeem_code via SQL+BA input; /r/[code] prefill; soft-redirect signed-in auth pages; display name stays email local-part.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
  - P9 Create-account redeem / QR prefill (www-feed Ready + backlog) — fold (this child is the wire vehicle; fulfillment stays M11)
  - R1 Auth shell (www-feed Ready) — cite (Plan 1 shipped; this child polishes auth UX)
  - P33 logged-out auth routes (Sign in · Start free → same auth; redeem only on Create) — cite (routes + redeem copy; marketing surfaces leave M12)
  - R4 Unlock / credits / redeem+QR UX — leave (M11 fulfillment + signed-in Redeem)
  - Invite email / create gate — leave (Plan 6; separate field from redeem)
  - Display-name polish (umbrella “Plan 4 may”) — cite (open this review — do not invent scope)
  - Remnant registry paths (www intake-sources) — leave (none seeded)
intake_folded:
  - P9 Create-account redeem field wire (+ URL prefill decision this consult)
todos:
  - id: pages-auth
    content: Polish /sign-in + /create-account in place (mobile-first, AppShell tokens); retire Plan 1 scaffolding copy
    status: completed
  - id: redeem-field
    content: "004 SQL pending_redeem_code on user; BA additionalFields input:true; Create field only; trim empty→NULL"
    status: completed
  - id: redeem-prefill
    content: Thin /r/[code] → /create-account?redeem=…; Create prefills from query; no unlock
    status: completed
  - id: redirects
    content: Post-auth → home; soft-redirect signed-in auth pages via getSessionUser (Node layout)
    status: completed
  - id: remove-throwaway
    content: Replace Plan 1 minimal forms in place (routes stay /sign-in + /create-account — no parallel throwaway paths)
    status: completed
  - id: gate-verify
    content: Phone+desktop create/sign-in; redeem persists; /r/ prefill; signed-in bounce; flip umbrella chain-4
    status: completed
isProject: false
---

# M1 Account — Plan 4: auth UX + redeem wire

Chain: [umbrella](2026-07-22-m1-account-umbrella.plan.md) · prev: [account SoT](2026-07-22-m1-account-3-account-sot.plan.md) · next: [admin foundation](2026-07-22-m1-account-5-admin-foundation.plan.md)

**This plan = #4 of 7**

## Plain English

| | |
|---|---|
| **What this is** | Real Create account and Sign in screens people can use on a phone. |
| **What you get** | Polished auth routes; optional book-redeem field on Create only (saved for later unlock work). |
| **Why it matters** | Plan 1 forms were scaffolding; this is the product surface. |
| **Your part** | None beyond later Build. |

## Also brought in (intake)

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md). **Fold:** P9 Create-account redeem wire (this plan). **Cited:** R1 polish vehicle; P33 auth-route habits. **Left:** R4 fulfillment; Plan 6 invite; M12 marketing; remnant registry empty.

## Scope

**In:** Polish `/sign-in` + `/create-account` in place; `pending_redeem_code` persist; `/r/[code]` prefill; soft-redirect signed-in auth pages; retire Plan 1 scaffolding (same routes).

**Out:** Invite **required** gate (Plan 6 — create stays open for lab through Plan 5); redeem fulfillment / signed-in Redeem / publisher invoice math (M11+); OAuth; public marketing pages (M12); display-name field.

## Design

1. Match existing Monarch-quiet shell tokens from [`AppShell`](../../app/src/components/shell/AppShell.tsx) — do not invent a new brand system. LabBadge may stay for lab host.
2. Copy: professional; “Have a redemption code?” quiet optional — never founder names. Sign in has **no** redeem field (P9/P33).
3. **`pending_redeem_code` (consult Q1=a):** Migration `004_pending_redeem.sql` — `ALTER TABLE "user" ADD pending_redeem_code TEXT NULL`. Better Auth `additionalFields.pendingRedeemCode` with **`input: true`**, `fieldName: "pending_redeem_code"`. Create form sends optional code; trim whitespace; empty → `NULL`. No catalog validation / unlock here. Plan 6 invite is a **separate** field. Durable column is the attribution seed for later publisher count/bill (fulfillment + invoice rules → business + **M11** Unlock UX).
4. **`/r/[code]` (consult Q2=a):** Thin route redirects to `/create-account?redeem=<code>`; Create prefills the field from `searchParams`. No unlock, no QR scanner.
5. **Display name (consult Q3=a):** Keep Plan 1 auto from email local-part — **no** name input this plan.
6. Touch targets ≥44px; Safari safe-areas.
7. Routes stay `/sign-in` + `/create-account` — polish **in place**.
8. Post-auth landing = `/`. **Signed-in on auth pages (consult Q4=a):** soft-redirect to `/` via Node layout + `getSessionUser` (valid session only — not cookie-presence Edge bounce). Protected unauthed → `/sign-in` habit unchanged (queue now; `/admin` Plan 5).

## Acceptance

- Create + Sign in work on narrow viewport
- Redeem only on Create; value persists on `"user".pending_redeem_code` when provided
- `/r/[code]` prefills Create; Sign in has no redeem field
- Signed-in visit to auth pages lands on home; Plan 1 minimal UI replaced in place

## Habit

Flip umbrella `chain-4-auth-ux` on ship.

---

## Full review / consult (2026-07-22)

| Topic | Lock |
|-------|------|
| Persist redeem | SQL column + BA `additionalFields` `input: true` (Q1=a) |
| `/r/[code]` | Thin redirect + `?redeem=` prefill (Q2=a) |
| Display name | Keep email local-part; no field (Q3=a) |
| Signed-in auth pages | Soft-redirect via `getSessionUser` (Q4=a) |
| Publisher bill/count | Column enables attribution seed; **invoice rules → business** (ask-back on business-feed); fulfillment **M11** |

**CP1:** No findings.

**Shipped 2026-07-22:** `004_pending_redeem.sql` applied; polished `/sign-in` + `/create-account`; redeem field + persist; `/r/[code]` → Create prefill; signed-in soft-redirect home; smoke: signup stores code, null when omitted, Sign in has no redeem.
