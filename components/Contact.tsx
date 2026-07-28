"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 w-full flex flex-col items-center text-center bg-[var(--primary-accent)] border-y-4 border-black relative overflow-hidden">
      
      {/* Background Marquee */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none whitespace-nowrap">
        <h2 className="text-[30vw] font-black text-black">CONTACT</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter text-black mb-6 leading-none text-outline" style={{ WebkitTextStroke: '4px black', color: 'white' }}>
          Let&apos;s Build.
        </h2>
        
        <p className="text-2xl md:text-4xl text-black font-black mb-16 max-w-3xl mx-auto uppercase leading-tight">
          Whether it&apos;s a complex engineering problem or a visionary product, let&apos;s talk.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <a 
            href="https://calendly.com/sohansa035" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-4 px-12 py-6 bg-black text-white border-2 border-black rounded-none font-black uppercase tracking-widest text-xl brutal-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-300 z-50 relative pointer-events-auto"
          >
            Schedule a Call <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <a href="https://github.com/sohansa035-bot" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-black hover:scale-110 transition-transform group z-50 relative pointer-events-auto">
            <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center bg-white brutal-shadow">
              <GithubIcon className="w-10 h-10" />
            </div>
            <span className="text-sm uppercase tracking-widest font-black">GitHub</span>
          </a>
          
          <a href="https://linkedin.com/in/sohan-saha-130353399/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-black hover:scale-110 transition-transform group z-50 relative pointer-events-auto">
            <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center bg-[#0A66C2] text-white brutal-shadow">
              <LinkedinIcon className="w-10 h-10" />
            </div>
            <span className="text-sm uppercase tracking-widest font-black">LinkedIn</span>
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sohansa035@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-black hover:scale-110 transition-transform group z-50 relative pointer-events-auto">
            <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center bg-[var(--secondary-accent)] text-white brutal-shadow">
              <Mail className="w-10 h-10" strokeWidth={3} />
            </div>
            <span className="text-sm uppercase tracking-widest font-black">Email</span>
          </a>

          <a href="/Resume.pdf" target="_blank" className="flex flex-col items-center gap-3 text-black hover:scale-110 transition-transform group z-50 relative pointer-events-auto">
            <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center bg-[var(--success)] text-black brutal-shadow">
              <FileText className="w-10 h-10" strokeWidth={3} />
            </div>
            <span className="text-sm uppercase tracking-widest font-black">Resume</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
