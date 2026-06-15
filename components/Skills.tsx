"use client";

import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C", "HTML", "Web Development"],
      boxHover: "hover:border-blue-500/30",
      glow: "bg-blue-500/20",
      tagHover: "hover:text-blue-400 hover:border-blue-500/50"
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning Fundamentals", "Artificial Intelligence", "Predictive Analytics", "Generative AI"],
      boxHover: "hover:border-emerald-500/30",
      glow: "bg-emerald-500/20",
      tagHover: "hover:text-emerald-400 hover:border-emerald-500/50"
    },
    {
      title: "Data Science",
      skills: ["NumPy", "Pandas", "Data Cleaning", "Data Analysis", "EDA", "Data Visualization"],
      boxHover: "hover:border-purple-500/30",
      glow: "bg-purple-500/20",
      tagHover: "hover:text-purple-400 hover:border-purple-500/50"
    },
    {
      title: "Dev Tools & Platforms",
      skills: ["Docker", "Git", "GitHub", "VS Code", "Jupyter", "Colab", "Hugging Face", "Lyzr AI", "OpenEnv"],
      boxHover: "hover:border-orange-500/30",
      glow: "bg-orange-500/20",
      tagHover: "hover:text-orange-400 hover:border-orange-500/50"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Team Management", "Public Speaking", "Problem Solving"],
      boxHover: "hover:border-rose-500/30",
      glow: "bg-rose-500/20",
      tagHover: "hover:text-rose-400 hover:border-rose-500/50"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gradient">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`glassmorphism p-6 rounded-3xl relative overflow-hidden group transition-all duration-500 bg-black/5 hover:bg-black/10 border border-black/10 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 ${category.boxHover} ${idx === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 opacity-70 group-hover:opacity-100 transition-all duration-500 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none ${category.glow}`} />
              
              <h3 className="text-lg font-bold text-black dark:text-white mb-4 relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-neutral-700 dark:text-neutral-300 transition-colors cursor-default ${category.tagHover}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
