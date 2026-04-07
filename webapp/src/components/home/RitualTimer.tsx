import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Play, Square, TimerReset } from "lucide-react";

export function RitualTimer() {
  const [duration, setDuration] = useState<number>(7 * 60); // Default 7 minutes
  const [timeLeft, setTimeLeft] = useState<number>(7 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration);
  };

  const setPreset = (mins: number) => {
    setIsActive(false);
    setDuration(mins * 60);
    setTimeLeft(mins * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = 1 - (timeLeft / duration);

  return (
    <div className="bg-black border border-white/10 p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden h-[500px]">
      
      {/* Background glowing ember effect based on progress */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, rgba(255, 69, 0, ${0.4 * progress}) 0%, transparent 70%)`,
          boxShadow: isActive ? `0 0 ${40 + progress * 60}px ${10 + progress * 20}px rgba(255, 69, 0, 0.3)` : 'none'
        }}
      />
      
      <div className="flex flex-col items-center w-full max-w-sm relative z-10 h-full justify-between">
        <div className="flex flex-col items-center text-center">
            <h3 className="font-headline text-3xl md:text-4xl italic text-white/90 flex items-center gap-3 tracking-tighter">
            <Clock className="w-8 h-8 text-[#d4af37]" />
            The Ritual
            </h3>
            <p className="text-white/40 text-sm tracking-widest uppercase mt-2">Meditative Pause</p>
        </div>

        {/* Timer Display */}
        <div className="relative flex items-center justify-center py-8">
            <AnimatePresence mode="popLayout">
                <motion.div 
                    key={formatTime(timeLeft)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="font-headline text-7xl md:text-8xl text-white font-light tracking-tighter flex items-center justify-center drop-shadow-lg"
                >
                    {formatTime(timeLeft)}
                </motion.div>
            </AnimatePresence>
            
            {/* Ember tip visual */}
            {isActive && (
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_15px_5px_rgba(255,69,0,0.8)] animate-pulse" />
            )}
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
            {/* Controls */}
            <div className="flex items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTimer}
                    className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-white/40 transition-colors"
                >
                    {isActive ? <Square className="w-6 h-6 text-white fill-white" /> : <Play className="w-6 h-6 text-white fill-white ml-1" />}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetTimer}
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/30 transition-colors"
                >
                    <TimerReset className="w-5 h-5 text-white/70" />
                </motion.button>
            </div>

            {/* Presets */}
            <div className="flex justify-center gap-2 w-full">
                {[5, 7, 10].map(mins => (
                    <button
                        key={mins}
                        onClick={() => setPreset(mins)}
                        className={`flex-1 py-3 border text-xs font-bold tracking-widest uppercase transition-colors ${
                            duration === mins * 60 && !isActive 
                            ? "bg-[#d4af37] border-[#d4af37] text-black" 
                            : "bg-transparent border-white/20 text-white/50 hover:bg-white/10"
                        }`}
                    >
                        {mins} Min
                    </button>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
