import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const BRANDS = [
  {
    id: "parliament",
    name: "Parliament Night Blue",
    desc: "The pinnacle of technical filtration, offering a clean, sharp smoke since 1931.",
    tag: "Full Flavor",
    nic: "0.8mg Nic",
    bg: "bg-surface",
    renderPack: () => (
      <div className="w-full h-full bg-white border border-outline-variant/20 flex flex-col relative z-10 shadow-lg">
        <div className="h-1/3 bg-[#002e6e] flex items-center justify-center p-4">
          <div className="w-full h-full border border-white/20 flex items-center justify-center">
            <span className="text-white font-headline text-lg italic tracking-tighter">Parliament</span>
          </div>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="text-[8px] font-label text-center text-primary/40 uppercase tracking-widest">Recessed Filter</div>
          <div className="border border-primary/10 h-12 flex items-center justify-center">
            <span className="text-[10px] text-primary/30 uppercase">Night Blue</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "davidoff",
    name: "Davidoff Classic",
    desc: "Swiss precision and elite tobacco blending for the discerning palate.",
    tag: "Gold Standard",
    nic: "0.9mg Nic",
    bg: "bg-surface",
    renderPack: () => (
      <div className="w-full h-full bg-[#fdfdfd] border-l-8 border-secondary-fixed-dim border-outline-variant/20 flex flex-col p-4 shadow-lg">
        <div className="flex-1 border border-secondary/10 flex flex-col items-center justify-center space-y-2">
          <div className="text-secondary font-headline text-xl italic">Davidoff</div>
          <div className="w-8 h-[1px] bg-secondary/30" />
          <div className="text-[8px] font-label text-primary/40 tracking-[0.4em] uppercase">Classic</div>
        </div>
      </div>
    )
  },
  {
    id: "sobranie",
    name: "Sobranie Black Russian",
    desc: "Unapologetic opulence. Handmade aesthetic with gold foil filters.",
    tag: "Exotic",
    nic: "0.7mg Nic",
    bg: "bg-primary-container",
    textColors: { title: "text-surface-bright", desc: "text-tertiary-fixed-dim", tag: "text-secondary-fixed", icon: "text-secondary-fixed", border: "border-white/10" },
    renderPack: () => (
      <div className="w-full h-full bg-[#0d0300] border-2 border-secondary/40 flex flex-col items-center justify-center p-4 shadow-lg">
        <div className="text-secondary font-headline text-2xl italic tracking-widest">Sobranie</div>
        <div className="text-[7px] text-secondary-fixed uppercase tracking-[0.5em] mt-2">Black Russian</div>
        <div className="mt-4 flex gap-1">
          <div className="w-1 h-1 rounded-full bg-secondary/50" />
          <div className="w-1 h-1 rounded-full bg-secondary/50" />
          <div className="w-1 h-1 rounded-full bg-secondary/50" />
        </div>
      </div>
    )
  },
  {
    id: "lucky",
    name: "Lucky Strike Red",
    desc: "The original \"Toasted\" flavor. A bold Americana classic since 1871.",
    tag: "Classic",
    nic: "1.0mg Nic",
    bg: "bg-surface",
    renderPack: () => (
      <div className="w-full h-full bg-[#f4e7cf] border border-outline-variant/20 flex flex-col items-center justify-center relative shadow-lg">
        <div className="w-24 h-24 rounded-full border-[6px] border-red-700 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-red-700/20 flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold text-red-800 leading-none">LUCKY</span>
            <span className="text-[10px] font-bold text-red-800 leading-none">STRIKE</span>
          </div>
        </div>
        <div className="absolute bottom-4 text-[8px] font-bold text-primary/60 italic uppercase tracking-tighter underline">It&apos;s Toasted</div>
      </div>
    )
  }
];

export function BrandsGrid() {
  const [filter, setFilter] = useState("All");

  return (
    <section id="brands" className="py-24 px-6 lg:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <span className="font-label text-secondary uppercase tracking-[0.3em] text-[10px] font-semibold">The Portfolio</span>
            <h2 className="font-headline text-5xl text-primary italic">Heritage Brands</h2>
          </div>
          
          <div className="flex gap-6 font-label text-xs uppercase tracking-widest">
            {["All", "Premium", "Classic", "Modern"].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`transition-colors duration-300 ${filter === f ? "text-secondary font-bold border-b border-secondary pb-1" : "text-on-surface-variant hover:text-primary pb-1 border-b border-transparent"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          className="masonry-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {BRANDS.map((brand) => (
            <motion.div 
              key={brand.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="card-break-inside group relative"
            >
              <div className={`${brand.bg} p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                
                {/* Pack Visualizer */}
                <div className="relative w-40 h-56 mx-auto mb-8 perspective-1000 cursor-pointer">
                  {/* Pack Lid Top half */}
                  <div className="absolute top-0 w-full h-14 bg-black/5 dark:bg-black/20 z-20 origin-top group-hover:[transform:rotateX(-110deg)] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-white/10 border-t border-t-white/30 backdrop-blur-sm shadow-inner" />
                  
                  {brand.renderPack()}

                  {/* Cigarette Tips inside */}
                  <div className="absolute top-3 left-4 right-4 flex gap-[2px] justify-center z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-2 h-10 bg-[#fff8f1] rounded-t-sm border border-black/10" />
                    <div className="w-2 h-12 bg-[#fff8f1] rounded-t-sm border border-black/10 -translate-y-1" />
                    <div className="w-2 h-11 bg-[#fff8f1] rounded-t-sm border border-black/10" />
                  </div>
                </div>

                <h3 className={`font-headline text-2xl mb-2 ${brand.textColors?.title || "text-primary"}`}>
                  {brand.name}
                </h3>
                <p className={`font-body text-sm mb-4 leading-relaxed ${brand.textColors?.desc || "text-on-surface-variant"}`}>
                  {brand.desc}
                </p>
                
                <div className={`flex justify-between items-center pt-4 border-t ${brand.textColors?.border || "border-outline-variant/10"}`}>
                  <span className={`font-label text-[10px] uppercase tracking-widest ${brand.textColors?.tag || "text-on-surface-variant"}`}>
                    {brand.tag} | {brand.nic}
                  </span>
                  <button className={`${brand.textColors?.icon || "text-secondary"} hover:scale-110 active:scale-95 transition-transform`}>
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
