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
    const timer = setTimeout(() => setStage(1), 600);
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
        }, 2000); // Wait just long enough to see the Eye, then snap to the website
      }, 1000); // Length of the explosion outward
    }, 400); // 400ms implosion build-up
  };

  // Generate 48 particles and their neural connections
  const { particles, connections, activeNodes } = useMemo(() => {
    const pts = Array.from({ length: 48 }).map((_, i) => {
      const angle = (i / 48) * Math.PI * 2;
      const explodeRadius = 400 + Math.random() * 600;
      
      const cols = 8;
      const spacing = 60;
      const orderX = (i % cols) * spacing - ((cols - 1) * spacing) / 2;
      const orderY = Math.floor(i / cols) * spacing - 150;

      return {
        id: i,
        explodeX: Math.cos(angle) * explodeRadius,
        explodeY: Math.sin(angle) * explodeRadius,
        orderX,
        orderY,
        delay: Math.random() * 0.4
      };
    });

    const conns: { id: string, from: number, to: number, delay: number }[] = [];
    
    // The "Infinity Reactor" Architecture
    const infinityLoop = [
      19, 10, 9, 16, 24, 33, 34, 27, // Left loop
      20, 13, 14, 23, 31, 38, 37, 28, // Right loop
      19 // Cross center back to start
    ];
    
    const shellTop = [9, 2, 3, 4, 5, 14];
    const shellBottom = [33, 42, 43, 44, 45, 38];
    
    // Core rods inside the loops
    const coreRods = [[18, 26], [21, 29]];

    let delayCount = 0;
    
    const addPath = (path: number[], label: string) => {
      for (let i = 0; i < path.length - 1; i++) {
        conns.push({
          id: `reactor-${label}-${i}`,
          from: path[i],
          to: path[i + 1],
          delay: 0.2 + (delayCount++ * 0.04)
        });
      }
    };
    
    const addStruts = (strutList: number[][], label: string) => {
      strutList.forEach((s, i) => {
        conns.push({
          id: `reactor-rod-${label}-${i}`,
          from: s[0],
          to: s[1],
          delay: 0.2 + (delayCount * 0.04) 
        });
      });
      delayCount += 2; 
    };

    addPath(infinityLoop, 'infinity');
    addStruts(coreRods, 'rods');
    addPath(shellTop, 'shellTop');
    addPath(shellBottom, 'shellBottom');

    // Add just a few very faint random background connections
    for (let i = 0; i < 48; i++) {
      if (Math.random() > 0.85 && (i + 1) % 8 !== 0) {
        conns.push({ id: `bg-${i}-r`, from: i, to: i + 1, delay: 1 + Math.random() });
      }
      if (Math.random() > 0.85 && i + 8 < 48) {
        conns.push({ id: `bg-${i}-b`, from: i, to: i + 8, delay: 1 + Math.random() });
      }
    }
    
    const activeNodesSet = new Set([...infinityLoop, ...shellTop, ...shellBottom, ...coreRods.flat()]);

    return { particles: pts, connections: conns, activeNodes: activeNodesSet };
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
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#FF4D00]/60"
                  animate={{ scale: [1, 2.5, 1], opacity: [0, 0.5, 0], rotate: [0, 180] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#FF4D00]/40"
                  animate={{ scale: [1, 3.5, 1], opacity: [0, 0.3, 0], rotate: [180, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#FF4D00]/20"
                  animate={{ scale: [1, 4.5, 1], opacity: [0, 0.2, 0], rotate: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Big Bang Particles & Neural Assembly */}
      {stage >= 3 && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
          animate={
            stage === 4 
              ? { 
                  scale: [1.2, 1], 
                  rotateX: [40, -10, 5, 0], 
                  rotateY: [-30, 15, -5, 0] 
                } 
              : {}
          }
          transition={{ duration: 3.5, ease: "easeOut" }}
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
          {particles.map((p) => {
            const isActive = activeNodes.has(p.id);
            return (
              <motion.div
                key={p.id}
                className="absolute w-[2px] h-[2px] bg-[#FF4D00] rounded-full shadow-[0_0_10px_2px_rgba(255,77,0,0.8)]"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={
                  stage === 3 
                    ? { x: p.explodeX, y: p.explodeY, opacity: Math.random() * 0.5 + 0.5, scale: Math.random() * 4 + 1 }
                    : { 
                        x: p.orderX, 
                        y: p.orderY, 
                        opacity: isActive ? [0.2, 1, 0.2] : 0.1, 
                        scale: isActive ? [1, 2, 1] : 1,
                        boxShadow: isActive ? "0 0 15px 2px rgba(255,77,0,1)" : "none"
                      }
                }
                transition={{
                  x: { duration: stage === 3 ? 1.5 : 2, ease: stage === 3 ? "easeOut" : [0.76, 0, 0.24, 1], delay: stage === 4 ? p.delay : 0 },
                  y: { duration: stage === 3 ? 1.5 : 2, ease: stage === 3 ? "easeOut" : [0.76, 0, 0.24, 1], delay: stage === 4 ? p.delay : 0 },
                  opacity: isActive && stage === 4 ? { duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 } : { duration: 1 },
                  scale: isActive && stage === 4 ? { duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 } : { duration: 1 }
                }}
              />
            );
          })}

          {/* Neural Architecture Grid (Appears during Chaos to Order) */}
          <AnimatePresence>
            {stage === 4 && (
              <>
                <svg className="absolute inset-0 w-full h-full opacity-40 z-0 pointer-events-none">
                  <g style={{ transform: "translate(50%, 50%)" }}>
                    {connections.map((c) => {
                      const p1 = particles[c.from];
                      const p2 = particles[c.to];
                      const isMainPath = c.id.startsWith("reactor");
                      const isInfinity = c.id.startsWith("reactor-infinity");
                      const isRod = c.id.startsWith("reactor-rod");
                      return (
                        <motion.line
                          key={c.id}
                          x1={p1.orderX}
                          y1={p1.orderY}
                          x2={p2.orderX}
                          y2={p2.orderY}
                          stroke="#FF4D00"
                          strokeWidth={isMainPath ? "3" : "1"}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: 1, 
                            opacity: isMainPath ? 1 : 0.2,
                            filter: isInfinity && stage === 4 ? [
                              "drop-shadow(0px 0px 5px rgba(255, 77, 0, 0.8))",
                              "drop-shadow(0px 0px 25px rgba(255, 77, 0, 1))",
                              "drop-shadow(0px 0px 5px rgba(255, 77, 0, 0.8))"
                            ] : isMainPath ? "drop-shadow(0px 0px 8px rgba(255, 77, 0, 1))" : "none"
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ 
                            pathLength: { duration: isMainPath ? 0.4 : 1.5, ease: "easeOut", delay: c.delay },
                            opacity: { duration: isMainPath ? 0.4 : 1.5, ease: "easeOut", delay: c.delay },
                            filter: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: c.delay }
                          }}
                        />
                      );
                    })}
                  </g>
                </svg>
                <motion.svg
                  className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
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
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
};
