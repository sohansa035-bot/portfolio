"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrainCircuit, Code2, Layout, Server, Cpu } from "lucide-react";

interface TechDetail {
  technology: string;
  projects: string;
  related: string;
}

interface CategoryData {
  id: string;
  label: string;
  icon: any;
  technologies: TechDetail[];
}

const dashboardCategories: CategoryData[] = [
  {
    id: "ai",
    label: "01 — AI",
    icon: BrainCircuit,
    technologies: [
      {
        technology: "PyTorch",
        projects: "OpenEnv, AutoSRE, OceanIntel",
        related: "TensorFlow, Keras, TorchVision"
      },
      {
        technology: "Computer Vision",
        projects: "YUGĒN, OceanIntel",
        related: "OpenCV, YOLOv8, U-Net Segmentation"
      },
      {
        technology: "Reinforcement Learning",
        projects: "OpenEnv, AutoSRE",
        related: "PyTorch, OpenAI Gym, Simulation Environments"
      },
      {
        technology: "Hugging Face",
        projects: "AI-SOC Threat Pipeline",
        related: "Transformers, Model Hub, Inference API"
      },
      {
        technology: "YOLOv8 & OpenCV",
        projects: "YUGĒN",
        related: "Real-Time Object Detection, Frame Processing"
      }
    ]
  },
  {
    id: "software",
    label: "02 — SOFTWARE",
    icon: Code2,
    technologies: [
      {
        technology: "Python",
        projects: "OpenEnv, AutoSRE, AI-SOC, OceanIntel, FloodX",
        related: "NumPy, Pandas, AsyncIO"
      },
      {
        technology: "C / C++",
        projects: "YUGĒN",
        related: "Embedded C, Hardware Firmware"
      },
      {
        technology: "Git & GitHub",
        projects: "All Projects",
        related: "Version Control, Branching, Collaborative Workflows"
      },
      {
        technology: "Docker",
        projects: "AutoSRE, AI-SOC",
        related: "Containerization, Environment Isolation"
      }
    ]
  },
  {
    id: "frontend",
    label: "03 — FRONTEND",
    icon: Layout,
    technologies: [
      {
        technology: "Next.js & React",
        projects: "TerraSense, YUGĒN Dashboard",
        related: "Server Components, Component Architecture"
      },
      {
        technology: "Tailwind CSS",
        projects: "TerraSense",
        related: "Design Tokens, Utility Styling"
      },
      {
        technology: "Framer Motion",
        projects: "TerraSense",
        related: "Data Transitions, Dynamic Micro-interactions"
      }
    ]
  },
  {
    id: "backend-cloud",
    label: "04 — BACKEND & CLOUD",
    icon: Server,
    technologies: [
      {
        technology: "FastAPI",
        projects: "AI-SOC Threat Pipeline, OceanIntel",
        related: "REST Endpoints, Pydantic, Async Python"
      },
      {
        technology: "WebSockets",
        projects: "YUGĒN, TerraSense",
        related: "Real-Time Video Streaming, Sensor Telemetry"
      },
      {
        technology: "Docker",
        projects: "AI-SOC Threat Pipeline, AutoSRE",
        related: "Containerized Microservices, Docker Compose"
      },
      {
        technology: "Hugging Face Spaces",
        projects: "AI-SOC Threat Pipeline",
        related: "Cloud Model Serving, Microservice Hosting"
      }
    ]
  },
  {
    id: "robotics",
    label: "05 — ROBOTICS",
    icon: Cpu,
    technologies: [
      {
        technology: "ESP32",
        projects: "YUGĒN",
        related: "Microcontrollers, Wi-Fi Cam Module, Firmware"
      },
      {
        technology: "IoT Telemetry & Edge Nodes",
        projects: "YUGĒN, TerraSense",
        related: "Sensor Gateways, Real-Time Ingestion"
      },
      {
        technology: "Autonomous Systems",
        projects: "YUGĒN",
        related: "Mobile Surveillance Rover, Path Navigation"
      },
      {
        technology: "Computer Vision Edge Integration",
        projects: "YUGĒN",
        related: "Low-Latency Video Streaming, Edge Inference"
      }
    ]
  }
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ai");

  const currentCategory = dashboardCategories.find((c) => c.id === activeCategory) || dashboardCategories[0];

  return (
    <section id="engineering-dashboard" className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 border-t-4 border-black/10">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-3 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-black/20" />
          02 // ARCHITECTURE &amp; SYSTEMS
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase tracking-tight break-words mb-4 sm:mb-6">
          ENGINEERING DASHBOARD<span className="text-[var(--secondary-accent)]">.</span>
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-neutral-800 font-bold max-w-3xl leading-relaxed">
          The technologies, tools, and engineering areas behind my systems and builds.
        </p>
      </div>

      {/* Dashboard Body */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">
        {/* Left Side: Category Navigation */}
        <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
          {dashboardCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCategory;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-left font-black uppercase tracking-wider text-xs sm:text-sm md:text-base border-4 border-black transition-all whitespace-nowrap cursor-pointer select-none ${
                  isActive
                    ? "bg-black text-white brutal-shadow translate-x-1 lg:translate-x-2"
                    : "bg-white text-black hover:bg-neutral-100 hover:translate-x-1"
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[var(--secondary-accent)]" : "text-neutral-500"}`} strokeWidth={2.5} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Technology Panels */}
        <div className="w-full lg:w-2/3 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:gap-5 w-full"
            >
              {currentCategory.technologies.map((item) => (
                <div
                  key={item.technology}
                  className="bg-white border-4 border-black p-5 sm:p-7 rounded-[1.25rem] sm:rounded-[1.5rem] brutal-shadow hover:-translate-y-1 transition-all flex flex-col gap-4"
                >
                  {/* Technology Name */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                    {item.technology}
                  </h4>

                  {/* Details Row: Projects & Related */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t-2 border-black/10">
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                        PROJECTS
                      </span>
                      <p className="font-black text-xs sm:text-sm md:text-base text-black">
                        {item.projects}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                        RELATED
                      </span>
                      <p className="font-bold text-xs sm:text-sm md:text-base text-neutral-700">
                        {item.related}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
