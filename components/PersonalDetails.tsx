"use client";

import { ArrowRight, FileText, MapPin, Terminal } from "lucide-react";
import Link from "next/link";

export const PersonalDetails = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-16 flex items-center justify-center gap-4 w-full">
        <span className="w-8 h-[2px] bg-black/20" />
        Operator Profile
        <span className="w-8 h-[2px] bg-black/20" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
        
        {/* Left Column: Bio & Core Identity */}
        <div className="md:col-span-7 bg-white border-8 border-black rounded-[2rem] p-10 md:p-14 brutal-shadow transform transition-transform hover:-translate-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-accent)] text-white text-xs font-black uppercase tracking-widest rounded-full border-4 border-black mb-8 brutal-shadow">
            <Terminal className="w-4 h-4" /> System Architect
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter mb-8">
            I engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)]">intelligent systems</span> that bridge the gap between deep research and real-world scale.
          </h3>
          
          <p className="text-xl font-bold text-neutral-700 leading-relaxed mb-8">
            My work focuses on full-stack architecture, machine learning pipelines, and autonomous robotics. I don't just write code—I build robust, mission-critical products designed to solve complex problems at scale.
          </p>

          <Link href="/Resume.pdf" target="_blank" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[var(--primary-accent)] transition-colors">
            <FileText className="w-5 h-5" /> Download Resume
          </Link>
        </div>

        {/* Right Column: Key Details & Specs */}
        <div className="md:col-span-5 flex flex-col gap-8">
          
          {/* Identity Card */}
          <div className="bg-[var(--background)] border-4 border-black rounded-[2rem] p-8 brutal-shadow flex flex-col justify-center h-full">
            <h4 className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-[0.2em] mb-6">
              [ Identification ]
            </h4>
            
            <div className="flex flex-col gap-6">
              <div>
                <span className="block text-xs font-black uppercase tracking-widest text-[var(--primary-accent)] mb-1">Name</span>
                <span className="block text-3xl font-black uppercase tracking-tighter text-black">Sohan Saha</span>
              </div>
              
              <div>
                <span className="block text-xs font-black uppercase tracking-widest text-[var(--secondary-accent)] mb-1">Primary Role</span>
                <span className="block text-xl font-bold text-black">Product Engineer & AI Researcher</span>
              </div>
              
              <div>
                <span className="block text-xs font-black uppercase tracking-widest text-[var(--success)] mb-1">Current Base</span>
                <span className="flex items-center gap-2 text-xl font-bold text-black">
                  <MapPin className="w-5 h-5" /> India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="bg-black text-white border-4 border-black rounded-[2rem] p-8 brutal-shadow flex justify-between items-center group cursor-pointer hover:bg-neutral-900 transition-colors">
            <div>
              <span className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">Connect</span>
              <span className="block text-2xl font-black uppercase tracking-tighter">Initiate Handshake</span>
            </div>
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-45 transition-all">
              <ArrowRight className="w-6 h-6" strokeWidth={3} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
