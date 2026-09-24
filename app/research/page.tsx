import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalAmbient } from "@/components/GlobalAmbient";
import { ScrollReveal } from "@/components/ScrollReveal";
import { coreAreas, systemsEmergingTech, currentlyExploring, technicalSkills } from "@/lib/technicalInterestsData";

export const metadata: Metadata = {
  title: "Technical Interests | Sohan Saha",
  description: "Exploring technologies and problem spaces across AI, intelligent systems, perception, and autonomous computing.",
};

// Category styling for Section 01 // TOOLKIT & TECHNOLOGIES
// Palette: Purple (#5D41CF), Green (#04CB6B), Orange (#FB4D04)
const categoryStyles: Record<string, { dotColor: string; badgeBg: string; title: string }> = {
  "AI / ML & TOOLS": {
    dotColor: "bg-[#5D41CF]",
    badgeBg: "bg-[#ECE6FF]",
    title: "AI / ML & TOOLS",
  },
  "SYSTEMS & IoT": {
    dotColor: "bg-[#04CB6B]",
    badgeBg: "bg-[#DEF9EB]",
    title: "SYSTEMS & IOT",
  },
  "DEVELOPMENT & TOOLS": {
    dotColor: "bg-[#FB4D04]",
    badgeBg: "bg-[#FFE6DC]",
    title: "DEVELOPMENT & TOOLS",
  },
};

// Subtle accent styling for Section 02 // CORE AREAS
const coreAreaStyles: Record<string, { accentColor: string; tintBg: string; badgeBg: string }> = {
  "ai": { accentColor: "#5D41CF", tintBg: "bg-[#F8F5FF]", badgeBg: "bg-[#ECE6FF]" },
  "ml": { accentColor: "#5D41CF", tintBg: "bg-[#F8F5FF]", badgeBg: "bg-[#ECE6FF]" },
  "ai-agents": { accentColor: "#FB4D04", tintBg: "bg-[#FFF6F1]", badgeBg: "bg-[#FFE6DC]" },
  "intelligent-systems": { accentColor: "#04CB6B", tintBg: "bg-[#F1FAF5]", badgeBg: "bg-[#DEF9EB]" },
  "computer-vision": { accentColor: "#5D41CF", tintBg: "bg-[#F8F5FF]", badgeBg: "bg-[#ECE6FF]" },
};

// Subtle accent styling for Section 03 // SYSTEMS & EMERGING TECHNOLOGY
const systemsStyles: Record<string, { accentColor: string; tintBg: string; badgeBg: string }> = {
  "autonomous-systems": { accentColor: "#04CB6B", tintBg: "bg-[#F1FAF5]", badgeBg: "bg-[#DEF9EB]" },
  "iot": { accentColor: "#04CB6B", tintBg: "bg-[#F1FAF5]", badgeBg: "bg-[#DEF9EB]" },
  "edge-computing": { accentColor: "#5D41CF", tintBg: "bg-[#F8F5FF]", badgeBg: "bg-[#ECE6FF]" },
  "robotics": { accentColor: "#FB4D04", tintBg: "bg-[#FFF6F1]", badgeBg: "bg-[#FFE6DC]" },
  "defense-technology": { accentColor: "#FB4D04", tintBg: "bg-[#FFF6F1]", badgeBg: "bg-[#FFE6DC]" },
};

// Subtle accent styling for Section 04 // CURRENTLY EXPLORING
const exploringDomainStyles: Record<string, { accentColor: string; badgeBg: string }> = {
  "Machine Learning": { accentColor: "#5D41CF", badgeBg: "bg-[#ECE6FF]" },
  "AI Agents": { accentColor: "#5D41CF", badgeBg: "bg-[#ECE6FF]" },
  "Computer Vision": { accentColor: "#5D41CF", badgeBg: "bg-[#ECE6FF]" },
  "Intelligent Systems": { accentColor: "#04CB6B", badgeBg: "bg-[#DEF9EB]" },
  "Autonomous Systems": { accentColor: "#04CB6B", badgeBg: "bg-[#DEF9EB]" },
  "IoT & Edge Computing": { accentColor: "#FB4D04", badgeBg: "bg-[#FFE6DC]" },
};

const loopStages = [
  { name: "LEARN", bg: "bg-[#ECE6FF]" },
  { name: "EXPERIMENT", bg: "bg-[#FFE6DC]" },
  { name: "BUILD", bg: "bg-[#DEF9EB]" },
  { name: "REFINE", bg: "bg-[#ECE6FF]" },
];

export default function TechnicalInterestsPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-[#FDFBF7] text-text-main font-sans min-h-screen relative">
      <GlobalAmbient />
      <Navbar />
      
      {/* Hero Section */}
      <ScrollReveal delay={0.2}>
        <div className="w-full max-w-7xl mx-auto px-6 py-28 md:py-32 text-center flex flex-col items-center mt-16 md:mt-20">
          <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-black/20" />
            TECHNICAL INTERESTS
            <span className="w-8 h-[2px] bg-black/20" />
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-[8rem] font-black text-black mb-8 tracking-tighter uppercase leading-none break-words max-w-full">
            WHAT I&apos;M EXPLORING<span className="text-[#5D41CF]">.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black font-bold max-w-3xl mb-12 leading-relaxed">
            Exploring technologies and problem spaces across AI, intelligent systems, perception, and autonomous computing.
          </p>
        </div>
      </ScrollReveal>

      {/* 01 // TOOLKIT & TECHNOLOGIES */}
      <ScrollReveal>
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="mb-10 md:mb-12">
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-3 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-black/20" />
              01 // TOOLKIT &amp; TECHNOLOGIES
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase tracking-tight break-words mb-4 sm:mb-6">
              TOOLKIT &amp; TECHNOLOGIES<span className="text-[#5D41CF]">.</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-neutral-800 font-bold max-w-3xl leading-relaxed">
              Technologies and tools I currently work with across AI, intelligent systems, and development.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:gap-12 w-full">
            {technicalSkills.categories.map((category) => {
              const catStyle = categoryStyles[category.title] || {
                dotColor: "bg-[#5D41CF]",
                badgeBg: "bg-[#ECE6FF]",
                title: category.title,
              };

              return (
                <div key={category.title} className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-center gap-3">
                    <span className={`w-3.5 h-3.5 rounded-full ${catStyle.dotColor} border-2 border-black shrink-0`} />
                    <h4 className="text-lg sm:text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                      {catStyle.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className={`px-4 sm:px-6 py-2.5 sm:py-3.5 ${catStyle.badgeBg} text-black border-2 sm:border-4 border-black rounded-xl font-black text-xs sm:text-sm md:text-base tracking-wide uppercase shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-y-1 transition-all duration-200 cursor-default select-none`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 02 // CORE AREAS */}
      <ScrollReveal>
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="mb-10 md:mb-12">
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-3 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-black/20" />
              02 // CORE AREAS
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase tracking-tight break-words">
              CORE AREAS<span className="text-[#5D41CF]">.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {coreAreas.map((card, idx) => {
              const style = coreAreaStyles[card.id] || {
                accentColor: "#5D41CF",
                tintBg: "bg-[#F8F5FF]",
                badgeBg: "bg-[#ECE6FF]",
              };

              return (
                <div 
                  key={card.id}
                  className={`${style.tintBg} border-4 border-black p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] brutal-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all duration-300 flex flex-col justify-between ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <span className={`px-3 py-1 ${style.badgeBg} text-black border-2 border-black text-xs font-black uppercase tracking-widest rounded-full shadow-[2px_2px_0px_#000]`}>
                        {card.number}
                      </span>
                      <span 
                        className="w-3 h-3 rounded-full border-2 border-black" 
                        style={{ backgroundColor: style.accentColor }} 
                      />
                    </div>

                    <div 
                      className="w-10 h-1 rounded-full mb-4" 
                      style={{ backgroundColor: style.accentColor }} 
                    />

                    <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight uppercase mb-3 sm:mb-4 break-words">
                      {card.title}
                    </h4>
                    <p className="text-neutral-700 font-bold leading-relaxed text-sm sm:text-base md:text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 03 // SYSTEMS & EMERGING TECHNOLOGY */}
      <ScrollReveal>
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="mb-10 md:mb-12">
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-3 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-black/20" />
              03 // SYSTEMS &amp; EMERGING TECHNOLOGY
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase tracking-tight break-words">
              SYSTEMS &amp; EMERGING TECHNOLOGY<span className="text-[#5D41CF]">.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {systemsEmergingTech.map((card, idx) => {
              const style = systemsStyles[card.id] || {
                accentColor: "#04CB6B",
                tintBg: "bg-[#F1FAF5]",
                badgeBg: "bg-[#DEF9EB]",
              };

              return (
                <div 
                  key={card.id}
                  className={`${style.tintBg} border-4 border-black p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] brutal-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all duration-300 flex flex-col justify-between ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <span className={`px-3 py-1 ${style.badgeBg} text-black border-2 border-black text-xs font-black uppercase tracking-widest rounded-full shadow-[2px_2px_0px_#000]`}>
                        {card.number}
                      </span>
                      <span 
                        className="w-3 h-3 rounded-full border-2 border-black" 
                        style={{ backgroundColor: style.accentColor }} 
                      />
                    </div>

                    <div 
                      className="w-10 h-1 rounded-full mb-4" 
                      style={{ backgroundColor: style.accentColor }} 
                    />

                    <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight uppercase mb-3 sm:mb-4 break-words">
                      {card.title}
                    </h4>
                    <p className="text-neutral-700 font-bold leading-relaxed text-sm sm:text-base md:text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 04 // CURRENTLY EXPLORING */}
      <ScrollReveal>
        <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-20 text-center flex flex-col items-center">
          <div className="mb-10 md:mb-12 max-w-3xl">
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-4">
              <span className="w-8 h-[2px] bg-black/20" />
              04 // CURRENTLY EXPLORING
              <span className="w-8 h-[2px] bg-black/20" />
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-4 sm:mb-6 break-words">
              CURRENTLY EXPLORING<span className="text-[#5D41CF]">.</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-neutral-800 font-bold leading-relaxed">
              {currentlyExploring.description}
            </p>
          </div>

          {/* Domains with category accent badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16 max-w-5xl">
            {currentlyExploring.domains.map((domain) => {
              const style = exploringDomainStyles[domain] || {
                accentColor: "#5D41CF",
                badgeBg: "bg-[#ECE6FF]",
              };

              return (
                <div 
                  key={domain}
                  className={`px-4 sm:px-6 py-3 sm:py-4 ${style.badgeBg} text-black border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl font-black text-sm sm:text-base md:text-lg tracking-wider uppercase shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-y-1 transition-all text-center flex items-center gap-2.5 cursor-default select-none`}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full border border-black shrink-0" 
                    style={{ backgroundColor: style.accentColor }} 
                  />
                  <span>{domain}</span>
                </div>
              );
            })}
          </div>

          {/* Visual Learning Loop with subtle portfolio accents */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4 font-mono font-black text-xs sm:text-sm md:text-base uppercase tracking-widest max-w-full">
            {loopStages.map((stage, idx) => (
              <div key={stage.name} className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                <span className={`px-3.5 sm:px-5 py-2 sm:py-3 ${stage.bg} text-black border-2 sm:border-4 border-black rounded-lg sm:rounded-xl shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 transition-all select-none`}>
                  {stage.name}
                </span>
                {idx < loopStages.length - 1 && (
                  <span className="text-base sm:text-xl font-black text-[#5D41CF]">→</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Build CTA */}
      <ScrollReveal>
        <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-24 text-center flex flex-col items-center border-t-4 border-black/10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-8 break-words max-w-full">
            WANT TO SEE WHAT I&apos;VE BUILT?
          </h2>
          <Link 
            href="/build" 
            className="group inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-black text-white border-4 border-black rounded-full font-black text-sm sm:text-lg md:text-xl uppercase tracking-widest brutal-shadow hover:-translate-y-1 transition-all max-w-full text-center"
          >
            VIEW SELECTED WORK <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
