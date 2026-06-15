"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar || mod.default || (mod as any)),
  { ssr: false }
);

export const GithubSection = () => {
  const [profile, setProfile] = useState<{ public_repos: number; followers: number } | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/sohansa035-bot')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(console.error);
  }, []);

  return (
    <section id="github" className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <Github className="w-10 h-10 text-white" />
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">GitHub Activity</h2>
        </div>

        <div className="glassmorphism rounded-3xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">@sohansa035-bot</h3>
              <a href="https://github.com/sohansa035-bot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                View Full Profile
              </a>
            </div>
            
            <div className="flex gap-4">
              <div className="text-center px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-white">{profile ? profile.public_repos : "-"}</div>
                <div className="text-xs text-neutral-400">Repositories</div>
              </div>
              <div className="text-center px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-white">{profile ? profile.followers : "-"}</div>
                <div className="text-xs text-neutral-400">Followers</div>
              </div>
            </div>
          </div>

          {/* Real Contribution Graph */}
          <div className="w-full bg-black/40 rounded-xl p-6 border border-white/5 overflow-x-auto flex justify-center text-white">
            <GitHubCalendar 
              username="sohansa035-bot" 
              colorScheme="dark"
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
};
