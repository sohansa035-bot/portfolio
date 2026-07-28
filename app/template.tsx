"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Orange Shutter Transition */}
      <motion.div
        initial={{ y: "0%" }} 
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[150] bg-black pointer-events-none flex items-center justify-center"
      >
        <div className="w-full h-full bg-[var(--primary-accent)]" />
      </motion.div>
      
      {/* Page Content Fade-In */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
