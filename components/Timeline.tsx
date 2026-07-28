"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journey = [
    { year: "2025 - 2029", title: "Started Engineering at REVA University", description: "B.Tech in Information Science & Engineering." },
    { year: "Dec 2025 - Mar 2026", title: "Technical & Digital Operations Intern", description: "OptCell Global. Contributed to corporate web projects, digital operations, and workflow optimization." },
    { year: "Mar 2026 - Present", title: "IEEE Co-Tech Lead @ IEEE REVA TEMS", description: "Leading technical initiatives, coordinating hackathons, and mentoring members on AI and deep tech." },
  ];

  return (
    <section id="timeline" className="py-32 px-6 w-full max-w-5xl mx-auto" ref={containerRef}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[10vw] md:text-7xl font-black mb-32 text-center uppercase tracking-tighter text-black leading-none"
      >
        Engineering<br/><span className="bg-[var(--primary-accent)] text-white px-4 py-2 border-4 border-black brutal-shadow inline-block transform rotate-1">Journey</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Thick Brutalist Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-4 bg-white border-4 border-black -translate-x-1/2 brutal-shadow rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 w-full bg-[var(--primary-accent)]"
            style={{ height: lineHeight }}
          />
        </div>

        {journey.map((item, idx) => {
          const colors = ["bg-[var(--primary-accent)]", "bg-[var(--secondary-accent)]", "bg-[var(--success)]"];
          const themeColor = colors[idx % colors.length];

          return (
            <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-24`}>
              
              <div className="hidden md:flex w-5/12" />

              {/* Node Dot */}
              <div className={`absolute left-8 md:left-1/2 w-12 h-12 rounded-full border-4 border-black -translate-x-1/2 flex items-center justify-center bg-white brutal-shadow z-10 group-hover:scale-125 transition-transform`}>
                <div className={`w-4 h-4 rounded-full ${themeColor}`} />
              </div>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                className="w-full md:w-5/12 pl-24 md:pl-0 md:odd:pr-16 md:even:pl-16"
              >
                <div className="p-8 border-4 border-black bg-white rounded-3xl brutal-shadow hover:-translate-y-2 hover:brutal-shadow transition-all group-hover:border-[var(--primary-accent)]">
                  <span className={`inline-block px-4 py-1 border-2 border-black rounded-full font-black text-xs tracking-widest uppercase text-white mb-4 ${themeColor}`}>
                    {item.year}
                  </span>
                  <h4 className="text-3xl font-black text-black mt-2 mb-4 leading-tight">{item.title}</h4>
                  <p className="text-black font-bold text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
