# Oussema Ben Ameur — Portfolio

Personal portfolio of **Oussema Ben Ameur**, a Software Engineering Student (Backend, Databases & Distributed Systems) at ENIT, Tunis. A dark-first, technical single-page site with a terminal-amber accent, built as a static Vite app and deployed to Vercel.

## Stack

| Layer | Technology |
| --- | --- |
| Build tool | [Vite](https://vite.dev) 8 |
| UI framework | [React](https://react.dev) 19 |
| Language | [TypeScript](https://www.typescriptlang.org) (~6.0) with strict-adjacent compiler checks (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite` — CSS-first tokens in `src/index.css` (no `tailwind.config.js`) |
| Motion | [Framer Motion](https://www.framer.com/motion/) — subtle scroll reveals only; respects `prefers-reduced-motion` |
| Linting | [Oxlint](https://oxc.rs/docs/guide/usage/linter) (`.oxlintrc.json`) |
| Deploy | [Vercel](https://vercel.com) — static, zero backend |

## Getting started

Requires Node.js (Vite 8 / Vite 8 requires Node 20.19+ or 22.12+).

```bash
# Install dependencies
npm install

# Start the dev server (HMR)
npm run dev

# Type-check + production build to dist/
npm run build

# Preview the production build locally
npm run preview

# Lint with Oxlint
npm run lint
```

## Project structure

```
.
├── index.html                 # HTML entry, meta tags, favicon link
├── public/
│   ├── favicon.svg            # Site favicon
│   ├── icons.svg              # Shared SVG icon sprite
│   └── cv.pdf                 # Downloadable CV (Download CV button target)
└── src/
    ├── main.tsx               # React root + StrictMode
    ├── App.tsx                # Section composition + anchor navigation
    ├── index.css              # Tailwind import + design tokens (@theme)
    ├── data/
    │   ├── content.ts         # ★ ALL resume content (single source of truth)
    │   └── types.ts           # Content model (SiteContent, Profile, Project, …)
    ├── components/            # Shared primitives
    │   ├── Container.tsx      # Page-width wrapper (sm/md/lg)
    │   ├── Reveal.tsx         # Scroll-reveal motion wrapper (reduced-motion aware)
    │   ├── Section.tsx        # Section + SectionHeading
    │   └── SectionLabel.tsx   # Monospace accent section marker
    ├── lib/
    │   └── cn.ts              # Dependency-free class-name combiner
    └── sections/              # One component per page section
        ├── Hero.tsx
        ├── About.tsx
        ├── Projects.tsx
        ├── Skills.tsx
        ├── Timeline.tsx
        └── Contact.tsx
```

### The content-in-one-place pattern

All resume facts — profile, internship blurb, projects, skills, timeline, and contact details — live in **`src/data/content.ts`**, typed by **`src/data/types.ts`**. Components only ever import from `./content` and never embed resume facts in markup. To update any fact about the site, edit `content.ts` alone; the UI updates everywhere it is used.

> **Status:** the site is under active development. `Hero`, `About`, `Skills`, and `Timeline` are implemented; `Projects` and `Contact` follow the same pattern and are assembled into `App.tsx` in the final integration pass.

## Editing content

1. **Resume facts** — edit `src/data/content.ts` (profile, internship, projects, skills, timeline, contact). Types are in `src/data/types.ts`.
2. **Contact form** — the form posts to the `formEndpoint` field in `content.ts`:
   - Set it to your **Formspree** endpoint (e.g. `https://formspree.io/f/yourFormId`) to activate the form.
   - When it is an empty string (`''`), the form falls back to showing a direct-email notice instead.
3. **Download CV button** — the button links to `profile.cvPath` (`/cv.pdf`). Replace `public/cv.pdf` with your current CV to update the download.

## Deploying to Vercel

1. Import the Git repository into Vercel.
2. Framework preset: **Vite** (auto-detected).
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. No environment variables are required — the site is fully static.

Notes once live:

- The **Download CV** button serves `public/cv.pdf`; make sure the file is committed and up to date.
- The **contact form** needs a real Formspree endpoint set in `content.ts` (`formEndpoint`) before it will submit — otherwise it shows the direct-email fallback.

## Design system

Design tokens are defined CSS-first in `src/index.css` under `@theme` and map directly to Tailwind utilities (e.g. `bg-bg`, `text-ink`, `text-accent`, `border-border`). Keep edits on-token to preserve the aesthetic.

| Token | Value | Usage |
| --- | --- | --- |
| `--color-bg` | `#0b0d0f` | Page background (near-black, warm tint) |
| `--color-surface` | `#121518` | Raised surfaces |
| `--color-surface-2` | `#191d21` | Chips / secondary surfaces |
| `--color-border` | `#2a2f35` | Borders, dividers |
| `--color-ink` | `#e6e6e9` | Primary text |
| `--color-ink-dim` | `#9aa3ad` | Secondary text |
| `--color-ink-mute` | `#6b7480` | Muted text / metadata |
| `--color-accent` | `#f2a03d` | Terminal-amber accent (used sparingly) |
| `--color-accent-strong` | `#ffb35c` | Accent hover / focus |
| `--color-accent-dim` | `rgba(242,160,61,0.12)` | Accent tint backgrounds |
| `--color-accent-line` | `rgba(242,160,61,0.35)` | Accent borders |
| `--color-success` | `#4ade80` | Success states |
| `--color-danger` | `#f87171` | Error states |
| `--font-sans` | `Inter` | Body / headings |
| `--font-mono` | `JetBrains Mono` | Labels, code, terminal markers |