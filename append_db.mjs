import fs from 'fs';

const existingData = fs.readFileSync('webapp/src/data/brands.tsx', 'utf-8');

const newBrands = `
  // --- EXTENSIVE INDIAN LIST & IMPORTS (AWAITING IMAGES) ---
  {
    id: "classic-ultra-milds",
    name: "Classic Ultra Milds",
    desc: "The lightest variant in the famous Classic lineup by ITC. Exceptionally smooth.",
    tag: "Ultra Light",
    category: "Light / Mild",
    nic: "0.4mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/classic-ultra-milds.jpg"
  },
  {
    id: "classic-menthol",
    name: "Classic Menthol",
    desc: "A freezing rush of menthol layered over the signature Classic tobacco blend.",
    tag: "Cooling",
    category: "Menthol",
    nic: "0.8mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/classic-menthol.jpg"
  },
  {
    id: "classic-ice-burst",
    name: "Classic Ice Burst",
    desc: "Features a crushable menthol capsule in the filter for a dual-flavor dynamic.",
    tag: "Capsule Tech",
    category: "Menthol",
    nic: "0.7mg Nic",
    lidColor: "#1a1a24",
    coverImage: "/packs/classic-ice-burst.jpg"
  },
  {
    id: "gold-flake-lights",
    name: "Gold Flake Lights",
    desc: "A dialed-back version of the iconic honeydew blend, offering smooth sophistication.",
    tag: "Light Honeydew",
    category: "Light / Mild",
    nic: "0.6mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/gold-flake-lights.jpg"
  },
  {
    id: "flake-premium",
    name: "Flake Premium",
    desc: "A staple across suburban India. Reliable, distinct, and highly recognizable.",
    tag: "Mass Market",
    category: "Indian Local",
    nic: "0.8mg Nic",
    lidColor: "#a30000",
    coverImage: "/packs/flake-premium.jpg"
  },
  {
    id: "bristol",
    name: "Bristol",
    desc: "An affordable filter cigarette by ITC holding a massive historic market share.",
    tag: "Economy",
    category: "Indian Local",
    nic: "1.0mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/bristol.jpg"
  },
  {
    id: "capstan",
    name: "Capstan",
    desc: "A storied British brand that became an enduring classic in the Indian subcontinent.",
    tag: "Historic",
    category: "Indian Local",
    nic: "1.0mg Nic",
    lidColor: "#051f4c",
    coverImage: "/packs/capstan.jpg"
  },
  {
    id: "scissors",
    name: "Scissors",
    desc: "Recognizable for its bold red packaging and deep roots in Indian smoking culture.",
    tag: "Mass Demand",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#c20000",
    coverImage: "/packs/scissors.jpg"
  },
  {
    id: "four-square",
    name: "Four Square",
    desc: "A dominant player from Godfrey Phillips India, known for rich taste.",
    tag: "GPI Flagship",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/four-square.jpg"
  },
  {
    id: "red-and-white",
    name: "Red & White",
    desc: "A legendary mid-tier cigarette by GPI that defined an era of Indian advertising.",
    tag: "Classic Indian",
    category: "Indian Local",
    nic: "1.0mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/red-and-white.jpg"
  },
  {
    id: "cavanders",
    name: "Cavanders Magnum",
    desc: "Historically a British mark, now a massive budget seller across rural India.",
    tag: "Budget Filter",
    category: "Budget",
    nic: "1.2mg Nic",
    lidColor: "#225619",
    coverImage: "/packs/cavanders.jpg"
  },
  {
    id: "charms",
    name: "Charms",
    desc: "The iconic denim-patterned pack from VST. A revolution in 1980s Indian marketing.",
    tag: "Cult Classic",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#41658a",
    coverImage: "/packs/charms.jpg"
  },
  {
    id: "charminar",
    name: "Charminar",
    desc: "One of the oldest, strongest, un-filtered staples of the Indian working class.",
    tag: "Unfiltered",
    category: "Indian Local",
    nic: "1.6mg Nic",
    lidColor: "#802222",
    coverImage: "/packs/charminar.jpg"
  },
  {
    id: "panama",
    name: "Panama",
    desc: "A nostalgic domestic brand that holds its ground in the mass-consumer market.",
    tag: "Domestic",
    category: "Indian Local",
    nic: "1.1mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/panama.jpg"
  },
  {
    id: "insignia",
    name: "Insignia",
    desc: "ITC's ultra-luxury endeavor. One of the most expensive native cigars/cigarettes in India.",
    tag: "Ultra Premium",
    category: "Premium / Luxury",
    nic: "0.8mg Nic",
    lidColor: "#111111",
    coverImage: "/packs/insignia.jpg"
  },
  {
    id: "djarum-black",
    name: "Djarum Black",
    desc: "A sharp, spicy, pure-black Kretek (clove cigarette). Massively popular imported clove.",
    tag: "Kretek",
    category: "International",
    nic: "1.8mg Nic",
    lidColor: "#0a0a0a",
    coverImage: "/packs/djarum-black.jpg"
  },
  {
    id: "sampoerna",
    name: "Sampoerna A Mild",
    desc: "A milder, sweeter take on the Indonesian clove cigarette, widely smuggled and imported.",
    tag: "Mild Kretek",
    category: "International",
    nic: "1.0mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/sampoerna.jpg"
  },
  {
    id: "marlboro-advance",
    name: "Marlboro Advance",
    desc: "Specially formulated for the Indian market to combat humidity with a firm filter technology.",
    tag: "Engineered",
    category: "International",
    nic: "0.8mg Nic",
    lidColor: "#1d1f33",
    coverImage: "/packs/marlboro-advance.jpg"
  },
  {
    id: "marlboro-clove-mix",
    name: "Marlboro Clove Mix",
    desc: "Philip Morris's answer to Kretek, uniquely balancing American blend with Indonesian clove.",
    tag: "Clove Blend",
    category: "International",
    nic: "1.2mg Nic",
    lidColor: "#69171f",
    coverImage: "/packs/marlboro-clove-mix.jpg"
  },
  {
    id: "pine",
    name: "Pine",
    desc: "A major Korean export. Very budget-friendly, thin, and lightly flavored.",
    tag: "Asian Export",
    category: "Budget",
    nic: "0.6mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/pine.jpg"
  },
  {
    id: "esse-lights",
    name: "Esse Lights",
    desc: "The ultra-slim Korean standard but in a lighter, smoother variant.",
    tag: "Superslim",
    category: "Light / Mild",
    nic: "0.4mg Nic",
    lidColor: "#ffffff",
    coverImage: "/packs/esse-lights.jpg"
  },
  {
    id: "nirdosh",
    name: "Nirdosh Herbal",
    desc: "Ayurvedic Indian herbal smoke containing basil, clove, liquorice, and turmeric. Zero nicotine.",
    tag: "Ayurvedic",
    category: "Herbal",
    nic: "0.0mg Nic",
    lidColor: "#476140",
    coverImage: "/packs/nirdosh.jpg"
  }
];
`;

const updatedData = existingData.replace('];', newBrands);
fs.writeFileSync('webapp/src/data/brands.tsx', updatedData);
