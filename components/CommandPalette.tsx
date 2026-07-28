"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CommandPalette = ({ toggleBlueprint }: { toggleBlueprint: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    { name: "Build (Projects & Products)", action: () => { window.location.href = "/build"; setIsOpen(false); } },
    { name: "Research (AI & Robotics)", action: () => { window.location.href = "/research"; setIsOpen(false); } },
    { name: "Lead (Community & Mentorship)", action: () => { window.location.href = "/lead"; setIsOpen(false); } },
    { name: "Resume", action: () => { window.open("/Resume.pdf", "_blank"); setIsOpen(false); } },
    { name: "GitHub", action: () => { window.open("https://github.com/sohansa035-bot", "_blank"); setIsOpen(false); } },
    { name: "LinkedIn", action: () => { window.open("https://linkedin.com/in/sohan-saha-130353399/", "_blank"); setIsOpen(false); } },
    { name: "Toggle Blueprint Mode", action: () => { toggleBlueprint(); setIsOpen(false); } },
  ];

  const filteredCommands = commands.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[201]"
          >
            <input 
              type="text" 
              placeholder="Search commands..." 
              autoFocus
              className="w-full bg-transparent p-6 text-white text-lg outline-none border-b border-white/5 font-mono"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="max-h-64 overflow-y-auto p-2">
              {filteredCommands.length > 0 ? filteredCommands.map((cmd, idx) => (
                <button
                  key={idx}
                  onClick={cmd.action}
                  className="w-full text-left p-4 hover:bg-white/5 rounded-xl text-neutral-300 font-mono text-sm transition-colors"
                >
                  {cmd.name}
                </button>
              )) : (
                <div className="p-6 text-center text-neutral-500 font-mono text-sm">No commands found.</div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
