import { motion, type Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-[870px] flex items-center justify-center overflow-hidden px-6 lg:px-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low/30 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl relative z-10">
        
        <motion.div 
          className="space-y-8 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-headline text-6xl lg:text-8xl leading-[1.1] text-primary italic tracking-tight"
          >
            The world’s finest smokes, <br/>
            <span className="text-secondary">curated.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed"
          >
            An editorial journey through the heritage, craft, and culture of premium tobacco. Discover the legacy of the cigarette.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary-container text-surface-bright px-8 py-4 rounded-md font-label uppercase tracking-widest text-xs hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary-container/20">
              Explore Collections
            </button>
            <button className="border border-primary/20 text-primary px-8 py-4 rounded-md font-label uppercase tracking-widest text-xs hover:bg-surface-container-highest hover:-translate-y-1 transition-all duration-300">
              The Smoke Room
            </button>
          </motion.div>
        </motion.div>

        {/* Animated Cigarette Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-16 h-80 bg-[#fefefe] rounded-sm shadow-2xl origin-bottom flex flex-col items-center">
            {/* Filter */}
            <div className="absolute bottom-0 w-full h-24 bg-[#e9bc87] rounded-b-sm border-t border-black/10">
              <div 
                className="w-full h-full opacity-20" 
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 0)",
                  backgroundSize: "4px 4px"
                }} 
              />
            </div>
            {/* Logo Print */}
            <div className="absolute bottom-32 font-serif text-[10px] text-primary/40 tracking-[0.2em] uppercase -rotate-90 origin-center translate-y-4">
              CIGARETTES.COM
            </div>
            
            {/* Ember */}
            <div className="absolute -top-1 w-full h-4 bg-zinc-800 rounded-t-sm overflow-hidden">
              <motion.div 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="ember-glow absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-600 rounded-full"
              />
            </div>
            
            {/* Smoke System */}
            <div className="absolute -top-32 w-full h-48 pointer-events-none">
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="smoke-strand h-32 left-4" 
              />
              <motion.div 
                animate={{ y: [0, -30, 0], x: [10, 20, 10], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="smoke-strand h-40 left-8" 
              />
              <motion.div 
                animate={{ y: [0, -15, 0], x: [0, 5, 0], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="smoke-strand h-24 right-4" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
