"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for smooth trailing effect
  const cursorXSpring = useSpring(cursorX, { damping: 30, stiffness: 300, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { damping: 30, stiffness: 300, mass: 0.5 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect if hovering over an interactive element
      if (target.closest("a") || target.closest("button") || target.closest(".group")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    // Hide default cursor on desktop
    document.documentElement.classList.add("hide-cursor");
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, [cursorX, cursorY]);

  // Prevent SSR hydration mismatch and don't render on mobile
  if (!isMounted || (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches)) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-cursor, .hide-cursor * {
          cursor: none !important;
        }
      `}} />
      
      {/* The main trailing circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-[3px] border-white pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference overflow-hidden"
        style={{ 
          x: cursorXSpring, 
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{ 
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            backgroundColor: isHovering ? "white" : "transparent",
            borderColor: "white"
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
      />
      
      {/* The instant small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
      />
    </>
  );
};
