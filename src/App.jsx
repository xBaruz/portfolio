import "./App.css";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import About from "./About/About";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import AllProjects from "./Projects/AllProjects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  const scrollToNext = () => {
    const sections = [
      document.querySelector(".hero"),
      document.querySelector(".about"),
      document.querySelector(".skills-container"),
      document.querySelector(".projects"),
      document.querySelector(".contact"),
      document.querySelector(".main-footer")
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
      <Hero id="glowna" />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <div
        className="scroll-more"
        onClick={scrollToNext}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
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
};

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekty" element={<AllProjects />} />
          <Route path="/projekty/:projectId" element={<AllProjects />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;