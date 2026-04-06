import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  const startSequence = () => {
    setStep(1);
    
    // Timeline Sequencing
    setTimeout(() => setStep(2), 4000); // 1865
    setTimeout(() => setStep(3), 8000); // 1880
    setTimeout(() => setStep(4), 12000); // The Statement
    setTimeout(() => {
      setStep(5); // Ignition
      // Play match strike sound (User must place match-strike.mp3 in public folder)
      const audio = new Audio('/match-strike.mp3');
      audio.volume = 0.6;
      audio.play().catch(e => console.log("Audio play prevented or missing file:", e));
    }, 16000);
    setTimeout(() => setStep(6), 22000); // Fade out to App
    setTimeout(() => onComplete(), 24000); // Unmount
  };

  return (
    <AnimatePresence>
      {step < 6 && (
        <motion.div 
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            
            {/* Step 0: The Ignition Permission */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
              >
                 <button 
                   onClick={startSequence}
                   className="w-24 h-24 rounded-full border border-white/20 flex flex-col items-center justify-center text-white/50 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all duration-700 group cursor-pointer"
                 >
                    <span className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-500 origin-bottom">🔥</span>
                    <span className="text-[8px] font-label uppercase tracking-[0.3em]">Ignite</span>
                 </button>
                 <span className="text-white/20 text-[10px] mt-8 font-label tracking-widest uppercase">Turn on Sound</span>
              </motion.div>
            )}

            {/* Step 1: Prologue */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-center max-w-xl px-6"
              >
                <p className="text-[#a0a0a0] font-headline text-2xl font-light italic tracking-wide leading-relaxed">
                  "It began in the 9th Century.<br/> The Mayans rolled sacred tobacco in palm leaves."
                </p>
                <div className="w-12 h-px bg-[#a0a0a0]/30 mx-auto mt-6" />
                <p className="text-[#a0a0a0]/50 text-xs font-label uppercase tracking-[0.4em] mt-6">The Sacred Smoke</p>
              </motion.div>
            )}

            {/* Step 2: 1865 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-center max-w-xl px-6"
              >
                <p className="text-[#d4af37] font-headline text-3xl font-light italic tracking-wide leading-relaxed">
                  "1865."
                </p>
                <p className="text-[#a0a0a0] font-body text-lg font-light tracking-wide mt-4">
                  Washington Duke hand-rolls the first commercial cigarettes in North Carolina.
                </p>
                <div className="w-12 h-px bg-[#d4af37]/30 mx-auto mt-6" />
                <p className="text-[#d4af37]/50 text-xs font-label uppercase tracking-[0.4em] mt-6">The Hand-Rolled Era</p>
              </motion.div>
            )}

            {/* Step 3: 1880 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-center max-w-xl px-6"
              >
                <p className="text-white font-headline text-4xl font-bold tracking-tight leading-relaxed">
                  1880.
                </p>
                <p className="text-white/70 font-body text-xl font-light tracking-wide mt-2">
                  The Bonsack machine is invented.
                </p>
                <p className="text-white/40 font-body text-md font-light tracking-widest uppercase mt-6 italic">
                  The ritual is perfected.
                </p>
              </motion.div>
            )}

            {/* Step 4: The Statement */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-center w-full px-4"
              >
                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-700 font-headline text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl">
                  Crafted specially for<br/>real cigarette lovers.
                </h1>
              </motion.div>
            )}

            {/* Step 5: The Lit Cigarette Animation */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative w-full h-full flex items-center justify-center bg-[#000000]"
              >
                 {/* The Dark Environment Background Glow (appears as cigarette lits) */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1.1 }}
                   transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
                   className="absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-red-900/10 rounded-full blur-[100px]"
                 />

                 {/* The Cigarette Body */}
                 <motion.div 
                   initial={{ y: 200, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
                   className="relative w-8 md:w-12 h-[60vh] md:h-[70vh] translate-y-20 flex flex-col items-center origin-top z-10"
                   style={{
                     background: 'linear-gradient(to right, #2a2a2a 0%, #d4d4d4 20%, #ffffff 50%, #d4d4d4 80%, #2a2a2a 100%)',
                     boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
                   }}
                 >
                    {/* The Cork Filter (bottom part of the visible cylinder) */}
                    <div className="absolute bottom-0 w-full h-[40%] bg-orange-200" 
                         style={{ 
                           backgroundImage: 'radial-gradient(#804000 10%, transparent 15%), radial-gradient(#804000 10%, transparent 15%)',
                           backgroundSize: '4px 4px',
                           backgroundPosition: '0 0, 2px 2px',
                           boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)'
                         }} 
                    />
                    
                    {/* The Burning Ash (Top tip) */}
                    <motion.div 
                      className="w-[110%] h-6 md:h-10 -mt-2 md:-mt-4 rounded-t-sm z-20 relative flex items-start justify-center overflow-visible"
                      style={{
                        background: 'linear-gradient(to right, #111 0%, #333 50%, #111 100%)',
                        boxShadow: 'inset 0 10px 10px rgba(0,0,0,0.9)'
                      }}
                    >
                        {/* The Glowing Cherry (Ember) */}
                        <motion.div 
                          className="w-full h-2 md:h-4 absolute top-0 rounded-t-sm"
                          initial={{ opacity: 0, backgroundColor: "#ff4500", boxShadow: "0 0 0px 0px rgba(255, 69, 0, 0)" }}
                          animate={{ 
                            opacity: [0, 1, 0.8, 1, 0.9, 1], 
                            backgroundColor: ["#ff4500", "#ffaa00", "#ff4500"],
                            boxShadow: [
                              "0 -5px 20px 5px rgba(255, 69, 0, 0)", 
                              "0 -15px 40px 15px rgba(255, 100, 0, 0.9)", 
                              "0 -10px 30px 10px rgba(255, 69, 0, 0.7)"
                            ]
                          }}
                          transition={{ duration: 4, times: [0, 0.2, 0.4, 0.6, 0.8, 1], repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        />
                        
                        {/* Falling Ash Particle */}
                        <motion.div 
                          className="w-2 h-3 bg-zinc-600 absolute right-[-2px] top-[10px] rounded-bl-xl origin-top"
                          initial={{ opacity: 0, rotate: 0, y: 0 }}
                          animate={{ opacity: [0, 1, 0], rotate: 15, y: 50 }}
                          transition={{ delay: 3, duration: 2, ease: "easeIn" }}
                        />
                    </motion.div>
                 </motion.div>

                 {/* The Smoke Plumes */}
                 <div className="absolute top-[10%] md:top-0 w-[200px] h-[300px] flex justify-center overflow-visible pointer-events-none z-0">
                    {/* Strand 1 */}
                    <motion.svg viewBox="0 0 100 200" className="absolute w-full h-full opacity-60 blur-md mix-blend-screen">
                        <motion.path 
                          d="M50,200 C30,150 70,100 20,50 C-10,10 40,-20 60,-50" 
                          fill="none" 
                          stroke="url(#smokeGradient)" 
                          strokeWidth="8"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                          transition={{ delay: 0.5, duration: 4, ease: "easeOut", repeat: Infinity }}
                        />
                        <defs>
                          <linearGradient id="smokeGradient" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                            <stop offset="100%" stopColor="rgba(200, 220, 255, 0)" />
                          </linearGradient>
                        </defs>
                    </motion.svg>
                    
                    {/* Strand 2 */}
                    <motion.svg viewBox="0 0 100 200" className="absolute w-full h-full opacity-40 blur-xl mix-blend-screen -ml-10">
                        <motion.path 
                          d="M50,200 C70,150 30,120 80,70 C110,30 20,0 50,-50" 
                          fill="none" 
                          stroke="url(#smokeGradient)" 
                          strokeWidth="15"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                          transition={{ delay: 1.5, duration: 5, ease: "easeOut", repeat: Infinity }}
                        />
                    </motion.svg>
                    
                    {/* Strand 3 */}
                    <motion.svg viewBox="0 0 100 200" className="absolute w-full h-full opacity-30 blur-2xl mix-blend-screen ml-10">
                        <motion.path 
                          d="M50,200 C40,160 80,140 40,80 C10,30 70,-10 30,-50" 
                          fill="none" 
                          stroke="url(#smokeGradient)" 
                          strokeWidth="25"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
                          transition={{ delay: 2.5, duration: 6, ease: "easeOut", repeat: Infinity }}
                        />
                    </motion.svg>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
