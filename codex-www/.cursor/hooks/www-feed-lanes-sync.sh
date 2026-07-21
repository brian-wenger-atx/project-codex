#!/usr/bin/env bash
# Auto-sync lanes.md Pending when strategy www-feed.md is read (or shelled).
#
# Tier C: thin script + hook. Fails open — never block reading the feed if
# sync crashes; agent_message tells the agent when Pending was rewritten.
set -u

WWW_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SYNC_PY="$WWW_ROOT/scripts/www-lanes-sync.py"
FEED_NEEDLE="www-feed.md"
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

command -v python3 >/dev/null 2>&1 || allow

HIT="$(printf '%s' "$RAW" | FEED_NEEDLE="$FEED_NEEDLE" python3 -c '
import json, os, sys
needle = os.environ["FEED_NEEDLE"]
raw = sys.stdin.read()
try:
    data = json.loads(raw) if raw.strip() else {}
except Exception:
    data = {}
candidates = []
for key in ("file_path", "path", "command", "tool_name", "toolName"):
    v = data.get(key)
    if isinstance(v, str):
        candidates.append(v)
tool_input = data.get("tool_input") or data.get("input") or {}
if isinstance(tool_input, dict):
    for key in ("path", "file_path", "target_file", "command"):
        v = tool_input.get(key)
        if isinstance(v, str):
            candidates.append(v)
elif isinstance(tool_input, str):
    candidates.append(tool_input)
blob = "\n".join(candidates)
print("1" if (needle in blob or needle in raw) else "0")
')"

[ "$HIT" = "1" ] || allow

if [ ! -f "$SYNC_PY" ]; then
  allow "www-lanes-sync.py missing — Pending not synced"
fi

RESULT="$(python3 "$SYNC_PY" --json 2>/dev/null)" || allow "www-lanes-sync failed — Pending may be stale; run: python3 scripts/www-lanes-sync.py"

MSG="$(printf '%s' "$RESULT" | python3 -c '
import json, sys
try:
    r = json.loads(sys.stdin.read())
except Exception:
    print("www-lanes-sync returned invalid JSON")
    raise SystemExit(0)
if r.get("error") and not r.get("ok"):
    print("www-lanes-sync error: " + str(r.get("error")))
elif r.get("changed"):
    n = r.get("rows", 0)
    print(
        "Synced lanes.md Pending proposals from www-feed (%s row(s)). "
        "Re-read .cursor/lanes.md if your buffer is stale." % n
    )
else:
    print("")
')"

if [ -n "$MSG" ]; then
  allow "$MSG"
fi
allow
