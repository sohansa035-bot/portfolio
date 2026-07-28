"use client";

import { motion } from "framer-motion";

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-40 px-6 w-full flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-6xl bg-[var(--primary-accent)] border-8 border-black rounded-[3rem] p-12 md:p-24 text-center brutal-shadow-lg transform -rotate-1 relative"
      >
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full border-4 border-black" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[var(--success)] rounded-full border-4 border-black" />
        <div className="absolute top-1/2 right-12 w-8 h-8 bg-[var(--secondary-accent)] rounded-full border-4 border-black" />
        
        <p className="inline-block bg-white text-black font-black text-sm tracking-widest uppercase mb-12 px-6 py-2 border-4 border-black rounded-full brutal-shadow transform rotate-2">
          Engineering Philosophy
        </p>
        
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none text-white tracking-tighter mb-16 uppercase" style={{ WebkitTextStroke: '2px black' }}>
          &quot;Complex systems should feel <br className="hidden md:block"/> 
          <span className="text-black" style={{ WebkitTextStroke: '0px' }}>effortlessly simple</span>.&quot;
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-black text-xl md:text-2xl uppercase tracking-widest font-black">
          <span className="bg-white px-6 py-3 border-4 border-black rounded-xl brutal-shadow">Function over Form.</span>
          <span className="hidden md:block w-4 h-4 bg-black rounded-full" />
          <span className="bg-white px-6 py-3 border-4 border-black rounded-xl brutal-shadow">Clarity over Cleverness.</span>
          <span className="hidden md:block w-4 h-4 bg-black rounded-full" />
          <span className="bg-white px-6 py-3 border-4 border-black rounded-xl brutal-shadow">Execution over Ideas.</span>
        </div>
      </motion.div>
    </section>
  );
};
