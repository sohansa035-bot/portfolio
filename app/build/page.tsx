import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { GlobalAmbient } from "@/components/GlobalAmbient";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Selected Work | Sohan Saha",
  description: "A selection of AI-powered systems, intelligent applications, and experimental technology projects.",
};

export default function BuildPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-[#FDFBF7] text-text-main font-sans min-h-screen relative">
      <GlobalAmbient />
      <Navbar />
      
      {/* Compact Editorial Hero */}
      <ScrollReveal delay={0.2}>
        <div className="w-full max-w-7xl mx-auto px-6 pt-28 pb-10 md:pt-36 md:pb-14 text-center flex flex-col items-center mt-10 md:mt-14">
          <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-black/20" />
            SELECTED WORK
            <span className="w-8 h-[2px] bg-black/20" />
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-[8rem] font-black text-black mb-6 tracking-tighter uppercase leading-none break-words max-w-full">
            WHAT I&apos;VE BUILT<span className="text-[var(--primary-accent)]">.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black font-bold max-w-3xl leading-relaxed">
            A selection of AI-powered systems, intelligent applications, and experimental technology projects.
          </p>
        </div>
      </ScrollReveal>

      {/* 2-Column Side-by-Side Projects Grid */}
      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      {/* Engineering Dashboard */}
      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      {/* Bottom CTA */}
      <ScrollReveal>
        <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-24 text-center flex flex-col items-center border-t-4 border-black/10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-8 break-words max-w-full">
            MORE EXPERIMENTS. MORE SYSTEMS.
          </h2>
          <Link 
            href="/research" 
            className="group inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-black text-white border-4 border-black rounded-full font-black text-sm sm:text-lg md:text-xl uppercase tracking-widest brutal-shadow hover:-translate-y-1 transition-all max-w-full text-center"
          >
            EXPLORE MY SKILLS <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
