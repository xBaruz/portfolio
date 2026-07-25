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
    return true;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeDone(true);
    }, 1500);

    const fallbackTimer = setTimeout(() => {
      setModelLoaded(true);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const showLoader = !modelLoaded || !minTimeDone;

  useEffect(() => {
    if (showLoader) {
      document.body.classList.add('no-scroll');
    } else {
      const scrollTimeout = setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 500);
      return () => clearTimeout(scrollTimeout);
    }
    return () => document.body.classList.remove('no-scroll');
  }, [showLoader]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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