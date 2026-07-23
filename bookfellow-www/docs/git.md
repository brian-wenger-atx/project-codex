# Git (bookfellow-www)

| | |
|--|--|
| **Remote** | https://github.com/brian-wenger-atx/bookfellow-www |
| **Local root** | `/mnt/DataStore/Ventures/bookfellow/bookfellow-www` |
| **Default branch** | `main` |

Sibling strategy vault: [`bookfellow-business`](https://github.com/brian-wenger-atx/bookfellow-business) (separate remote). Parent `/Ventures/bookfellow` is a non-git folder.

Archived monorepo (history only): https://github.com/brian-wenger-atx/bookfellow

```bash
cd /mnt/DataStore/Ventures/bookfellow/bookfellow-www
git status -sb
```

Never commit secrets (`.env.lab` is gitignored).
