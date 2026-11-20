import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import Header from '../Header/Header';
import { ProjectsData } from './ProjectsData';
import './Projects.css';

export default function Projects() {
  const navigate = useNavigate();
  const featuredProjects = ProjectsData.slice(0, 6);

  const handleOpenProject = (project) => {
    navigate(`/projects?project=${project.id}`, {
      state: { selectedProjectId: project.id },
    });
  };

  const handleSeeAll = () => {
    navigate('/projects');
  };

  const renderGithubButtons = (project) => {
    const stopPropagation = (e) => e.stopPropagation();

    if (project.github) {
      return (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn"
          title="Repozytorium GitHub"
          onClick={stopPropagation}
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      );
    }

    return (
      <div className="project-multi-links" onClick={stopPropagation}>
        {project.githubFrontend && (
          <a
            href={project.githubFrontend}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            title="Frontend na GitHub"
          >
            <FaGithub />
            <span>Frontend</span>
          </a>
        )}
        {project.githubBackend && (
          <a
            href={project.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            title="Backend na GitHub"
          >
            <FaGithub />
            <span>Backend</span>
          </a>
        )}
      </div>
    );
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <Header maintext="Projekty" smalltext="Wybrane realizacje" />

        <div className="projects-grid">
          {featuredProjects.map((project) => {
            const visibleTechs = project.technologies.slice(0, 4);
            const remainingCount = project.technologies.length - visibleTechs.length;

            return (
              <article
                key={project.id}
                className="project-card"
                onClick={() => handleOpenProject(project)}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-list">
                    {visibleTechs.map((tech) => (
                      <span key={`${project.id}-${tech}`} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span className="project-tech-tag project-tech-more">
                        +{remainingCount}
                      </span>
                    )}
                  </div>

                  {/* <div className="project-footer">{renderGithubButtons(project)}</div> */}
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-more-wrapper">
          <button type="button" className="projects-all-btn" onClick={handleSeeAll}>
            <span>Zobacz wszystkie projekty</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}