# Git (Bookfellow)

## Remote (locked 2026-07-21)

| | |
|--|--|
| **GitHub** | https://github.com/brian-wenger-atx/bookfellow |
| **Clone URL** | `https://github.com/brian-wenger-atx/bookfellow.git` |
| **Local root** | `/mnt/DataStore/Ventures/bookfellow` (**monorepo** — `bookfellow-business/` + `bookfellow-www/`) |
| **Default branch** | `main` |
| **Formerly** | `brian-wenger-atx/project-codex` · local path `…/project-codex/{codex-business,codex-www}` |

Do **not** invent a www-only or business-only remote unless Brian splits repos later.

## Habits

```bash
cd /mnt/DataStore/Ventures/bookfellow
git status -sb
# Prefer plain git until a shared venture commit helper lands in cursor-shared/
```

- Root Ventures [`.gitignore`](../.gitignore) ignores `**/secrets/*.env`.
- Never commit secrets; never force-push `main`; agents must not set `user.name` / `user.email`.
- Www product code lives under `bookfellow-www/`; strategy under `bookfellow-business/` — same remote.

## First setup (empty remote)

```bash
cd /mnt/DataStore/Ventures/bookfellow
git init
git remote add origin https://github.com/brian-wenger-atx/bookfellow.git
git add -A
git commit -m "Initial commit: Bookfellow monorepo (business + www)."
git branch -M main
git push -u origin main
```
