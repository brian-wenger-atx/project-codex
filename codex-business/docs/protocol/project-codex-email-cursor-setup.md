# Pre-Build: brian@dockingbay.cc + Work Cursor account

**For:** Brian (laptop / Cloudflare dashboard)  
**When:** Before `Build` on Project Codex env plan  
**Related plan:** [.cursor/plans/project_codex_dev_env_a7c3e91f.plan.md](../../.cursor/plans/project_codex_dev_env_a7c3e91f.plan.md)

**Hard rule:** Cursor **cannot** change an account’s email later. Create the Work seat with **`brian@dockingbay.cc`** from day one.

---

## Part A — Get mail at brian@dockingbay.cc

Use **Cloudflare Email Routing** (free forward into your existing inbox). Domain `dockingbay.cc` is already on Cloudflare DNS. As of 2026-07-19 there were **no MX records** yet — enabling routing will add them.

### A1. Enable Email Routing on the zone

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) → select zone **`dockingbay.cc`**.
2. Go to **Email** → **Email Routing**  
   (UI may also show under **Compute** → **Email Service** → **Email Routing**).
3. Choose **Get started** / **Onboard domain** / **Enable Email Routing**.
4. Review DNS Cloudflare will add (typically **MX** + **TXT** for SPF/DKIM). Confirm / Done.
5. Wait a few minutes (rarely up to a few hours) for DNS. Optional check from a terminal:
   ```bash
   dig +short MX dockingbay.cc @1.1.1.1
   ```
   You should see Cloudflare mail exchangers (not empty).

### A2. Add a destination address (where mail lands)

1. Email Routing → **Destination addresses**.
2. Add your **personal inbox** (e.g. Gmail) — the one you can open on your phone.
3. Open the verification email Cloudflare sends → **Verify**.

### A3. Create the custom address

1. Email Routing → **Routing rules** → **Create address** / **Create routing rule**.
2. Custom address: **`brian`** @ **`dockingbay.cc`** → full address **`brian@dockingbay.cc`**.
3. Action: **Send to an email** → pick the verified destination from A2.
4. Save. Leave the rule **Enabled**.

### A4. Test receive

1. From a **different** account (not the destination Gmail), send a short test to **`brian@dockingbay.cc`**.
2. Confirm it appears in the destination inbox (check spam).
3. You’re done for Cursor OTP / signup mail.

**Gotcha (confirmed 2026-07-19):** Do **not** test by sending from the same Google account that receives the forward. Gmail → `brian@dockingbay.cc` → same Gmail often shows only in **Sent**, with no Inbox copy and no bounce (loop suppression). Use iCloud / Outlook / another person.

**What this does *not* give you yet:** sending *as* `brian@dockingbay.cc` from Gmail (needs “Send mail as” + SMTP, or Google Workspace later). Receiving is enough to buy Cursor.

---

## Part B — Create the Work Cursor account

Do this **only after** A4 works (so OTP can arrive).

1. Open a **private / incognito** window (or sign out of personal Cursor in the browser).
2. Go to [cursor.com](https://cursor.com/) → Sign up / Sign in.
3. Use email **`brian@dockingbay.cc`** (OTP will forward to your destination inbox).
4. Complete signup.
5. **Paid plan:** optional until you need it — account-only is fine for dual-login + vault work (Brian 2026-07-19). When you buy, buy **on this account** (business funds).
6. Do **not** buy the Work license on your personal Gmail and plan to rename it — that path does not exist.

**Status 2026-07-19:** Ventures account on `brian@dockingbay.cc` **exists**; paid seat **deferred** until needed.

---

## Part C — Dual Cursor seats (Work ↔ Ventures)

**Goal:** One Mac Cursor app; **Work** and **Ventures** each with a valid login (can run in parallel).  
Ventures = **`brian@dockingbay.cc`**. Work today may still be **`brian-wenger@idexx.com`** (Ultra) until employer email is retired.

**Canonical tool (Brian 2026-07-20):** [**Userdata Switcher**](https://github.com/domoarigatomrburato/userdata-switcher) `domoarigatomrburato.userdata-switcher` **1.4.1** — separate `--user-data-dir` per seat (no token / Cookie copying). Mirror VSIX: [`tools/userdata-switcher/domoarigatomrburato.userdata-switcher-1.4.1.vsix`](../../tools/userdata-switcher/domoarigatomrburato.userdata-switcher-1.4.1.vsix).

**Retired:** homelab **Cursor Seat Swap** (`dockingbay.cursor-seat-swap`) and upstream **Account Switcher** — both share one Application Support session; only the last clean sign-in stays healthy. Keep Seat Swap sources under `tools/cursor-seat-swap/` for history only; do **not** use for daily dual-seat.

### Why token swap failed (Brian 2026-07-19/20)

| Attempt | Symptom |
|---------|---------|
| Upstream Account Switcher | Only last-added seat “worked” |
| Seat Swap **0.2** | Settings logged-in, Agent auth error (Cookies) |
| Seat Swap **0.3.x** | Label/Keychain fights; Ventures Profile **“We couldn't verify your session”**; Work (last sign-in) still OK |

Shared `state.vscdb` + Keychain = one live session. Isolating userdata dirs is the supported-shape fix.

### C1. Install Userdata Switcher (Mac, local Cursor window)

1. **Uninstall** Seat Swap and any **Cursor Account Switcher** (status-bar noise / conflict).
2. Stay on **Work** if Agent chat is healthy (default userdata = current install).
3. Install **Userdata Switcher**:
   - Extensions → search **Userdata Switcher** → Install, **or** (if Install no-ops, same as other Cursor marketplace gaps):
   ```bash
   curl -fsSL -o ~/Downloads/domoarigatomrburato.userdata-switcher-1.4.1.vsix \
     "https://open-vsx.org/api/domoarigatomrburato/userdata-switcher/1.4.1/file/domoarigatomrburato.userdata-switcher-1.4.1.vsix"
   # or from NAS:
   # scp agent@192.168.1.200:/mnt/DataStore/home/agent/tools/userdata-switcher/domoarigatomrburato.userdata-switcher-1.4.1.vsix ~/Downloads/
   ```
   Then **Extensions: Install from VSIX…** → that file → reload.
4. Confirm status bar shows something like **`Work (default)`** (or your current label) — click it, or `Cmd+Shift+U`.

### C2. Create the Ventures userdata

1. Status bar / `Cmd+Shift+U` → **Create new userdata...**
2. Name: **`Ventures`**
3. Prefer **Start from current settings** (copies theme/keybindings/snippets once; account still separate).
4. New window opens → **Sign in** as **`brian@dockingbay.cc`** until Settings → Account **and** Agent chat work.
5. Leave the original window as **Work** (`brian-wenger@idexx.com`). Do **not** sign Work out unless you intend to.

### C3. End-state seats (Brian 2026-07-20)

| Userdata name | Cursor login | Plan | Role |
|---------------|--------------|------|------|
| **Work** | `@idexx.com` | Free (after migration) | Temporary / employer — deprecate before Ultra renewal (~14 days from 2026-07-20) |
| **Personal** | personal `@gmail.com` | Pro (Ultra→here) | Homelab + Docking Bay daily driver |
| **Ventures** | `brian@dockingbay.cc` | Pro when needed | Project Codex / ventures only |

**Who does what**

| Phase | Who | What |
|-------|-----|------|
| **Pre-Build (Mac)** | Brian | Seats, history placement, User Rules, workspace — **C5** |
| **Build (NAS)** | Agent | `/mnt/DataStore/Ventures` tree only — [project_codex_dev_env](../../.cursor/plans/project_codex_dev_env_a7c3e91f.plan.md) |
| **Post-Build (Mac)** | Brian | Point Ventures at new tree, smoke both seats — **C6** |

Rename / User Rules / Gmail **Personal** are **never** NAS Build.

### C4. Same process for every seat + Dock launch (Brian 2026-07-20)

Treat **Work / Personal / Ventures** the same: each is a Userdata Switcher seat (account + Agents history + workspace). Do **not** special-case “default = history, blank Work = empty.”

**Why a Ventures Dock icon dies:** pinning a *secondary Cursor window* to the Dock is not a real app — macOS often leaves a dead icon. Managed seats live under  
`~/Library/Application Support/udsw/cursor/u/<id>/`  
(default Cursor is still `~/Library/Application Support/Cursor`). Pick **one** launch model for all seats:

| Model | How you open a seat | Best when |
|-------|---------------------|-----------|
| **A — One Dock Cursor (locked Brian 2026-07-20)** | Pin **Cursor.app** only → status bar or **`Cmd+Shift+U`** → pick Work / Personal / Ventures | Fewest moving parts; same 2-step flow forever |
| **B — One Dock app per seat** *(not chosen)* | Three tiny apps in `~/Applications/` each run Cursor with that seat’s `--user-data-dir` → pin all three | Want a Dock click per seat with no menu |

**Daily (Model A):** open Cursor → `Cmd+Shift+U` → seat. Work + Ventures seats **set up** (Brian 2026-07-20). Remove any dead secondary Dock pins. Optional: leave seats’ windows open; Switcher shows `running` / `idle`.

**Model B (per-seat Dock) — after seats exist:**

1. In any Cursor: Manage userdatas → **Reveal…** on Work (and later Personal / Ventures). Note the folder path (under `…/udsw/cursor/u/…` for managed seats).
2. Automator → New Application → Run Shell Script:

```bash
open -na Cursor --args --user-data-dir="$HOME/Library/Application Support/udsw/cursor/u/VENTURES_ID"
```

Replace `VENTURES_ID` with the revealed folder name (e.g. `ventures`). Save as `~/Applications/Cursor Ventures.app`. Repeat for Work / Personal. Drag each to the Dock. (Shared extensions: Userdata Switcher already uses `~/.cursor/extensions` when launching from the extension; Dock apps may need `--extensions-dir "$HOME/.cursor/extensions"` added to the same `--args` list.)

**Agents history:** still per seat. A newly created Work starts empty. To put *this* planning/history seat on equal footing with the others either: (1) keep this window as the **default** seat and rename its label to **Planning** or **Work**, and use Model A/B the same as managed seats, or (2) accept a one-time folder copy into a managed Work (Reveal both → quit all Cursor → copy — easy to get wrong). There is no automatic “sync history into blank Work.”

### C5. Pre-Build — Mac (before saying Build)

**Status:** Pre-Build Mac **closed** — all C5 items done (Brian 2026-07-20). Not a Build gate.

- [x] Userdata Switcher 1.4.1; Work + Ventures Agent-OK
- [x] Launch **Model A** — one Dock Cursor + `Cmd+Shift+U` (Brian 2026-07-20)
- [x] Seats labeled / usable: **Work** + **Ventures** (Personal later, before Ultra renewal)
- [x] Remove dead Ventures (or other) secondary Dock pins — only **Cursor.app** (Brian 2026-07-20)
- [x] Homelab **Work** seat: open `homelab-personal.code-workspace` (hub + dockingbay) (Brian 2026-07-20)
- [x] Ventures: User Rules (consult + git + File Brian facts) + `cursor-shared/` visible (Brian 2026-07-20)
- [x] HC `ventures-cursor-shared` Check + env + ping OK (agent 2026-07-20)
- [x] Smoke: `Cmd+Shift+U` opens the other seat cleanly (Brian 2026-07-20)

#### C5b. User Rules vs Project Rules (Brian 2026-07-20)

Cursor Settings → Rules mixes two different things:

| Kind | Where it lives | Per seat? | What you saw |
|------|----------------|-----------|--------------|
| **Project Rules** | Disk: `/mnt/DataStore/.cursor/rules/*.mdc` (and hub/www scoped rules) | **No** — follow the **open folder/workspace** | `nas-worker-voice`, `hub-workflow`, `auto-git-push`, `dockingbay-project`, … |
| **User Rules** | Cursor account / userdata (Settings prose rules) | **Yes** — per Work / Ventures / Personal | “Committing changes with git”, “File Brian…”, “deep review / consult…” |

Opening `homelab-personal.code-workspace` on Work **should** show tons of Project Rules — that’s normal. Ventures should **not** show NAS voice if the window only has `/mnt/DataStore/Ventures` open (no hub/www roots). If Ventures still lists `nas-worker-voice`, you still have hub/DataStore in that window’s workspace — close folder and open Ventures alone.

**User Rules on both Work and Ventures (all three):**

1. Committing changes with git  
2. Full review / consult (deep review)  
3. **File Brian environment facts** — required on both seats (Brian 2026-07-20)

**Where facts are stored (one place, both seats):** hub canon under `/mnt/DataStore/home/agent/` — **not** a copy per seat.

| Seat | How agents reach the same files |
|------|----------------------------------|
| **Work** | Open hub / `homelab-personal` → edit `AGENTS.md`, `docs/server/*`, `docs/changelog.md` |
| **Ventures** | Open `/mnt/DataStore/Ventures` → edit **`cursor-shared/`** symlinks (`AGENTS.md`, `server.md`, `changelog.md`, …) — same inodes as hub |

Symlinks live at `/mnt/DataStore/Ventures/cursor-shared/` (pre-Build).

**Autofix (no Brian):** agents run ensure when links look wrong; hourly cron repairs and Healthchecks watches:

```bash
/mnt/DataStore/home/agent/scripts/ventures-cursor-shared-ensure.sh          # repair + verify
/mnt/DataStore/home/agent/scripts/ventures-cursor-shared-ensure.sh --check  # verify only
```

HC slug **`ventures-cursor-shared`** (period 1h / grace 2h) — Check + env wired and green (2026-07-20). Cron: `ventures-cursor-shared-cron.sh` at `:18`. Plan: [project_codex_dev_env](../../.cursor/plans/project_codex_dev_env_a7c3e91f.plan.md).

Do **not** recreate Project Rules by hand.

### C6. Post-Build — Mac (after NAS Build)

- [ ] Ventures → open **`/mnt/DataStore/Ventures` root** first (shared pack + both silos) — locked Brian 2026-07-20; silo-only later when scoping
- [ ] Work still on `homelab-personal.code-workspace`; hub pins OK
- [ ] Agent ping both seats
- [ ] (Later) **Personal** + Gmail Pro before Ultra renewal

### C7. Folders

**Do not** open all of `/mnt/DataStore` alone.

| Seat | Open |
|------|------|
| Work / Personal | [`homelab-personal.code-workspace`](../../examples/homelab-personal.code-workspace) |
| Ventures | **`/mnt/DataStore/Ventures` root** first after Build (shared pack + both silos); silo when scoping |

### C8. Daily habit

1. Homelab / planning → Work (then Personal) + `homelab-personal`.
2. Ventures → Ventures folder only.
3. Settings email must match seat.
4. Bad seat: repair in that window only; never trash the only healthy default.

---

## Done checklist

- [ ] MX present for `dockingbay.cc`
- [ ] Destination verified
- [ ] Test email to `brian@dockingbay.cc` received (from non-Gmail)
- [x] Ventures Cursor account created (2026-07-19)
- [ ] Paid Ventures seat — deferred until needed
- [x] **Userdata Switcher 1.4.1** — Work + Ventures Agent-OK; launch Model A (Brian 2026-07-20)
- [x] Ventures User Rules + `cursor-shared/` visible (Brian 2026-07-20)
- [x] **Pre-Build C5** hygiene complete — Dock cleanup, `homelab-personal` on Work, `Cmd+Shift+U` smoke (Brian 2026-07-20); Pre-Build Mac closed
- [x] **Build** project_codex_dev_env (2026-07-20) — tree + vault + protocol pack live
- [ ] **Post-Build C6** (first open = Ventures root)
- [ ] **Personal** (Gmail Pro) before Ultra renewal


---

## Later (not this guide)

- Product title → brand aliases (`founder@`, etc.)
- Google Workspace if you need real send-as / calendar
- Shell write-scope hook (documented need; not v1)
- Employer Cursor login → personal account harmonization
