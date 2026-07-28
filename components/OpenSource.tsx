"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitCommit, GitBranch } from "lucide-react";

export const OpenSource = () => {
  const contributions = [
    {
      repo: "framer/motion",
      contribution: "Added new layout animation props for complex grid reordering.",
      type: "Feature",
      icon: GitPullRequest,
      color: "bg-[var(--primary-accent)]"
    },
    {
      repo: "vercel/next.js",
      contribution: "Optimized static generation for dynamic paths, reducing build time by 15%.",
      type: "Performance",
      icon: GitCommit,
      color: "bg-[var(--success)]"
    },
    {
      repo: "pytorch/pytorch",
      contribution: "Resolved an edge case in tensor reshaping for distributed environments.",
      type: "Bugfix",
      icon: GitBranch,
      color: "bg-[var(--secondary-accent)]"
    }
  ];

  return (
    <section id="opensource" className="py-32 px-6 w-full max-w-7xl mx-auto border-t-8 border-black">
      <div className="flex flex-col items-center justify-center mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[6rem] font-black uppercase tracking-tighter text-black leading-none mb-8"
        >
          Open Source
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black font-black uppercase text-xl max-w-2xl px-6 py-3 bg-white border-4 border-black brutal-shadow rounded-2xl transform rotate-1"
        >
          Giving back to the engineering community by contributing to foundational tools and libraries.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {contributions.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
            className={`border-4 border-black p-8 rounded-3xl brutal-shadow hover:-translate-y-2 hover:brutal-shadow-lg transition-all flex flex-col group ${item.color} text-black`}
          >
            <div className="flex justify-between items-start mb-8">
              <span className="px-4 py-2 bg-white text-black border-2 border-black text-xs font-black uppercase rounded-full flex items-center gap-2 brutal-shadow">
                <item.icon className="w-4 h-4" strokeWidth={3} /> {item.type}
              </span>
              <span className="text-xs uppercase tracking-widest text-black font-black bg-white px-2 py-1 rounded-md border-2 border-black">
                Contributor
              </span>
            </div>
            <h3 className="text-3xl font-black text-white font-mono mb-6" style={{ WebkitTextStroke: '1px black' }}>{item.repo}</h3>
            <p className="text-black font-bold text-lg leading-relaxed mb-8">{item.contribution}</p>
            
            <div className="mt-auto pt-6 border-t-4 border-black">
              <a href="#" className="text-base font-black text-black hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest bg-white inline-block px-4 py-2 border-2 border-black rounded-lg brutal-shadow">
                View PR →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
