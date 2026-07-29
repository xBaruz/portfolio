import React, { useState } from 'react';
import "./About.css";
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaTimes, FaCertificate } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useLanguage } from '../../context/LanguageContext';

const ModelViewer = 'model-viewer' as any;

const cert1Thumb = new URL('../../assets/cert1.png', import.meta.url).href;
const dyp1Thumb = new URL('../../assets/dyp1.png', import.meta.url).href;
const cert2Thumb = new URL('../../assets/networksecurity.jpg', import.meta.url).href;

interface AboutProps {
  setModelLoaded: () => void;
}

const About: React.FC<AboutProps> = ({ setModelLoaded }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isShining, setIsShining] = useState<boolean>(false);
  const [sectionRef, isVisible] = useIntersectionObserver();
  const { language, t } = useLanguage();

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

  const formatAge = (age: number): string => {
    if (language === 'en') {
      return `${age} years old`;
    }

    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;
    const suffix = lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
      ? 'lata'
      : 'lat';

    return `${age} ${suffix}`;
  };

  const age = calculateAge("2002-07-11");

  return (
    <section className="about-section" id="about-section">
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
              <FaCertificate /> {t('about.certificates')}
            </h4>
            <div className="certificates-grid">
              <div className="cert-card" onClick={() => setActiveImage(cert1Thumb)}>
                <div className="cert-img-wrapper">
                  <img src={cert1Thumb} alt={t('about.vocationalDiploma')} />
                </div>
                <span>{t('about.vocationalDiploma')}</span>
              </div>
              <div className="cert-card" onClick={() => setActiveImage(dyp1Thumb)}>
                <div className="cert-img-wrapper">
                  <img src={dyp1Thumb} alt={t('about.engineerDiploma')} />
                </div>
                <span>{t('about.engineerDiploma')}</span>
              </div>
              <div className="cert-card" onClick={() => setActiveImage(cert2Thumb)}>
                <div className="cert-img-wrapper">
                  <img src={cert2Thumb} alt={t('about.ciscoCertificate')} />
                </div>
                <span>{t('about.ciscoCertificate')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-title">{t('about.title')}</h2>

          <div className="profile-header">
            <h3>Bartłomiej Mazurkiewicz</h3>
            <p className="profile-tagline">{t('about.tagline')}</p>
          </div>

          <p className="profile-description">
            {t('about.description')}
          </p>

          <div className="info-grid">
            <div className="info-item">
              <FaCalendarAlt className="info-icon" />
              <div>
                <span className="info-label">{t('about.age')}</span>
                <span className="info-value">{formatAge(age)}</span>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <span className="info-label">{t('about.location')}</span>
                <span className="info-value">{t('about.locationValue')}</span>
              </div>
            </div>

            <div className="info-item">
              <FaBriefcase className="info-icon" />
              <div>
                <span className="info-label">{t('about.status')}</span>
                <span className="info-value">{t('about.student')}</span>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h4 className="education-title">
              <FaGraduationCap /> {t('about.education')}
            </h4>

            <div className="timeline">
              <div className="timeline-item active">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2026 - {t('about.present')}</div>
                <div className="timeline-content">
                  <h5>{t('about.university')}</h5>
                  <h6>{t('about.master')}</h6>
                  <p>{t('about.masterSpecialization')}</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - 2026</div>
                <div className="timeline-content">
                  <h5>{t('about.university')}</h5>
                  <h6>{t('about.bachelor')}</h6>
                  <p>{t('about.bachelorSpecialization')}</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2018 - 2022</div>
                <div className="timeline-content">
                  <h5>{t('about.technicalSchool')}</h5>
                  <p>{t('about.technicalSchoolName')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeImage && (
        <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label={t('about.close')}
          >
            <FaTimes />
          </button>
          <img
            src={activeImage}
            alt={t('about.enlargedCertificate')}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default About;
