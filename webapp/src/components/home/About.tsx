import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-40 px-6 lg:px-24 bg-[#0d0300] text-[#eee1c9] relative overflow-hidden">
      
      {/* Background Parallax Texture */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ y: -50 }}
        whileInView={{ y: 50 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 3, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #755b00 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-label text-secondary uppercase tracking-[0.5em] text-xs font-semibold"
        >
          Our Philosophy
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-headline text-5xl lg:text-7xl italic leading-[1.1]"
        >
          Ritual, Heritage, <br/>& Refined Discovery.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xl lg:text-2xl leading-relaxed opacity-80"
        >
          Cigarettes.com is not just a portal; it is an archive of a disappearing craft. 
          We believe in the slow appreciation of tobacco, focusing on the historical brand narratives 
          and the tactile experience of premium packs. In a world of fast digital consumption, 
          we invite you to pause, discover, and document.
        </motion.p>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-secondary/40 mx-auto"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-12 font-label text-[10px] uppercase tracking-[0.3em] font-semibold pt-10"
        >
          <div className="flex flex-col gap-3">
            <span className="text-secondary font-headline text-3xl font-normal italic">1,200+</span>
            <span className="opacity-70">Archived Brands</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-secondary font-headline text-3xl font-normal italic">1871</span>
            <span className="opacity-70">Library Origins</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-secondary font-headline text-3xl font-normal italic">Global</span>
            <span className="opacity-70">Community</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
