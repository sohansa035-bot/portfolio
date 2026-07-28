"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code2, BrainCircuit, Box, Wrench, Database } from "lucide-react";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("AI");

  const skillData: Record<string, any> = {
    "AI": {
      icon: BrainCircuit,
      skills: [
        { name: "PyTorch", projects: "OpenEnv, Yugēn", exp: "2 Years", related: "TensorFlow, Keras" },
        { name: "Computer Vision", projects: "Yugēn", exp: "1.5 Years", related: "OpenCV, YOLOv8" },
        { name: "Reinforcement Learning", projects: "OpenEnv", exp: "1 Year", related: "Stable Baselines3" }
      ]
    },
    "Software": {
      icon: Code2,
      skills: [
        { name: "Python", projects: "OpenEnv, AI-SOC", exp: "3 Years", related: "FastAPI, Flask" },
        { name: "TypeScript", projects: "TerraSense, SMPS", exp: "2 Years", related: "JavaScript, Node.js" },
        { name: "C++", projects: "Yugēn", exp: "2 Years", related: "Embedded C" }
      ]
    },
    "Frontend": {
      icon: Box,
      skills: [
        { name: "React / Next.js", projects: "TerraSense, SMPS", exp: "2 Years", related: "Redux, Zustand" },
        { name: "Tailwind CSS", projects: "All Projects", exp: "2 Years", related: "Framer Motion, CSS3" }
      ]
    },
    "Backend & Cloud": {
      icon: Database,
      skills: [
        { name: "FastAPI", projects: "AI-SOC", exp: "1.5 Years", related: "Python" },
        { name: "Docker", projects: "AI-SOC, OpenEnv", exp: "1 Year", related: "Kubernetes" },
        { name: "Hugging Face", projects: "AI-SOC", exp: "1 Year", related: "AWS, GCP" }
      ]
    },
    "Robotics": {
      icon: Wrench,
      skills: [
        { name: "ESP32", projects: "Yugēn", exp: "1.5 Years", related: "Arduino, Raspberry Pi" },
        { name: "Hardware Integration", projects: "Yugēn, TerraSense", exp: "1.5 Years", related: "Sensors, Actuators" }
      ]
    }
  };

  return (
    <section id="skills" className="py-32 px-6 w-full max-w-7xl mx-auto border-t-8 border-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[8vw] md:text-[6rem] font-black uppercase tracking-tighter text-black mb-16 leading-none">
          Engineering <br/> <span className="text-[var(--secondary-accent)]" style={{ WebkitTextStroke: '2px black' }}>Dashboard</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Brutalist Tabs */}
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:w-1/3 pb-8 lg:pb-0 hide-scrollbar p-2">
            {Object.keys(skillData).map((key) => {
              const Icon = skillData[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-4 px-8 py-6 rounded-2xl text-left font-black uppercase tracking-widest text-lg md:text-2xl border-4 border-black brutal-shadow transition-all whitespace-nowrap ${
                    activeTab === key ? "bg-[var(--text-main)] text-white translate-x-2" : "bg-white text-black hover:bg-gray-100 hover:translate-x-1"
                  }`}
                >
                  <Icon className="w-8 h-8" strokeWidth={3} />
                  {key}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                {skillData[activeTab].skills.map((skill: any, idx: number) => (
                  <div key={idx} className="bg-white border-4 border-black p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 brutal-shadow hover:-translate-y-1 hover:brutal-shadow transition-all">
                    
                    <div className="md:w-1/3">
                      <h3 className="text-3xl font-black text-black mb-2">{skill.name}</h3>
                    </div>

                    <div className="md:w-1/3">
                      <p className="text-neutral-500 font-bold text-sm uppercase tracking-widest mb-1">Projects</p>
                      <p className="text-black font-black text-lg">{skill.projects}</p>
                    </div>

                    <div className="md:w-1/3">
                      <p className="text-neutral-500 font-bold text-sm uppercase tracking-widest mb-1">Related</p>
                      <p className="text-black font-black text-lg">{skill.related}</p>
                    </div>

                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
