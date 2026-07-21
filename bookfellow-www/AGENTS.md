# bookfellow-www — agent scope

**Job:** Greenfield product site / app (later Builds).

## May write

This folder only (`bookfellow-www/`), plus the **`bookfellow`** container carve-out:

- Hub compose/docs/secrets for slug `bookfellow` only — see [`.cursor/rules/bookfellow-www-scope.mdc`](.cursor/rules/bookfellow-www-scope.mdc) and [`docs/runbooks/containers.md`](docs/runbooks/containers.md)
- **NAS ≠ production** (cloud is final home)
- **Placeholder:** after Builds that change [`sites/placeholder/`](sites/placeholder/), **Wrangler Pages deploy same turn** (Brian standing 2026-07-21) — see [`sites/placeholder/README.md`](sites/placeholder/README.md)

## Must not

- Invent product UI or a different stack than [`docs/stack.md`](docs/stack.md) outside an explicit Build
- Edit `bookfellow-business` vault from a www-only workspace (switch silo)
- Homelab NAS ops, Media, compose for any app **other than** `bookfellow`
- Open all of `/mnt/DataStore`
- Invent strategy canon into www docs

## Shared protocol

`.cursor/rules/shared` → `cursor-shared/rules`  
`.cursor/skills` → `cursor-shared/skills`

## Pins

- [`.cursor/build-order.md`](.cursor/build-order.md) — product sequence (update same-turn)
- [`.cursor/lanes.md`](.cursor/lanes.md) — adopted lanes + www-curated inferred sequence (update same-turn)
- [`.cursor/backlog.md`](.cursor/backlog.md) — www deferred / next requirements (update same-turn when Brian adds)

**Feed → lanes:** Read `www-feed.md` Lane proposals before planning; consolidate into `lanes.md` (**Adopted** / **Inferred sequence** / **Later / park**). Do not mirror feed rows into a Pending table (`scripts/www-lanes-sync.py` is a retired no-op).

When adopting a lane proposed in the strategy feed → note for a business session to mark feed status `adopted in www` (do not edit business from www-only).

## Reverse feed (www → business)

- Own file: [`docs/business-feed.md`](docs/business-feed.md) — business reads only
- **Same turn** on ship / stumble / learning / ask-back that passes the content filter (user/commercial ships; cost/rights/timeline/feasibility stumbles; money/positioning learnings; asks-back). Skip routine eng noise.
- Append the right section + bump Meta + Changelog; refresh `.cursor/build-order.md` / `lanes.md` when those signals affect pins.
- Schema: `/mnt/DataStore/Ventures/bookfellow/bookfellow-business/docs/protocol/dual-feed.md` (read-only from www)

## Resume

1. `/mnt/DataStore/Ventures/bookfellow/bookfellow-business/docs/www-feed.md` — before product planning (Ready = shortcut). Also scan `.cursor/backlog.md` + `.cursor/lanes.md` + remnant registry paths; **promote-into-plan** on fit (intake fold — max 5). Never invent Ready on the business feed.
2. `.cursor/build-order.md` + `.cursor/lanes.md` + `.cursor/backlog.md`
3. [`docs/business-feed.md`](docs/business-feed.md) — ensure outbound rows are current after feed-worthy work
4. `docs/stack.md` (locked) when scaffolding — hard rules in `.cursor/rules/stack-hard-rules.mdc`
5. `docs/git.md` — monorepo remote https://github.com/brian-wenger-atx/bookfellow
