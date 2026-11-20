import React from 'react';
import "./Education.css";
import Header from "../Header/Header";
import { FaGraduationCap, FaShieldAlt, FaAward } from "react-icons/fa";

const Education = () => {
    const items = [
        {
            id: 1,
            header: "Dyplom zawodowy",
            description: "Dyplom potwierdzający kwalifikacje zawodowe w kierunku technik informatyk.",
            icon: <FaGraduationCap />
        },
        {
            id: 2,
            header: "Dyplom inżyniera",
            description: "Dyplom ukończenia studiów I stopnia na kierunku Informatyka (specjalizacja: Inżynieria oprogramowania)",
            icon: <FaGraduationCap />
        },
        {
            id: 3,
            header: "Cisco Network Security",
            description: "Certyfikat Cisco potwierdzający ukończenie kursu Network Security.",
            icon: <FaShieldAlt />
        }
    ];

    return (
        <section id="education-section">
            <Header maintext={"Edukacja"} smalltext={"Dyplomy i certyfikaty"} />
            
            <div className="education-grid">
                {items.map((item) => (
                    <div className="education-card" key={item.id}>
                        <div className="education-glow"></div>
                        
                        <div className="education-icon-box">
                            {item.icon}
                        </div>

                        <h3 className="education-title">{item.header}</h3>
                        <p className="education-desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;