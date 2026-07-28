"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion";
import { ArrowRight, Code2, Microchip, Users } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const doors = [
  {
    id: "build",
    title: "BUILD",
    subtitle: "Projects & Products",
    description: "Explore the intelligent systems, full-stack applications, and scalable architectures I've engineered.",
    icon: Code2,
    href: "/build",
    bgColor: "bg-[var(--primary-accent)]",
    textColor: "text-white",
  },
  {
    id: "research",
    title: "RESEARCH",
    subtitle: "AI & Robotics",
    description: "Dive into my work with deep learning, autonomous navigation, and physical-world AI agents.",
    icon: Microchip,
    href: "/research",
    bgColor: "bg-[var(--secondary-accent)]",
    textColor: "text-white",
  },
  {
    id: "lead",
    title: "LEAD",
    subtitle: "Community & Vision",
    description: "Discover my leadership initiatives at IEEE TEMS, technical mentorship, and open-source contributions.",
    icon: Users,
    href: "/lead",
    bgColor: "bg-[var(--success)]",
    textColor: "text-black",
  }
];

const TiltCard = ({ door, idx, bootStage }: { door: typeof doors[0], idx: number, bootStage: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = door.icon;

  return (
    <Link href={door.href} className="w-full relative group perspective-1000">
      <motion.div
        initial={{ opacity: 0.2, filter: "grayscale(100%) brightness(0.5)" }}
        animate={
          bootStage >= 3 
            ? { opacity: 1, filter: "grayscale(0%) brightness(1)", y: 0 } 
            : { opacity: 0.2, filter: "grayscale(100%) brightness(0.5)", y: 20 }
        }
        transition={{ duration: 0.8, delay: bootStage >= 3 ? idx * 0.15 : 0, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-[450px] flex flex-col justify-between p-8 rounded-[2rem] border-4 border-black ${door.bgColor} brutal-shadow overflow-hidden transition-all duration-300 ${bootStage >= 4 ? 'group-hover:brutal-shadow pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Floating Background Icon (Exploded View Parallax) */}
        <Icon 
          className={`absolute -bottom-10 -right-10 w-64 h-64 ${door.textColor} opacity-20 transition-all duration-700 group-hover:scale-110`} 
          strokeWidth={2} 
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Top Header */}
        <div className={`relative z-10 ${door.textColor}`} style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-5xl font-black mb-2 tracking-tight">{door.title}</h3>
          <p className="font-bold text-sm tracking-widest uppercase mb-6 bg-black text-white inline-block px-4 py-1 rounded-full">
            {door.subtitle}
          </p>
        </div>

        {/* Bottom Content */}
        <div className={`relative z-10 flex flex-col gap-6 ${door.textColor}`} style={{ transform: "translateZ(60px)" }}>
          <p className="font-bold text-lg leading-snug">
            {door.description}
          </p>
          <div className="flex items-center gap-3 font-black text-xl group-hover:translate-x-2 transition-transform">
            ENTER <ArrowRight className="w-6 h-6" strokeWidth={3} />
          </div>
        </div>

      </motion.div>
    </Link>
  );
};

export const LabDoors = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // System Boot State Machine
  // 0: Idle, 1: Orb powers up, 2: Circuit lines draw, 3: Cards flash & power up, 4: Boot complete
  const [bootStage, setBootStage] = useState(0);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView && bootStage === 0) {
      setBootStage(1);
      setTimeout(() => setBootStage(2), 800);  // Draw circuits
      setTimeout(() => setBootStage(3), 1600); // Power up cards
      setTimeout(() => setBootStage(4), 2400); // Complete
    }
  }, [isInView, bootStage]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Massive parallax typography logic
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[var(--background)] py-32 min-h-screen flex flex-col items-center justify-center">
      
      {/* Massive Cinematic Typography (Background Layer) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-[0.03] overflow-hidden">
        <motion.h1 style={{ y: y1, WebkitTextStroke: "4px #000" }} className="text-[15vw] font-black text-transparent stroke-black uppercase leading-none whitespace-nowrap tracking-tighter">
          ENGINEERING
        </motion.h1>
        <motion.h1 style={{ y: y2 }} className="text-[15vw] font-black text-black uppercase leading-none whitespace-nowrap tracking-tighter">
          LABORATORY
        </motion.h1>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <h2 className="text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-black/20" />
            Operations & Architecture
            <span className="w-8 h-[2px] bg-black/20" />
          </h2>
          <p className="text-5xl md:text-7xl font-black text-black uppercase leading-none tracking-tighter">
            Engineering <span className="text-[var(--primary-accent)]">Domains</span>
          </p>
          <p className="text-lg md:text-xl font-medium text-[var(--text-muted)] max-w-2xl mx-auto mt-6 leading-relaxed">
            A comprehensive breakdown of system architectures, machine intelligence research, and technical leadership initiatives. Select a domain below.
          </p>
        </motion.div>

        {/* System Boot Visuals */}
        <div className="relative w-full h-24 mb-8 hidden md:block">
          {bootStage >= 1 && bootStage < 4 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 bg-white rounded-full z-50 border-4 border-black brutal-shadow flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-[var(--primary-accent)] rounded-full animate-pulse shadow-[0_0_20px_var(--primary-accent)]" />
            </motion.div>
          )}

          {bootStage >= 2 && bootStage < 4 && (
            <svg className="absolute top-12 left-0 w-full h-64 overflow-visible z-40 pointer-events-none">
              <defs>
                <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary-accent)" />
                  <stop offset="100%" stopColor="var(--secondary-accent)" />
                </linearGradient>
              </defs>
              {/* Left Card Circuit */}
              <motion.path 
                d="M 50% 0 L 16.6% 40 L 16.6% 150" 
                stroke="url(#circuitGlow)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "linear" }}
              />
              {/* Center Card Circuit */}
              <motion.path 
                d="M 50% 0 L 50% 150" 
                stroke="url(#circuitGlow)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "linear" }}
              />
              {/* Right Card Circuit */}
              <motion.path 
                d="M 50% 0 L 83.3% 40 L 83.3% 150" 
                stroke="url(#circuitGlow)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "linear" }}
              />
            </svg>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full perspective-1000">
          {doors.map((door, idx) => (
            <TiltCard key={door.id} door={door} idx={idx} bootStage={bootStage} />
          ))}
        </div>
      </div>
    </section>
  );
};
