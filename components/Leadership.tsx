"use client";

import { motion } from "framer-motion";

export const Leadership = () => {
  return (
    <section id="leadership" className="py-32 px-6 w-full max-w-7xl mx-auto border-t-8 border-black">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sticky top-32 bg-white border-8 border-black p-12 rounded-[3rem] brutal-shadow transform -rotate-1"
        >
          <p className="inline-block px-4 py-1 bg-black text-white text-sm font-black tracking-widest uppercase mb-6 rounded-full border-4 border-black brutal-shadow">Leadership</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none mb-8">
            Engineering <br/> <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>Culture</span>
          </h2>
          <p className="text-xl text-black font-bold max-w-md leading-relaxed">
            As the IEEE Co-Tech Lead of IEEE REVA TEMS, I focus on cultivating an environment where innovation thrives through collaboration, hackathons, and continuous learning.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-default bg-white border-4 border-black p-10 rounded-3xl brutal-shadow hover:-translate-y-2 transition-all"
          >
            <h3 className="text-3xl font-black uppercase tracking-tight text-black mb-6 group-hover:text-[var(--primary-accent)] transition-colors">IEEE Achievements</h3>
            <div className="h-2 w-full bg-black mb-8 group-hover:bg-[var(--primary-accent)] transition-colors rounded-full" />
            <p className="text-black font-bold text-xl leading-relaxed">
              Led multiple technical initiatives, significantly increasing student engagement in open-source and modern software engineering practices. Mentored teams to build scalable solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-default bg-white border-4 border-black p-10 rounded-3xl brutal-shadow hover:-translate-y-2 transition-all"
          >
            <h3 className="text-3xl font-black uppercase tracking-tight text-black mb-6 group-hover:text-[var(--secondary-accent)] transition-colors">Hackathons & Events</h3>
            <div className="h-2 w-full bg-black mb-8 group-hover:bg-[var(--secondary-accent)] transition-colors rounded-full" />
            <p className="text-black font-bold text-xl leading-relaxed">
              Organized and spearheaded university-wide hackathons. Designed problem statements that challenge participants to think beyond CRUD apps and build intelligent, distributed architectures.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-default bg-[var(--success)] border-4 border-black p-10 rounded-3xl brutal-shadow hover:-translate-y-2 transition-all"
          >
            <h3 className="text-3xl font-black uppercase tracking-tight text-black mb-6 group-hover:text-white transition-colors">Technical Initiatives</h3>
            <div className="h-2 w-full bg-black mb-8 group-hover:bg-white transition-colors rounded-full" />
            <p className="text-black font-bold text-xl leading-relaxed">
              Introduced rigorous engineering standards within the student community. Championed the adoption of Git, Docker, and CI/CD pipelines for academic projects.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
