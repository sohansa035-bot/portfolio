import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StickyCoreShowcase } from "@/components/StickyCoreShowcase";
import { LabDoors } from "@/components/LabDoors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JourneyCompanion } from "@/components/JourneyCompanion";
import { GlobalAmbient } from "@/components/GlobalAmbient";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PersonalDetails } from "@/components/PersonalDetails";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden bg-[#FDFBF7] text-text-main font-sans relative">
      <GlobalAmbient />
      <Navbar />
      
      <Hero />
      
      <div className="w-full h-32 md:h-64" />
      
      <ScrollReveal>
        <PersonalDetails />
      </ScrollReveal>
      
      <ScrollReveal>
        <StickyCoreShowcase />
      </ScrollReveal>
        
      <ScrollReveal>
        <JourneyCompanion />
      </ScrollReveal>

      <ScrollReveal>
        <LabDoors />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
}
