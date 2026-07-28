import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArchitectureAnimation } from "@/components/ArchitectureAnimation";
import { InteractiveBlueprint } from "@/components/InteractiveBlueprint";
import { GithubIcon } from "@/components/Icons";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-[var(--background)] text-black font-sans min-h-screen pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full max-w-5xl mx-auto px-6 py-20 text-center">
        <Link href="/build" className="inline-flex items-center gap-2 text-black hover:bg-black hover:text-white px-4 py-2 border-4 border-black rounded-full transition-colors mb-16 font-black text-sm tracking-widest uppercase brutal-shadow">
          <ArrowLeft className="w-4 h-4" strokeWidth={3} /> Back to Build
        </Link>
        
        <h1 className="text-6xl md:text-[8rem] font-black text-black mb-6 tracking-tighter uppercase leading-none">{project.title}</h1>
        <p className="text-2xl md:text-4xl font-black text-[var(--text-main)] mb-12 uppercase bg-[var(--primary-accent)] inline-block px-6 py-2 border-4 border-black text-white brutal-shadow transform -rotate-2">{project.role}</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {project.tech.map((t, i) => (
            <span key={i} className="px-6 py-3 bg-white border-4 border-black rounded-full text-sm font-black tracking-widest uppercase text-black brutal-shadow">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Signature Interaction: Interactive Blueprint */}
      <div className="w-full max-w-6xl mx-auto px-6 mb-32">
        <InteractiveBlueprint image={project.image} />
      </div>

      {/* Case Study Content */}
      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col gap-32 mb-32">
        
        <section className="bg-white p-8 md:p-12 border-8 border-black rounded-[3rem] brutal-shadow">
          <h2 className="text-xl font-black text-white bg-black inline-block px-4 py-2 rounded-xl uppercase mb-8 border-4 border-black brutal-shadow transform -rotate-1">01 // The Problem</h2>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed text-black">
            {project.content.problem}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-white bg-[var(--secondary-accent)] inline-block px-4 py-2 rounded-xl uppercase mb-12 border-4 border-black brutal-shadow transform rotate-1">02 // Architecture</h2>
          <ArchitectureAnimation nodes={project.nodes} />
          <div className="bg-white p-8 md:p-12 border-8 border-black rounded-[3rem] brutal-shadow mt-12">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed text-black">
              {project.content.architecture}
            </p>
          </div>
        </section>

        <section className="bg-white p-8 md:p-12 border-8 border-black rounded-[3rem] brutal-shadow">
          <h2 className="text-xl font-black text-white bg-[var(--success)] inline-block px-4 py-2 rounded-xl uppercase mb-8 border-4 border-black brutal-shadow transform -rotate-2">03 // Development</h2>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed text-black">
            {project.content.development}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-white bg-[var(--primary-accent)] inline-block px-4 py-2 rounded-xl uppercase mb-8 border-4 border-black brutal-shadow transform rotate-1">04 // Demo & Execution</h2>
          <div className="w-full aspect-video rounded-[2rem] border-8 border-black bg-black mb-12 flex items-center justify-center brutal-shadow">
            <span className="text-white font-black text-2xl uppercase tracking-widest">Demo Simulation Offline</span>
          </div>
          <div className="bg-white p-8 md:p-12 border-8 border-black rounded-[3rem] brutal-shadow">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed text-black">
              {project.content.demo}
            </p>
          </div>
        </section>

        <section className="bg-white p-8 md:p-12 border-8 border-black rounded-[3rem] brutal-shadow">
          <h2 className="text-xl font-black text-white bg-black inline-block px-4 py-2 rounded-xl uppercase mb-8 border-4 border-black brutal-shadow transform -rotate-1">05 // Lessons Learned</h2>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed text-black">
            {project.content.lessons}
          </p>
        </section>

        <section className="pt-16 flex justify-center">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-6 bg-black text-white rounded-full font-black text-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-4 border-black">
            <GithubIcon className="w-8 h-8" /> View Source Code
          </a>
        </section>

      </div>

      <Footer />
    </main>
  );
}
