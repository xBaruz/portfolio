import React from "react";
import img from "../assets/img2.png";
import "./About.css";

import { FaCertificate } from "react-icons/fa";

const About = () => {
    const birthDate = "2002-07-11";

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);

        let age = today.getFullYear() - birth.getFullYear();

        const monthDiff = today.getMonth() - birth.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            age--;
        }

        return age;
    };

    const certificates = [
        {
            title: "Dyplom zawodowy",
            description: "Dyplom potwierdzający kwalifikacje zawodowe w kierunku technik informatyk."
        },
        {
            title: "Dyplom inżyniera",
            description: "Dyplom ukończenia studiów I stopnia na kierunku Informatyka."
        },
        {
            title: "Cisco Network Security",
            description: "Certyfikat Cisco potwierdzający ukończenie kursu Network Security."
        }
    ];

    const leftItems = [
        {
            label: "Imię i nazwisko",
            value: "Bartłomiej Mazurkiewicz",
            subValue: `${calculateAge(birthDate)} lat`,
        },
        {
            label: "Miejsce zamieszkania",
            value: "Rzeszów, Polska",
        },
        {
            label: "Status",
            value: "Student",
        },
    ];

    const rightItems = [
        {
            label: "Studia II stopnia (obecnie)",
            value: "Informatyka",
            specialization: "Specjalizacja: Cyberbezpieczeństwo",
        },
        {
            label: "Studia I stopnia",
            value: "Informatyka",
            specialization: "Specjalizacja: Inżynieria oprogramowania",
        },
        {
            label: "Technikum",
            value: "Technik informatyk",
        }
    ];

    return (
        <section className="about" id="o-mnie">
            <div className="about-decor">
                <span className="background-word">ABOUT</span>
                <span className="orbit orbit-1"></span>
                <span className="orbit orbit-2"></span>

                <span className="light-line light-line-1"></span>
                <span className="light-line light-line-2"></span>
            </div>

            <div className="about-bg-elements">
                <span className="floating-element floating-element-1"></span>
                <span className="floating-element floating-element-2"></span>
                <span className="floating-element floating-element-3"></span>

                <span className="about-star about-star-1"></span>
                <span className="about-star about-star-2"></span>
                <span className="about-star about-star-3"></span>
                <span className="about-star about-star-4"></span>
                <span className="about-star about-star-5"></span>
            </div>

            <div className="section-title">
                <span>POZNAJ MNIE</span>
                <h2>O mnie</h2>
                <div className="title-line"></div>
            </div>

            <div className="about-main">
                <div className="left">
                    {leftItems.map((item, index) => (
                        <div className="about-item" key={index}>
                            <span className="label">
                                {item.label}
                            </span>

                            <h3>
                                {item.value}
                            </h3>

                            {item.subValue && (
                                <p className="sub-value">
                                    {item.subValue}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="image">
                    <img
                        src={img}
                        alt="Bartłomiej Mazurkiewicz"
                    />
                </div>

                <div className="right">
                    {rightItems.map((item, index) => (
                        <div className="about-item" key={index}>
                            <span className="label">
                                {item.label}
                            </span>

                            <h3>
                                {item.value}
                            </h3>

                            {item.specialization && (
                                <p className="specialization">
                                    {item.specialization}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="certificates-section">
                <div className="certificates-heading">
                    <span>EDUKACJA I ROZWÓJ</span>

                    <h2>
                        Dyplomy i certyfikaty
                    </h2>

                    <div className="certificates-line"></div>
                </div>

                <div className="certificates-grid">
                    {certificates.map((item, index) => (
                        <div
                            className="certificate-card"
                            key={index}
                        >
                            <div className="certificate-icon">
                                <FaCertificate />
                            </div>

                            <h3>
                                {item.title}
                            </h3>
                            <p className="certificate-description">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;