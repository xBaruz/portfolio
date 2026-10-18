
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const navItems = [
    { id: "glowna", label: "Główna" },
    { id: "o-mnie", label: "O mnie" },
    { id: "umiejetnosci", label: "Umiejętności" },
    { id: "projekty", label: "Projekty" },
    { id: "kontakt", label: "Kontakt" }
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("glowna");

    useEffect(() => {
        if (location.pathname !== "/") return;

        const id = decodeURIComponent(
            location.hash.replace("#", "")
        );

        if (!id) return;

        let frameId;
        let attempts = 0;

        const scrollToSection = () => {
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                setActiveSection(id);
            } else if (attempts < 30) {
                attempts++;
                frameId = requestAnimationFrame(scrollToSection);
            }
        };

        frameId = requestAnimationFrame(scrollToSection);

        return () => cancelAnimationFrame(frameId);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        if (location.pathname !== "/") return;

        const handleScroll = () => {
            const marker = window.innerHeight * 0.35;

            const sections = navItems
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);

            let currentSection = null;

            for (const section of sections) {
                const rect = section.getBoundingClientRect();

                if (rect.top <= marker && rect.bottom >= marker) {
                    currentSection = section.id;
                    break;
                }
            }

            if (!currentSection && sections.length > 0) {
                let closestSection = sections[0];
                let closestDistance = Infinity;

                sections.forEach((section) => {
                    const rect = section.getBoundingClientRect();
                    const distance = Math.abs(rect.top - marker);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = section;
                    }
                });

                currentSection = closestSection.id;
            }

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [location.pathname]);

    const handleNavClick = (e, id) => {
        e.preventDefault();

        setIsOpen(false);
        setActiveSection(id);

        if (location.pathname !== "/") {
            navigate(`/#${id}`);
            return;
        }

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        navigate(`/#${id}`, { replace: true });
    };

    return (
        <nav className="navbar">
            <button
                className="menu-toggle"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={isOpen}
                aria-controls="navbar-menu"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul
                id="navbar-menu"
                className={isOpen ? "open" : ""}
            >
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={
                            activeSection === item.id &&
                            location.pathname === "/"
                                ? "active"
                                : ""
                        }
                    >
                        <a
                            href={`/#${item.id}`}
                            onClick={(e) =>
                                handleNavClick(e, item.id)
                            }
                        >
                            <span>{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
