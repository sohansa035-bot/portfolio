"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0);
  
  // 0: Absolute Darkness (2.0s)
  // 1: The Orb (Idle & Hover)
  // 2: Implosion (400ms)
  // 3: The Big Bang (Explosion wave)
  // 4: Chaos to Order (Neural Grid assembly & Website Birth)

  useEffect(() => {
    // Scene 1: Absolute Darkness
    const timer = setTimeout(() => setStage(1), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (stage !== 1) return;
    
    // Scene 4: Implosion (Click)
    setStage(2);
    
    setTimeout(() => {
      // Scene 5: The Big Bang
      setStage(3);
      
      setTimeout(() => {
        // Scene 6: Chaos to Order
        setStage(4);
        
        setTimeout(() => {
          // Scene 7: Website Birth
          onComplete();
        }, 1500); // Allow time for the grid to assemble and background to fade
      }, 1000); // Length of the explosion outward
    }, 400); // 400ms implosion build-up
  };

  // Generate 48 particles for the Chaos to Order sequence
  const particles = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => {
      const angle = (i / 48) * Math.PI * 2;
      const explodeRadius = 400 + Math.random() * 600;
      
      // Calculate a structured grid position for the "Order" phase
      const cols = 8;
      const spacing = 60;
      const orderX = (i % cols) * spacing - ((cols - 1) * spacing) / 2 + (Math.random() * 10 - 5);
      const orderY = Math.floor(i / cols) * spacing - 150 + (Math.random() * 10 - 5);

      return {
        id: i,
        explodeX: Math.cos(angle) * explodeRadius,
        explodeY: Math.sin(angle) * explodeRadius,
        orderX,
        orderY,
        delay: Math.random() * 0.4
      };
    });
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[500] flex items-center justify-center overflow-hidden bg-black"
      animate={{ backgroundColor: stage >= 4 ? "transparent" : "#000000" }}
      transition={{ duration: stage >= 4 ? 1.5 : 0, ease: "easeInOut" }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {/* Subtle Camera Rumble during Implosion */}
      {stage === 2 && (
        <motion.div 
          className="absolute inset-0 pointer-events-none bg-white/5"
          animate={{ x: [-10, 10, -10, 10, 0], y: [-10, 10, -10, 10, 0] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          style={{ mixBlendMode: "screen" }}
        />
      )}

      {/* The Core Orb */}
      <AnimatePresence>
        {stage >= 1 && stage <= 3 && (
          <motion.div
            key="orb"
            onClick={handleClick}
            className="relative z-10 flex items-center justify-center cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              stage === 1 ? { scale: 1, opacity: 1 } :
              stage === 2 ? { scale: 0.05, opacity: 1 } :
              { scale: 300, opacity: 0 } // Big Bang expansion
            }
            transition={{
              duration: stage === 1 ? 2 : stage === 2 ? 0.4 : 1.2,
              ease: stage === 1 ? "easeOut" : stage === 2 ? "anticipate" : "circIn"
            }}
          >
            <div 
              className={`w-5 h-5 rounded-full transition-all duration-300
                ${stage === 1 ? 'bg-[#FF4D00] shadow-[0_0_30px_10px_rgba(255,77,0,0.4)] hover:shadow-[0_0_50px_20px_rgba(255,77,0,0.8)] hover:scale-110 hover:bg-[#ff7a33] animate-pulse' : 
                  stage === 2 ? 'bg-white shadow-[0_0_150px_50px_rgba(255,255,255,1)]' : 
                  'bg-white shadow-none'}
              `}
            />
            {/* Plasma rings on hover / idle */}
            {stage === 1 && (
              <motion.div
                className="absolute inset-0 rounded-full border border-[#FF4D00]/50"
                animate={{ scale: [1, 2.5, 1], opacity: [0, 0.5, 0], rotate: [0, 180] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructional Text */}
      <AnimatePresence>
        {stage === 1 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.4, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-1/4 text-[10px] font-mono tracking-[0.5em] text-[#FF4D00] uppercase pointer-events-none"
          >
            Click to Initiate
          </motion.p>
        )}
      </AnimatePresence>

      {/* The Big Bang Particles & Neural Assembly */}
      {stage >= 3 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-[2px] h-[2px] bg-[#FF4D00] rounded-full shadow-[0_0_10px_2px_rgba(255,77,0,0.8)]"
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={
                stage === 3 
                  ? { x: p.explodeX, y: p.explodeY, opacity: Math.random() * 0.5 + 0.5, scale: Math.random() * 4 + 1 }
                  : { x: p.orderX, y: p.orderY, opacity: 0.1, scale: 1 } // Assemble into grid
              }
              transition={{
                duration: stage === 3 ? 1.5 : 2,
                ease: stage === 3 ? "easeOut" : [0.76, 0, 0.24, 1], // Smooth architecture assembly
                delay: stage === 4 ? p.delay : 0 
              }}
            />
          ))}

          {/* Neural Architecture Grid (Appears during Chaos to Order) */}
          <AnimatePresence>
            {stage === 4 && (
              <motion.svg
                className="absolute inset-0 w-full h-full opacity-10"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <defs>
                  <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FF4D00" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="0" cy="0" r="1.5" fill="#FF4D00" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#neural-grid)" />
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};
