/**
 * Archetype "With Shades Of" Permutation Descriptions
 *
 * 62 unique combinations: 42 feminine (7x6) + 20 masculine (5x4).
 * Each entry describes what it means to be {primary} with shades of {secondary}.
 *
 * Key format: "{primary-slug}+{secondary-slug}"
 * Example:   "the-siren+the-muse"
 */

export interface ShadeDescription {
  primary: string;      // slug of primary archetype
  secondary: string;    // slug of secondary archetype
  primaryName: string;
  secondaryName: string;
  gender: 'feminine' | 'masculine';
  description: string;
}

// ─────────────────────────────────────────────────────────
// FEMININE PERMUTATIONS (7 primary × 6 secondary = 42)
// ─────────────────────────────────────────────────────────

const feminineShades: ShadeDescription[] = [
  // ── THE SIREN as primary ──────────────────────────────
  {
    primary: 'the-siren',
    secondary: 'the-muse',
    primaryName: 'The Siren',
    secondaryName: 'The Muse',
    gender: 'feminine',
    description:
      'Your foundation is magnetic and body-confident — you dress to celebrate your form without apology. But there is a romantic softness woven through your boldness: a slip dress in dusty rose instead of red, a vintage locket layered with your statement gold, florals that feel more seductive than sweet. You are the woman who turns heads with a bodycon silhouette and then surprises with a dreamy, windswept texture that invites a second look.',
  },
  {
    primary: 'the-siren',
    secondary: 'the-warrior',
    primaryName: 'The Siren',
    secondaryName: 'The Warrior',
    gender: 'feminine',
    description:
      'You lead with allure but back it with steel. Your wardrobe merges sensuality with sharp structure — think form-fitting blazer dresses, high-slit skirts paired with strong shoulders, and heels that could close a deal. There is nothing accidental about your look: every curve is celebrated, but every line is deliberate. You are equal parts desire and discipline, and the room feels both when you walk in.',
  },
  {
    primary: 'the-siren',
    secondary: 'the-enchantress',
    primaryName: 'The Siren',
    secondaryName: 'The Enchantress',
    gender: 'feminine',
    description:
      'Your magnetism runs deep — it is not just physical, but psychological. You combine the Siren\'s body-confident boldness with the Enchantress\'s shadowed mystery: velvet bodycon, smoky layered jewelry, dark lace over warm skin, a burgundy lip instead of red. You suggest more than you reveal, and the tension between what is visible and what is hidden is exactly where your power lives.',
  },
  {
    primary: 'the-siren',
    secondary: 'the-creator',
    primaryName: 'The Siren',
    secondaryName: 'The Creator',
    gender: 'feminine',
    description:
      'You are fearlessly sensual and fearlessly original. Your wardrobe celebrates your body but refuses to be predictable — a form-fitted dress in an unexpected print, statement earrings that start conversations, colors combined in ways nobody else would dare. Where a pure Siren leans classic seduction, your Creator shade adds an artistic edge that makes your look feel curated rather than conventional.',
  },
  {
    primary: 'the-siren',
    secondary: 'the-empress',
    primaryName: 'The Siren',
    secondaryName: 'The Empress',
    gender: 'feminine',
    description:
      'Your allure is grounded in quality rather than flash. You lead with the Siren\'s magnetic confidence, but your Empress shade means every piece earns its place through craftsmanship — silk that drapes perfectly against your form, real gold that catches the light, leather that ages beautifully. Your sensuality feels expensive and unhurried, like a woman who has never needed to try because quality speaks for itself.',
  },
  {
    primary: 'the-siren',
    secondary: 'the-angelic-one',
    primaryName: 'The Siren',
    secondaryName: 'The Angelic One',
    gender: 'feminine',
    description:
      'There is something unexpectedly gentle in your boldness. You lead with the Siren\'s confident silhouettes, but softened with angelic lightness — blush tones instead of red, sheer fabrics that whisper rather than shout, dainty jewelry mixed with your statement pieces. The result is a sensuality that feels luminous rather than fiery, as though your warmth comes from inner light rather than heat.',
  },

  // ── THE MUSE as primary ───────────────────────────────
  {
    primary: 'the-muse',
    secondary: 'the-siren',
    primaryName: 'The Muse',
    secondaryName: 'The Siren',
    gender: 'feminine',
    description:
      'You are a romantic at heart, but your romance has a pulse. Where a pure Muse floats through the world in watercolors, your Siren shade adds warmth and intention — a flowy dress that also celebrates your figure, a deeper neckline on a vintage blouse, richer warm tones mixing with your pastels. Your dreamy aesthetic has an undercurrent of confidence that makes it feel lived-in rather than purely ethereal.',
  },
  {
    primary: 'the-muse',
    secondary: 'the-warrior',
    primaryName: 'The Muse',
    secondaryName: 'The Warrior',
    gender: 'feminine',
    description:
      'Your softness has a spine. You live in romantic fabrics and flowing silhouettes, but your Warrior shade gives you an instinct for structure — a tailored blazer thrown over your slip dress, sharp-cut trousers balanced with a delicate blouse, or a strong trench coat that frames your feminine layers. You prove that dreamy and decisive are not opposites; they are complementary forces.',
  },
  {
    primary: 'the-muse',
    secondary: 'the-enchantress',
    primaryName: 'The Muse',
    secondaryName: 'The Enchantress',
    gender: 'feminine',
    description:
      'Your dreaminess has a darker, more mysterious edge. Where a pure Muse lives in pastels and morning light, your Enchantress shade pulls you toward twilight — dusty mauves instead of blush, midnight florals, vintage lace with a gothic whisper, layered jewelry that feels like a secret. You are the romantic who reads poetry at midnight, and your wardrobe tells that story.',
  },
  {
    primary: 'the-muse',
    secondary: 'the-creator',
    primaryName: 'The Muse',
    secondaryName: 'The Creator',
    gender: 'feminine',
    description:
      'Your romantic vision is a canvas — and you paint it with extraordinary originality. You start from the Muse\'s soft, dreamy foundation but layer it with the Creator\'s unexpected combinations: vintage prints that don\'t traditionally match but somehow harmonize, artisan jewelry mixed with delicate chains, color pairings that feel like a mood board come to life. Your style is whimsical, deeply personal, and never boring.',
  },
  {
    primary: 'the-muse',
    secondary: 'the-empress',
    primaryName: 'The Muse',
    secondaryName: 'The Empress',
    gender: 'feminine',
    description:
      'Your romantic nature is elevated by impeccable taste. You gravitate toward the Muse\'s flowing silhouettes and soft textures, but your Empress shade ensures every piece is quality-first — real silk instead of polyester, cashmere over acrylic, gold that does not tarnish. Your dreaminess feels luxurious and grounded, like a woman who builds her romantic wardrobe on a foundation of lasting investment pieces.',
  },
  {
    primary: 'the-muse',
    secondary: 'the-angelic-one',
    primaryName: 'The Muse',
    secondaryName: 'The Angelic One',
    gender: 'feminine',
    description:
      'You are softness amplified — a double dose of feminine gentleness that feels luminous and timeless. Your Muse\'s romance blends seamlessly with the Angelic One\'s purity: cream-on-ivory layering, pearl accessories with vintage charm, airy fabrics in the lightest palette imaginable. You are the woman who looks like she stepped out of a painting, and every room you enter feels a little more peaceful.',
  },

  // ── THE WARRIOR as primary ────────────────────────────
  {
    primary: 'the-warrior',
    secondary: 'the-siren',
    primaryName: 'The Warrior',
    secondaryName: 'The Siren',
    gender: 'feminine',
    description:
      'Your power dressing has a magnetic edge. You lead with the Warrior\'s sharp tailoring and commanding silhouettes, but your Siren shade means those pieces always celebrate your body — trousers that fit like they were cut for you, blazers that cinch at the waist, necklines that suggest confidence beyond the boardroom. You are structured sensuality, and your presence is impossible to ignore.',
  },
  {
    primary: 'the-warrior',
    secondary: 'the-muse',
    primaryName: 'The Warrior',
    secondaryName: 'The Muse',
    gender: 'feminine',
    description:
      'Beneath your armor is an artist\'s heart. Your wardrobe is built on the Warrior\'s strong foundations — structured blazers, clean lines, sharp tailoring — but your Muse shade surfaces in unexpected softness: a romantic blouse under a power blazer, a flowy midi skirt grounding a leather jacket, soft florals printed on structured fabrics. You prove that strength and poetry can share the same outfit.',
  },
  {
    primary: 'the-warrior',
    secondary: 'the-enchantress',
    primaryName: 'The Warrior',
    secondaryName: 'The Enchantress',
    gender: 'feminine',
    description:
      'Your commanding presence carries an undertone of dark intrigue. You dress with the Warrior\'s clean precision, but your Enchantress shade darkens the palette and deepens the mood — black-on-black with textural contrast, sharp tailoring in midnight navy and deep plum, statement jewelry that feels powerful and mysterious simultaneously. You walk into a room and people notice your authority first, then sense there is much more beneath.',
  },
  {
    primary: 'the-warrior',
    secondary: 'the-creator',
    primaryName: 'The Warrior',
    secondaryName: 'The Creator',
    gender: 'feminine',
    description:
      'Your discipline has a wildcard streak. You build from the Warrior\'s strong, minimal foundation — structured silhouettes, clean lines, intentional dressing — but your Creator shade introduces unexpected elements: an avant-garde accessory, a bold color interrupting your neutrals, mixed textures that break the rules you otherwise follow. You are controlled chaos in the best way, and the contrast is what makes your style unforgettable.',
  },
  {
    primary: 'the-warrior',
    secondary: 'the-empress',
    primaryName: 'The Warrior',
    secondaryName: 'The Empress',
    gender: 'feminine',
    description:
      'Your power is quiet and built to last. Where a pure Warrior can lean aggressive, your Empress shade softens the edges with warmth and quality — cashmere replacing hard leather, warm neutrals tempering your high-contrast palette, gold accents that feel nurturing rather than sharp. You dress like a woman who has nothing to prove but has built something substantial, and your wardrobe reflects that earned confidence.',
  },
  {
    primary: 'the-warrior',
    secondary: 'the-angelic-one',
    primaryName: 'The Warrior',
    secondaryName: 'The Angelic One',
    gender: 'feminine',
    description:
      'Your strength has a gentleness that disarms. You lead with the Warrior\'s structured silhouettes and sharp tailoring, but your Angelic shade brings light — softer fabrics within structured cuts, a palette that includes ivory and blush alongside your charcoal and navy, delicate jewelry paired with your power blazers. You are the woman who commands a room and then makes everyone in it feel completely at ease.',
  },

  // ── THE ENCHANTRESS as primary ────────────────────────
  {
    primary: 'the-enchantress',
    secondary: 'the-siren',
    primaryName: 'The Enchantress',
    secondaryName: 'The Siren',
    gender: 'feminine',
    description:
      'Your mystery is charged with heat. You operate in the Enchantress\'s world of deep tones, layered textures, and gothic romance, but your Siren shade brings body-conscious confidence to the darkness — velvet that clings, lace that reveals as much as it conceals, silhouettes that celebrate your form beneath the shadow. You are dark glamour with unmistakable sensual energy.',
  },
  {
    primary: 'the-enchantress',
    secondary: 'the-muse',
    primaryName: 'The Enchantress',
    secondaryName: 'The Muse',
    gender: 'feminine',
    description:
      'Your darkness has a romantic, almost literary quality. You live in the Enchantress\'s deep jewel tones and intricate details, but your Muse shade adds a dreamy, poetic layer — vintage lace that feels like a love letter, soft flowing layers in dark florals, dusty mauve and faded violet alongside your midnight navy. Your mystery is less sharp and more atmospheric, like a gothic novel you cannot put down.',
  },
  {
    primary: 'the-enchantress',
    secondary: 'the-warrior',
    primaryName: 'The Enchantress',
    secondaryName: 'The Warrior',
    gender: 'feminine',
    description:
      'Your intrigue is backed by unmistakable force. You dress in the Enchantress\'s dark palette and moody textures, but your Warrior shade brings sharp structure — strong shoulders under velvet, clean tailoring in deep plum, precision-cut outerwear in your darkest neutrals. Where a pure Enchantress suggests, you command. Your mystery is not passive; it is a deliberate weapon, wielded with intention.',
  },
  {
    primary: 'the-enchantress',
    secondary: 'the-creator',
    primaryName: 'The Enchantress',
    secondaryName: 'The Creator',
    gender: 'feminine',
    description:
      'Your dark aesthetic is anything but conventional. You start with the Enchantress\'s deep tones and layered complexity, but your Creator shade makes it wildly original — unexpected textile combinations within your dark palette, vintage finds that carry emotional weight, accessories that tell stories most people would never guess. Your wardrobe is a dark mood board of obsessions, and every outfit is a curated art installation.',
  },
  {
    primary: 'the-enchantress',
    secondary: 'the-empress',
    primaryName: 'The Enchantress',
    secondaryName: 'The Empress',
    gender: 'feminine',
    description:
      'Your mystery is grounded in unmistakable luxury. You inhabit the Enchantress\'s world of deep tones and intricate details, but your Empress shade ensures that every piece exudes quality — real velvet, genuine leather, jewelry that is heirloom-worthy. Your darkness never feels costume-like because it is built on a foundation of warmth and permanence. You are the woman whose wardrobe whispers old money in the language of midnight.',
  },
  {
    primary: 'the-enchantress',
    secondary: 'the-angelic-one',
    primaryName: 'The Enchantress',
    secondaryName: 'The Angelic One',
    gender: 'feminine',
    description:
      'You hold the rare tension between shadow and light. Your foundation is the Enchantress\'s dark allure, but your Angelic shade introduces unexpected luminosity — a cream silk peeking from beneath dark lace, pearl accents softening your layered jewelry, moments of sheer white breaking the deep palette. The contrast is striking and deeply personal, like a woman who carries both midnight and dawn in the same outfit.',
  },

  // ── THE CREATOR as primary ────────────────────────────
  {
    primary: 'the-creator',
    secondary: 'the-siren',
    primaryName: 'The Creator',
    secondaryName: 'The Siren',
    gender: 'feminine',
    description:
      'Your artistry has a confident, sensual heartbeat. You build from the Creator\'s eclectic, rule-breaking foundation — mixed prints, bold color, unexpected pairings — but your Siren shade ensures your body is always part of the story. A creative vintage look that also celebrates your figure, bold accessories that draw the eye to your best features. You are wearable art with a pulse, and your style is as alive as you are.',
  },
  {
    primary: 'the-creator',
    secondary: 'the-muse',
    primaryName: 'The Creator',
    secondaryName: 'The Muse',
    gender: 'feminine',
    description:
      'Your creativity is steeped in romance and beauty. You approach fashion with the Creator\'s fearless originality, but your Muse shade pulls you toward the poetic — vintage florals in unexpected combinations, dreamy layering with artistic flair, soft textures paired with bold statement pieces. Your style feels like a love letter to beauty itself, written in a language that only you speak fluently.',
  },
  {
    primary: 'the-creator',
    secondary: 'the-warrior',
    primaryName: 'The Creator',
    secondaryName: 'The Warrior',
    gender: 'feminine',
    description:
      'Your creative vision has backbone. You live in the Creator\'s world of bold combinations and artistic expression, but your Warrior shade provides structure — your mixed prints are anchored by a sharp blazer, your color experiments have a clean silhouette, your eclecticism always feels intentional rather than chaotic. You are the artist who edits with precision, and the result is creative work that commands respect.',
  },
  {
    primary: 'the-creator',
    secondary: 'the-enchantress',
    primaryName: 'The Creator',
    secondaryName: 'The Enchantress',
    gender: 'feminine',
    description:
      'Your creativity lives in the shadows. You have the Creator\'s bold artistic instinct, but your Enchantress shade darkens your palette and deepens your references — mixed textures in moody jewel tones, vintage pieces with gothic undertones, accessories that feel like they carry secrets. Your style is a dark gallery opening: visually daring, emotionally charged, and impossible to walk past without stopping.',
  },
  {
    primary: 'the-creator',
    secondary: 'the-empress',
    primaryName: 'The Creator',
    secondaryName: 'The Empress',
    gender: 'feminine',
    description:
      'Your artistry is backed by investment-level taste. You approach fashion with the Creator\'s fearless experimentation, but your Empress shade means your canvas is luxury — mixed prints in silk and cashmere, bold combinations anchored by a heritage bag, creative outfits built on a foundation of quality that elevates every risk you take. You prove that eclectic and elegant are not contradictions.',
  },
  {
    primary: 'the-creator',
    secondary: 'the-angelic-one',
    primaryName: 'The Creator',
    secondaryName: 'The Angelic One',
    gender: 'feminine',
    description:
      'Your creative expression has an unexpected gentleness. You lead with the Creator\'s bold originality, but your Angelic shade softens the edges — light, airy fabrics mixed into your eclectic layering, softer tones tempering your bold palette, delicate handcrafted details alongside your statement pieces. Your art is not aggressive; it is luminous and inviting, and people are drawn to its warmth as much as its uniqueness.',
  },

  // ── THE EMPRESS as primary ────────────────────────────
  {
    primary: 'the-empress',
    secondary: 'the-siren',
    primaryName: 'The Empress',
    secondaryName: 'The Siren',
    gender: 'feminine',
    description:
      'Your grounded luxury has an alluring undercurrent. You build your wardrobe on the Empress\'s elevated basics and warm neutrals, but your Siren shade means those pieces always celebrate your form — silk that drapes against your body, cashmere knits that fit beautifully, cuts that are classic but never shapeless. You are quiet luxury with a magnetic confidence that people sense before they understand.',
  },
  {
    primary: 'the-empress',
    secondary: 'the-muse',
    primaryName: 'The Empress',
    secondaryName: 'The Muse',
    gender: 'feminine',
    description:
      'Your abundant warmth carries a romantic sensibility. You dress from the Empress\'s quality-first, neutral-based wardrobe, but your Muse shade introduces softness — flowing silhouettes in your warm palette, vintage-inspired details on your elevated basics, a touch of floral or lace that makes your tailored pieces feel poetic. You are the woman whose home and wardrobe both feel like a warm, beautiful embrace.',
  },
  {
    primary: 'the-empress',
    secondary: 'the-warrior',
    primaryName: 'The Empress',
    secondaryName: 'The Warrior',
    gender: 'feminine',
    description:
      'Your nurturing elegance has a decisive edge. You build from the Empress\'s luxe elevated basics, but your Warrior shade brings sharp structure — perfectly tailored trousers, strong-shouldered coats, crisp lines within your warm palette. You feel at home in cashmere and silk, but there is nothing soft about your silhouette. You radiate the energy of a woman who built her abundance through discipline and intention.',
  },
  {
    primary: 'the-empress',
    secondary: 'the-enchantress',
    primaryName: 'The Empress',
    secondaryName: 'The Enchantress',
    gender: 'feminine',
    description:
      'Your warm, grounded luxury hides unexpected depth. You live in the Empress\'s world of elevated neutrals and timeless quality, but your Enchantress shade adds darker notes — deep cognac instead of camel, gold jewelry with intricate gothic detailing, rich velvet textures in your neutral wardrobe. You are warmth with complexity, luxury with mystery, and the combination is quietly intoxicating.',
  },
  {
    primary: 'the-empress',
    secondary: 'the-creator',
    primaryName: 'The Empress',
    secondaryName: 'The Creator',
    gender: 'feminine',
    description:
      'Your elevated basics have an artistic soul. You anchor your wardrobe in the Empress\'s quality neutrals and timeless investment pieces, but your Creator shade introduces considered bursts of originality — an artisan-crafted accessory, an unexpected texture pairing, a single piece of wearable art within an otherwise classic outfit. You prove that grounded taste and creative vision can coexist beautifully.',
  },
  {
    primary: 'the-empress',
    secondary: 'the-angelic-one',
    primaryName: 'The Empress',
    secondaryName: 'The Angelic One',
    gender: 'feminine',
    description:
      'Your warmth is luminous and impossibly gentle. You dress from the Empress\'s foundation of quality neutrals and elevated basics, but your Angelic shade pulls your palette toward its lightest expressions — ivory cashmere, champagne silk, soft gold, cream linen. Everything feels light, warm, and calming. You are the woman who makes everyone feel welcome simply by the energy your presence — and your wardrobe — radiates.',
  },

  // ── THE ANGELIC ONE as primary ────────────────────────
  {
    primary: 'the-angelic-one',
    secondary: 'the-siren',
    primaryName: 'The Angelic One',
    secondaryName: 'The Siren',
    gender: 'feminine',
    description:
      'Your gentle luminosity has a quietly confident edge. You live in the Angelic One\'s world of soft whites, creams, and gentle fabrics, but your Siren shade means your silhouettes know your body — a slip dress in ivory that skims your figure, a sheer layer that reveals a confident décolletage, soft pink that manages to feel warm rather than innocent. You are light with heat, gentleness with awareness.',
  },
  {
    primary: 'the-angelic-one',
    secondary: 'the-muse',
    primaryName: 'The Angelic One',
    secondaryName: 'The Muse',
    gender: 'feminine',
    description:
      'You are double-distilled softness with a romantic heart. Your Angelic One\'s calm purity merges seamlessly with the Muse\'s dreamy romance — vintage-inspired details in cloud-soft tones, flowing silhouettes that feel both ethereal and poetic, delicate florals printed on the lightest fabrics. Your wardrobe reads like a sunlit love letter, and you dress as though beauty is not a choice but a natural state of being.',
  },
  {
    primary: 'the-angelic-one',
    secondary: 'the-warrior',
    primaryName: 'The Angelic One',
    secondaryName: 'The Warrior',
    gender: 'feminine',
    description:
      'Your gentleness has quiet steel behind it. You lead with the Angelic One\'s soft palette and airy fabrics, but your Warrior shade introduces structure — a perfectly tailored white blazer, crisp lines in your light palette, a minimalist approach that is serene and intentional rather than purely soft. You are the calm that comes not from passivity but from inner strength, and your wardrobe reflects that clarity.',
  },
  {
    primary: 'the-angelic-one',
    secondary: 'the-enchantress',
    primaryName: 'The Angelic One',
    secondaryName: 'The Enchantress',
    gender: 'feminine',
    description:
      'You are the most surprising blend in the feminine framework. Your angelic lightness is haunted — in the most beautiful way — by the Enchantress\'s depth. Cream lace with gothic-inspired detailing, pearl jewelry layered with darkened silver, sheer white fabrics that hint at shadow beneath. You hold the tension between innocence and knowing, between dawn and dusk, and it makes you utterly fascinating.',
  },
  {
    primary: 'the-angelic-one',
    secondary: 'the-creator',
    primaryName: 'The Angelic One',
    secondaryName: 'The Creator',
    gender: 'feminine',
    description:
      'Your gentle aesthetic has a playful, artistic edge. You dress from the Angelic One\'s foundation of soft whites and light fabrics, but your Creator shade introduces whimsy — an unexpected handmade accessory, a subtle print in your light palette, creative layering that turns simple pieces into something memorable. You are the gallery in natural light: calm space with art that makes you stop and look twice.',
  },
  {
    primary: 'the-angelic-one',
    secondary: 'the-empress',
    primaryName: 'The Angelic One',
    secondaryName: 'The Empress',
    gender: 'feminine',
    description:
      'Your serene aesthetic is anchored in unmistakable quality. You live in the Angelic One\'s world of ivory, cream, and gentle softness, but your Empress shade ensures every piece is invested in — real silk, fine cashmere, quality linen, genuine pearl. Nothing in your wardrobe is disposable. You are calm, warm, and quietly luxurious, dressed as though peace itself has a uniform and you are wearing it.',
  },
];

// ─────────────────────────────────────────────────────────
// MASCULINE PERMUTATIONS (5 primary × 4 secondary = 20)
// ─────────────────────────────────────────────────────────

const masculineShades: ShadeDescription[] = [
  // ── THE PROTECTOR as primary ──────────────────────────
  {
    primary: 'the-protector',
    secondary: 'the-maverick',
    primaryName: 'The Protector',
    secondaryName: 'The Maverick',
    gender: 'masculine',
    description:
      'Your foundation is steady and reliable — you build your wardrobe on pieces that last and return to what works. But your Maverick shade means you are not entirely predictable: an unexpected boot choice, a vintage jacket that does not quite match the rest, a single accessory that hints at a wider world beneath the practical surface. You are the dependable man with a surprise in his pocket.',
  },
  {
    primary: 'the-protector',
    secondary: 'the-architect',
    primaryName: 'The Protector',
    secondaryName: 'The Architect',
    gender: 'masculine',
    description:
      'Your reliability is not accidental — it is engineered. You combine the Protector\'s grounded, ready-for-anything approach with the Architect\'s precision: every piece chosen for its construction quality, its fit, and its place in a cohesive system. Your wardrobe is small, curated, and bulletproof. You are the man whose style looks effortless because every decision was intentional.',
  },
  {
    primary: 'the-protector',
    secondary: 'the-alchemist',
    primaryName: 'The Protector',
    secondaryName: 'The Alchemist',
    gender: 'masculine',
    description:
      'Your foundation is steady and reliable — you build your wardrobe on pieces that last. But beneath that grounded exterior, there is an inner world that occasionally surfaces through unexpected texture choices, a mood-driven accessory, or a vintage piece that carries emotional weight. You are the man who wears the same trusted boots every day but swaps out his scarf based on how he is feeling.',
  },
  {
    primary: 'the-protector',
    secondary: 'the-sovereign',
    primaryName: 'The Protector',
    secondaryName: 'The Sovereign',
    gender: 'masculine',
    description:
      'Your groundedness runs deeper than habit — it comes from genuine self-knowledge. You have the Protector\'s preference for dependable, quality pieces, but your Sovereign shade means your choices carry a quiet alignment that goes beyond practicality. Nothing feels forced, nothing feels like a costume. You dress to be ready because readiness is an expression of who you actually are, not a strategy.',
  },

  // ── THE MAVERICK as primary ───────────────────────────
  {
    primary: 'the-maverick',
    secondary: 'the-protector',
    primaryName: 'The Maverick',
    secondaryName: 'The Protector',
    gender: 'masculine',
    description:
      'Your freedom has a foundation. You lead with the Maverick\'s restless creativity and refusal to be categorized, but your Protector shade gives you a grounding instinct — durable fabrics beneath your bold choices, quality construction under the statement layers, a few reliable staples that anchor even your wildest combinations. You are the adventurer who always makes it home.',
  },
  {
    primary: 'the-maverick',
    secondary: 'the-architect',
    primaryName: 'The Maverick',
    secondaryName: 'The Architect',
    gender: 'masculine',
    description:
      'Your rebellion is calculated. You have the Maverick\'s bold, boundary-pushing instinct, but your Architect shade brings intentional structure — your statement pieces sit within a cohesive framework, your remixed trends follow an internal logic that only you can see. Where a pure Maverick is chaos, you are controlled disruption. Every rule you break, you break on purpose.',
  },
  {
    primary: 'the-maverick',
    secondary: 'the-alchemist',
    primaryName: 'The Maverick',
    secondaryName: 'The Alchemist',
    gender: 'masculine',
    description:
      'Your style is driven by both external freedom and internal evolution. You combine the Maverick\'s playful, trend-bending originality with the Alchemist\'s emotional depth — your bold choices are not just aesthetically daring, they mirror inner shifts and creative phases. You are the man whose wardrobe is a living journal, constantly rewritten in real time, always refusing to repeat a chapter.',
  },
  {
    primary: 'the-maverick',
    secondary: 'the-sovereign',
    primaryName: 'The Maverick',
    secondaryName: 'The Sovereign',
    gender: 'masculine',
    description:
      'Your individuality does not come from effort — it comes from alignment. You have the Maverick\'s bold, category-defying approach, but your Sovereign shade gives it a grounded ease that pure Mavericks rarely achieve. You are not trying to stand out; you simply cannot help it. Your style is effortlessly unique because it flows from a deeply integrated sense of self rather than a need to be different.',
  },

  // ── THE ARCHITECT as primary ──────────────────────────
  {
    primary: 'the-architect',
    secondary: 'the-protector',
    primaryName: 'The Architect',
    secondaryName: 'The Protector',
    gender: 'masculine',
    description:
      'Your precision is built on bedrock practicality. You lead with the Architect\'s intentional, curated approach — clean lines, considered construction, controlled palette — but your Protector shade adds a durability-first instinct. Your minimalist watch is also waterproof. Your tailored jacket is also all-weather. Every design choice serves double duty: it looks intentional and it works in the real world.',
  },
  {
    primary: 'the-architect',
    secondary: 'the-maverick',
    primaryName: 'The Architect',
    secondaryName: 'The Maverick',
    gender: 'masculine',
    description:
      'Your controlled aesthetic has a rogue impulse. You build from the Architect\'s precise, clean-lined foundation, but your Maverick shade introduces calculated disruptions — an unexpected color in your monochrome, a statement sneaker beneath your tailored trousers, a single vintage accent that breaks the grid without breaking the composition. You design the rules and then bend exactly one of them, and the result is magnetic.',
  },
  {
    primary: 'the-architect',
    secondary: 'the-alchemist',
    primaryName: 'The Architect',
    secondaryName: 'The Alchemist',
    gender: 'masculine',
    description:
      'Your precision has emotional intelligence. You dress with the Architect\'s structure and intentionality, but your Alchemist shade means your controlled aesthetic shifts subtly with your inner state — darker tones during introspective seasons, warmer textures when you are feeling expansive, a piece with personal history anchoring an otherwise perfectly curated outfit. You are the man whose style is a blueprint, but the blueprint evolves.',
  },
  {
    primary: 'the-architect',
    secondary: 'the-sovereign',
    primaryName: 'The Architect',
    secondaryName: 'The Sovereign',
    gender: 'masculine',
    description:
      'Your intentionality feels effortless. Where a pure Architect can appear rigid, your Sovereign shade dissolves the tension — your clean lines and controlled palette feel natural rather than studied, your precision reads as self-knowledge rather than performance. You are the man who dresses with total clarity, and it looks like he simply woke up that way. That ease is the hardest thing to achieve, and you wear it daily.',
  },

  // ── THE ALCHEMIST as primary ──────────────────────────
  {
    primary: 'the-alchemist',
    secondary: 'the-protector',
    primaryName: 'The Alchemist',
    secondaryName: 'The Protector',
    gender: 'masculine',
    description:
      'Your emotional depth is anchored by quiet reliability. You dress from the Alchemist\'s mood-driven, evolving wardrobe, but your Protector shade gives you a core of dependable pieces — trusted boots, a heritage jacket, well-worn denim — that ground your transformations. Even in your most expressive phases, there is always a steady baseline that says: I may be changing, but I am still here.',
  },
  {
    primary: 'the-alchemist',
    secondary: 'the-maverick',
    primaryName: 'The Alchemist',
    secondaryName: 'The Maverick',
    gender: 'masculine',
    description:
      'Your inner evolution meets outward audacity. You combine the Alchemist\'s emotionally driven, phase-based wardrobe with the Maverick\'s fearless individuality — when your inner world shifts, your outward expression does not just adjust, it leaps. Bold vintage finds appear during introspective phases, statement pieces emerge from emotional breakthroughs. Your style is a living autobiography written in real time, and nobody can predict the next chapter.',
  },
  {
    primary: 'the-alchemist',
    secondary: 'the-architect',
    primaryName: 'The Alchemist',
    secondaryName: 'The Architect',
    gender: 'masculine',
    description:
      'Your emotional fluidity is expressed through deliberate design. You feel the Alchemist\'s pull toward mood-driven dressing and creative transformation, but your Architect shade provides structure — your evolving phases have clear aesthetic through lines, your texture experiments follow an internal logic, your emotional wardrobe shifts are curated rather than chaotic. You are the artist who builds with precision.',
  },
  {
    primary: 'the-alchemist',
    secondary: 'the-sovereign',
    primaryName: 'The Alchemist',
    secondaryName: 'The Sovereign',
    gender: 'masculine',
    description:
      'Your transformations do not scatter you — they deepen you. You have the Alchemist\'s mood-driven evolution and emotional depth, but your Sovereign shade provides an unshakable center. Your style moves through phases, but there is a coherent thread that never breaks. Each transformation feels like a return to yourself rather than a departure from it. You are the man whose many layers all belong to the same person.',
  },

  // ── THE SOVEREIGN as primary ──────────────────────────
  {
    primary: 'the-sovereign',
    secondary: 'the-protector',
    primaryName: 'The Sovereign',
    secondaryName: 'The Protector',
    gender: 'masculine',
    description:
      'Your alignment has a practical foundation. You carry the Sovereign\'s effortless self-possession, but your Protector shade means your sense of self expresses through deeply reliable choices — quality basics that feel like a second skin, pieces built for longevity, a wardrobe that works as hard as you do. You are the man whose quiet power is inseparable from his quiet readiness. Nothing is forced; everything is prepared.',
  },
  {
    primary: 'the-sovereign',
    secondary: 'the-maverick',
    primaryName: 'The Sovereign',
    secondaryName: 'The Maverick',
    gender: 'masculine',
    description:
      'Your self-possession has an unexpected edge. You lead with the Sovereign\'s centered calm and integrated style, but your Maverick shade introduces moments of boldness that feel natural rather than performative — an unexpected accessory, a color that breaks convention, a piece that only you could make look effortless. You do not try to surprise; you simply refuse to be entirely predicted.',
  },
  {
    primary: 'the-sovereign',
    secondary: 'the-architect',
    primaryName: 'The Sovereign',
    secondaryName: 'The Architect',
    gender: 'masculine',
    description:
      'Your effortless alignment is supported by deliberate design sense. You carry the Sovereign\'s natural self-possession, but your Architect shade means you also appreciate structure, precision, and visual cohesion — clean lines that feel chosen, a palette that is controlled, details that are considered. You are the rare man whose ease is real but whose taste is also immaculate. Nothing is overthought; everything is exactly right.',
  },
  {
    primary: 'the-sovereign',
    secondary: 'the-alchemist',
    primaryName: 'The Sovereign',
    secondaryName: 'The Alchemist',
    gender: 'masculine',
    description:
      'Your grounded wholeness has unexpected emotional range. You carry the Sovereign\'s quiet, integrated self-possession, but your Alchemist shade means your alignment is not static — it breathes, shifts, and evolves with your inner life. A darker palette in a reflective season, warmer textures during periods of growth. You are the man who is always himself, but himself is a living, evolving thing, and his wardrobe honors that.',
  },
];

// ─────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────

/** All 62 shade descriptions */
export const allShades: ShadeDescription[] = [
  ...feminineShades,
  ...masculineShades,
];

/**
 * Lookup map: "primary-slug+secondary-slug" -> ShadeDescription
 * Use this for O(1) access in the page template.
 */
export const shadeMap = new Map<string, ShadeDescription>(
  allShades.map((s) => [`${s.primary}+${s.secondary}`, s]),
);

/**
 * Get all shade descriptions for a given primary archetype.
 * Returns an array of ShadeDescription objects (one per secondary).
 */
export function getShadesForPrimary(primarySlug: string): ShadeDescription[] {
  return allShades.filter((s) => s.primary === primarySlug);
}

/**
 * Get a specific shade description.
 * Returns undefined if the combination does not exist.
 */
export function getShade(
  primarySlug: string,
  secondarySlug: string,
): ShadeDescription | undefined {
  return shadeMap.get(`${primarySlug}+${secondarySlug}`);
}
