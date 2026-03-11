# Archetype Detail Pages — Design Specification

> **Purpose:** 12 dedicated archetype detail pages at `/archetypes/[slug]`
> **Status:** Design complete, ready for implementation
> **Last updated:** 2026-03-11
> **Companion files:**
> - `src/data/archetype-shades.ts` — all 62 permutation descriptions
> - `docs/WALLPAPER-PROMPTS.md` — AI image generation prompts for all 12 wallpapers

---

## Table of Contents

1. [Task 1: Permutation Descriptions](#task-1-permutation-descriptions)
2. [Task 2: Wallpaper Prompts](#task-2-wallpaper-prompts)
3. [Task 3: Five Page Layout Designs](#task-3-five-page-layout-designs)
4. [Task 4: Virtual User Trial Retrospective](#task-4-virtual-user-trial-retrospective)
5. [Task 5: Comparative Analysis & Grading](#task-5-comparative-analysis--grading)
6. [Task 6: Winning Design Specification](#task-6-winning-design-specification)

---

## Task 1: Permutation Descriptions

All 62 "With Shades Of" permutation descriptions have been written and stored in:

**`src/data/archetype-shades.ts`**

### Summary

| Gender    | Primaries | Secondaries per | Total |
|-----------|-----------|-----------------|-------|
| Feminine  | 7         | 6               | 42    |
| Masculine | 5         | 4               | 20    |
| **Total** |           |                 | **62**|

### Data Structure

```typescript
export interface ShadeDescription {
  primary: string;      // slug of primary archetype
  secondary: string;    // slug of secondary archetype
  primaryName: string;  // display name
  secondaryName: string;
  gender: 'feminine' | 'masculine';
  description: string;  // 2-3 sentence style description
}
```

### Available Exports

| Export | Type | Purpose |
|--------|------|---------|
| `allShades` | `ShadeDescription[]` | All 62 entries in a flat array |
| `shadeMap` | `Map<string, ShadeDescription>` | O(1) lookup by `"primary+secondary"` key |
| `getShadesForPrimary(slug)` | `ShadeDescription[]` | All shades for a given primary |
| `getShade(primary, secondary)` | `ShadeDescription \| undefined` | Single lookup |

### Writing Style

Every description follows a consistent voice:
- Opens by acknowledging the primary archetype's foundation
- Introduces the secondary influence with "but your [Secondary] shade..."
- Closes with a concrete, visual wardrobe example
- Tone: editorial, warm, specific — matches Danielle's brand voice
- Uses em dashes, avoids exclamation marks, reads like a magazine profile

---

## Task 2: Wallpaper Prompts

All 12 AI wallpaper generation prompts are in:

**`docs/WALLPAPER-PROMPTS.md`**

Each prompt specifies: setting, lighting, key objects/textures, color palette, mood, and technical camera direction. All prompts end with a consistent suffix ensuring cinematic 16:9 output with no people and no text.

### Wallpaper Inventory

| Archetype | File Name | Dominant Mood |
|-----------|-----------|---------------|
| The Siren | `the-siren-wallpaper.webp` | Candlelit boudoir, warm amber |
| The Muse | `the-muse-wallpaper.webp` | Sunlit garden terrace, dreamy |
| The Warrior | `the-warrior-wallpaper.webp` | Minimalist penthouse, commanding |
| The Enchantress | `the-enchantress-wallpaper.webp` | Victorian conservatory, moonlit |
| The Creator | `the-creator-wallpaper.webp` | Artist's loft studio, eclectic |
| The Empress | `the-empress-wallpaper.webp` | Countryside estate, golden hour |
| The Angelic One | `the-angelic-one-wallpaper.webp` | White bedroom, sunrise glow |
| The Protector | `the-protector-wallpaper.webp` | Leather workshop, afternoon light |
| The Maverick | `the-maverick-wallpaper.webp` | Neon rooftop, midnight rain |
| The Architect | `the-architect-wallpaper.webp` | Modernist study, monochrome |
| The Alchemist | `the-alchemist-wallpaper.webp` | Music room, thunderstorm |
| The Sovereign | `the-sovereign-wallpaper.webp` | Zen meditation room, dusk |

---

## Task 3: Five Page Layout Designs

### Design 1: "The Editorial" — Immersive Magazine Spread with Parallax

**Concept:** A long-form editorial experience modeled after a luxury magazine feature article. The wallpaper fills the viewport, and the page scrolls through distinct editorial "spreads" with parallax depth layers.

**Hero Section:**
- Full-viewport wallpaper with subtle parallax (background scrolls at 0.5x speed)
- Archetype icon centered at 30% from top, scaled large (120px), in the archetype's accent color
- Archetype name in Cormorant Garamond, centered, very large (clamp 4rem-8rem), white with `text-bloom`
- One-line essence (from frontmatter `description`) centered below in DM Sans, white/70
- Subtle downward scroll indicator (animated chevron) at bottom center
- Gradient overlays: heavy bottom-to-top for text legibility, plus left-to-right for composition

**Content Layout:**
- After hero: 80px of breathing room, then editorial sections separated by full-width accent dividers
- Section 1 — "The Essence": full archetype description (body markdown), set in a centered column (max-w-3xl), large body text (text-lg), generous line-height
- Section 2 — "Your Signature": two-column layout — left column has "Signature Pieces" as an elegant bulleted list; right column has "Style Icons" with names and a brief nod
- Section 3 — "Your Palette": horizontal row of color swatches (circles with hex labels beneath), dynamically extracted from the markdown content
- Each section uses `s-r` scroll-reveal with staggered `--d` delays

**"With Shades Of" Section:**
- Full-width dark section (`bg-primary`) with the archetype's wallpaper at 8% opacity as a subtle texture
- Section heading: "With Shades Of..." in large serif
- A horizontal row of clickable archetype "chips" — each showing the secondary archetype's icon and name, styled as frosted-glass pills (`bg-white/10 backdrop-blur-sm border border-white/15`)
- Active chip highlighted with the secondary archetype's accent color as border + icon glow
- Below the chips: a large text block (max-w-3xl, centered) that crossfades to show the selected permutation description
- Default state: first secondary archetype pre-selected
- Transition: description text fades out (opacity 0, translateY 8px) over 300ms, then new text fades in (opacity 1, translateY 0) over 500ms

**CTA Placement:**
- After the Shades section: a two-column CTA row
  - Left card: "Discover Your Archetype" — links to `/archetypes` quiz section
  - Right card: "Shop This Style" — links to guide/LTK
- Sticky bottom bar on mobile: "Book a Consultation" with Calendly link
- Footer area: "Explore [Other Gender] Archetypes" cross-link

**Responsive Behavior:**
- Desktop: centered editorial column, parallax active, two-column sections
- Tablet: single-column with reduced parallax
- Mobile: parallax disabled (performance), hero image uses `object-position: center`, shades chips become a horizontal scrollable row, all content single-column
- Shade chips: on mobile, horizontal scroll with snap points; on desktop, flex-wrap row

**Animation/Transition Approach:**
- Hero: cinematic entry (`hero-cin-line` and `hero-cin-item` from existing system)
- Content sections: standard `s-r` scroll-reveal with staggered delays
- Shade selector: crossfade transition on description text (CSS transitions, no JS animation library)
- Color swatches: `s-r` with staggered `--d` values creating a left-to-right wave
- Page transition: standard Astro `ViewTransitions` page-in/page-out

**Back-Navigation:**
- Breadcrumb: `Archetypes > The Siren` at top of content area
- "View All Archetypes" button after CTAs
- Browser back works naturally (standard page navigation)

---

### Design 2: "The Dossier" — Split-Panel Profile + Interactive Explorer

**Concept:** The page is divided into a fixed left panel (the archetype "profile card") and a scrollable right panel (the interactive content explorer). Think luxury brand lookbook crossed with an intelligence dossier.

**Hero Section:**
- No traditional full-viewport hero — the wallpaper is used as the left panel background
- Left panel (40% width on desktop): fixed position, full-height, shows wallpaper with heavy gradient overlay
  - Archetype icon + name + essence layered over the wallpaper
  - Key attributes displayed as a "stats card": Energy, Presence, Vibe, Decision Driver — each with the value from the constitution
  - Archetype color accent as a vertical bar on the left edge
- Right panel (60% width): scrollable content area with cream/light background

**Content Layout:**
- Right panel scrolls independently
- Section 1 — Full description in elegant serif body text
- Section 2 — "Signature Pieces" as a visual checklist (check-mark icons + piece names)
- Section 3 — "Your Palette" as a vertical stack of color blocks with labels
- Section 4 — "Style Icons" with names in italic serif
- Each section separated by thin accent-colored dividers

**"With Shades Of" Section:**
- Lives in the right scrollable panel as a dedicated section
- Vertical list of secondary archetypes as expandable accordion items
- Each item shows: secondary icon + "With Shades of [Name]" as the header
- Click expands to reveal the permutation description with a smooth height transition
- Only one item open at a time (accordion behavior)
- Open item has archetype color accent on left border

**CTA Placement:**
- Bottom of left panel (fixed, always visible): two stacked buttons — "Take the Quiz" and "Book a Consultation"
- End of right panel scroll: "Shop This Style" full-width CTA card
- Cross-gender link in left panel footer

**Responsive Behavior:**
- Desktop (1024px+): true split-panel with fixed left
- Tablet (768-1024px): left panel becomes a 35% width static (not fixed) header, content scrolls normally below
- Mobile (<768px): left panel collapses into a full-width hero banner (40vh), right panel content flows below. Accordion shades remain.

**Animation/Transition Approach:**
- Left panel: wallpaper subtle Ken Burns slow zoom (CSS animation, 30s cycle)
- Right panel sections: standard `s-r` scroll-reveal
- Accordion: `max-height` transition with `overflow: hidden`
- Page entry: left panel slides in from left, right panel fades in

**Back-Navigation:**
- Left panel top: "< All Archetypes" link (always visible on desktop)
- Mobile: breadcrumb above the hero banner

---

### Design 3: "The Journey" — Vertical Storytelling with Scroll-Triggered Reveals

**Concept:** A single continuous vertical scroll that tells the archetype's story like a film. Each section is a full-height "scene" that reveals as you scroll, creating a narrative flow from introduction through deep-dive to exploration.

**Hero Section:**
- Full-viewport wallpaper, identical to Design 1
- But with a scroll-triggered "curtain lift": the wallpaper starts with a heavy dark overlay that lightens as the user scrolls down the first 30vh, revealing the image beneath
- Archetype name types itself letter-by-letter on scroll (CSS `clip-path` reveal tied to scroll position via IntersectionObserver thresholds)
- Icon pulses gently with a CSS animation

**Content Layout:**
- Scene 1 (100vh): "The Essence" — full description text, large and centered, with the wallpaper still visible at low opacity behind
- Scene 2 (auto-height): "The Wardrobe" — split screen: left side shows signature pieces as a stacked list, right side shows the color palette as large, overlapping circles with labels
- Scene 3 (100vh): "The Icons" — style icons displayed as large text names that scroll-reveal one at a time with staggered timing
- Each "scene" has its own background treatment (alternating dark/light sections)

**"With Shades Of" Section:**
- Scene 4 (100vh minimum): the most immersive treatment
- Full dark background. The secondary archetype icons orbit the primary icon in a circular arrangement (CSS positioned, not actual animation — static positions that scroll-reveal)
- User clicks a secondary icon; it "pulls in" to center (CSS transition: scale + translate) and the description text fades in below
- The selected secondary archetype's wallpaper tints the background (10% opacity, faded)
- A "reset" gesture (click primary icon again) returns to the orbital view

**CTA Placement:**
- After Scene 4: a "crossroads" section with three paths (cards):
  1. "Find Your Archetype" — quiz
  2. "Shop This Look" — guide/LTK
  3. "Go Deeper" — consultation booking
- Bottom: "Explore [Masculine/Feminine] Archetypes" full-width banner

**Responsive Behavior:**
- Desktop: full scene-based layout with scroll-triggered animations
- Tablet: reduced scene heights (80vh instead of 100vh), simpler reveals
- Mobile: scenes become standard sections (auto-height), scroll-triggered typing effect removed (instant display), orbital shades layout becomes a simple vertical list with tap-to-expand

**Animation/Transition Approach:**
- Heavy reliance on IntersectionObserver with threshold arrays for scroll-progress-based reveals
- CSS `clip-path` animations for text reveals
- CSS transforms for the orbital shades selector
- All animations respect `prefers-reduced-motion`

**Back-Navigation:**
- Fixed side nav dots (like a presentation): 4-5 dots on the right side indicating current scene
- Top-left: persistent "< Archetypes" link
- Scroll-to-top button appears after Scene 2

---

### Design 4: "The Atlas" — Card-Based Modular Layout with Expandable Sections

**Concept:** Information-dense but visually clean. The page presents all archetype content as a grid of "knowledge cards" that can be expanded for deep dives. Think Pinterest meets a style encyclopedia.

**Hero Section:**
- Compact hero (50vh instead of 100vh) — wallpaper with archetype name, icon, and essence
- Below the hero: a "quick facts" ribbon — a single horizontal row of key data points: Energy, Presence, Vibe, Decision Driver — displayed as labeled chips on a dark bar

**Content Layout:**
- Below the ribbon: a responsive card grid (2 columns on desktop, 1 on mobile)
- Card 1: "The Essence" — shows first 2 sentences of description; click "Read More" to expand to full text (smooth height animation)
- Card 2: "Signature Pieces" — visual list with subtle icons
- Card 3: "Your Palette" — color swatches in a grid within the card
- Card 4: "Style Icons" — names with brief descriptors
- Card 5: "With Shades Of" — the selector card (see below)
- Card 6: "Shop This Archetype" — guide + LTK links as a CTA card
- Cards have frosted-glass styling: `bg-white/5 backdrop-blur-sm border border-white/10` on dark sections, or `bg-surface` with subtle shadow on light sections

**"With Shades Of" Section:**
- A single card that is wider than the others (spans 2 columns on desktop)
- Contains a tab bar of secondary archetype names
- Active tab shows the permutation description within the card
- Tab bar uses horizontal scroll on mobile
- Tab transition: text crossfade (same as Design 1)

**CTA Placement:**
- "Shop This Archetype" is one of the content cards (always visible in the grid)
- Below the card grid: full-width CTA banner for "Book a Consultation"
- Navigation card at the bottom of the grid: "Explore All Archetypes" with thumbnails of the other archetypes in the same gender system

**Responsive Behavior:**
- Desktop: 2-column card grid, some cards spanning full width
- Tablet: 2-column with tighter spacing
- Mobile: single-column stack, all cards full width
- Cards maintain a consistent max-width for readability

**Animation/Transition Approach:**
- Cards use `s-r` scroll-reveal with staggered delays (grid items cascade)
- Card expansion: smooth `max-height` + `opacity` transition
- Tab content: crossfade
- Hover: cards lift slightly (`translateY(-2px)` + increased shadow)

**Back-Navigation:**
- Breadcrumb above hero: `Archetypes > The Siren`
- Navigation card in grid links back
- Standard browser back

---

### Design 5: "The Lookbook" — Cinematic Single-Screen Dashboard

**Concept:** Everything important fits on one screen (above the fold). No scrolling required for the core experience. The archetype's entire identity is presented as a luxury lookbook page — like opening a fashion portfolio to a specific spread. Scrolling reveals bonus content.

**Hero Section:**
- Full viewport, but divided into zones rather than a single wallpaper:
  - Background: wallpaper at 30% opacity with heavy gradient
  - Top-left quadrant: Archetype name (large) + icon + essence
  - Top-right quadrant: key attributes displayed as an elegant "stat block" (Energy, Presence, Vibe)
  - Bottom-left quadrant: first paragraph of description (truncated to 3 lines with "Read more" expanding below the fold)
  - Bottom-right quadrant: color palette swatches in a compact row + "Signature Pieces" as a comma-separated elegant list
  - Center: a thin accent-colored cross divider separating the four quadrants

**Content Layout:**
- Below the fold (scroll to access):
  - Full description (expanded)
  - Style icons section
  - The "With Shades Of" explorer
  - CTAs

**"With Shades Of" Section:**
- Below the fold in an elegant dark section
- Carousel/slider: secondary archetypes presented as cards in a horizontal scrollable row
- Each card shows: icon, name, and first sentence of the permutation description
- Clicking a card expands it into a full-width panel below the carousel, showing the complete description
- Swipe navigation on mobile

**CTA Placement:**
- Above the fold: small "Shop" and "Quiz" icon-buttons in the top-right stat block area
- Below the fold: full CTAs with descriptions
- Floating action button (FAB) on mobile: "Book Consultation" pinned to bottom-right

**Responsive Behavior:**
- Desktop (1280px+): true quadrant layout fits above the fold
- Desktop (1024-1280px): quadrant layout with reduced font sizes
- Tablet: 2x2 grid becomes a 1x4 stack, hero becomes scrollable (no longer single-screen)
- Mobile: completely linearized — wallpaper hero (50vh) + stacked content sections. The "single-screen" concept is desktop-only.

**Animation/Transition Approach:**
- Quadrant reveal: each quadrant fades in with staggered timing (top-left first, clockwise)
- Cross divider: `s-r-line` scaleX animation from center
- Below-fold content: standard `s-r` scroll-reveal
- Carousel: CSS scroll-snap with smooth scrolling
- Card expansion: height + opacity transition

**Back-Navigation:**
- Top-left quadrant includes a subtle "< All Archetypes" link above the archetype name
- Below-fold content ends with a navigation strip showing all archetypes in the same gender system as small clickable icons

---

## Task 4: Virtual User Trial Retrospective

### Persona Definitions

| # | Persona | Context | Device | Attention Span |
|---|---------|---------|--------|----------------|
| 1 | **Quiz Result Explorer** | Just completed the quiz on `/archetypes`, clicked their result to learn more | Desktop or Mobile | High (motivated — just got a personal result) |
| 2 | **Casual Browser** | Browsing archetypes from the listing page, no quiz taken, exploring | Desktop | Medium (curious but uncommitted) |
| 3 | **Fashion Researcher** | Wants to understand archetype combinations for wardrobe planning | Desktop | Very High (information-seeking, will read everything) |
| 4 | **Social Sharer** | Wants to screenshot/share their archetype with friends | Mobile | Medium (looking for shareable moments) |
| 5 | **Mobile IG User** | Came from Instagram link, on phone, short attention span | Mobile | Low (will leave in 15 seconds if not hooked) |

---

### Design 1: "The Editorial" — Trial Results

**Persona 1 — Quiz Result Explorer:**
- First impression: Wallpaper hero immediately validates their result — "This is MY archetype." Strong emotional hook.
- Content discoverability: Excellent — linear scroll naturally reveals everything in order.
- Shades interaction: Chip selector is intuitive; likely to try 2-3 combinations.
- CTA visibility: Good — CTAs appear after emotional investment is built.
- Mobile: Works well; horizontal chip scroll is natural.
- **Satisfaction: 9/10**

**Persona 2 — Casual Browser:**
- First impression: Beautiful but requires commitment — full-viewport hero means scrolling to see content.
- Content discoverability: Good if they scroll; risk of bounce at hero if not motivated enough.
- Shades interaction: May not scroll far enough to find it.
- CTA visibility: Moderate — buried below content.
- Mobile: Solid experience but long page.
- **Satisfaction: 7/10**

**Persona 3 — Fashion Researcher:**
- First impression: Impressed by depth and editorial quality.
- Content discoverability: Excellent — all content is accessible via scroll, well-organized.
- Shades interaction: Will use extensively; chip selector makes comparison easy.
- CTA visibility: Not a priority for this persona — they want information first.
- Mobile: Acceptable but would prefer desktop for the amount of content.
- **Satisfaction: 9/10**

**Persona 4 — Social Sharer:**
- First impression: Hero is highly screenshot-worthy (wallpaper + name + icon).
- Content discoverability: Adequate — but they are primarily looking for shareable moments.
- Shades interaction: Moderate interest — may share a shade result if the text is quotable.
- CTA visibility: Low priority for this persona.
- Mobile: Hero screenshot works well. Shade descriptions are quotable.
- **Satisfaction: 8/10**

**Persona 5 — Mobile IG User:**
- First impression: Wallpaper hero is beautiful but text-heavy. Needs instant validation.
- Content discoverability: Risk of "too much text" feeling. No visual anchors beyond hero.
- Shades interaction: Unlikely to scroll this far.
- CTA visibility: Sticky mobile CTA bar helps if implemented.
- Mobile: Acceptable but could lose this user before they engage.
- **Satisfaction: 6/10**

---

### Design 2: "The Dossier" — Trial Results

**Persona 1 — Quiz Result Explorer:**
- First impression: The fixed left panel feels personal — like their own profile card. Strong identity moment.
- Content discoverability: Right panel scroll is intuitive; left panel always anchors them.
- Shades interaction: Accordion works well — each expansion feels like a discovery.
- CTA visibility: Excellent — left panel CTAs are always visible on desktop.
- Mobile: Profile-to-content flow works on mobile but loses the split-panel magic.
- **Satisfaction: 8/10**

**Persona 2 — Casual Browser:**
- First impression: Split layout immediately communicates "there's a lot here." Interesting but complex.
- Content discoverability: Right panel content is clear; left panel provides constant context.
- Shades interaction: Accordion is intuitive; will likely open 1-2.
- CTA visibility: Very good on desktop (fixed left panel).
- Mobile: Loses the dossier feel entirely; becomes a standard page.
- **Satisfaction: 7/10**

**Persona 3 — Fashion Researcher:**
- First impression: Loves the organized, data-rich presentation. Stat card on left feels authoritative.
- Content discoverability: Excellent — right panel scroll with fixed reference is ideal for comparison.
- Shades interaction: Accordion allows methodical exploration of each combination.
- CTA visibility: Appropriate placement; does not interrupt research flow.
- Mobile: Would strongly prefer desktop for this layout.
- **Satisfaction: 9/10**

**Persona 4 — Social Sharer:**
- First impression: Left panel profile card is screenshot-worthy.
- Content discoverability: Acceptable; right panel content is secondary to the shareable profile.
- Shades interaction: Low engagement.
- CTA visibility: Adequate.
- Mobile: Profile card screenshot opportunity is reduced when collapsed to banner.
- **Satisfaction: 6/10**

**Persona 5 — Mobile IG User:**
- First impression: On mobile, it is just a banner + content. Loses the "dossier" concept entirely.
- Content discoverability: Standard mobile scroll; nothing special.
- Shades interaction: Accordion on mobile is workable but unremarkable.
- CTA visibility: Average.
- Mobile: Mediocre — the design's strength (split panel) does not exist on mobile.
- **Satisfaction: 5/10**

---

### Design 3: "The Journey" — Trial Results

**Persona 1 — Quiz Result Explorer:**
- First impression: The curtain-lift reveal is dramatic and rewarding. Feels like an event.
- Content discoverability: Scene-based structure guides them perfectly — every scroll reveals something new.
- Shades interaction: Orbital layout is visually stunning and encourages exploration.
- CTA visibility: "Crossroads" section is clever and well-timed.
- Mobile: Simplified but still engaging.
- **Satisfaction: 9/10**

**Persona 2 — Casual Browser:**
- First impression: The animation spectacle hooks curiosity. They want to see what happens next.
- Content discoverability: Scene structure naturally pulls them through content.
- Shades interaction: Orbital selector is intriguing enough to explore even without quiz motivation.
- CTA visibility: Good — crossroads presents clear options.
- Mobile: Reduced animations diminish the experience.
- **Satisfaction: 8/10**

**Persona 3 — Fashion Researcher:**
- First impression: Impressed by the production value but may find scene-based pacing frustrating. Wants to jump to specific content.
- Content discoverability: Locked into a linear scroll — cannot easily skip to Shades section.
- Shades interaction: Orbital concept is beautiful but less efficient than chips or tabs.
- CTA visibility: Acceptable.
- Mobile: Linearized version is adequate but loses the differentiating experience.
- **Satisfaction: 7/10**

**Persona 4 — Social Sharer:**
- First impression: Multiple screenshot-worthy moments (curtain lift, orbital selector).
- Content discoverability: Adequate for their needs.
- Shades interaction: Orbital layout is highly shareable visually.
- CTA visibility: Low priority.
- Mobile: Screenshots of orbital layout would be beautiful.
- **Satisfaction: 9/10**

**Persona 5 — Mobile IG User:**
- First impression: On mobile, most dramatic effects are disabled. It becomes a standard long page.
- Content discoverability: Acceptable but nothing pulls them forward.
- Shades interaction: Vertical list is unremarkable.
- CTA visibility: Average.
- Mobile: The design's primary strengths evaporate on mobile.
- **Satisfaction: 5/10**

---

### Design 4: "The Atlas" — Trial Results

**Persona 1 — Quiz Result Explorer:**
- First impression: Compact hero feels efficient but less emotional than a full-viewport wallpaper.
- Content discoverability: Card grid makes everything visible and scannable immediately.
- Shades interaction: Tab selector within a card is clear and functional.
- CTA visibility: "Shop" card is always visible in the grid — excellent.
- Mobile: Single-column stack works well; cards are naturally mobile-friendly.
- **Satisfaction: 7/10**

**Persona 2 — Casual Browser:**
- First impression: Cards feel approachable and low-commitment. Easy to scan.
- Content discoverability: Excellent — can see all available content at a glance.
- Shades interaction: Tabs within a card are intuitive; low barrier to interaction.
- CTA visibility: Very good — CTA card is in the grid, feels natural.
- Mobile: Strong mobile experience; cards stack cleanly.
- **Satisfaction: 8/10**

**Persona 3 — Fashion Researcher:**
- First impression: Information-dense and scannable. Appreciates the organized structure.
- Content discoverability: Best of all designs for content scanning and random access.
- Shades interaction: Tab bar is the most efficient interaction pattern for methodical comparison.
- CTA visibility: Appropriate.
- Mobile: Works well; information hierarchy is maintained.
- **Satisfaction: 8/10**

**Persona 4 — Social Sharer:**
- First impression: Less visually dramatic — fewer screenshot moments.
- Content discoverability: Fine but not exciting.
- Shades interaction: Functional but not shareable.
- CTA visibility: Adequate.
- Mobile: Cards are clean but not visually distinctive enough to share.
- **Satisfaction: 5/10**

**Persona 5 — Mobile IG User:**
- First impression: Compact hero gets to content faster — this persona appreciates that.
- Content discoverability: Cards are scannable and digestible. Good for short attention spans.
- Shades interaction: May not engage, but the card format does not demand scrolling to find.
- CTA visibility: CTA card is in the visible grid — best discovery for this persona.
- Mobile: Strongest mobile experience of all designs.
- **Satisfaction: 8/10**

---

### Design 5: "The Lookbook" — Trial Results

**Persona 1 — Quiz Result Explorer:**
- First impression: Everything is right there — instant gratification. But may feel overwhelming.
- Content discoverability: Above-the-fold density is high; information hierarchy unclear.
- Shades interaction: Below-fold carousel requires scrolling — contradicts the "everything visible" premise.
- CTA visibility: Small icon buttons above fold; easy to miss.
- Mobile: Quadrant concept breaks entirely; becomes a standard page.
- **Satisfaction: 6/10**

**Persona 2 — Casual Browser:**
- First impression: Dense. May feel like a data dashboard rather than a fashion experience.
- Content discoverability: All visible but hard to know where to start reading.
- Shades interaction: Below-fold; requires motivation to scroll.
- CTA visibility: Subtle above fold; full CTAs below.
- Mobile: Standard mobile page after quadrant breaks down.
- **Satisfaction: 5/10**

**Persona 3 — Fashion Researcher:**
- First impression: Appreciates the information density. Dashboard format suits their research style.
- Content discoverability: Good for comparison and scanning.
- Shades interaction: Carousel below fold is functional but not ideal for thorough exploration.
- CTA visibility: Not a priority for this persona.
- Mobile: Linearized version loses the differentiating layout.
- **Satisfaction: 7/10**

**Persona 4 — Social Sharer:**
- First impression: Quadrant layout is visually distinctive and screenshot-worthy on desktop.
- Content discoverability: Adequate.
- Shades interaction: Low engagement.
- CTA visibility: Adequate.
- Mobile: Quadrant disappears; nothing special to share.
- **Satisfaction: 6/10**

**Persona 5 — Mobile IG User:**
- First impression: On mobile, it is a short hero + content. Adequate but not special.
- Content discoverability: Standard.
- Shades interaction: Carousel is swipeable — somewhat natural on mobile.
- CTA visibility: FAB is effective for this persona.
- Mobile: Average.
- **Satisfaction: 6/10**

---

### Satisfaction Summary Table

| Persona | D1 Editorial | D2 Dossier | D3 Journey | D4 Atlas | D5 Lookbook |
|---------|:---:|:---:|:---:|:---:|:---:|
| 1. Quiz Result Explorer | 9 | 8 | 9 | 7 | 6 |
| 2. Casual Browser | 7 | 7 | 8 | 8 | 5 |
| 3. Fashion Researcher | 9 | 9 | 7 | 8 | 7 |
| 4. Social Sharer | 8 | 6 | 9 | 5 | 6 |
| 5. Mobile IG User | 6 | 5 | 5 | 8 | 6 |
| **Average** | **7.8** | **7.0** | **7.6** | **7.2** | **6.0** |

---

## Task 5: Comparative Analysis & Grading

### Grading Matrix (A-F)

| Criterion | D1 Editorial | D2 Dossier | D3 Journey | D4 Atlas | D5 Lookbook |
|-----------|:---:|:---:|:---:|:---:|:---:|
| 1. Visual Impact | A | B+ | A+ | B | B+ |
| 2. Content Accessibility | A | A- | B | A+ | B- |
| 3. "Shades Of" UX | A- | B+ | A (desktop) / C (mobile) | A- | B |
| 4. Mobile Experience | B+ | C+ | C | A | C |
| 5. SEO (content visibility) | A | A | B+ | A | A- |
| 6. Brand Alignment | A | B+ | A | B | B |
| 7. Technical Feasibility | A- | B | C+ | A | B- |
| 8. Animation Quality | A | B | A+ | B+ | B |
| 9. CTA Conversion | B+ | A | B+ | A- | B- |
| 10. Build Speed | B+ | B- | C | A | C+ |

### Weighted Analysis

**Design 1 (The Editorial)** scores highest across the most criteria. Its only weakness is mobile for low-attention users, which can be solved by borrowing from Design 4.

**Design 3 (The Journey)** has the highest visual impact and social shareability but fails on mobile and technical feasibility. Too much scroll-dependent JS creates fragility.

**Design 4 (The Atlas)** has the best mobile experience and build speed but lacks the emotional impact that a luxury fashion brand demands.

**Design 2 (The Dossier)** has excellent desktop CTA placement but collapses into a generic page on mobile.

**Design 5 (The Lookbook)** tries to solve a problem (everything above the fold) that conflicts with editorial storytelling. The quadrant concept is interesting but brittle.

### Elements to Steal

| From | Element | Why |
|------|---------|-----|
| Design 2 | Fixed CTA sidebar concept | Persistent CTAs without interrupting content |
| Design 3 | Orbital shades visualization | Beautiful secondary archetype selector (but simplified) |
| Design 4 | Card-based mobile fallback | Cards stack perfectly on mobile; better than linearized editorial |
| Design 4 | Compact hero option for mobile | 50vh hero on mobile prevents scroll-fatigue on small screens |
| Design 5 | Quick-facts ribbon | Efficient attribute display without dedicating a full section |

### Winner

**Design 1: "The Editorial"** — with targeted improvements borrowed from Design 4 (mobile card layout, compact mobile hero) and Design 2 (persistent CTA logic). This hybrid is specified below.

---

## Task 6: Winning Design Specification

### Design Name: "The Editorial" (Hybrid)

The winning design is Design 1's immersive editorial magazine format with three key improvements:
1. **Mobile hero is compact** (70vh instead of 100vh) — borrowed from Design 4
2. **Shades selector uses horizontal scrolling chips on mobile** with snap points — proven mobile pattern
3. **Sticky mobile CTA bar** at the bottom of the viewport — borrowed from Design 2's persistent CTA concept

---

### 6.1 Astro Component & File Structure

```
src/
├── pages/
│   └── archetypes/
│       └── [slug].astro          ← Dynamic route: generates 12 pages at build
├── components/
│   ├── ArchetypeHero.astro       ← Full-viewport wallpaper hero
│   ├── ArchetypeEssence.astro    ← Description + style quote
│   ├── ArchetypeSignature.astro  ← Signature pieces + style icons
│   ├── ArchetypePalette.astro    ← Color swatches row
│   ├── ArchetypeShades.astro     ← "With Shades Of" selector + descriptions
│   ├── ArchetypeCTA.astro        ← CTA cards (quiz, shop, consult)
│   └── ArchetypeNav.astro        ← Navigation to other archetypes in same gender
├── data/
│   └── archetype-shades.ts       ← 62 permutation descriptions (ALREADY WRITTEN)
└── styles/
    └── global.css                ← Existing — may need 1-2 additions
```

### 6.2 Page Template: `src/pages/archetypes/[slug].astro`

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import ArchetypeHero from '../../components/ArchetypeHero.astro';
import ArchetypeEssence from '../../components/ArchetypeEssence.astro';
import ArchetypeSignature from '../../components/ArchetypeSignature.astro';
import ArchetypePalette from '../../components/ArchetypePalette.astro';
import ArchetypeShades from '../../components/ArchetypeShades.astro';
import ArchetypeCTA from '../../components/ArchetypeCTA.astro';
import ArchetypeNav from '../../components/ArchetypeNav.astro';
import { getShadesForPrimary } from '../../data/archetype-shades';

// Static paths for all 12 archetypes
export async function getStaticPaths() {
  const archetypes = await getCollection('archetypes');
  return archetypes.map((archetype) => ({
    params: { slug: archetype.data.slug },
    props: { archetype },
  }));
}

const { archetype } = Astro.props;
const { Content } = await archetype.render();
const shades = getShadesForPrimary(archetype.data.slug);

// Get sibling archetypes (same gender) for the nav strip
const allArchetypes = await getCollection('archetypes');
const siblings = allArchetypes
  .filter((a) => a.data.gender === archetype.data.gender && a.data.slug !== archetype.data.slug)
  .sort((a, b) => a.data.order - b.data.order);

// Parse color palette from markdown body (convention: "**Your palette:** color1, color2, ...")
// This is extracted in the component from the rendered Content.

const pageTitle = `${archetype.data.name} — Style Archetype | Staples & Statements`;
const pageDescription = archetype.data.description;
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  transparentNav={true}
>
  <article itemscope itemtype="https://schema.org/Article">
    <ArchetypeHero
      name={archetype.data.name}
      slug={archetype.data.slug}
      icon={archetype.data.icon}
      color={archetype.data.color}
      description={archetype.data.description}
      gender={archetype.data.gender}
    />

    <!-- Breadcrumb -->
    <nav class="relative z-10 bg-primary" aria-label="Breadcrumb">
      <div class="mx-auto max-w-3xl px-6 py-4">
        <ol class="flex items-center gap-2 font-body text-xs tracking-wider uppercase text-white/40">
          <li><a href="/archetypes" class="hover:text-accent transition-colors">Archetypes</a></li>
          <li class="text-white/20">/</li>
          <li class="text-white/70">{archetype.data.name}</li>
        </ol>
      </div>
    </nav>

    <ArchetypeEssence>
      <Content />
    </ArchetypeEssence>

    <ArchetypeSignature
      name={archetype.data.name}
      gender={archetype.data.gender}
    >
      <Content />
    </ArchetypeSignature>

    <ArchetypePalette color={archetype.data.color}>
      <Content />
    </ArchetypePalette>

    <ArchetypeShades
      primary={archetype.data}
      shades={shades}
    />

    <ArchetypeCTA
      name={archetype.data.name}
      gender={archetype.data.gender}
      guideLink={archetype.data.guideLink}
      ltkLink={archetype.data.ltkLink}
    />

    <ArchetypeNav
      currentSlug={archetype.data.slug}
      gender={archetype.data.gender}
      siblings={siblings}
    />
  </article>

  <!-- Sticky mobile CTA bar -->
  <div class="fixed bottom-0 left-0 right-0 z-50 lg:hidden
              bg-primary/95 backdrop-blur-md border-t border-white/10
              px-4 py-3 flex gap-3 safe-bottom">
    <a href="/contact"
       class="flex-1 inline-flex items-center justify-center px-4 py-3 bg-accent text-white font-body text-xs font-medium tracking-widest uppercase hover:bg-accent-light transition-colors">
      Book a Consultation
    </a>
    {archetype.data.guideLink && (
      <a href={archetype.data.guideLink} target="_blank" rel="noopener noreferrer"
         class="inline-flex items-center justify-center px-4 py-3 border border-white/25 text-white font-body text-xs font-medium tracking-widest uppercase hover:bg-white/10 transition-colors">
        Shop
      </a>
    )}
  </div>

  <!-- Bottom padding to prevent sticky bar from covering content on mobile -->
  <div class="h-20 lg:hidden"></div>
</BaseLayout>
```

**Note:** The `Content` component (rendered markdown) is passed as a slot to child components that need to parse specific sections from it. An alternative approach (likely cleaner) is to parse the markdown body in the `[slug].astro` frontmatter and pass structured data as props. The implementation agent should decide based on complexity.

---

### 6.3 Component Specifications

#### `ArchetypeHero.astro`

**Props:** `name`, `slug`, `icon`, `color`, `description`, `gender`

**Structure:**
```html
<section class="relative min-h-screen lg:min-h-screen min-h-[70vh] flex items-end overflow-hidden bg-primary">
  <!-- Wallpaper image -->
  <img src={`/images/archetypes/${slug}-wallpaper.webp`}
       alt="" aria-hidden="true"
       class="absolute inset-0 w-full h-full object-cover" loading="eager" />

  <!-- Gradient overlays -->
  <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/15"></div>
  <div class="absolute inset-0 bg-gradient-to-l from-primary/40 via-transparent to-transparent"></div>

  <!-- Nav-hood scrim -->
  <div class="absolute top-0 left-0 right-0 h-40 pointer-events-none z-[5]"
       style="background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)">
  </div>

  <!-- Hero content — positioned at bottom-left -->
  <div class="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:pb-24 w-full">
    <span class="hero-cin-item text-5xl mb-4 block" style={`--item-delay: 0; color: ${color}`}>
      {icon}
    </span>
    <h1 class="font-heading text-white text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight max-w-3xl text-bloom">
      <span class="hero-cin-line block" style="--line-delay: 0">{name}</span>
    </h1>
    <p class="hero-cin-item mt-4 font-body text-white/70 text-lg md:text-xl max-w-xl leading-relaxed text-bloom-sm"
       style="--item-delay: 5">
      {description}
    </p>
    <!-- Gender label -->
    <p class="hero-cin-item mt-6 font-body text-xs tracking-widest uppercase"
       style={`--item-delay: 8; color: ${color}40`}>
      {gender} archetype
    </p>
  </div>
</section>
```

**Key details:**
- Mobile: `min-h-[70vh]` (not full viewport) to reduce scroll fatigue
- Desktop: `min-h-screen` for full cinematic effect
- Uses existing `hero-cin-line` and `hero-cin-item` animation classes from `BaseLayout.astro`
- `text-bloom` and `text-bloom-sm` for legibility over wallpaper
- Items positioned at bottom-left with generous bottom padding

---

#### `ArchetypeEssence.astro`

**Structure:**
```html
<section class="bg-primary py-20 lg:py-28">
  <div class="mx-auto max-w-3xl px-6">
    <div class="s-r" style="--d: 0">
      <div class="w-8 h-px bg-accent mb-6"></div>
      <h2 class="font-heading text-white text-3xl lg:text-4xl mb-8">The Essence</h2>
    </div>
    <div class="s-r prose-archetype" style="--d: 0.15">
      <!-- Rendered markdown body goes here via <slot /> -->
      <!-- Only the description paragraph(s) — NOT signature pieces, palette, or icons -->
      <slot />
    </div>
  </div>
</section>
```

**Prose styling** (add to `global.css` or component `<style>`):
```css
.prose-archetype {
  color: rgba(255, 255, 255, 0.75);
  font-family: var(--font-body);
  font-size: 1.125rem; /* text-lg */
  line-height: 1.8;
}
.prose-archetype p {
  max-width: 65ch;
  margin-bottom: 1.5rem;
}
.prose-archetype em {
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}
.prose-archetype strong {
  color: var(--color-accent);
  font-weight: 600;
}
```

**Note:** The markdown body contains the full description, signature pieces, palette, and icons all as one blob. The implementation agent has two options:
1. **Parse the markdown** in frontmatter: split on `**Signature pieces:**`, `**Your palette:**`, `**icons:**` to extract structured data
2. **Move structured data to frontmatter**: add `signaturePieces`, `palette`, `icons` fields to the archetype schema

Option 2 is cleaner and recommended. The existing body markdown can be restructured.

---

#### `ArchetypeSignature.astro`

**Props:** `name`, `gender` (+ parsed data from body or frontmatter)

**Structure:**
```html
<section class="bg-primary-light py-20 lg:py-28">
  <div class="mx-auto max-w-5xl px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Signature Pieces -->
      <div class="s-r" style="--d: 0">
        <div class="w-8 h-px bg-accent mb-6"></div>
        <h3 class="font-heading text-white text-2xl lg:text-3xl mb-6">Signature Pieces</h3>
        <ul class="space-y-3">
          {pieces.map((piece, i) => (
            <li class="s-r flex items-start gap-3" style={`--d: ${0.1 + i * 0.08}`}>
              <span class="text-accent text-sm mt-0.5">+</span>
              <span class="font-body text-white/70 text-base">{piece}</span>
            </li>
          ))}
        </ul>
      </div>

      <!-- Style Icons -->
      <div class="s-r" style="--d: 0.2">
        <div class="w-8 h-px bg-accent mb-6"></div>
        <h3 class="font-heading text-white text-2xl lg:text-3xl mb-6">Style Icons</h3>
        <ul class="space-y-3">
          {icons.map((icon, i) => (
            <li class="s-r font-heading text-white/80 text-xl italic" style={`--d: ${0.3 + i * 0.1}`}>
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

#### `ArchetypePalette.astro`

**Props:** `color` (archetype accent color) + parsed palette colors

**Structure:**
```html
<section class="bg-primary py-16 lg:py-24">
  <div class="mx-auto max-w-5xl px-6">
    <div class="s-r text-center mb-10" style="--d: 0">
      <div class="w-8 h-px bg-accent mx-auto mb-4"></div>
      <h3 class="font-heading text-white text-2xl lg:text-3xl">Your Palette</h3>
    </div>
    <div class="flex flex-wrap justify-center gap-6 lg:gap-8">
      {colors.map((c, i) => (
        <div class="s-r flex flex-col items-center gap-2" style={`--d: ${0.1 + i * 0.08}`}>
          <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-white/10"
               style={`background-color: ${c.hex}`}></div>
          <span class="font-body text-white/50 text-xs tracking-wider uppercase">{c.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Color data:** The palette colors (hex values + names) should be stored in the archetype frontmatter or a separate data map. Currently they exist only as text in the markdown body (e.g., "Deep red, burnt sienna, chocolate brown..."). The implementation agent should:
1. Create a `palette` field in the archetype schema: `z.array(z.object({ name: z.string(), hex: z.string() }))`
2. Add hex values for each named color in every archetype's frontmatter

---

#### `ArchetypeShades.astro` (Key Interactive Component)

**Props:** `primary` (archetype data object), `shades` (ShadeDescription array)

This is the most complex component. It requires client-side JavaScript for the selector interaction.

**Structure:**
```html
<section class="relative bg-primary py-20 lg:py-28 overflow-hidden">
  <!-- Subtle wallpaper texture at very low opacity -->
  <img src={`/images/archetypes/${primary.slug}-wallpaper.webp`}
       alt="" aria-hidden="true"
       class="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
       loading="lazy" />

  <div class="relative z-10 mx-auto max-w-4xl px-6">
    <!-- Section header -->
    <div class="s-r text-center mb-12" style="--d: 0">
      <div class="w-8 h-px bg-accent mx-auto mb-4"></div>
      <h2 class="font-heading text-white text-3xl lg:text-4xl mb-3">With Shades Of...</h2>
      <p class="font-body text-white/50 text-base max-w-lg mx-auto">
        Your primary archetype is {primary.name}. Explore what it means when other energies blend into your style.
      </p>
    </div>

    <!-- Shade selector chips -->
    <div class="s-r mb-10" style="--d: 0.15">
      <div id="shade-chips"
           class="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory
                  lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0
                  scrollbar-none"
           role="tablist"
           aria-label="Select a secondary archetype">
        {shades.map((shade, i) => (
          <button
            type="button"
            role="tab"
            aria-selected={i === 0 ? 'true' : 'false'}
            aria-controls="shade-description"
            data-shade-slug={shade.secondary}
            class={`shade-chip snap-start shrink-0
                    inline-flex items-center gap-2 px-5 py-3
                    font-body text-sm tracking-wide whitespace-nowrap
                    border rounded-full transition-all duration-300
                    ${i === 0
                      ? 'bg-white/15 border-accent/50 text-white'
                      : 'bg-white/5 border-white/15 text-white/50 hover:text-white/80 hover:border-white/30'
                    }`}
          >
            <span class="text-base">{shade.secondaryIcon}</span>
            {shade.secondaryName}
          </button>
        ))}
      </div>
    </div>

    <!-- Shade description panel -->
    <div id="shade-description"
         role="tabpanel"
         class="s-r relative min-h-[120px]"
         style="--d: 0.3">
      {shades.map((shade, i) => (
        <div
          data-shade-panel={shade.secondary}
          class={`shade-panel absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${i === 0
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
        >
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-10">
            <h3 class="font-heading text-white text-xl lg:text-2xl mb-1">
              {primary.name}
              <span class="text-accent"> with shades of </span>
              {shade.secondaryName}
            </h3>
            <p class="font-body text-white/65 text-base lg:text-lg leading-relaxed mt-4">
              {shade.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Client-side JavaScript** (inline `<script>` in the component):

```javascript
<script>
  function initShadeSelector() {
    const chips = document.querySelectorAll('.shade-chip');
    const panels = document.querySelectorAll('.shade-panel');
    const container = document.getElementById('shade-description');

    if (!chips.length || !panels.length) return;

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const targetSlug = chip.dataset.shadeSlug;

        // Update chips
        chips.forEach((c) => {
          const isActive = c.dataset.shadeSlug === targetSlug;
          c.setAttribute('aria-selected', isActive ? 'true' : 'false');
          c.classList.toggle('bg-white/15', isActive);
          c.classList.toggle('border-accent/50', isActive);
          c.classList.toggle('text-white', isActive);
          c.classList.toggle('bg-white/5', !isActive);
          c.classList.toggle('border-white/15', !isActive);
          c.classList.toggle('text-white/50', !isActive);
        });

        // Update panels with crossfade
        panels.forEach((panel) => {
          const isTarget = panel.dataset.shadePanel === targetSlug;
          if (isTarget) {
            panel.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
            panel.classList.add('opacity-100', 'translate-y-0');
          } else {
            panel.classList.remove('opacity-100', 'translate-y-0');
            panel.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
          }
        });

        // Auto-resize container to active panel height
        const activePanel = document.querySelector(`[data-shade-panel="${targetSlug}"]`);
        if (activePanel && container) {
          container.style.minHeight = activePanel.offsetHeight + 'px';
        }
      });
    });

    // Set initial container height
    const firstPanel = panels[0];
    if (firstPanel && container) {
      container.style.minHeight = firstPanel.offsetHeight + 'px';
    }
  }

  // Initialize on page load and after Astro page transitions
  document.addEventListener('astro:page-load', initShadeSelector);
</script>
```

**Accessibility:**
- `role="tablist"` on the chip container
- `role="tab"` on each chip with `aria-selected`
- `role="tabpanel"` on the description container
- `aria-controls` links tabs to panel
- Keyboard navigation: arrow keys to move between chips (add in implementation)

---

#### `ArchetypeCTA.astro`

**Props:** `name`, `gender`, `guideLink`, `ltkLink`

**Structure:**
```html
<section class="bg-primary-light py-20 lg:py-28">
  <div class="mx-auto max-w-5xl px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Quiz CTA -->
      <div class="s-r bg-white/5 border border-white/10 p-8 rounded-lg" style="--d: 0">
        <div class="w-8 h-0.5 bg-accent mb-4"></div>
        <h3 class="font-heading text-white text-xl mb-3">Discover Your Archetype</h3>
        <p class="font-body text-white/50 text-sm mb-6">
          Not sure if this is you? Take the quiz and find your true style identity.
        </p>
        <a href="/archetypes#archetypes"
           class="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-white font-body text-xs font-medium tracking-widest uppercase hover:bg-accent-light transition-colors">
          Take the Quiz
        </a>
      </div>

      <!-- Shop CTA -->
      {(guideLink || ltkLink) && (
        <div class="s-r bg-white/5 border border-white/10 p-8 rounded-lg" style="--d: 0.1">
          <div class="w-8 h-0.5 bg-accent mb-4"></div>
          <h3 class="font-heading text-white text-xl mb-3">Shop {name}</h3>
          <p class="font-body text-white/50 text-sm mb-6">
            Curated pieces and style guides aligned to your archetype.
          </p>
          <div class="flex flex-col gap-3">
            {guideLink && (
              <a href={guideLink} target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center justify-center w-full px-6 py-3 border border-accent text-accent font-body text-xs font-medium tracking-widest uppercase hover:bg-accent hover:text-white transition-colors">
                Get the Style Guide
              </a>
            )}
            {ltkLink && (
              <a href={ltkLink} target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center justify-center w-full px-6 py-3 border border-white/25 text-white/60 font-body text-xs font-medium tracking-widest uppercase hover:border-accent hover:text-accent transition-colors">
                Shop on LTK
              </a>
            )}
          </div>
        </div>
      )}

      <!-- Consultation CTA -->
      <div class="s-r bg-white/5 border border-white/10 p-8 rounded-lg" style="--d: 0.2">
        <div class="w-8 h-0.5 bg-accent mb-4"></div>
        <h3 class="font-heading text-white text-xl mb-3">Go Deeper</h3>
        <p class="font-body text-white/50 text-sm mb-6">
          Work with Danielle to align your wardrobe with your archetype.
        </p>
        <a href="/contact"
           class="inline-flex items-center justify-center w-full px-6 py-3 bg-white/10 text-white font-body text-xs font-medium tracking-widest uppercase hover:bg-white/20 transition-colors">
          Book a Free Consultation
        </a>
      </div>
    </div>

    <!-- Cross-gender link -->
    <div class="s-r mt-12 text-center" style="--d: 0.3">
      <a href="/archetypes"
         class="font-body text-sm tracking-wider text-white/40 hover:text-accent transition-colors">
        Explore the {gender === 'feminine' ? 'Masculine' : 'Feminine'} Archetypes &rarr;
      </a>
    </div>
  </div>
</section>
```

---

#### `ArchetypeNav.astro`

**Props:** `currentSlug`, `gender`, `siblings` (array of archetype data objects)

**Structure:**
```html
<section class="bg-primary border-t border-white/5 py-16">
  <div class="mx-auto max-w-5xl px-6">
    <div class="text-center mb-8">
      <p class="font-body text-xs tracking-widest uppercase text-white/40">
        More {gender} archetypes
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-4">
      {siblings.map((sibling) => (
        <a href={`/archetypes/${sibling.data.slug}`}
           class="group inline-flex items-center gap-2 px-5 py-3
                  bg-white/5 border border-white/10 rounded-full
                  hover:border-accent/40 hover:bg-white/10 transition-all duration-300">
          <span class="text-base" style={`color: ${sibling.data.color}`}>
            {sibling.data.icon}
          </span>
          <span class="font-body text-sm text-white/60 group-hover:text-white transition-colors">
            {sibling.data.name}
          </span>
        </a>
      ))}
    </div>

    <!-- Back to all archetypes -->
    <div class="text-center mt-8">
      <a href="/archetypes"
         class="font-body text-xs tracking-widest uppercase text-white/30 hover:text-accent transition-colors">
        &larr; View All Archetypes
      </a>
    </div>
  </div>
</section>
```

---

### 6.4 CSS Additions to `global.css`

```css
/* ── Archetype detail page: prose styling ──────────────── */
.prose-archetype {
  color: rgba(255, 255, 255, 0.75);
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.8;
}
.prose-archetype p {
  max-width: 65ch;
  margin-bottom: 1.5rem;
}
.prose-archetype em {
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}
.prose-archetype strong {
  color: var(--color-accent);
  font-weight: 600;
}

/* ── Shade selector: scrollbar hide for chip row ─────── */
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}

/* ── Safe area for sticky mobile CTA bar ─────────────── */
.safe-bottom {
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
}
```

---

### 6.5 Data Architecture Changes

#### Schema Update: `src/content/config.ts`

The archetype schema should be extended with structured fields for the detail page:

```typescript
const archetypes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archetypes' }),
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
    // NEW fields for detail pages:
    energy: z.string().optional(),
    presence: z.string().optional(),
    vibe: z.string().optional(),
    decisionDriver: z.string().optional(),
    signaturePieces: z.array(z.string()).optional(),
    palette: z.array(z.object({
      name: z.string(),
      hex: z.string(),
    })).optional(),
    styleIcons: z.array(z.string()).optional(),
    styleQuote: z.string().optional(),  // "Your style says: ..."
  }),
});
```

#### Example Updated Frontmatter: `the-siren.md`

```yaml
---
name: "The Siren"
slug: "the-siren"
description: "Confident, magnetic, and irresistibly alluring. Your style celebrates every curve and commands every room."
order: 6
gender: "feminine"
icon: "◉"
color: "#8c4a3e"
guideLink: "https://beacons.ai/staplesandstatementsss"
ltkLink: "https://shopltk.com/explore/Staplesandstatementsss"
energy: "Seductive, bold, captivating"
presence: "Fiery"
vibe: "Magnetic"
decisionDriver: "Desire"
styleQuote: "I know who I am. You should too."
signaturePieces:
  - "Bodycon dresses"
  - "Wrap silhouettes"
  - "High-slit skirts"
  - "Plunging necklines done with confidence"
  - "Rich jewel-toned satins"
  - "Form-fitting knitwear"
  - "Statement heels"
palette:
  - { name: "Deep Red", hex: "#8B1A1A" }
  - { name: "Burnt Sienna", hex: "#A0522D" }
  - { name: "Chocolate", hex: "#3E2723" }
  - { name: "Warm Gold", hex: "#B8860B" }
  - { name: "Terracotta", hex: "#CC6633" }
  - { name: "Rich Emerald", hex: "#006B3C" }
styleIcons:
  - "Sofia Vergara"
  - "Salma Hayek"
  - "Kim Kardashian"
---

The Siren knows exactly what she has and dresses to celebrate it. Your style is sensual without being scandalous, bold without being brash. You gravitate toward body-conscious silhouettes, rich fabrics, deep warm tones, and the kind of pieces that move with you. Your wardrobe is a love letter to your own body.
```

The body markdown becomes just the pure description text, with structured data moved to frontmatter.

---

### 6.6 Responsive Breakpoints

| Breakpoint | Layout Behavior |
|------------|----------------|
| < 640px (mobile) | Single column, 70vh hero, horizontal scroll chips, sticky bottom CTA bar, no parallax |
| 640-768px (sm) | Single column, 80vh hero, wider content margin |
| 768-1024px (md) | Two-column CTA grid, 90vh hero |
| 1024-1280px (lg) | Full editorial layout, full-viewport hero, centered chips wrap, desktop CTAs, sticky bar hidden |
| 1280px+ (xl) | Max-width container (max-w-7xl for hero, max-w-5xl for content) |

---

### 6.7 Animation Choreography

| Element | Animation Class | Delay | Duration | Notes |
|---------|-----------------|-------|----------|-------|
| Hero icon | `hero-cin-item` | `--item-delay: 0` | Standard | Existing system |
| Hero name | `hero-cin-line` | `--line-delay: 0` | Standard | Existing system |
| Hero description | `hero-cin-item` | `--item-delay: 5` | Standard | Existing system |
| Breadcrumb | None | — | — | Instant visibility |
| Essence heading | `s-r` | `--d: 0` | 1.4x `--dur` | Standard scroll-reveal |
| Essence body | `s-r` | `--d: 0.15` | 1.4x `--dur` | Staggered |
| Signature pieces list | `s-r` per item | `--d: 0.1` + i*0.08 | 1.4x `--dur` | Cascading list |
| Style icons | `s-r` per item | `--d: 0.3` + i*0.1 | 1.4x `--dur` | Cascading list |
| Palette swatches | `s-r` per swatch | `--d: 0.1` + i*0.08 | 1.4x `--dur` | Left-to-right wave |
| Shades heading | `s-r` | `--d: 0` | 1.4x `--dur` | Standard |
| Shade chips | `s-r` | `--d: 0.15` | 1.4x `--dur` | Group reveal |
| Shade description | `s-r` | `--d: 0.3` | 1.4x `--dur` | Standard |
| Shade transition | CSS transition | — | 500ms | `opacity` + `translateY` crossfade |
| CTA cards | `s-r` per card | `--d: 0` + i*0.1 | 1.4x `--dur` | Cascading |
| Nav sibling links | None | — | — | Instant (end of page, low priority) |

---

### 6.8 SEO & Structured Data

Each archetype detail page should include:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Siren — Style Archetype",
  "description": "Confident, magnetic, and irresistibly alluring...",
  "author": {
    "@type": "Person",
    "name": "Danielle Marie Holman"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Staples & Statements"
  },
  "image": "/images/archetypes/the-siren-wallpaper.webp",
  "mainEntityOfPage": "https://staplesandstatements.com/archetypes/the-siren"
}
```

**Meta tags:**
- `<title>`: `{Name} — Style Archetype | Staples & Statements`
- `<meta name="description">`: the frontmatter `description` field
- `<meta property="og:image">`: the wallpaper image
- Canonical URL: `https://staplesandstatements.com/archetypes/{slug}`

---

### 6.9 Build Checklist

Before implementation, these prerequisites must be met:

- [ ] 12 wallpaper images generated and placed in `public/images/archetypes/`
- [ ] Archetype schema updated in `src/content/config.ts` with new fields
- [ ] All 12 archetype `.md` files updated with structured frontmatter (palette hex values, signaturePieces array, styleIcons array, energy/presence/vibe/decisionDriver, styleQuote)
- [ ] `src/data/archetype-shades.ts` is complete (DONE)
- [ ] Verify `archetype-shades.ts` imports work with current Astro/TypeScript config

### Implementation Order

1. **Schema + data migration** — update config.ts + all 12 .md files with structured frontmatter
2. **Page route** — create `src/pages/archetypes/[slug].astro` with getStaticPaths
3. **Hero component** — ArchetypeHero.astro (can test with placeholder wallpaper)
4. **Content sections** — Essence, Signature, Palette (straightforward components)
5. **Shades selector** — ArchetypeShades.astro (most complex — JS interaction)
6. **CTA + Nav** — ArchetypeCTA.astro + ArchetypeNav.astro
7. **Mobile sticky bar** — in page template
8. **CSS additions** — prose-archetype, scrollbar-none, safe-bottom
9. **SEO** — structured data, meta tags, OG images
10. **Wallpaper integration** — swap placeholder images for AI-generated wallpapers
11. **Cross-link from listing page** — archetype cards on `/archetypes` should link to `/archetypes/{slug}`

### Estimated Build Time

| Component | Estimate |
|-----------|----------|
| Schema + data migration | 1-2 hours |
| Page route + hero | 1 hour |
| Content sections (3 components) | 2 hours |
| Shades selector (with JS) | 2-3 hours |
| CTA + Nav | 1 hour |
| Mobile sticky bar + CSS | 30 min |
| SEO + structured data | 30 min |
| Testing + polish | 2 hours |
| **Total** | **~10-12 hours** |

Wallpaper generation is a separate task (see `docs/WALLPAPER-PROMPTS.md`) and can happen in parallel.
