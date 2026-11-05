import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ProgressScroll';
import FlyingCreature from './components/FlyingCreature';

export default function App() {
  return (
    <div className="h-5 pattern-tape border-y-4 border-white" aria-hidden="true">
      <CursorGlow/>
      <ScrollProgress/>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
