import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Hero from "./Components/Hero/Hero";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import AllProjects from "./Components/Projects/AllProjects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { scrollToSection } from './utils/scrollToSection';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const scrollToNext = () => {
    const sections = [
      document.querySelector("#hero-section"),
      document.querySelector("#education-section"),
      document.querySelector("#skills-section"),
      document.querySelector("#projects"),
      document.querySelector("#contact-section"),
      document.querySelector(".footer")
    ].filter(Boolean);

    const marker = window.innerHeight * 0.35;
    let currentIndex = 0;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom >= marker) {
        currentIndex = index;
      }
    });

    const nextSection = sections[currentIndex + 1];
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />

      <div
        className="scroll-more"
        onClick={scrollToNext}
        role="button"
        tabIndex={0}
        aria-label="Przewiń do kolejnej sekcji"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scrollToNext();
          }
        }}
      >
        <span className="scroll-line"></span>
        <span className="scroll-text">
          SCROLL
          <br />
          PO WIĘCEJ
        </span>
        <span className="scroll-arrow">↓</span>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/portfolio">      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;