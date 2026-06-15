"use client";

import { motion } from "framer-motion";
import { Bot, ServerCrash, Leaf, AppWindow, ShieldAlert } from "lucide-react";

export const Projects = () => {
  const allProjects = [
    {
      title: "Autonomous AI Surveillance Rover",
      subtitle: "",
      description: "An end-to-end distributed architecture transforming raw IoT video feeds into a low-latency, biometric threat-detection system. By separating resource-constrained edge hardware from a centralized processing server, it achieves professional-grade, real-time security monitoring.",
      icon: Bot,
      html_url: "#",
      tags: ["ESP32", "YOLOv8", "Computer Vision", "WebSockets"],
      style: {
        glow: "bg-blue-500/10",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400",
        subtitleColor: "text-blue-400",
        tagText: "text-blue-300",
        tagBg: "bg-blue-500/20 border-blue-500/30"
      }
    },
    {
      title: "AutoSRE",
      subtitle: "Meta PyTorch OpenEnv Hackathon",
      description: "A fully interactive State/Action/Reward Reinforcement Learning (RL) simulation. Designed as a live 'game board,' it simulates critical production server crashes and trains an autonomous AI agent to execute system commands to proactively restore server health.",
      icon: ServerCrash,
      html_url: "#",
      tags: ["Python", "RL Environment", "OpenEnv API"],
      style: {
        glow: "bg-purple-500/10",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400",
        subtitleColor: "text-purple-400",
        tagText: "text-purple-300",
        tagBg: "bg-purple-500/20 border-purple-500/30"
      }
    },
    {
      title: "TerraSense",
      subtitle: "Phygital Agricultural Dashboard",
      description: "An enterprise-level marketing landing page and interactive agricultural dashboard, showcasing precise hardware specifications and AI-driven agricultural solutions.",
      icon: Leaf,
      html_url: "https://github.com/sohansa035-bot/TerraSense",
      tags: ["TypeScript", "Dashboard", "Agriculture", "AI"],
      style: {
        glow: "bg-emerald-500/10",
        iconBg: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        subtitleColor: "text-emerald-400",
        tagText: "text-emerald-300",
        tagBg: "bg-emerald-500/20 border-emerald-500/30"
      }
    },
    {
      title: "OpenEnv_prop",
      subtitle: "Production Web Interface",
      description: "A production-grade Gradio web interface integrating automatic JSON parsing logic to validate and process tool invocations for backend servers.",
      icon: AppWindow,
      html_url: "https://github.com/sohansa035-bot/OpenEnv_prop",
      tags: ["Python", "Gradio", "JSON Parsing", "Backend"],
      style: {
        glow: "bg-orange-500/10",
        iconBg: "bg-orange-500/20",
        iconColor: "text-orange-400",
        subtitleColor: "text-orange-400",
        tagText: "text-orange-300",
        tagBg: "bg-orange-500/20 border-orange-500/30"
      }
    },
    {
      title: "AI SOC Threat Pipeline",
      subtitle: "SRE Incident Triage",
      description: "A deterministic SRE Incident Triage environment featuring a FastAPI server, deployed seamlessly to cloud environments like Hugging Face Spaces for live inference.",
      icon: ShieldAlert,
      html_url: "https://github.com/sohansa035-bot/ai-soc-threat-pipeline",
      tags: ["Python", "FastAPI", "Hugging Face", "AI SOC"],
      style: {
        glow: "bg-rose-500/10",
        iconBg: "bg-rose-500/20",
        iconColor: "text-rose-400",
        subtitleColor: "text-rose-400",
        tagText: "text-rose-300",
        tagBg: "bg-rose-500/20 border-rose-500/30"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gradient">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {allProjects.map((project, idx) => (
            <motion.a 
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              whileHover={{ y: -5 }}
              className="glassmorphism rounded-3xl p-8 border border-black/10 dark:border-white/10 relative overflow-hidden group flex flex-col h-full block"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 ${project.style.glow} rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity opacity-70 group-hover:opacity-100`} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-14 h-14 shrink-0 ${project.style.iconBg} rounded-2xl flex items-center justify-center ${project.style.iconColor}`}>
                  <project.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-1">{project.title}</h3>
                  {project.subtitle && <p className={`${project.style.subtitleColor} text-xs font-medium`}>{project.subtitle}</p>}
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className={`flex flex-wrap gap-2 text-xs ${project.style.tagText}`}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`${project.style.tagBg} px-3 py-1.5 rounded-full border`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
