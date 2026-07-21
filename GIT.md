# Git (Project Codex)

## Remote (locked 2026-07-20)

| | |
|--|--|
| **GitHub** | https://github.com/brian-wenger-atx/project-codex |
| **Clone URL** | `https://github.com/brian-wenger-atx/project-codex.git` |
| **Local root** | `/mnt/DataStore/Ventures/project-codex` (**monorepo** — `codex-business/` + `codex-www/`) |
| **Default branch** | `main` |

Do **not** invent a www-only or business-only remote unless Brian splits repos later.

## Habits

```bash
cd /mnt/DataStore/Ventures/project-codex
git status -sb
# Prefer plain git until a shared venture commit helper lands in cursor-shared/
```

- Root Ventures [`.gitignore`](../.gitignore) ignores `**/secrets/*.env`.
- Never commit secrets; never force-push `main`; agents must not set `user.name` / `user.email`.
- Www product code lives under `codex-www/`; strategy under `codex-business/` — same remote.

## First setup (empty remote)

```bash
cd /mnt/DataStore/Ventures/project-codex
git init
git remote add origin https://github.com/brian-wenger-atx/project-codex.git
git add -A
git commit -m "Initial commit: Project Codex monorepo (business + www)."
git branch -M main
git push -u origin main
```
