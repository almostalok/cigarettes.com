import { useState, useEffect } from "react";
import { BRANDS } from "../../data/brands";
import { Plus, Flame, BarChart2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SmokeLog {
  id: string;
  brandId: string;
  timestamp: number;
}

export function Ashtray() {
  const [logs, setLogs] = useState<SmokeLog[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS[0].id);

  useEffect(() => {
    const saved = localStorage.getItem("ashtray_logs");
    if (saved) {
      try {
        setLogs(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const handleLogSmoke = () => {
    const newLog: SmokeLog = {
      id: Math.random().toString(36).substr(2, 9),
      brandId: selectedBrand,
      timestamp: Date.now(),
    };
    const updated = [newLog, ...logs];
    setLogs(updated);
    localStorage.setItem("ashtray_logs", JSON.stringify(updated));
  };

  const getTodayCount = () => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    return logs.filter(log => log.timestamp > startOfDay.getTime()).length;
  };

  const todayCount = getTodayCount();
  const mostRecent = logs.length > 0 ? BRANDS.find(b => b.id === logs[0].brandId) : null;

  return (
    <div className="bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
      {/* Decorative ash/smoke elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="flex flex-col items-center w-full max-w-md relative z-10">
        <h3 className="font-headline text-3xl md:text-4xl italic text-white flex items-center gap-3 tracking-tighter mb-2">
          The Ashtray
        </h3>
        <p className="text-white/50 text-sm tracking-widest uppercase mb-8">Daily Habitué</p>

        <div className="flex bg-black/40 border border-white/10 rounded-full p-1 mb-8 w-full">
          <select 
            value={selectedBrand} 
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="flex-1 bg-transparent text-white focus:outline-none appearance-none px-4 py-3 font-body text-sm rounded-full cursor-pointer"
          >
            {BRANDS.map(brand => (
              <option key={brand.id} value={brand.id} className="text-black bg-white">
                {brand.name}
              </option>
            ))}
          </select>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogSmoke}
            className="bg-[#d4af37] text-black px-6 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-[#e6c364] transition-colors"
          >
            <Flame className="w-4 h-4" /> Log
          </motion.button>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center relative shadow-inner">
            <span className="text-white/40 uppercase text-[10px] tracking-[0.2em] absolute top-4">Today</span>
            <span className="font-headline text-5xl md:text-6xl text-white font-light tracking-tighter mt-4">
              {todayCount}
            </span>
          </div>
          <div className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center relative shadow-inner text-center">
             <span className="text-white/40 uppercase text-[10px] tracking-[0.2em] absolute top-4">Last Burn</span>
             {mostRecent ? (
                <div className="mt-4 flex flex-col items-center justify-center">
                   <div 
                     className="w-10 h-[2px] mb-2" 
                     style={{ backgroundColor: mostRecent.lidColor || '#d4af37' }} 
                   />
                   <span className="text-white font-headline text-sm font-bold tracking-tight">{mostRecent.name}</span>
                </div>
             ) : (
                <span className="text-white/20 text-xs mt-4">No records</span>
             )}
          </div>
        </div>
        
        {/* Visual history of today's smokes */}
        <div className="w-full flex justify-center gap-1 flex-wrap">
          <AnimatePresence>
             {Array.from({ length: todayCount }).map((_, i) => (
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "8px", opacity: 1 }}
                  key={i} 
                  className="h-8 bg-gradient-to-t from-white/20 to-white/60 rounded-full border border-white/30"
                />
             ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
