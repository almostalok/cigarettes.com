export function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-tertiary w-full py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/5 to-transparent pointer-events-none" />
      
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-6 relative z-10 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <span className="font-headline text-2xl text-primary-container dark:text-tertiary-fixed italic">
            cigarettes.com
          </span>
          
          <div className="flex flex-wrap justify-center gap-6 font-label text-[10px] uppercase tracking-widest text-primary-container/50 dark:text-tertiary-fixed/50">
            <a href="#" className="hover:text-primary dark:hover:text-white transition-all">Privacy</a>
            <a href="#" className="hover:text-primary dark:hover:text-white transition-all">Terms of Service</a>
            <a href="#" className="hover:text-primary dark:hover:text-white transition-all">Age Verification</a>
            <a href="#" className="hover:text-primary dark:hover:text-white transition-all">Contact</a>
          </div>
        </div>
        
        <div className="text-primary-container/50 dark:text-tertiary-fixed/50 font-label text-[10px] uppercase tracking-widest text-center md:text-right">
          © {new Date().getFullYear()} cigarettes.com — The Digital Humidor
        </div>
      </div>
    </footer>
  );
}
