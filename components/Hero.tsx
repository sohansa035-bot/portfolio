"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full px-6">
      {/* Complex Cybernetic Tech Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
        
        {/* Orbital Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-purple-500/10 rounded-full border-dotted"
        />

        {/* Data Stream Lasers */}
        <motion.div 
          animate={{ y: ["-100vh", "100vh"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute left-[20%] w-[1px] h-[400px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-40"
        />
        <motion.div 
          animate={{ y: ["-100vh", "100vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute left-[70%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-40"
        />
        <motion.div 
          animate={{ x: ["-100vw", "100vw"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-[30%] h-[1px] w-[500px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"
        />

        {/* Floating Data Nodes */}
        {Array.from({ length: 20 }).map((_, i) => {
          // Use seeded-like random for stable SSR hydration
          const randomX = (i * 17) % 100;
          const randomY = (i * 23) % 100;
          const randomDelay = (i * 7) % 5;
          const randomDuration = 5 + ((i * 3) % 5);
          const size = 2 + ((i * 5) % 6);
          
          return (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -150],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-400 blur-[1px]"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: "0 0 15px rgba(96,165,250,0.8)"
            }}
          />
        )})}

        {/* Background Glowing Ambient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[80%] -translate-y-[60%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[40%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 pt-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="px-5 py-2.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-8 inline-flex items-center gap-2.5 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,1)]" />
            AI & Machine Learning Student
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black dark:text-white drop-shadow-2xl flex flex-col items-center gap-2"
        >
          <span>Hello I&apos;m</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Sohan Saha
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-10 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Building Intelligent Solutions Through AI, Innovation, and Leadership.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            View Projects <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/Resume.pdf"
            download="Sohan_Saha_Resume.pdf"
            className="flex items-center gap-2 px-8 py-4 glassmorphism rounded-full font-bold hover:bg-black/5 dark:hover:bg-white/10 transition-all hover:scale-105 border-black/10 dark:border-white/20 text-black dark:text-white"
          >
            Download Resume <Download className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-8 mt-16 text-neutral-600 dark:text-neutral-400"
        >
          <a href="https://github.com/sohansa035-bot" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:scale-110 transition-all p-3 glassmorphism rounded-2xl">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/sohan-saha-130353399/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110 transition-all p-3 glassmorphism rounded-2xl">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white hover:scale-110 transition-all p-3 glassmorphism rounded-2xl">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
