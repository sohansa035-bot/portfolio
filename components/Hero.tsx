"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useEffect } from "react";
import { Magnetic } from "./Magnetic";
import Link from "next/link";
import { HeroParticles } from "./HeroParticles";

export const Hero = () => {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const name = "SOHAN SAHA".split("");

  // Subtle parallax effect mapped from the mouse spring
  const parallaxX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-30, 30]);
  const parallaxY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-30, 30]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full px-6 py-32 bg-[#FDFBF7]">
      
      {/* Animated Aurora Mesh Gradient with Parallax */}
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Orange / Red Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#FF4D00] mix-blend-multiply filter blur-[150px]"
        />
        {/* Cyan / Blue Glow */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#00F0FF] mix-blend-multiply filter blur-[150px]"
        />
        {/* Purple Center Glow */}
        <motion.div 
          animate={{ y: [0, -100, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-[#7000FF] mix-blend-multiply filter blur-[150px]"
        />
      </motion.div>

      <HeroParticles />

      {/* Cinematic Spotlight following cursor (Overlays the Mesh) */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-60 mix-blend-overlay"
        style={{
          background: "radial-gradient(circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.8), transparent 60%)",
          "--mouse-x": useTransform(mouseX, v => `${v}px`),
          "--mouse-y": useTransform(mouseY, v => `${v}px`)
        } as any}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />

      <div className="max-w-7xl mx-auto z-10 w-full flex flex-col items-center justify-center text-center mt-20">
        
        {/* Subtitle revealing first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[2px] bg-black/20" />
          <h2 className="text-sm md:text-base font-mono font-bold tracking-[0.4em] text-[var(--text-muted)] uppercase">
            Product & AI Engineer
          </h2>
          <div className="w-12 h-[2px] bg-black/20" />
        </motion.div>

        {/* Cinematic Character Stagger for Name */}
        <div className="relative overflow-hidden mb-6 md:mb-12 flex justify-center perspective-1000">
          <h1
            className="flex text-[12vw] md:text-[10vw] leading-none font-black uppercase"
            style={{ letterSpacing: "-0.04em" }}
          >
            {name.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 150, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.4 + (index * 0.05), 
                  ease: [0.76, 0, 0.24, 1] 
                }}
                className="inline-block origin-bottom transform-gpu bg-clip-text text-transparent bg-gradient-to-br from-black via-gray-700 to-black"
                style={{ filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Core Identity Statement */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="text-2xl md:text-5xl font-black tracking-tight text-[var(--text-muted)] mb-16 md:mb-32 uppercase"
        >
          Building <span className="text-[var(--primary-accent)]">Intelligent</span> Systems.
        </motion.h2>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 z-50 relative"
        >
          <Magnetic>
            <Link href="/build" className="group flex items-center gap-4 px-10 py-5 bg-black text-white rounded-none border-2 border-black font-black text-xl brutal-shadow transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1 z-50 relative pointer-events-auto">
              INITIALIZE ARCHITECTURE
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Magnetic>
          
          <div className="flex gap-4">
            <Magnetic>
              <a href="https://github.com/sohansa035-bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-black text-black hover:bg-black hover:text-white transition-colors brutal-shadow">
                <GithubIcon className="w-8 h-8" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://linkedin.com/in/sohan-saha-130353399/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors brutal-shadow">
                <LinkedinIcon className="w-8 h-8" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-32 flex flex-col items-center gap-4"
        >
          <span className="text-xs font-mono font-bold text-black/50 uppercase tracking-[0.3em]">Initialize Sequence</span>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-16 bg-black/20 relative overflow-hidden"
          >
             <motion.div 
               animate={{ top: ["-100%", "100%"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 w-full h-1/2 bg-[#FF4D00]"
             />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
