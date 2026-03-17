# Staples & Statements Website — State Constitution

> This is a **STATE constitution** for the Staples & Statements website
> (`staplesandstatements.com`). It operates under the **FEDERAL constitution**
> at [`staples-and-statements-dna`](https://github.com/SG57/staples-and-statements-dna).
> Federal laws (Laws 1–42) take precedence. State laws may not contradict federal laws.

## Federal Reference

- **Repo:** `github.com/SG57/staples-and-statements-dna`
- **Local path:** `D:\SG57\staples-and-statements-dna`
- **Files:** `CONSTITUTION.md` (42 laws), `BRAND.md` (brand bible), `design-tokens.css` (CSS tokens)

---

## State Laws

### I. Tech Stack & Build

**State Law 1: The site is built with Astro 5 + Tailwind CSS v4, deployed to GitHub Pages via GitHub Actions.** No server runtime. All pages are statically generated at build time. Dynamic behavior is client-side JS only.

**State Law 2: Tailwind v4 base styles MUST be declared inside `@layer base {}`.** Unlayered CSS beats all Tailwind utility classes — this breaks `text-white`, color overrides, and every utility-driven pattern. The `@theme` block defines design tokens; `@layer base` defines defaults.

**State Law 3: Content collections are the single source of truth for structured content.** Archetypes, services, and testimonials live in `src/content/` with Zod schemas in `src/content/config.ts`. Style guide product data lives in `src/data/guides.ts`. Never duplicate content data outside these sources.

### II. Animation & Motion

**State Law 4: All dynamic elements must be animated and eased — no instant pops.** This is a constitutional absolute. Every show, hide, enter, exit, toggle, and state change must transition smoothly. If it moves, it eases.

**State Law 5: The animation system uses a single global speed knob `--dur` (default: 0.75s).** All animation durations are expressed as multiples of `--dur`. Changing `--dur` rescales the entire site proportionally. Entry ease: `var(--ease)` (expo-out). Exit ease: `var(--ease-exit)`.

**State Law 6: Scroll-reveal uses the `.s-r` / `.s-on` class system.** The `IntersectionObserver` in `BaseLayout.astro` adds `.s-r` to off-screen elements and toggles `.s-on` when they enter the viewport. Grid children stagger via `--d` CSS variable (0.13 × `--dur` per item, capped at index 7). Variants: `.s-r-img` (zoom), `.s-r-h` (heading), `.s-r-wipe` (clip-path), `.s-r-line` (scaleX).

**State Law 7: Astro ViewTransitions power page navigation.** Entry: `translateY(10px)` fade-in at `1.3 × --dur`. Exit: `translateY(-6px)` fade-out at `0.65 × --dur`. `prefers-reduced-motion: reduce` disables all view transitions.

**State Law 8: `prefers-reduced-motion: reduce` collapses `--dur` to `0.01s` and disables all scroll-reveal, view transitions, and skeleton shimmer.** No animation may bypass this. Content remains fully accessible with instant rendering.

### III. Image System

**State Law 9: The image elevation system is controlled by a single CSS variable `--img-elev` (default: 2).** Scale: 0 (flat), 1 (whisper), 2 (subtle), 3 (present), 4 (bold). All image shadows, inset borders, and vignettes scale from this value. Classes: `.img-frame` (standalone), `.img-frame-grid` (mosaic), `.img-frame-card` (product cards), `.img-frame-circle` (avatars).

**State Law 10: Images use modern formats (WebP preferred, AVIF acceptable).** New images must be WebP at quality 85–90. Existing JPEGs are acceptable as-is. Source/draft images live in `resources/` (not served); web-ready images go in `public/images/`.

**State Law 11: Images load with skeleton shimmer (`.s-sk`) until ready.** Shimmer uses gradient animation at `4 × --dur`. Dark-background variant auto-adapts via `.bg-primary .s-sk::after`. All images have `onerror` handlers that hide broken images gracefully.

### IV. Grain Texture

**State Law 12: Subtle film grain texture is applied site-wide via the `--grain` variable.** Scale: 0 (off), 1 (whisper/default), 2 (subtle), 3 (present), 4 (bold). Grain uses SVG `feTurbulence` noise with `mix-blend-mode: soft-light`. Disabled for `prefers-contrast: more`. Grain appears above background color but below all HTML content.

### V. Navigation & Chrome

**State Law 13: The compact section bar appears on desktop only (hidden below `1024px`).** It is a fixed bar at viewport top that shows contextual section info as the user scrolls. Controlled by `IntersectionObserver` + `data-compact-*` attributes on sections. Theme variants: `light`, `dark`, `surface`.

**State Law 14: The nav supports transparent-overlay mode for hero pages.** When `transparentNav={true}`, the nav starts transparent over the hero image with white text and text-bloom shadows. On scroll past 80px, it restores to solid background with brand colors. The transition is CSS-only, triggered by `.nav-scrolled` class.

**State Law 15: FAB group (scroll-to-top + quick-menu) appears after 300px scroll.** Positioned `fixed bottom-6 right-6`. Entrance: fade + rise. The quick-menu panel opens above the FABs with backdrop blur.

### VI. Hero Mosaic

**State Law 16: The homepage hero uses a 6-cell mosaic carousel with auto-cycling images.** Cell images crossfade every 12s with 2.2s stagger between cells. A shared active-images registry guarantees no two cells show the same image simultaneously. Initial images are server-rendered for instant first paint. Cycling is disabled for `prefers-reduced-motion`.

### VII. SEO & Structured Data

**State Law 17: Every page must have unique `<title>`, `<meta description>`, canonical URL, and Open Graph tags.** These are set via `BaseLayout.astro` props.

**State Law 18: JSON-LD structured data must be present on every page.** At minimum: `LocalBusiness` schema on the homepage. Service pages include `Service` schema. Archetype pages include `WebPage` schema.

### VIII. Performance

**State Law 19: The site targets sub-1s First Contentful Paint on static delivery.** No server-side rendering, no client-side hydration for content. JS is used only for interactive behaviors (carousel, quiz, shade selector, animations). All pages are pre-rendered HTML.

**State Law 20: Above-the-fold hero images use `loading="eager"`.** All other images use `loading="lazy"`. No image may block initial render.

### IX. Token Mapping

**State Law 21: The site's `@theme` block uses `--color-*` prefixed tokens. The federal DNA uses semantic prefixes (`--brand-*`, `--surface-*`, `--text-*`).** Both resolve to the same hex values. The mapping is documented in `src/styles/global.css`. The DNA tokens are imported as additional `:root` custom properties so both naming conventions are available in CSS.

| Site Token (`@theme`) | DNA Token (`design-tokens.css`) | Value |
|---|---|---|
| `--color-primary` | `--brand-primary` | `#1a1613` |
| `--color-primary-light` | `--brand-primary-light` | `#2d2926` |
| `--color-accent` | `--brand-accent` | `#b8977e` |
| `--color-accent-light` | `--brand-accent-light` | `#cdb5a0` |
| `--color-accent-text` | `--brand-accent-text` | `#8c6040` |
| `--color-background` | `--brand-background` / `--surface-background` | `#faf7f4` |
| `--color-surface` | `--surface-card` | `#f2ede8` |
| `--color-surface-dark` | `--surface-border` | `#e8e0d8` |
| `--color-text` | `--text-primary` | `#1a1613` |
| `--color-text-muted` | `--text-muted` | `#6b5e53` |
| `--color-text-light` | `--text-light` | `#9c8e82` |
| `--color-white` | `--brand-white` | `#ffffff` |
| `--color-secondary` | `--brand-secondary` | `#8c7e72` |
| `--color-secondary-light` | `--brand-secondary-light` | `#a89b8f` |

---

## Amendment Process

State law changes follow the same PR-based process as the site codebase. State laws must not contradict federal laws. If a state law conflicts with a new federal law, the state law must be amended or removed.
