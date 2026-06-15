"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, BarChart3, Wrench, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      description: "Core languages and web technologies.",
      icon: Code2,
      skills: ["Python", "C", "HTML", "Web Development"],
      color: "blue"
    },
    {
      title: "AI & Machine Learning",
      description: "Algorithms, predictive modeling, and generative AI.",
      icon: BrainCircuit,
      skills: ["Machine Learning Fundamentals", "Artificial Intelligence", "Predictive Analytics", "Generative AI"],
      color: "emerald"
    },
    {
      title: "Data Science",
      description: "Data analysis, processing, and visualization.",
      icon: BarChart3,
      skills: ["NumPy", "Pandas", "Data Cleaning", "Data Analysis", "EDA", "Data Visualization"],
      color: "purple"
    },
    {
      title: "Dev Tools & Platforms",
      description: "Version control, containerization, and AI platforms.",
      icon: Wrench,
      skills: ["Docker", "Git", "GitHub", "VS Code", "Jupyter", "Colab", "Hugging Face", "Lyzr AI", "OpenEnv"],
      color: "orange"
    },
    {
      title: "Soft Skills",
      description: "Leadership, communication, and team management.",
      icon: Users,
      skills: ["Leadership", "Communication", "Team Management", "Public Speaking", "Problem Solving"],
      color: "rose"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500/20', hover: 'hover:border-blue-500/50 hover:bg-blue-500/[0.02] hover:shadow-xl', tagHover: 'hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_0_15px_rgba(59,130,246,0.4)] hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400' };
      case 'emerald': return { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/20', hover: 'hover:border-emerald-500/50 hover:bg-emerald-500/[0.02] hover:shadow-xl', tagHover: 'hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(16,185,129,0.3),inset_0_0_15px_rgba(16,185,129,0.4)] hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400' };
      case 'purple': return { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/20', hover: 'hover:border-purple-500/50 hover:bg-purple-500/[0.02] hover:shadow-xl', tagHover: 'hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(168,85,247,0.3),inset_0_0_15px_rgba(168,85,247,0.4)] hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400' };
      case 'orange': return { bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-500/20', hover: 'hover:border-orange-500/50 hover:bg-orange-500/[0.02] hover:shadow-xl', tagHover: 'hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(249,115,22,0.3),inset_0_0_15px_rgba(249,115,22,0.4)] hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400' };
      case 'rose': return { bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-500/20', hover: 'hover:border-rose-500/50 hover:bg-rose-500/[0.02] hover:shadow-xl', tagHover: 'hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(244,63,94,0.3),inset_0_0_15px_rgba(244,63,94,0.4)] hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400' };
      default: return { bg: 'bg-neutral-500/10', text: 'text-neutral-600 dark:text-neutral-400', border: 'border-neutral-500/20', hover: 'hover:border-neutral-500/50 hover:bg-neutral-500/[0.02] hover:shadow-xl', tagHover: 'hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(115,115,115,0.3),inset_0_0_15px_rgba(115,115,115,0.4)] hover:border-neutral-500/50 hover:bg-neutral-500/10 hover:text-neutral-600 dark:hover:text-neutral-400' };
    }
  };

  return (
    <section id="skills" className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Technical Arsenal</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">A comprehensive overview of my technical proficiencies, specialized tools, and professional skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            return (
              <div 
                key={idx} 
                className={`glassmorphism p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 border border-black/10 dark:border-white/10 hover:-translate-y-1 ${colors.hover} flex flex-col ${idx === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colors.bg} ${colors.text} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                  <category.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{category.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">{category.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-300 transition-all duration-300 cursor-default ${colors.tagHover}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
