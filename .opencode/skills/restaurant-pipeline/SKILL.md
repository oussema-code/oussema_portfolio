---
name: restaurant-pipeline
description: |
  AUTOMATED LANDING PAGE PIPELINE. Use when the user provides a design.md file AND a business type (restaurant, café, coffee shop, bakery, fast food, etc.). This skill defines the complete flow: analyze brand spec → classify business → research competitors → design direction → dispatch frontend subagent to build React/Fluent UI. No Open Design MCP artifacts — pure subagent implementation.
---

# Restaurant Landing Page Pipeline

## Flow

```
design.md + business type
  → Phase 1: Analyze & Classify
  → Phase 2: Research (websearch competitors in niche)
  → Phase 3: Synthesize Design Direction (palette, typography, sections, interactions)
  → Phase 4: Dispatch frontend subagent to implement in React/Fluent UI
  → Done
```

---

## Phase 1: Analyze & Classify

### Parse design.md

Read the `design.md` file. Extract:
- **Primary brand color** — the hero color from palette
- **Secondary/accent color** — if present
- **Typography** — display font + body font
- **Mood/feeling** — luxury, playful, rustic, modern, minimal, bold, etc.

### Classify Business Type

Map the business type to a **design archetype** + **section structure**:

| Business Type | Archetype | Sections | Vibe Keywords |
|---|---|---|---|
| **Luxury restaurant** | Editorial dark / warm minimal | Hero, Story, Menu (cards), Gallery, Reservation, Testimonials, Footer | refined, moody, premium, sparse |
| **Bistrot / casual dining** | Warm editorial | Hero, About, Menu, Specials, Visit/Map, Footer | cozy, approachable, rustic |
| **Coffee shop / café** | Minimal bright / artisan | Hero, Story, Menu (drinks), Ambiance, Visit/Location, Footer | warm, craft, community |
| **Fast food / burger** | Bold pop / modern | Hero, Menu (grid), Combos, Locations, Order CTA, Footer | energetic, colorful, playful |
| **Bakery / pâtisserie** | Soft editorial | Hero, Story, Showcase (pastries), Process, Visit, Footer | warm, delicate, craft |
| **Fine dining (tasting menu)** | Ultra-premium dark | Hero, Philosophy, Menu (tasting), Wine, Reservation, Gallery, Footer | exclusive, minimal, dramatic |
| **Bar / lounge** | Dark moody | Hero, Signature Drinks, Ambiance, Events, Visit/Reserve, Footer | night, atmospheric, social |
| **Street food / food truck** | Bold urban | Hero, Menu, Story, Locations/Schedule, Catering CTA, Footer | vibrant, raw, authentic |

---

## Phase 2: Research

Use `websearch` to find 2-3 top competitor websites in that niche:
- What sections do they feature?
- What color palettes dominate?
- What interactive elements stand out?
- Return a brief summary of recurring patterns.

---

## Phase 3: Synthesize Design Direction

Combine design.md + business archetype + research into a **compact design spec**:

### Color Palette
- **Base**: derived from design.md primary color (monochrome, warm, dark, etc.)
- **Accent**: design.md accent or default by archetype:
  - Luxury: gold (#C6A34E) or deep burgundy (#7A2E2E)
  - Coffee: warm terracotta (#C9754A) or olive (#7A8B5E)
  - Fast food: red (#E63946) or orange (#F4845F)
  - Bakery: soft pink (#E8A2A2) or sage (#A8B5A0)
  - Bar: electric blue (#2B59C3) or amethyst (#735CDD)
- **Neutrals**: from design.md (white, cream, charcoal, etc.)

### Typography
- **Display**: from design.md or default pairing:
  - Luxury: Playfair Display / Cormorant (serif)
  - Casual: DM Serif Display / Lora
  - Modern: Inter / Montserrat (sans)
  - Bold: Bebas Neue / Oswald (condensed)
- **Body**: from design.md or complementary sans (Montserrat, Inter, Nunito)

### Section Structure
Selected from the table above, adapted to the brand's specialties:
- If menu is a specialty → detailed menu cards with pricing
- If ambiance is key → gallery section
- If story is important → About section with narrative
- Booking/reservation if applicable
- Location/map if physical

### Key Interactions
- CTA hover effects (accent color transitions)
- Menu filter by category (if food/cocktail menu)
- Lazy-loaded image gallery
- Scroll-triggered reveals (subtle, not overdone)
- Mobile-first responsive

---

## Phase 4: Dispatch Frontend Subagent

Create a task for the `frontend` subagent with this prompt template:

```
You are building a landing page for a [BUSINESS_TYPE] called [NAME] into the existing React/Fluent UI project at /home/oussema/lella-baya/.

DESIGN SPEC:
- Base color: [BASE]
- Accent color: [ACCENT]
- Display font: [DISPLAY_FONT]
- Body font: [BODY_FONT]
- Mood: [MOOD]

SECTIONS to implement (create or update components):
1. [Section 1] — [brief description]
2. [Section 2] — [brief description]
3. [Section 3] — [brief description]
...

KEY INTERACTIONS:
- [Interaction 1]
- [Interaction 2]

EXISTING COMPONENTS (update them with new colors/typography if this is a new brand):
- HeroSection: hero with CTA
- AboutSection: brand story
- MenuSection: menu items with optional filters
- BookingSection: reservation CTA
- Footer: contact, hours, social links

IMPORTANT:
- Update CSS variables in /home/oussema/lella-baya/src/styles/global.css with the new palette
- Keep ALL existing components — only update their styling
- Use Fluent UI's tokens (makeStyles, tokens) for consistency
- Fonts: import from Google Fonts in index.html
- Responsive (mobile-first)
- TypeScript, clean code, no placeholders
```

---

## Verification

After the frontend subagent finishes:
1. Verify the app compiles cleanly (`npx tsc --noEmit` in project dir)
2. If errors, fix them and re-run
3. Report back to the user with a summary of what was created/changed

---

## Notes
- Do NOT use Open Design MCP for implementation — only use its skills for creative direction if needed
- No duplicate HTML artifacts — everything goes into React/Fluent UI components
- The React project lives at `/home/oussema/lella-baya/`
- This project uses Vite + React + TypeScript + Fluent UI
