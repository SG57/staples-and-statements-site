"""
update-refs.py — Switch all local .jpg image references to .webp site-wide.

Touches:
  src/**/*.astro    — pages, layouts, components
  src/**/*.ts       — data files (guides.ts etc.)
  src/**/*.md       — content markdown files

Safe patterns:
  - Only replaces /images/...*.jpg patterns (local paths)
  - Never touches external URLs (http://, https://)
  - Never touches non-image .jpg references
  - Prints every substitution so you can review

Usage:
  python scripts/update-refs.py             # apply changes
  python scripts/update-refs.py --dry-run   # preview only
"""

import re
import sys
from pathlib import Path

DRY_RUN  = '--dry-run' in sys.argv
REPO_SRC = Path(__file__).parent.parent / 'src'

# Pattern: local image paths ending in .jpg (not preceded by http/https)
# Matches:  /images/hero-1.jpg   guides/foo.jpg   etc.
# Excludes: https://example.com/photo.jpg
JPG_RE = re.compile(r'(?<!["\']https?://[^\s"\']{0,200})(/images/[^\s"\']+?)\.jpg', re.IGNORECASE)

def process_file(path: Path) -> int:
    """Returns number of substitutions made."""
    original = path.read_text(encoding='utf-8')
    replaced = JPG_RE.sub(r'\1.webp', original)

    if original == replaced:
        return 0

    changes = 0
    for line_no, (old, new) in enumerate(
        zip(original.splitlines(), replaced.splitlines()), start=1
    ):
        if old != new:
            print(f'  {path.relative_to(REPO_SRC.parent)}:{line_no}')
            print(f'    - {old.strip()}')
            print(f'    + {new.strip()}')
            changes += 1

    if not DRY_RUN:
        path.write_text(replaced, encoding='utf-8')

    return changes

if __name__ == '__main__':
    print('Staples & Statements — Reference updater (.jpg → .webp)')
    if DRY_RUN:
        print('DRY RUN — no files will be written.\n')
    else:
        print()

    extensions = ['*.astro', '*.ts', '*.md']
    total_files   = 0
    total_changes = 0

    for ext in extensions:
        for path in sorted(REPO_SRC.rglob(ext)):
            n = process_file(path)
            if n:
                total_files   += 1
                total_changes += n

    if total_changes == 0:
        print('No .jpg references found in source files — already clean.')
    else:
        print(f'\n{"[DRY RUN] Would update" if DRY_RUN else "Updated"} '
              f'{total_changes} reference(s) across {total_files} file(s).')

    if not DRY_RUN and total_changes > 0:
        print('\nNext: run  npm run build  to verify, then commit.')
