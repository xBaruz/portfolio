import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MdOutlineMail,
  MdSend,
  MdCheckCircle,
  MdErrorOutline,
  MdLocationOn,
  MdContentCopy,
  MdCheck,
} from "react-icons/md";
import { FaPaperPlane, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Contact.css";
import Header from "../Header/Header";

function GlitchIcon({ children, isGlitching }) {
  return (
    <div className="contact-levitate">
      <div className={`contact-glitch ${isGlitching ? "is-glitching" : ""}`}>
        <div className="glitch-layer glitch-base">{children}</div>
        <div className="glitch-layer glitch-cyan" aria-hidden="true">
          {children}
        </div>
        <div className="glitch-layer glitch-magenta" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CONTACT_EMAIL = "mazurek321.93@wp.pl";

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showPlaneIcon, setShowPlaneIcon] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let swapTimer;
    let endTimer;

    const runCycle = () => {
      setIsGlitching(true);

      swapTimer = setTimeout(() => {
        setShowPlaneIcon((prev) => !prev);
      }, 160);

      endTimer = setTimeout(() => {
        setIsGlitching(false);
      }, 380);
    };

    const initialTimer = setTimeout(runCycle, 1200);
    const interval = setInterval(runCycle, 4200);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      clearTimeout(swapTimer);
      clearTimeout(endTimer);
    };
  }, [isVisible]);

  const showStatus = (type, text) => {
    setStatus({ type, text });
    if (type === "success") {
      setTimeout(() => {
        setStatus(null);
      }, 4000);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status?.type === "error") {
      setStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      showStatus("error", "Podaj poprawny adres e-mail.");
      return;
    }

    if (!trimmedSubject) {
      showStatus("error", "Podaj temat wiadomości.");
      return;
    }

    if (!trimmedMessage) {
      showStatus("error", "Wpisz treść wiadomości.");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Brak konfiguracji EmailJS");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmedEmail,
          email: trimmedEmail,
          subject: trimmedSubject,
          title: trimmedSubject,
          message: trimmedMessage,
        },
        {
          publicKey,
        }
      );

      setFormData({
        email: "",
        subject: "",
        message: "",
      });

      showStatus("success", "Wiadomość została wysłana.");
    } catch (error) {
      console.error("EmailJS error:", error);
      showStatus("error", "Nie udało się wysłać wiadomości. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ActiveIcon = showPlaneIcon ? FaPaperPlane : MdOutlineMail;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`contact-section ${isVisible ? "is-in-view" : ""}`}
    >
      <div className="contact-bg-snakes" aria-hidden="true">
        <svg
          className="contact-bg-svg"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="bgSnakeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="bgSnakeGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="55%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <path
            d="M -120 430 C 220 180, 480 610, 820 350 C 1100 135, 1320 440, 1560 250"
            className="bg-snake-track"
          />
          <path
            d="M -120 430 C 220 180, 480 610, 820 350 C 1100 135, 1320 440, 1560 250"
            pathLength="100"
            stroke="url(#bgSnakeGrad1)"
            className="bg-snake-beam bg-snake-1"
          />

          <path
            d="M 1560 510 C 1220 670, 940 240, 620 470 C 340 670, 120 320, -120 520"
            className="bg-snake-track"
          />
          <path
            d="M 1560 510 C 1220 670, 940 240, 620 470 C 340 670, 120 320, -120 520"
            pathLength="100"
            stroke="url(#bgSnakeGrad2)"
            className="bg-snake-beam bg-snake-2"
          />
        </svg>
      </div>

      <div className="contact-wrapper">
        <Header maintext={"Kontakt"} smalltext={"Wyślij wiadomość"} />

        <div className="container">
          <div className="left">
            <GlitchIcon isGlitching={isGlitching}>
              <div className={`contact-icon-holder ${showPlaneIcon ? "is-plane" : "is-mail"}`}>
                <ActiveIcon className="contact-main-icon" />
              </div>
            </GlitchIcon>

            <button
              type="button"
              className="contact-email-btn"
              onClick={handleCopyEmail}
              title="Skopiuj adres e-mail"
            >
              <span>{copied ? "Skopiowano do schowka" : CONTACT_EMAIL}</span>
              {copied ? <MdCheck className="copy-icon is-ok" /> : <MdContentCopy className="copy-icon" />}
            </button>

            <span className="contact-meta-location">
              <MdLocationOn />
              Rzeszów, Polska
            </span>

            <ul className="contact-socials">
              <li>
                <a href="https://github.com/xbaruz" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/xbaruz" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/xbaruz" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>

          <div className="right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="twoj@email.pl"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Temat</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Temat wiadomości"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Treść wiadomości..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}</span>
                <MdSend className="btn-icon" aria-hidden="true" />
              </button>

              {status && (
                <div className={`form-status status-${status.type}`} role="status">
                  {status.type === "success" && <MdCheckCircle className="status-icon" />}
                  {status.type === "error" && <MdErrorOutline className="status-icon" />}
                  <span>{status.text}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;