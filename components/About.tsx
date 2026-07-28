"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 w-full max-w-6xl mx-auto flex flex-col gap-24 mt-12 mb-32">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        className="max-w-4xl bg-white border-8 border-black rounded-[3rem] p-10 md:p-16 brutal-shadow transform -rotate-1 relative"
      >
        <p className="absolute -top-6 left-12 bg-[var(--primary-accent)] text-white text-sm font-black tracking-widest uppercase px-6 py-2 border-4 border-black rounded-full brutal-shadow">01 // Why Engineering?</p>
        <h3 className="text-3xl md:text-5xl font-bold leading-snug text-black mt-4">
          I believe that code is the closest thing we have to <span className="bg-black text-white px-2 py-1 rounded-lg">magic</span>. Engineering isn&apos;t just about syntax; it&apos;s about architecting logic to bend reality and build solutions from pure thought.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        className="max-w-4xl self-end md:text-right bg-white border-8 border-black rounded-[3rem] p-10 md:p-16 brutal-shadow transform rotate-1 relative"
      >
        <p className="absolute -top-6 right-12 bg-[var(--secondary-accent)] text-white text-sm font-black tracking-widest uppercase px-6 py-2 border-4 border-black rounded-full brutal-shadow">02 // Why AI?</p>
        <h3 className="text-3xl md:text-5xl font-bold leading-snug text-black mt-4">
          Because static systems are obsolete. I build <span className="bg-[var(--secondary-accent)] text-white px-2 py-1 rounded-lg">intelligent agents</span> that learn, adapt, and reason. The future belongs to software that thinks, and I intend to write it.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        className="max-w-4xl bg-white border-8 border-black rounded-[3rem] p-10 md:p-16 brutal-shadow transform -rotate-1 relative"
      >
        <p className="absolute -top-6 left-12 bg-[var(--success)] text-black text-sm font-black tracking-widest uppercase px-6 py-2 border-4 border-black rounded-full brutal-shadow">03 // Why Robotics?</p>
        <h3 className="text-3xl md:text-5xl font-bold leading-snug text-black mt-4">
          Intelligence shouldn&apos;t be confined to screens. I am fascinated by bringing AI into the <span className="bg-[var(--success)] text-black px-2 py-1 rounded-lg">physical world</span>, bridging the gap between bits and atoms to create autonomous systems.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        className="max-w-4xl self-end md:text-right bg-white border-8 border-black rounded-[3rem] p-10 md:p-16 brutal-shadow transform rotate-1 relative"
      >
        <p className="absolute -top-6 right-12 bg-black text-white text-sm font-black tracking-widest uppercase px-6 py-2 border-4 border-black rounded-full brutal-shadow">04 // Why Product Development?</p>
        <h3 className="text-3xl md:text-5xl font-bold leading-snug text-black mt-4">
          Brilliant architecture is useless if nobody uses it. I don&apos;t just write code; I engineer <span className="text-[var(--primary-accent)] underline decoration-4 underline-offset-4">experiences</span> that solve real problems with uncompromising aesthetics and precision.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        className="max-w-4xl bg-[var(--primary-accent)] border-8 border-black rounded-[3rem] p-10 md:p-16 brutal-shadow transform -rotate-1 relative"
      >
        <p className="absolute -top-6 left-12 bg-white text-black text-sm font-black tracking-widest uppercase px-6 py-2 border-4 border-black rounded-full brutal-shadow">05 // Why Entrepreneurship?</p>
        <h3 className="text-3xl md:text-5xl font-bold leading-snug text-white mt-4" style={{ WebkitTextStroke: '1px black' }}>
          Innovation requires execution. I build <span className="bg-black text-white px-2 py-1 rounded-lg" style={{ WebkitTextStroke: '0px' }}>ventures</span> that transform deep tech research into scalable real-world solutions. It&apos;s about bridging the gap between the lab and the market.
        </h3>
      </motion.div>

    </section>
  );
};
