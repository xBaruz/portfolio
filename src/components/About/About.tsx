import React, { useState } from 'react';
import "./About.css";
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaTimes, FaCertificate } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ModelViewer = 'model-viewer' as any;

const cert1Thumb = new URL('../../assets/cert1.png', import.meta.url).href;
const dyp1Thumb = new URL('../../assets/dyp1.png', import.meta.url).href;

interface AboutProps {
  setModelLoaded: () => void;
}

const About: React.FC<AboutProps> = ({ setModelLoaded }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isShining, setIsShining] = useState<boolean>(false);
  const [sectionRef, isVisible] = useIntersectionObserver();

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
  };

  return (
    <section className='about-section' id="about-section">
        <div 
          className={`about-container reveal-section ${isVisible ? 'animate-reveal' : ''}`}
          ref={sectionRef}
        >
            <div className="left-column">
                <div className="personal-info">
                    <div 
                        className="frame"
                        onMouseEnter={() => !isShining && setIsShining(true)}
                    >
                        <ModelViewer 
                            src={`${import.meta.env.BASE_URL}modelEmpty.glb`}
                            interaction-prompt="none"
                            camera-orbit="0deg 75deg 105%"
                            crossorigin="anonymous"
                            loading="eager"
                            reveal="auto"
                            onload={() => setModelLoaded()}
                        >
                            <div className="model-icon-slot">
                                <div className="neon-user-icon">
                                  <FaUser />
                                </div>
                            </div>
                            <div 
                                className={`shine-overlay ${isShining ? 'animate-shine' : ''}`}
                                onAnimationEnd={() => setIsShining(false)}
                            ></div>
                        </ModelViewer>
                    </div>
                </div>

                <div className="certificates-section">
                    <h4 className="certificates-title">
                        <FaCertificate /> Certyfikaty i dyplomy
                    </h4>
                    <div className="certificates-grid">
                        <div className="cert-card" onClick={() => setActiveImage(cert1Thumb)}>
                            <div className="cert-img-wrapper">
                                <img src={cert1Thumb} alt="Dyplom kwalifikacji zawodowych" />
                            </div>
                            <span>Dyplom kwalifikacji zawodowych</span>
                        </div>
                        <div className="cert-card" onClick={() => setActiveImage(dyp1Thumb)}>
                            <div className="cert-img-wrapper">
                                <img src={dyp1Thumb} alt="Dyplom Inżyniera" />
                            </div>
                            <span>Dyplom Inżyniera</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <h2 className="about-title">O mnie</h2>
                
                <div className="profile-header">
                    <h3>Bartłomiej Mazurkiewicz</h3>
                    <p className="profile-tagline">Student Informatyki</p>
                </div>

                <p className="profile-description">
                    Jestem studentem informatyki II stopnia na Politechnice Rzeszowskiej. Moje wykształcenie obejmuje tytuł inżyniera w zakresie inżynierii oprogramowania, a obecna specjalizacja koncentruje się na cyberbezpieczeństwie.
                </p>

                <div className="info-grid">
                    <div className="info-item">
                        <FaCalendarAlt className="info-icon" />
                        <div>
                            <span className="info-label">Wiek</span>
                            <span className="info-value">{calculateAge("2002-07-11")} lata</span>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <div>
                            <span className="info-label">Zamieszkanie</span>
                            <span className="info-value">Rzeszów / Polska</span>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaBriefcase className="info-icon" />
                        <div>
                            <span className="info-label">Status</span>
                            <span className="info-value">Student</span>
                        </div>
                    </div>
                </div>

                <div className="education-section">
                    <h4 className="education-title">
                        <FaGraduationCap /> Wykształcenie
                    </h4>
                    
                    <div className="timeline">
                        <div className="timeline-item active">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2026 - obecnie</div>
                            <div className="timeline-content">
                                <h5>Politechnika Rzeszowska im. Ignacego Łukasiewicza</h5>
                                <h6>Studia II stopnia (Magisterskie) — Informatyka</h6>
                                <p>Specjalizacja: Cyberbezpieczeństwo</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2022 - 2026</div>
                            <div className="timeline-content">
                                <h5>Politechnika Rzeszowska im. Ignacego Łukasiewicza</h5>
                                <h6>Studia I stopnia (Inżynierskie) — Informatyka</h6>
                                <p>Specjalizacja: Inżynieria Oprogramowania</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2018 - 2022</div>
                            <div className="timeline-content">
                                <h5>Technikum Informatyczne</h5>
                                <p>Zespół Szkół Technicznych im. Tadeusza Kościuszki w Leżajsku</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {activeImage && (
            <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
                <button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Zamknij">
                    <FaTimes />
                </button>
                <img src={activeImage} alt="Powiększony certyfikat" onClick={(e) => e.stopPropagation()} />
            </div>
        )}
    </section>
  );
};

export default About;