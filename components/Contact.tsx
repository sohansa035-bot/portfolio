"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 w-full max-w-6xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Let&apos;s Connect</h2>
            <p className="text-neutral-400 mb-12 text-lg">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500 font-semibold uppercase tracking-wider">Email</div>
                  <div className="text-white">sohansa035@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500 font-semibold uppercase tracking-wider">Location</div>
                  <div className="text-white">Bengaluru, Karnataka, India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://www.linkedin.com/in/sohan-saha-130353399/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:border-blue-400/50 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/sohansa035-bot" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:border-blue-400/50 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          {/* Direct Email Action */}
          <div className="glassmorphism p-10 rounded-3xl flex flex-col justify-center items-center text-center border border-white/10 relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Mail className="w-10 h-10 text-blue-400" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">Direct Inquiry</h3>
            <p className="text-neutral-400 mb-8 max-w-sm">
              The fastest way to reach me is directly through email. I typically respond within 24 hours to all inquiries and opportunities.
            </p>
            <a 
              href="mailto:sohansa035@gmail.com"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Send an Email
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
