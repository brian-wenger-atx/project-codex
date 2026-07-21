# Mobile viewport spot-check (P2 acceptance)

Hard rule 6 / backlog: mobile-first from day 1.

## Breakpoints

| Width | Role |
|------:|------|
| 375 | iPhone-class |
| 768 | iPad portrait-class |
| 1024 | iPad landscape / small desktop |

## How to check (browser is OK)

1. Open lab: `http://192.168.1.200:4003/` (or `pnpm dev` → `http://127.0.0.1:3000/`)
2. DevTools → responsive mode → set each width above
3. Confirm: brand readable, one supporting line wraps cleanly, Health link tappable, no horizontal scroll

## P2 checked

| Width | Result | When |
|------:|--------|------|
| 375 | checked (viewport + fluid shell) | 2026-07-20 Build P2 |
| 768 | checked (layout scales) | 2026-07-20 Build P2 |
| 1024 | checked (layout scales) | 2026-07-20 Build P2 |

Native iOS/Android apps are a **separate silo** — not www.
