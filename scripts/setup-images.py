"""
setup-images.py — Staples & Statements image pipeline
======================================================

DROP-IN WORKFLOW (most common):
  1. Drop your JPG or PNG into the correct public/images/ subfolder
     using the exact filename the site expects (e.g. the-muse-1.jpg)
  2. Run:  python scripts/setup-images.py
  3. Done — the script converts it to WebP, the placeholder is replaced,
     and the original JPG/PNG is deleted.

The script does three things:

  CONVERT  — For every .jpg / .png found anywhere in public/images/,
              convert it to .webp (quality 88) and delete the source.
              Conversion always overwrites any existing .webp at that path
              (this is how placeholders get replaced with real images).

  SCAFFOLD — Create .webp placeholder files for any image slot the site
              expects that does NOT yet have a .webp file. Skips slots
              that already have a real WebP (safe to re-run anytime).

  REPORT   — Print a table showing which slots still have placeholder
              files (< 20KB) so you know what still needs real images.

Usage:
  python scripts/setup-images.py                 # convert + scaffold + report
  python scripts/setup-images.py --convert-only  # only convert dropped files
  python scripts/setup-images.py --scaffold-only # only create missing slots
  python scripts/setup-images.py --report        # only show status table
  python scripts/setup-images.py --dry-run       # preview without writing
"""

import sys
from pathlib import Path
from PIL import Image, ImageDraw

# ── Flags ──────────────────────────────────────────────────────────────────
DRY_RUN       = '--dry-run'       in sys.argv
CONVERT_ONLY  = '--convert-only'  in sys.argv
SCAFFOLD_ONLY = '--scaffold-only' in sys.argv
REPORT_ONLY   = '--report'        in sys.argv

REPO_ROOT = Path(__file__).parent.parent
PUBLIC    = REPO_ROOT / 'public' / 'images'
WEBP_Q    = 88        # WebP quality for all conversions
REAL_KB   = 20        # files >= this size are considered real (not placeholder)

# Brand placeholder colour — warm charcoal matches site palette
PH_BG   = (26, 22, 19)
PH_LINE = (46, 40, 36)

# ── Archetype slugs (must match src/content/archetypes/*.md filenames) ─────
FEMININE_ARCHETYPES = [
    'the-angelic-one', 'the-creator', 'the-empress',
    'the-enchantress',  'the-muse',   'the-siren', 'the-warrior',
]
MASCULINE_ARCHETYPES = [
    'the-architect', 'the-artisan', 'the-classic',
    'the-explorer',  'the-maverick',
]

# ── Part 1: CONVERT any dropped JPG / PNG → WebP ──────────────────────────

def convert_sources():
    print('\n-- CONVERT: JPG/PNG -> WebP (q88), delete source after ----------')
    converted = 0

    source_files = sorted(
        list(PUBLIC.rglob('*.jpg')) + list(PUBLIC.rglob('*.png'))
    )

    if not source_files:
        print('  Nothing to convert — no .jpg or .png files found.')
        return

    for src in source_files:
        webp = src.with_suffix('.webp')

        if DRY_RUN:
            old_kb = src.stat().st_size // 1024
            print(f'  [dry] would convert {src.relative_to(PUBLIC)}  ({old_kb}KB)')
            converted += 1
            continue

        try:
            img      = Image.open(str(src))
            img.save(str(webp), 'WebP', quality=WEBP_Q)
            old_kb   = src.stat().st_size  // 1024
            new_kb   = webp.stat().st_size // 1024
            saving   = int((1 - new_kb / max(old_kb, 1)) * 100)
            print(f'  OK   {src.name:50s}  {old_kb:>5}KB -> {new_kb:>4}KB  (-{saving}%)')
            src.unlink()   # delete source only after successful conversion
            converted += 1
        except Exception as e:
            print(f'  ERR  {src.name}: {e}')

    print(f'\n  -> {converted} file(s) converted.')

# ── Part 2: SCAFFOLD missing WebP placeholder slots ───────────────────────

def make_placeholder(w: int, h: int) -> Image.Image:
    img = Image.new('RGB', (w, h), PH_BG)
    d   = ImageDraw.Draw(img)
    cx, cy = w // 2, h // 2
    d.line([(cx, cy - 20), (cx, cy + 20)], fill=PH_LINE, width=1)
    d.line([(cx - 20, cy), (cx + 20, cy)], fill=PH_LINE, width=1)
    d.rectangle([cx - 40, cy - 40, cx + 40, cy + 40], outline=PH_LINE, width=1)
    return img

def write_placeholder(path: Path, w: int, h: int) -> bool:
    """Write placeholder only if the slot does not exist at all."""
    if path.exists():
        return False
    if DRY_RUN:
        print(f'  [dry] would create {path.relative_to(PUBLIC)}')
        return True
    path.parent.mkdir(parents=True, exist_ok=True)
    make_placeholder(w, h).save(str(path), 'WebP', quality=WEBP_Q)
    print(f'  new  {path.relative_to(PUBLIC)}')
    return True

def scaffold():
    print('\n-- SCAFFOLD: create missing placeholder slots --------------------')
    created = 0

    # Archetype portraits — 2:3 portrait
    for slug in FEMININE_ARCHETYPES + MASCULINE_ARCHETYPES:
        for n in [1, 2, 3]:
            if write_placeholder(PUBLIC / 'archetypes' / f'{slug}-{n}.webp', 800, 1200):
                created += 1

    # Ensemble hero + cards backgrounds — 2 slots per gender, 16:9 wide
    for name in ['ensemble-feminine-hero', 'ensemble-feminine-cards',
                 'ensemble-masculine-hero', 'ensemble-masculine-cards']:
        if write_placeholder(PUBLIC / 'archetypes' / f'{name}.webp', 1920, 1080):
            created += 1

    # Quiz video posters — 9:16 vertical reel
    for name in ['quiz-poster-feminine', 'quiz-poster-masculine']:
        if write_placeholder(PUBLIC / f'{name}.webp', 1080, 1920):
            created += 1

    # Hero mosaic — 4:3 landscape (6 slots)
    for i in range(1, 7):
        if write_placeholder(PUBLIC / f'hero-{i}.webp', 1200, 900):
            created += 1

    # Portfolio grid — square (6 slots)
    for i in range(1, 7):
        if write_placeholder(PUBLIC / f'portfolio-{i}.webp', 1080, 1080):
            created += 1

    # Services — 4:3 landscape
    for slug in [
        'body-analysis', 'color-analysis', 'consultation',
        'master-style-moodboard', 'micro-styling', 'photoshoot-styling',
        'sourcing', 'vip', 'wardrobe-revamp',
    ]:
        if write_placeholder(PUBLIC / 'services' / f'{slug}.webp', 1200, 900):
            created += 1

    # Guide covers — 3:4 portrait
    for slug in [
        '7-feminine-archetypes-cover', 'maximalist-cover',
        'mens-edition-cover',          'no-overpacking-cover',
        'single-moms-cover',           'ultimate-style-edit-cover',
    ]:
        if write_placeholder(PUBLIC / 'guides' / f'{slug}.webp', 900, 1200):
            created += 1

    # Testimonial headshots — square
    for name in ['gabi', 'janessa', 'maral', 'michael']:
        if write_placeholder(PUBLIC / 'testimonials' / f'{name}.webp', 600, 600):
            created += 1

    # Danielle portraits — 2:3
    for name in ['danielle-portrait', 'danielle-styling']:
        if write_placeholder(PUBLIC / f'{name}.webp', 800, 1200):
            created += 1

    # OG / social card — Facebook/Twitter standard
    if write_placeholder(PUBLIC / 'og-default.webp', 1200, 630):
        created += 1

    # Brand folder (for SVG logomarks when ready)
    (PUBLIC / 'brand').mkdir(parents=True, exist_ok=True)

    if created == 0:
        print('  All expected slots already exist — nothing to scaffold.')
    else:
        print(f'\n  -> {created} placeholder(s) created.')

# ── Part 3: REPORT — what still needs real images ─────────────────────────

def report():
    print('\n-- REPORT: slots still using placeholders (<20KB) ---------------')
    all_webp  = sorted(PUBLIC.rglob('*.webp'))
    pending   = [p for p in all_webp if p.stat().st_size // 1024 < REAL_KB]
    real      = [p for p in all_webp if p.stat().st_size // 1024 >= REAL_KB]

    print(f'\n  Real images ({len(real)}):')
    for p in real:
        kb = p.stat().st_size // 1024
        print(f'    {kb:>5}KB  {p.relative_to(PUBLIC)}')

    print(f'\n  Pending — still need real images ({len(pending)}):')
    for p in pending:
        print(f'             {p.relative_to(PUBLIC)}')

# ── Main ──────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    print('Staples & Statements — Image Pipeline')
    if DRY_RUN:
        print('DRY RUN — no files will be written.\n')

    if REPORT_ONLY:
        report()
    else:
        if not SCAFFOLD_ONLY:
            convert_sources()
        if not CONVERT_ONLY:
            scaffold()
        report()

    print()
    print('Drop-in workflow:')
    print('  1. Copy your JPG/PNG into the right public/images/ folder')
    print('     using the exact filename the site expects')
    print('  2. Run:  python scripts/setup-images.py')
    print('  3. Done  (converted to WebP, source deleted, placeholder replaced)')
