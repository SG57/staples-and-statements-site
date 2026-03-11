# Archetype Audit — Staples & Statements

> **Date:** 2026-03-11
> **Canonical source:** `docs/ARCHETYPE-CONSTITUTION.md`
> **Content files:** `src/content/archetypes/*.md`
> **Schema:** `src/content/config.ts` (archetypes collection)

---

## Executive Summary

- **Feminine archetypes (7):** Names all correct. Body content is strong and well-written. One critical discrepancy: The Empress's energy, description, and palette are wrong. Order numbers do not match canonical letter assignments.
- **Masculine archetypes (5):** Three of five have completely wrong names (Artisan, Classic, Explorer instead of Alchemist, Protector, Sovereign). All five have empty body content. Order numbers partially misaligned.
- **Total fixes needed:** 3 file renames, 3 frontmatter rewrites, 5 body content writes, 1 body content revision, 7 order corrections.

---

## Canonical Letter-to-Order Mapping

The constitution assigns letter codes (A-G feminine, A-E masculine). These should map to `order` values for consistent quiz scoring.

### Feminine

| Letter | Canonical Name | Expected Order |
|--------|---------------|----------------|
| A | The Siren | 1 |
| B | The Muse | 2 |
| C | The Warrior | 3 |
| D | The Enchantress | 4 |
| E | The Creator | 5 |
| F | The Empress | 6 |
| G | The Angelic One | 7 |

### Masculine

| Letter | Canonical Name | Expected Order |
|--------|---------------|----------------|
| A | The Protector | 1 |
| B | The Maverick | 2 |
| C | The Architect | 3 |
| D | The Alchemist | 4 |
| E | The Sovereign | 5 |

---

## Feminine Archetypes — Detailed Review

### 1. The Siren

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Siren | The Siren | MATCH |
| **Slug** | the-siren | the-siren | MATCH |
| **Order** | 6 | 1 (Letter A) | MISMATCH |
| **Gender** | feminine | feminine | MATCH |
| **Icon** | ◉ | -- | Reasonable (target/bullseye = magnetic pull) |
| **Color** | #8c4a3e (warm terracotta-brown) | -- | Good fit (warm, sensual, aligns with body palette) |

**Description (frontmatter):** "Confident, magnetic, and irresistibly alluring. Your style celebrates every curve and commands every room."
**Canonical energy:** Seductive, bold, captivating / Fiery / Magnetic / Desire-driven.
**Alignment:** 4/5 — Captures the energy well. "Confident" is slightly softer than "seductive" but close.

**Body content alignment:** 5/5 — Excellent. Mentions body-conscious silhouettes, rich fabrics, deep warm tones. Consistent with "form-fitted pieces that highlight curves" and "sultry silhouettes."

**Fixes needed:**
- Change `order: 6` to `order: 1`

---

### 2. The Muse

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Muse | The Muse | MATCH |
| **Slug** | the-muse | the-muse | MATCH |
| **Order** | 1 | 2 (Letter B) | MISMATCH |
| **Gender** | feminine | feminine | MATCH |
| **Icon** | ✦ | -- | Good fit (star/sparkle = dreamy, ethereal) |
| **Color** | #c9b8d4 (soft lavender) | -- | Excellent fit (soft, dreamy, romantic) |

**Description (frontmatter):** "Romantic, ethereal, and endlessly creative. Your style is poetry in motion."
**Canonical energy:** Soft, dreamy, ethereal / Soft / Dreamy / Emotion-driven.
**Alignment:** 5/5 — Spot-on.

**Body content alignment:** 5/5 — Flowing silhouettes, delicate prints, vintage-inspired details, fabrics that move. Exactly matches "flowy silhouettes and soft fabrics" and "romantic fabrics."

**Fixes needed:**
- Change `order: 1` to `order: 2`

---

### 3. The Warrior

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Warrior | The Warrior | MATCH |
| **Slug** | the-warrior | the-warrior | MATCH |
| **Order** | 4 | 3 (Letter C) | MISMATCH |
| **Gender** | feminine | feminine | MATCH |
| **Icon** | ▲ | -- | Good fit (upward triangle = strength, power) |
| **Color** | #5a5a5a (medium gray) | -- | Good fit (neutral, structured, commanding) |

**Description (frontmatter):** "Bold, structured, and completely unapologetic. You dress with intention and leave an impression."
**Canonical energy:** Driven, powerful, assertive / Commanding / Strong / Logic-driven.
**Alignment:** 5/5 — Excellent match.

**Body content alignment:** 5/5 — Strong shoulders, structured silhouettes, sharp tailoring, high-contrast neutrals. Maps directly to "structured, clean-lined outfits" and "power pieces."

**Fixes needed:**
- Change `order: 4` to `order: 3`

---

### 4. The Enchantress

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Enchantress | The Enchantress | MATCH |
| **Slug** | the-enchantress | the-enchantress | MATCH |
| **Order** | 3 | 4 (Letter D) | MISMATCH |
| **Gender** | feminine | feminine | MATCH |
| **Icon** | ◈ | -- | Good fit (diamond-within-diamond = layered mystery) |
| **Color** | #4a3d5c (deep purple) | -- | Excellent fit (mysterious, dark, intense) |

**Description (frontmatter):** "Dark, magnetic, and mysterious. Your style draws people in before you say a word."
**Canonical energy:** Mysterious, alluring, magnetic / Intense / Intriguing / Intuition-driven.
**Alignment:** 5/5 — Direct match.

**Body content alignment:** 5/5 — Dark romance, moody colors, unexpected textures, layered complexity. Maps to "deep colors and intricate details" and "dark glamour."

**Fixes needed:**
- Change `order: 3` to `order: 4`

---

### 5. The Creator

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Creator | The Creator | MATCH |
| **Slug** | the-creator | the-creator | MATCH |
| **Order** | 7 | 5 (Letter E) | MISMATCH |
| **Gender** | feminine | feminine | MATCH |
| **Icon** | ◐ | -- | Good fit (half-circle = creative duality) |
| **Color** | #6b8c6e (earthy sage green) | -- | Good fit (artistic, earthy, eclectic) |

**Description (frontmatter):** "Eclectic, expressive, and artistically fearless. Your style is wearable art — and the rules don't apply."
**Canonical energy:** Artistic, expressive, imaginative / Playful / Unforgettable / Inspiration-driven.
**Alignment:** 5/5 — Captures the creative, rule-breaking spirit.

**Body content alignment:** 5/5 — Mixed prints, layered textures, curated chaos. Maps to "statement pieces or creative combinations" and "creative staples."

**Fixes needed:**
- Change `order: 7` to `order: 5`

---

### 6. The Empress (CRITICAL DISCREPANCY)

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Empress | The Empress | MATCH |
| **Slug** | the-empress | the-empress | MATCH |
| **Order** | 2 | 6 (Letter F) | MISMATCH |
| **Gender** | feminine | feminine | MATCH |
| **Icon** | ♛ | -- | Fits current "regal" framing; still works for canonical "elevated" energy |
| **Color** | #8b6b4a (warm bronze) | -- | Good fit for canonical too (warm, grounding, luxe neutrals) |

**Description (frontmatter — NEEDS REVISION):**
> Current: "Regal, commanding, and unapologetically luxurious. You dress like you own the room — because you do."

> Should be: Nurturing, grounding, and effortlessly luxurious. Anchored in warm, elevated energy.

**Canonical energy:** Nurturing, grounding, abundant / Warm / Elegant / Stability-driven.
**Current alignment:** 2/5 — The current version reads as regal royalty; the canonical version is grounded luxury. "Commanding" and "own the room" contradict "nurturing" and "warm." The palette (emerald, burgundy, royal blue) contradicts "high-quality neutrals."

**Body content alignment:** 2/5 — Current body is well-written but for the WRONG archetype energy. It reads like a power archetype (overlapping with The Warrior) rather than a nurturing, stability-oriented one.

#### Current Body Content (problematic)

```
The Empress doesn't enter a room — she arrives. Your style is a declaration of power,
confidence, and a refined taste that cannot be faked. You gravitate toward rich fabrics
(velvet, silk, structured wool), jewel tones, sculptural silhouettes, and investment
pieces built to last decades. You don't follow trends — you set the standard.

Your style says: *I have arrived. I have always been here.*

**Signature pieces:** Structured blazers, tailored wide-leg trousers, statement coats,
bold jewelry, rich jewel-tone dressing, floor-length gowns for occasions.

**Your palette:** Emerald green, deep burgundy, royal blue, burnt orange, champagne
gold, onyx.

**Empress icons:** Cate Blanchett, Viola Davis, Diana Ross.
```

#### Recommended Revised Body Content

```
The Empress brings warmth, abundance, and quiet confidence wherever she goes. Your style
isn't about commanding attention — it's about radiating stability and refined taste that
people feel before they can name it. You gravitate toward rich fabrics (cashmere, silk,
quality wool), elevated neutrals, timeless silhouettes, and investment pieces that feel
like home. You don't chase trends — you build a wardrobe that lasts.

Your style says: *I am grounded, I am abundant, and everything I touch is elevated.*

**Signature pieces:** Silk blouses, gold jewelry, tailored trousers, cashmere knits,
elevated basics in luxe fabrics, quality leather goods, timeless wrap dresses.

**Your palette:** Warm camel, rich cream, soft gold, chocolate brown, deep taupe,
champagne, warm ivory.

**Empress icons:** Amal Clooney, Jennifer Aniston, Meghan Markle.
```

#### Recommended Revised Frontmatter Description

```
"Nurturing, grounding, and effortlessly luxurious. Your style radiates warmth and quiet abundance — elevated basics that feel like second nature."
```

**Fixes needed:**
- Change `order: 2` to `order: 6`
- Rewrite `description` field (see above)
- Rewrite entire body content (see above)

---

### 7. The Angelic One

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Angelic One | The Angelic One | MATCH |
| **Slug** | the-angelic-one | the-angelic-one | MATCH |
| **Order** | 5 | 7 (Letter G) | MISMATCH |
| **Gender** | feminine | feminine | MATCH |
| **Icon** | ✧ | -- | Good fit (hollow star = gentle light) |
| **Color** | #e8ddd4 (warm cream/beige) | -- | Excellent fit (light, soft, angelic) |

**Description (frontmatter):** "Pure, luminous, and timelessly beautiful. Your style radiates grace and effortless softness."
**Canonical energy:** Kind, peaceful, gentle / Calm / Sweet / Harmony-driven.
**Alignment:** 4/5 — Good. "Luminous" and "grace" work. Could lean slightly more into "kind" and "peaceful" but not a blocking issue.

**Body content alignment:** 5/5 — Soft whites, warm creams, blush pinks, delicate details, calm aura. Maps directly to "light colors and airy fabrics" and "angelic simplicity."

**Fixes needed:**
- Change `order: 5` to `order: 7`

---

## Masculine Archetypes — Detailed Review

### 1. The Architect (CORRECT NAME)

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Architect | The Architect | MATCH |
| **Slug** | the-architect | the-architect | MATCH |
| **Order** | 1 | 3 (Letter C) | MISMATCH |
| **Gender** | masculine | masculine | MATCH |
| **Icon** | ◼ | -- | Good fit (solid square = structured, precise) |
| **Color** | #1a1a2e (near-black navy) | -- | Good fit (intentional, sharp, composed) |

**Description (frontmatter):** "Sharp, structured, intentional. Clean lines and precise tailoring define this archetype. Dresses to command presence without excess."
**Canonical energy:** Intentional, composed, outer appearance reflects inner clarity / Focused, sharp, intentional.
**Alignment:** 5/5 — Excellent match.

**Body content:** EMPTY — needs writing.

#### Recommended Body Content

```
The Architect treats clothing as a discipline. Every piece in your wardrobe earns its place
through intention, construction, and cohesion. You're drawn to clean lines, architectural
shapes, and precise tailoring — nothing accidental, nothing excessive. Your style has a clear
through line that refines over time rather than reinventing itself.

Your style says: *Every detail is deliberate. Nothing here is by accident.*

**Signature pieces:** Structured overcoats, precision-cut trousers, minimal sneakers with
clean profiles, architectural outerwear, monochrome layering, quality leather accessories.

**Your palette:** Charcoal, black, slate, cool gray, navy, crisp white.

**Architect icons:** Tom Ford, David Beckham, A$AP Rocky (structured era).
```

**Fixes needed:**
- Change `order: 1` to `order: 3`
- Write body content (see above)

---

### 2. The Maverick (CORRECT NAME)

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Maverick | The Maverick | MATCH |
| **Slug** | the-maverick | the-maverick | MATCH |
| **Order** | 2 | 2 (Letter B) | MATCH |
| **Gender** | masculine | masculine | MATCH |
| **Icon** | ◇ | -- | Good fit (open diamond = free, versatile) |
| **Color** | #2d1b33 (deep aubergine) | -- | Good fit (intriguing, unconventional) |

**Description (frontmatter):** "Rule-breaker with taste. Mixes high and low, challenges convention, and makes it look effortless. Fashion-forward but never trying too hard."
**Canonical energy:** Unrestricted, expressive, able to move freely / Energetic, intriguing, hard to predict / Freedom + individuality.
**Alignment:** 5/5 — Captures the spirit well.

**Body content:** EMPTY — needs writing.

#### Recommended Body Content

```
The Maverick refuses to be boxed in. Fashion is a playground, not a rulebook, and your
wardrobe is proof. You mix high and low, bend trends on your own terms, and wear things
that most people wouldn't think to combine — and somehow it works every time. Your style
is versatile, unpredictable, and built on the freedom to change your mind.

Your style says: *Labels don't apply here. I'll wear what I want.*

**Signature pieces:** Statement sneakers, vintage finds mixed with designer pieces,
unexpected layering, bold graphic elements, unconventional proportions, accessories that
start conversations.

**Your palette:** Variable — changes with mood. Deep plum, electric blue, burnt orange,
olive, black as a canvas, unexpected pops.

**Maverick icons:** Pharrell Williams, Tyler the Creator, Harry Styles.
```

**Fixes needed:**
- Write body content (see above)

---

### 3. The Artisan → RENAME TO The Alchemist

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Artisan | **The Alchemist** | WRONG NAME |
| **Slug** | the-artisan | **the-alchemist** | WRONG SLUG |
| **Order** | 3 | 4 (Letter D) | MISMATCH |
| **Gender** | masculine | masculine | MATCH |
| **Icon** | ◎ | -- | Needs review (target circle = craftsmanship, doesn't fit "emotional depth" as well) |
| **Color** | #3d2b1f (warm dark brown) | -- | Reasonable but may want adjustment (current is earthy/artisan; alchemist is more moody/layered) |

**Description (frontmatter — COMPLETELY WRONG):**
> Current: "Slow fashion, rich texture, handcrafted feel. Gravitates toward natural materials, artisan details, and pieces with provenance and story."

> Should reflect: Emotionally attuned, mood-driven, style as creative/emotional language. Fluid and evolving.

**Body content:** EMPTY — needs writing for the correct archetype (The Alchemist).

#### Recommended Frontmatter

```yaml
name: "The Alchemist"
slug: "the-alchemist"
description: "Style as emotional language. Moves through phases, moods, and transformation — your wardrobe reflects your inner world and evolves alongside it."
order: 4
gender: masculine
icon: "◎"
color: "#3d2b1f"
```

#### Recommended Body Content

```
The Alchemist experiences style as an emotional and creative language. You move through
phases, moods, and transformation — and your wardrobe tells that story. What you wear
reflects where you are internally: the texture, the contrast, the mood. Clothing becomes
a tool for storytelling, exploration, and self-discovery. Your style evolves alongside your
inner world, never staying fixed because you never do either.

Your style says: *What I wear is what I feel. And I feel deeply.*

**Signature pieces:** Textured knits, layered outerwear, tonal dressing that shifts with
mood, vintage leather, contrast-driven outfits, statement rings, boots with character.

**Your palette:** Charcoal, burgundy, moss green, rust, faded black, indigo — shifts
with inner season.

**Alchemist icons:** Timothee Chalamet, Jared Leto, Donald Glover.
```

**Fixes needed:**
- Rename file `the-artisan.md` to `the-alchemist.md`
- Rewrite all frontmatter (name, slug, description)
- Change `order: 3` to `order: 4`
- Consider updating icon (◎ is acceptable but not ideal)
- Consider updating color (current earthy brown could work for emotional depth; a moodier tone like `#2a1f3d` might fit better)
- Write body content (see above)

---

### 4. The Classic → RENAME TO The Protector

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Classic | **The Protector** | WRONG NAME |
| **Slug** | the-classic | **the-protector** | WRONG SLUG |
| **Order** | 4 | 1 (Letter A) | MISMATCH |
| **Gender** | masculine | masculine | MATCH |
| **Icon** | ◆ | -- | Needs review (solid diamond = timelessness; for Protector, a shield-like symbol may work better) |
| **Color** | #2c3e50 (dark blue-gray) | -- | Good fit for Protector (steady, grounded, reliable) |

**Description (frontmatter — COMPLETELY WRONG):**
> Current: "Timeless over trendy. Wardrobe built on proven essentials — navy blazer, white oxford, perfect denim. Looks the same in 10 years and that is the point."

> Should reflect: Grounded, capable, ready for whatever. Values stability, reliability, quiet strength. Practical and trustworthy.

**Body content:** EMPTY — needs writing for the correct archetype (The Protector).

#### Recommended Frontmatter

```yaml
name: "The Protector"
slug: "the-protector"
description: "Grounded, capable, and quietly strong. Your style reflects reliability and readiness — not trying to impress, just built to show up."
order: 1
gender: masculine
icon: "◆"
color: "#2c3e50"
```

#### Recommended Body Content

```
The Protector dresses with quiet purpose. You know what works and you return to it — not
out of laziness, but out of a deep understanding that reliability IS style. Your wardrobe
is built on quality, durability, and pieces that feel dependable over time. You don't chase
trends; you invest in what lasts. Your presence is grounding, steady, and reassuring — and
your clothes reflect that.

Your style says: *I'm ready. Whatever happens, I've got this.*

**Signature pieces:** Quality denim, dependable boots, field jackets, heavyweight tees,
durable outerwear, well-worn leather belts, reliable watches.

**Your palette:** Navy, olive, khaki, charcoal, worn brown, stone gray, deep denim blue.

**Protector icons:** Ryan Reynolds, Chris Evans, Idris Elba.
```

**Fixes needed:**
- Rename file `the-classic.md` to `the-protector.md`
- Rewrite all frontmatter (name, slug, description)
- Change `order: 4` to `order: 1`
- Write body content (see above)

---

### 5. The Explorer → RENAME TO The Sovereign

| Field | Current | Canonical | Status |
|-------|---------|-----------|--------|
| **Name** | The Explorer | **The Sovereign** | WRONG NAME |
| **Slug** | the-explorer | **the-sovereign** | WRONG SLUG |
| **Order** | 5 | 5 (Letter E) | MATCH |
| **Gender** | masculine | masculine | MATCH |
| **Icon** | ▷ | -- | Needs review (play/arrow = exploration; for Sovereign, something suggesting integration/wholeness works better) |
| **Color** | #1a3a2a (deep forest green) | -- | Could work (grounded, natural) but Sovereign energy is more about calm self-possession; a warmer tone might fit better |

**Description (frontmatter — COMPLETELY WRONG):**
> Current: "Adventure-ready with style. Functional silhouettes, durable fabrics, technical meets aesthetic. Dresses for both the boardroom and backcountry."

> Should reflect: Fully aligned, integrated, self-possessed. Outfit disappears and becomes an extension of self. Effortless, grounded, quietly powerful.

**Body content:** EMPTY — needs writing for the correct archetype (The Sovereign).

#### Recommended Frontmatter

```yaml
name: "The Sovereign"
slug: "the-sovereign"
description: "Fully aligned and self-possessed. Your style is an effortless extension of who you are — nothing forced, everything natural, quietly powerful."
order: 5
gender: masculine
icon: "▷"
color: "#1a3a2a"
```

#### Recommended Body Content

```
The Sovereign has arrived at something most people are still searching for: alignment.
Your style isn't a performance or a statement — it's simply an extension of who you are.
Pieces feel right the moment you put them on, even if you can't explain why. You don't
chase trends or react to them; your wardrobe integrates many influences and shifts without
ever losing coherence. The result is a presence that feels calm, self-possessed, and
quietly powerful.

Your style says: *I'm not trying to be anything. I just am.*

**Signature pieces:** Perfectly fitted basics, quality knitwear, effortless outerwear,
pieces that age beautifully, curated accessories that feel personal rather than branded,
clothing that moves between contexts seamlessly.

**Your palette:** Tonal neutrals — warm sand, soft black, stone, deep olive, cream,
muted navy. Harmony over contrast.

**Sovereign icons:** Oscar Isaac, Keanu Reeves, Denzel Washington.
```

**Fixes needed:**
- Rename file `the-explorer.md` to `the-sovereign.md`
- Rewrite all frontmatter (name, slug, description)
- Write body content (see above)

---

## Summary of All Fixes

### File Renames (3)

| Current File | New File |
|---|---|
| `src/content/archetypes/the-artisan.md` | `src/content/archetypes/the-alchemist.md` |
| `src/content/archetypes/the-classic.md` | `src/content/archetypes/the-protector.md` |
| `src/content/archetypes/the-explorer.md` | `src/content/archetypes/the-sovereign.md` |

### Order Corrections (9 of 12)

| Archetype | Current Order | Correct Order |
|---|---|---|
| The Siren | 6 | 1 |
| The Muse | 1 | 2 |
| The Warrior | 4 | 3 |
| The Enchantress | 3 | 4 |
| The Creator | 7 | 5 |
| The Empress | 2 | 6 |
| The Angelic One | 5 | 7 |
| The Architect | 1 | 3 |
| The Protector (was Classic) | 4 | 1 |

Only The Maverick (order: 2) and The Sovereign (was Explorer, order: 5) are already correct.

### Content Writes Needed (6)

| File | Type |
|---|---|
| `the-empress.md` | Rewrite frontmatter description + body (wrong energy) |
| `the-architect.md` | Write body content (currently empty) |
| `the-maverick.md` | Write body content (currently empty) |
| `the-alchemist.md` (was artisan) | Rewrite frontmatter + write body (wrong archetype) |
| `the-protector.md` (was classic) | Rewrite frontmatter + write body (wrong archetype) |
| `the-sovereign.md` (was explorer) | Rewrite frontmatter + write body (wrong archetype) |

### No Changes Needed

| Archetype | Notes |
|---|---|
| The Siren | Body content excellent (order fix only) |
| The Muse | Body content excellent (order fix only) |
| The Warrior | Body content excellent (order fix only) |
| The Enchantress | Body content excellent (order fix only) |
| The Creator | Body content excellent (order fix only) |
| The Angelic One | Body content excellent (order fix only) |

---

## Appendix: Schema Compatibility

The `src/content/config.ts` archetype schema already supports all needed fields:

```typescript
schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    order: z.number(),
    gender: z.enum(['feminine', 'masculine']),
    icon: z.string().optional(),
    color: z.string().optional(),
    guideLink: z.string().optional(),
    ltkLink: z.string().optional(),
    image: z.string().optional(),
})
```

No schema changes are required. The `image` field (optional) is already present for future archetype card images.
