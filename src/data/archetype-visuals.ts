/**
 * Archetype Visuals — structured visual data for all 12 archetypes.
 * Replaces free-text markdown body with machine-readable visual data
 * for the detail page templates.
 */

// ── Interfaces ──────────────────────────────────────────────

export interface PaletteColor {
  name: string;
  hex: string;
}

export interface SignaturePiece {
  name: string;
  icon: IconCategory;
}

export interface StyleIcon {
  name: string;
  /** Path pattern: /images/archetypes/icons/{slugified-name}.webp */
  image: string;
}

export interface GalleryLook {
  title: string;
  bullets: [string, string, string];
}

export interface ArchetypeVisuals {
  slug: string;
  tagline: string;
  palette: PaletteColor[];
  signaturePieces: SignaturePiece[];
  styleIcons: StyleIcon[];
  bodyText: string;
  galleryLooks: [GalleryLook, GalleryLook, GalleryLook];
}

// ── Icon category system ────────────────────────────────────
// Maps fashion items to minimal line-art SVG path data (Lucide-style).
// Each icon is a 24x24 viewBox with stroke-based paths.

export type IconCategory =
  | 'jacket'
  | 'dress'
  | 'trousers'
  | 'boots'
  | 'jewelry'
  | 'watch'
  | 'shirt'
  | 'knit'
  | 'bag'
  | 'hat'
  | 'fabric'
  | 'vintage';

/** SVG path data for each icon category (24x24 viewBox, stroke-linecap/join: round) */
export const iconPaths: Record<IconCategory, string> = {
  jacket:
    'M12 2L8 6H4l-1 3v7h2v6h14v-6h2V9l-1-3h-4l-4-4zM8 6v10M16 6v10',
  dress:
    'M9 2h6l2 6-3 1v3l4 10H6l4-10v-3L7 8l2-6zM9 2c0 1.5 1.5 3 3 3s3-1.5 3-3',
  trousers:
    'M8 2h8v6l1 14h-4l-1-10-1 10H7l1-14V2zM8 8h8',
  boots:
    'M8 2v12l-2 4v3h12v-3l-2-4V2M8 14h8M6 21h12M10 2h4',
  jewelry:
    'M12 6a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 14v2M8 4l1 1.5M16 4l-1 1.5M4 12h4M16 12h4M12 16v4M10 20h4',
  watch:
    'M12 8v4l2 2M12 4a8 8 0 100 16 8 8 0 000-16zM12 2v2M12 20v2M9 2h6M9 22h6',
  shirt:
    'M8 2l-4 4v4l3-1v13h10V9l3 1V6l-4-4-2 3h-4L8 2zM10 5h4',
  knit:
    'M6 8c0-3.3 2.7-6 6-6s6 2.7 6 6v14H6V8zM6 12h12M6 16h12M10 2v2M14 2v2',
  bag:
    'M5 10h14v11H5V10zM9 10V7a3 3 0 016 0v3M5 14h14',
  hat:
    'M4 16h16M6 16c0-5.5 2.7-10 6-10s6 4.5 6 10M3 16v2h18v-2',
  fabric:
    'M4 4l4 4-4 4 4 4-4 4M12 4l4 4-4 4 4 4-4 4M20 4l-4 4 4 4-4 4 4 4',
  vintage:
    'M12 2C7 2 3 6 3 11v2h18v-2c0-5-4-9-9-9zM3 13l2 7h14l2-7M12 2v4M8 6h8',
};

// ── Helper: slugify a name for image paths ──────────────────

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ── All 12 archetypes ───────────────────────────────────────

export const archetypeVisuals: ArchetypeVisuals[] = [
  // ─── FEMININE ───────────────────────────────────────────

  {
    slug: 'the-siren',
    tagline: 'I know who I am. You should too.',
    palette: [
      { name: 'Deep Red', hex: '#8B0000' },
      { name: 'Burnt Sienna', hex: '#E97451' },
      { name: 'Chocolate Brown', hex: '#3C1E08' },
      { name: 'Warm Gold', hex: '#B8860B' },
      { name: 'Terracotta', hex: '#CC4E2E' },
      { name: 'Rich Emerald', hex: '#046307' },
    ],
    signaturePieces: [
      { name: 'Bodycon Dresses', icon: 'dress' },
      { name: 'Wrap Silhouettes', icon: 'dress' },
      { name: 'High-Slit Skirts', icon: 'dress' },
      { name: 'Plunging Necklines', icon: 'shirt' },
      { name: 'Jewel-Toned Satins', icon: 'fabric' },
      { name: 'Form-Fitting Knitwear', icon: 'knit' },
      { name: 'Statement Heels', icon: 'boots' },
    ],
    styleIcons: [
      { name: 'Sofia Vergara', image: `/images/archetypes/icons/${slugify('Sofia Vergara')}.webp` },
      { name: 'Salma Hayek', image: `/images/archetypes/icons/${slugify('Salma Hayek')}.webp` },
      { name: 'Kim Kardashian', image: `/images/archetypes/icons/${slugify('Kim Kardashian')}.webp` },
    ],
    bodyText:
      "The Siren knows exactly what she has and dresses to celebrate it. Your style is sensual without being scandalous, bold without being brash. You gravitate toward body-conscious silhouettes, rich fabrics, deep warm tones, and the kind of pieces that move with you. Your wardrobe is a love letter to your own body.",
    galleryLooks: [
      {
        title: 'The Body as Blueprint',
        bullets: [
          'Form follows fantasy — and you wrote the rules',
          'Every curve deliberate, every detail irreducible',
          'Worn like a love letter to yourself',
        ],
      },
      {
        title: 'The Heat',
        bullets: [
          'Wrap silhouette that moves with you, not for you',
          'Deep, saturated color held close to the body',
          'The look that arrives before you do',
        ],
      },
      {
        title: 'The Gaze',
        bullets: [
          'High slit, statement heel, complete intention',
          'Jewel-toned fabric that holds and releases light',
          'Stop a conversation without saying a word',
        ],
      },
    ],
  },

  {
    slug: 'the-muse',
    tagline: 'I see beauty everywhere, and I wear it.',
    palette: [
      { name: 'Dusty Rose', hex: '#DCAE96' },
      { name: 'Sage Green', hex: '#87AE73' },
      { name: 'Lavender', hex: '#B57EDC' },
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Antique Gold', hex: '#CFB53B' },
      { name: 'Muted Periwinkle', hex: '#8E82B0' },
    ],
    signaturePieces: [
      { name: 'Flowy Midi Dresses', icon: 'dress' },
      { name: 'Romantic Blouses', icon: 'shirt' },
      { name: 'Delicate Jewelry', icon: 'jewelry' },
      { name: 'Vintage-Inspired Accessories', icon: 'vintage' },
      { name: 'Soft Floral Prints', icon: 'fabric' },
      { name: 'Ethereal Layering', icon: 'fabric' },
    ],
    styleIcons: [
      { name: 'Carrie Bradshaw', image: `/images/archetypes/icons/${slugify('Carrie Bradshaw')}.webp` },
      { name: 'Alexa Chung', image: `/images/archetypes/icons/${slugify('Alexa Chung')}.webp` },
      { name: 'Zooey Deschanel', image: `/images/archetypes/icons/${slugify('Zooey Deschanel')}.webp` },
    ],
    bodyText:
      "The Muse lives where art and beauty intersect. Your wardrobe is an expression of your inner world \u2014 layered, romantic, and always slightly dreamy. You're drawn to flowing silhouettes, delicate prints, vintage-inspired details, and fabrics that move. Florals, lace, soft watercolor tones, and unexpected feminine details feel instinctively right to you.",
    galleryLooks: [
      {
        title: 'The Dream',
        bullets: [
          'Layers that drift with each step, soft as breath',
          'Dusty rose and ivory caught mid-motion',
          'Romantic detail that rewards a second glance',
        ],
      },
      {
        title: 'The Garden',
        bullets: [
          'Vintage-inspired silhouette with effortless modern ease',
          'Florals worn like they were grown for you specifically',
          'Delicate textures, invisible but intentional layering',
        ],
      },
      {
        title: 'The Edit',
        bullets: [
          'Art-adjacent accessories as the entire thesis',
          'Unexpected color pairings that feel inevitable',
          'Jewelry stacked to tell a quiet, personal story',
        ],
      },
    ],
  },

  {
    slug: 'the-warrior',
    tagline: 'I am ready for whatever this day brings.',
    palette: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Navy', hex: '#000080' },
      { name: 'Sharp Red', hex: '#DC143C' },
    ],
    signaturePieces: [
      { name: 'Structured Blazers', icon: 'jacket' },
      { name: 'Tailored Trousers', icon: 'trousers' },
      { name: 'Crisp White Shirts', icon: 'shirt' },
      { name: 'Sleek Trench Coats', icon: 'jacket' },
      { name: 'Minimal Statement Jewelry', icon: 'jewelry' },
      { name: 'Strong-Shouldered Dresses', icon: 'dress' },
      { name: 'Clean Leather Pieces', icon: 'fabric' },
    ],
    styleIcons: [
      { name: 'Tilda Swinton', image: `/images/archetypes/icons/${slugify('Tilda Swinton')}.webp` },
      { name: 'Lupita Nyong\'o', image: `/images/archetypes/icons/${slugify("Lupita Nyong'o")}.webp` },
      { name: 'Christy Turlington', image: `/images/archetypes/icons/${slugify('Christy Turlington')}.webp` },
    ],
    bodyText:
      "The Warrior's style is armor \u2014 beautiful, powerful, and built to move through the world with confidence. You're drawn to strong shoulders, structured silhouettes, sharp tailoring, and a palette of high-contrast neutrals. Your look is minimal in decoration and maximal in impact. You don't need embellishment \u2014 your presence is enough.",
    galleryLooks: [
      {
        title: 'The Red Statement Dress',
        bullets: [
          'Sharp silhouette that needs no accessories',
          'Color as armor — bold, deliberate, final',
          'The look that walks in before you do',
        ],
      },
      {
        title: 'The Trench Commander',
        bullets: [
          'Structure that moves with authority',
          'Every button a decision, every line intentional',
          'From boardroom to sidewalk — no apology needed',
        ],
      },
      {
        title: 'The Boardroom Power Suit',
        bullets: [
          'Precision-cut tailoring as self-expression',
          'Minimal palette, maximum impact',
          'The room shifts when you sit down',
        ],
      },
    ],
  },

  {
    slug: 'the-enchantress',
    tagline: "There's more here than you can see. Come closer.",
    palette: [
      { name: 'Deep Plum', hex: '#673147' },
      { name: 'Midnight Navy', hex: '#191970' },
      { name: 'Forest Green', hex: '#228B22' },
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Oxblood', hex: '#4A0000' },
      { name: 'Dusty Mauve', hex: '#C9A9A6' },
    ],
    signaturePieces: [
      { name: 'Velvet Wrap Dresses', icon: 'dress' },
      { name: 'Lace-Detail Tops', icon: 'shirt' },
      { name: 'Dramatic Sleeves', icon: 'fabric' },
      { name: 'Deep-Toned Midi Skirts', icon: 'dress' },
      { name: 'Layered Necklaces', icon: 'jewelry' },
      { name: 'Boots with Presence', icon: 'boots' },
    ],
    styleIcons: [
      { name: 'Winona Ryder', image: `/images/archetypes/icons/${slugify('Winona Ryder')}.webp` },
      { name: 'Dita Von Teese', image: `/images/archetypes/icons/${slugify('Dita Von Teese')}.webp` },
      { name: 'Lana Del Rey', image: `/images/archetypes/icons/${slugify('Lana Del Rey')}.webp` },
    ],
    bodyText:
      "The Enchantress operates in the space between shadow and light. Your style is dark romance made wearable \u2014 moody colors, unexpected textures, layered complexity, and an edge that feels effortless rather than studied. You're drawn to deep jewel tones, gothic-adjacent details, velvet, lace, and silhouettes that suggest rather than reveal.",
    galleryLooks: [
      {
        title: 'The Shadow',
        bullets: [
          'Dark velvet that holds its secrets close',
          'Midnight tones layered with deliberate mystery',
          'A look that invites you closer, then reconsiders',
        ],
      },
      {
        title: 'The Ritual',
        bullets: [
          'Lace detail surfacing unexpectedly, earned',
          'Deep jewel tones that absorb rather than reflect light',
          'Gothic-adjacent edge worn without effort',
        ],
      },
      {
        title: 'The Veil',
        bullets: [
          'Draped silhouette that suggests without revealing',
          'Layered textures building complex visual depth',
          'Romantic darkness in its most wearable form',
        ],
      },
    ],
  },

  {
    slug: 'the-creator',
    tagline: "I made the rules I live by. You're welcome to look.",
    palette: [
      { name: 'Earthy Terracotta', hex: '#CC4E2E' },
      { name: 'Chartreuse', hex: '#7FFF00' },
      { name: 'Cobalt', hex: '#0047AB' },
      { name: 'Burnt Orange', hex: '#CC5500' },
      { name: 'Mustard', hex: '#E1AD01' },
      { name: 'Deep Teal', hex: '#008080' },
    ],
    signaturePieces: [
      { name: 'Mixed-Print Combos', icon: 'fabric' },
      { name: 'Statement Vintage', icon: 'vintage' },
      { name: 'Bold Accessories', icon: 'jewelry' },
      { name: 'Artist-Adjacent Textures', icon: 'fabric' },
      { name: 'Unexpected Colors', icon: 'hat' },
      { name: 'Hand-Crafted Pieces', icon: 'vintage' },
    ],
    styleIcons: [
      { name: 'Iris Apfel', image: `/images/archetypes/icons/${slugify('Iris Apfel')}.webp` },
      { name: 'Solange Knowles', image: `/images/archetypes/icons/${slugify('Solange Knowles')}.webp` },
      { name: 'Erykah Badu', image: `/images/archetypes/icons/${slugify('Erykah Badu')}.webp` },
    ],
    bodyText:
      "The Creator sees fashion as a medium, not a mandate. You mix prints without apology, layer textures that shouldn't work until they do, and find pieces that tell stories most people would walk right past. Your style is curated chaos \u2014 a visual diary of your obsessions, inspirations, and the beautiful things you can't stop noticing.",
    galleryLooks: [
      {
        title: 'The Collision',
        bullets: [
          'Two prints that shouldn\'t work — until they do',
          'Color-blocking as art direction, not accident',
          'The outfit that starts a conversation mid-sentence',
        ],
      },
      {
        title: 'The Vintage Find',
        bullets: [
          'Unearthed at a market, made entirely your own',
          'Unexpected provenance, undeniable presence',
          'Fashion archaeology turned personal manifesto',
        ],
      },
      {
        title: 'The Statement',
        bullets: [
          'Bold accessories as the entire thesis statement',
          'Textures stacked with purpose and beautiful chaos',
          'The outfit that could hang in a gallery',
        ],
      },
    ],
  },

  {
    slug: 'the-empress',
    tagline: 'I am here, grounded, and abundant.',
    palette: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Gold', hex: '#FFD700' },
      { name: 'Olive', hex: '#808000' },
      { name: 'Warm Taupe', hex: '#B5A28F' },
      { name: 'Soft Champagne', hex: '#F7E7CE' },
      { name: 'Rich Cognac', hex: '#9A463D' },
    ],
    signaturePieces: [
      { name: 'Silk Blouses', icon: 'shirt' },
      { name: 'Gold Jewelry', icon: 'jewelry' },
      { name: 'Tailored Trousers', icon: 'trousers' },
      { name: 'Cashmere Wraps', icon: 'knit' },
      { name: 'Elevated Knitwear', icon: 'knit' },
      { name: 'Structured Handbags', icon: 'bag' },
      { name: 'Quality Loafers', icon: 'boots' },
    ],
    styleIcons: [
      { name: 'Meghan Markle', image: `/images/archetypes/icons/${slugify('Meghan Markle')}.webp` },
      { name: 'Amal Clooney', image: `/images/archetypes/icons/${slugify('Amal Clooney')}.webp` },
      { name: 'Oprah Winfrey', image: `/images/archetypes/icons/${slugify('Oprah Winfrey')}.webp` },
    ],
    bodyText:
      "The Empress radiates warmth the moment she enters a room. Your style isn't about commanding attention \u2014 it's about creating an atmosphere of grounded abundance. You gravitate toward luxe, elevated basics: pieces that feel as good as they look, built with quality that speaks for itself. Your wardrobe is an extension of your nurturing energy \u2014 every piece chosen with care, stability, and timeless intention.\n\nYou don't need trends. Your closet is full of high-quality neutrals that layer beautifully, silk that drapes just right, and gold that catches the light. You dress for how you want to feel: warm, capable, and elegantly put together without trying too hard.",
    galleryLooks: [
      {
        title: 'The Presence',
        bullets: [
          'Elevated basics assembled with complete intention',
          'Rich neutral palette that feels like an atmosphere',
          'The look that makes every room feel warmer',
        ],
      },
      {
        title: 'The Investment',
        bullets: [
          'Cashmere and tailored trouser: the wardrobe backbone',
          'Quality that deepens with every wear',
          'Warmth as visual language, not just temperature',
        ],
      },
      {
        title: 'The Foundation',
        bullets: [
          'Silk that drapes with quiet, earned authority',
          'Gold catching light at every angle — naturally',
          'Grounded luxury that needs no announcement',
        ],
      },
    ],
  },

  {
    slug: 'the-angelic-one',
    tagline: 'I am exactly where I belong, and I am at peace.',
    palette: [
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Cream', hex: '#FFFDD0' },
      { name: 'Blush', hex: '#DE5D83' },
      { name: 'Powder Pink', hex: '#FFB6C1' },
      { name: 'Warm White', hex: '#FAF0E6' },
      { name: 'Pale Gold', hex: '#EEE8AA' },
      { name: 'Soft Champagne', hex: '#F7E7CE' },
    ],
    signaturePieces: [
      { name: 'Flowy White Dresses', icon: 'dress' },
      { name: 'Silk Slip Skirts', icon: 'dress' },
      { name: 'Soft-Knit Cardigans', icon: 'knit' },
      { name: 'Ballet Flats', icon: 'boots' },
      { name: 'Pearl Jewelry', icon: 'jewelry' },
      { name: 'Sheer Layers', icon: 'fabric' },
      { name: 'Linen Basics', icon: 'shirt' },
    ],
    styleIcons: [
      { name: 'Audrey Hepburn', image: `/images/archetypes/icons/${slugify('Audrey Hepburn')}.webp` },
      { name: 'Hailey Bieber', image: `/images/archetypes/icons/${slugify('Hailey Bieber')}.webp` },
      { name: 'Sienna Miller', image: `/images/archetypes/icons/${slugify('Sienna Miller')}.webp` },
    ],
    bodyText:
      "The Angelic One carries an aura of calm, purity, and gentle beauty. Your wardrobe speaks in whispers \u2014 soft whites, warm creams, blush pinks, and the kind of delicate details that reward a second look. Your style is never loud, but it's never forgettable. There's a timelessness to everything you wear that transcends trend.",
    galleryLooks: [
      {
        title: 'The White Canvas',
        bullets: [
          'Flowy white layers that move like breath',
          'Luminous, soft, and completely at peace',
          'The look that calms a room just by entering it',
        ],
      },
      {
        title: 'The Softness',
        bullets: [
          'Powder pink and silk slip: a study in ease',
          'Delicate layering with invisible intentionality',
          'Feminine in the quietest, most powerful way',
        ],
      },
      {
        title: 'The Bloom',
        bullets: [
          'Sheer layers over warm cream — effortless grace',
          'Pearl detail that anchors without weighing down',
          'Light-catching fabric in its most gentle form',
        ],
      },
    ],
  },

  // ─── MASCULINE ──────────────────────────────────────────

  {
    slug: 'the-protector',
    tagline: "I'm steady. I'm here. I'm not going anywhere.",
    palette: [
      { name: 'Slate', hex: '#708090' },
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Olive', hex: '#556B2F' },
      { name: 'Worn Brown', hex: '#6B4226' },
      { name: 'Indigo', hex: '#4B0082' },
      { name: 'Iron Grey', hex: '#48494B' },
    ],
    signaturePieces: [
      { name: 'Heavyweight Chore Jackets', icon: 'jacket' },
      { name: 'Quality Leather Boots', icon: 'boots' },
      { name: 'Well-Fitted Dark Denim', icon: 'trousers' },
      { name: 'Classic Crew-Neck Knits', icon: 'knit' },
      { name: 'Military-Inspired Outerwear', icon: 'jacket' },
      { name: 'Dependable Field Watches', icon: 'watch' },
    ],
    styleIcons: [
      { name: 'Steve McQueen', image: `/images/archetypes/icons/${slugify('Steve McQueen')}.webp` },
      { name: 'Idris Elba', image: `/images/archetypes/icons/${slugify('Idris Elba')}.webp` },
      { name: 'David Beckham', image: `/images/archetypes/icons/${slugify('David Beckham')}.webp` },
    ],
    bodyText:
      "The Protector doesn't dress to be noticed \u2014 he dresses to be ready. Your wardrobe is built on dependability: quality over quantity, durability over novelty. Every piece earns its place through repeated wear and unwavering reliability. You gravitate toward well-worn leather that ages beautifully, heavy-gauge knits, heritage boots, and perfectly fitted denim that holds up to real life.\n\nYou're not chasing the next thing. You've already found what works, and you return to it with quiet confidence. Your style reflects stability, trustworthiness, and a grounding presence that puts everyone around you at ease.",
    galleryLooks: [
      {
        title: 'The Foundation',
        bullets: [
          'Well-worn leather that has earned every crease',
          'Dependable weight, dependable presence',
          'The jacket that has been everywhere with you',
        ],
      },
      {
        title: 'The Heritage',
        bullets: [
          'Dark denim fitted perfectly from years of wear',
          'Quality knit that improves with every season',
          'No trend, no apology — just permanence',
        ],
      },
      {
        title: 'The Field',
        bullets: [
          'Military-inspired outerwear built for real conditions',
          'Functional design that happens to look exceptional',
          'Dressed for the work, not the audience',
        ],
      },
    ],
  },

  {
    slug: 'the-maverick',
    tagline: "You've never seen this before. And you won't again.",
    palette: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Electric Blue', hex: '#7DF9FF' },
      { name: 'Deep Red', hex: '#8B0000' },
      { name: 'Mustard', hex: '#E1AD01' },
      { name: 'Deep Plum', hex: '#673147' },
    ],
    signaturePieces: [
      { name: 'Oversized Statement Outerwear', icon: 'jacket' },
      { name: 'Graphic Tees', icon: 'shirt' },
      { name: 'Mixed-Era Layering', icon: 'fabric' },
      { name: 'Bold Accessories', icon: 'jewelry' },
      { name: 'Unexpected Footwear', icon: 'boots' },
      { name: 'One-of-a-Kind Vintage', icon: 'vintage' },
    ],
    styleIcons: [
      { name: 'Tyler the Creator', image: `/images/archetypes/icons/${slugify('Tyler the Creator')}.webp` },
      { name: 'Harry Styles', image: `/images/archetypes/icons/${slugify('Harry Styles')}.webp` },
      { name: 'Kid Cudi', image: `/images/archetypes/icons/${slugify('Kid Cudi')}.webp` },
    ],
    bodyText:
      "The Maverick's closet is a contradiction by design. Vintage band tees under structured blazers. Distressed denim with tailored details. Statement accessories that start conversations. You resist being boxed in and see fashion as a playground versus a rule book. Rules exist to be bent, and you bend them with taste.\n\nYour wardrobe is always evolving because standing still is the only thing you refuse to do. You crave freedom, novelty, and movement. Labels feel limiting \u2014 your style is versatile and hard to pin down, which is exactly the point. You enjoy bending and remixing trends on your own terms.",
    galleryLooks: [
      {
        title: 'The Remix',
        bullets: [
          'Vintage band tee under a structured blazer — intentional',
          'Distressed denim with tailored details: the contradiction',
          'A look that bends the rules it\'s built from',
        ],
      },
      {
        title: 'The Statement',
        bullets: [
          'Oversized outerwear that rewrites the silhouette',
          'Bold accessories as the opening argument',
          'Unconventional footwear that completes the whole look',
        ],
      },
      {
        title: 'The Layer',
        bullets: [
          'Mixed-era pieces assembled into something entirely new',
          'Color-blocking that defies easy category',
          'Fashion as a living, evolving manifesto',
        ],
      },
    ],
  },

  {
    slug: 'the-architect',
    tagline: 'Nothing here is by accident.',
    palette: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Navy', hex: '#000080' },
      { name: 'Steel Grey', hex: '#71797E' },
      { name: 'Bone', hex: '#E3DAC9' },
    ],
    signaturePieces: [
      { name: 'Tailored Blazers', icon: 'jacket' },
      { name: 'Minimalist Watches', icon: 'watch' },
      { name: 'Structured Trousers', icon: 'trousers' },
      { name: 'Clean Sneakers', icon: 'boots' },
      { name: 'Well-Pressed Button-Downs', icon: 'shirt' },
      { name: 'Precision-Cut Outerwear', icon: 'jacket' },
    ],
    styleIcons: [
      { name: 'Tom Ford', image: `/images/archetypes/icons/${slugify('Tom Ford')}.webp` },
      { name: 'A$AP Rocky', image: `/images/archetypes/icons/${slugify('A$AP Rocky')}.webp` },
      { name: 'Timoth\u00e9e Chalamet', image: `/images/archetypes/icons/${slugify('Timothee Chalamet')}.webp` },
    ],
    bodyText:
      "The Architect's wardrobe is a masterclass in precision. Every piece is selected for its construction, its cut, its purpose in the larger system. You appreciate structure, clarity, and cohesion \u2014 clean lines, architectural shapes, and monochromatic palettes that create visual harmony. You don't wear clothes \u2014 you curate a visual identity where every detail has been considered and nothing is left to chance.\n\nYour style refines over time. You adjust details rather than reinvent yourself. Trends are adopted strategically \u2014 only if they align with the vision you've already built. Your presence enters a room with focus, sharpness, and intention.",
    galleryLooks: [
      {
        title: 'The Blueprint',
        bullets: [
          'Monochromatic precision that creates visual harmony',
          'Every detail considered, nothing superfluous',
          'Clean lines that speak louder than ornament',
        ],
      },
      {
        title: 'The System',
        bullets: [
          'Well-pressed button-down as the load-bearing structure',
          'Minimalist watch as the only accent needed',
          'The look that proves you thought about all of it',
        ],
      },
      {
        title: 'The Elevation',
        bullets: [
          'Precision-cut outerwear making a statement without volume',
          'Structured trouser meeting clean sneaker: intentional contrast',
          'Cohesion that feels inevitable, never effortful',
        ],
      },
    ],
  },

  {
    slug: 'the-alchemist',
    tagline: "I'm becoming. Watch closely.",
    palette: [
      { name: 'Deep Burgundy', hex: '#800020' },
      { name: 'Midnight', hex: '#191970' },
      { name: 'Forest Green', hex: '#228B22' },
      { name: 'Aged Gold', hex: '#B8860B' },
      { name: 'Storm Grey', hex: '#717171' },
      { name: 'Burnt Umber', hex: '#8A3324' },
    ],
    signaturePieces: [
      { name: 'Textured Layers', icon: 'fabric' },
      { name: 'Mood-Driven Accessories', icon: 'jewelry' },
      { name: 'Vintage Finds', icon: 'vintage' },
      { name: 'Statement Rings', icon: 'jewelry' },
      { name: 'Pieces with Patina', icon: 'vintage' },
      { name: 'Draped Silhouettes', icon: 'dress' },
    ],
    styleIcons: [
      { name: 'Donald Glover', image: `/images/archetypes/icons/${slugify('Donald Glover')}.webp` },
      { name: 'Jared Leto', image: `/images/archetypes/icons/${slugify('Jared Leto')}.webp` },
      { name: 'Lenny Kravitz', image: `/images/archetypes/icons/${slugify('Lenny Kravitz')}.webp` },
    ],
    bodyText:
      "The Alchemist dresses from the inside out. Your wardrobe shifts with your inner landscape \u2014 dark and moody one season, warm and layered the next. You're drawn to texture, contrast, and pieces that carry emotional weight. A vintage ring, a hand-dyed scarf, a jacket that survived three creative phases. For you, getting dressed is an act of translation \u2014 transforming what you feel into what you wear.\n\nYou experience life in phases, and your style evolves alongside your inner world. Clothing becomes a tool for storytelling, exploration, and self-discovery. Nothing in your closet is random \u2014 every piece marks a moment, a mood, a transformation.",
    galleryLooks: [
      {
        title: 'The Phase',
        bullets: [
          'Textured layers that carry real emotional weight',
          'Vintage ring and draped fabric: transformation made visible',
          'A look that has lived through something',
        ],
      },
      {
        title: 'The Mood',
        bullets: [
          'Dark tones layered with warm patina details',
          'Pieces chosen for their history, not their newness',
          'Getting dressed as an act of translation',
        ],
      },
      {
        title: 'The Depth',
        bullets: [
          'Rich, complex palette that shifts in different light',
          'Hand-dyed textile detail amid structured forms',
          'Fashion as inner landscape, worn outward',
        ],
      },
    ],
  },

  {
    slug: 'the-sovereign',
    tagline: 'This is me. It always has been.',
    palette: [
      { name: 'Soft Black', hex: '#1A1A1A' },
      { name: 'Warm Grey', hex: '#808069' },
      { name: 'Cream', hex: '#FFFDD0' },
      { name: 'Deep Navy', hex: '#000040' },
      { name: 'Muted Olive', hex: '#6B8E23' },
      { name: 'Sand', hex: '#C2B280' },
    ],
    signaturePieces: [
      { name: 'Perfectly Fitted Basics', icon: 'shirt' },
      { name: 'Cashmere', icon: 'knit' },
      { name: 'Quality Denim', icon: 'trousers' },
      { name: 'Clean Leather Goods', icon: 'bag' },
      { name: 'Understated Watches', icon: 'watch' },
      { name: 'Second-Skin Pieces', icon: 'fabric' },
    ],
    styleIcons: [
      { name: 'Jay-Z', image: `/images/archetypes/icons/${slugify('Jay-Z')}.webp` },
      { name: 'Ryan Gosling', image: `/images/archetypes/icons/${slugify('Ryan Gosling')}.webp` },
      { name: 'Pharrell Williams', image: `/images/archetypes/icons/${slugify('Pharrell Williams')}.webp` },
    ],
    bodyText:
      "The Sovereign's style is the quietest and the most powerful. Nothing feels forced, nothing feels like a costume. There's a seamless quality to how you dress \u2014 every piece belongs, not because it was carefully selected, but because it simply couldn't be anything else. You've moved past performance and arrived at something more rare: pure alignment.\n\nYour clothes don't make a statement \u2014 they make a presence. You integrate many influences without losing coherence. Trends don't define you, and you don't react strongly to them. When something feels right, you wear it. When it doesn't, you don't. That simplicity is your superpower.",
    galleryLooks: [
      {
        title: 'The Alignment',
        bullets: [
          'Perfectly fitted basics that feel like a second skin',
          'Nothing here is trying — it simply is',
          'The wardrobe version of arriving',
        ],
      },
      {
        title: 'The Quiet',
        bullets: [
          'Cashmere and clean leather: refined without announcement',
          'Understated watch as the only statement needed',
          'Style that whispers and still commands the room',
        ],
      },
      {
        title: 'The Presence',
        bullets: [
          'Quality denim fitted from years of living in it',
          'Warm grey and cream: the palette of pure certainty',
          'The look that has moved past needing to explain itself',
        ],
      },
    ],
  },
];

// ── Lookup helper ─────────────────────────────────────────

/** Get visual data for a single archetype by slug */
export function getVisualsForSlug(slug: string): ArchetypeVisuals | undefined {
  return archetypeVisuals.find((v) => v.slug === slug);
}
