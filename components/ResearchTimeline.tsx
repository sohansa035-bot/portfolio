"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

const researchProjects = projectsData.filter(p => ["yugen", "openenv", "ai-soc", "autosre"].includes(p.slug));

export const ResearchTimeline = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
      
      {/* Background SVG diagram */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] z-0" style={{ filter: "blur(2px)" }}>
        <circle cx="20%" cy="20%" r="300" fill="none" stroke="black" strokeWidth="2" strokeDasharray="10 10" />
        <circle cx="80%" cy="80%" r="400" fill="none" stroke="black" strokeWidth="2" strokeDasharray="10 10" />
        <path d="M 20% 20% L 80% 80%" stroke="black" strokeWidth="4" />
      </svg>

      <div className="relative z-10 w-full">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] bg-black/10 -translate-x-1/2 rounded-full" />
        
        <div className="flex flex-col gap-24">
          {researchProjects.map((project, idx) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-black rounded-full border-4 border-white -translate-x-1/2 z-20 flex items-center justify-center brutal-shadow">
                <div className="w-2 h-2 bg-[var(--primary-accent)] rounded-full animate-pulse" />
              </div>

              {/* Empty space for alignment */}
              <div className="hidden md:block md:w-1/2" />

              {/* Publication Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className="bg-white border-4 border-black p-8 rounded-[2rem] brutal-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full">
                      [PUBLISHED]
                    </span>
                    <span className="px-3 py-1 border-2 border-black text-black text-xs font-black uppercase tracking-widest rounded-full">
                      {project.role}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-black tracking-tighter uppercase mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-700 font-bold mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="border-t-2 border-black/10 pt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="text-sm font-mono text-neutral-500 uppercase">
                        {tech} {"//"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
