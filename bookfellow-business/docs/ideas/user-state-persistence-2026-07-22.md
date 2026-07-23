# User state persistence (must not lose settings)

**Date:** 2026-07-22  
**Status:** Product lean — **must** for signed-in product  
**Feed:** [www-feed.md](../www-feed.md) **P38**  
**Brian:** All settings the user keeps for custom ordering, notes, anything they change in the UI, or data they enter must be captured and saved so they do not lose settings from session to session.

## Rule

**Signed-in SoT = account on the server** (Postgres). Reload, new browser, another device (same account) → same preferences and entered data. Ephemeral chrome (scroll position, open dialog) may stay local; **durable choices and content must not.**

Mockups / local demos may use client storage only; product Builds must wire persist + restore.

## Inventory (living — add when new dials land)

| Domain | What persists | Tied to |
|--------|---------------|---------|
| **Library (P17)** | View mode (table ↔ covers), size S/M/L, sort mode, **Custom order**, Recent **vs** Pin 3 + which pins | account |
| **Appearance (P28)** | Background, accent, Light/Dark/System | account |
| **Reading prefs** | Account default “open companion by default”; **start with overview compact** (phone) | account |
| **Per-book companion (P29/P35/P34)** | Tab hide/show (data kept), open-companion-by-default override, overview compact override | account × book |
| **Progress** | User-marked read/listened (spoiler bound) | account × book |
| **Notes (P11)** | All note bodies + metadata | account × book |
| **Cast (P18)** | User notes on characters | account × book |
| **Quizzes (P19)** | Attempt history; last chosen run length if we remember it | account × book |
| **Rail (P37)** | Collapsed vs expanded preference | account |
| **Unlocks / credits** | Membership allotment state, unlocked titles, pack pin version (P32) | account (billing) |

## Non-goals (for now)

- Guests / logged-out: no durable prefs (marketing only).
- Sync conflict UX beyond last-write-wins unless multi-device editing becomes painful.
- Export/import of prefs as a V1 feature (notes export later if asked).

## Www implication

Cross-cutting lane: every surface that mutates preference or user content needs **write path + hydrate on load**. Prefer one preferences/settings schema + per-book user-state tables over scattered `localStorage` keys.
