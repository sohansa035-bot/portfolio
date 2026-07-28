"use client";

import { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { AnimatePresence } from "framer-motion";
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
    const hasVisited = sessionStorage.getItem("visited");
    
    if (hasVisited) {
      // Returning visitor (in this session): skip The Spark intro completely.
      setLoading(false); 
    } else {
      // First-time visitor: lock them in to see The Spark.
      sessionStorage.setItem("visited", "true");
      
      // If they somehow landed on a sub-page first, forcefully route them to Home 
      // so the cinematic sequence happens on the main root URL.
      if (pathname !== "/") {
        router.replace("/");
      }
    }
  }, [pathname, router]);

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
    <div className={`relative ${blueprintMode ? 'blueprint-mode' : ''}`}>
      <CommandPalette toggleBlueprint={() => setBlueprintMode(!blueprintMode)} />
      
      <AnimatePresence>
        {loading && <Loader key="global-loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden pointer-events-none' : 'opacity-100'}`}>
        {children}
      </div>
    </div>
  );
};
