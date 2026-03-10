"""
setup-images.py — Staples & Statements image pipeline

Does three things in one pass:
  1. SCAFFOLD — Creates WebP placeholder files for every image slot the site
     expects, so the dev server doesn't log 404s and hot-reload works cleanly.
     Skips files that already exist (safe to re-run at any time).

  2. CONVERT — Converts every existing .jpg in public/ to .webp at quality 88,
     preserving folder structure. Skips files that already have a .webp twin.

  3. MANIFEST — Prints a summary table of everything created/converted so you
     know exactly which files need to be replaced with real assets.

Usage:
  python scripts/setup-images.py            # scaffold + convert
  python scripts/setup-images.py --dry-run  # preview without writing
  python scripts/setup-images.py --convert-only
  python scripts/setup-images.py --scaffold-only

After running: update HTML references with scripts/update-refs.py (also generated).
"""

import os
import sys
import shutil
from pathlib import Path
from PIL import Image

# ── Config ─────────────────────────────────────────────────────────────────

DRY_RUN       = '--dry-run'       in sys.argv
CONVERT_ONLY  = '--convert-only'  in sys.argv
SCAFFOLD_ONLY = '--scaffold-only' in sys.argv

REPO_ROOT = Path(__file__).parent.parent
PUBLIC    = REPO_ROOT / 'public' / 'images'
WEBP_Q    = 88   # WebP quality for all conversions

# Brand placeholder colors — warm charcoal (#1a1613) to match site palette
PH_BG   = (26,  22,  19)   # --color-primary
PH_LINE = (46,  40,  36)   # slightly lighter for subtle grid lines

# ── Archetype slugs ────────────────────────────────────────────────────────

FEMININE_ARCHETYPES = [
    'the-angelic-one',
    'the-creator',
    'the-empress',
    'the-enchantress',
    'the-muse',
    'the-siren',
    'the-warrior',
]

MASCULINE_ARCHETYPES = [
    'the-architect',
    'the-artisan',
    'the-classic',
    'the-explorer',
    'the-maverick',
]

# ── Placeholder factory ────────────────────────────────────────────────────

def make_placeholder(w: int, h: int) -> Image.Image:
    """Solid brand-dark rectangle with subtle 1px grid for visual orientation."""
    img = Image.new('RGB', (w, h), PH_BG)
    # Draw a very subtle cross-hair at centre so it's obvious it's a placeholder
    from PIL import ImageDraw
    d = ImageDraw.Draw(img)
    cx, cy = w // 2, h // 2
    d.line([(cx, cy - 20), (cx, cy + 20)], fill=PH_LINE, width=1)
    d.line([(cx - 20, cy), (cx + 20, cy)], fill=PH_LINE, width=1)
    d.rectangle([cx - 40, cy - 40, cx + 40, cy + 40], outline=PH_LINE, width=1)
    return img

def write_placeholder(path: Path, w: int, h: int):
    if path.exists():
        return False   # already present — skip
    if DRY_RUN:
        print(f'  [dry] would create {path.relative_to(REPO_ROOT)}')
        return True
    path.parent.mkdir(parents=True, exist_ok=True)
    make_placeholder(w, h).save(str(path), 'WebP', quality=WEBP_Q)
    print(f'  ✦ created  {path.relative_to(REPO_ROOT)}')
    return True

# ── Part 1: SCAFFOLD ───────────────────────────────────────────────────────

def scaffold():
    print('\n── SCAFFOLD: creating placeholder files ──────────────────────────')
    created = 0

    # ── Archetype portraits (portrait 2:3)
    for slug in FEMININE_ARCHETYPES + MASCULINE_ARCHETYPES:
        for n in [1, 2, 3]:
            p = PUBLIC / 'archetypes' / f'{slug}-{n}.webp'
            if write_placeholder(p, 800, 1200): created += 1

    # ── Ensemble hero images — masculine (wide 16:9)
    for n in [1, 2, 3]:
        p = PUBLIC / 'archetypes' / f'ensemble-masculine-{n}.webp'
        if write_placeholder(p, 1920, 1080): created += 1

    # ── Quiz video posters (portrait 9:16 — vertical reel format)
    for name in ['quiz-poster-feminine', 'quiz-poster-masculine']:
        p = PUBLIC / f'{name}.webp'
        if write_placeholder(p, 1080, 1920): created += 1

    # ── Hero mosaic (landscape 4:3, 6 slots)
    for i in range(1, 7):
        p = PUBLIC / f'hero-{i}.webp'
        if write_placeholder(p, 1200, 900): created += 1

    # ── Portfolio grid (square 1:1, 6 slots)
    for i in range(1, 7):
        p = PUBLIC / f'portfolio-{i}.webp'
        if write_placeholder(p, 1080, 1080): created += 1

    # ── Services (landscape 4:3)
    for slug in [
        'body-analysis', 'color-analysis', 'consultation',
        'master-style-moodboard', 'micro-styling', 'photoshoot-styling',
        'sourcing', 'vip', 'wardrobe-revamp',
    ]:
        p = PUBLIC / 'services' / f'{slug}.webp'
        if write_placeholder(p, 1200, 900): created += 1

    # ── Guide covers (portrait 3:4)
    for slug in [
        '7-feminine-archetypes-cover', 'maximalist-cover',
        'mens-edition-cover',          'no-overpacking-cover',
        'single-moms-cover',           'ultimate-style-edit-cover',
    ]:
        p = PUBLIC / 'guides' / f'{slug}.webp'
        if write_placeholder(p, 900, 1200): created += 1

    # ── Testimonial headshots (square 1:1)
    for name in ['gabi', 'janessa', 'maral', 'michael']:
        p = PUBLIC / 'testimonials' / f'{name}.webp'
        if write_placeholder(p, 600, 600): created += 1

    # ── Danielle portraits (portrait 2:3)
    for name in ['danielle-portrait', 'danielle-styling']:
        p = PUBLIC / f'{name}.webp'
        if write_placeholder(p, 800, 1200): created += 1

    # ── OG / social sharing card (1200×630 — Facebook/Twitter standard)
    p = PUBLIC / 'og-default.webp'
    if write_placeholder(p, 1200, 630): created += 1

    # ── Brand folder (SVGs go here when ready — just create the dir)
    brand_dir = PUBLIC / 'brand'
    if not DRY_RUN:
        brand_dir.mkdir(parents=True, exist_ok=True)
        print(f'  ✦ created  public/images/brand/ (ready for SVG logomarks)')

    print(f'\n  → {created} placeholder files created.')

# ── Part 2: CONVERT existing JPEGs ────────────────────────────────────────

def convert_jpgs():
    print('\n── CONVERT: JPG → WebP (quality 88) ─────────────────────────────')
    converted = 0
    skipped   = 0

    for jpg_path in sorted(PUBLIC.rglob('*.jpg')):
        webp_path = jpg_path.with_suffix('.webp')

        if webp_path.exists():
            skipped += 1
            continue

        if DRY_RUN:
            print(f'  [dry] would convert {jpg_path.relative_to(REPO_ROOT)}')
            converted += 1
            continue

        try:
            img = Image.open(jpg_path)
            img.save(str(webp_path), 'WebP', quality=WEBP_Q)
            orig_kb  = jpg_path.stat().st_size  // 1024
            new_kb   = webp_path.stat().st_size // 1024
            saving   = int((1 - new_kb / orig_kb) * 100) if orig_kb else 0
            print(f'  ✦ converted {jpg_path.name}  →  {webp_path.name}  '
                  f'({orig_kb}KB → {new_kb}KB, -{saving}%)')
            converted += 1
        except Exception as e:
            print(f'  ✗ FAILED {jpg_path.name}: {e}')

    print(f'\n  → {converted} files converted, {skipped} already had WebP twin.')

# ── Part 3: MANIFEST of what still needs real images ──────────────────────

def print_manifest():
    print('\n── MANIFEST: placeholders still needing real images ──────────────')

    all_webp = sorted(PUBLIC.rglob('*.webp'))
    placeholder_size_threshold = 50 * 1024  # files < 50KB are likely placeholders

    still_needed = []
    for p in all_webp:
        if p.stat().st_size < placeholder_size_threshold:
            still_needed.append(p.relative_to(PUBLIC))

    if not still_needed:
        print('  All WebP files look real (> 50KB). Nothing pending.')
        return

    print(f'  {len(still_needed)} files look like placeholders (< 50KB):\n')
    for p in still_needed:
        print(f'    {p}')

# ── Main ───────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    print('Staples & Statements — Image Pipeline')
    print(f'Repo: {REPO_ROOT}')
    if DRY_RUN:
        print('DRY RUN — no files will be written.\n')

    if not CONVERT_ONLY:
        scaffold()

    if not SCAFFOLD_ONLY:
        convert_jpgs()

    print_manifest()

    print('\nDone. Next step: run  python scripts/update-refs.py  to switch')
    print('all HTML/Astro .jpg references to .webp site-wide.\n')
