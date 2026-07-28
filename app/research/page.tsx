import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalAmbient } from "@/components/GlobalAmbient";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ResearchTimeline } from "@/components/ResearchTimeline";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { FutureVision } from "@/components/FutureVision";

export default function ResearchPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-[#FDFBF7] text-text-main font-sans min-h-screen relative">
      <GlobalAmbient />
      <Navbar />
      
      <ScrollReveal delay={0.2}>
        <div className="w-full max-w-7xl mx-auto px-6 py-32 text-center flex flex-col items-center mt-20">
          <h2 className="text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-black/20" />
            Applied Machine Intelligence
            <span className="w-8 h-[2px] bg-black/20" />
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-black mb-8 tracking-tighter uppercase leading-none">
            RESEARCH<span className="text-[var(--primary-accent)]">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-black font-bold max-w-3xl mb-12 leading-relaxed">
            Pushing the boundaries of what&apos;s possible with AI, robotics, and physical-world agents. Here is how I think, explore, and innovate.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <ResearchTimeline />
      </ScrollReveal>

      <ScrollReveal>
        <Philosophy />
      </ScrollReveal>

      <ScrollReveal>
        <FutureVision />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
