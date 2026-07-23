#!/usr/bin/env python3
"""Www lanes helper — Pending mirror retired 2026-07-21.

`lanes.md` is a www-curated adopted + inferred map. Strategy Lane proposals
stay in www-feed.md; they are not auto-mirrored into lanes.md.

Usage:
  python3 scripts/www-lanes-sync.py           # no-op advisory (exit 0)
  python3 scripts/www-lanes-sync.py --check   # exit 0 if lanes.md exists
  python3 scripts/www-lanes-sync.py --json    # machine-readable result on stdout
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

WWW_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_LANES = WWW_ROOT / ".cursor" / "lanes.md"
RETIRED_MSG = (
    "Pending mirror retired — lanes.md is www-curated (Adopted + Inferred sequence); "
    "feed Lane proposals stay in www-feed.md"
)


def sync(*, lanes_path: Path, check_only: bool) -> dict:
    if not lanes_path.is_file():
        return {
            "ok": False,
            "changed": False,
            "error": f"lanes not found: {lanes_path}",
            "rows": 0,
            "retired": True,
        }
    # Retired: never rewrite lanes.md from feed.
    _ = check_only
    return {
        "ok": True,
        "changed": False,
        "error": None,
        "rows": 0,
        "retired": True,
        "message": RETIRED_MSG,
    }


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument(
        "--feed",
        type=Path,
        default=None,
        help="Ignored (Pending mirror retired)",
    )
    ap.add_argument(
        "--lanes",
        type=Path,
        default=DEFAULT_LANES,
        help="Path to bookfellow-www .cursor/lanes.md",
    )
    ap.add_argument(
        "--check",
        action="store_true",
        help="Exit 0 if lanes.md exists; do not write",
    )
    ap.add_argument(
        "--json",
        action="store_true",
        help="Print result JSON on stdout",
    )
    args = ap.parse_args()

    result = sync(lanes_path=args.lanes, check_only=args.check)
    if args.json:
        print(json.dumps(result, sort_keys=True))
    elif result.get("error") and not result.get("ok"):
        print(result["error"], file=sys.stderr)
    else:
        print(result.get("message") or RETIRED_MSG)

    return 0 if result["ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
