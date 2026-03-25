import { Calculator, BookOpen } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function SmokeRoom() {
  const [daily, setDaily] = useState(20);
  const [price, setPrice] = useState(14.50);

  const annualSpend = daily * 365 * (price / 20);
  const totalSticks = daily * 365;

  return (
    <section id="smoke-room" className="py-24 px-6 lg:px-24 bg-surface-bright pb-40">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-5xl md:text-6xl text-primary mb-4 italic">The Smoke Room</h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Curated utilities for the modern smoker to track, calculate, and manage their consumption with elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-surface-container p-8 md:p-10 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-10">
              <Calculator className="text-secondary w-8 h-8" />
              <h3 className="font-headline text-3xl text-primary">Count the Cost</h3>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between font-label text-xs uppercase tracking-widest text-primary/60">
                  <span>Daily Consumption</span>
                  <span className="text-primary font-bold">{daily} Sticks</span>
                </div>
                <input 
                  type="range" min="1" max="60" 
                  value={daily} onChange={e => setDaily(Number(e.target.value))}
                  className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-secondary rounded-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between font-label text-xs uppercase tracking-widest text-primary/60">
                  <span>Price per Pack (20s)</span>
                  <span className="text-primary font-bold">${price.toFixed(2)}</span>
                </div>
                <input 
                  type="range" min="5" max="40" step="0.5" 
                  value={price} onChange={e => setPrice(Number(e.target.value))}
                  className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-secondary rounded-full"
                />
              </div>

              <div className="pt-8 grid grid-cols-2 gap-6 border-t border-outline-variant/20">
                <div className="space-y-1">
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Annual Spend</span>
                  <motion.div 
                    key={annualSpend}
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-headline text-3xl md:text-4xl text-primary"
                  >
                    ${Math.round(annualSpend).toLocaleString()}
                  </motion.div>
                </div>
                <div className="space-y-1">
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Total Sticks</span>
                  <motion.div 
                    key={totalSticks}
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-headline text-3xl md:text-4xl text-secondary"
                  >
                    {totalSticks.toLocaleString()}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ledger Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="bg-primary-container p-8 md:p-10 rounded-2xl shadow-xl text-surface-bright relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-secondary/10 transition-colors duration-700" />
            
            <div className="flex justify-between items-start mb-10 relative z-10">
              <div className="flex items-center gap-4">
                <BookOpen className="text-secondary-fixed w-8 h-8" />
                <h3 className="font-headline text-3xl text-surface-bright">The Ledger</h3>
              </div>
              <button className="bg-secondary text-primary-container px-6 py-2 rounded-full font-label text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-secondary/20">
                Log +1
              </button>
            </div>

            <div className="flex items-center gap-12 mb-10 relative z-10">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="58" cx="64" cy="64" />
                  <motion.circle 
                    className="text-secondary" strokeWidth="8" strokeDasharray="364" stroke="currentColor" fill="transparent" r="58" cx="64" cy="64"
                    initial={{ strokeDashoffset: 364 }}
                    whileInView={{ strokeDashoffset: 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-headline text-3xl">12</span>
                  <span className="font-label text-[8px] uppercase tracking-widest opacity-60">Today</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="font-label text-xs uppercase tracking-widest opacity-60">Weekly Consumption</div>
                <div className="flex items-end gap-2 h-20">
                  <div className="flex-1 bg-white/10 rounded-t-sm h-12 hover:bg-secondary transition-colors cursor-help group/bar"><span className="opacity-0 group-hover/bar:opacity-100 absolute -translate-y-6 text-[10px]">15</span></div>
                  <div className="flex-1 bg-white/10 rounded-t-sm h-16 hover:bg-secondary transition-colors cursor-help" />
                  <div className="flex-1 bg-secondary rounded-t-sm h-14 relative" />
                  <div className="flex-1 bg-white/5 rounded-t-sm h-8 opacity-20" />
                  <div className="flex-1 bg-white/5 rounded-t-sm h-10 opacity-20" />
                  <div className="flex-1 bg-white/5 rounded-t-sm h-6 opacity-20" />
                  <div className="flex-1 bg-white/5 rounded-t-sm h-9 opacity-20" />
                </div>
              </div>
            </div>

            <div className="space-y-2 relative z-10">
              <span className="font-label text-[10px] text-secondary-fixed uppercase tracking-widest mb-4 block">Recent Entries</span>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded text-xs border-l-2 border-secondary font-label">
                  <span>Davidoff Classic</span>
                  <span className="opacity-40 tracking-widest">14:22 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded text-xs border-l-2 border-secondary/20 font-label">
                  <span>Lucky Strike Red</span>
                  <span className="opacity-40 tracking-widest">11:05 AM</span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
