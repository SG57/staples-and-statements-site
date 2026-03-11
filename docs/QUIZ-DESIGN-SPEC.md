# Style Archetype Quiz — Design Specification

> **Date:** 2026-03-11
> **Status:** Winning design selected from 5-design virtual retrospective
> **Implementation target:** `src/pages/archetypes.astro` (inline) + `src/components/ArchetypeQuiz.astro`

---

## Design Retrospective Summary

Five designs were evaluated against 5 user personas across 10 categories:

### Designs Evaluated
1. **Cinematic Full-Screen Slideshow** — parallax hero images per question, horizontal slides
2. **Tarot Card-Flip Reveal** — stacked card deck metaphor, flip-to-reveal answers
3. **Vertical Scrolling Narrative** — single long-scroll, questions appear sequentially
4. **Split-Screen Editorial** — image left, questions right, magazine feel
5. **Morphing Mood Board** — visual board builds as user answers

### User Personas
1. Mobile Gen Z (IG-native, wants shareable results)
2. Desktop power user (wants back/change, methodical)
3. Fashion newcomer (needs guidance, may not know archetypes)
4. Returning visitor (quick confirmation)
5. Accessibility user (keyboard, screen reader, reduced motion)

### Comparison Matrix (A-F grades)

| Category | Cinematic | Tarot | Scroll | Editorial | Mood Board |
|---|---|---|---|---|---|
| Visual Impact | A | A- | B+ | A | A- |
| Usability | B | C | B+ | A | C |
| Mobile Experience | C+ | C | A | B+ | C |
| Accessibility | D | D | A- | B+ | D |
| Shareability | A | B+ | B | A | A |
| Tech Feasibility | B | C | A | A- | D |
| Animation Quality | A | B+ | B | A | B |
| Engagement | A- | B+ | B | A | B+ |
| Brand Alignment | A | B | B+ | A+ | B |
| Build Speed | B | C | A | A- | D |

### Winner: **Design 4 — Split-Screen Editorial** (7.4/10 avg)

Stolen elements from other designs:
- From **Cinematic**: Hero image that crossfades per question
- From **Scroll**: Accessibility-first simple DOM structure
- From **Mood Board**: Progressive archetype indicator as patterns emerge

---

## Winning Hybrid Design: Split-Screen Editorial Quiz

### Entry Point

The "Still Not Sure?" card (exists in both feminine and masculine grids) becomes a "Discover Your Archetype" CTA card:

```
┌─────────────────────┐
│                     │
│  ✦ Discover Yours   │
│                     │
│  Not sure which one │
│  resonates? Take    │
│  the quiz — it only │
│  takes 2 minutes.   │
│                     │
│  [Find Your         │
│   Archetype →]      │
│                     │
└─────────────────────┘
```

**Copy:** "Not sure which one is you?" / "Find your archetype in under 2 minutes."
**CTA:** "Find Your Archetype →"

### Entry Animation

When CTA clicked:
1. The archetype cards grid fades out with a stagger (each card fades + slides down, 50ms stagger)
2. The grid container morphs from grid layout to quiz layout
3. The quiz fades + slides up into the same space
4. Total animation: ~800ms

### Quiz Layout

**Desktop (>= 768px):**
```
┌───────────────────────┬───────────────────────────────┐
│                       │  Question 3 of 7              │
│   [MOOD IMAGE]        │  ─────────────────            │
│   Full-height         │                               │
│   archetype           │  My natural presence          │
│   imagery that        │  feels:                       │
│   crossfades          │                               │
│   per question        │  ┌─────┐ ┌─────┐ ┌─────┐     │
│                       │  │  A  │ │  B  │ │  C  │     │
│                       │  │Fiery│ │Soft │ │Cmd. │     │
│                       │  └─────┘ └─────┘ └─────┘     │
│                       │  ┌─────┐ ┌─────┐ ┌─────┐     │
│                       │  │  D  │ │  E  │ │  F  │     │
│                       │  │Intns│ │Play.│ │Warm │     │
│                       │  └─────┘ └─────┘ └─────┘     │
│                       │  ┌─────┐                      │
│                       │  │  G  │                      │
│                       │  │Calm │                      │
│                       │  └─────┘                      │
│                       │                               │
│                       │  ← Back    ● ● ◉ ○ ○ ○ ○  →  │
└───────────────────────┴───────────────────────────────┘
```

**Mobile (< 768px):**
```
┌───────────────────────┐
│   [MOOD IMAGE]        │
│   (shorter, ~30vh)    │
│   + question overlay  │
├───────────────────────┤
│  Question 3 of 7      │
│  My natural presence   │
│  feels:               │
│                       │
│  ┌───────┐ ┌───────┐  │
│  │   A   │ │   B   │  │
│  │ Fiery │ │ Soft  │  │
│  └───────┘ └───────┘  │
│  ┌───────┐ ┌───────┐  │
│  │   C   │ │   D   │  │
│  │ Commd │ │ Intns │  │
│  └───────┘ └───────┘  │
│  ...                  │
│                       │
│  ← Back  ●●◉○○○○  →  │
└───────────────────────┘
```

### Answer Chip Design

Each answer option is a frosted glass card:

```
┌────────────────────────┐
│                        │
│          A             │  ← Luxury oversized letter (2rem)
│                        │     font-heading, text-accent
│   Seductive, bold,     │  ← Description text
│   captivating          │     font-body, text-white/70
│                        │
└────────────────────────┘
```

**States:**
- Default: `bg-white/5 backdrop-blur-sm border border-white/10`
- Hover: `bg-white/10 border-white/20` + subtle scale(1.02)
- Selected: `bg-accent/15 border-accent/40` + gold glow ring + scale(1.02) hold
- Selected + Hover: slightly brighter accent

**Multi-select:** Users tap/click to toggle selection. Multiple chips can be selected per question. A subtle checkmark appears in the top-right corner of selected chips.

### Question Images

Each question displays a different archetype mood image in the left panel:
- Use the archetype card images cyclically (the-siren-1.webp, the-muse-2.webp, etc.)
- Crossfade between images when question changes (1s transition)
- Images use object-cover with slight ken-burns zoom animation

### Navigation

**Bottom bar:**
- Back button (← icon, hidden on Q1)
- Progress dots (7 circles, current one filled, completed ones half-filled)
- Next button (→ icon, becomes "See Results" on Q7)

**Page dot shortcuts:** Clicking a dot jumps to that question (only available for visited questions)

### Question Transitions

- Moving **forward**: Current question fades out + slides left, new question fades in + slides from right
- Moving **back**: Current question fades out + slides right, new question fades in + slides from left
- Image crossfade happens simultaneously
- Duration: 400ms with expo-out easing

### Results View

```
┌─────────────────────────────────────────┐
│                                         │
│  Your Style Archetype                   │
│  ════════════════════                   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │   [ARCHETYPE IMAGE]            │    │
│  │   Full card imagery             │    │
│  │                                 │    │
│  │   ♛ THE EMPRESS                │    │
│  │   Nurturing • Grounding •      │    │
│  │   Abundant                      │    │
│  │                                 │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Secondary: The Muse                    │
│  (shown only if strong secondary)       │
│                                         │
│  [Share Your Result]  [Shop This Style] │
│  [Take the Masculine Quiz →]            │
│  [Retake Quiz]                          │
│                                         │
└─────────────────────────────────────────┘
```

**Results animation:** Archetype card scales up from center (0 → 1) with a gold shimmer sweep, name types in letter-by-letter, description fades in with stagger.

### Sharing Mechanism

- URL hash: `#results/feminine/empress/muse` or `#results/masculine/protector`
- When page loads with this hash, automatically scrolls to quiz section and shows results
- "Share" button copies URL to clipboard with toast notification
- Future: generate OG image via server endpoint (deferred)

### Exit / Retake

- "Retake Quiz" resets all answers, returns to Q1 with slide animation
- "Back to Archetypes" reverses the entry animation (quiz fades out, cards fade back in)
- "Take the [Other Gender] Quiz" switches the quiz to the other gender's questions, resets answers

---

## Data Architecture

### Quiz Questions (embedded in component)

```typescript
interface QuizQuestion {
  id: number;
  text: string;
  image: string; // archetype image path for left panel
  options: QuizOption[];
}

interface QuizOption {
  letter: string; // 'A', 'B', etc.
  text: string;   // answer description
}

interface QuizData {
  gender: 'feminine' | 'masculine';
  questions: QuizQuestion[];
  scoring: Record<string, string>; // letter -> archetype slug
}
```

### State Machine

```typescript
interface QuizState {
  phase: 'idle' | 'quiz' | 'calculating' | 'results';
  gender: 'feminine' | 'masculine';
  currentQuestion: number; // 0-6
  answers: Map<number, Set<string>>; // question index -> selected letters
  visitedQuestions: Set<number>;
  primaryArchetype: string | null;
  secondaryArchetype: string | null;
}
```

### Scoring Algorithm

```typescript
function calculateResults(answers: Map<number, Set<string>>): { primary: string; secondary: string | null } {
  const counts = new Map<string, number>();
  for (const [_, letters] of answers) {
    for (const letter of letters) {
      counts.set(letter, (counts.get(letter) ?? 0) + 1);
    }
  }

  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const primary = sorted[0]?.[0] ?? 'A';
  const secondary = sorted[1]?.[1] >= 2 ? sorted[1]?.[0] : null;

  return { primary, secondary };
}
```

---

## Component Structure

```
src/pages/archetypes.astro     — imports quiz, replaces "Still Not Sure?" cards
src/components/ArchetypeQuiz.astro  — quiz markup + styles + script
```

### ArchetypeQuiz.astro Props

```typescript
interface Props {
  gender: 'feminine' | 'masculine';
  archetypes: Array<{
    name: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
  }>;
}
```

### CSS Class Conventions

Following the site's existing patterns:
- `.quiz-*` prefix for all quiz-specific classes
- Frosted glass: `bg-white/[x] backdrop-blur-sm border border-white/[y]`
- Typography: `font-heading`, `font-body`, `text-accent`, `text-white/[x]`
- Animations: expo-out easing `cubic-bezier(0.16, 1, 0.3, 1)`
- Reduced motion: `@media (prefers-reduced-motion: reduce)` → no transitions

---

## Accessibility

- All answer chips are `role="checkbox"` with `aria-checked`
- Question progress communicated via `aria-live="polite"` region
- Focus management: focus moves to first answer chip on question change
- Keyboard: Enter/Space to select answer, Tab to navigate chips, Arrow keys for navigation bar
- Skip link: "Skip to results" appears if all questions answered
- Reduced motion: all transitions become instant opacity swaps
