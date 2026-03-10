# Staples & Statements — Website Design Document & Playbook

> **Client:** Danielle Marie Holman — Independent Wardrobe Stylist & Creative Director
> **Brand:** Staples & Statements
> **Developer:** Cord Rehn (SG57 Labs — sg57.dev)
> **Domain:** staplesandstatements.com (registered, DNS pointed to GitHub Pages)
> **Repo:** https://github.com/SG57/staples-and-statements-site
> **Date:** 2026-03-09
> **Status:** Pre-development — design complete, ready for build

---

## Table of Contents

1. [Brand Identity & Voice](#1-brand-identity--voice)
2. [Revenue Architecture](#2-revenue-architecture)
3. [Site Map & Information Architecture](#3-site-map--information-architecture)
4. [Service Catalog](#4-service-catalog)
5. [Feature Decision Matrix](#5-feature-decision-matrix)
6. [Technical Stack](#6-technical-stack)
7. [Account & Credential Map](#7-account--credential-map)
8. [Playbook: Email Infrastructure](#8-playbook-email-infrastructure)
9. [Playbook: GitHub Repo & Deploy Pipeline](#9-playbook-github-repo--deploy-pipeline)
10. [Playbook: Site Build Sequence](#10-playbook-site-build-sequence)
11. [Playbook: Booking System (Calendly)](#11-playbook-booking-system-calendly)
12. [Playbook: Contact Form (Formspree)](#12-playbook-contact-form-formspree)
13. [Playbook: Analytics (GA4)](#13-playbook-analytics-ga4)
14. [Playbook: Waitlist Email Capture (Brevo)](#14-playbook-waitlist-email-capture-brevo)
15. [Playbook: Style Guide Sales Migration (Beacons → Payhip)](#15-playbook-style-guide-sales-migration-beacons--payhip)
16. [Playbook: Launch Checklist](#16-playbook-launch-checklist)
17. [Playbook: Post-Launch — How Danielle Updates Content](#17-playbook-post-launch--how-danielle-updates-content)
18. [Design Principles & Visual Direction](#18-design-principles--visual-direction)
19. [Page-by-Page Specifications](#19-page-by-page-specifications)
20. [Phase 2 Roadmap](#20-phase-2-roadmap)
21. [Parking Lot](#21-parking-lot)

---

## 1. Brand Identity & Voice

### Brand Name
**Staples & Statements** — always use the ampersand (&). Use "and" ONLY where & is technically impossible (e.g., URLs, file names, environments that escape special characters).

### Brand Positioning
Danielle is a **wardrobe stylist and creative director**. Not a "fashion blogger." Not a "side hustle." Not a "flight attendant who also styles." She is a stylist with a proven methodology (the Archetype Framework), a curated product eye (500+ LTK products), and a growing national audience (52k+ Instagram followers).

### Brand Voice
**Elevated professional with warmth underneath.** Think luxury fashion magazine editor who actually likes people.

- **Do:** Confident, direct, warm, editorial. "Let's build your dream wardrobe together."
- **Don't:** Corporate jargon ("this service is designed to"), overly casual ("omg you guys"), or pushy sales language.
- **Tone model:** Goop meets Net-a-Porter editorial meets a friend who happens to have incredible taste.

### Visual Direction
- **Aesthetic:** Editorial maximalist — rich, layered, high-contrast photography with clean typography
- **Typography reference:** Cormorant Garamond (serif, elegant headings) + clean sans-serif body (Inter, DM Sans, or similar)
- **Color palette:** TBD during build — derive from Danielle's existing brand photography. Likely warm neutrals + one accent.
- **Hero treatment:** Multi-image mosaic/collage, NOT single hero image. Shows breadth and body of work.
- **Photography:** All sourced from Danielle's existing professional portfolio (Instagram, photoshoots, Women Rising). No stock photography. Ever.

---

## 2. Revenue Architecture

The site serves **5 revenue streams**:

| Stream | Mechanism | Current Monthly | Potential |
|---|---|---|---|
| **Styling Services** | Consultation → paid sessions | Variable | Primary — grows with traffic |
| **LTK Commissions** | Curated product picks, affiliate links | ~$700/mo | Scales with site traffic + IG growth |
| **Digital Style Guides** | $15–$27 PDFs sold via Beacons.ai (→ Payhip) | Variable | Passive — scales with archetype quiz traffic |
| **Sourcing Fees** | ~15% finder's fee on items sourced for clients | Variable | Grows with VIP/ongoing client base |
| **Future: Clever Closet** | SaaS subscription platform | $0 (pre-launch) | Long-term platform play |

### The Archetype Flywheel

The 7 Feminine Archetypes framework is Danielle's proven viral content. One quiz reel took her from 4k to 52k followers. The site architecture treats archetypes as the **organizing principle** that connects all revenue streams:

```
Viral archetype content (IG/TikTok)
  → Drives traffic to site
    → Style Quiz page (archetype discovery)
      → Style Guide purchase ($27)         ← digital product revenue
      → LTK collection browse              ← affiliate commission
      → "Want personalized styling?"        ← service booking
      → "Something new is coming"           ← waitlist capture
```

---

## 3. Site Map & Information Architecture

```
staplesandstatements.com/
├── /                              Homepage
├── /about                         Danielle's story & credentials
├── /services                      Service overview (cards)
│   ├── /services/consultation     FREE 20-min consultation
│   ├── /services/color-analysis   $50 Color Analysis
│   ├── /services/body-analysis    $50 Body Analysis
│   ├── /services/micro-styling    $30/session Micro-Styling
│   ├── /services/wardrobe-revamp  $55/hr Wardrobe Revamp
│   ├── /services/photoshoot-styling   $55/hr Photoshoot Styling
│   ├── /services/master-style-moodboard   ~$99 Master Style Moodboard
│   ├── /services/sourcing         ~15% Sourcing/Personal Shopping
│   └── /services/vip              $3,000/yr VIP Styling
├── /style-quiz                    Archetype quiz landing (Phase 1: video embeds + archetype cards)
├── /shop                          Style Guides + LTK picks (organized by archetype)
├── /clients                       Testimonials (file-based content collections)
├── /contact                       Formspree form + Calendly booking embed
└── /booking-confirmed             Post-booking redirect from Calendly (upsell + re-engage)
```

### Navigation Bar (6 items)
`Home | About | Services | Style Quiz | Shop | Contact`

Testimonials (`/clients`) accessible from footer and inline throughout other pages. Does not need primary nav placement.

### SEO Architecture
Each service detail page is an independent SEO target:
- `/services/color-analysis` → "color analysis stylist San Diego"
- `/services/photoshoot-styling` → "photoshoot stylist San Diego"
- `/style-quiz` → "feminine archetype style quiz" / "what's my style archetype"

This gives us **12+ keyword-targeted pages** from day one.

---

## 4. Service Catalog

### Active Services

| Service | Price | Duration | Target Client | CTA |
|---|---|---|---|---|
| **Consultation** | FREE | 20 min (Zoom/FaceTime) | All new clients (required gate) | Book Your Free Consultation |
| **Color Analysis** | $50 | Per session | Clients establishing a style baseline | Book Your Free Consultation |
| **Body Analysis** | $50 | Per session | Clients establishing a style baseline | Book Your Free Consultation |
| **Micro-Styling** | $30/session | 3 outfits from existing closet | Budget-conscious, closet overwhelm | Book Your Free Consultation |
| **Wardrobe Revamp** | $55/hr | Flexible | Dating, body changes, entrepreneurs, parents | Book Your Free Consultation |
| **Photoshoot Styling** | $55/hr | Flexible (+range fee 30+ mi) | Models, photographers | Book Your Free Consultation |
| **Master Style Moodboard** | ~$99 (TBC) | Per session | Clients wanting a style vision document | Book Your Free Consultation |
| **Sourcing** | ~15% finder's fee (TBC) | Ongoing/ad-hoc | Clients wanting curated finds | Book Your Free Consultation |
| **VIP Styling** | $3,000/yr | On-call, year-round | CEOs, busy entrepreneurs, event-heavy lifestyles | Book Your Free Consultation |

**Note:** Every CTA funnels to the same Calendly booking link. The consultation is the universal entry point. Danielle qualifies and routes from there.

### Suspended Service
- **Digital Closet** ($350/session) — Suspended. Being replaced by an upcoming platform product. Teased subtly on the homepage as "something new is coming" without revealing name or features.

### Prices TBC
Master Style Moodboard price (~$99) and Sourcing terms (~15%) need final confirmation from Danielle before launch.

---

## 5. Feature Decision Matrix

### Must Have (Phase 1 — Launch)

| Feature | Approach | Cost | Effort | Notes |
|---|---|---|---|---|
| Static site | Astro + Tailwind CSS | $0 | Medium | SSR, fast, SEO-native |
| Hosting | GitHub Pages + GitHub Actions | $0 | Low | Auto-deploy on push to main |
| Custom domain | staplesandstatements.com via Namecheap DNS | ~$12/yr (domain) | Low | Already owned |
| HTTPS | GitHub Pages auto-provisions | $0 | Zero | Automatic with custom domain |
| Email redirects | Namecheap email redirect | $0 | Low | 3 aliases → Gmail |
| Email sending (SMTP) | Brevo free tier (300/day) | $0 | Medium | Enables Gmail send-as |
| Gmail send-as | Gmail settings + Brevo SMTP | $0 | Medium | Reply from danielle.marie@staplesandstatements.com |
| Booking system | Calendly free tier (1 event type) | $0 | Low | Embed on /contact page |
| Contact form | Formspree free tier (50/mo) | $0 | Low | Submits to hello@staplesandstatements.com |
| Analytics | Google Analytics 4 | $0 | Low | Under Danielle's Gmail account |
| Testimonials | File-based Astro content collections | $0 | Low | Markdown + optional images per client |
| OG/social sharing images | Per-page meta images | $0 | Medium | Generated during build |
| SEO fundamentals | Meta tags, schema.org, sitemap, robots.txt | $0 | Medium | Baked into Astro templates |
| Image optimization | Astro built-in (astro:assets) | $0 | Zero | Auto WebP/AVIF, responsive sizes, lazy-load |
| Instagram content | Curated static images (30–50 best posts) | $0 | Low | 6–9 on homepage, 2–3 per service page |
| LTK integration | Shop page with curated product cards + LTK links | $0 | Medium | Organized by archetype |
| Style guide sales | Product cards on /shop, "Buy" links to Beacons.ai | $0 | Low | Beacons.ai handles payment (9% fee) |
| Style Quiz page | Landing page + embedded IG Reel videos + archetype cards | $0 | Medium | Phase 1 bridge to interactive quiz |
| Waitlist capture | Brevo embedded form on homepage | $0 | Low | "Something new is coming" — no name/features |
| Service detail pages | 9 individual pages (templated, data-driven) | $0 | Medium | Each page is independent SEO target |
| Homepage | Hero mosaic + services preview + testimonial highlight + IG grid + CTA | $0 | High | Most design effort here |

### Quick Win (Phase 1.5 — Immediately Post-Launch)

| Feature | Approach | Cost | Effort | Notes |
|---|---|---|---|---|
| Beacons.ai → Payhip migration | Move digital product sales to Payhip (5% vs 9%) | $0 | Medium | Embeddable checkout, customer stays on site |
| Replace beacons.ai link-in-bio | Instagram bio link → staplesandstatements.com | $0 | Zero | The website IS the new link-in-bio |
| clevercloset.app email | Namecheap redirect: hello@ → staplesandstatementss@gmail.com | $0 | Low | Minimal setup, future-proofing |

### Phase 2 — Post-Launch

| Feature | Approach | Cost | Effort | Notes |
|---|---|---|---|---|
| Interactive archetype quiz | On-site JavaScript wizard with AI-generated art | $0–$20 (AI image gen) | High | RPG character-select aesthetic, shareable results |
| Male archetype quiz mode | Animated toggle between feminine/masculine modes | $0 | Medium | Part of quiz build |
| Automated Color Analysis | Hosted API from D:\SG57\StaplesAndStatements pipeline | $0 | High | Separate project, integrates later |
| Clever Closet launch | SaaS platform at clevercloset.app | TBD | Very High | Separate project, own infrastructure |
| Google Workspace migration | Replace Namecheap+Brevo+Gmail hack | $7/user/mo | Low | When email volume justifies it |
| Live Instagram feed | Behold or similar widget | ~$10/mo | Low | Only if curated static proves insufficient |
| Blog / content section | Astro content collections | $0 | Medium | Repurpose TikTok/IG content as articles for SEO |

### Backlog / Parking Lot

| Idea | Notes |
|---|---|
| AI email scanner for testimonials | Scans Danielle's email for compliments, auto-adds to testimonials folder, auto-pushes to repo |
| Automated style guide pipeline | Fully automated Color/Body Analysis → PDF generation → delivery |
| Clever Closet integration on site | Once CC launches, deep integration between site and platform |
| Archetype-based interactive lookbook | Browse outfits by archetype, AI-generated outfit previews |
| Client portal | Returning clients log in to see their moodboard, analysis results, sourced items |

---

## 6. Technical Stack

| Layer | Tool | Purpose |
|---|---|---|
| **Framework** | Astro | Static site generator, content collections, SSR, image optimization |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Hosting** | GitHub Pages | Free static hosting with custom domain + HTTPS |
| **CI/CD** | GitHub Actions | Auto-build and deploy on push to main |
| **Booking** | Calendly (free tier) | Embeddable scheduling widget, 1 event type |
| **Contact Form** | Formspree (free tier) | 50 submissions/month, no backend needed |
| **Analytics** | Google Analytics 4 | Traffic, demographics, conversion tracking |
| **Email Redirect** | Namecheap Email Redirect | Forward *@staplesandstatements.com → Gmail |
| **Email SMTP** | Brevo (free tier, 300/day) | Enables Gmail send-as with custom domain |
| **Email Client** | Gmail (personal account) | Receive, filter, label, and send-as |
| **Digital Products** | Beacons.ai (Phase 1) → Payhip (Phase 1.5) | Payment processing for style guide sales |
| **Waitlist** | Brevo embedded form | Email capture for upcoming product launch |
| **Domain** | Namecheap | DNS management, domain registration |

### Build Model Recommendation

| Build Phase | Model | Context | Reasoning Level |
|---|---|---|---|
| Site scaffold + architecture | Opus 4.6 | 200k (standard) | Extended thinking (high) |
| Individual page builds | Sonnet 4.6 | 200k (standard) | Standard |
| Tailwind styling + visual polish | Sonnet 4.6 | 200k (standard) | Standard |
| SEO, meta tags, schema.org | Sonnet 4.6 | 200k (standard) | Standard |
| Complex integrations (Calendly, Brevo, GA4) | Opus 4.6 | 200k (standard) | Extended thinking (high) |
| Final review + QA | Opus 4.6 | 200k (standard) | Extended thinking (high) |

1M context is NOT needed. The full design doc + site code fits within 200k.

---

## 7. Account & Credential Map

### CRITICAL: Two People, Two Companies, Two Gmails

| Person | Company | Personal Gmail | Professional Domain |
|---|---|---|---|
| **Cord Rehn** | SG57 Labs | jordansg57@gmail.com | sg57.dev |
| **Danielle Marie Holman** | Staples & Statements | staplesandstatementss@gmail.com (**two s's**) | staplesandstatements.com |

### Platform → Account Mapping

| Platform | Account/Login | Owner | Purpose |
|---|---|---|---|
| **Namecheap** | Cord's existing Namecheap account | Cord | DNS for staplesandstatements.com (+ sg57.dev + clevercloset.app) |
| **GitHub** | github.com/SG57 | Cord | Repo hosting, GitHub Pages, Actions |
| **Brevo** (for S&S) | **NEW account** — register with **staplesandstatementss@gmail.com** | Danielle (Cord manages) | SMTP for send-as + waitlist forms |
| **Brevo** (for SG57) | Existing account — jordansg57@gmail.com | Cord | Separate. Do NOT use for S&S. |
| **Gmail** (for send-as) | **staplesandstatementss@gmail.com** | Danielle (Cord sets up) | Receive forwarded mail, send-as danielle.marie@ |
| **Google Analytics 4** | **staplesandstatementss@gmail.com** | Danielle (Cord manages) | GA4 property for staplesandstatements.com |
| **GA4 Editor access** | jordansg57@gmail.com | Cord | Added as Editor on Danielle's GA4 property |
| **Calendly** | **NEW account** — register with **staplesandstatementss@gmail.com** | Danielle (Cord sets up) | Booking system for consultations |
| **Formspree** | **NEW account** — register with **staplesandstatementss@gmail.com** | Danielle (Cord manages) | Contact form submissions |
| **Beacons.ai** | Existing account (Danielle's) | Danielle + PA | Digital product sales (Phase 1) |
| **Payhip** (Phase 1.5) | **NEW account** — register with **staplesandstatementss@gmail.com** | Danielle (Cord migrates) | Digital product sales (replaces Beacons.ai) |
| **LTK** | Existing account (Danielle's) | Danielle | Affiliate product links — no setup needed |

### Email Address Map

| Email Address | Platform | Forwards To | Send-As Configured? |
|---|---|---|---|
| danielle.marie@staplesandstatements.com | Namecheap redirect | staplesandstatementss@gmail.com | **YES** — primary send-as identity |
| hello@staplesandstatements.com | Namecheap redirect | staplesandstatementss@gmail.com | No (receive only) |
| support@staplesandstatements.com | Namecheap redirect | staplesandstatementss@gmail.com | No (receive only, future use) |
| hello@clevercloset.app | Namecheap redirect | staplesandstatementss@gmail.com | No (receive only, future use) |

---

## 8. Playbook: Email Infrastructure

**Prerequisites:** Access to Cord's Namecheap account + access to staplesandstatementss@gmail.com

### Step 1: Namecheap Email Redirects for staplesandstatements.com

> **Platform:** Namecheap (Cord's account)
> **Domain:** staplesandstatements.com

1. Log in to Namecheap → Domain List → click `staplesandstatements.com` → Manage
2. Go to the **"Redirect Email"** tab (same section you used for sg57.dev)
3. Add the following aliases:

| Alias | Forward To |
|---|---|
| `danielle.marie` | `staplesandstatementss@gmail.com` |
| `hello` | `staplesandstatementss@gmail.com` |
| `support` | `staplesandstatementss@gmail.com` |

4. Click **Add** for each, then verify they appear in the redirect list
5. **Expected result:** Emails to danielle.marie@staplesandstatements.com, hello@staplesandstatements.com, and support@staplesandstatements.com all arrive in Danielle's Gmail inbox (staplesandstatementss@gmail.com)

### Step 2: Namecheap Email Redirect for clevercloset.app

> **Platform:** Namecheap (Cord's account)
> **Domain:** clevercloset.app

1. Same process as above but for clevercloset.app
2. Add one alias:

| Alias | Forward To |
|---|---|
| `hello` | `staplesandstatementss@gmail.com` |

3. **Expected result:** hello@clevercloset.app arrives in Danielle's Gmail

### Step 3: Brevo Account Setup (for Staples & Statements)

> **Platform:** Brevo (brevo.com)
> **Account:** NEW — register with **staplesandstatementss@gmail.com**
> **⚠️ DO NOT use your existing Brevo account (jordansg57@gmail.com / SG57 Labs). Create a NEW account for S&S.**

1. Go to https://www.brevo.com → Sign Up
2. Register with email: **staplesandstatementss@gmail.com**
3. Company name: **Staples & Statements**
4. Complete onboarding wizard
5. Go to **Senders & IPs** → **Senders** → Add a new sender:
   - From Name: `Danielle Marie`
   - From Email: `danielle.marie@staplesandstatements.com`
   - Click Add → Brevo sends a verification email to that address → it forwards to staplesandstatementss@gmail.com → click the verification link
6. Go to **SMTP & API** → **SMTP Settings**
7. Note down:
   - **SMTP Server:** smtp-relay.brevo.com
   - **Port:** 587
   - **Login:** (your Brevo login email — staplesandstatementss@gmail.com)
   - **SMTP Key:** Generate one → copy it → save it securely

### Step 4: Gmail Send-As Configuration

> **Platform:** Gmail
> **Account:** Log in as **staplesandstatementss@gmail.com** (Danielle's Gmail)
> **⚠️ You must be logged into HER Gmail, not yours.**

1. Go to Gmail → Settings (gear icon) → **See all settings** → **Accounts and Import** tab
2. Under **"Send mail as"** → click **"Add another email address"**
3. Enter:
   - Name: `Danielle Marie`
   - Email: `danielle.marie@staplesandstatements.com`
   - Uncheck "Treat as an alias" — **WAIT, actually CHECK this box** (it IS an alias since the mail forwards to this Gmail)
4. Click **Next Step**
5. Enter SMTP settings from Step 3:
   - SMTP Server: `smtp-relay.brevo.com`
   - Port: `587`
   - Username: `staplesandstatementss@gmail.com` (the Brevo login)
   - Password: the **SMTP Key** from Step 3 (NOT the Brevo account password)
   - Select: **Secured connection using TLS**
6. Click **Add Account**
7. Gmail sends a verification email to danielle.marie@staplesandstatements.com → it forwards to this same inbox → find it → click the verification link OR enter the code
8. **Set as default** (optional): Under "Send mail as," click **"make default"** next to danielle.marie@staplesandstatements.com so all outgoing mail uses the professional address

### Step 5: Gmail Filters & Labels (in Danielle's Gmail)

> **Platform:** Gmail — **staplesandstatementss@gmail.com**

1. Create labels:
   - `S&S / General` (for hello@ mail)
   - `S&S / Personal` (for danielle.marie@ mail)
   - `S&S / Support` (for support@ mail)
   - `Clever Closet` (for hello@clevercloset.app mail)
2. Create filters:
   - To: `hello@staplesandstatements.com` → Apply label `S&S / General`
   - To: `danielle.marie@staplesandstatements.com` → Apply label `S&S / Personal`
   - To: `support@staplesandstatements.com` → Apply label `S&S / Support`
   - To: `hello@clevercloset.app` → Apply label `Clever Closet`

### Step 6: Verify End-to-End

1. From your personal email (jordansg57@gmail.com), send a test email to each address:
   - danielle.marie@staplesandstatements.com
   - hello@staplesandstatements.com
   - support@staplesandstatements.com
   - hello@clevercloset.app
2. **Expected:** All 4 arrive in staplesandstatementss@gmail.com with correct labels
3. Reply to one of them from Gmail → select "From: danielle.marie@staplesandstatements.com" in the compose window
4. **Expected:** The reply arrives at jordansg57@gmail.com showing "From: Danielle Marie <danielle.marie@staplesandstatements.com>"

---

## 9. Playbook: GitHub Repo & Deploy Pipeline

> **Platform:** GitHub (Cord's SG57 account)
> **Repo:** github.com/SG57/staples-and-statements-site

### Step 1: Initialize Astro Project

This will be done by Claude Code during the build phase. The repo already exists and is empty.

```bash
# Claude Code will run:
npm create astro@latest . -- --template minimal --typescript strict
npx astro add tailwind
```

### Step 2: GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: GitHub Pages Custom Domain

> **Platform:** GitHub → repo Settings → Pages

1. Go to repo Settings → Pages
2. Source: GitHub Actions
3. Custom domain: `staplesandstatements.com`
4. Check "Enforce HTTPS"

> **Platform:** Namecheap → staplesandstatements.com DNS

5. In Namecheap DNS settings, ensure these records exist:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` record → `www` → `sg57.github.io`

6. Add a `CNAME` file to the repo's `public/` folder containing: `staplesandstatements.com`

**Expected result:** Pushing to main triggers build + deploy. Site is live at https://staplesandstatements.com within minutes.

---

## 10. Playbook: Site Build Sequence

### Build Order (component dependencies flow top-down)

```
Phase A: Foundation
  1. Astro project init + Tailwind config
  2. Global layout (nav, footer, meta tags)
  3. Typography + color system (Tailwind config)
  4. Responsive breakpoints

Phase B: Core Pages
  5. Homepage (hero mosaic, services preview, testimonial highlight, IG grid, waitlist callout, CTAs)
  6. About page
  7. Services overview page (card grid)
  8. Service detail page template (data-driven, one component serves all 9 services)
  9. Contact page (Formspree form + Calendly embed)

Phase C: Revenue Pages
  10. Style Quiz page (archetype cards + IG video embeds)
  11. Shop page (style guides section + LTK picks section)
  12. Clients/testimonials page

Phase D: Infrastructure
  13. SEO: meta tags, schema.org, sitemap, robots.txt, OG images
  14. Analytics: GA4 snippet
  15. Waitlist: Brevo form embed
  16. 404 page

Phase E: Polish
  17. Mobile responsiveness pass
  18. Lighthouse audit (target: 95+ all categories)
  19. Cross-browser testing
  20. Content review with Danielle
```

### Content Collections Structure

```
/src/content/
├── services/
│   ├── consultation.md
│   ├── color-analysis.md
│   ├── body-analysis.md
│   ├── micro-styling.md
│   ├── wardrobe-revamp.md
│   ├── photoshoot-styling.md
│   ├── master-style-moodboard.md
│   ├── sourcing.md
│   └── vip.md
├── testimonials/
│   ├── maral/
│   │   ├── testimonial.md
│   │   └── photo.jpg          (optional)
│   ├── janessa/
│   │   └── testimonial.md
│   ├── michael/
│   │   └── testimonial.md
│   └── gabi/
│       └── testimonial.md
├── archetypes/
│   ├── the-muse.md
│   ├── the-empress.md
│   ├── the-enchantress.md
│   ├── the-warrior.md
│   ├── the-angelic-one.md
│   ├── the-siren.md
│   └── the-creator.md
└── shop/
    ├── style-guides.json       (product cards data)
    └── ltk-collections.json    (curated LTK links by archetype)
```

Each service markdown file contains:
```yaml
---
title: "Wardrobe Revamp"
slug: "wardrobe-revamp"
price: "$55/hr"
duration: "Flexible"
perfectFor: "Clients who are single and dating, have experienced body changes, entrepreneurs, and parents"
order: 5
---
Service description body copy here...
```

Each testimonial markdown file contains:
```yaml
---
name: "Michael"
service: "wardrobe-revamp"
date: 2025-01-01
hasPhoto: false
---
Testimonial quote text here...
```

---

## 11. Playbook: Booking System (Calendly)

> **Platform:** Calendly (calendly.com)
> **Account:** NEW — register with **staplesandstatementss@gmail.com**
> **⚠️ Use Danielle's Gmail, NOT jordansg57@gmail.com**

### Step 1: Create Account

1. Go to https://calendly.com → Sign Up
2. Register with: **staplesandstatementss@gmail.com**
3. Name: **Danielle Marie Holman**
4. During onboarding, connect **Google Calendar** (the one attached to staplesandstatementss@gmail.com)
   - This ensures Calendly reads her calendar for availability AND creates events on it
   - Google Calendar syncs to her iPhone Calendar natively via the Google Calendar iOS app

### Step 2: Create Event Type

1. Create a new event type:
   - **Event name:** `Staples & Statements — Consultation with Danielle Marie`
   - **Duration:** 20 minutes
   - **Location:** Add both options: Zoom + FaceTime (let invitee choose)
   - **Description:** "A free 20-minute consultation to discuss your style goals and identify which services are the best fit for you."
2. **Availability:**
   - Set her standard available hours (e.g., Mon–Fri 10am–6pm PT, Sat 10am–2pm PT)
   - Calendly will automatically respect blocks on her Google Calendar (flight days)
   - Minimum scheduling notice: 24 hours
   - Buffer between events: 15 minutes
3. **Questions:** Add one custom question:
   - "How did you hear about Staples & Statements?" (dropdown: Instagram, TikTok, Friend/Referral, Google Search, Other)
4. **Confirmation page:** Customize the confirmation message with her brand voice
5. **Notifications:** Enable email notifications to staplesandstatementss@gmail.com

### Step 3: Embed on Website

1. In Calendly → Share → **Embed** → choose **Inline Embed** or **Popup Widget**
2. Copy the embed code snippet
3. Add to the `/contact` page in Astro

**The flight schedule workflow:**
1. ~10th of each month: Danielle bids for next month's flight schedule
2. ~11th: Schedule is locked
3. She opens Google Calendar → blocks out all flight days for the upcoming month
4. Calendly automatically hides those days from clients
5. Clients only see and book available slots

---

## 12. Playbook: Contact Form (Formspree)

> **Platform:** Formspree (formspree.io)
> **Account:** NEW — register with **staplesandstatementss@gmail.com**
> **⚠️ Use Danielle's Gmail, NOT jordansg57@gmail.com**

### Step 1: Create Account & Form

1. Go to https://formspree.io → Sign Up with **staplesandstatementss@gmail.com**
2. Create a new form
3. Note the form endpoint URL (e.g., `https://formspree.io/f/xyzabc123`)
4. Set the notification email to: **hello@staplesandstatements.com**
   - (This forwards to staplesandstatementss@gmail.com via Namecheap redirect and gets the `S&S / General` label)

### Step 2: Form Fields

The contact form on `/contact` will include:
- Name (required)
- Email (required)
- Phone (optional)
- How did you hear about us? (dropdown, optional)
- Message (textarea, required)

### Step 3: Integrate in Astro

Standard HTML form with `action` attribute pointing to the Formspree endpoint. No JavaScript required. Formspree handles spam filtering (honeypot + reCAPTCHA on their end).

---

## 13. Playbook: Analytics (GA4)

> **Platform:** Google Analytics (analytics.google.com)
> **Account:** Log in as **staplesandstatementss@gmail.com**
> **⚠️ Use Danielle's Gmail. Cord gets added as Editor, NOT as the owner.**

### Step 1: Create GA4 Property

1. Log in to https://analytics.google.com as **staplesandstatementss@gmail.com**
2. Click **Admin** (gear icon) → **Create** → **Account**
3. Account name: **Staples & Statements**
4. Create Property:
   - Property name: `staplesandstatements.com`
   - Time zone: Pacific Time (US)
   - Currency: USD
5. Business details: Industry → Other / Beauty & Fitness, Size → Small
6. Create a **Web** data stream:
   - URL: `https://staplesandstatements.com`
   - Stream name: `Main Website`
7. Copy the **Measurement ID** (starts with `G-`)

### Step 2: Add Cord as Editor

1. In GA4 Admin → Account Access Management
2. Add user: **jordansg57@gmail.com** with role **Editor**
3. **Expected result:** Cord can view all data and configure settings but Danielle owns the account

### Step 3: Install on Site

Add the GA4 snippet to the Astro global layout's `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with the actual Measurement ID.

### Step 4: Event Tracking (Post-Launch)

Set up custom events for:
- Calendly booking clicks
- Formspree form submissions
- LTK outbound link clicks
- Style guide "Buy" button clicks
- Waitlist form submissions

---

## 14. Playbook: Waitlist Email Capture (Brevo)

> **Platform:** Brevo (same S&S account from email setup — **staplesandstatementss@gmail.com**)
> **⚠️ This uses the SAME Brevo account created in Section 8, Step 3. Do NOT create a new one.**

### Step 1: Create a Contact List

1. Log in to Brevo as **staplesandstatementss@gmail.com**
2. Go to **Contacts** → **Lists** → Create a new list
3. Name: `Product Waitlist`

### Step 2: Create an Embedded Form

1. Go to **Contacts** → **Forms** → Create a new form
2. Form type: **Subscription**
3. Fields: Email only (keep it minimal — one field + submit button)
4. Success message: "You're on the list. We'll let you know when it's ready."
5. Add subscribers to list: `Product Waitlist`
6. Get the embed code (HTML snippet)

### Step 3: Embed on Homepage

Place the form in a subtle callout section on the homepage:

> *"We're building something new for your wardrobe. Be the first to know."*
> [email field] [Notify Me]

No product name. No feature descriptions. No competitive intel exposed.

---

## 15. Playbook: Style Guide Sales Migration (Beacons → Payhip)

**Priority:** Phase 1.5 (immediately post-launch)
**Why:** Beacons.ai takes a **9% commission** on all sales. Payhip takes **5%** with embeddable checkout.

> **Platform:** Payhip (payhip.com)
> **Account:** NEW — register with **staplesandstatementss@gmail.com**

### Products to Migrate (6 total)

| Product | Price | Format |
|---|---|---|
| The 7 Feminine Archetypes Style Guide | $27 | Digital (PDF) |
| The Ultimate Single Moms Style Guide 40+ | $27 | Digital (PDF) |
| The Ultimate Style Edit | $27 | Digital (PDF) |
| The Ultimate Maximalist Style Guide | $27 | Digital (PDF) |
| The Ultimate Style Edit: Men's Edition | $27 | Digital (PDF) |
| 10 Outfits, No Overpacking — The Stylish Mini Guide | $15 | Digital (PDF) |

### Migration Steps

1. Create Payhip account with **staplesandstatementss@gmail.com**
2. Set up Stripe or PayPal for payouts (use Danielle's accounts)
3. Upload each product with title, description, cover image, and the PDF file
4. Get embed/buy-button code for each product
5. Update the `/shop` page: replace Beacons.ai links with Payhip embed buttons
6. Test a purchase end-to-end
7. Once confirmed working, remove products from Beacons.ai
8. **Savings:** ~4% per sale ($1.08 per $27 guide sold)

---

## 16. Playbook: Launch Checklist

### Pre-Launch (before DNS switch)

- [ ] All pages render correctly at localhost
- [ ] Mobile responsive on iPhone SE, iPhone 15, iPad, common Android sizes
- [ ] Lighthouse audit: 95+ Performance, Accessibility, Best Practices, SEO
- [ ] All internal links work (no 404s)
- [ ] Meta titles and descriptions set for every page
- [ ] OG images generated and displaying correctly (test with https://opengraph.xyz)
- [ ] Formspree form submits successfully → email arrives at hello@staplesandstatements.com
- [ ] Calendly embed loads and shows available slots
- [ ] GA4 tracking code fires (verify in GA4 Realtime view)
- [ ] Waitlist form submits → contact appears in Brevo list
- [ ] All LTK links open correct products/collections
- [ ] Style guide "Buy" links open correct Beacons.ai product pages
- [ ] Instagram embeds load correctly
- [ ] All images optimized (WebP/AVIF, responsive sizes)
- [ ] robots.txt and sitemap.xml accessible
- [ ] CNAME file in /public/ contains `staplesandstatements.com`
- [ ] Content review with Danielle — all copy approved

### Launch Day

- [ ] Push to main → GitHub Actions deploys
- [ ] Verify site loads at https://staplesandstatements.com
- [ ] Verify HTTPS works (no mixed content warnings)
- [ ] Verify www.staplesandstatements.com redirects to staplesandstatements.com (or vice versa)
- [ ] Send test contact form submission from external email
- [ ] Book test consultation via Calendly → verify it appears on Google Calendar
- [ ] Verify GA4 is recording visits in Realtime
- [ ] Submit sitemap to Google Search Console (https://search.google.com/search-console)
- [ ] Update Instagram bio link: beacons.ai → staplesandstatements.com
- [ ] Update TikTok bio link similarly

### Post-Launch (Week 1)

- [ ] Monitor GA4 for traffic patterns
- [ ] Check Formspree for any test/spam submissions
- [ ] Verify email forwarding still works for all addresses
- [ ] Check Google Search Console for indexing status
- [ ] Ask Danielle: "Anything feel wrong or missing?"

---

## 17. Playbook: Post-Launch — How Danielle Updates Content

### Adding a New Testimonial

**Who does it:** Cord (webmaster)
**Process:**
1. Danielle texts/emails Cord: "New testimonial from Sarah — [quote]"
2. Cord creates `/src/content/testimonials/sarah/testimonial.md`:
   ```yaml
   ---
   name: "Sarah"
   service: "wardrobe-revamp"
   date: 2026-04-15
   hasPhoto: false
   ---
   "The testimonial text goes here..."
   ```
3. (Optional) Drop a `photo.jpg` in the same folder
4. `git add`, `git commit`, `git push` → auto-deploys

### Updating a Service Price

**Who does it:** Cord (webmaster)
**Process:**
1. Edit the relevant file in `/src/content/services/` (e.g., change `price: "$55/hr"` to `price: "$65/hr"`)
2. Push to main → auto-deploys

### Adding New Instagram Portfolio Images

**Who does it:** Cord (webmaster)
**Process:**
1. Download the images from Instagram (or Danielle sends them)
2. Drop into `/src/assets/portfolio/`
3. Update the portfolio data file if needed
4. Push to main → auto-deploys

### Adding a New Style Guide Product

**Phase 1 (Beacons.ai):** PA adds product on Beacons.ai. Cord adds a card to `/shop` page with a link to the new Beacons.ai product.
**Phase 1.5 (Payhip):** PA adds product on Payhip. Cord adds a card to `/shop` page with Payhip embed button.

---

## 18. Design Principles & Visual Direction

### Core Principles
1. **Conversion over decoration.** Every element earns its place by driving a booking, a purchase, or an email capture.
2. **Speed is a feature.** Sub-1-second load times. No third-party widgets that block rendering.
3. **Mobile-first.** 80%+ of her audience comes from Instagram/TikTok on phones.
4. **Her content IS the design.** No stock photos. Her 1,390 posts and professional shoots ARE the visual identity.
5. **Professional credibility over approachability.** Design for the VIP prospect. The budget client will still feel welcome, but the whale client won't feel like this is amateur hour.

### Hero Section (Homepage)
- Asymmetric mosaic/grid of 4-6 of her best images
- Overlaid: brand name "Staples & Statements" in elegant serif
- Overlaid: one-liner tagline (e.g., "Your wardrobe, elevated." — copy TBD with Danielle)
- Primary CTA: "Book Your Free Consultation"
- Secondary CTA: "Explore Services"

### Service Detail Pages
- Hero: relevant portfolio image for that service
- Price prominently displayed
- "Perfect for" callout
- 2-3 relevant portfolio images
- Related testimonial (if available for that service)
- Single CTA: "Book Your Free Consultation" (Calendly link)
- "Not sure this is right for you?" → link back to Consultation page

### Typography System
- **Headings:** Cormorant Garamond (or similar elegant serif) — editorial, luxury
- **Body:** Inter, DM Sans, or similar clean sans-serif — readable, modern
- **Accents/CTAs:** Same sans-serif, semi-bold or bold

### Responsive Breakpoints
- Mobile: < 640px (primary design target)
- Tablet: 640px–1024px
- Desktop: > 1024px

---

## 19. Page-by-Page Specifications

### Homepage `/`

| Section | Content | CTA |
|---|---|---|
| Hero | Multi-image mosaic + brand name + tagline | Book Your Free Consultation |
| Services Preview | 3-4 featured services as compact cards | View All Services |
| The Archetype Tease | "Discover your style archetype" + 2-3 archetype thumbnails | Take the Quiz |
| Testimonial Highlight | 1-2 best testimonials (rotating or static) | Read More Reviews |
| Instagram Grid | 6-9 curated portfolio images + follower count | Follow @littledanniii |
| Shop Preview | 2-3 featured style guides or LTK picks | Shop My Picks |
| Waitlist | "Something new is coming" + email capture | Notify Me |

### About `/about`

| Section | Content |
|---|---|
| Hero | Professional portrait of Danielle |
| Story | Her journey into styling — high-end retail background, passion for fashion since childhood, curating dream closets. NO mention of flight attendant career. |
| Philosophy | Her approach to styling — personal, archetype-informed, body-positive |
| Credentials | Years of experience, 52k+ community, client transformations |
| CTA | "Ready to start your style journey?" → Book consultation |

### Services Overview `/services`

| Section | Content |
|---|---|
| Header | "Services" + intro copy: "Starting a new wardrobe journey can be daunting..." |
| Cards Grid | 9 service cards, each showing: name, 1-line description, price, "Learn More" link |
| Not Sure? | "Not sure where to start? Every journey begins with a free consultation." → Book CTA |

### Service Detail Pages `/services/[slug]`

| Section | Content |
|---|---|
| Hero | Service name + price + relevant portfolio image |
| Description | Full service description (from content collection) |
| Perfect For | Target client callout |
| Portfolio | 2-3 relevant images |
| Testimonial | Related client testimonial (if available) |
| CTA | "Book Your Free Consultation" (Calendly) |
| Related | "You might also be interested in..." → 2 related services |

### Style Quiz `/style-quiz`

| Section | Content |
|---|---|
| Hero | AI-generated archetype ensemble art (Phase 1: placeholder/curated images; Phase 2: full AI art) |
| Mode Select | "Feminine Archetypes" / "Masculine Archetypes" toggle |
| Quiz Video | Embedded Instagram Reel for selected mode |
| Archetype Grid | 7 archetype cards with name + brief description + thumbnail |
| Each Archetype Links To | Style Guide (buy) + LTK Collection (shop) |
| CTA | "Want personalized archetype styling? Book your free consultation" |

### Shop `/shop`

| Section | Content |
|---|---|
| Style Guides | Product cards: image, title, price, "Get This Guide" → Beacons.ai (Phase 1) / Payhip (Phase 1.5) |
| Curated Picks | LTK product cards organized by archetype collection, "Shop This Look" → LTK |
| CTA | "Want a wardrobe curated just for you?" → Book consultation |

### Clients `/clients`

| Section | Content |
|---|---|
| Header | "Client Experiences" + intro |
| Testimonials | Card grid, each: client name, quote, service used, optional photo |
| CTA | "Ready to be the next success story?" → Book consultation |

### Contact `/contact`

| Section | Content |
|---|---|
| Header | "Let's Connect" |
| Booking | Calendly inline embed — primary focus of the page |
| Contact Form | Formspree form (name, email, phone, how-heard, message) — for non-booking inquiries |
| Email | Display: hello@staplesandstatements.com |
| Social | Instagram + TikTok links |

### Booking Confirmed `/booking-confirmed`

Post-Calendly redirect page. Calendly appends query params (`invitee_name`, `event_start_time`, etc.) which can be used to personalize the page.

| Section | Content |
|---|---|
| Confirmation | "You're booked, [Name]! Danielle will see you on [date]." (personalized via Calendly query params) |
| Upsell: Quiz | "While you wait — discover your style archetype" → link to /style-quiz |
| Upsell: Shop | "Shop Danielle's curated picks" → link to /shop |
| Reassurance | Warm copy reinforcing they made a good decision. "We can't wait to help you elevate your wardrobe." |

This page is NOT in the main navigation. It is only reached via Calendly redirect after a successful booking.

---

## 20. Phase 2 Roadmap

| Feature | Description | Effort | Dependency |
|---|---|---|---|
| Interactive Archetype Quiz | On-site JS wizard with AI art, shareable results, embedded commerce | High (20-30 hrs) | AI image generation + quiz logic |
| Male Archetype Mode | Animated toggle, separate archetype set | Medium | Part of quiz build |
| Payhip Migration | Replace Beacons.ai with embedded checkout | Medium (3-5 hrs) | Payhip account setup |
| Blog / Content Section | Repurpose IG/TikTok content as SEO articles | Medium | Content strategy |
| Automated Color Analysis | Hosted API from template pipeline | High | D:\SG57\StaplesAndStatements completion |
| Clever Closet Launch | SaaS platform, separate infrastructure | Very High | Separate project |
| Google Workspace | Replace free email stack when volume justifies | Low | Business growth |
| Client Portal | Returning clients access their moodboard, analysis, sourced items | High | Requires auth system |

---

## 21. Parking Lot

Items explicitly deferred. Do NOT work on these during Phase 1.

| Idea | Why It's Parked |
|---|---|
| AI email scanner for testimonials | Post-delivery automation. Cool but not launch-critical. |
| Automated Color/Body Analysis pipeline as hosted API | Separate project (D:\SG57\StaplesAndStatements). Integrate after completion. |
| Clever Closet deep integration | Platform doesn't exist yet. Tease only. |
| Live Instagram feed widget | Curated static is better for Phase 1. Revisit if curation becomes burdensome. |
| CMS for Danielle to self-edit | Cord is webmaster. Revisit if update frequency exceeds his capacity. |
| Archetype quiz as interactive web app | Phase 2 dedicated design sprint. |
| "Sourcing" marketplace / client dashboard | Requires auth, payments, state management — overkill for a static site. |

---

## Appendix: Brand Name Usage Reference

| Context | Format |
|---|---|
| All copy, headings, titles | Staples **&** Statements |
| URLs, file names, slugs | staples-and-statements |
| Email addresses | staplesandstatements.com |
| Social handles | staplesandstatementsss (3 s's on TikTok/Beacons) |
| Where & is technically impossible | Staples and Statements |
| HTML entities (if needed) | Staples &amp; Statements |

---

*Document generated during design session, 2026-03-09. This is the authoritative source of truth for the Staples & Statements website build.*
