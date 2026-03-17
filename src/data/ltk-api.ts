/**
 * LTK Collections API — Danielle's LikeToKnow.it shop
 *
 * Fetches all product collections at build time. Module-level singleton cache
 * means the API is called exactly ONCE per `npm run build` across all pages.
 *
 * Classification is keyword-based: collection titles are matched against
 * archetype names so collections automatically appear in the right places
 * (shop grid, archetype detail pages, "With Shades Of" blend widget).
 *
 * Zero maintenance: Danielle adds a collection on LTK → triggers a new build
 * → it appears automatically in the right spots on the site.
 */

const LTK_API_URL =
  'https://api-gateway.rewardstyle.com/api/ltk/v1/shops/shop_product/get_shop_product_collections' +
  '?profile_id=de457394-b5d4-11f0-83a0-ddf4fca19a22';

const LTK_COLLECTION_URL_BASE =
  'https://www.shopltk.com/explore/Staplesandstatementsss/productsets';

/** Browser-style headers required by the LTK API gateway. */
const LTK_HEADERS: Record<string, string> = {
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
  'cache-control': 'no-cache',
  'pragma': 'no-cache',
  'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
};

// ── Archetype keyword registry ────────────────────────────────────────────────
// Multi-word keywords listed FIRST (longer match before shorter).
const ARCHETYPE_REGISTRY: Array<{
  slug: string;
  gender: 'feminine' | 'masculine';
  keywords: string[];
}> = [
  // Feminine
  { slug: 'the-siren',       gender: 'feminine',  keywords: ['siren'] },
  { slug: 'the-muse',        gender: 'feminine',  keywords: ['muse'] },
  { slug: 'the-warrior',     gender: 'feminine',  keywords: ['warrior'] },
  { slug: 'the-enchantress', gender: 'feminine',  keywords: ['enchantress'] },
  { slug: 'the-creator',     gender: 'feminine',  keywords: ['creator'] },
  { slug: 'the-empress',     gender: 'feminine',  keywords: ['empress'] },
  { slug: 'the-angelic-one', gender: 'feminine',  keywords: ['angelic one', 'angelic'] }, // longer first
  // Masculine
  { slug: 'the-protector',   gender: 'masculine', keywords: ['protector'] },
  { slug: 'the-maverick',    gender: 'masculine', keywords: ['maverick'] },
  { slug: 'the-architect',   gender: 'masculine', keywords: ['architect'] },
  { slug: 'the-alchemist',   gender: 'masculine', keywords: ['alchemist'] },
  { slug: 'the-sovereign',   gender: 'masculine', keywords: ['sovereign'] },
];

// ── Lifestyle/fashion terms for displayability ────────────────────────────────
// A collection is shown publicly if it matches an archetype keyword OR one of
// these terms. Anything else (personal names, client lists) is hidden.
const LIFESTYLE_TERMS = new Set([
  'accessories', 'clothing', 'clothes', 'outfit', 'outfits', 'dress', 'dresses',
  'suit', 'suits', 'jacket', 'coat', 'coats', 'style', 'styles', 'fashion',
  'wear', 'look', 'looks', 'set', 'sets', 'cozy', 'prom', 'birthday', 'party',
  'home', 'decor', 'professional', 'elevated', "men's", 'mens', 'men', 'male',
  'airport', 'bridgerton', 'must-have', 'musthave', 'ideas', 'approved', 'core',
  'travel', 'vacation', 'resort', 'summer', 'winter', 'fall', 'spring',
  'casual', 'formal', 'workwear', 'work',
]);

// ── Types ─────────────────────────────────────────────────────────────────────

export interface LtkCollection {
  collection_id: string;
  title: string;
  description: string;
  cover_photo_urls: string[];
  product_count: number;
  collection_url: string;
  /** First cover photo URL, or empty string. */
  cover: string;
  /** Matched archetype slugs — 0 = non-archetype, 1 = single, 2+ = blend. */
  archetypes: string[];
  /** Inferred from archetype keywords, or masculine title keywords. */
  gender: 'feminine' | 'masculine' | 'other';
  /** True when two or more archetypes are matched (e.g. "Warrior X Empress"). */
  isBlend: boolean;
  /** True when title contains "curvy" — size-inclusive variant of a single archetype. */
  isCurvy: boolean;
  /** False for personal/private collections (no archetype OR lifestyle terms). */
  displayable: boolean;
}

// ── Classification ────────────────────────────────────────────────────────────

function classifyTitle(title: string): Pick<
  LtkCollection,
  'archetypes' | 'gender' | 'isBlend' | 'displayable'
> {
  const lower = title.toLowerCase();

  // Match archetypes (keywords checked in registry order; multi-word before single)
  const matched: Array<{ slug: string; gender: 'feminine' | 'masculine' }> = [];
  for (const entry of ARCHETYPE_REGISTRY) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      matched.push({ slug: entry.slug, gender: entry.gender });
    }
  }

  const archetypes = matched.map((m) => m.slug);
  const isBlend    = archetypes.length >= 2;
  const isCurvy    = lower.includes('curvy');

  // Gender from archetype matches, then title fallback
  let gender: LtkCollection['gender'] = 'other';
  if (archetypes.length > 0) {
    const hasFem  = matched.some((m) => m.gender === 'feminine');
    const hasMasc = matched.some((m) => m.gender === 'masculine');
    if (hasFem && !hasMasc)       gender = 'feminine';
    else if (hasMasc && !hasFem)  gender = 'masculine';
    // cross-gender blend → 'other' (rare / hypothetical)
  } else {
    const titleWords = lower.replace(/[^\w\s'-]/g, ' ').split(/\s+/);
    const isMascTitle = titleWords.some(
      (w) => w === "men's" || w === 'mens' || w === 'men' || w === 'male' || w === 'masculine',
    );
    if (isMascTitle) gender = 'masculine';
  }

  // Displayable if archetype-matched OR has a lifestyle/fashion term
  let displayable = archetypes.length > 0;
  if (!displayable) {
    const words = lower.replace(/[^\w\s'-]/g, ' ').split(/\s+/);
    displayable = words.some((w) => LIFESTYLE_TERMS.has(w));
  }

  return { archetypes, gender, isBlend, isCurvy, displayable };
}

// ── Fetch & cache ─────────────────────────────────────────────────────────────

let _cache: LtkCollection[] | null = null;

type RawCollection = {
  collection_id: string;
  title: string;
  description: string;
  cover_photo_urls: string[];
  product_count: number;
};

type ApiResponse = {
  shop_product_collections: RawCollection[];
  meta: { next: string | null };
};

/**
 * Fetches ALL LTK shop product collections for Danielle's profile.
 * Paginates automatically using the `next=` cursor until exhausted.
 * Results are cached in-module — one set of API calls per build.
 * Returns an empty array on any failure (graceful degradation).
 */
export async function fetchLtkCollections(): Promise<LtkCollection[]> {
  if (_cache !== null) return _cache;

  const raw: RawCollection[] = [];
  let cursor: string | null = null;
  let page = 0;
  const MAX_PAGES = 20; // safety guard against infinite loops

  try {
    do {
      const url = cursor
        ? `${LTK_API_URL}&next=${encodeURIComponent(cursor)}`
        : LTK_API_URL;

      const res = await fetch(url, { headers: LTK_HEADERS });
      if (!res.ok) {
        console.warn(`[ltk-api] API responded ${res.status} on page ${page + 1}`);
        break;
      }

      const data = await res.json() as ApiResponse;
      raw.push(...(data.shop_product_collections ?? []));
      cursor = data.meta?.next ?? null;
      page++;
    } while (cursor && page < MAX_PAGES);

    _cache = raw.map((c) => ({
      collection_id:    c.collection_id,
      title:            c.title,
      description:      c.description,
      cover_photo_urls: c.cover_photo_urls,
      product_count:    c.product_count,
      collection_url:   `${LTK_COLLECTION_URL_BASE}/${c.collection_id}`,
      cover:            c.cover_photo_urls[0] ?? '',
      ...classifyTitle(c.title),
    }));

    console.log(`[ltk-api] Loaded ${_cache.length} collections across ${page} page(s)`);
    return _cache;
  } catch (err) {
    console.warn('[ltk-api] Fetch failed — showing no LTK collections:', err);
    _cache = [];
    return _cache;
  }
}

// ── Query helpers ─────────────────────────────────────────────────────────────

/** All displayable collections that involve a specific archetype slug. */
export function getCollectionsForArchetype(
  collections: LtkCollection[],
  slug: string,
): LtkCollection[] {
  return collections.filter((c) => c.displayable && c.archetypes.includes(slug));
}

/**
 * Blend collections matching BOTH the primary and a secondary archetype slug.
 * Used by the "With Shades Of" comparator widget on detail pages.
 */
export function getBlendCollections(
  collections: LtkCollection[],
  primarySlug: string,
  secondarySlug: string,
): LtkCollection[] {
  return collections.filter(
    (c) =>
      c.displayable &&
      c.archetypes.includes(primarySlug) &&
      c.archetypes.includes(secondarySlug),
  );
}
