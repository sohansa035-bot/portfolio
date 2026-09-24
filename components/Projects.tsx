"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projectsData } from "@/lib/data";
import Link from "next/link";

interface ColorConfig {
  bg: string;
  titleColor: string;
  descColor: string;
}

const colorMap: Record<string, ColorConfig> = {
  yugen: {
    bg: "bg-[#FB4D04]", // Orange
    titleColor: "text-white",
    descColor: "text-white/95"
  },
  openenv: {
    bg: "bg-[#5D41CF]", // Purple
    titleColor: "text-white",
    descColor: "text-white/95"
  },
  autosre: {
    bg: "bg-[#04CB6B]", // Green
    titleColor: "text-black",
    descColor: "text-neutral-950"
  },
  "ai-soc": {
    bg: "bg-[#FFB800]", // Cyber Amber / Warning Yellow
    titleColor: "text-black",
    descColor: "text-neutral-950"
  },
  terrasense: {
    bg: "bg-[#E11D48]", // Cyber Rose / Pink (replaces duplicate green)
    titleColor: "text-white",
    descColor: "text-white/95"
  },
  oceanintel: {
    bg: "bg-[#0284C7]", // Ocean Blue
    titleColor: "text-white",
    descColor: "text-white/95"
  },
  floodx: {
    bg: "bg-[#FB4D04]", // Orange
    titleColor: "text-white",
    descColor: "text-white/95"
  },
  "smps-tech-lab": {
    bg: "bg-[#6366F1]", // Indigo
    titleColor: "text-white",
    descColor: "text-white/95"
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        {projectsData.map((project) => {
          const colors = colorMap[project.slug] || {
            bg: "bg-[#5D41CF]",
            titleColor: "text-white",
            descColor: "text-white/95"
          };

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`${colors.bg} border-4 border-black p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] brutal-shadow hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full relative`}
            >
              <div>
                {/* Header: Number & Type Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="px-3.5 py-1 bg-black text-white text-xs sm:text-sm font-black tracking-widest uppercase rounded-full border-2 border-black">
                    {project.number}
                  </span>
                  <span className="px-3 py-1 bg-white text-black text-[10px] sm:text-xs font-black tracking-wider uppercase rounded-full border-2 border-black">
                    {project.role}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black ${colors.titleColor} uppercase tracking-tight mb-3`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`${colors.descColor} font-bold leading-relaxed text-sm sm:text-base mb-6`}>
                  {project.description}
                </p>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 sm:px-3 py-1 bg-white text-black border-2 border-black rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Row */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-black/20">
                {project.caseStudy && (
                  <Link
                    href={project.caseStudy}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white border-2 border-black rounded-full font-black text-xs sm:text-sm uppercase tracking-wider brutal-shadow hover:-translate-y-0.5 transition-all"
                  >
                    CASE STUDY <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
                  </Link>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black border-2 border-black rounded-full font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all"
                >
                  <GithubIcon className="w-4 h-4" /> SOURCE
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
