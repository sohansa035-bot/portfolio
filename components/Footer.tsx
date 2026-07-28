"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full min-h-[60vh] py-32 px-6 bg-black text-white flex flex-col items-center justify-center text-center relative overflow-hidden border-t-4 border-[var(--primary-accent)]">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[var(--primary-accent)] mix-blend-screen opacity-10 filter blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[var(--text-muted)] font-mono font-bold text-sm tracking-[0.4em] uppercase mb-4">
          Engineered By
        </span>
        
        <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-none mb-2">
          SOHAN SAHA
        </h2>
        
        <h3 className="text-xl md:text-3xl font-black text-[var(--primary-accent)] tracking-widest uppercase mb-16">
          Building Intelligent Systems
        </h3>
        
        <div className="w-24 h-[2px] bg-white/20 mb-16" />

        <div className="flex flex-col items-center gap-2 font-mono text-lg md:text-xl text-neutral-400">
          <p>Thanks for visiting.</p>
          <p className="flex items-center text-white font-bold">
            Let&apos;s build something meaningful<motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-3 h-6 bg-[var(--primary-accent)] ml-2"
            />
          </p>
        </div>
      </motion.div>
      
      <div className="absolute bottom-6 w-full text-center text-neutral-600 font-mono text-xs uppercase tracking-widest pointer-events-none">
        &copy; {new Date().getFullYear()} {"//"} System Initialized
      </div>
    </footer>
  );
};
