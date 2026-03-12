"""
setup-images.py — Staples & Statements image converter
======================================================

DROP-IN WORKFLOW:
  1. Drop your JPG or PNG into the correct public/images/ subfolder
     using the exact filename the site expects (e.g. the-protector-1.jpg)
  2. Run:  python scripts/setup-images.py
  3. Done — converted to WebP (quality 88), source deleted.

That's it. No scaffolding, no placeholders, no risk of overwriting
existing images. Just a recursive JPG/PNG → WebP converter.

Usage:
  python scripts/setup-images.py              # convert all found JPG/PNG
  python scripts/setup-images.py --dry-run    # preview without writing
"""

import sys
from pathlib import Path
from PIL import Image

DRY_RUN  = '--dry-run' in sys.argv
PUBLIC   = Path(__file__).parent.parent / 'public' / 'images'
WEBP_Q   = 88


def convert():
    print('\n  Scanning public/images/ for JPG/PNG files...\n')
    converted = 0

    sources = sorted(list(PUBLIC.rglob('*.jpg')) + list(PUBLIC.rglob('*.jpeg')) + list(PUBLIC.rglob('*.png')))

    if not sources:
        print('  Nothing to convert — no JPG/PNG files found.')
        return

    for src in sources:
        webp = src.with_suffix('.webp')

        if DRY_RUN:
            kb = src.stat().st_size // 1024
            print(f'  [dry] {src.relative_to(PUBLIC)}  ({kb}KB)')
            converted += 1
            continue

        try:
            img = Image.open(str(src))
            img.save(str(webp), 'WebP', quality=WEBP_Q)
            old_kb  = src.stat().st_size // 1024
            new_kb  = webp.stat().st_size // 1024
            saving  = int((1 - new_kb / max(old_kb, 1)) * 100)
            print(f'  OK   {str(src.relative_to(PUBLIC)):55s}  {old_kb:>5}KB -> {new_kb:>4}KB  (-{saving}%)')
            src.unlink()
            converted += 1
        except Exception as e:
            print(f'  ERR  {src.relative_to(PUBLIC)}: {e}')

    print(f'\n  {converted} file(s) converted.')


if __name__ == '__main__':
    print('Staples & Statements — Image Converter')
    if DRY_RUN:
        print('DRY RUN — no files will be written.')
    convert()
    print()
