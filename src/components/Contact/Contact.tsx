import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from "@emailjs/browser";
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useLanguage } from '../../context/LanguageContext'
import "./Contact.css"

interface FormData {
  email: string;
  message: string;
  honeypot: string;
}

type StatusType = 'required' | 'success' | 'error' | null;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<StatusType>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionRef, isVisible] = useIntersectionObserver();
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanEmail || !cleanMessage) {
      setStatus('required');
      return;
    }

    setIsLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    const templateParams = {
      email: cleanEmail,
      message: cleanMessage,
      to_name: "Portfolio",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ email: "", message: "", honeypot: "" });
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
        window.setTimeout(() => setStatus(null), 5000);
      });
  };

  const statusText = status === 'required'
    ? t('contact.required')
    : status === 'success'
      ? t('contact.success')
      : status === 'error'
        ? t('contact.error')
        : '';

  return (
    <section className="contact-section" id="contact-section">
      <div
        className={`reveal-section ${isVisible ? 'animate-reveal' : ''}`}
        ref={sectionRef}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2 className="skills-title">{t('contact.title')}</h2>

        <div className="contact-container">
          <div className="contact-form-card">
            <h2>{t('contact.formTitle')}</h2>
            <form className="contact-form" onSubmit={handleManualSubmit}>
              <input
                type="text"
                name="honeypot"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: 'none' }}
                value={formData.honeypot}
                onChange={handleChange}
              />
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="main-styled" disabled={isLoading}>
                {isLoading ? t('contact.sending') : t('contact.send')}
              </button>
              {statusText && (
                <p className={`status-message ${status === 'success' ? 'success' : 'error'}`}>
                  {statusText}
                </p>
              )}
            </form>
          </div>

          <div className="contact-info-grid">
            <div className="grid-card image-card image-hide-mobile">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600"
                alt={t('contact.codeAlt')}
              />
            </div>
            <div className="grid-card title-card">
              <h3>{t('contact.getInTouch')}</h3>
            </div>
            <a href="mailto:mazurek321.93@wp.pl" className="grid-card info-card">
              <div className="icon"><FaEnvelope /></div>
              <span className="label">Email</span>
              <span className="value">mazurek321.93@wp.pl</span>
            </a>
            <a href="https://github.com/xbaruz" target="_blank" rel="noopener noreferrer" className="grid-card info-card">
              <div className="icon"><FaGithub /></div>
              <span className="label">GitHub</span>
              <span className="value">xbaruz</span>
            </a>
            <a href="https://linkedin.com/in/xbaruz" target="_blank" rel="noopener noreferrer" className="grid-card info-card">
              <div className="icon"><FaLinkedin /></div>
              <span className="label">LinkedIn</span>
              <span className="value">xbaruz</span>
            </a>
            <div className="grid-card image-card image-hide-mobile">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600"
                alt={t('contact.earthAlt')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
