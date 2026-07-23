---
name: M1 Account — 4 auth UX redeem
overview: Mobile-first /sign-in and /create-account; optional redeem field on Create only (store for M10); replace Plan 1 throwaway forms; signed-out redirect habit.
intake_considered:
  - M1 Account umbrella (chain SoT) — fold inherited; child scope only
intake_folded: []
todos:
  - id: pages-auth
    content: Product /sign-in + /create-account pages (mobile-first, shell-consistent)
    status: pending
  - id: redeem-field
    content: Optional Have a redemption code? on Create only; persist pending_redeem_code for M10; none on Sign in
    status: pending
  - id: redirects
    content: Signed-out visits to protected routes → /sign-in; post-auth landing = existing home shell
    status: pending
  - id: remove-throwaway
    content: Remove or redirect Plan 1 minimal forms to new routes
    status: pending
  - id: gate-verify
    content: Phone+desktop happy path create/sign-in; redeem value stored; flip umbrella chain-4
    status: pending
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

Inherited from [umbrella](2026-07-22-m1-account-umbrella.plan.md) — no extra folds in this child.

## Scope

**In:** `/sign-in`, `/create-account`; redeem field wire; redirects; retire throwaway UI.

**Out:** Invite **required** gate (Plan 6 — until then create may stay open for lab); redeem fulfillment (M10); OAuth; public marketing pages (M12).

## Design

1. Match existing Monarch-quiet shell tokens from [`AppShell`](../../app/src/components/shell/AppShell.tsx) — do not invent a new brand system.
2. Copy: professional; “Have a redemption code?” quiet optional — never founder names.
3. Store redeem code on user/account (`pending_redeem_code` or similar) at create; Plan 6 invite code is a **separate** field/control.
4. Touch targets ≥44px; Safari safe-areas.

## Acceptance

- Create + Sign in work on narrow viewport
- Redeem only on Create; value persists on account
- Sign in has no redeem field
- Old minimal routes gone or redirect

## Habit

Flip umbrella `chain-4-auth-ux` on ship.
