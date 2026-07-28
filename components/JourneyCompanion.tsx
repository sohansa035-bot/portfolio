"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { JourneyCompanion3D } from "./JourneyCompanion3D";

export const JourneyCompanion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Triggers the animation when the user scrolls to this section
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Start the seamless sequence
      setStep(0); // Cricket swing

      const t1 = setTimeout(() => setStep(1), 2500); // Ball morphs to Football, Kick
      const t2 = setTimeout(() => setStep(2), 5000); // Football morphs to Shuttlecock, Smash
      const t3 = setTimeout(() => setStep(3), 7500); // Shuttlecock trails into the Doorway
      const t4 = setTimeout(() => setStep(4), 9000); // Door opens, walk inside, sit
      const t5 = setTimeout(() => setStep(5), 11000); // Laptop glows, Building Intelligent Systems
      const t6 = setTimeout(() => setStep(6), 14000); // Screen flashes bright white (Loop transition)
      const t7 = setTimeout(() => setStep(0), 15000); // Restart sequence
      
      return () => { 
        clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); 
        clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
      };
    } else {
      // Reset if they scroll away
      setStep(0);
    }
  }, [isInView]);

  // Projectile Animation State with Pixar-style Squash & Stretch
  const getProjectileAnim = () => {
    if (step === 0) return { 
      x: [100, -100, 300], y: [-10, 20, -60], 
      scaleX: [0, 1, 1.4, 1], scaleY: [0, 1, 0.7, 1] // Squash on impact, stretch in flight
    }; 
    if (step === 1) return { 
      x: [300, 80, -150], y: [-60, -30, -50], 
      scaleX: [1, 0.8, 1.3, 1], scaleY: [1, 1.2, 0.9, 1], // Compress on kick
      rotate: [0, 720] 
    }; 
    if (step === 2) return { 
      x: [-150, 0, 250], y: [-50, -150, -80], 
      scaleX: [1, 0.7, 1.2, 1], scaleY: [1, 1.3, 0.8, 1] // Smash compression
    }; 
    if (step >= 3) return { x: 250, y: -80, opacity: 0, scale: 0 }; // vanishes into doorway
    return {};
  };

  const getTrailColor = () => {
    if (step === 0) return "drop-shadow(0 0 15px rgba(255,165,0,0.8))"; // Orange for Cricket
    if (step === 1) return "drop-shadow(0 0 15px rgba(0,255,255,0.8))"; // Cyan for Football
    return "drop-shadow(0 0 15px rgba(255,255,255,1))"; // White for Shuttlecock
  };

  return (
    <section ref={containerRef} id="sports" className="relative w-full h-[90vh] bg-[#FDFBF7] border-t-8 border-black overflow-hidden flex flex-col justify-end pb-20">
      
        {/* Title */}
        <div className="absolute top-20 w-full text-center">
            <h2 className="text-[6vw] font-black uppercase tracking-tighter text-black leading-none">Beyond the Code</h2>
            <p className="text-xl font-bold opacity-50 uppercase tracking-widest mt-4">The Journey</p>
        </div>

        {/* Subtle Ground Line */}
        <div className="absolute bottom-20 left-0 w-full h-[4px] bg-black/10" />

        {/* Glowing Doorway Scene (Forms in Step 3, Opens in Step 4) */}
        <div className="absolute bottom-16 right-[15vw] h-full flex items-end">
           <motion.div 
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: step >= 3 ? 1 : 0, height: step >= 3 ? 160 : 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative w-24 border-4 border-[var(--primary-accent)] shadow-[0_0_20px_var(--primary-accent)] flex items-end justify-start"
           >
             {/* Door panel swinging open */}
             <motion.div 
               animate={{ rotateY: step >= 4 ? -80 : 0 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="w-full h-full bg-black/80 origin-left border-r-2 border-[var(--primary-accent)]"
             />
           </motion.div>
           
           {/* Desk and Laptop that fade in once inside */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: step >= 4 ? 1 : 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="relative ml-2"
           >
             <div className="w-24 h-12 border-t-4 border-r-4 border-black" />
             <div className="w-12 h-10 bg-black absolute bottom-12 left-4 border-2 border-[var(--primary-accent)] transform -skew-x-12 rounded-t-sm" />
           </motion.div>
        </div>

        {/* The 3D Cinematic Character */}
        <motion.div 
          className="absolute bottom-20 w-full flex flex-col items-center justify-end z-20 pointer-events-none"
        >
           {/* 3D Canvas Container */}
           <div className="relative w-full h-80 flex items-center justify-center pointer-events-auto origin-bottom">
              {/* Passes step to 3D to control Camera and Models */}
              <JourneyCompanion3D step={step} />
              
              {/* Dynamic 2D Overlays for Missing 3D Props */}
              <AnimatePresence>
                 
                 {/* CRICKET BAT */}
                 {step === 0 && (
                   <motion.div 
                     key="cricket"
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                     className="absolute inset-0 pointer-events-none flex justify-center items-center"
                   >
                     <motion.div 
                       animate={{ rotate: [-20, 80, -20] }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                       className="absolute mt-10 ml-8 text-4xl origin-bottom-left"
                     >
                       🏏
                     </motion.div>
                   </motion.div>
                 )}

                 {/* BADMINTON RACKET */}
                 {step === 2 && (
                   <motion.div 
                     key="badminton"
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                     className="absolute inset-0 pointer-events-none flex justify-center items-center"
                   >
                     <motion.div 
                       animate={{ rotate: [-40, 60, -40] }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                       className="absolute mt-4 text-4xl origin-bottom-right"
                     >
                       🏸
                     </motion.div>
                   </motion.div>
                 )}

                 {/* THE CONTINUOUS PROJECTILE WITH MOTION TRAILS */}
                 {step < 3 && (
                   <>
                     {[0, 1, 2, 3, 4].map((i) => (
                       <motion.div 
                         key={`projectile-trail-${i}`}
                         initial={{ opacity: 0 }} animate={getProjectileAnim()} exit={{ opacity: 0 }}
                         transition={{ duration: 2.5, ease: "easeInOut", delay: i * 0.04 }} // Staggered delay for trail
                         style={{ filter: getTrailColor() }}
                         className={`absolute top-1/2 left-1/2 text-3xl pointer-events-none z-50 ${i > 0 ? "opacity-50 blur-sm scale-75" : "opacity-100"}`}
                       >
                         {step === 0 ? "🔴" : step === 1 ? "⚽" : "⚪"}
                       </motion.div>
                     ))}
                   </>
                 )}

                 {/* FINAL SCENE: Glowing Holographic Monitor */}
                 {step >= 5 && step < 6 && (
                   <motion.div 
                     key="monitor"
                     initial={{ opacity: 0, scale: 0.8, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.1, filter: "brightness(2) blur(10px)" }} // Explodes into light
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="absolute right-[20vw] top-[20%] w-64 p-6 bg-black/60 border border-[var(--primary-accent)] rounded-lg shadow-[0_0_40px_var(--primary-accent)] backdrop-blur-md flex flex-col justify-center"
                   >
                      <h3 className="text-xl font-black text-white tracking-widest uppercase glow-text text-cyan-400">Sohan</h3>
                      <p className="text-xs text-purple-400 font-mono mt-2 flex items-center">
                        Building Intelligent Systems<span className="animate-pulse ml-1 text-base text-white">_</span>
                      </p>
                   </motion.div>
                 )}
                 
                 {/* SCREEN FLASH TRANSITION (To loop back to Cricket) */}
                 {step === 6 && (
                    <motion.div
                       key="flash"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.8 }}
                       className="fixed inset-0 bg-white z-[200] pointer-events-none"
                    />
                 )}

              </AnimatePresence>
           </div>
        </motion.div>

    </section>
  );
};
