"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const CARDS = [
  {
    title: "MACHINE INTELLIGENCE",
    subtitle: "NEURAL NETWORKS & LLMs",
    description: "Designing and fine-tuning advanced neural architectures. Moving beyond simple API wrappers to build custom, domain-specific AI models that solve complex analytical problems.",
    icon: "🧠",
  },
  {
    title: "AUTONOMOUS SYSTEMS",
    subtitle: "ROBOTICS & PERCEPTION",
    description: "Bridging the gap between software and the physical world. Developing computer vision pipelines, sensor fusion algorithms, and real-time decision-making systems for robotic agents.",
    icon: "🤖",
  },
  {
    title: "SYSTEM ARCHITECTURE",
    subtitle: "SCALABLE INFRASTRUCTURE",
    description: "Architecting robust, cloud-native backends that can handle massive data throughput. Focusing on event-driven microservices, low-latency APIs, and secure deployment pipelines.",
    icon: "⚡",
  },
];

const InteractiveCard = ({ card, index }: { card: typeof CARDS[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-20%", once: false }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2, scale: 1.02 }}
      className="group relative w-full max-w-[450px] mx-auto bg-white border-8 border-black rounded-[2rem] p-8 brutal-shadow-lg transition-shadow duration-300 hover:shadow-2xl overflow-hidden cursor-pointer"
      style={{ transformPerspective: 1000 }}
    >
      {/* Cursor-reactive spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([currentX, currentY]) => `radial-gradient(400px circle at ${currentX}px ${currentY}px, rgba(255,77,0,0.15), transparent 40%)`
          )
        }}
      />
      
      {/* Animated Border Glow (Underneath) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0 pointer-events-none" />

      <div className="relative z-10">
        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-bottom-left">{card.icon}</div>
        <h3 className="text-sm font-black text-white bg-black inline-block px-4 py-1 border-2 border-black rounded-full tracking-widest uppercase mb-4 brutal-shadow transform -rotate-1 group-hover:bg-[var(--primary-accent)] group-hover:border-black transition-colors duration-300">
          0{index + 1} {"//"} {card.subtitle}
        </h3>
        <h2 className="text-3xl font-black text-black mb-4 tracking-tighter uppercase leading-none group-hover:text-[var(--primary-accent)] transition-colors duration-300">
          {card.title}
        </h2>
        <p className="text-black font-bold text-lg leading-relaxed group-hover:text-neutral-800 transition-colors">
          {card.description}
        </p>
        <div className="mt-8 pt-6 border-t-4 border-black flex items-center justify-between">
          <span className="text-sm font-black text-black uppercase tracking-widest">Status</span>
          <div className="px-4 py-2 bg-[var(--success)] border-4 border-black rounded-full brutal-shadow group-hover:translate-x-1 transition-transform duration-300">
            <span className="text-xs font-black text-black uppercase">Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const StickyCoreShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to a vibrant background color
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FDFBF7", "#E0F5EB", "#FFF0E5"] // Cream -> Mint Green -> Soft Orange
  );

  // Safe 2D transforms for the central graphic
  const coreScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  const coreRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <motion.section 
      ref={containerRef} 
      style={{ backgroundColor }}
      className="relative w-full hidden md:block border-t-8 border-black transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 flex relative">
        
        {/* Left Side: Sticky Visual Core */}
        <div className="w-1/2 sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <h2 className="text-[8vw] font-black tracking-tighter uppercase whitespace-nowrap text-black">THE CORE</h2>
          </div>

          <motion.div
            style={{ rotate: coreRotate, scale: coreScale }}
            className="relative w-64 h-64 flex items-center justify-center z-10"
          >
            {/* Pop Brutalist Shapes */}
            <div className="absolute w-40 h-40 bg-[var(--primary-accent)] rounded-2xl transform rotate-45 brutal-shadow border-8 border-black" />
            <div className="absolute w-32 h-32 bg-[var(--success)] rounded-full brutal-shadow border-8 border-black transform translate-x-12 -translate-y-12" />
            <div className="absolute w-24 h-24 bg-[var(--secondary-accent)] rounded-lg brutal-shadow border-8 border-black transform -translate-x-12 translate-y-12 rotate-12" />
          </motion.div>
        </div>

        {/* Right Side: Natural Scrolling Cards */}
        <div className="w-1/2 py-[30vh] flex flex-col gap-[40vh] z-20">
          {CARDS.map((card, index) => (
            <InteractiveCard key={index} card={card} index={index} />
          ))}
        </div>

      </div>
    </motion.section>
  );
};
