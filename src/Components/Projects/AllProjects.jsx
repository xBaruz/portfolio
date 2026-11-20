import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import Header from '../Header/Header';
import { ProjectsData } from './ProjectsData';
import './Projects.css';
import './AllProjects.css';

export default function AllProjects() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detailsTopRef = useRef(null);

  const initialId =
    location.state?.selectedProjectId ||
    searchParams.get('project') ||
    ProjectsData[0]?.id;

  const [selectedProject, setSelectedProject] = useState(
    () => ProjectsData.find((p) => p.id === initialId) || ProjectsData[0]
  );
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const paramId = location.state?.selectedProjectId || searchParams.get('project');
    if (paramId) {
      const found = ProjectsData.find((p) => p.id === paramId);
      if (found) {
        setSelectedProject(found);
        setActiveSlide(0);
      }
    }
  }, [location.state, searchParams]);

  const handleGoBack = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActiveSlide(0);
    setSearchParams({ project: project.id }, { replace: true });

    if (detailsTopRef.current) {
      detailsTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const gallery =
    selectedProject?.screenshots && selectedProject.screenshots.length > 0
      ? [selectedProject.img, ...selectedProject.screenshots]
      : selectedProject
      ? [selectedProject.img]
      : [];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const renderGithubButtons = (project, stopProp = false) => {
    const handleClick = (e) => {
      if (stopProp) e.stopPropagation();
    };

    if (project.github) {
      return (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn"
          title="Repozytorium GitHub"
          onClick={handleClick}
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      );
    }

    return (
      <div className="project-multi-links" onClick={handleClick}>
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
    <section className="all-projects-page" ref={detailsTopRef}>
      <div className="projects-container">
        <div className="all-projects-topbar">
          <button type="button" className="back-to-prev-btn" onClick={handleGoBack}>
            <FaArrowLeft />
            <span>Wróć do poprzedniej strony</span>
          </button>
        </div>

        {selectedProject && (
          <div className="selected-project-showcase">
            <Header maintext={selectedProject.title} smalltext="Wybrany projekt" />

            <div className="selected-project-grid">
              <div className="selected-project-info">
                <h2 className="selected-section-heading">Opis projektu</h2>
                <p className="selected-project-desc">{selectedProject.description}</p>

                <div className="selected-project-links">
                  {renderGithubButtons(selectedProject, false)}
                </div>

                <div className="selected-project-block">
                  <h3 className="selected-sub-heading">TECHNOLOGIE</h3>
                  <div className="project-tech-list">
                    {selectedProject.technologies.map((tech) => (
                      <span key={`sel-${selectedProject.id}-${tech}`} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="selected-project-block">
                    <h3 className="selected-sub-heading">FUNKCJE</h3>
                    <ul className="selected-features-list">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="selected-project-media">
                <div className="selected-gallery-main">
                  <img
                    src={gallery[activeSlide]}
                    alt={`${selectedProject.title} - podgląd ${activeSlide + 1}`}
                    className="selected-gallery-image"
                  />

                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="selected-gallery-arrow prev"
                        onClick={handlePrevSlide}
                        aria-label="Poprzednie zdjęcie"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        type="button"
                        className="selected-gallery-arrow next"
                        onClick={handleNextSlide}
                        aria-label="Następne zdjęcie"
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </div>

                {gallery.length > 1 && (
                  <div className="selected-gallery-thumbs">
                    {gallery.map((imgSrc, idx) => (
                      <button
                        key={`thumb-${idx}`}
                        type="button"
                        className={`selected-thumb-btn ${idx === activeSlide ? 'active' : ''}`}
                        onClick={() => setActiveSlide(idx)}
                        aria-label={`Miniatura ${idx + 1}`}
                      >
                        <img src={imgSrc} alt={`Miniatura ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="all-projects-list-section">
          <Header maintext="Wszystkie projekty" smalltext="Portfolio" />

          <div className="projects-grid">
            {ProjectsData.map((project) => {
              const isSelected = selectedProject?.id === project.id;
              const visibleTechs = project.technologies.slice(0, 4);
              const remainingCount = project.technologies.length - visibleTechs.length;

              return (
                <article
                  key={project.id}
                  className={`project-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelectProject(project)}
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

                    <div className="project-footer">{renderGithubButtons(project, true)}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}