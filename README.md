<div align="center">

<!-- Animated SVG Banner -->
<img src="https://readme-typing-svg.demolab.com?font=Newsreader&weight=700&size=52&duration=3000&pause=1200&color=E1C0AD&background=0D030000&center=true&vCenter=true&multiline=true&width=900&height=120&lines=cigarettes.com;The+Archive+of+Smoke+%26+Heritage" alt="cigarettes.com" />

<br/>

<!-- Glowing subline -->
<img src="https://readme-typing-svg.demolab.com?font=Work+Sans&weight=400&size=18&duration=4000&pause=2000&color=FED977&background=0D030000&center=true&vCenter=true&width=700&height=40&lines=1%2C200%2B+archived+tobacco+brands+%E2%80%A2+since+1871;Editorial+design+meets+cinematic+web+experience;Built+with+React+19+%E2%80%A2+Framer+Motion+%E2%80%A2+Tailwind" alt="subline" />

<br/><br/>

<!-- Badges Row 1 -->
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<!-- Badges Row 2 -->
[![License](https://img.shields.io/badge/License-MIT-FED977?style=for-the-badge)](./LICENSE)
[![Brands](https://img.shields.io/badge/Brands_Archived-1200%2B-E1C0AD?style=for-the-badge&logo=bookstack&logoColor=white)](./webapp/src/data/brands.tsx)
[![Since](https://img.shields.io/badge/Heritage_Since-1871-9D806F?style=for-the-badge&logo=clockify&logoColor=white)](#)

<br/>

---

<!-- Preview Screenshot -->
<img src="cigarettes_com.png" alt="cigarettes.com preview" width="880" style="border-radius:8px; box-shadow: 0 8px 40px #0d030099;" />

---

</div>

## ✦ What is this?

**Cigarettes.com** is a cinematic, editorial web archive dedicated to the heritage and culture of premium tobacco. It presents a curated catalog of **1,200+ brands** across eras and continents — rendered with the gravity and care of a museum collection, not a storefront.

> _"A love letter to packaging, craft, and the art of slow living."_

Not a shop. Not a database dump. A deliberate act of preservation — where every brand entry is a window into the era, geography, and culture that shaped it. From Wills Navy Cut to Dji Sam Soe, from Sobranie to a forgotten regional stub from 1940s Bengal, each one belongs here.

<br/>

---

## ✦ The Philosophy

Tobacco packaging is one of the most concentrated forms of graphic design history. Tiny canvases that carried national identity, class aspiration, colonial tension, and pure artistry — now mostly forgotten.

This archive exists because those stories deserve a proper home. Not a Wikipedia list, not an auction catalogue — a **living, breathing experience** that communicates the weight of history through the design itself.

The interface is built to feel like entering a private library at night. Every transition, every typographic choice, every shade of amber and brown is intentional. The cinematic intro isn't decorative — it's a threshold you cross before the archive opens to you.

<br/>

---

## ✦ Features

<table>
<tr>
<td width="50%" valign="top">

### 🎬 Cinematic Intro
A full-screen animated introduction that plays once per session — physics-based transitions, no skipping, no rushing. It sets the tone before a single brand is shown. The archive earns your attention.

### 🗂 Brands Grid
A scrollable, filterable archive of **1,200+ tobacco brands** organized by category, strength, and origin. Each card is a miniature exhibition. No noise. No clutter.

### 🍂 The Smoke Room
An immersive editorial section with long-form content, atmospheric visuals, and a pace that rewards attention. This is where the archive breathes.

### ⏱ Ritual Timer
A mindful companion tool — because some things are worth doing slowly.

</td>
<td width="50%" valign="top">

### 🛠 Tools Section
Utility features for enthusiasts and collectors — precision-built, functionally minimal. Nothing you don't need, everything you do.

### 📖 About
Philosophy, archive statistics, and a timeline stretching back to **1871** — tracing the full lineage of the collection, one decade at a time.

### 🪴 Ashtray
A quiet corner of the archive. You'll know it when you find it.

### ✨ Animated Throughout
Every section uses **Framer Motion** for smooth, physics-based spring transitions — zero janky CSS hacks, zero layout thrash. The kind of polish that's invisible until it's gone.

</td>
</tr>
</table>

<br/>

---

## ✦ Tech Stack

<div align="center">

| Technology | Role | Why |
|---|---|---|
| [React 19](https://react.dev/) | UI Framework | Concurrent features, modern rendering primitives |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | Confidence at scale — the archive grows fast |
| [Vite](https://vitejs.dev/) | Build Tool | Sub-second HMR, lightning production builds |
| [Tailwind CSS v3](https://tailwindcss.com/) | Styling | Design-token-first; the palette lives in config |
| [Framer Motion](https://www.framer.com/motion/) | Animations | Spring physics — the only animation model worth using |
| [Lucide React](https://lucide.dev/) | Icons | Clean, consistent, never distracting |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Class Utilities | Collision-safe dynamic classnames, every time |

</div>

<br/>

---

## ✦ Project Structure

```
cigarettes.com/
├── webapp/                         # React application
│   ├── public/                     # Static assets
│   └── src/
│       ├── components/
│       │   ├── home/               # Page sections
│       │   │   ├── CinematicIntro.tsx   # The threshold
│       │   │   ├── Hero.tsx             # First impression
│       │   │   ├── BrandsGrid.tsx       # The archive itself
│       │   │   ├── SmokeRoom.tsx        # Editorial space
│       │   │   ├── ToolsSection.tsx     # Collector utilities
│       │   │   ├── About.tsx            # History & philosophy
│       │   │   ├── RitualTimer.tsx      # Mindful companion
│       │   │   └── Ashtray.tsx          # The quiet corner
│       │   └── layout/             # Navbar, Footer
│       ├── data/
│       │   └── brands.tsx          # 1,200+ brand entries
│       ├── lib/                    # Shared utilities
│       ├── App.tsx                 # Root component + intro gate
│       └── index.css               # Global styles
├── append_db.mjs                   # Brand database utility
├── rewrite_brands.mjs              # Brand data migration script
└── design_system.json              # Design token export
```

<br/>

---

## ✦ Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Installation

```bash
# Clone the repo
git clone https://github.com/almostalok/cigarettes.com.git
cd cigarettes.com/webapp

# Install dependencies
npm install
```

### Development

```bash
npm run dev
# → http://localhost:5173  (HMR enabled)
```

### Production Build

```bash
npm run build        # outputs to dist/
npm run preview      # serve & verify dist/
```

### Lint

```bash
npm run lint
```

<br/>

---

## ✦ Design System

The visual identity is built around a warm, editorial palette — equal parts **old-world print media** and **dark luxury**. Every color, radius, and typeface is a deliberate signal: this is not a website, it is a space.

<div align="center">

### Typography

| Token | Font | Usage |
|---|---|---|
| `font-headline` | **Newsreader** *(serif)* | Headings, display, pull quotes |
| `font-body` | **Noto Serif** *(serif)* | Body copy, descriptions |
| `font-label` | **Work Sans** *(sans-serif)* | Buttons, labels, UI chrome |

### Palette Highlights

| Role | Hex | Swatch |
|---|---|---|
| Primary Background | `#0d0300` | ![#0d0300](https://placehold.co/20x20/0d0300/0d0300.png) |
| Surface | `#fff8f1` | ![#fff8f1](https://placehold.co/20x20/fff8f1/fff8f1.png) |
| Primary Fixed | `#fedcc8` | ![#fedcc8](https://placehold.co/20x20/fedcc8/fedcc8.png) |
| Secondary Container | `#fed977` | ![#fed977](https://placehold.co/20x20/fed977/fed977.png) |
| Inverse Primary | `#e1c0ad` | ![#e1c0ad](https://placehold.co/20x20/e1c0ad/e1c0ad.png) |
| On-Surface | `#211b0c` | ![#211b0c](https://placehold.co/20x20/211b0c/211b0c.png) |

</div>

> **Border Radius**: Intentionally conservative — `2px` default, `4px` large, `8px` XL — preserving a refined, print-inspired aesthetic. Sharp corners. Serious intent.

<br/>

---

## ✦ Brand Categories

The archive spans the full spectrum of tobacco culture — from factory floors in Chennai to tobacconists in Vienna:

| Category | Description |
|---|---|
| 🏆 **Premium / Luxury** | Limited-edition and collector-tier brands — the art pieces |
| 🌿 **Light / Mild** | Low-nicotine, smooth-profile variants |
| ❄️ **Menthol** | Cooling and capsule-filter innovations |
| 🪔 **Unfiltered** | Raw, traditional, working-class staples — the originals |
| 🌏 **Indian Local** | ITC, GPI, VST — the subcontinent's own rich lineage |
| 🌿 **Herbal / Ayurvedic** | Zero-nicotine botanical blends, ancient and modern |
| 🌋 **Kretek** | Indonesian clove cigarettes — a culture unto themselves |
| 🌍 **International** | Global icons — Marlboro, Camel, Lucky Strike, Gauloises |
| 💰 **Budget** | Mass-market, economy-tier staples — the everyday companions |

<br/>

---

## ✦ Contributing

The archive is only as good as its depth. If you know a brand that belongs here — obscure, regional, discontinued, or simply overlooked — contributions are welcome.

1. **Fork** the repository
2. Add your brand entries to [`webapp/src/data/brands.tsx`](./webapp/src/data/brands.tsx) — follow the existing data shape
3. Run `npm run lint` to verify everything is clean
4. Open a **Pull Request** with a brief note on the brand(s) added and their provenance

For larger contributions (new sections, design system changes, tooling), open an issue first so the direction can be aligned before significant work is invested.

<br/>

---

## ✦ Roadmap

Things being considered for the archive's future:

- [ ] **Brand detail pages** — dedicated views with full history, imagery, and editorial notes
- [ ] **Search** — full-text search across brand names, origins, and descriptions
- [ ] **Timeline view** — browse the archive chronologically from 1871 to present
- [ ] **Collections** — curated sets grouped by era, region, or aesthetic
- [ ] **Print mode** — a CSS print stylesheet so the archive can be rendered to paper, fittingly

<br/>

---

<div align="center">

<!-- Footer animated line -->
<img src="https://readme-typing-svg.demolab.com?font=Work+Sans&weight=300&size=14&duration=6000&pause=1000&color=9D806F&background=00000000&center=true&vCenter=true&width=600&height=30&lines=archived+with+care+%E2%80%A2+rendered+with+craft+%E2%80%A2+built+for+those+who+notice" alt="footer" />

<br/>

**cigarettes.com** — *The Archive of Smoke & Heritage*

Made with 🍂 by [almostalok](https://github.com/almostalok)

</div>
