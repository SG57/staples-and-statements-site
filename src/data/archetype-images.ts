import { readdirSync } from 'fs';
import { join } from 'path';

let _files: string[] | null = null;

function getAllFiles(): string[] {
  if (_files) return _files;
  try {
    _files = readdirSync(join(process.cwd(), 'public/images/archetypes'));
  } catch {
    _files = [];
  }
  return _files;
}

/**
 * Returns all numbered card images for a slug, sorted ascending (1, 2, 3, …).
 * Scans public/images/archetypes/ at build time.
 */
export function getCardImages(slug: string): string[] {
  const files = getAllFiles();
  const re = new RegExp(`^${slug}-(\\d+)\\.webp$`);
  return files
    .filter(f => re.test(f))
    .sort((a, b) => +a.match(re)![1] - +b.match(re)![1])
    .map(f => `/images/archetypes/${f}`);
}

/**
 * Returns the wallpaper path for a slug if it exists, otherwise null.
 */
export function getWallpaper(slug: string): string | null {
  const files = getAllFiles();
  const name = `${slug}-wallpaper.webp`;
  return files.includes(name) ? `/images/archetypes/${name}` : null;
}

/**
 * Computes the CSS transform string for fan card at position i of n total.
 * Outer cards always land at ±80% X and ±15° rotation — scales inward evenly.
 */
export function fanCardTransform(i: number, n: number): string {
  if (n <= 1) return 'rotate(0deg) translateY(-2%)';
  const center = (n - 1) / 2;
  const offset = i - center;
  const norm   = offset / center; // −1 … +1
  const angle  = (norm * 15).toFixed(1);
  const x      = (norm * 80).toFixed(1);
  const y      = (Math.abs(norm) * 4).toFixed(1);
  return `rotate(${angle}deg) translateX(${x}%) translateY(${y}%)`;
}

/** Z-index for fan card: center card highest. */
export function fanCardZ(i: number, n: number): number {
  const center = (n - 1) / 2;
  return 10 + Math.round((1 - Math.abs(i - center) / Math.max(center, 1)) * 10);
}
