import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActionButton } from "./FAB";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="grain-overlay" />
      <Navbar />
      <main className="flex-1 pt-24 min-h-screen">
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
