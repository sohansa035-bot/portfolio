"use client";

import { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { AnimatePresence, motion } from "framer-motion";
import { CommandPalette } from "./CommandPalette";
import Lenis from "lenis";
import { usePathname, useRouter } from "next/navigation";

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  
  // Start loading true so the preloader always runs when the website is freshly loaded (or F5 refreshed).
  // Because this component is in layout.tsx, it will NOT remount during internal link clicks,
  // meaning internal navigation will smoothly bypass the preloader!
  const [loading, setLoading] = useState(true);
  const [blueprintMode, setBlueprintMode] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      // Subpages bypass the homepage preloader
      setLoading(false);
    }
  }, [pathname]);

  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Blueprint Mode
      if (e.key.toLowerCase() === 'b' && !e.ctrlKey && !e.metaKey) {
        setBlueprintMode(true);
      }
      if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey) {
        setBlueprintMode(false);
      }

      // Konami Code Logic
      setKonamiIndex((prevIndex) => {
        if (e.key === konamiCode[prevIndex]) {
          const nextIndex = prevIndex + 1;
          if (nextIndex === konamiCode.length) {
            alert("ACCESS GRANTED: Root privileges authorized.");
            setBlueprintMode(true);
            return 0; // Reset
          }
          return nextIndex;
        }
        return 0; // Reset if wrong key
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    // Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`relative ${blueprintMode ? 'blueprint-mode' : ''} bg-[#EDEDED]`}>
      <CommandPalette toggleBlueprint={() => setBlueprintMode(!blueprintMode)} />
      
      <AnimatePresence>
        {loading && <Loader key="global-loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <motion.div 
        className={loading ? 'h-screen overflow-hidden pointer-events-none' : ''}
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: loading ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
