import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WelcomeLoader from './components/WelcomeLoader/WelcomeLoader';

function App() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      return savedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const minimumLoaderTimer = window.setTimeout(() => {
      setMinTimeDone(true);
    }, 1200);

    const modelFallbackTimer = window.setTimeout(() => {
      setModelLoaded(true);
    }, 5000);

    return () => {
      window.clearTimeout(minimumLoaderTimer);
      window.clearTimeout(modelFallbackTimer);
    };
  }, []);

  const showLoader = !modelLoaded || !minTimeDone;

  useEffect(() => {
    let scrollTimeout;

    if (showLoader) {
      document.body.classList.add('no-scroll');
    } else {
      scrollTimeout = window.setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 450);
    }

    return () => {
      document.body.classList.remove('no-scroll');
      window.clearTimeout(scrollTimeout);
    };
  }, [showLoader]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((currentTheme) => !currentTheme);
  };

  return (
    <>
      <WelcomeLoader loading={showLoader} setLoading={() => {}} />
      <Navbar loading={showLoader} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero loading={showLoader} />
        <About setModelLoaded={() => setModelLoaded(true)} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
