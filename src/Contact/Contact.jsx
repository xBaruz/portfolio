import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaPen,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const showNotification = (type, message) => {
        setNotification({
            type,
            message,
        });

        setTimeout(() => {
            setNotification(null);
        }, 4000);
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true);
        setNotification(null);

        try {
            const serviceId =
                import.meta.env.VITE_EMAILJS_SERVICE_ID;

            const templateId =
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            const publicKey =
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("Brak konfiguracji EmailJS");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_email: formData.email,
                    reply_to: formData.email,
                    message: formData.message,
                },
                {
                    publicKey,
                }
            );

            setFormData({
                email: "",
                message: "",
            });

            showNotification(
                "success",
                "Wiadomość została wysłana."
            );
        } catch (error) {
            console.error("EmailJS error:", error);

            showNotification(
                "error",
                "Nie udało się wysłać wiadomości. Spróbuj ponownie."
            );
        } finally {
            setIsSending(false);
        }
    };


    return (
        <section className="contact" id="kontakt">
            {notification && (
                <div
                    className={`contact-notification ${notification.type}`}
                >
                    <span className="contact-notification-icon">
                        {notification.type === "success" ? (
                            <FaCheckCircle />
                        ) : (
                            <FaExclamationCircle />
                        )}
                    </span>

                    <span>
                        {notification.message}
                    </span>
                </div>
            )}

            <div className="contact-heading">
                <span>KONTAKT</span>

                <h2>
                    Porozmawiajmy<span>.</span>
                </h2>

                <p>
                    Masz pomysł, projekt albo pytanie?
                    Napisz do mnie.
                </p>
            </div>

            <div className="contact-layout">
                <form
                    className="contact-form-card"
                    onSubmit={handleSubmit}
                >
                    <div className="contact-form-heading">
                        <h3>
                            Wyślij <span>e-mail</span>
                        </h3>
                    </div>

                    <div className="contact-field">
                        <span className="contact-field-icon">
                            <FaEnvelope />
                        </span>

                        <input
                            type="email"
                            name="email"
                            placeholder="Twój e-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSending}
                        />
                    </div>

                    <div className="contact-field contact-field-message">
                        <span className="contact-field-icon">
                            <FaPen />
                        </span>

                        <textarea
                            name="message"
                            placeholder="Wiadomość"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSending}
                        />
                    </div>

                    <button
                        type="submit"
                        className="main-styled contact-submit"
                        disabled={isSending}
                    >
                        <span>
                            {isSending
                                ? "Wysyłanie..."
                                : "Wyślij wiadomość"}
                        </span>

                        <FaPaperPlane />
                    </button>
                </form>

                <div className="contact-side-grid">
                    <div className="contact-code-card">
                        <div className="contact-code-art">
                            <div className="code-line code-line-1"></div>
                            <div className="code-line code-line-2"></div>
                            <div className="code-line code-line-3"></div>
                            <div className="code-line code-line-4"></div>
                            <div className="code-line code-line-5"></div>
                            <div className="code-line code-line-6"></div>
                            <div className="code-line code-line-7"></div>
                        </div>
                    </div>

                    <div className="contact-info-card contact-message-card">
                        <h3>
                            Skontaktuj <span>się</span>
                        </h3>
                    </div>

                    <a
                        href="mailto:mazurek321.93@wp.pl"
                        className="contact-info-card contact-social-card contact-email-card"
                    >
                        <div className="contact-social-icon">
                            <FaEnvelope />
                        </div>

                        <span className="contact-social-label">
                            EMAIL
                        </span>

                        <strong>
                            mazurek321.93@wp.pl
                        </strong>
                    </a>

                    <a
                        href="https://github.com/xBaruz"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-info-card contact-social-card"
                    >
                        <div className="contact-social-icon">
                            <FaGithub />
                        </div>

                        <span className="contact-social-label">
                            GITHUB
                        </span>

                        <strong>
                            xbaruz
                        </strong>
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-info-card contact-social-card"
                    >
                        <div className="contact-social-icon">
                            <FaLinkedin />
                        </div>

                        <span className="contact-social-label">
                            LINKEDIN
                        </span>

                        <strong>
                            xbaruz
                        </strong>
                    </a>

                    <div className="contact-planet-card">
                        <div className="contact-planet">
                            <span className="planet-core"></span>
                            <span className="planet-ring"></span>
                            <span className="planet-glow"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;