"use client";

import { motion } from "framer-motion";

export const FutureVision = () => {
  return (
    <section id="vision" className="py-32 px-6 w-full max-w-7xl mx-auto border-t-8 border-black text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <p className="inline-block text-white bg-black px-4 py-2 border-4 border-black rounded-xl font-black tracking-widest uppercase mb-12 brutal-shadow transform rotate-1">
          Future Vision
        </p>
        
        <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter text-black mb-16 leading-none">
          Currently Building
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-32">
          {["AI", "Robotics", "Open Source", "Intelligent Systems", "Entrepreneurship"].map((item, idx) => {
            const colors = ["bg-[var(--primary-accent)]", "bg-[var(--secondary-accent)]", "bg-[var(--success)]", "bg-white"];
            const themeColor = colors[idx % colors.length];
            const textColor = (themeColor === "bg-white" || themeColor === "bg-[var(--success)]") ? "text-black" : "text-white";

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                className={`px-10 py-6 ${themeColor} ${textColor} border-4 border-black rounded-2xl font-black text-2xl md:text-3xl tracking-widest uppercase brutal-shadow hover:-translate-y-2 hover:brutal-shadow transition-all cursor-default`}
              >
                {item}
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">
          <motion.span whileHover={{ scale: 1.05 }} className="transition-transform cursor-default bg-white px-6 py-2 border-4 border-black brutal-shadow">Always learning.</motion.span>
          <span className="hidden md:block w-4 h-4 rounded-full bg-[var(--primary-accent)] border-2 border-black" />
          <motion.span whileHover={{ scale: 1.05 }} className="transition-transform cursor-default bg-white px-6 py-2 border-4 border-black brutal-shadow">Always building.</motion.span>
          <span className="hidden md:block w-4 h-4 rounded-full bg-[var(--secondary-accent)] border-2 border-black" />
          <motion.span whileHover={{ scale: 1.05 }} className="transition-transform cursor-default bg-white px-6 py-2 border-4 border-black brutal-shadow">Always improving.</motion.span>
        </div>
      </motion.div>
    </section>
  );
};
