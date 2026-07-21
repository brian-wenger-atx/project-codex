# Mobile / orientation spot-check (P4)

Hard rule 6 / backlog: mobile-first from day 1. P4 chrome is **orientation-sensitive**.

## Breakpoints

| Width | Orientation | Expected chrome |
|------:|-------------|-----------------|
| 375 | any | Hamburger (no sidebar) |
| ~844 | iPhone landscape | Hamburger (sidebar only at ≥1024 landscape) |
| 768 | portrait | Hamburger |
| 1024+ | landscape | Dark quiet sidebar + light canvas |
| 1024 | portrait (e.g. iPad Pro) | Hamburger |

## How to check (browser is OK)

1. Open lab: `http://192.168.1.200:4003/`
2. DevTools → responsive mode → set width **and** orientation
3. Confirm: brand + Lab badge; nav Home / Health / Queue; drawer Escape closes on phone; no horizontal scroll

## P4 checked

| Case | Result | When |
|------|--------|------|
| 375 portrait | checked at Build | 2026-07-20 |
| 768 portrait | checked at Build | 2026-07-20 |
| 1024 landscape | checked at Build | 2026-07-20 |

Native iOS/Android apps are a **separate silo** — not www.
