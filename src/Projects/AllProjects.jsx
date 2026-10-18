import React, {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import "./AllProjects.css";

import {
    FaGithub,
    FaReact,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaArrowLeft,
    FaArrowRight,
    FaCode,
    FaMicrosoft,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTypescript,
    SiDotnet,
    SiPostgresql,
    SiMysql,
    SiDocker,
    SiNextdotjs,
    SiAngular,
    SiFlutter,
    SiDart,
    SiCplusplus,
    SiQt,
    SiMongodb,
    SiRedis,
    SiRabbitmq,
    SiGraphql,
    SiSqlite,
    SiSupabase,
    SiTailwindcss,
    SiJsonwebtokens,
    SiSwagger,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

import { ProjectsData } from "../data/ProjectsData";

const iconStyle = (color, glow) => ({
    color,
    filter: `drop-shadow(0 0 7px ${glow})`,
});

const technologyIcons = {
    React: (
        <FaReact
            style={iconStyle(
                "#61DAFB",
                "rgba(97,218,251,.55)"
            )}
        />
    ),

    "Next.js": (
        <SiNextdotjs
            style={iconStyle(
                "#FFFFFF",
                "rgba(255,255,255,.45)"
            )}
        />
    ),

    TypeScript: (
        <SiTypescript
            style={iconStyle(
                "#3178C6",
                "rgba(49,120,198,.55)"
            )}
        />
    ),

    JavaScript: (
        <SiJavascript
            style={iconStyle(
                "#F7DF1E",
                "rgba(247,223,30,.55)"
            )}
        />
    ),

    HTML: (
        <FaHtml5
            style={iconStyle(
                "#E34F26",
                "rgba(227,79,38,.55)"
            )}
        />
    ),

    CSS: (
        <FaCss3Alt
            style={iconStyle(
                "#1572B6",
                "rgba(21,114,182,.55)"
            )}
        />
    ),

    "C#": (
        <TbBrandCSharp
            style={iconStyle(
                "#C586C0",
                "rgba(197,134,192,.55)"
            )}
        />
    ),

    ".NET": (
        <SiDotnet
            style={iconStyle(
                "#512BD4",
                "rgba(81,43,212,.55)"
            )}
        />
    ),

    ".NET 10": (
        <SiDotnet
            style={iconStyle(
                "#512BD4",
                "rgba(81,43,212,.55)"
            )}
        />
    ),

    "ASP.NET Core": (
        <SiDotnet
            style={iconStyle(
                "#512BD4",
                "rgba(81,43,212,.55)"
            )}
        />
    ),

    "EF Core": (
        <SiDotnet
            style={iconStyle(
                "#512BD4",
                "rgba(81,43,212,.50)"
            )}
        />
    ),

    "Entity Framework Core": (
        <SiDotnet
            style={iconStyle(
                "#512BD4",
                "rgba(81,43,212,.50)"
            )}
        />
    ),

    PostgreSQL: (
        <SiPostgresql
            style={iconStyle(
                "#336791",
                "rgba(51,103,145,.55)"
            )}
        />
    ),

    MySQL: (
        <SiMysql
            style={iconStyle(
                "#4479A1",
                "rgba(68,121,161,.55)"
            )}
        />
    ),

    Docker: (
        <SiDocker
            style={iconStyle(
                "#2496ED",
                "rgba(36,150,237,.55)"
            )}
        />
    ),

    Python: (
        <FaPython
            style={iconStyle(
                "#3776AB",
                "rgba(55,118,171,.55)"
            )}
        />
    ),

    Angular: (
        <SiAngular
            style={iconStyle(
                "#DD0031",
                "rgba(221,0,49,.50)"
            )}
        />
    ),

    Flutter: (
        <SiFlutter
            style={iconStyle(
                "#54C5F8",
                "rgba(84,197,248,.50)"
            )}
        />
    ),

    Dart: (
        <SiDart
            style={iconStyle(
                "#0175C2",
                "rgba(1,117,194,.50)"
            )}
        />
    ),

    "C++": (
        <SiCplusplus
            style={iconStyle(
                "#00599C",
                "rgba(0,89,156,.50)"
            )}
        />
    ),

    Qt: (
        <SiQt
            style={iconStyle(
                "#41CD52",
                "rgba(65,205,82,.50)"
            )}
        />
    ),

    MongoDB: (
        <SiMongodb
            style={iconStyle(
                "#47A248",
                "rgba(71,162,72,.50)"
            )}
        />
    ),

    Redis: (
        <SiRedis
            style={iconStyle(
                "#DC382D",
                "rgba(220,56,45,.50)"
            )}
        />
    ),

    RabbitMQ: (
        <SiRabbitmq
            style={iconStyle(
                "#FF6600",
                "rgba(255,102,0,.50)"
            )}
        />
    ),

    GraphQL: (
        <SiGraphql
            style={iconStyle(
                "#E10098",
                "rgba(225,0,152,.50)"
            )}
        />
    ),

    SQLite: (
        <SiSqlite
            style={iconStyle(
                "#5DACDF",
                "rgba(93,172,223,.50)"
            )}
        />
    ),

    Supabase: (
        <SiSupabase
            style={iconStyle(
                "#3ECF8E",
                "rgba(62,207,142,.50)"
            )}
        />
    ),

    "Tailwind CSS": (
        <SiTailwindcss
            style={iconStyle(
                "#06B6D4",
                "rgba(6,182,212,.50)"
            )}
        />
    ),

    JWT: (
        <SiJsonwebtokens
            style={iconStyle(
                "#D63AFF",
                "rgba(214,58,255,.50)"
            )}
        />
    ),

    Swagger: (
        <SiSwagger
            style={iconStyle(
                "#85EA2D",
                "rgba(133,234,45,.50)"
            )}
        />
    ),

    "REST API": (
        <FaCode
            style={iconStyle(
                "#C2A8FF",
                "rgba(194,168,255,.40)"
            )}
        />
    ),

    "Clean Architecture": (
        <FaCode
            style={iconStyle(
                "#E255FF",
                "rgba(226,85,255,.40)"
            )}
        />
    ),

    "Outbox Pattern": (
        <FaCode
            style={iconStyle(
                "#F088FE",
                "rgba(240,136,254,.40)"
            )}
        />
    ),

    "Windows Service": (
        <FaMicrosoft
            style={iconStyle(
                "#00A4EF",
                "rgba(0,164,239,.45)"
            )}
        />
    ),

    FileSystemWatcher: (
        <FaMicrosoft
            style={iconStyle(
                "#00A4EF",
                "rgba(0,164,239,.45)"
            )}
        />
    ),
};

const getTechnologyIcon = (technology) => {
    return technologyIcons[technology] || (
        <FaCode
            style={{
                color: "rgba(255,255,255,.35)",
            }}
        />
    );
};

const AllProjects = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const selectedProject = useMemo(() => {
        return (
            ProjectsData.find(
                (project) =>
                    project.id === projectId
            ) || ProjectsData[0]
        );
    }, [projectId]);

    const [activeScreenshot, setActiveScreenshot] =
        useState(0);

    useEffect(() => {
        setActiveScreenshot(0);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [selectedProject.id]);

    const screenshots =
        selectedProject.screenshots || [];

    const githubLinks = [];

    if (selectedProject.github) {
        githubLinks.push({
            label: "GitHub",
            url: selectedProject.github,
        });
    }

    if (selectedProject.githubFrontend) {
        githubLinks.push({
            label: "Frontend",
            url: selectedProject.githubFrontend,
        });
    }

    if (selectedProject.githubBackend) {
        githubLinks.push({
            label: "Backend",
            url: selectedProject.githubBackend,
        });
    }

    const nextScreenshot = () => {
        if (!screenshots.length) {
            return;
        }

        setActiveScreenshot((prev) =>
            prev === screenshots.length - 1
                ? 0
                : prev + 1
        );
    };

    const previousScreenshot = () => {
        if (!screenshots.length) {
            return;
        }

        setActiveScreenshot((prev) =>
            prev === 0
                ? screenshots.length - 1
                : prev - 1
        );
    };

    const openProject = (project) => {
        navigate(`/projekty/${project.id}`);
    };

    return (
        <main className="all-projects">
            <section className="featured-project">
                <div className="featured-info">
                    <button
                        type="button"
                        className="back-home"
                        onClick={() => navigate("/")}
                    >
                        <FaArrowLeft />

                        <span>
                            Powrót do strony głównej
                        </span>
                    </button>

                    <h1>
                        {selectedProject.title}
                    </h1>

                    <p className="featured-description">
                        {selectedProject.description}
                    </p>

                    {githubLinks.length > 0 && (
                        <div className="featured-githubs">
                            {githubLinks.map(
                                (item) => (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={item.url}
                                    >
                                        <FaGithub />

                                        <span>
                                            {item.label}
                                        </span>
                                    </a>
                                )
                            )}
                        </div>
                    )}

                    <div className="featured-section">
                        <h3>
                            Technologie
                        </h3>

                        <div className="featured-technologies">
                            {selectedProject.technologies.map(
                                (technology) => (
                                    <div
                                        className="featured-tech"
                                        key={technology}
                                    >
                                        <span className="featured-tech-icon">
                                            {getTechnologyIcon(
                                                technology
                                            )}
                                        </span>

                                        <span>
                                            {technology}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="featured-section">
                        <h3>
                            Funkcje
                        </h3>

                        <ul className="featured-features">
                            {selectedProject.features.map(
                                (
                                    feature,
                                    index
                                ) => (
                                    <li key={index}>
                                        {feature}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="featured-gallery">
                    <div className="featured-main-image">
                        <img
                            src={
                                screenshots.length
                                    ? screenshots[
                                          activeScreenshot
                                      ]
                                    : selectedProject.img
                            }
                            alt={selectedProject.title}
                        />

                        {screenshots.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    className="gallery-arrow gallery-arrow-left"
                                    onClick={
                                        previousScreenshot
                                    }
                                    aria-label="Poprzedni screenshot"
                                >
                                    <FaArrowLeft />
                                </button>

                                <button
                                    type="button"
                                    className="gallery-arrow gallery-arrow-right"
                                    onClick={
                                        nextScreenshot
                                    }
                                    aria-label="Następny screenshot"
                                >
                                    <FaArrowRight />
                                </button>
                            </>
                        )}
                    </div>

                    {screenshots.length > 0 && (
                        <div className="gallery-thumbnails">
                            {screenshots.map(
                                (
                                    image,
                                    index
                                ) => (
                                    <button
                                        type="button"
                                        className={`gallery-thumbnail ${
                                            activeScreenshot ===
                                            index
                                                ? "active"
                                                : ""
                                        }`}
                                        key={index}
                                        onClick={() =>
                                            setActiveScreenshot(
                                                index
                                            )
                                        }
                                    >
                                        <img
                                            src={image}
                                            alt={`${selectedProject.title} ${index + 1}`}
                                        />
                                    </button>
                                )
                            )}
                        </div>
                    )}
                </div>
            </section>

            <section className="projects-list-section">
                <div className="projects-list-heading">
                    <span>
                        PORTFOLIO
                    </span>

                    <h2>
                        Wszystkie projekty
                    </h2>
                </div>

                <div className="all-projects-grid">
                    {ProjectsData.map(
                        (project) => (
                            <article
                                className={`all-project-card ${
                                    project.id ===
                                    selectedProject.id
                                        ? "selected"
                                        : ""
                                }`}
                                key={project.id}
                                onClick={() =>
                                    openProject(
                                        project
                                    )
                                }
                            >
                                <div className="all-project-image">
                                    <img
                                        src={project.img}
                                        alt={
                                            project.title
                                        }
                                    />
                                </div>

                                <div className="all-project-content">
                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {
                                            project.description
                                        }
                                    </p>

                                    <div className="all-project-tech">
                                        {project.technologies
                                            .slice(
                                                0,
                                                5
                                            )
                                            .map(
                                                (
                                                    technology
                                                ) => (
                                                    <div
                                                        className="all-project-tech-item"
                                                        key={
                                                            technology
                                                        }
                                                        title={
                                                            technology
                                                        }
                                                    >
                                                        <span className="all-project-tech-icon">
                                                            {getTechnologyIcon(
                                                                technology
                                                            )}
                                                        </span>

                                                        <span className="all-project-tech-name">
                                                            {
                                                                technology
                                                            }
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                    </div>

                                    <button
                                        type="button"
                                        className="all-project-button"
                                        onClick={(e) => {
                                            e.stopPropagation();

                                            openProject(
                                                project
                                            );
                                        }}
                                    >
                                        <span>
                                            Zobacz projekt
                                        </span>

                                        <FaArrowRight />
                                    </button>
                                </div>
                            </article>
                        )
                    )}
                </div>
            </section>
        </main>
    );
};

export default AllProjects;