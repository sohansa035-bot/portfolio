"use client";

import { motion } from "framer-motion";

export const ArchitectureAnimation = ({ nodes }: { nodes: string[] }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-8 my-16 px-4">
      {nodes.map((node, idx) => {
        const bgColors = ["bg-[var(--primary-accent)]", "bg-[var(--secondary-accent)]", "bg-[var(--success)]", "bg-black"];
        const themeColor = bgColors[idx % bgColors.length];
        const textColor = themeColor === "bg-white" ? "text-black" : "text-white";

        return (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.1 }}
              className={`px-8 py-6 rounded-3xl border-4 border-black ${themeColor} ${textColor} font-black text-lg tracking-widest uppercase flex items-center justify-center min-w-[160px] text-center brutal-shadow`}
            >
              {node}
            </motion.div>
            
            {idx < nodes.length - 1 && (
              <div className="flex flex-col md:flex-row items-center justify-center w-8 h-8 md:w-16 md:h-2">
                {/* Vertical line for mobile */}
                <div className="w-2 h-full md:hidden bg-black relative overflow-hidden rounded-full">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-8 bg-white"
                    animate={{ top: ["-20%", "120%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: idx * 0.2 }}
                  />
                </div>
                {/* Horizontal line for desktop */}
                <div className="hidden md:block h-2 w-full bg-black relative overflow-hidden rounded-full">
                  <motion.div 
                    className="absolute top-0 left-0 h-full w-8 bg-white"
                    animate={{ left: ["-20%", "120%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: idx * 0.2 }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
