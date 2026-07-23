# Modular repo layout — human-readable site modules

**Date:** 2026-07-22  
**Status:** lean / proposal (P42)  
**Why:** Lanes already chunk work for agents. File layout should mirror that so a **human** can open the tree and understand how the site is built without reading chat history.

## Principle

- **Lanes** (www `.cursor/lanes.md`) = work streams / ownership.
- **Folders** = durable modules a person can browse.
- Prefer “open one folder → see how this job works” over scattered helpers.

## Backend — AI / packs (hard lean)

| Folder (sketch — www owns paths) | Holds | Does **not** hold |
|----------------------------------|-------|-------------------|
| **AI / LLM module** | Code the pipeline runs: prompts, routers, job handlers, validators, spoilers, model clients; **plus a guide** (how loops run, how packs are assembled, task map) | Generated pack artifacts |
| **Packs / artifacts** | Versioned companion outputs (chapter packs, quiz banks, cast, audio, images, metadata) — object storage and/or a clear on-disk/layout convention | Prompt/router source of truth |

Brian lean: at any point, open the AI/LLM folder and see **how the system is operating** — the files it runs **and** a short guide to the loops. Packs live elsewhere so ops/browse of content ≠ reading the engine.

Aligns with lane `ai-module` (+ `pack-versions` for version pin/refresh). Bootstrap Codex port lands **inside** the AI module as `pipeline=codex_bootstrap_v0` (or similar), not as a second scattered tree.

## App / site modules (lean)

Map product surfaces to folders that match adopted lanes where practical, e.g.:

| Concern | Lane (www) | Layout intent |
|---------|------------|---------------|
| Auth / sessions | `security` | Auth module + clear boundaries |
| Account prefs / persistence | `user-state` | Account SoT helpers colocated |
| Library shelf | `library` | Library UI + data access |
| Overview + companion frame | `book-companion-ia` | Book page + frame |
| Chat FAB | `companion-chat` | Chat surface + API client |
| Notes | `notes` | Notes UI + API |
| Cast / quizzes | `recall` | Recall surfaces |
| Unlock / credits | `user-control` | Entitlements UX |
| Logged-out marketing | `public-seo` | Public pages |
| Feedback widget (alpha/beta) | `alpha-feedback` (proposed) | Global chrome + intake API |

Www chooses exact `app/` / `worker/` paths when planning — this doc is the **intent**, not a path lock.

## Habit

- New feature → name the **module folder** in the plan, not only the lane.
- README or `GUIDE.md` in AI module stays current when loops/prompts change.
- Do **not** dump generated packs into the AI source folder.

## Plan timing

**No plan yet** — capture only. File www plan when Brian asks (still pre–alpha Build).
