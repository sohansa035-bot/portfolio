"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ScrollReveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative z-10 w-full"
    >
      {children}
    </motion.div>
  );
};
