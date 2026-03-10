# Staples & Statements — Archetype Image Generation Prompts

> **Purpose:** Production-ready prompts for generating all archetype character images.
> **Created:** 2026-03-10
> **Total images needed:** 7 feminine × 3 + 5 masculine × 3 = **36 images**

---

## Technical Specs (Apply to Every Image)

| Spec | Value |
|---|---|
| **Dimensions** | Minimum 2400px wide, portrait orientation |
| **Aspect ratio** | 2:3 (portrait — matches card layout on site) |
| **Format** | WebP at quality 85–90 |
| **File location** | `public/images/archetypes/` |
| **No text** | Zero text overlays — typography added via CSS |

### File Naming Convention

```
public/images/archetypes/{slug}-1.webp   ← primary image
public/images/archetypes/{slug}-2.webp   ← alternate (variation in pose/setting)
public/images/archetypes/{slug}-3.webp   ← alternate (more editorial/dramatic)
```

---

## How to Use These Prompts

### Midjourney
Copy the prompt verbatim. The `--ar 2:3 --style raw --v 6.1` suffix is already included.

### ChatGPT / DALL-E 3
Remove the `--ar 2:3 --style raw --v 6.1` suffix. DALL-E reads these as descriptive paragraphs — the prompt language is compatible. Set image size to 1024×1536 (portrait).

### Grok (xAI)
Use the same syntax as Midjourney. Grok image generation accepts the `--ar` flag.

### Adobe Firefly / Stable Diffusion
Remove the `--ar` suffix. Use the negative prompts section as a "negative prompt" field. Set canvas to 2:3 ratio manually.

---

## Universal Style Reference Block

> **Prepend this to any prompt for consistent brand aesthetic.** It is already embedded in every prompt below, but useful if you need to write variations or one-offs.

```
editorial fashion photography, luxury styling, Vogue magazine aesthetic, soft directional studio lighting with warm ivory tones, film grain texture, high fashion editorial composition, no stock photo clichés, no Instagram filter look, confident intentional pose, architecturally interesting or clean neutral background, rich fabric detail, Cormorant Garamond editorial energy, champagne and warm neutral color environment
```

---

---

# FEMININE ARCHETYPES

---

## 1. The Muse
**Slug:** `the-muse`
**Personality:** Romantic, ethereal, endlessly creative. Sees fashion as poetry. Drawn to flowing silhouettes, vintage details, watercolor tones.
**Style says:** *I see beauty everywhere, and I wear it.*
**Palette:** Dusty rose, sage green, lavender, ivory, antique gold, muted periwinkle
**Icons:** Carrie Bradshaw, Alexa Chung, Zooey Deschanel

---

### the-muse-1.webp — Primary

```
editorial fashion photography, a young woman standing in soft dappled afternoon light filtering through sheer linen curtains, wearing a flowing dusty rose midi dress in silk charmeuse with delicate flutter sleeves and tiny covered buttons down the bodice, layered with a whisper-thin ivory lace cardigan, antique gold drop earrings with small pearl accents, strappy block-heel sandals in nude leather, holding a single stem of dried lavender loosely at her side, soft romantic expression gazing slightly off-camera, hair loosely pinned up with face-framing pieces falling free, background is a bright airy room with aged white plaster walls and a glimpse of a tall arched window, warm ivory and dusty rose color story, film grain, editorial composition, fashion magazine quality, no stock photo clichés --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** harsh lighting, dark or moody tone, structured blazer, power-dressing, heavy makeup, gym wear, casual denim, crowded background

---

### the-muse-2.webp — Alternate (outdoor, movement)

```
editorial fashion photography, a young woman in a sun-drenched wildflower meadow at golden hour, wearing a flowing muted periwinkle and sage watercolor-print midi skirt in chiffon paired with a delicate ivory peasant blouse with pintuck detailing and eyelet cuffs, antique gold layered necklaces, tan leather ballet flats, caught mid-turn with the skirt swirling softly around her, loose romantic waves blowing gently, expression dreamy and self-contained, shallow depth of field with soft bokeh wildflowers in foreground, warm golden backlight, fashion editorial feel, painterly quality, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** urban background, dark colors, structured clothing, harsh sunlight, stark shadows, stock photo pose

---

### the-muse-3.webp — Alternate (editorial, moody poetry)

```
editorial fashion photography, intimate portrait of a woman seated on the edge of an antique velvet chaise in a softly lit vintage Parisian apartment, wearing a floor-length dusty lavender slip dress in bias-cut satin, sheer organza overlay on the skirt catching the window light, antique gold cuff bracelet, bare feet, hair loose and slightly tousled, reading a small book she holds in her lap, expression absorbed and quietly radiant, afternoon light through tall shuttered windows casting long soft shadows, aged ivory walls with one large abstract painting barely visible, fashion editorial composition, film grain, Vogue intimate editorial energy --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** stock photo staging, direct camera gaze, overly bright lighting, casual clothes, modern furniture, harsh contours

---

---

## 2. The Empress
**Slug:** `the-empress`
**Personality:** Regal, commanding, unapologetically luxurious. Doesn't enter a room — she arrives.
**Style says:** *I have arrived. I have always been here.*
**Palette:** Emerald green, deep burgundy, royal blue, burnt orange, champagne gold, onyx
**Icons:** Cate Blanchett, Viola Davis, Diana Ross

---

### the-empress-1.webp — Primary

```
editorial fashion photography, a commanding woman in her late 30s standing at the top of a wide marble staircase in a grand architectural interior, wearing a deep emerald green structured blazer in heavyweight crepe with architectural shoulders, paired with wide-leg ivory wool trousers with a pressed crease, large hammered gold statement earrings, a single bold gold cuff bracelet, pointed-toe heeled mules in champagne leather, posture completely erect, chin slightly lifted, gaze direct and unhurried, one hand resting lightly on the marble banister, background is warm ivory marble with stone columns and soft overhead light, editorial luxury fashion photography, regal energy, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** casual or relaxed posture, fast fashion aesthetics, bright playful colors, youthful styling, crowded background, stock photo staging

---

### the-empress-2.webp — Alternate (rich texture, seated power)

```
editorial fashion photography, a regal woman seated in an oversized velvet armchair in deep burgundy, wearing a sculptural deep burgundy velvet blazer-dress with structured lapels and a belted waist, large pearl and onyx drop earrings, a large cocktail ring on her right hand, pointed kitten heels in onyx leather, legs crossed at the ankle, one elbow resting on the chair arm with hand near chin in a relaxed but commanding pose, expression serene and knowing, background is a rich warm library with dark wood shelves and warm amber lamp light, editorial fashion photography, power dressing at its most refined, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** athletic wear, casual denim, overly bright colors, casual expression, overly warm or sweet mood

---

### the-empress-3.webp — Alternate (dramatic editorial, evening)

```
editorial fashion photography, full-length dramatic portrait of a woman in a floor-length royal blue duchess satin gown with a structured corseted bodice and sweeping A-line skirt, long white-gold chandelier earrings catching the light, champagne gold strappy heels visible at the hem, standing in the center of a dramatically lit empty ballroom with ornate ceiling and warm amber uplighting, the gown's blue intensified by the warm light, expression composed and unreadable, direct gaze, the kind of editorial image that opens a fashion magazine feature, Vogue runway editorial quality, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** casual atmosphere, natural outdoor setting, soft pastels, approachable warm expression, bright overhead lighting, stock photography feel

---

---

## 3. The Enchantress
**Slug:** `the-enchantress`
**Personality:** Dark, magnetic, mysterious. Dark romance made wearable. The space between shadow and light.
**Style says:** *There's more here than you can see. Come closer.*
**Palette:** Deep plum, midnight navy, forest green, charcoal, oxblood, dusty mauve
**Icons:** Winona Ryder, Dita Von Teese, Lana Del Rey

---

### the-enchantress-1.webp — Primary

```
editorial fashion photography, a woman with an air of quiet mystery standing in a dimly lit doorway at dusk, one shoulder leaning softly against an aged stone doorframe draped with hanging vines, wearing a deep plum velvet wrap dress with dramatic bell sleeves and a low V-neckline, layered fine gold and oxidized silver chain necklaces at varying lengths, stack of thin bangles on one wrist, oxblood leather ankle boots with a slight heel, expression distant and compelling, direct gaze with a slight downward angle to camera, hair dark and loosely pinned with a few strands loose, rich shadow and warmth, golden light from within contrasted with cool dusk outside, moody editorial fashion photography, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** bright daylight, cheerful expression, pastel colors, clean modern interior, casual clothing, smiling

---

### the-enchantress-2.webp — Alternate (lace detail, intimate)

```
editorial fashion photography, intimate close-environment portrait of a woman standing against a dark forest green wallpapered wall in a candlelit room, wearing a midnight navy lace-detail midi skirt with intricate floral lace overlay, tucked into a charcoal silk blouse with dramatic wide sleeves gathered at the wrist, layered long pendant necklaces with dark stones, dark oxblood lip, rich brunette hair down with soft waves, one hand lightly touching a piece of dried botanicals hanging on the wall, expression composed and slightly unreadable, warm candlelight from off-camera right creating deep shadows on the left side of her face, fashion editorial quality, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** bright clinical light, casual outfit, light colors, happy or open expression, modern minimalist environment

---

### the-enchantress-3.webp — Alternate (dramatic, architectural shadow)

```
editorial fashion photography, full-length dramatic portrait, a woman in a charcoal structured coat dress with an asymmetric hem and velvet lapels standing in a narrow alley between old stone buildings at magic hour, the last sliver of amber light falling at an angle across her face and the coat's shoulder, wearing tall oxblood leather boots to the knee, a single large dark stone cocktail ring, deep plum lip, hair slicked back, expression bold and self-possessed, strong architectural diagonal shadows, the kind of image from a dark luxury fragrance campaign, editorial fashion photography, high contrast, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** pastoral setting, soft pastels, friendly expression, casual wear, stock photo staging, flat lighting

---

---

## 4. The Warrior
**Slug:** `the-warrior`
**Personality:** Bold, structured, completely unapologetic. Style is armor — beautiful, powerful, built to move through the world with confidence.
**Style says:** *I am ready for whatever this day brings.*
**Palette:** Black, white, charcoal, camel, navy, sharp red
**Icons:** Tilda Swinton, Lupita Nyong'o, Christy Turlington

---

### the-warrior-1.webp — Primary

```
editorial fashion photography, a tall commanding woman striding through a clean modern architectural space — white concrete walls, geometric shadow lines from high clerestory windows — wearing a sharply tailored charcoal double-breasted blazer with strong shoulders and matching wide-leg trousers, crisp white poplin shirt underneath open at the collar, minimal thin gold chain, pointed-toe camel leather loafers, zero accessories beyond one thin leather watch, expression forward-focused and utterly composed, movement caught mid-stride with one leg forward, hair pulled back in a clean low bun, high-contrast editorial photography, sharp clean lines, fashion magazine quality, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** soft romantic styling, floral prints, loose hair, smiling, pastel palette, casual posture, cluttered background

---

### the-warrior-2.webp — Alternate (camel coat, power stance)

```
editorial fashion photography, a woman standing directly facing camera in a wide city plaza, feet hip-width apart in a grounded stance, wearing an impeccably tailored long camel wool overcoat over a black turtleneck and slim black trousers, camel leather pointed-toe heeled ankle boots, no jewelry beyond a single small gold stud earring in each ear, hands at sides relaxed but purposeful, expression direct and unsmiling — not cold, simply uncompromising, clean grey pavement and pale sky background, slight wind catching the coat open, editorial fashion photography, quiet power, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** romantic styling, floral elements, soft lighting, sweet expression, cluttered urban background, casual clothing

---

### the-warrior-3.webp — Alternate (sharp red moment, dramatic)

```
editorial fashion photography, dramatic editorial portrait, a woman in a structural sharp red sleeveless sheath dress with architectural seaming standing against a pure white wall in harsh directional studio light, the red intensely saturated, strong shoulder lines, nude pointed-toe heels, absolutely minimal jewelry — just one small gold stud, hair slicked back against her head, direct confrontational gaze into camera, harsh single key light from camera-left creating bold shadow structure on her face, fashion editorial photography, high contrast black and white shadows against saturated red, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** soft romantic mood, floral prints, casual clothing, warm soft lighting, multiple competing elements, approachable expression

---

---

## 5. The Angelic One
**Slug:** `the-angelic-one`
**Personality:** Pure, luminous, timelessly beautiful. Style in whispers — soft whites, warm creams, blush pinks, delicate details.
**Style says:** *I am exactly where I belong, and I am at peace.*
**Palette:** Ivory, cream, blush, powder pink, warm white, pale gold, soft champagne
**Icons:** Audrey Hepburn, Hailey Bieber, Sienna Miller

---

### the-angelic-one-1.webp — Primary

```
editorial fashion photography, a luminous woman in soft morning light standing near a large window in a bright, airy room, wearing a flowing ivory silk slip skirt and a delicate ivory-on-ivory eyelet lace blouse with flutter sleeves and tiny pearl buttons, a delicate pearl drop necklace at the collarbone, small gold huggie hoops, barely-there nude ballet flats, expression serene and naturally radiant, minimal makeup — just glowing skin and a soft pink lip, hair loosely pinned up in a soft bun with face-framing wisps, background is pale warm walls, white linen curtains billowing slightly, a glimpse of white tulips in a simple vase, warm ivory and cream color story throughout, editorial luxury fashion photography, ethereal softness, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** dark colors, strong shadows, bold makeup, structured power dressing, cool tones, edgy styling, cluttered background

---

### the-angelic-one-2.webp — Alternate (blush, garden setting)

```
editorial fashion photography, a soft and glowing woman standing in a pale garden with white roses and soft foliage, wearing a floor-length blush pink A-line dress in lightweight crepe with delicate spaghetti straps, a sheer powder pink kimono layered over it, simple gold chain anklet visible, white leather slip-on mules, holding a small bunch of white garden roses loosely at her side, expression peaceful and quietly joyful, soft golden afternoon light creating a warm glow, shallow depth of field with roses soft in background, warm champagne and blush color palette, editorial fashion photography, dreamy softness, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** dark tones, harsh lighting, bold graphic clothing, structured silhouettes, urban environment

---

### the-angelic-one-3.webp — Alternate (editorial minimalist, winter whites)

```
editorial fashion photography, a clean and quietly stunning editorial portrait of a woman in an all-ivory ensemble — a fitted ribbed cashmere turtleneck and wide-leg ivory wool trousers with a soft drape — standing against a pale warm plaster wall in gentle winter studio light, thin gold chain necklace, small pearl stud earrings, ivory pointed-toe heeled mules, expression calm and completely self-possessed, hair down in soft waves, one hand lightly at her hip, the image is almost entirely ivory and champagne with just the warmth of her skin as contrast, editorial luxury fashion photography, quiet elegance, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** dark colors, bold contrast, dramatic shadows, strong makeup, casual or athletic clothing, cool blue or grey tones

---

---

## 6. The Siren
**Slug:** `the-siren`
**Personality:** Confident, magnetic, irresistibly alluring. Body-conscious, sensual without being scandalous. A love letter to her own body.
**Style says:** *I know who I am. You should too.*
**Palette:** Deep red, burnt sienna, chocolate brown, warm gold, terracotta, rich emerald
**Icons:** Sofia Vergara, Salma Hayek, Kim Kardashian

---

### the-siren-1.webp — Primary

```
editorial fashion photography, a confident and magnetic woman standing in warm studio light, wearing a deep red body-conscious wrap dress in liquid jersey that drapes and moves with her silhouette, the neckline plunging gracefully, a bold gold statement necklace at the collarbone, large gold hoop earrings, nude strappy heeled sandals, posture utterly assured, weight shifted onto one hip, expression direct and warmly knowing — the kind of look that acknowledges you without needing you, hair down in voluminous soft waves, warm amber studio lighting from camera-right creating rich shadows, background is a warm neutral textured wall, editorial fashion photography, sensuality through confidence, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** modest covered-up styling, cool pale tones, stiff posture, distant or cold expression, minimalist monochrome palette, casual clothing

---

### the-siren-2.webp — Alternate (terracotta, golden hour)

```
editorial fashion photography, a warm and alluring woman at golden hour in a sun-drenched Mediterranean-inspired courtyard, wearing a terracotta satin slip dress with a side slit and adjustable thin straps, the bias cut catching every curve, large gold sculptural drop earrings, a thick gold bangle on one wrist, strappy gold flat sandals, expression languid and self-assured, leaning slightly against a warm honey-colored stone wall with bougainvillea in background, late afternoon light saturating everything in amber and terracotta, skin warm and glowing, editorial fashion photography, warmth and desire, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** cool tones, structured boxy clothing, modest or covered styling, dark or moody setting, formal ballroom context, casual athleisure

---

### the-siren-3.webp — Alternate (jewel tones, rich emerald, evening)

```
editorial fashion photography, a commanding and sensual woman in a rich emerald green form-fitting satin gown with a cowl neckline that drapes beautifully, a long side slit revealing one leg with a pointed-toe deep gold strappy heel, large teardrop emerald and gold earrings, a gold statement ring, one hand on her hip and the other at her side, standing against a dark luxurious textured background — dark wallpaper or deep grey stone — warm amber and gold lighting from below and sides, expression composed and magnetic, the gown's emerald saturated and rich against the dark background, editorial fashion photography, luxury and allure, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** modest or covered silhouette, casual outfit, pale or pastel tones, cold blue lighting, stiff unapproachable posture

---

---

## 7. The Creator
**Slug:** `the-creator`
**Personality:** Eclectic, expressive, artistically fearless. Fashion as a medium. Curated chaos — a visual diary of obsessions.
**Style says:** *I made the rules I live by. You're welcome to look.*
**Palette:** Earthy terracotta, chartreuse, cobalt, burnt orange, mustard, deep teal — often all at once
**Icons:** Iris Apfel, Solange Knowles, Erykah Badu

---

### the-creator-1.webp — Primary

```
editorial fashion photography, a visually electric woman standing in an eclectic art-filled studio space, wearing a cobalt blue wide-leg trouser in heavy linen paired with a burnt orange floral print blouse tied at the waist, a chartreuse linen blazer layered over as an outer piece, multiple layered necklaces including beaded strands, long sculptural earrings, vintage-style oxblood leather loafers with a small heel, expression playful and entirely self-aware, one arm gesturing slightly as if mid-thought, hair in a natural textured high bun, background includes artworks on wall, scattered books, plants, warm light, editorial fashion photography, art world editorial energy, expressive and intentional, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** monochromatic minimalism, matching tones, conventional pairing, stiff corporate poses, blank background, neutral color story

---

### the-creator-2.webp — Alternate (mixed prints, market setting)

```
editorial fashion photography, a stylistically adventurous woman at an outdoor arts market, wearing a mustard yellow midi skirt with a bold abstract print paired with a deep teal striped linen blouse, a terracotta woven bucket bag, tan leather chunky-heel sandals, large circular tortoiseshell sunglasses, layered bangles in mixed metals and textures, expression curious and engaged, caught browsing a table of vintage finds, warm daylight, editorial fashion photography, the collision of prints completely intentional and right, eclectic joy without chaos, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** matching monochromatic outfit, formal or corporate styling, neutral palette, blank or clean studio setting, conventional posing

---

### the-creator-3.webp — Alternate (bold artisan, dramatic editorial)

```
editorial fashion photography, a dramatic editorial portrait of a woman wearing a burnt orange and deep teal color-block oversized coat over a chartreuse ribbed turtleneck, wide-leg chocolate brown trousers, stacked heeled platform boots in tan suede, multiple large sculptural rings on different fingers, enormous circular vintage-framed glasses, oversized beaded earrings, expression bold and slightly amused — she knows exactly what she's doing, standing against a large scale abstract artwork on a gallery white wall, editorial fashion photography, maximalist wearable art energy, Iris Apfel meets Vogue, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** minimalist outfit, neutral palette, blank background, conventional accessories, quiet or understated energy, fast fashion aesthetics

---

---

---

# MASCULINE ARCHETYPES

---

## 8. The Architect
**Slug:** `the-architect`
**Personality:** Sharp, structured, intentional. Clean lines and precise tailoring. Commands presence without excess.
**Color:** Deep midnight blue `#1a1a2e`

---

### the-architect-1.webp — Primary

```
editorial fashion photography, a man in his late 30s with a composed, deliberate presence standing in a clean modernist architectural interior — exposed concrete walls, a single large window with geometric shadow play — wearing a perfectly fitted charcoal double-breasted suit in a fine wool-silk blend, structured shoulders, flat-front trousers with a sharp crease, a white poplin dress shirt with the collar open (no tie), a brushed steel mechanical watch on his left wrist, no other jewelry, dark leather Oxford shoes in a slim silhouette, posture upright and still, expression calm and unreadable, hands clasped loosely in front, editorial men's fashion photography, GQ magazine quality, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** casual or disheveled clothing, loud patterns, sports or athletic wear, warm cozy aesthetic, overly expressive emotion, cluttered background

---

### the-architect-2.webp — Alternate (minimal navy, window light)

```
editorial fashion photography, a man standing at the edge of a large minimalist window in a white-walled architectural space, facing three-quarters toward the window with light falling sharply across his face, wearing a fitted midnight navy turtleneck in fine merino wool, slim charcoal trousers with a precise break at the ankle, minimalist white leather sneakers — the one casual note in a composed look, brushed steel watch, expression thoughtful and inward, hand resting on the window frame, clean and editorial, architectural precision, men's fashion editorial quality, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** loud patterns, casual streetwear, warm or rustic setting, bright colors, relaxed posture

---

### the-architect-3.webp — Alternate (structured coat, dramatic light)

```
editorial fashion photography, a dramatic editorial portrait of a man in a long structured overcoat in deep charcoal — almost black, perfectly cut, shoulders engineered — standing in a nearly empty concrete car park or underpass, a single shaft of late afternoon light falling diagonally across him, underneath the coat a high-collared black jacket and slim black trousers, polished black leather Derby shoes, expression forward, gaze direct, zero clutter in the frame, architectural shadow and light, high contrast, men's fashion editorial photography, strong graphic composition, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** casual wear, warm colors, smiling, soft romantic environment, busy background, relaxed posture

---

---

## 9. The Maverick
**Slug:** `the-maverick`
**Personality:** Rule-breaker with taste. Mixes high and low, challenges convention, makes it look effortless. Fashion-forward but never trying too hard.
**Color:** Deep purple `#2d1b33`

---

### the-maverick-1.webp — Primary

```
editorial fashion photography, a confident man in his early 30s with an effortlessly unconventional energy, standing on a rooftop at golden hour, wearing well-worn straight-leg raw denim jeans paired with a deconstructed luxe blazer in deep burgundy with unlined lapels and a slightly oversized silhouette, underneath a simple white fitted t-shirt, a silver Cuban link chain, two stacked thin rings on his right hand, clean white leather high-top sneakers, expression relaxed and slightly wry, one hand in his jeans pocket, posture loose but deliberate, warm amber skyline behind him, men's editorial fashion photography, the high-low tension completely intentional, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** conventional corporate dressing, overly matched outfit, plain or boring background, stiff posture, mass market fast fashion aesthetic

---

### the-maverick-2.webp — Alternate (graphic layering, urban)

```
editorial fashion photography, a man on a clean urban street with interesting architectural graffiti art on a wall behind him, wearing slim black trousers, a bold black-and-white graphic print shirt left unbuttoned over a black turtleneck, a dark oversized utility jacket in olive with the collar up, chunky black leather boots, wire-frame circular glasses, silver chain necklace, expression direct and slightly amused, posture casual but composed, mid-morning urban light, men's editorial fashion photography, the kind of image from a downtown independent menswear magazine, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** corporate tailoring, matching separates, conventional pose, suburban setting, polished banker aesthetic

---

### the-maverick-3.webp — Alternate (unexpected color, magazine cover energy)

```
editorial fashion photography, dramatic magazine cover-style portrait of a man wearing an unexpected deep teal silk shirt tucked into perfectly tailored bone-white wide-leg trousers, an oversized vintage blazer in washed black thrown over one shoulder, a long silver chain pendant, brown suede Chelsea boots, expression bold and self-possessed, direct gaze into camera, standing against a stark white studio backdrop with a single strong directional light from above-right creating dramatic shadows, the color contrast of teal and white and black sharp and editorial, men's high fashion photography, GQ cover energy, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** conventional neutral dressing, corporate banker styling, modest understated clothing, soft lighting, casual and unremarkable outfit

---

---

## 10. The Artisan
**Slug:** `the-artisan`
**Personality:** Slow fashion, rich texture, handcrafted feel. Natural materials, artisan details, pieces with provenance and story.
**Color:** Rich brown `#3d2b1f`

---

### the-artisan-1.webp — Primary

```
editorial fashion photography, a man with a calm and considered presence standing in a warm, light-filled ceramic or woodworking studio space, rustic wooden shelving with handmade objects behind him, wearing a heavyweight oatmeal linen shirt with hand-stitched details and wooden buttons, left partly untucked over slim-fit chocolate brown moleskin trousers, a thick hand-knotted leather belt, tan suede desert boots, a worn brown leather watch with a simple face, a few thin leather cord bracelets on one wrist, expression grounded and unhurried, one hand resting on a workbench, men's editorial fashion photography, artisan craft aesthetic, warm natural tones, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** synthetic fabrics, bright neon tones, fast fashion aesthetics, corporate clothing, cold modern environment, hurried expression

---

### the-artisan-2.webp — Alternate (rich knit, autumn outdoor)

```
editorial fashion photography, a man standing in an autumn forest clearing with warm amber and golden light filtering through the trees, wearing a heavyweight fisherman's knit sweater in raw cream wool with visible cable texture, earthy brown corduroy trousers with a straight leg, leather lace-up boots in a rich dark tan, a hand-tooled leather messenger bag worn crossbody, expression quietly content and present, posture relaxed, one hand in his trouser pocket, the other holding a paper coffee cup, shallow depth of field with soft autumn leaves in background, men's editorial fashion photography, slow living editorial energy, warm rich tones, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** athletic wear, fast fashion, urban corporate setting, cold modern interior, bright unnatural colors, rushed energy

---

### the-artisan-3.webp — Alternate (layered rich textures, editorial)

```
editorial fashion photography, editorial portrait of a man in a richly layered autumn ensemble — a deep walnut brown suede overshirt worn open over a heavy olive cotton waffle-knit henley, straight slim charcoal canvas trousers, brown leather Chelsea boots with visible wear, a woven wool scarf in ochre and rust tones draped over his shoulder, a hand-forged silver ring on his right hand, expression warm and self-contained, standing in front of a worn brick wall with aged mortar and climbing ivy in a European-style courtyard, warm raking afternoon light, men's editorial fashion photography, provenance and texture, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** synthetic materials, minimalist architecture, corporate dressing, cold blue tones, casual streetwear, hurried or stiff energy

---

---

## 11. The Classic (Masculine)
**Slug:** `the-classic`
**Personality:** Timeless over trendy. Wardrobe built on proven essentials — navy blazer, white oxford, perfect denim. Looks the same in 10 years, that's the point.
**Color:** Dark slate blue `#2c3e50`

---

### the-classic-1.webp — Primary

```
editorial fashion photography, a clean-cut man in his mid-30s standing in a bright, classically furnished space — warm wood floor, white walls, a simple wingback chair nearby — wearing a perfectly fitted navy single-breasted blazer with gold anchor buttons over a crisp white Oxford shirt tucked into well-fitted mid-blue straight-leg jeans with a slim dark leather belt, classic white pocket square, brown penny loafers in polished calfskin, expression open and confident without arrogance, standing with one hand in his jeans pocket, the other at his side, men's editorial fashion photography, traditional but not stiff, timeless styling, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** bold graphic prints, experimental silhouettes, loud accessories, trendy fast fashion pieces, edgy or deconstructed styling, casual athletic wear

---

### the-classic-2.webp — Alternate (grey flannel, winter)

```
editorial fashion photography, a man on a clean city sidewalk in soft winter morning light, wearing a three-button mid-grey flannel suit with a slight herringbone texture, a pale blue dress shirt, a simple dark navy knit tie, dark brown cap-toe Oxford shoes, a classic beige mackintosh raincoat over one arm, expression relaxed and approachable, slight smile, posture natural, one hand in his suit trouser pocket, clean urban backdrop with a leafless tree and pale grey building facade, traditional men's fashion photography, classic American style, warm and refined, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** experimental or deconstructed fashion, bold or unusual colors, statement accessories, casual or athletic clothing, cluttered or chaotic background

---

### the-classic-3.webp — Alternate (weekend casual, still elevated)

```
editorial fashion photography, a man in an elevated weekend casual look standing in a sun-filled home library or study, wearing perfectly fitted straight-leg dark navy chinos, a tucked-in white OCBD shirt with the collar slightly open, a worn but pristine tan leather belt, brown suede loafers, a thin gold watch on his left wrist, expression warm and naturally at ease, leaning with one shoulder against a tall wooden bookshelf, a book in hand, morning light from a side window, the look of a man equally comfortable at a business dinner or a Sunday brunch, men's editorial fashion photography, effortless classic ease, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** bold pattern mixing, statement jewelry, deconstructed or experimental silhouettes, athletic wear, dark moody setting

---

---

## 12. The Explorer
**Slug:** `the-explorer`
**Personality:** Adventure-ready with style. Functional silhouettes, durable fabrics, technical meets aesthetic. Dresses for both boardroom and backcountry.
**Color:** Deep forest green `#1a3a2a`

---

### the-explorer-1.webp — Primary

```
editorial fashion photography, a lean and capable-looking man standing at the edge of a windswept coastal cliff with ocean visible behind him, wearing slim technical trousers in a deep moss green with articulated knees and subtle cargo pockets, a fitted merino wool base layer in dark grey with a quarter-zip collar, an excellent quality waxed cotton field jacket in dark olive with a map pocket on the chest worn open, clean trail runners in white and charcoal, a simple field watch with a canvas strap, expression alert and quietly confident, wind slightly moving his hair and jacket collar, the horizon behind him sharp, men's editorial fashion photography, active outdoors editorial energy, function and aesthetic unified, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** office or corporate clothing, colorful athletic wear, casual streetwear, urban-only styling, formal dress shoes, indoor-only setting

---

### the-explorer-2.webp — Alternate (mountain, layered system)

```
editorial fashion photography, a man on a mountain trail in early morning light, mist in the valley below, wearing a precision-layered outfit — a heavyweight grid-fleece midlayer in deep forest green over a merino base, slim technical hiking trousers in dark earth brown, serious approach shoes in charcoal and tan, a technical backpack in muted olive, fingerless merino gloves, a brimmed technical cap in dark grey, expression focused and at ease, posture the kind of easy confidence of someone completely in their element, editorial outdoor fashion photography, the gear is clearly the best — not loud, just right, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** urban office clothes, bright neon sportswear, casual beach setting, indoor environment, sedentary pose, fashion-only non-functional clothing

---

### the-explorer-3.webp — Alternate (city-to-trail, the transition moment)

```
editorial fashion photography, a man in a clean urban environment — a covered transit hall or architectural atrium — who clearly looks ready to leave the city and go somewhere better, wearing slim straight dark wash jeans, a fitted technical field shirt in slate blue with shoulder epaulettes and chest pockets, a slim packable windbreaker in muted charcoal tied around his waist, clean minimalist trail runners, a technical crossbody in weathered canvas, a field watch, expression forward and slightly restless — the look of someone always planning the next move, men's editorial fashion photography, the city as a staging ground not a destination, film grain --ar 2:3 --style raw --v 6.1
```

**Negative prompts:** formal corporate dressing, casual loungewear, overly technical athletic gear with logos, overdressed formal shoes, static or complacent expression

---

---

## Notes for Generation Sessions

### Prompt Injection Order
For best results, use this order when composing your final prompt in any tool:

1. Subject + setting (first sentence)
2. Clothing description (most words — be specific about fabric, cut, color)
3. Accessories + shoes
4. Expression + posture
5. Lighting description
6. Background detail
7. Style references + quality cues
8. Technical suffix (`--ar 2:3 --style raw --v 6.1` for Midjourney)

### If an image doesn't match — try these refinements

- Too stock-photo: Add `editorial fashion photography, Vogue editorial, Harper's Bazaar quality` earlier in the prompt
- Wrong body type: Add `slim athletic build` or `confident plus-size woman` or `statuesque tall woman` after the subject introduction
- Wrong age: Add `in her late 30s` or `mid-30s man` in the subject description
- Background too busy: Add `clean negative space background` near the end
- Lighting too flat: Add `strong directional single key light, deep shadow on one side` in the lighting section
- Colors off: Add the specific hex is not useful — instead use descriptive color names: `rich forest green, deep oxblood, warm champagne ivory`

### Diversity Note
The archetype system is for all women and all men. Vary skin tones, hair textures, and features across the 3 versions of each archetype. No archetype should look like only one demographic. The brand serves everyone.

---

*End of archetype image prompts.*
*Last updated: 2026-03-10 | Staples & Statements | SG57 Labs*
