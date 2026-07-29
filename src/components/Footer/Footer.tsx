import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Bartłomiej Mazurkiewicz</h3>
          </div>

          <div className="footer-socials">
            <a href="mailto:mazurek321.93@wp.pl" className="social-link" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/xbaruz" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/xbaruz" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Bartłomiej Mazurkiewicz.
          </p>
          <button className="scroll-to-top" onClick={scrollToTop} title={t('footer.toTop')} aria-label={t('footer.toTop')}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
