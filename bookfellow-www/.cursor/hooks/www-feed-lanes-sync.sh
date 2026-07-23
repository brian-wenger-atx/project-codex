#!/usr/bin/env bash
# www-feed touch hook — Pending mirror retired 2026-07-21.
#
# lanes.md is www-curated (Adopted + Inferred sequence). Feed Lane proposals
# stay in www-feed.md. Hook fails open and does not rewrite pins.
set -u

WWW_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
LAST_INPUT="$WWW_ROOT/.cursor/hooks/.www-feed-lanes-sync-last-input.json"

allow() {
  if [ -n "${1:-}" ]; then
    python3 -c 'import json,sys; print(json.dumps({"permission":"allow","agent_message":sys.argv[1]}))' "$1"
  else
    echo '{ "permission": "allow" }'
  fi
  exit 0
}

RAW="$(cat)"
printf '%s' "$RAW" > "$LAST_INPUT" 2>/dev/null || true

allow
