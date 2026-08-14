"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = current > 80 ? 2 : Math.floor(Math.random() * 8) + 4;
      current += increment;
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setStage(1), 500);
      }
      setProgress(current);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (stage !== 1) return;
    setStage(2);
    
    // Call onComplete instantly so ClientWrapper starts the expanding circle reveal
    onComplete();
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-[#EDEDED] text-black overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-10 h-10 border-2 border-black/10 border-t-black rounded-full"
            />
            <div className="font-mono text-sm tracking-[0.3em] uppercase font-bold text-black/80">
              Initializing {progress}%
            </div>
          </motion.div>
        )}

        {stage === 1 && (
          <motion.button
            key="button"
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="group relative px-10 py-5 bg-white text-black rounded-full overflow-hidden flex items-center justify-center cursor-pointer border-2 border-black brutal-shadow"
          >
            <motion.div 
              className="absolute inset-0 bg-[#FF4D00] origin-bottom"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
            <span className="relative z-10 font-mono text-sm tracking-widest uppercase font-black group-hover:text-white transition-colors duration-300 block w-full text-center">
              CLICK - TO INITIATE
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
