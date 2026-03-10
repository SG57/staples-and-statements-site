/**
 * Single source of truth for all style guide product data.
 *
 * To add a direct Beacons purchase URL:
 *   1. Grab the product link from the Beacons dashboard
 *   2. Replace the BEACONS_SHOP fallback in the `link` field below
 *   3. That's it — every page that imports this file updates automatically.
 */

/** Beacons storefront profile (fallback when no direct product link exists yet) */
export const BEACONS_SHOP = 'https://shop.beacons.ai/staplesandstatementsss';

export interface Guide {
  /** Matches public/images/guides/{slug}-cover.jpg */
  slug: string;
  title: string;
  price: string;
  description: string;
  tags: string[];
  /** Direct Beacons product page — or BEACONS_SHOP until the link is available */
  link: string;
}

export const guides: Guide[] = [
  {
    slug: '7-feminine-archetypes',
    title: 'The 7 Feminine Archetypes Style Guide',
    price: '$27',
    description:
      'The guide that started a movement. Identify your dominant archetype, understand your style DNA, and build a wardrobe that finally feels authentic.',
    tags: ['Archetypes', 'Bestseller'],
    link: 'https://shop.beacons.ai/staplesandstatementsss/209b235a-3af0-46ae-a2a7-962abe1310fb',
  },
  {
    slug: 'single-moms',
    title: "The Ultimate Single Mom's Style Guide 40+",
    price: '$27',
    description:
      "Style that works for your real life. Practical, polished, and always put-together — for the woman who doesn't have time to overthink it.",
    tags: ['Lifestyle'],
    link: 'https://shop.beacons.ai/staplesandstatementsss/3fc52a60-e677-44fe-b35a-7e07a9eb4aa9',
  },
  {
    slug: 'ultimate-style-edit',
    title: 'The Ultimate Style Edit',
    price: '$27',
    description:
      'A comprehensive wardrobe audit framework — how to edit ruthlessly, identify gaps strategically, and shop with intention.',
    tags: ['Wardrobe'],
    link: 'https://shop.beacons.ai/staplesandstatementsss/3cac0f72-b0c9-49c3-a494-0a08a78c9705',
  },
  {
    slug: 'maximalist',
    title: 'The Ultimate Maximalist Style Guide',
    price: '$27',
    description:
      'For the woman who believes more is more. Bold prints, layered textures, color confidence — maximalism done right.',
    tags: ['Archetypes'],
    link: 'https://shop.beacons.ai/staplesandstatementsss/bfc67072-d0d6-48de-bd31-39dae3f09a9d',
  },
  {
    slug: 'mens-edition',
    title: "The Ultimate Style Edit: Men's Edition",
    price: '$27',
    description:
      "Clean, powerful, intentional dressing for men. Wardrobe fundamentals, silhouette principles, and the system behind a truly effortless wardrobe.",
    tags: ["Men's"],
    link: 'https://shop.beacons.ai/staplesandstatementsss/efc026d5-197a-43d0-bdcb-b9fac22958ce',
  },
  {
    slug: 'no-overpacking',
    title: '10 Outfits, No Overpacking',
    price: '$15',
    description:
      "Pack light, look incredible. The stylish mini guide that teaches you to do more with less — your carry-on's new best friend.",
    tags: ['Travel', 'Starter'],
    link: 'https://shop.beacons.ai/staplesandstatementsss/636ff908-8476-4d63-8234-5a1131de3ff4',
  },
];

/**
 * The 3 guides featured on the homepage shop preview.
 * Change this array to swap which guides surface on the homepage.
 */
export const featuredGuides = guides.slice(0, 3);
