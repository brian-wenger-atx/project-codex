# Dual Cursor accounts — Work / Personal / Ventures

## Tool (locked)

**Userdata Switcher** `1.4.1` — separate `--user-data-dir` per seat.  
**Launch Model A:** pin **Cursor.app** only → status bar / **`Cmd+Shift+U`** → pick seat.

**Retired for daily dual-seat:** upstream Account Switcher and homelab Cursor Seat Swap (shared Application Support session — last clean sign-in wins).

## Seats

| Userdata | Login | Role |
|----------|-------|------|
| **Work** | `@idexx.com` | Homelab for now; free later; deprecate before Ultra renewal |
| **Personal** | personal Gmail | Homelab daily driver — **later** (Pro before Ultra renewal) |
| **Ventures** | `brian@dockingbay.cc` | Project Codex / this tree — paid seat deferred until needed |

## Workspaces

| Seat | Open |
|------|------|
| Work / Personal | `homelab-personal.code-workspace` (hub + dockingbay) |
| Ventures | **`/mnt/DataStore/Ventures` root** first (shared pack + both silos); silo when scoping |

Do **not** open all of `/mnt/DataStore` as Ventures — collapses write-scope.

## Shared vs isolated

| Concern | Shared | Isolated |
|---------|--------|----------|
| Brian facts / protocol | `cursor-shared/` symlinks + pack | — |
| Product brain | `codex-business/docs/` vault | — |
| Chat history | Digests in vault | Per userdata Agents history |
| Write trees | — | Ventures vs hub/www |
| Secrets | Venture stubs under `secrets/` | Homelab secrets stay on Work |

## Honest limit

Userdata Switcher isolates login/session. Write isolation still needs workspace root + rules (v1 rules-only; shell hook later).

## Full Mac guide

Hub copy: `/mnt/DataStore/home/agent/docs/ventures/project-codex-email-cursor-setup.md`  
Local protocol copy: [protocol/project-codex-email-cursor-setup.md](protocol/project-codex-email-cursor-setup.md)
