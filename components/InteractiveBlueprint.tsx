"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stages = [
  { id: "blueprint", label: "01 // Blueprint", color: "bg-[var(--primary-accent)]" },
  { id: "wireframe", label: "02 // Wireframe", color: "bg-[var(--secondary-accent)]" },
  { id: "architecture", label: "03 // Architecture", color: "bg-[var(--success)]" },
  { id: "product", label: "04 // Finished Product", color: "bg-white" }
];

export const InteractiveBlueprint = ({ image }: { image: string }) => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-between md:justify-center md:gap-8 mb-12 px-4 overflow-x-auto pb-6 scrollbar-hide">
        {stages.map((stage, idx) => (
          <button 
            key={stage.id}
            onClick={() => setActiveStage(idx)}
            className={`whitespace-nowrap px-6 py-3 rounded-xl border-4 border-black font-black tracking-widest uppercase transition-all duration-300 brutal-shadow ${
              activeStage === idx ? `${stage.color} text-white scale-110` : "bg-white text-black hover:-translate-y-1"
            }`}
          >
            {stage.label}
          </button>
        ))}
      </div>

      <div className="w-full aspect-video rounded-[3rem] border-8 border-black bg-white relative overflow-hidden group brutal-shadow-lg p-4">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className={`absolute inset-4 rounded-[2rem] flex items-center justify-center bg-cover bg-center bg-no-repeat border-4 border-black ${stages[activeStage].color} mix-blend-multiply`}
            style={{ backgroundImage: `url("${image}")` }}
          >
            {/* Visual overlays to simulate different stages */}
            {activeStage === 0 && (
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221%22 stroke-dasharray=%224%22/%3E%3C/svg%3E')] opacity-50" />
            )}
            {activeStage === 1 && (
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22none%22 stroke=%22black%22 stroke-width=%222%22/%3E%3C/svg%3E')] opacity-50" />
            )}
            {activeStage === 2 && (
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22black%22 stroke-width=%222%22/%3E%3Cpath d=%22M50,10 L50,90 M10,50 L90,50%22 stroke=%22black%22 stroke-width=%222%22/%3E%3C/svg%3E')] opacity-50" />
            )}
            
            <div className="absolute bottom-6 right-6 px-6 py-3 rounded-xl border-4 border-black bg-white text-black font-black text-sm uppercase tracking-widest brutal-shadow">
              {stages[activeStage].label.split("//")[1].trim()} Render
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
