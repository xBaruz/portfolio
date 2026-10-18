import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";

import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaPython,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTypescript,
    SiDotnet,
    SiPostgresql,
    SiMysql,
    SiDocker,
    SiNextdotjs
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaServer } from "react-icons/fa";


const allSkills = [
    { name: "React", icon: <FaReact color="#61DAFB" style={{ filter: 'drop-shadow(0 0 8px rgba(97, 218, 251, 0.6))' }} />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' }} />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" style={{ filter: 'drop-shadow(0 0 8px rgba(49, 120, 198, 0.6))' }} />, category: "Frontend" },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" style={{ filter: 'drop-shadow(0 0 8px rgba(247, 223, 30, 0.6))' }} />, category: "Frontend" },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" style={{ filter: 'drop-shadow(0 0 8px rgba(227, 79, 38, 0.6))' }} />, category: "Frontend" },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" style={{ filter: 'drop-shadow(0 0 8px rgba(21, 114, 182, 0.6))' }} />, category: "Frontend" },

    { name: "C#", icon: <TbBrandCSharp color="#C586C0" style={{ filter: 'drop-shadow(0 0 8px rgba(35, 145, 32, 0.6))' }} />, category: "Backend" },
    { name: ".NET", icon: <SiDotnet color="#512BD4" style={{ filter: 'drop-shadow(0 0 8px rgba(81, 43, 212, 0.6))' }} />, category: "Backend" },
    {
        name: "ASP.NET Core",
        icon: (
            <i
                className="devicon-dotnetcore-plain"
                style={{
                    color: "#512BD4",
                    fontSize: "45px",
                }}
            />
        ),
        category: "Backend"
    },
    { name: "Python", icon: <FaPython color="#3776AB" style={{ filter: 'drop-shadow(0 0 8px rgba(55, 118, 171, 0.6))' }} />, category: "Backend" },

    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" style={{ filter: 'drop-shadow(0 0 8px rgba(51, 103, 145, 0.6))' }} />, category: "Backend" },
    { name: "MySQL", icon: <SiMysql color="#4479A1" style={{ filter: 'drop-shadow(0 0 8px rgba(68, 121, 161, 0.6))' }} />, category: "Backend" },

    { name: "Git", icon: <FaGitAlt color="#F05032" style={{ filter: 'drop-shadow(0 0 8px rgba(240, 80, 50, 0.6))' }} />, category: "Devops" },
    { name: "GitHub", icon: <FaGithub color="#FFFFFF" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' }} />, category: "Devops" },
    { name: "Docker", icon: <SiDocker color="#2496ED" style={{ filter: 'drop-shadow(0 0 8px rgba(36, 150, 237, 0.6))' }} />, category: "Devops" },
];

const categories = ["Wszystko", "Frontend", "Backend", "Devops"];

const Skills = () => {
    const [rotation, setRotation] = useState(0);
    const [activeTab, setActiveTab] = useState("Wszystko");

    const rotationRef = useRef(0);
    const requestRef = useRef<number | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const dragVelocity = useRef(0);

    useEffect(() => {
        const animate = () => {
            if (!isDragging.current) {
                dragVelocity.current *= 0.95;
                rotationRef.current -= 0.001 + dragVelocity.current;
            }

            setRotation(rotationRef.current);

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current !== null) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    const handlePointerDown = (
        e: React.MouseEvent<HTMLDivElement> |
        React.TouchEvent<HTMLDivElement>
    ) => {
        isDragging.current = true;

        if ("touches" in e) {
            startX.current = e.touches[0].clientX;
        } else {
            startX.current = e.clientX;
        }

        dragVelocity.current = 0;
    };

    const handlePointerMove = (
        e: React.MouseEvent<HTMLDivElement> |
        React.TouchEvent<HTMLDivElement>
    ) => {
        if (!isDragging.current) return;

        let currentX = 0;

        if ("touches" in e) {
            currentX = e.touches[0].clientX;
        } else {
            currentX = e.clientX;
        }

        const diff = currentX - startX.current;
        const moveAmount = diff * 0.005;

        rotationRef.current -= moveAmount;
        dragVelocity.current = moveAmount * 0.1;

        startX.current = currentX;
    };

    const handlePointerUp = () => {
        isDragging.current = false;
    };

    const filteredSkills =
        activeTab === "Wszystko"
            ? allSkills
            : allSkills.filter(
                (skill) =>
                    skill.category === activeTab
            );

    return (
        <section
            className="skills-container"
            id="umiejetnosci"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
        >
            <div className="skills-header">
                <h4 className="skills-pretitle">
                    TECHNOLOGIE × NARZĘDZIA × MOJE UMIEJĘTNOŚCI
                </h4>

                <h2 className="skills-title">
                    Umiejętności
                </h2>

                <p className="skills-subtitle">
                    Technologie, które pozwalają mi zamieniać pomysły
                    <br />
                    w realne produkty.
                </p>

                <div className="skills-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`tab-btn ${
                                activeTab === cat
                                    ? "active"
                                    : ""
                            }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveTab(cat);
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="skills-bg-container">
                <div className="stars-particles"></div>

                <div className="stage-3d">
                    <div className="ring ring-inner-dashed"></div>
                    <div className="ring ring-main"></div>
                    <div className="ring ring-outer-1"></div>
                    <div className="ring ring-outer-2"></div>
                    <div className="stage-floor-glow"></div>
                </div>

                <div className="skills-orbit">
                    {filteredSkills.map((skill, index) => {
                        const angle =
                            rotation +
                            (index / filteredSkills.length) *
                                Math.PI *
                                2;

                        const x = 50 + Math.cos(angle) * 38;
                        const y = 53 + Math.sin(angle) * 31;

                        const depth =
                            (Math.sin(angle) + 1) / 2;

                        const scale =
                            0.28 +
                            depth * 0.65;

                        const zIndex =
                            Math.round(
                                10 +
                                depth * 100
                            );

                        const blur =
                            Math.max(
                                0,
                                (1 - depth) * 3 - 0.4
                            );

                        const opacity =
                            0.5 +
                            depth * 0.9;

                        return (
                            <div
                                key={skill.name}
                                className="tech-box-3d"
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: `translate(-50%, -50%) scale(${scale})`,
                                    zIndex,
                                    opacity,
                                    filter: `blur(${blur}px) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.75))`
                                }}
                            >
                                <div 
                                    className="tech-box-wrapper"
                                    style={{ animationDelay: `${index * -0.7}s` }}
                                >
                                    <div className="tech-box-face">
                                        <div className="tech-box-inner-glow"></div>

                                        <div className="tech-logo-wrap">
                                            {skill.icon}
                                        </div>

                                        <span className="tech-label">
                                            {skill.name}
                                        </span>
                                    </div>

                                    <div className="tech-box-left"></div>
                                    <div className="tech-box-bottom"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="floor-reflection"></div>
                <div className="horizon-flare"></div>
            </div>
        </section>
    );
};

export default Skills;