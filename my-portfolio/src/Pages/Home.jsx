import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import FloatingTech from '../Components/FloatingTech';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Floating 3D tech icons in background */}
      <FloatingTech />
      
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-dark via-dark to-primary/10"></div>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}