import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import "./Navbar.css";
import "./LanguageToggle.css";

interface NavbarProps {
  loading: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ loading, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = (): void => {
    setIsOpen((current) => !current);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToTop = (): void => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar ${loading ? 'loading' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="nav-left">
        <span onClick={scrollToTop} style={{ cursor: 'pointer' }}>Bartłomiej Mazurkiewicz</span>
      </div>

      <div className={`nav-right ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#about-section" onClick={(e) => handleScroll(e, 'about-section')}>{t('nav.about')}</a>
          </li>
          <li>
            <a href="#skills-section" onClick={(e) => handleScroll(e, 'skills-section')}>{t('nav.skills')}</a>
          </li>
          <li>
            <a href="#projects-section" onClick={(e) => handleScroll(e, 'projects-section')}>{t('nav.projects')}</a>
          </li>
          <li>
            <a href="#contact-section" onClick={(e) => handleScroll(e, 'contact-section')}>{t('nav.contact')}</a>
          </li>
          <li>
            <button
              type="button"
              className="language-toggle-btn"
              onClick={toggleLanguage}
              aria-label={language === 'pl' ? t('nav.switchToEnglish') : t('nav.switchToPolish')}
              title={language === 'pl' ? t('nav.switchToEnglish') : t('nav.switchToPolish')}
            >
              <span className={language === 'pl' ? 'active' : ''}>PL</span>
              <span className="language-toggle-separator">/</span>
              <span className={language === 'en' ? 'active' : ''}>EN</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDarkMode ? t('nav.lightTheme') : t('nav.darkTheme')}
              title={isDarkMode ? t('nav.lightTheme') : t('nav.darkTheme')}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>

      <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
