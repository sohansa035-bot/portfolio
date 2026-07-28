import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { GlobalAmbient } from "@/components/GlobalAmbient";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function BuildPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-[#FDFBF7] text-text-main font-sans min-h-screen relative">
      <GlobalAmbient />
      <Navbar />
      
      <ScrollReveal delay={0.2}>
        <div className="w-full max-w-7xl mx-auto px-6 py-32 text-center flex flex-col items-center mt-20">
          <h2 className="text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-black/20" />
            Full-Stack & Systems Architecture
            <span className="w-8 h-[2px] bg-black/20" />
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-black mb-8 tracking-tighter uppercase leading-none">
            BUILD<span className="text-[var(--primary-accent)]">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-black font-bold max-w-3xl mb-12 leading-relaxed">
            Engineering robust, scalable software and intelligent systems. From concept to production, these are the flagship products I&apos;ve architected.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
