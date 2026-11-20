import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaLock,
  FaNetworkWired,
  FaShieldAlt,
  FaGlobe,
  FaServer,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiWireshark,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { MdOutlineWeb, MdStorage, MdCloudSync, MdSecurity } from 'react-icons/md';
import Header from '../Header/Header';
import './Skills.css';

const AspNetCoreIcon = ({ className }) => (
  <i className={`devicon-dotnetcore-plain ${className}`} aria-hidden="true" />
);

const SLIDES = [
  {
    id: 0,
    index: '01',
    label: 'FRONTEND',
    themeClass: 'glitch-theme-blue',
    mainIcon: MdOutlineWeb,
    leftTechs: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    rightTechs: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
    ],
  },
  {
    id: 1,
    index: '02',
    label: 'BACKEND',
    themeClass: 'glitch-theme-emerald',
    mainIcon: MdStorage,
    leftTechs: [
      { name: 'C#', icon: TbBrandCSharp },
      { name: '.NET', icon: SiDotnet },
      { name: 'ASP.NET Core', icon: AspNetCoreIcon },
    ],
    rightTechs: [
      { name: 'Python', icon: FaPython },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    id: 2,
    index: '03',
    label: 'DEVOPS',
    themeClass: 'glitch-theme-purple',
    mainIcon: MdCloudSync,
    leftTechs: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'GitHub Actions', icon: SiGithubactions },
    ],
    rightTechs: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Linux', icon: FaLinux },
    ],
  },
  {
    id: 3,
    index: '04',
    label: 'SECURITY & NET',
    themeClass: 'glitch-theme-red',
    mainIcon: MdSecurity,
    leftTechs: [
      { name: 'TCP/IP', icon: FaServer },
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'Podstawy sieci', icon: FaNetworkWired },
    ],
    rightTechs: [
      { name: 'HTTP / HTTPS', icon: FaGlobe },
      { name: 'SSL / TLS', icon: FaLock },
      { name: 'Bezpieczeństwo WWW', icon: FaShieldAlt },
    ],
  },
];

function GlitchBox({ children, isGlitching, className = '' }) {
  return (
    <div className={`glitch-unit ${isGlitching ? 'is-glitching' : ''} ${className}`}>
      <div className="glitch-layer glitch-base">{children}</div>
      <div className="glitch-layer glitch-cyan" aria-hidden="true">
        {children}
      </div>
      <div className="glitch-layer glitch-magenta" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [displayedStep, setDisplayedStep] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const step = Math.min(SLIDES.length - 1, Math.floor(latest * SLIDES.length));
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  useEffect(() => {
    setIsGlitching(true);

    const swapTimer = setTimeout(() => {
      setDisplayedStep(activeStep);
    }, 160);

    const endTimer = setTimeout(() => {
      setIsGlitching(false);
    }, 380);

    return () => {
      clearTimeout(swapTimer);
      clearTimeout(endTimer);
    };
  }, [activeStep]);

  const currentSlide = SLIDES[displayedStep];
  const MainIcon = currentSlide.mainIcon;

  return (
    <section ref={containerRef} className="skills-scrolly" id="skills-section">
      <div className="skills-sticky">
        <div className="skills-header-slot">
          <Header maintext={'Umiejętności'} smalltext={'Technologie x narzędzia'} />
        </div>

        <div className={`skills-orbit-stage ${currentSlide.themeClass}`}>
          <div className="skills-rings" aria-hidden="true">
            <div className="skills-ring1" />
            <div className="skills-ring2" />
          </div>

          <div
            className={`skills-arc skills-arc-left ${
              currentSlide.leftTechs.length < 3 ? 'skills-arc-compact' : ''
            } ${currentSlide.leftTechs.length === 4 ? 'skills-arc-four' : ''}`}
          >
            {currentSlide.leftTechs.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={`${displayedStep}-left-${tech.name}-${idx}`}
                  className={`skills-arc-item arc-pos-${idx}`}
                >
                  <div className={`tech-levitate levitate-delay-${idx}`}>
                    <GlitchBox isGlitching={isGlitching} className="tech-glitch-unit">
                      <div className="tech-node">
                        <TechIcon className="tech-icon" />
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    </GlitchBox>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-center-slot">
            <GlitchBox isGlitching={isGlitching} className="main-glitch-unit">
              <div className="main-node">
                <span className="main-counter">
                  {currentSlide.index} / 0{SLIDES.length}
                </span>
                <MainIcon className="main-icon" />
                <span className="main-label">{currentSlide.label}</span>
              </div>
            </GlitchBox>
          </div>

          <div
            className={`skills-arc skills-arc-right ${
              currentSlide.rightTechs.length < 3 ? 'skills-arc-compact' : ''
            } ${currentSlide.rightTechs.length === 4 ? 'skills-arc-four' : ''}`}
          >
            {currentSlide.rightTechs.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={`${displayedStep}-right-${tech.name}-${idx}`}
                  className={`skills-arc-item arc-pos-${idx}`}
                >
                  <div className={`tech-levitate levitate-delay-${idx + 3}`}>
                    <GlitchBox isGlitching={isGlitching} className="tech-glitch-unit">
                      <div className="tech-node">
                        <TechIcon className="tech-icon" />
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    </GlitchBox>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}