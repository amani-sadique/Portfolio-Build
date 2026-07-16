import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import Capabilities from './components/Capabilities.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import projects from './data/projects.js';

export default function App() {
  const [modalIndex, setModalIndex] = useState(null);

  // Scroll-reveal: fade/slide in any .reveal element as it enters the viewport
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal-in');
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Work projects={projects} onOpenProject={setModalIndex} />
        <Capabilities />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <ProjectModal
        projects={projects}
        index={modalIndex}
        onClose={() => setModalIndex(null)}
        onNavigate={setModalIndex}
      />
    </div>
  );
}
