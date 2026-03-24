"""
convert-portfolio.py — Convert Danielle's portfolio images to web-ready WebP
================================================================================

Reads from:  resources/danielle-portfolio/  (all subfolders)
Writes to:   public/images/portfolio/       (flat, renamed for web use)

Handles: JPG, JPEG, PNG, HEIC, HEIF
- Converts to WebP quality 88
- Resizes longest side to max 1600px (preserves aspect ratio)
- Strips EXIF/metadata for privacy
- Outputs a manifest of converted files

Usage:
  python scripts/convert-portfolio.py              # convert all
  python scripts/convert-portfolio.py --dry-run    # preview only
"""

import sys
import re
from pathlib import Path
from PIL import Image

# Register HEIC/HEIF support
try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
    HEIF_OK = True
except ImportError:
    HEIF_OK = False
    print("  WARNING: pillow-heif not installed — HEIC/HEIF files will be skipped.")
    print("  Install with: pip install pillow-heif\n")

DRY_RUN   = '--dry-run' in sys.argv
SRC_DIR   = Path(__file__).parent.parent / 'resources' / 'danielle-portfolio'
OUT_DIR   = Path(__file__).parent.parent / 'public' / 'images' / 'portfolio'
WEBP_Q    = 88
MAX_DIM   = 1600  # max pixels on longest side

# Supported extensions
EXTS = {'.jpg', '.jpeg', '.png', '.heic', '.heif'}


def slugify(name: str) -> str:
    """Convert a filename to a web-safe slug."""
    name = name.lower().strip()
    name = re.sub(r'[^a-z0-9]+', '-', name)
    name = name.strip('-')
    return name


def get_output_name(src: Path, index: int) -> str:
    """Generate a descriptive output filename from the folder structure."""
    # Use parent folder names for context
    rel = src.relative_to(SRC_DIR)
    parts = list(rel.parts[:-1])  # folder path without filename

    # Build a descriptive prefix from folder names
    prefix = '-'.join(slugify(p) for p in parts if p)

    # Use original filename stem (slugified) for uniqueness
    stem = slugify(src.stem)

    # Combine: e.g., "client-deliverables-color-analysis-img-1234"
    if prefix:
        return f"{prefix}-{stem}"
    return stem


def convert():
    if not SRC_DIR.exists():
        print(f"  Source directory not found: {SRC_DIR}")
        return

    if not DRY_RUN:
        OUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n  Scanning {SRC_DIR.relative_to(SRC_DIR.parent.parent)} ...\n")

    sources = sorted([
        f for f in SRC_DIR.rglob('*')
        if f.is_file() and f.suffix.lower() in EXTS
    ])

    if not sources:
        print("  Nothing to convert — no image files found.")
        return

    converted = 0
    skipped = 0
    manifest = []

    for i, src in enumerate(sources):
        ext = src.suffix.lower()
        if ext in {'.heic', '.heif'} and not HEIF_OK:
            print(f"  SKIP {src.name} (no HEIF support)")
            skipped += 1
            continue

        out_name = get_output_name(src, i)
        out_path = OUT_DIR / f"{out_name}.webp"

        # Avoid collisions
        counter = 2
        while out_path.exists():
            out_path = OUT_DIR / f"{out_name}-{counter}.webp"
            counter += 1

        old_kb = src.stat().st_size // 1024
        rel_src = src.relative_to(SRC_DIR)

        if DRY_RUN:
            print(f"  [dry] {str(rel_src):60s}  ({old_kb:,}KB) -> {out_path.name}")
            converted += 1
            continue

        try:
            img = Image.open(str(src))

            # Convert to RGB if needed (HEIC can be in various modes)
            if img.mode in ('RGBA', 'P', 'LA'):
                img = img.convert('RGBA')
                # Composite on white background for transparency
                bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
                bg.paste(img, mask=img.split()[3])
                img = bg.convert('RGB')
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            # Resize if too large
            w, h = img.size
            longest = max(w, h)
            if longest > MAX_DIM:
                ratio = MAX_DIM / longest
                new_w = int(w * ratio)
                new_h = int(h * ratio)
                img = img.resize((new_w, new_h), Image.LANCZOS)
                resized = f" (resized {w}x{h} -> {new_w}x{new_h})"
            else:
                resized = ""

            # Save as WebP — no EXIF (privacy)
            img.save(str(out_path), 'WebP', quality=WEBP_Q)

            new_kb = out_path.stat().st_size // 1024
            saving = int((1 - new_kb / max(old_kb, 1)) * 100)
            print(f"  OK   {str(rel_src):55s}  {old_kb:>6,}KB -> {new_kb:>5,}KB  (-{saving}%){resized}")

            manifest.append({
                'source': str(rel_src),
                'output': out_path.name,
                'original_kb': old_kb,
                'webp_kb': new_kb,
            })
            converted += 1

        except Exception as e:
            print(f"  ERR  {rel_src}: {e}")
            skipped += 1

    print(f"\n  {converted} converted, {skipped} skipped.")
    if not DRY_RUN and manifest:
        print(f"  Output: {OUT_DIR.relative_to(OUT_DIR.parent.parent.parent)}/")
        print(f"  Total WebP size: {sum(m['webp_kb'] for m in manifest):,}KB")


if __name__ == '__main__':
    print("Staples & Statements — Portfolio Image Converter")
    if DRY_RUN:
        print("DRY RUN — no files will be written.\n")
    convert()
    print()
