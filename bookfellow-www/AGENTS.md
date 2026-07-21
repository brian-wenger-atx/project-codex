# bookfellow-www — agent scope

**Job:** Greenfield product site / app (later Builds).

## May write

This folder only (`codex-www/`, renamed to `bookfellow-www/` at cutover), plus the **`projectcodex`** container carve-out:

- Hub compose/docs/secrets for slug `projectcodex` only — see [`.cursor/rules/codex-www-scope.mdc`](.cursor/rules/codex-www-scope.mdc) and [`docs/runbooks/containers.md`](docs/runbooks/containers.md)
- **NAS ≠ production** (cloud is final home)

## Must not

- Invent product UI or a different stack than [`docs/stack.md`](docs/stack.md) outside an explicit Build
- Edit `codex-business` vault from a www-only workspace (switch silo)
- Homelab NAS ops, Media, compose for any app **other than** `projectcodex`
- Open all of `/mnt/DataStore`
- Invent strategy canon into www docs

## Shared protocol

`.cursor/rules/shared` → `cursor-shared/rules`  
`.cursor/skills` → `cursor-shared/skills`

## Pins

- [`.cursor/build-order.md`](.cursor/build-order.md) — product sequence (update same-turn)
- [`.cursor/lanes.md`](.cursor/lanes.md) — adopted lanes + pending feed proposals (update same-turn)
- [`.cursor/backlog.md`](.cursor/backlog.md) — www deferred / next requirements (update same-turn when Brian adds)

**Feed → pending (automatic):** Cursor hook + `scripts/www-lanes-sync.py` mirror `www-feed.md` **Lane proposals** into `lanes.md` Pending. Hook fires on feed Read/shell; on resume or doubt run `python3 scripts/www-lanes-sync.py` (or `--check`).

When adopting a lane proposed in the strategy feed → note for a business session to mark feed status `adopted in www` (do not edit business from www-only).

## Reverse feed (www → business)

- Own file: [`docs/business-feed.md`](docs/business-feed.md) — business reads only
- **Same turn** on ship / stumble / learning / ask-back that passes the content filter (user/commercial ships; cost/rights/timeline/feasibility stumbles; money/positioning learnings; asks-back). Skip routine eng noise.
- Append the right section + bump Meta + Changelog; refresh `.cursor/build-order.md` / `lanes.md` when those signals affect pins.
- Schema: `/mnt/DataStore/Ventures/project-codex/codex-business/docs/protocol/dual-feed.md` (read-only from www)

## Resume

1. `/mnt/DataStore/Ventures/project-codex/codex-business/docs/www-feed.md` — before product planning or lane changes (hook syncs Pending; `python3 scripts/www-lanes-sync.py --check` if verifying). Treat **Product proposals** + **Ready** as habit-only plan candidates (graduate when Brian asks; no Pending Product proposals mirror table).
2. `.cursor/build-order.md` + `.cursor/lanes.md` + `.cursor/backlog.md`
3. [`docs/business-feed.md`](docs/business-feed.md) — ensure outbound rows are current after feed-worthy work
4. `docs/stack.md` (locked) when scaffolding — hard rules in `.cursor/rules/stack-hard-rules.mdc`
5. `docs/git.md` — monorepo remote https://github.com/brian-wenger-atx/bookfellow
