import Navigation from '@/components/navigation/Navigation';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import WhatIBuild from '@/components/work/WhatIBuild';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';
import Architecture from '@/components/architecture/Architecture';
import EducationCertifications from '@/components/education/EducationCertifications';
import Contact from '@/components/contact/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <WhatIBuild />
        <Projects />
        <Skills />
        <Architecture />
        <EducationCertifications />
        <Contact />
      </main>
    </div>
  );
}
