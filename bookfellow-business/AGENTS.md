# codex-business — agent scope

**Job:** Strategy, competitive map, monetization, conversation digests, decisions.

## May write

This folder only (`codex-business/`), when it is the workspace root or explicitly in scope from Ventures root admin.

## Must not

- Edit `codex-www` product code from a business-only workspace (switch silo)
- Edit homelab hub / www / Media / compose
- Open all of `/mnt/DataStore`
- Generate product website code here
- Use free/unpaid Gemini for book text (paid API only — see secrets stub)

## Shared protocol

`.cursor/rules/shared` → `cursor-shared/rules`  
`.cursor/skills` → `cursor-shared/skills`

## Resume

1. `.cursor/dashboard/strategy-queue.md` + `.cursor/dashboard/build-order.md`
2. Dual-feed contract: [`docs/protocol/dual-feed.md`](docs/protocol/dual-feed.md)
3. Www outbound (if present): `/mnt/DataStore/Ventures/project-codex/codex-www/docs/business-feed.md` — harvest into `docs/` + [dashboard/product-signals.md](.cursor/dashboard/product-signals.md) when new. Rename Build moves this to `bookfellow/bookfellow-www/docs/business-feed.md`.
4. `docs/conversations/2026-07-19-strategy-companion-model.md` + latest digests under `docs/conversations/`
5. `docs/thesis.md` + `docs/north-star.md` + `docs/ideas/backlog.md`
6. `docs/www-feed.md` — when work may affect product (priorities / Ready / proposals / lane proposals)
7. `docs/dual-account.md`

## Habit — dashboard pins

After meaningful strat / plan / backlog / feed edits: refresh affected `.cursor/dashboard/` sector file(s) + `strategy-queue.md` same turn (`build-order.md` when plans change). Prefer `open_resource` on pins you touched. Dashboards summarize and point — durable drafts live in `docs/` (e.g. `docs/proposal/`). Foundation stays primary until Brian marks ready in `dashboard/proposal.md`.

## Habit — strategy → product

Contract: [docs/protocol/dual-feed.md](docs/protocol/dual-feed.md). When strategy changes affect the product **or** Brian states product ideas in a business chat → update `docs/www-feed.md` **same turn** (Product proposals / Ready / lanes as appropriate). Brian should not have to re-dictate the same ideas in www. Graduate backlog stubs into Ready only when he says so explicitly **or** clearly authorizes proposal pass-through. **Never** write `codex-www/` pins, lanes, or plans from this silo.

## Habit — product → strategy

Contract: [docs/protocol/dual-feed.md](docs/protocol/dual-feed.md). Read www `business-feed.md` on resume. New ships/stumbles/asks → fold into canon + pins same turn (see [dashboard/product-signals.md](.cursor/dashboard/product-signals.md)).
