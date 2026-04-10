# Cigarettes.com — Web Application

An editorial web experience dedicated to the heritage, craft, and culture of premium tobacco. Cigarettes.com is an archival platform featuring curated brand collections, cinematic presentation, and a rich design system inspired by old-world print media.

---

## Features

- **Cinematic Intro** — A full-screen animated introduction that plays once per session.
- **Brands Grid** — Curated catalog of 1,200+ archived tobacco brands.
- **The Smoke Room** — An immersive, editorial content section.
- **Tools Section** — Utility features for enthusiasts and collectors.
- **About** — Philosophy and statistics behind the archive (origins dating to 1871).
- **Animated UI** — Smooth, physics-based animations powered by Framer Motion throughout every section.
- **Responsive Design** — Fully responsive layout across desktop and mobile viewports.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer-motion.com/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Conditional class utilities |

---

## Project Structure

```
webapp/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVGs
│   ├── components/
│   │   ├── home/           # Page sections (Hero, BrandsGrid, SmokeRoom, etc.)
│   │   └── layout/         # Layout wrapper (navbar, footer)
│   ├── data/
│   │   └── brands.tsx      # Tobacco brand data
│   ├── lib/                # Shared utilities
│   ├── App.tsx             # Root component with intro gate logic
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── tailwind.config.js      # Design system tokens (colors, fonts, radii)
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# From the webapp directory
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

### Build

```bash
npm run build
```

Outputs a production-ready bundle to `dist/`.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to verify the production build.

### Lint

```bash
npm run lint
```

Runs ESLint across all TypeScript and TSX source files.

---

## Design System

The design system is defined in `tailwind.config.js` and uses a warm, editorial palette with custom typography and border radii.

**Typography**

| Token | Font | Usage |
|---|---|---|
| `font-headline` | Newsreader (serif) | Headings, display text |
| `font-body` | Noto Serif (serif) | Body copy |
| `font-label` | Work Sans (sans-serif) | Labels, buttons, UI text |

**Color Palette**

The palette follows Material Design 3 color role naming (e.g., `primary`, `on-primary`, `surface`, `secondary-container`) adapted to a dark tobacco-brown and warm gold tone.

**Border Radius**

Intentionally conservative — default `2px`, large `4px`, xl `8px` — to maintain a refined, print-inspired aesthetic.
