"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gradient">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300 text-left text-pretty">
            
            {/* Profile Avatar & Intro Card */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-black/5 dark:bg-white/5 p-6 rounded-3xl border border-black/10 dark:border-white/10 shadow-lg">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] relative shrink-0 transition-transform hover:scale-105 duration-300">
                <Image src="/mypic.jpeg" alt="Sohan Saha" fill className="object-cover" />
              </div>
              <p className="text-xl text-black dark:text-white leading-relaxed text-center md:text-left mt-2 md:mt-0">
                Hello! I&apos;m <strong className="text-blue-500 dark:text-blue-400">Sohan Saha</strong>, a passionate Artificial Intelligence and Machine Learning student at REVA University.
              </p>
            </div>
            <p>
              I am currently serving as the <strong>Technical Co-Head of IEEE TEMS REVA University</strong>, where I contribute to technical initiatives, event organization, project development, and innovation-driven activities.
            </p>
            <p>
              My interests span Artificial Intelligence, Machine Learning, Data Science, Generative AI, Open Source Development, Entrepreneurship, and Emerging Technologies. I enjoy transforming ideas into practical solutions, exploring cutting-edge technologies, and continuously developing both technical and leadership skills.
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              My long-term vision is to become an AI Engineer capable of building intelligent systems that solve real-world challenges and create meaningful impact.
            </p>
          </div>

          <div className="glassmorphism p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]" />
            <h3 className="text-2xl font-semibold text-black dark:text-white">Education</h3>
            <div>
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">Bachelor of Technology (B.Tech)</div>
              <div className="text-neutral-700 dark:text-neutral-300 font-medium mb-4">Artificial Intelligence & Machine Learning</div>
              
              <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span>University</span>
                  <span className="text-black dark:text-white">REVA University</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span>Location</span>
                  <span className="text-black dark:text-white">Bengaluru, India</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span>Expected Graduation</span>
                  <span className="text-black dark:text-white">2029</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Status</span>
                  <span className="text-black dark:text-white font-medium bg-black/5 dark:bg-white/10 px-2 py-1 rounded">2nd Semester</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
