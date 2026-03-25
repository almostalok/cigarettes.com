import { useEffect, useState } from "react";
import { Search, User } from "lucide-react";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#fff8f1]/85 dark:bg-[#0d0300]/85 backdrop-blur-md border-b border-[#2c1a0e]/10 shadow-[0_20px_40px_rgba(41,23,12,0.08)] py-0"
          : "bg-transparent py-4"
      )}
    >
      <div className="flex justify-between items-center h-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-3xl font-headline italic text-primary dark:text-[#eee1c9] tracking-tighter"
          >
            cigarettes.com
          </a>

          <div className="hidden md:flex gap-8 font-headline tracking-tighter text-lg">
            <a href="#home" className="text-secondary border-b-2 border-secondary pb-1 transition-colors duration-300">
              Home
            </a>
            <a href="#brands" className="text-primary-container/70 dark:text-[#eee1c9]/70 hover:text-secondary transition-colors duration-300">
              Brands
            </a>
            <a href="#smoke-room" className="text-primary-container/70 dark:text-[#eee1c9]/70 hover:text-secondary transition-colors duration-300">
              The Smoke Room
            </a>
            <a href="#about" className="text-primary-container/70 dark:text-[#eee1c9]/70 hover:text-secondary transition-colors duration-300">
              About
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
            <Search className="text-on-surface-variant w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Explore the humidor..."
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-label w-48 text-on-surface"
            />
          </div>
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <User className="text-primary w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
