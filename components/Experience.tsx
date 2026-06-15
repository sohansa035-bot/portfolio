"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gradient">Experience & Leadership</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Leadership Box */}
          <div className="p-8 rounded-3xl group transition-all duration-300 border border-black/10 dark:border-white/10 hover:-translate-y-2 bg-blue-50/80 dark:bg-white/5 hover:border-blue-500/50 hover:bg-blue-100/80 dark:hover:bg-blue-500/[0.02] hover:shadow-xl backdrop-blur-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity opacity-70 group-hover:opacity-100" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 text-black dark:text-white">Technical Co-Head</h3>
                <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">IEEE TEMS REVA University</div>
              </div>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div>
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Responsibilities</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm list-inside list-disc">
                  <li>Spearhead technical initiatives and organize university-wide workshops and hackathons.</li>
                  <li>Coordinate project development activities and mentor students in emerging technologies.</li>
                  <li>Drive innovation and foster a culture of technology awareness on campus.</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 mt-auto">
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Skills & Outcomes</h4>
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  <span className="bg-blue-500/10 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-500/20 transition-all hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">Technical Leadership</span>
                  <span className="bg-blue-500/10 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-500/20 transition-all hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">Event Organization</span>
                  <span className="bg-blue-500/10 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-500/20 transition-all hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">Mentorship</span>
                  <span className="bg-blue-500/10 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-500/20 transition-all hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">Public Speaking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Box */}
          <div className="p-8 rounded-3xl group transition-all duration-300 border border-black/10 dark:border-white/10 hover:-translate-y-2 bg-indigo-50/80 dark:bg-white/5 hover:border-indigo-500/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-500/[0.02] hover:shadow-xl backdrop-blur-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity opacity-70 group-hover:opacity-100" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <Briefcase className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 text-black dark:text-white">Technology and Digital Operation Intern</h3>
                <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">OptCell Global</div>
              </div>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div>
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Key Responsibilities</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm list-inside list-disc">
                  <li>Participated in the planning, development, and execution of corporate web projects.</li>
                  <li>Collaborated closely with cross-functional teams to solve practical technical challenges.</li>
                  <li>Gained hands-on exposure to industry workflows and technology-driven environments.</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 mt-auto">
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Skills & Outcomes</h4>
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  <span className="bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-500/20 transition-all hover:bg-indigo-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">Web Development</span>
                  <span className="bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-500/20 transition-all hover:bg-indigo-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">Project Coordination</span>
                  <span className="bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-500/20 transition-all hover:bg-indigo-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">Leadership</span>
                  <span className="bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-500/20 transition-all hover:bg-indigo-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">Analytical Thinking</span>
                  <span className="bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-500/20 transition-all hover:bg-indigo-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">Agile Workflows</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
