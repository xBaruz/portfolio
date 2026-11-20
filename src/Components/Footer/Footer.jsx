import React from "react";
import "./Footer.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <h2 className="footer-logo">Barłomiej Mazurkiewicz</h2>
                    <div className="footer-socials">
                        <a
                            href="mailto:mazurek321.93@wp.pl"
                            className="footer-icon-btn"
                            aria-label="Wyślij e-mail"
                        >
                            <FaEnvelope aria-hidden="true" />
                        </a>
                        <a
                            href="https://github.com/xBaruz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-icon-btn"
                            aria-label="Profil GitHub"
                        >
                            <FaGithub aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-icon-btn"
                            aria-label="Profil LinkedIn"
                        >
                            <FaLinkedin aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="footer-divider" role="separator" />

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {currentYear} Barłomiej Mazurkiewicz
                    </p>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="footer-scroll-top"
                        aria-label="Przewiń do góry"
                    >
                        <FaArrowUp aria-hidden="true" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;