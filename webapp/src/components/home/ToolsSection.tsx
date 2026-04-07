import { Ashtray } from "./Ashtray";
import { RitualTimer } from "./RitualTimer";

export function ToolsSection() {
  return (
    <section id="tools" className="relative w-full py-24 md:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left mb-16 md:mb-24">
          <h2 className="font-headline text-5xl md:text-7xl italic font-light tracking-tighter text-white">Daily Rituals</h2>
          <div className="w-16 h-px bg-[#d4af37]/50 mt-4 md:mt-6 mb-4 md:mb-6 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          <p className="text-zinc-400 font-body text-sm md:text-base max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide">
            Elevate your habit into a ceremony. Track your consumption with the Ashtray, or pause and reflect with our meditative Ritual timer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col">
            <Ashtray />
          </div>
          <div className="flex flex-col">
            <RitualTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
