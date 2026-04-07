import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bookmark, Search, SlidersHorizontal } from "lucide-react";
import { BRANDS, type Category } from "../../data/brands";

function FallbackImage({ src, alt, className, fallback }: { src: string; alt: string; className?: string; fallback: React.ReactNode }) {
  const [error, setError] = useState(false);
  if (error) return <>{fallback}</>;
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}

const CATEGORIES: Category[] = [
  "All", 
  "Indian Local", 
  "International", 
  "Premium / Luxury", 
  "Light / Mild", 
  "Herbal", 
  "Menthol", 
  "Budget"
];

export function BrandsGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedBrand = BRANDS.find(b => b.id === selectedId);

  // Filter logic
  const filteredBrands = useMemo(() => {
    return BRANDS.filter(brand => {
      const matchesCategory = activeCategory === "All" || brand.category === activeCategory;
      const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            brand.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="brands" className="py-24 px-6 lg:px-12 bg-surface-container-low min-h-screen relative">
      <div className="max-w-[1920px] mx-auto">
        <header className="mb-14 flex flex-col lg:flex-row justify-between lg:items-end gap-10 max-w-7xl mx-auto">
          <div className="space-y-4">
            <span className="font-label text-secondary uppercase tracking-[0.3em] text-[10px] font-semibold">The Portfolio</span>
            <h2 className="font-headline text-5xl md:text-6xl text-primary italic">Heritage Brands</h2>
            <p className="font-body text-on-surface-variant max-w-md">
              Select a pack from the humidor to uncover its history, specifications, and legacy.
            </p>
          </div>
          
          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row gap-4 lg:items-center w-full min-w-0">
            {/* Search Input */}
            <div className="relative flex items-center bg-surface-bright px-4 py-3 rounded-full border border-outline-variant/30 shadow-sm focus-within:border-secondary transition-colors shrink-0">
              <Search className="text-on-surface-variant w-4 h-4 mr-3" />
              <input
                type="text"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-label w-full sm:w-48 text-on-surface"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar rounded-full p-1 bg-surface-container border border-outline-variant/20 shadow-inner w-full max-w-full min-w-0">
              <div className="bg-surface-bright p-2 rounded-full sm:hidden mr-2 shrink-0">
                <SlidersHorizontal className="w-4 h-4 text-secondary" />
              </div>
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category 
                      ? "bg-secondary text-primary-container font-bold shadow-md" 
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-bright"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Minimalist Grid of only Packs */}
        <motion.div layout className="flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-7xl mx-auto min-h-[50vh]">
          <AnimatePresence>
            {filteredBrands.map((brand) => (
              <motion.div
                layoutId={`pack-envelope-${brand.id}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={brand.id}
                onClick={() => setSelectedId(brand.id)}
                className="relative w-36 h-52 cursor-pointer perspective-1000 group z-10"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="w-full h-full shadow-[0_15px_30px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-shadow duration-300 relative">
                  <motion.div 
                    layoutId={`pack-front-${brand.id}`}
                    className="w-full h-full bg-white relative overflow-hidden"
                  >
                    {brand.coverImage ? (
                      <FallbackImage 
                        src={brand.coverImage} 
                        alt={brand.name} 
                        className="w-full h-full object-cover" 
                        fallback={
                          <div className="w-full h-full bg-surface-variant flex flex-col justify-center items-center p-2 text-center rounded-sm">
                            <span className="text-xs font-headline font-bold text-on-surface opacity-40">{brand.name}</span>
                            <span className="text-[8px] font-label uppercase tracking-widest text-secondary mt-1">Cover Needed</span>
                            <span className="text-[6px] text-on-surface opacity-30 mt-2 break-all px-1 underline">{brand.coverImage}</span>
                          </div>
                        }
                      />
                    ) : brand.renderPackFront ? (
                      brand.renderPackFront()
                    ) : (
                      <div className="w-full h-full bg-surface-variant flex flex-col justify-center items-center p-2 text-center rounded-sm">
                        <span className="text-xs font-headline font-bold text-on-surface opacity-40">{brand.name}</span>
                        <span className="text-[8px] font-label uppercase tracking-widest text-secondary mt-1">Cover Needed</span>
                      </div>
                    )}
                  </motion.div>
                  <div className="absolute -bottom-4 left-[10%] w-[80%] h-4 bg-black/10 blur-md rounded-full -z-10 group-hover:opacity-50 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredBrands.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="w-full flex flex-col items-center justify-center text-on-surface-variant opacity-60 mt-20"
            >
              <Search className="w-12 h-12 mb-4" />
              <p className="font-headline text-2xl italic">No brands found in the humidor.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 text-xs font-label uppercase tracking-widest text-secondary hover:underline"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Expanded View Modal */}
        <AnimatePresence>
          {selectedId && selectedBrand && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-y-auto">
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-surface-variant/90 backdrop-blur-md cursor-pointer"
              />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl w-full my-auto">
                
                {/* 3D Expanding Pack */}
                <motion.div 
                  layoutId={`pack-envelope-${selectedBrand.id}`}
                  className="relative w-64 h-96 perspective-1000 shrink-0 shadow-2xl z-20"
                >
                  {/* Flipping Lid Component */}
                  <motion.div
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -115 }}
                    exit={{ rotateX: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
                    className="absolute top-0 w-full h-[30%] origin-bottom z-30 shadow-inner overflow-hidden border-b border-black/20"
                    style={{ backgroundColor: selectedBrand.lidColor, transformOrigin: 'top' }}
                  >
                     {selectedBrand.coverImage ? (
                       <FallbackImage 
                         src={selectedBrand.coverImage} 
                         className="absolute top-0 left-0 w-full h-[333.33%] object-cover object-top" 
                         alt="" 
                         fallback={<div className="w-full h-full opacity-30 bg-gradient-to-b from-white/20 to-black/20" />}
                       />
                     ) : (
                       <div className="w-full h-full opacity-30 bg-gradient-to-b from-white/20 to-black/20" />
                     )}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                    className="absolute top-4 left-4 right-4 flex justify-between z-10 px-2"
                  >
                     {Array.from({length: 6}).map((_, i) => (
                       <div 
                         key={i} 
                         className="w-[12%] h-[200px] bg-gradient-to-r from-[#ffe0cc] to-[#ffeddf] rounded-t-sm shadow-sm border border-black/5" 
                         style={{ transform: `translateY(${i%2===0 ? '6px': '0px'})` }} 
                       />
                     ))}
                  </motion.div>

                  {/* Pack Body Base */}
                  <motion.div 
                    layoutId={`pack-front-${selectedBrand.id}`}
                    className="absolute top-[30%] w-full h-[70%] bg-white shadow-2xl z-20 overflow-hidden border-t border-black/10 flex flex-col"
                  >
                     {selectedBrand.coverImage ? (
                       <FallbackImage 
                         src={selectedBrand.coverImage} 
                         className="absolute bottom-0 left-0 w-full h-[142.85%] object-cover object-bottom" 
                         alt="" 
                         fallback={
                           <div className="w-full h-full bg-surface-variant flex flex-col justify-center items-center p-4 text-center">
                              <span className="text-xl font-headline font-bold text-on-surface opacity-40">{selectedBrand.name}</span>
                              <span className="text-[10px] font-label uppercase tracking-widest text-secondary mt-2">Authentic Cover Required</span>
                              <span className="text-[8px] text-on-surface opacity-30 mt-2 underline">{selectedBrand.coverImage}</span>
                           </div>
                         }
                       />
                     ) : selectedBrand.renderPackFront ? (
                       <div className="w-full h-[142.85%] absolute bottom-0 left-0">
                         {selectedBrand.renderPackFront()}
                       </div>
                     ) : (
                       <div className="w-full h-full bg-surface-variant flex flex-col justify-center items-center p-4 text-center">
                          <span className="text-xl font-headline font-bold text-on-surface opacity-40">{selectedBrand.name}</span>
                          <span className="text-[10px] font-label uppercase tracking-widest text-secondary mt-2">Authentic Cover Required</span>
                       </div>
                     )}
                  </motion.div>
                </motion.div>

                {/* Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -10, filter: "blur(2px)", transition: { duration: 0.2 } }}
                  transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 bg-surface-bright p-10 md:p-14 rounded-2xl shadow-xl border border-outline-variant/30 relative max-h-[90vh] overflow-y-auto"
                >
                  <button 
                    onClick={() => setSelectedId(null)} 
                    className="absolute top-6 right-6 p-3 text-on-surface hover:bg-surface-container rounded-full transition-colors group z-50"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label text-xs uppercase tracking-[0.3em] font-semibold text-secondary block">
                      {selectedBrand.tag}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-on-surface-variant/30" />
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block">
                      {selectedBrand.category} Archive
                    </span>
                  </div>
                  
                  <h2 className="font-headline text-5xl md:text-6xl italic leading-[1.1] text-primary mb-8">
                    {selectedBrand.name}
                  </h2>
                  
                  <div className="w-16 h-px bg-on-surface/20 mb-8" />
                  
                  <p className="font-body text-xl leading-relaxed text-on-surface-variant mb-12">
                    {selectedBrand.desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <div className="space-y-1">
                      <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface/50 font-bold">Yield Profile</span>
                      <div className="font-headline text-3xl text-primary">{selectedBrand.nic}</div>
                    </div>
                    
                    <button className="bg-secondary text-primary-container px-8 py-4 rounded-full font-label uppercase text-xs font-bold tracking-widest hover:-translate-y-1 active:scale-95 transition-all shadow-md flex items-center justify-center gap-3 w-full sm:w-auto">
                       <Bookmark className="w-4 h-4" /> 
                       <span>Archive</span>
                    </button>
                  </div>
                </motion.div>
                
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
