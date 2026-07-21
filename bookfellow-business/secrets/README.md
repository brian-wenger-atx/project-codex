# Secrets (stubs only)

Never commit real keys. Values stay local / env — not in git.

| Stub | Purpose |
|------|---------|
| [`gemini.env.example`](gemini.env.example) | Paid Gemini (business billing project) for Project Codex generation |

## Rules

- **Paid billed API required** for book text — free unpaid Gemini forbidden (trains on prompts).
- Homelab `secrets/edgebook.env` is **not** the venture key store — keep venture billing separate.
- Copy example → `gemini.env` (gitignored) when Brian provisions the key.
