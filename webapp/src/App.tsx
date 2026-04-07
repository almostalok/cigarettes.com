import { useState, useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/home/Hero";
import { BrandsGrid } from "./components/home/BrandsGrid";
import { SmokeRoom } from "./components/home/SmokeRoom";
import { About } from "./components/home/About";
import { CinematicIntro } from "./components/home/CinematicIntro";
import { ToolsSection } from "./components/home/ToolsSection";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this session to prevent annoyance
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setIntroFinished(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setIntroFinished(true);
  };

  return (
    <>
      {!introFinished && <CinematicIntro onComplete={handleIntroComplete} />}
      
      {/* The main app layout is conditionally visible or always mounted but beneath */}
      {introFinished && (
        <Layout>
          <Hero />
          <BrandsGrid />
          <SmokeRoom />
          <ToolsSection />
          <About />
        </Layout>
      )}
    </>
  );
}

export default App;
