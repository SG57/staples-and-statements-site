# Image Playbook — Archetype Visual Assets

> **Date:** 2026-03-11
> **Image directory:** `public/images/archetypes/`
> **Naming convention:** `{slug}-{1|2|3}.webp` for card images, `ensemble-{gender}-{hero|cards}.webp` for backgrounds
> **Format:** WebP, quality 85-90, minimum 2400px wide

---

## Current Image Inventory

### Ensemble Background Images (4 total)

| File | Purpose | Status |
|---|---|---|
| `ensemble-feminine-hero.webp` | Feminine archetypes page hero backdrop | OK |
| `ensemble-feminine-cards.webp` | Feminine archetypes card section backdrop | OK |
| `ensemble-masculine-hero.webp` | Masculine archetypes page hero backdrop | NEEDS REGENERATION |
| `ensemble-masculine-cards.webp` | Masculine archetypes card section backdrop | NEEDS REGENERATION |

**Masculine ensemble issue:** These images were generated depicting 5 men representing The Architect, The Maverick, The Artisan, The Classic, and The Explorer. Three of those archetypes are wrong — they should be The Protector, The Alchemist, and The Sovereign. The visual energy of the ensemble is likely wrong since the prompt characters were based on incorrect archetypes.

### Feminine Card Images (21 total — complete set)

| Archetype | Image 1 | Image 2 | Image 3 | Status |
|---|---|---|---|---|
| The Siren | `the-siren-1.webp` | `the-siren-2.webp` | `the-siren-3.webp` | COMPLETE |
| The Muse | `the-muse-1.webp` | `the-muse-2.webp` | `the-muse-3.webp` | COMPLETE |
| The Warrior | `the-warrior-1.webp` | `the-warrior-2.webp` | `the-warrior-3.webp` | COMPLETE |
| The Enchantress | `the-enchantress-1.webp` | `the-enchantress-2.webp` | `the-enchantress-3.webp` | COMPLETE |
| The Creator | `the-creator-1.webp` | `the-creator-2.webp` | `the-creator-3.webp` | COMPLETE |
| The Empress | `the-empress-1.webp` | `the-empress-2.webp` | `the-empress-3.webp` | REVIEW NEEDED |
| The Angelic One | `the-angelic-one-1.webp` | `the-angelic-one-2.webp` | `the-angelic-one-3.webp` | COMPLETE |

**Empress image concern:** The Empress card images were generated with the "regal, commanding, jewel-toned" energy. The canonical Empress is "nurturing, grounding, abundant" with warm neutrals. The existing images may still work visually (luxury is luxury) but the color palette and mood will likely skew too regal/jewel-toned. **Recommendation:** Review the existing images after body content is corrected. If they feature heavy jewel tones (emerald, burgundy, royal blue), regenerate with the warm neutral palette.

### Masculine Card Images (15 total — all need evaluation)

| Current Files | Current Archetype | Canonical Archetype | Action |
|---|---|---|---|
| `the-architect-1/2/3.webp` | The Architect | The Architect | KEEP — name correct |
| `the-maverick-1/2/3.webp` | The Maverick | The Maverick | KEEP — name correct |
| `the-artisan-1/2/3.webp` | The Artisan | **The Alchemist** | EVALUATE + RENAME or REGENERATE |
| `the-classic-1/2/3.webp` | The Classic | **The Protector** | EVALUATE + RENAME or REGENERATE |
| `the-explorer-1/2/3.webp` | The Explorer | **The Sovereign** | EVALUATE + RENAME or REGENERATE |

---

## Repurpose Assessment: Can Wrong-Name Images Be Reused?

### the-artisan-\*.webp -> the-alchemist-\*.webp?

| Attribute | The Artisan (generated as) | The Alchemist (should be) | Compatible? |
|---|---|---|---|
| **Energy** | Craftsmanship, handmade, slow fashion | Emotionally attuned, mood-driven, creative phases | NO |
| **Visual mood** | Earthy, natural materials, workshop aesthetic | Intense, layered, emotionally resonant, moody | NO |
| **Fashion elements** | Natural fabrics, artisan details, provenance | Texture, contrast, mood, depth | PARTIAL |
| **Color direction** | Warm earth tones, raw textures | Shifting moods — burgundy, charcoal, moss, indigo | NO |

**Verdict: REGENERATE.** The Artisan images would depict a craftsman/workshop aesthetic. The Alchemist needs emotional depth, creative intensity, and mood-driven styling. These are fundamentally different visual languages.

### the-classic-\*.webp -> the-protector-\*.webp?

| Attribute | The Classic (generated as) | The Protector (should be) | Compatible? |
|---|---|---|---|
| **Energy** | Timeless, proven essentials, preppy | Grounded, capable, ready, steady | PARTIAL |
| **Visual mood** | Polished, traditional, heritage | Rugged dependability, quiet strength | NO |
| **Fashion elements** | Navy blazer, white oxford, perfect denim | Quality denim, field jackets, durable boots | NO |
| **Color direction** | Navy, white, classic prep tones | Olive, khaki, worn brown, stone gray | NO |

**Verdict: REGENERATE.** The Classic images would show a preppy, traditional-menswear aesthetic. The Protector needs rugged reliability, functional quality, and grounded steadiness. A navy blazer and white oxford is a different world from field jackets and durable boots.

### the-explorer-\*.webp -> the-sovereign-\*.webp?

| Attribute | The Explorer (generated as) | The Sovereign (should be) | Compatible? |
|---|---|---|---|
| **Energy** | Adventure-ready, functional, technical | Fully aligned, self-possessed, calm, centered | NO |
| **Visual mood** | Outdoor/adventure, technical fabrics | Effortless integration, quiet power | NO |
| **Fashion elements** | Technical silhouettes, durable fabrics | Perfectly fitted basics, quality knitwear | NO |
| **Color direction** | Adventure palette — greens, tans, tech grays | Tonal neutrals — warm sand, soft black, cream | NO |

**Verdict: REGENERATE.** The Explorer images would show outdoor/adventure-ready styling. The Sovereign needs calm self-possession, effortless integration, and quiet power. These are opposite energies.

### Summary: Repurpose Decision

| Image Set | Decision | Reason |
|---|---|---|
| `the-artisan-*.webp` | DELETE after new generation | Wrong visual energy entirely |
| `the-classic-*.webp` | DELETE after new generation | Wrong visual energy entirely |
| `the-explorer-*.webp` | DELETE after new generation | Wrong visual energy entirely |

**None of the three wrong-name image sets can be repurposed.** The visual energy mismatch is too fundamental. New images must be generated from scratch for The Alchemist, The Protector, and The Sovereign.

---

## Images Needed: Full Generation List

### Priority 1: Masculine Card Images (9 images)

These block the archetype page launch because the cards will show wrong visuals.

| Archetype | Files Needed | Notes |
|---|---|---|
| The Alchemist | `the-alchemist-1.webp`, `the-alchemist-2.webp`, `the-alchemist-3.webp` | Replaces the-artisan set |
| The Protector | `the-protector-1.webp`, `the-protector-2.webp`, `the-protector-3.webp` | Replaces the-classic set |
| The Sovereign | `the-sovereign-1.webp`, `the-sovereign-2.webp`, `the-sovereign-3.webp` | Replaces the-explorer set |

### Priority 2: Masculine Ensemble Images (2 images)

| File | Notes |
|---|---|
| `ensemble-masculine-hero.webp` | All 5 men together — must reflect correct archetypes |
| `ensemble-masculine-cards.webp` | All 5 men together — card section backdrop variant |

### Priority 3: Empress Card Images (conditional — 3 images)

| File | Notes |
|---|---|
| `the-empress-1.webp` | Only if current images are too jewel-toned/regal |
| `the-empress-2.webp` | Review existing before regenerating |
| `the-empress-3.webp` | May be salvageable if they read as warm luxury |

**Total images needed:** 9 definite + 2 ensemble + 3 conditional = **11-14 images**

---

## AI Image Generation Prompts

### Style Guidelines (apply to ALL prompts)

- **Format:** High-fashion editorial photography, magazine-quality
- **Composition:** Full-body or 3/4 body shot, fashion-forward pose
- **Lighting:** Cinematic, warm with intention — not flat studio lighting
- **Background:** Minimal, complementary to archetype energy (not distracting)
- **Model diversity:** Vary ethnicity, body type, and age across the 3 images per archetype
- **DO NOT:** Include text, logos, watermarks, or obvious AI artifacts
- **Aspect ratio:** Portrait orientation (2:3 or 3:4)
- **Resolution:** Minimum 2400px on the long edge

---

### The Protector (Masculine — Letter A)

**Energy keywords:** Grounded, capable, ready, steady, quiet strength, reliable, trustworthy

**Prompt 1 — The Steady Foundation:**
> Editorial fashion photograph of a man exuding quiet confidence and grounded strength. He wears quality dark denim, a heavyweight henley in stone gray, and a rugged field jacket in olive. Sturdy leather boots. No flashy accessories — just a quality watch with a leather strap. His stance is relaxed but ready, feet planted, shoulders back naturally. Warm, golden-hour lighting on a clean urban backdrop with muted earth tones. The mood is dependable, steady, and reassuring. Cinematic depth of field. Magazine-quality fashion editorial.

**Prompt 2 — Ready for Anything:**
> Editorial fashion photograph of a man dressed in a well-fitted navy chore coat over a clean white tee, paired with khaki chinos and worn leather boots. He carries himself with the quiet authority of someone who doesn't need to prove anything. A simple leather belt, no jewelry except a practical watch. Setting: an industrial doorway or workshop entrance with warm ambient light. The mood is capable, grounded, and unpretentious. Shot at eye level, 3/4 body, cinematic color grading with warm earth tones.

**Prompt 3 — Off-Duty Strength:**
> Editorial fashion photograph of a man in a charcoal crewneck sweater, quality dark wash jeans, and clean suede desert boots. He leans against a weathered stone wall, arms crossed casually. The vibe is unhurried confidence — a man who has nothing to prove and nowhere to rush. Warm, overcast lighting. Color palette: navy, olive, khaki, charcoal, worn brown. Magazine-quality, portrait orientation, cinematic.

**Color palette reference:** Navy, olive, khaki, charcoal, worn brown, stone gray, deep denim blue.

---

### The Maverick (Masculine — Letter B)

> Note: The Maverick already has card images (`the-maverick-1/2/3.webp`). These prompts are provided as backup in case regeneration is desired for consistency with the new batch.

**Energy keywords:** Unrestricted, expressive, freedom, individuality, hard to predict, playful, remixing

**Prompt 1 — The Rule-Breaker:**
> Editorial fashion photograph of a man who defies categorization. He wears an oversized vintage leather jacket over a graphic knit sweater, paired with wide-leg trousers and chunky platform boots. Layered necklaces and rings. His expression is playful, almost daring the camera. Bold use of unexpected color — a deep plum scarf or electric blue accessory against otherwise dark layers. Dramatic side-lighting against a minimal backdrop. The mood is freedom, rebellion, and effortless cool. Magazine-quality, portrait orientation.

**Prompt 2 — High-Low Mix:**
> Editorial fashion photograph of a man blending streetwear and luxury. Tailored trousers with a vintage band tee, topped with a structured overcoat in an unusual color (burnt orange or deep teal). Statement sneakers, stacked bracelets, sunglasses pushed up. He moves through a city street with the energy of someone who makes his own rules. Natural light, golden hour, slight motion blur suggesting movement and restlessness. Cinematic, editorial quality.

**Prompt 3 — Unpredictable:**
> Editorial fashion photograph of a man in a patterned camp-collar shirt (bold print), relaxed-fit cargo pants, and artisan sandals or statement boots. Unexpected accessories — a silk scarf tied as a headband, or a crossbody bag in a bold color. The setting is eclectic — a graffiti wall or colorful market. His energy is magnetic and impossible to pin down. Warm, saturated colors. Magazine editorial quality.

**Color palette reference:** Variable — deep plum, electric blue, burnt orange, olive, black as canvas, unexpected pops.

---

### The Architect (Masculine — Letter C)

> Note: The Architect already has card images (`the-architect-1/2/3.webp`). These prompts are provided as backup.

**Energy keywords:** Intentional, composed, focused, sharp, precise, clarity, purposeful, calculated

**Prompt 1 — Precision Personified:**
> Editorial fashion photograph of a man in a perfectly tailored charcoal suit with minimal detailing — no pocket square, no tie, just immaculate fit. Clean white shirt, top button undone. Minimal leather shoes. His posture is precise, almost geometric. The setting is architectural — clean lines, concrete and glass. Sharp, directional lighting creating strong shadows. The mood is intentional, composed, and powerful through restraint. Monochrome color grading. Magazine-quality, portrait orientation.

**Prompt 2 — Structured Minimalism:**
> Editorial fashion photograph of a man in a structured black overcoat over a slate turtleneck and precision-cut trousers. Clean profile sneakers in white. He stands in a minimalist interior with architectural elements — columns, clean walls, geometric shadows. Every element is deliberate. No excess. The color palette is charcoal, black, slate, and crisp white. Cool-toned lighting. The mood is focused and sharp. Editorial quality.

**Prompt 3 — Refined Edge:**
> Editorial fashion photograph of a man in a navy bomber jacket with clean lines, paired with slim charcoal trousers and polished minimal boots. A single quality watch, no other accessories. He walks purposefully through a modern corridor with strong geometric lines. The mood is calculated confidence — every choice intentional. Cool blue-gray color grading. Magazine editorial, cinematic depth of field.

**Color palette reference:** Charcoal, black, slate, cool gray, navy, crisp white.

---

### The Alchemist (Masculine — Letter D)

**Energy keywords:** Emotionally attuned, mood-driven, intense, layered, fluid, evolving, creative depth, transformative

**Prompt 1 — Emotional Depth:**
> Editorial fashion photograph of a man whose outfit tells a story. He wears a richly textured burgundy knit sweater layered under a long dark coat, with charcoal wide-leg trousers and worn leather boots. Layered silver rings on his fingers. His expression is introspective, gazing slightly off-camera with emotional intensity. The setting is moody — dim ambient light, perhaps a rain-slicked street or candlelit interior. Warm shadows with cool highlights. The mood is intense, layered, and emotionally resonant. Magazine-quality, portrait orientation.

**Prompt 2 — Creative Transformation:**
> Editorial fashion photograph of a man in a tonal outfit that shifts between dark and light — a moss green linen shirt, open, over a faded black tee, paired with indigo trousers and suede boots. A vintage pendant necklace and a leather bracelet. He sits on the edge of a weathered surface, one hand running through his hair, lost in thought. The setting suggests transition — a doorway between light and shadow, or a window with dramatic natural light. The mood is fluid, creative, and deeply personal. Cinematic lighting, rich contrast.

**Prompt 3 — Inner World:**
> Editorial fashion photograph of a man dressed in layers of contrasting texture — a velvet blazer in deep charcoal over a raw silk shirt, paired with matte black trousers. Statement boots with character (worn, broken-in). His presence is magnetic and a little unreadable. The setting is atmospheric — fog, soft rain, or dramatic cloud light. Color palette: charcoal, burgundy, moss, rust, indigo. The mood is intense creative energy and emotional depth. Magazine editorial, warm desaturated tones.

**Color palette reference:** Charcoal, burgundy, moss green, rust, faded black, indigo — shifts with inner season.

---

### The Sovereign (Masculine — Letter E)

**Energy keywords:** Fully aligned, self-possessed, centered, calm, effortless, integrated, quietly powerful, natural

**Prompt 1 — Effortless Alignment:**
> Editorial fashion photograph of a man who looks completely at home in his own skin. He wears a perfectly fitted cream cashmere sweater over a soft white tee, paired with warm sand chinos and clean minimal leather shoes. No flashy accessories — just a thin gold chain barely visible at the collar. His posture is relaxed and open, his expression calm and centered. The setting is warm and minimal — soft morning light through a window, clean architecture. The mood is quiet power and total self-possession. Magazine-quality, portrait orientation.

**Prompt 2 — Integrated Presence:**
> Editorial fashion photograph of a man in a soft black linen blazer over a stone-colored knit polo, with muted navy trousers and clean suede loafers. He stands with hands in pockets, weight shifted slightly, completely at ease. The setting is an elegant but understated space — a terrace with natural stone, or a gallery with soft diffused light. Nothing competes for attention; everything works together. Color palette: warm sand, soft black, stone, muted navy, cream. The mood is centered, aligned, and effortlessly sophisticated. Cinematic, warm tones.

**Prompt 3 — Quiet Power:**
> Editorial fashion photograph of a man in a deep olive overcoat over a cream turtleneck, paired with charcoal wool trousers and quality leather boots. He walks slowly through an open, sunlit space — perhaps a courtyard or garden path. His energy is unhurried and completely self-possessed. No statement pieces, no logos, no effort — just a man who knows exactly who he is. Warm golden light, soft focus background. Color palette: deep olive, cream, charcoal, warm brown. Magazine editorial quality.

**Color palette reference:** Tonal neutrals — warm sand, soft black, stone, deep olive, cream, muted navy. Harmony over contrast.

---

### Masculine Ensemble — Hero & Cards Backdrop

**Prompt — Masculine Ensemble Hero:**
> Cinematic wide-shot editorial photograph of five men standing together, each embodying a distinct masculine style archetype. From left to right: (1) THE PROTECTOR — grounded and steady in olive field jacket, quality denim, sturdy boots; (2) THE MAVERICK — unpredictable and expressive in a vintage leather jacket, bold layering, statement sneakers; (3) THE ARCHITECT — sharp and intentional in a perfectly tailored charcoal suit, minimal and precise; (4) THE ALCHEMIST — emotionally layered in textured knit, long dark coat, contrast-driven accessories; (5) THE SOVEREIGN — effortlessly aligned in cream cashmere, soft neutrals, total ease. They stand as a cohesive group but each man's energy is distinct. Dramatic cinematic lighting, warm golden tones, architectural backdrop with depth. Ultra-wide composition, 16:9 aspect ratio, magazine-quality fashion editorial. Diverse models.

**Prompt — Masculine Ensemble Cards:**
> Same as hero prompt but with a slightly different angle — closer crop, more intimate grouping, atmospheric background with blur. The five men are closer together, their distinct energies creating visual contrast. Slightly moodier lighting than the hero version. Same archetype descriptions and styling for each man. 16:9 aspect ratio, cinematic depth of field.

---

### The Empress — Conditional Regeneration

> Only generate these if existing images are too jewel-toned/regal after visual review.

**Energy keywords:** Nurturing, grounding, abundant, warm, elegant, stability, elevated basics, high-quality neutrals

**Prompt 1 — Grounded Luxury:**
> Editorial fashion photograph of a woman radiating warm, abundant energy. She wears a silk blouse in warm ivory tucked into tailored camel trousers, with gold jewelry — a quality chain necklace and simple hoop earrings. Her expression is warm and inviting, not commanding. The setting is a sunlit interior with warm wood and natural textures. Color palette: warm camel, rich cream, soft gold, chocolate brown. The mood is nurturing elegance — luxury that feels like home. Magazine-quality, portrait orientation.

**Prompt 2 — Quiet Abundance:**
> Editorial fashion photograph of a woman in a cashmere wrap coat in deep taupe over a cream knit dress. Quality leather handbag in warm brown, simple gold bracelet. She walks through a warm, sunlit street with stone architecture. Her energy is stable, elevated, and deeply grounded. No jewel tones — the palette is entirely warm neutrals: taupe, cream, champagne, warm ivory. The mood is abundance without excess. Cinematic, warm golden-hour lighting.

**Prompt 3 — Elevated Ease:**
> Editorial fashion photograph of a woman in a chocolate brown cashmere sweater and cream wide-leg trousers, with simple gold stud earrings and a quality watch. She is seated comfortably, legs crossed, holding a coffee cup or resting her hand on a soft throw. The setting is intimate and warm — a cozy but elegant space with natural light. The mood is effortless refinement and grounding warmth. Color palette: chocolate, cream, champagne gold, warm ivory, soft taupe. Magazine editorial quality.

**Color palette reference:** Warm camel, rich cream, soft gold, chocolate brown, deep taupe, champagne, warm ivory.

---

## File Operations Checklist

### Rename (after new images are generated)

| Old File | New File |
|---|---|
| `the-artisan-1.webp` | DELETE (replace with `the-alchemist-1.webp`) |
| `the-artisan-2.webp` | DELETE (replace with `the-alchemist-2.webp`) |
| `the-artisan-3.webp` | DELETE (replace with `the-alchemist-3.webp`) |
| `the-classic-1.webp` | DELETE (replace with `the-protector-1.webp`) |
| `the-classic-2.webp` | DELETE (replace with `the-protector-2.webp`) |
| `the-classic-3.webp` | DELETE (replace with `the-protector-3.webp`) |
| `the-explorer-1.webp` | DELETE (replace with `the-sovereign-1.webp`) |
| `the-explorer-2.webp` | DELETE (replace with `the-sovereign-2.webp`) |
| `the-explorer-3.webp` | DELETE (replace with `the-sovereign-3.webp`) |

### Keep As-Is

| Files | Archetype | Reason |
|---|---|---|
| `the-siren-1/2/3.webp` | The Siren | Correct name, correct energy |
| `the-muse-1/2/3.webp` | The Muse | Correct name, correct energy |
| `the-warrior-1/2/3.webp` | The Warrior | Correct name, correct energy |
| `the-enchantress-1/2/3.webp` | The Enchantress | Correct name, correct energy |
| `the-creator-1/2/3.webp` | The Creator | Correct name, correct energy |
| `the-angelic-one-1/2/3.webp` | The Angelic One | Correct name, correct energy |
| `the-architect-1/2/3.webp` | The Architect | Correct name, correct energy |
| `the-maverick-1/2/3.webp` | The Maverick | Correct name, correct energy |
| `ensemble-feminine-hero.webp` | Feminine ensemble | All 7 feminine archetypes correct |
| `ensemble-feminine-cards.webp` | Feminine ensemble | All 7 feminine archetypes correct |

### Review Before Deciding

| Files | Archetype | Decision Criteria |
|---|---|---|
| `the-empress-1/2/3.webp` | The Empress | Keep if warm/neutral; regenerate if jewel-toned/regal |

### Regenerate

| Files | Archetype | Reason |
|---|---|---|
| `ensemble-masculine-hero.webp` | Masculine ensemble | 3/5 archetypes were wrong |
| `ensemble-masculine-cards.webp` | Masculine ensemble | 3/5 archetypes were wrong |

---

## File Naming Convention Reference

```
public/images/archetypes/
├── Card images:        {slug}-{1|2|3}.webp
│   Examples:           the-siren-1.webp
│                       the-alchemist-3.webp
│                       the-protector-2.webp
│
├── Ensemble heroes:    ensemble-{feminine|masculine}-hero.webp
├── Ensemble cards:     ensemble-{feminine|masculine}-cards.webp
│
└── Format specs:
    ├── Card images:    WebP, quality 85-90, min 2400px wide, portrait (2:3 or 3:4)
    └── Ensemble:       WebP, quality 85-90, min 2400px wide, landscape (16:9)
```

---

## Generation Priority & Timeline

| Priority | Images | Count | Blocks |
|---|---|---|---|
| **P1** | Alchemist, Protector, Sovereign card images | 9 | Archetype page launch |
| **P2** | Masculine ensemble hero + cards | 2 | Archetype page launch (hero/background) |
| **P3** | Empress card images (conditional) | 0-3 | Only if current images fail visual review |
| **Total** | | **11-14** | |
