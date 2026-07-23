# Alpha / beta program shape

**Date:** 2026-07-22  
**Status:** lean (Brian via www) — product locks + open GTM/legal asks  
**Source:** www `business-feed.md` (Meta 2026-07-22)  
**Related:** [friends-alpha-bootstrap](friends-alpha-bootstrap-2026-07-22.md) (**P44**) · [alpha-feedback-button](alpha-feedback-button-2026-07-22.md) (**P43**) · [milestones](../proposal/milestones.md)

## Product locks (www implements; business owns consent copy)

| Lock | Detail |
|------|--------|
| **Phase banners** | Alpha → beta banners on product; point users at **P43** feedback |
| **Verbose diagnostics** | Journey events + what-happened context **pair with** feedback (“what they say broke” + logs) |
| **Required through alpha + beta** | Verbose logging **on and locked** (Settings toggle visible but greyed; hover: required in {phase}). Unlock after beta |
| **Refuse → delete** | Offer **close account + data delete** if they will not accept diagnostics |
| **Session replay** | Same diagnostics program (not default forever-logs) — consent blob open (same vs separate checkbox) |
| **Dual beta** | **Beta-1** = main site functionality (chat not required). **Beta-2** = companion **chat** (and later AI surfaces) |
| **Chat timing** | Chat built during friends alpha; may ship mid/late beta-2 **or GA without chat first** (open) |
| **AI-off toggle** | User can disable AI *companion* surfaces (chat + later AI features); **pack/book generation stays on**. Future AI features must respect the toggle |
| **Consent / NDA** | Business owns NDA + program copy; www implements gates |

## GTM / calendar implications

- Friends **alpha ~mid-Aug** still aims **M4→M5** (bootstrap + invite cut).
- **Beta ~Oct** should be framed as **site beta first**; chat is a later gate — not one “full product beta.”
- Reddit messaging: avoid promising chat on day-1 beta if Beta-1 ships without it.
- Legal before Oct: include **NDA + diagnostics (+ replay) consent**, privacy/ToS delta vs live P25/P27, retention window.

## Open (Your turn)

1. **Cohorts:** same friends list for Beta-1/2 vs Reddit split?  
2. **GA without chat?** Allow public launch before chat, then chat beta — or require chat for GA?  
3. **Consent blob:** session replay same as verbose logging, or separate checkbox? Retention window?  
4. **AI-off marketing:** OK to say “you can turn off AI features” in FAQ/ToS? Any surface that must stay AI-on? *(product lean already says companion surfaces off / packs on — confirm public copy)*

## Www module hints (not Build order)

- Banners + P43 + diagnostics/delete → **M5** alpha cut  
- Chat release gate → **M8** (or later)  
- AI-off Settings → prefs (**M1** SoT) + every AI surface (**M6+**)
