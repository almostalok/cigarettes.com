import fs from 'fs';

const content = `import type { ReactNode } from "react";

export type Category = 
  "All" | 
  "Indian Local" | 
  "International" | 
  "Premium / Luxury" | 
  "Light / Mild" | 
  "Herbal" | 
  "Menthol" | 
  "Budget";

export interface Brand {
  id: string;
  name: string;
  desc: string;
  tag: string;
  category: Category;
  nic: string;
  lidColor: string;
  detailsBg?: string; 
  coverImage?: string;
  renderPackFront?: () => ReactNode;
}

export const BRANDS: Brand[] = [
  // --- EXISTING INTERNATIONAL ---
  {
    id: "marlboro-red",
    name: "Marlboro Red",
    desc: "The quintessential American smoke. Bold, robust, and iconic. The classic chevron design remains untouched.",
    tag: "Full Flavor",
    category: "International",
    nic: "1.1mg Nic",
    lidColor: "#e32636",
    renderPackFront: () => (
      <div className="w-full h-full bg-white relative flex flex-col items-center overflow-hidden border border-black/10">
        <div 
          className="absolute top-0 w-full bg-[#e32636] z-0" 
          style={{ height: '65%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
        />
        <div className="w-4 h-4 bg-[#d4af37] absolute top-[57%] rotate-45 z-10 shadow-sm" />
        <div className="relative z-20 mt-[80%] font-headline font-bold text-3xl tracking-tighter text-black">
          Marlboro
        </div>
      </div>
    )
  },
  {
     id: "camel-filter",
     name: "Camel Filters",
     desc: "A Turkish and Domestic blend providing a deeply aromatic experience. Famed for its desert iconography.",
     tag: "Classic Blend",
     category: "International",
     nic: "1.0mg Nic",
     lidColor: "#d4b886", 
     renderPackFront: () => (
       <div className="w-full h-full bg-[#d4b886] flex flex-col items-center p-2 relative overflow-hidden ring-1 ring-inset ring-black/10">
          <div className="w-[85%] h-[55%] bg-white rounded-t-full mt-4 flex flex-col items-center justify-center shadow-inner border border-black/5">
             <div className="text-xl grayscale opacity-70 mt-2">🐪</div>
          </div>
          <div className="mt-4 font-headline text-3xl font-bold tracking-tighter text-[#2a1b0a]">
            CAMEL
          </div>
          <div className="text-[5px] uppercase tracking-widest text-[#2a1b0a]/50 mt-1 font-bold">Turkish & Domestic Blend</div>
       </div>
     )
  },
  {
    id: "lucky",
    name: "Lucky Strike Red",
    desc: "The original \\"Toasted\\" flavor. A bold Americana classic since 1871. Perfectly balanced and unfiltered feeling.",
    tag: "Classic",
    category: "International",
    nic: "1.0mg Nic",
    lidColor: "#f4e7cf",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#f4e7cf] flex flex-col items-center justify-center relative shadow-inner">
        <div className="w-20 h-20 rounded-full border-[5px] border-[#a01a1e] flex items-center justify-center bg-white shadow-md">
          <div className="w-[68px] h-[68px] rounded-full border-2 border-[#a01a1e]/20 flex flex-col items-center justify-center">
            <span className="text-[10px] font-headline font-bold text-[#a01a1e] leading-none mb-0.5 tracking-tighter">LUCKY</span>
            <span className="text-[10px] font-headline font-bold text-[#a01a1e] leading-none tracking-tighter">STRIKE</span>
          </div>
        </div>
        <div className="absolute bottom-4 text-[7px] font-bold text-[#2c1a0e]/60 italic uppercase tracking-widest border-b border-[#2c1a0e]/20 pb-0.5">It's Toasted</div>
      </div>
    )
  },
  {
     id: "gauloises",
     name: "Gauloises Blondes",
     desc: "The spirit of France in a pack. Strong, earthy, and historically artistic with the winged helmet insignia.",
     tag: "European",
     category: "International",
     nic: "0.9mg Nic",
     lidColor: "#003b73",
     renderPackFront: () => (
       <div className="w-full h-full bg-white flex flex-col shadow-inner">
          <div className="w-full h-[65%] bg-[#003b73] flex flex-col items-center justify-center relative shadow-md">
             <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center">
                 <span className="text-3xl opacity-90 drop-shadow-md">🪖</span>
             </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-white">
             <span className="font-headline font-bold text-xl text-[#003b73] tracking-widest">GAULOISES</span>
          </div>
       </div>
     )
  },
  {
    id: "gitanes",
    name: "Gitanes",
    desc: "Black-tobacco intensity wrapped in an iconic art-deco silhouette. The dancer embodies artistic defiance.",
    tag: "Art Deco Heritage",
    category: "International",
    nic: "1.3mg Nic",
    lidColor: "#0d1b2a",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#0d1b2a] border-4 border-white flex flex-col items-center justify-center relative shadow-inner">
         <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
             <span className="text-3xl grayscale">💃</span>
         </div>
         <span className="font-headline font-bold text-2xl text-white tracking-widest">GITANES</span>
      </div>
    )
  },
  {
    id: "gudang-garam",
    name: "Gudang Garam Surya",
    desc: "The authentic Indonesian Kretek. A complex symphony of Javanese tobacco and crushed cloves.",
    tag: "Kretek",
    category: "International",
    nic: "2.2mg Nic",
    lidColor: "#800000", 
    renderPackFront: () => (
      <div className="w-full h-full bg-[#800000] border-2 border-[#d4af37] flex flex-col p-2 relative shadow-inner">
         <div className="w-full h-[60%] border border-[#d4af37]/50 flex items-center justify-center mb-2 overflow-hidden bg-[#6a0000]">
            <div className="grid grid-cols-2 gap-1 p-1 opacity-60">
               <div className="w-3 h-3 bg-[#d4af37]" /><div className="w-3 h-3 bg-red-600" />
               <div className="w-3 h-3 bg-red-600" /><div className="w-3 h-3 bg-[#d4af37]" />
            </div>
         </div>
         <span className="font-headline font-bold text-[#d4af37] text-lg text-center tracking-wider leading-none">GUDANG GARAM</span>
         <span className="text-[5px] text-white/80 tracking-widest uppercase text-center mt-1">Surya 16</span>
      </div>
    )
  },
  
  // --- EXISTING PREMIUM / LUXURY ---
  {
     id: "dunhill-intl",
     name: "Dunhill International",
     desc: "Crafted in London. Undivided tobacco leaves for an immaculate slow burn. Housed in an elegant, squared box.",
     tag: "Luxury",
     category: "Premium / Luxury",
     nic: "0.8mg Nic",
     lidColor: "#4a0e17",
     renderPackFront: () => (
       <div className="w-full h-full bg-[#4a0e17] flex flex-col items-center justify-center p-3 relative shadow-inner">
          <div className="absolute top-2 w-full h-[1px] bg-[#d4af37]/40" />
          <div className="absolute bottom-2 w-full h-[1px] bg-[#d4af37]/40" />
          <div className="w-6 h-6 border-[3px] border-[#d4af37] rotate-45 flex items-center justify-center mb-6 shadow-md">
             <div className="w-3 h-3 bg-[#d4af37] absolute" />
          </div>
          <span className="font-headline font-bold text-2xl text-[#d4af37] tracking-widest uppercase mb-1">Dunhill</span>
          <span className="text-[5px] text-white/60 tracking-[0.4em] uppercase">International</span>
       </div>
     )
  },
  {
    id: "davidoff",
    name: "Davidoff Classic",
    desc: "Swiss precision and elite tobacco blending for the discerning palate. Elegance quantified in an octagonal format.",
    tag: "Gold Standard",
    category: "Premium / Luxury",
    nic: "0.9mg Nic",
    lidColor: "#fdfdfd",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#fdfdfd] border-l-[12px] border-[#e6c364] flex flex-col p-2 shadow-inner">
        <div className="flex-1 border border-[#755b00]/10 flex flex-col items-center justify-center space-y-2 relative bg-white">
          <div className="text-[#755b00] font-headline text-2xl italic">Davidoff</div>
          <div className="w-10 h-[1px] bg-[#755b00]/30" />
          <div className="text-[8px] font-label text-black/40 tracking-[0.5em] uppercase font-bold">Classic</div>
        </div>
      </div>
    )
  },
  {
    id: "sobranie",
    name: "Sobranie Black Russian",
    desc: "Unapologetic opulence. Handmade aesthetic with gold foil filters. A ceremonial smoke.",
    tag: "Exotic",
    category: "Premium / Luxury",
    nic: "0.7mg Nic",
    lidColor: "#000000",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#0d0300] border-4 border-[#d4af37]/60 flex flex-col items-center justify-center p-4 shadow-inner">
        <div className="text-[#d4af37] font-headline text-2xl italic tracking-widest mb-2">Sobranie</div>
        <div className="text-[6px] text-[#e6c364] uppercase tracking-[0.5em]">Black Russian</div>
        <div className="mt-6 flex gap-[2px]">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/70" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/70" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/70" />
        </div>
      </div>
    )
  },
  {
    id: "parliament",
    name: "Parliament Reserve",
    desc: "The pinnacle of technical filtration, offering a clean, sharp smoke since 1931 with its hallmark recessed filter.",
    tag: "Aerospace Filter",
    category: "Premium / Luxury",
    nic: "0.8mg Nic",
    lidColor: "#002e6e",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#002e6e] flex flex-col relative z-10 p-2 border border-white/20 shadow-inner">
        <div className="flex-1 border border-white/20 flex flex-col items-center justify-center bg-[#002e6e]">
            <span className="text-white font-headline text-2xl italic tracking-tighter">Parliament</span>
            <div className="w-12 h-px bg-white/30 my-2" />
            <span className="text-[6px] text-white/80 uppercase tracking-[0.3em] font-bold">Reserve</span>
        </div>
      </div>
    )
  },
  {
    id: "benson-hedges",
    name: "Benson & Hedges",
    desc: "The gold standard of Virginia tobacco. An exceptionally refined smoke housed in an unmistakably gleaming foil pack.",
    tag: "Premium Gold",
    category: "Premium / Luxury",
    nic: "0.9mg Nic",
    lidColor: "#d4af37", 
    renderPackFront: () => (
      <div className="w-full h-full bg-gradient-to-br from-[#f2d877] via-[#d4af37] to-[#aa831b] flex flex-col items-center justify-center shadow-inner relative">
        <div className="w-[85%] h-[90%] border border-[#755b00]/20 flex flex-col items-center justify-center bg-transparent">
          <div className="font-headline text-3xl text-[#523d00] font-bold tracking-tighter leading-none mb-1">B&H</div>
          <div className="text-[5px] font-label uppercase tracking-widest text-[#523d00]/70">Special Filter</div>
        </div>
      </div>
    )
  },
  {
    id: "cohiba",
    name: "Cohiba Original",
    desc: "From the heart of Havana. Cigar-style tobacco intensity with world-renowned Cuban luxury.",
    tag: "Cuban Export",
    category: "Premium / Luxury",
    nic: "1.4mg Nic",
    lidColor: "#1d1a15", 
    renderPackFront: () => (
      <div className="w-full h-full bg-[#e3ac24] flex flex-col relative overflow-hidden shadow-inner">
        <div className="w-full h-[60%] bg-[#1d1a15] absolute top-0" style={{ 
          backgroundImage: 'radial-gradient(circle, white 15%, transparent 20%)',
          backgroundSize: '8px 8px'
        }} />
        <div className="absolute top-[50%] left-0 w-full h-[20%] bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 flex items-center justify-center shadow-lg border-y border-black">
          <span className="font-headline font-bold tracking-widest text-xl text-black">COHIBA</span>
        </div>
      </div>
    )
  },
  {
    id: "nat-sherman",
    name: "Nat Sherman Fantasia",
    desc: "New York's finest. Elegant maduro aesthetics with multi-colored papers for the artistic connoisseur.",
    tag: "Boutique",
    category: "Premium / Luxury",
    nic: "1.1mg Nic",
    lidColor: "#2b2118", 
    renderPackFront: () => (
      <div className="w-full h-full bg-[#2b2118] border border-white/10 flex flex-col items-center justify-center shadow-inner">
        <div className="text-[#e2c792] font-headline text-xl italic tracking-widest opacity-90">Nat Sherman</div>
        <div className="w-12 h-px bg-[#e2c792]/30 my-4" />
        <div className="text-[5px] text-[#e2c792]/70 uppercase tracking-[0.4em]">Fantasia</div>
      </div>
    )
  },

  // --- EXISTING INDIAN LOCAL ---
  {
    id: "gold-flake",
    name: "Gold Flake Kings",
    desc: "A century-old legacy from India. Smooth honeydew blend wrapped in a bright yellow livery.",
    tag: "Honeydew Blend",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#f6c324", 
    renderPackFront: () => (
      <div className="w-full h-full bg-[#f6c324] flex flex-col items-center justify-center p-2 border border-black/10 shadow-inner">
         <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center shadow-md border-2 border-[#f6c324]">
            <span className="text-white font-headline text-lg italic tracking-widest">GF</span>
         </div>
         <span className="font-headline font-bold text-red-700 text-xl tracking-tighter mt-4">GOLD FLAKE</span>
         <div className="w-6 h-[2px] bg-red-700 mt-2 mb-1" />
         <span className="text-[5px] font-bold uppercase tracking-widest text-red-700/80">Kings</span>
      </div>
    )
  },
  {
    id: "navy-cut",
    name: "Wills Navy Cut",
    desc: "The quintessential Indian mid-range cigarette. Flawlessly consistent and deeply integrated into daily culture.",
    tag: "Cultural Staple",
    category: "Indian Local",
    nic: "0.8mg Nic",
    lidColor: "#ffffff", 
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center border border-black/10 shadow-inner">
         <div className="w-12 h-12 rounded-full border-[3px] border-[#a01a1e] flex flex-col items-center justify-center relative shadow-sm">
            <span className="text-[6px] font-bold text-[#a01a1e] uppercase tracking-widest mt-1">WILLS</span>
            <div className="w-6 h-[1px] bg-[#a01a1e] my-[2px]" />
            <span className="text-[4px] font-bold text-[#a01a1e] uppercase">Navy Cut</span>
         </div>
         <span className="font-headline text-xl text-[#a01a1e] font-bold tracking-widest mt-6">WILLS</span>
      </div>
    )
  },
  {
    id: "classic-regular",
    name: "Classic Regular",
    desc: "ITC's premium domestic offering. Smooth, earthy, and housed in distinctly elegant white packaging.",
    tag: "Domestic Premium",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#ffffff", 
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col p-4 border border-black/10 shadow-inner">
        <div className="flex-1 flex flex-col items-center justify-center pt-8">
           <span className="font-headline text-4xl text-blue-900 font-bold italic tracking-tighter drop-shadow-sm">Classic</span>
        </div>
      </div>
    )
  },

  // --- EXISTING LIGHT / MILD ---
  {
    id: "marlboro-gold",
    name: "Marlboro Gold",
    desc: "Renowned globally as Marlboro Lights. A smoother throat hit with the same American blend signature.",
    tag: "Smooth",
    category: "Light / Mild",
    nic: "0.6mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white relative flex flex-col items-center overflow-hidden border border-black/10 shadow-inner">
        <div 
          className="absolute top-0 w-full bg-[#d4af37] z-0" 
          style={{ height: '65%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
        />
        <div className="w-4 h-4 bg-white absolute top-[57%] rotate-45 z-10 shadow-sm" />
        <div className="relative z-20 mt-[80%] font-headline font-bold text-3xl tracking-tighter text-black/80">
          Marlboro
        </div>
      </div>
    )
  },
  {
    id: "classic-milds",
    name: "Classic Milds",
    desc: "The choice of the modern Indian professional. Exquisitely filtered for a lighter nicotine delivery.",
    tag: "Light Filtration",
    category: "Light / Mild",
    nic: "0.6mg Nic",
    lidColor: "#ffffff", 
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col p-4 border border-black/10 relative overflow-hidden shadow-inner">
        <div className="absolute top-1/3 left-0 w-full h-8 bg-[#004792]/10 skew-y-12" />
        <div className="flex-1 flex flex-col items-center justify-center pt-8 relative z-10">
           <span className="font-headline text-3xl text-blue-800 font-bold italic tracking-tighter">Classic</span>
           <span className="text-[8px] font-bold uppercase tracking-widest text-blue-800/60 mt-2">Milds</span>
        </div>
      </div>
    )
  },

  // --- EXISTING MENTHOL ---
  {
     id: "newport",
     name: "Newport Menthol",
     desc: "The sharp, icy bite of premium menthol paired with a crisp spinnaker logo design.",
     tag: "Menthol Power",
     category: "Menthol",
     nic: "1.2mg Nic",
     lidColor: "#00a86b",
     renderPackFront: () => (
       <div className="w-full h-full bg-white flex flex-col overflow-hidden relative shadow-inner">
          <div className="w-full h-[60%] bg-[#00a86b] relative flex items-end shadow-md">
             <svg className="absolute bottom-0 w-full h-12 fill-white" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 C30,30 70,30 100,100 Z" />
             </svg>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-white relative z-10 pt-4">
             <span className="font-headline font-bold text-2xl text-[#00a86b] tracking-wider">Newport</span>
             <span className="text-[6px] text-[#00a86b]/70 tracking-widest uppercase mt-1">Menthol Box</span>
          </div>
       </div>
     )
  },
  {
    id: "kool",
    name: "Kool Menthol",
    desc: "Undeniably minty. KOOL introduced America to extreme menthol chill wrapped in neon green.",
    tag: "Cooling Sensation",
    category: "Menthol",
    nic: "1.1mg Nic",
    lidColor: "#008a4b", 
    renderPackFront: () => (
      <div className="w-full h-full bg-white border border-[#008a4b] flex flex-col shadow-inner">
        <div className="w-full h-[30%] bg-[#008a4b]" />
        <div className="flex-1 flex flex-col items-center justify-center -mt-6 bg-white">
           <span className="font-headline text-5xl font-black text-[#008a4b] tracking-tighter scale-y-110">KOOL</span>
        </div>
      </div>
    )
  },

  // --- EXISTING HERBAL ---
  {
    id: "honeyrose",
    name: "Honeyrose London",
    desc: "Zero tobacco, zero nicotine. A natural herbal blend crafted for quitting or theatrical novelty.",
    tag: "Alternative",
    category: "Herbal",
    nic: "0.0mg Nic",
    lidColor: "#f4f1e1", 
    renderPackFront: () => (
      <div className="w-full h-full bg-[#f4f1e1] flex flex-col items-center p-3 relative shadow-inner">
        <div className="w-full h-full border border-green-800/20 flex flex-col items-center justify-center bg-transparent">
           <span className="text-2xl opacity-60 grayscale mb-2">🌿</span>
           <span className="font-headline text-xl text-green-900 italic font-medium">Honeyrose</span>
        </div>
      </div>
    )
  },

  // --- EXISTING BUDGET ---
  {
    id: "ld",
    name: "LD Classic",
    desc: "Uncomplicated, affordable, and incredibly popular. High consumption mass-market value.",
    tag: "Economy",
    category: "Budget",
    nic: "0.8mg Nic",
    lidColor: "#004792", 
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center relative border border-black/10 shadow-inner">
         <div className="w-[70%] h-[70%] bg-[#004792] rounded-t-full flex items-center justify-center shadow-md">
            <span className="font-headline font-bold text-5xl text-white tracking-widest uppercase">LD</span>
         </div>
      </div>
    )
  },
  {
    id: "esse",
    name: "Esse Slims",
    desc: "The hyper-slim titan of Asia. Sleek, low-cost, and favored for its minimalist profile.",
    tag: "Superslim",
    category: "Budget",
    nic: "0.4mg Nic",
    lidColor: "#f0f0f0", 
    renderPackFront: () => (
      <div className="w-full h-full bg-slate-50 border-r border-black/5 flex flex-col relative shadow-inner" style={{ transform: 'scaleX(0.8)' }}>
        <div className="absolute top-0 bottom-0 left-4 w-1 bg-blue-300" />
        <div className="flex-1 flex items-center justify-center ml-4">
           <span className="font-headline text-3xl font-light tracking-widest text-[#2a2a2a] rotate-[-90deg]">ESSE</span>
        </div>
      </div>
    )
  },

  // --- NEWLY GENERATED CSS ARTS ---
  {
    id: "classic-ultra-milds",
    name: "Classic Ultra Milds",
    desc: "The lightest variant in the famous Classic lineup by ITC. Exceptionally smooth.",
    tag: "Ultra Light",
    category: "Light / Mild",
    nic: "0.4mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col p-4 border border-black/10 relative overflow-hidden shadow-inner">
        <div className="absolute top-1/3 left-0 w-full h-8 bg-blue-200/40 skew-y-12" />
        <div className="flex-1 flex flex-col items-center justify-center pt-8 relative z-10">
           <span className="font-headline text-3xl text-blue-400 font-bold italic tracking-tighter">Classic</span>
           <span className="text-[6px] font-bold uppercase tracking-[0.2em] text-blue-400 mt-2">Ultra Milds</span>
        </div>
      </div>
    )
  },
  {
    id: "classic-menthol",
    name: "Classic Menthol",
    desc: "A freezing rush of menthol layered over the signature Classic tobacco blend.",
    tag: "Cooling",
    category: "Menthol",
    nic: "0.8mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col p-4 border border-black/10 relative overflow-hidden shadow-inner">
        <div className="absolute top-1/3 left-0 w-full h-8 bg-green-500/30 skew-y-12" />
        <div className="flex-1 flex flex-col items-center justify-center pt-8 relative z-10">
           <span className="font-headline text-3xl text-green-700 font-bold italic tracking-tighter">Classic</span>
           <span className="text-[8px] font-bold uppercase tracking-widest text-green-700 mt-2">Menthol</span>
        </div>
      </div>
    )
  },
  {
    id: "classic-ice-burst",
    name: "Classic Ice Burst",
    desc: "Features a crushable menthol capsule in the filter for a dual-flavor dynamic.",
    tag: "Capsule Tech",
    category: "Menthol",
    nic: "0.7mg Nic",
    lidColor: "#1a1a24",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#1a1a24] flex flex-col items-center justify-center p-4 border border-blue-900/50 relative overflow-hidden shadow-inner">
        <div className="w-16 h-16 rounded-full bg-blue-500/20 shadow-[0_0_20px_rgba(0,150,255,0.4)] flex items-center justify-center blur-[1px]">
          <div className="w-4 h-4 rounded-full bg-blue-300 shadow-[0_0_10px_white]" />
        </div>
        <span className="font-headline text-2xl text-white font-bold italic tracking-tighter mt-6">Classic</span>
        <span className="text-[7px] text-blue-300 tracking-[0.3em] uppercase mt-1">Ice Burst</span>
      </div>
    )
  },
  {
    id: "gold-flake-lights",
    name: "Gold Flake Lights",
    desc: "A dialed-back version of the iconic honeydew blend, offering smooth sophistication.",
    tag: "Light Honeydew",
    category: "Light / Mild",
    nic: "0.6mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center p-2 border border-black/10 shadow-inner">
         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-[#f6c324]">
            <span className="text-[#f6c324] font-headline text-lg italic tracking-widest font-bold">GF</span>
         </div>
         <span className="font-headline font-bold text-black/60 text-xl tracking-tighter mt-4">GOLD FLAKE</span>
         <div className="w-6 h-[2px] bg-[#f6c324] mt-2 mb-1" />
         <span className="text-[5px] font-bold uppercase tracking-widest text-[#f6c324]">Lights</span>
      </div>
    )
  },
  {
    id: "flake-premium",
    name: "Flake Premium",
    desc: "A staple across suburban India. Reliable, distinct, and highly recognizable.",
    tag: "Mass Market",
    category: "Indian Local",
    nic: "0.8mg Nic",
    lidColor: "#a30000",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#a30000] flex flex-col items-center justify-center border border-black/20 shadow-inner p-4">
        <div className="w-full h-full border border-white/20 flex flex-col items-center justify-center gap-2">
           <span className="font-headline font-black text-3xl text-white tracking-widest uppercase">FLAKE</span>
           <span className="text-[6px] font-bold tracking-[0.4em] text-white/70 uppercase">Premium</span>
        </div>
      </div>
    )
  },
  {
    id: "bristol",
    name: "Bristol",
    desc: "An affordable filter cigarette by ITC holding a massive historic market share.",
    tag: "Economy",
    category: "Indian Local",
    nic: "1.0mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col p-2 border border-black/10 shadow-inner">
        <div className="w-full h-[10%] bg-blue-900 absolute top-0 left-0" />
        <div className="flex-1 flex flex-col items-center justify-center bg-transparent mt-4">
           <span className="font-headline font-bold text-2xl text-blue-900 tracking-wider">Bristol</span>
        </div>
        <div className="w-full h-[4%] bg-blue-900 absolute bottom-4 left-0" />
      </div>
    )
  },
  {
    id: "capstan",
    name: "Capstan",
    desc: "A storied British brand that became an enduring classic in the Indian subcontinent.",
    tag: "Historic",
    category: "Indian Local",
    nic: "1.0mg Nic",
    lidColor: "#051f4c",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#051f4c] flex flex-col items-center justify-center border border-black/20 shadow-inner relative overflow-hidden">
        <div className="absolute top-1/4 w-full h-[2px] bg-white/40" />
        <div className="w-16 h-16 rounded-full border-2 border-white/40 flex flex-col items-center justify-center bg-[#051f4c] shadow-lg relative z-10">
           <span className="text-xl text-white/90 drop-shadow-md">⚓</span>
        </div>
        <span className="font-headline font-bold text-xl text-white tracking-widest mt-6 uppercase">Capstan</span>
      </div>
    )
  },
  {
    id: "scissors",
    name: "Scissors",
    desc: "Recognizable for its bold red packaging and deep roots in Indian smoking culture.",
    tag: "Mass Demand",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#c20000",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#c20000] flex items-center justify-center border border-black/20 shadow-inner relative overflow-hidden">
        <div className="w-[120%] h-8 bg-white absolute rotate-[-35deg] shadow-md flex items-center justify-center">
           <span className="font-headline font-bold text-lg text-[#c20000] tracking-widest uppercase">Scissors</span>
        </div>
      </div>
    )
  },
  {
    id: "four-square",
    name: "Four Square",
    desc: "A dominant player from Godfrey Phillips India, known for rich taste.",
    tag: "GPI Flagship",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4 border border-black/10 shadow-inner">
        <div className="grid grid-cols-2 gap-0.5 w-12 h-12 mb-6">
           <div className="bg-red-600" /><div className="bg-black" />
           <div className="bg-black" /><div className="bg-red-600" />
        </div>
        <span className="font-headline font-bold text-center text-xl leading-none text-black tracking-tighter">FOUR<br/>SQUARE</span>
      </div>
    )
  },
  {
    id: "red-and-white",
    name: "Red & White",
    desc: "A legendary mid-tier cigarette by GPI that defined an era of Indian advertising.",
    tag: "Classic Indian",
    category: "Indian Local",
    nic: "1.0mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col relative border border-black/10 shadow-inner overflow-hidden">
        <div className="w-full h-[50%] bg-[#d90000] flex items-center justify-center">
           <span className="font-headline font-black text-3xl text-white tracking-tighter shadow-md">RED</span>
        </div>
        <div className="w-full h-[50%] bg-white flex flex-col items-center">
           <span className="text-[#d90000] font-bold text-lg leading-none mt-1">&</span>
           <span className="font-headline font-black text-2xl text-[#d90000] tracking-tighter">WHITE</span>
        </div>
      </div>
    )
  },
  {
    id: "cavanders",
    name: "Cavanders Magnum",
    desc: "Historically a British mark, now a massive budget seller across rural India.",
    tag: "Budget Filter",
    category: "Budget",
    nic: "1.2mg Nic",
    lidColor: "#225619",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#225619] flex flex-col items-center justify-center p-3 relative shadow-inner border border-black/20">
        <div className="w-8 h-8 rounded-full border border-yellow-500/50 mb-4 bg-yellow-500/10" />
        <span className="font-headline font-bold text-xl text-yellow-500 tracking-tighter shadow-sm mb-1">CAVANDERS</span>
        <span className="text-[7px] text-white/50 tracking-[0.2em] uppercase font-bold">Magnum</span>
      </div>
    )
  },
  {
    id: "charms",
    name: "Charms",
    desc: "The iconic denim-patterned pack from VST. A revolution in 1980s Indian marketing.",
    tag: "Cult Classic",
    category: "Indian Local",
    nic: "0.9mg Nic",
    lidColor: "#41658a",
    renderPackFront: () => (
      <div className="w-full h-full flex flex-col border border-black/20 shadow-inner relative overflow-hidden" style={{ backgroundColor: '#41658a', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)' }}>
        <div className="w-[80%] h-14 bg-red-600 absolute top-[15%] left-[10%] rotate-[-10deg] shadow-lg flex items-center justify-center border-2 border-white/20 rounded-md">
           <span className="font-headline font-bold text-2xl text-white tracking-widest italic drop-shadow-md">Charms</span>
        </div>
      </div>
    )
  },
  {
    id: "charminar",
    name: "Charminar",
    desc: "One of the oldest, strongest, un-filtered staples of the Indian working class.",
    tag: "Unfiltered",
    category: "Indian Local",
    nic: "1.6mg Nic",
    lidColor: "#802222",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#802222] flex flex-col items-center justify-center border border-black/20 shadow-inner">
         <span className="text-3xl text-[#e5c77e] mb-2 opacity-80">🕌</span>
         <span className="font-headline font-bold text-[#e5c77e] text-xl tracking-widest uppercase">Charminar</span>
      </div>
    )
  },
  {
    id: "panama",
    name: "Panama",
    desc: "A nostalgic domestic brand that holds its ground in the mass-consumer market.",
    tag: "Domestic",
    category: "Indian Local",
    nic: "1.1mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#fdfaf0] flex flex-col items-center justify-center border border-black/10 shadow-inner">
        <div className="w-full h-12 bg-red-600 flex items-center justify-center shadow-md">
           <span className="font-headline text-3xl text-white font-bold tracking-tighter italic pr-2">Panama</span>
        </div>
      </div>
    )
  },
  {
    id: "insignia",
    name: "Insignia",
    desc: "ITC's ultra-luxury endeavor. One of the most expensive native cigars/cigarettes in India.",
    tag: "Ultra Premium",
    category: "Premium / Luxury",
    nic: "0.8mg Nic",
    lidColor: "#111111",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#111111] border border-white/10 flex flex-col items-center justify-center shadow-inner relative">
         <div className="absolute top-[20%] w-px h-[20%] bg-zinc-400" />
         <span className="font-headline text-2xl text-zinc-300 font-light tracking-[0.4em] mt-10">INSIGNIA</span>
         <div className="absolute bottom-[20%] w-px h-[20%] bg-zinc-400" />
      </div>
    )
  },
  {
    id: "djarum-black",
    name: "Djarum Black",
    desc: "A sharp, spicy, pure-black Kretek (clove cigarette). Massively popular imported clove.",
    tag: "Kretek",
    category: "International",
    nic: "1.8mg Nic",
    lidColor: "#0a0a0a",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center shadow-inner relative">
        <div className="w-full h-[5px] bg-[#cc0000] absolute top-[20%]" />
        <span className="font-headline font-bold text-[#cc0000] text-xl tracking-widest">DJARUM</span>
        <span className="text-[6px] tracking-[0.6em] text-white/50 uppercase mt-1">Black</span>
      </div>
    )
  },
  {
    id: "sampoerna",
    name: "Sampoerna A Mild",
    desc: "A milder, sweeter take on the Indonesian clove cigarette, widely smuggled and imported.",
    tag: "Mild Kretek",
    category: "International",
    nic: "1.0mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-white flex flex-col items-center p-4 border border-black/10 shadow-inner relative">
         <div className="w-16 h-16 bg-[#b22222] absolute top-[20%] mb-4 rounded-sm flex items-center justify-center shadow-md">
            <span className="font-headline text-5xl font-bold text-white tracking-tighter">A</span>
         </div>
         <span className="font-headline text-[10px] text-zinc-700 tracking-[0.4em] uppercase font-bold mt-[100%]">Sampoerna</span>
      </div>
    )
  },
  {
    id: "marlboro-advance",
    name: "Marlboro Advance",
    desc: "Specially formulated for the Indian market to combat humidity with a firm filter technology.",
    tag: "Engineered",
    category: "International",
    nic: "0.8mg Nic",
    lidColor: "#1d1f33",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#1d1f33] relative flex flex-col items-center overflow-hidden border border-white/5 shadow-inner">
        <div 
          className="absolute top-0 w-full bg-[#2f8ba2] z-0" 
          style={{ height: '60%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}
        />
        <div className="w-4 h-4 bg-white absolute top-[52%] rotate-45 z-10 shadow-sm" />
        <div className="relative z-20 mt-[75%] font-headline font-bold text-2xl tracking-tighter text-white">
          Marlboro
        </div>
        <span className="text-[6px] text-white/50 tracking-[0.3em] font-bold uppercase mt-1 z-20">Advance</span>
      </div>
    )
  },
  {
    id: "marlboro-clove-mix",
    name: "Marlboro Clove Mix",
    desc: "Philip Morris's answer to Kretek, uniquely balancing American blend with Indonesian clove.",
    tag: "Clove Blend",
    category: "International",
    nic: "1.2mg Nic",
    lidColor: "#69171f",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#69171f] relative flex flex-col items-center overflow-hidden border border-black/20 shadow-inner">
        <div 
          className="absolute top-0 w-full bg-[#350a0e] z-0" 
          style={{ height: '65%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
        />
        <div className="w-4 h-4 bg-[#c89227] absolute top-[57%] rotate-45 z-10 shadow-sm" />
        <div className="relative z-20 mt-[80%] font-headline font-bold text-2xl tracking-tighter text-[#c89227]">
          Marlboro
        </div>
      </div>
    )
  },
  {
    id: "pine",
    name: "Pine",
    desc: "A major Korean export. Very budget-friendly, thin, and lightly flavored.",
    tag: "Asian Export",
    category: "Budget",
    nic: "0.6mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-slate-50 relative flex flex-col items-center border border-black/10 shadow-inner">
        <div className="w-[80%] h-[30%] bg-[#4fa180] flex items-center justify-center rounded-b-xl shadow-inner mt-4">
           <span className="font-headline font-bold text-2xl text-white tracking-widest italic">PINE</span>
        </div>
      </div>
    )
  },
  {
    id: "esse-lights",
    name: "Esse Lights",
    desc: "The ultra-slim Korean standard but in a lighter, smoother variant.",
    tag: "Superslim",
    category: "Light / Mild",
    nic: "0.4mg Nic",
    lidColor: "#ffffff",
    renderPackFront: () => (
      <div className="w-full h-full bg-slate-50 border-r border-black/5 flex flex-col relative shadow-inner" style={{ transform: 'scaleX(0.8)' }}>
        <div className="absolute top-0 bottom-0 left-4 w-1 bg-sky-200" />
        <div className="flex-1 flex flex-col items-center justify-center ml-2">
           <span className="font-headline text-3xl font-light tracking-widest text-[#2a2a2a] rotate-[-90deg]">ESSE</span>
           <span className="text-[5px] rotate-[-90deg] uppercase tracking-[0.2em] font-bold text-sky-400 mt-8 whitespace-nowrap">Lights</span>
        </div>
      </div>
    )
  },
  {
    id: "nirdosh",
    name: "Nirdosh Herbal",
    desc: "Ayurvedic Indian herbal smoke containing basil, clove, liquorice, and turmeric. Zero nicotine.",
    tag: "Ayurvedic",
    category: "Herbal",
    nic: "0.0mg Nic",
    lidColor: "#476140",
    renderPackFront: () => (
      <div className="w-full h-full bg-[#476140] flex flex-col items-center justify-center p-3 relative shadow-inner border border-black/10">
        <div className="w-[80%] h-[80%] border border-[#aae893]/30 flex flex-col items-center justify-center rounded-lg bg-[#3a5234]">
           <span className="text-3xl grayscale mb-2 opacity-80">🍃</span>
           <span className="font-headline text-lg text-[#aae893] italic font-medium tracking-widest drop-shadow-md">Nirdosh</span>
        </div>
      </div>
    )
  }
];
`;

fs.writeFileSync('webapp/src/data/brands.tsx', content);
