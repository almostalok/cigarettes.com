# Cigarettes.com — Web Application

> *An editorial web experience dedicated to the heritage, craft, and culture of premium tobacco.*

Cigarettes.com is an archival platform built to feel less like a website and more like a private library at night — curated brand collections, cinematic presentation, and a design system drawn from the vocabulary of old-world print media.

The root README lives [one level up](../README.md) and covers the full philosophy, project overview, and contribution guide. This document covers the webapp-specific setup and structure.

---

## Features

| Feature | Description |
|---|---|
| 🎬 **Cinematic Intro** | Full-screen animated introduction — plays once per session, sets the tone before a single brand is shown |
| 🗂 **Brands Grid** | Scrollable, filterable catalog of **1,200+ archived tobacco brands** |
| 🍂 **The Smoke Room** | Immersive editorial section — long-form content, atmospheric pacing |
| 🛠 **Tools Section** | Utility features for enthusiasts and collectors |
| ⏱ **Ritual Timer** | A mindful companion for those who appreciate slowness |
| 📖 **About** | Philosophy and archive statistics — origins dating to 1871 |
| ✨ **Animated UI** | Physics-based spring animations via Framer Motion throughout every section |
| 📱 **Responsive** | Fully responsive layout across desktop and mobile viewports |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework — concurrent features, modern rendering primitives |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript — confidence as the archive scales |
| [Vite](https://vitejs.dev/) | Build tool & dev server — sub-second HMR |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling — the full palette lives in config |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions — spring physics only |
| [Lucide React](https://lucide.dev/) | Icon library — clean, never distracting |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Conditional class utilities — collision-safe, always |

---

## Project Structure

```
webapp/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVGs
│   ├── components/
│   │   ├── home/           # Page sections
│   │   │   ├── CinematicIntro.tsx   # The threshold
│   │   │   ├── Hero.tsx             # First impression
│   │   │   ├── BrandsGrid.tsx       # The archive itself
│   │   │   ├── SmokeRoom.tsx        # Editorial space
│   │   │   ├── ToolsSection.tsx     # Collector utilities
│   │   │   ├── About.tsx            # History & philosophy
│   │   │   ├── RitualTimer.tsx      # Mindful companion
│   │   │   └── Ashtray.tsx          # The quiet corner
│   │   └── layout/         # Navbar, Footer
│   ├── data/
│   │   └── brands.tsx      # 1,200+ tobacco brand entries
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
# → http://localhost:5173  (HMR enabled)
```

### Build

```bash
npm run build   # outputs production bundle to dist/
```

### Preview Production Build

```bash
npm run preview   # serves dist/ locally to verify
```

### Lint

```bash
npm run lint   # runs ESLint across all .ts and .tsx files
```

---

## Design System

Defined in `tailwind.config.js`. Everything — color, spacing, type — comes from a single source of truth.

**Typography**

| Token | Font | Usage |
|---|---|---|
| `font-headline` | **Newsreader** *(serif)* | Headings, display text, pull quotes |
| `font-body` | **Noto Serif** *(serif)* | Body copy, descriptions |
| `font-label` | **Work Sans** *(sans-serif)* | Labels, buttons, UI chrome |

**Color Palette**

Follows Material Design 3 color role naming (`primary`, `on-primary`, `surface`, `secondary-container`) adapted to a deep tobacco-brown background (`#0d0300`) with warm gold and parchment accents. Every shade earns its place.

**Border Radius**

Intentionally conservative — default `2px`, large `4px`, xl `8px`. Sharp corners. Print-inspired. The UI has opinions.

---

*Part of the [cigarettes.com](https://github.com/almostalok/cigarettes.com) archive — archived with care, rendered with craft.*
