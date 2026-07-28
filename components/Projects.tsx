"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ArchitectureAnimation } from "./ArchitectureAnimation";
import { projectsData } from "@/lib/data";
import Link from "next/link";

export const Projects = () => {

  return (
    <section id="projects" className="w-full flex flex-col pt-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 w-full mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10vw] md:text-8xl font-black uppercase tracking-tighter text-black leading-none"
        >
          Selected<br/><span className="text-[var(--primary-accent)]">Works</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-32 mb-32">
        {projectsData.map((project, idx) => {
          // Cycle through vibrant colors for project backgrounds
          const bgColors = ["bg-[var(--primary-accent)]", "bg-[var(--secondary-accent)]", "bg-[var(--success)]"];
          const themeColor = bgColors[idx % bgColors.length];

          return (
            <div key={idx} className={`relative w-full rounded-[3rem] border-8 border-black ${themeColor} p-8 md:p-16 brutal-shadow-lg flex flex-col items-center overflow-hidden`}>
              
              {/* Fun background graphic */}
              <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

              <div className="w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">
                
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:col-span-6 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-black font-black text-2xl tracking-widest uppercase bg-white px-4 py-2 border-4 border-black rounded-full brutal-shadow">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase" style={{ WebkitTextStroke: '2px black' }}>
                    {project.title}
                  </h3>
                  <p className="text-2xl text-black font-black tracking-wide mb-8 uppercase bg-white px-4 py-2 inline-block border-2 border-black rounded-lg">
                    {project.role}
                  </p>
                  
                  <p className="text-xl text-black font-bold leading-relaxed mb-8 bg-white/90 p-6 border-4 border-black rounded-2xl brutal-shadow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-6 py-3 bg-black text-white rounded-full font-black tracking-widest uppercase text-sm border-2 border-white/20 shadow-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <Link href={project.caseStudy} className="flex items-center gap-2 px-8 py-4 bg-white text-black border-4 border-black rounded-full font-black uppercase tracking-widest text-lg hover:-translate-y-1 brutal-shadow transition-all">
                      Case Study <ArrowUpRight className="w-6 h-6" strokeWidth={3} />
                    </Link>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 bg-black text-white border-4 border-black rounded-full font-black uppercase tracking-widest text-sm hover:-translate-y-1 brutal-shadow transition-all">
                      <GithubIcon className="w-5 h-5" /> Source
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="lg:col-span-6 relative h-[50vh] lg:h-[70vh] w-full rounded-[2rem] overflow-hidden border-8 border-black bg-white brutal-shadow group"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                </motion.div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
