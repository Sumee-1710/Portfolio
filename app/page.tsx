import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import About           from "@/components/About";
import Skills          from "@/components/Skills";
import Experience      from "@/components/Experience";
import Projects        from "@/components/Projects";
import Education       from "@/components/Education";
import Certifications  from "@/components/Certifications";
import Achievements    from "@/components/Achievements";
import Contact         from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
