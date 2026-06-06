import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import PreviewSection from "./components/PreviewSection";
import ProcessSection from "./components/ProcessSection";
import TechnologiesSection from "./components/TechnologiesSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// Расширяем интерфейс Window, чтобы TypeScript знал про lenis
declare global {
  interface Window {
    lenis: Lenis | null;
  }
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Сохраняем в глобальный объект window
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
  
  return (
    <Box
      as="div"
      minH="100vh"
      overflowX="hidden"
      position="relative"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(14,40,100,0.35) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 30%, rgba(59,80,200,0.12) 0%, transparent 50%), #060c18",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <NavBar />
      <HeroSection />
      <StatsSection />
      <div id="features"><FeaturesSection /></div>
      <PreviewSection />
      <div id="process"><ProcessSection /></div>
      <div id="technologies"><TechnologiesSection /></div>
      <CtaSection />
      <div id="footer"><Footer /></div>
    </Box>
  );
}