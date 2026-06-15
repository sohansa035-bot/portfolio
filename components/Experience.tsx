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
          <div className="glassmorphism p-8 rounded-3xl group hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Technical Co-Head</h3>
            <div className="text-blue-400 font-medium mb-6">IEEE TEMS REVA University</div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Responsibilities</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm list-inside list-disc">
                  <li>Spearhead technical initiatives and organize university-wide workshops and hackathons.</li>
                  <li>Coordinate project development activities and mentor students in emerging technologies.</li>
                  <li>Drive innovation and foster a culture of technology awareness on campus.</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-black/10 dark:border-white/10">
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Skills & Outcomes</h4>
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Technical Leadership</span>
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Event Organization</span>
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Mentorship</span>
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Public Speaking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Box */}
          <div className="glassmorphism p-8 rounded-3xl group hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Technology Intern</h3>
            <div className="text-blue-400 font-medium mb-6">OptCell Global</div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Key Responsibilities</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm list-inside list-disc">
                  <li>Participated in the planning, development, and execution of corporate web projects.</li>
                  <li>Collaborated closely with cross-functional teams to solve practical technical challenges.</li>
                  <li>Gained hands-on exposure to industry workflows and technology-driven environments.</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-black/10 dark:border-white/10">
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mb-2">Skills & Outcomes</h4>
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Web Development</span>
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Project Coordination</span>
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Leadership</span>
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Analytical Thinking</span>
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Agile Workflows</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
