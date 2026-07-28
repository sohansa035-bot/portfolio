"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const GlobalAmbient = () => {
  const { scrollY } = useScroll();
  
  // As we scroll down, the radial glow slowly shifts its hue and moves vertically
  const yPos = useTransform(scrollY, [0, 5000], ["-20%", "120%"]);
  const hue = useTransform(scrollY, [0, 5000], [0, 360]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Soft Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle floating ambient light */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-multiply opacity-20 filter blur-[100px]"
        style={{ 
          y: yPos,
          backgroundColor: "var(--primary-accent)",
          filter: `hue-rotate(${hue}deg) blur(100px)` as any
        }}
      />
    </div>
  );
};
