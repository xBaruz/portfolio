import React from "react";
import "./Projects.css";

import { useNavigate } from "react-router-dom";

import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaArrowRight,
    FaPython,
    FaCode,
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
                "#9B4F96",
                "rgba(155,79,150,.55)"
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
};

const getTechnologyIcon = (technology) => {
    return technologyIcons[technology] || (
        <FaCode color="rgba(255,255,255,.5)" />
    );
};

const getGithubUrl = (project) => {
    return (
        project.github ||
        project.githubFrontend ||
        project.githubBackend ||
        null
    );
};

const Projects = () => {
    const navigate = useNavigate();

    const projects = ProjectsData.slice(0, 6);

    return (
        <section
            className="projects"
            id="projekty"
        >
            <div className="projects-heading">
                <span>PROJEKTY</span>

                <h2>
                    Moje <strong>projekty.</strong>
                </h2>

                <p>
                    Poniżej znajdziesz wybrane projekty,
                    nad którymi pracowałem.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => {
                    const githubUrl =
                        getGithubUrl(project);

                    return (
                        <article
                            className="project-card"
                            key={project.id}
                            onClick={() =>
                                navigate(
                                    `/projekty/${project.id}`
                                )
                            }
                        >
                            <div className="project-preview">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                />
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-bottom">
                                    <div className="project-tech">
                                        {project.technologies
                                            .slice(0, 4)
                                            .map(
                                                (
                                                    technology
                                                ) => (
                                                    <div
                                                        className="project-tech-item"
                                                        key={
                                                            technology
                                                        }
                                                    >
                                                        <span className="project-tech-icon">
                                                            {getTechnologyIcon(
                                                                technology
                                                            )}
                                                        </span>

                                                        <span>
                                                            {
                                                                technology
                                                            }
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                    </div>

                                    {githubUrl && (
                                        <a
                                            href={githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-github"
                                            aria-label={`GitHub ${project.title}`}
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="projects-more">
                <button
                    type="button"
                    className="main-styled projects-more-button"
                    onClick={() =>
                        navigate(
                            `/projekty/${ProjectsData[0].id}`
                        )
                    }
                >
                    <span>
                        Pokaż wszystkie projekty
                    </span>

                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Projects;