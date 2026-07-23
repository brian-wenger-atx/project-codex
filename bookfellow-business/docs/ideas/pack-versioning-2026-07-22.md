# Companion packs as versioned artifacts

**Date:** 2026-07-22  
**Status:** lean / proposal (P32)  
**Why:** Pipeline + LLM logic will improve after unlock. Silently regenerating under a user who likes their companion is a trust break.

## Model

Treat an unlocked title as a **pack**, not a live always-latest blob.

| Field (sketch) | Role |
|----------------|------|
| `pack_id` | User’s unlocked companion instance |
| `title_id` | Catalog work |
| `pack_version` | Schema + generation pipeline id (prompts, models, assets) |
| `built_at` | When this pack was generated (usually at unlock / pregen) |
| Assets | Chapter packs, quiz bank, cast, ~2 min recap audio, images, … |

New unlocks get **current** pipeline version. Existing packs **stay pinned** to the version they received.

## Update posture (lean)

1. **Default: no silent overwrite** of a user’s live pack.
2. When a newer pack version exists: quiet **“Companion update available”** (not a nag banner).
3. User chooses **Keep mine** or **Refresh** (accept new pack). Refresh replaces pack content; **user notes / marks / attempt history stay**.
4. Optional: keep prior pack revision for a short rollback window (nice-to-have, not V1 required).
5. **Safety / legal / rights** exceptions may force a regen with clear notice — rare, labeled differently from quality refresh.

## Ops

- Dashboard: % of packs on version N vs current; backlog of “update offered / accepted.”
- Regenerating the whole catalog is a cost decision — batch by title popularity or only on accept.

## Product copy cue

Never imply the companion “changed overnight.” Updates are **opt-in quality refreshes**, same way Audible doesn’t rewrite your library without asking.
