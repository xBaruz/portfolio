import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectsData, localizeProject } from "../../data/ProjectsData";
import ProjectInterface from "../../data/ProjectInterface";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../context/LanguageContext";
import "./AllProjectsPage.css";
import "../Navbar/LanguageToggle.css";

export default function AllProjectsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const [showcaseRef, showcaseVisible] = useIntersectionObserver();
  const [otherProjectsRef, otherProjectsVisible] = useIntersectionObserver();

  const activeProject: ProjectInterface =
    ProjectsData.find((project) => project.id === id) || ProjectsData[0];

  const localizedActiveProject = localizeProject(activeProject, language);

  const [activeImg, setActiveImg] = useState<string>(activeProject.img);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveImg(activeProject.img);
    setIsModalOpen(false);
    window.scrollTo(0, 0);
  }, [activeProject.id, activeProject.img]);

  const allScreenshots = useMemo<string[]>(() => [
    activeProject.img,
    ...(activeProject.screenshots || [])
  ], [activeProject.img, activeProject.screenshots]);

  const handlePrevImg = useCallback((e?: React.MouseEvent): void => {
    e?.stopPropagation();

    setActiveImg((currentImg) => {
      const currentIndex = allScreenshots.indexOf(currentImg);
      const prevIndex = currentIndex <= 0 ? allScreenshots.length - 1 : currentIndex - 1;
      return allScreenshots[prevIndex];
    });
  }, [allScreenshots]);

  const handleNextImg = useCallback((e?: React.MouseEvent): void => {
    e?.stopPropagation();

    setActiveImg((currentImg) => {
      const currentIndex = allScreenshots.indexOf(currentImg);
      const nextIndex = currentIndex === allScreenshots.length - 1 ? 0 : currentIndex + 1;
      return allScreenshots[nextIndex];
    });
  }, [allScreenshots]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) {
        return;
      }

      if (event.key === "Escape") {
        setIsModalOpen(false);
      } else if (event.key === "ArrowLeft") {
        handlePrevImg();
      } else if (event.key === "ArrowRight") {
        handleNextImg();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handlePrevImg, handleNextImg]);

  return (
    <div className="all-projects-container content-layer">
      <div className="nebula"></div>

      <div className="all-projects-topbar">
        <button
          className="main-styled cold"
          onClick={() => navigate("/")}
        >
          <span className="icon">←</span> {t('allProjects.back')}
        </button>

        <button
          type="button"
          className="language-toggle-btn language-toggle-btn--standalone"
          onClick={toggleLanguage}
          aria-label={language === 'pl' ? t('nav.switchToEnglish') : t('nav.switchToPolish')}
          title={language === 'pl' ? t('nav.switchToEnglish') : t('nav.switchToPolish')}
        >
          <span className={language === 'pl' ? 'active' : ''}>PL</span>
          <span className="language-toggle-separator">/</span>
          <span className={language === 'en' ? 'active' : ''}>EN</span>
        </button>
      </div>

      <section
        className={`active-project-showcase reveal-section ${showcaseVisible ? 'animate-reveal' : ''}`}
        ref={showcaseRef}
      >
        <div className="project-detail-left">
          <h1 className="project-detail-title">{localizedActiveProject.title}</h1>

          <p className="project-detail-desc">{localizedActiveProject.description}</p>

          <div className="project-links-box">
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                <FaGithub style={{ fontSize: "1.1rem" }} />
                {t('allProjects.projectCode')}
              </a>
            )}

            {activeProject.githubBackend && (
              <a
                href={activeProject.githubBackend}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                <FaGithub style={{ fontSize: "1.1rem" }} />
                {t('allProjects.backendCode')}
              </a>
            )}

            {activeProject.githubFrontend && (
              <a
                href={activeProject.githubFrontend}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                <FaGithub style={{ fontSize: "1.1rem" }} />
                {t('allProjects.frontendCode')}
              </a>
            )}
          </div>

          <div className="tech-section">
            <h3>{t('allProjects.technologies')}</h3>

            <div className="tech-tags-grid">
              {activeProject.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="features-section">
            <h3>{t('allProjects.features')}</h3>

            <ul className="features-list">
              {localizedActiveProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-detail-right">
          <div className="mockup-wrapper">
            {allScreenshots.length > 1 && (
              <button
                className="gallery-nav-btn prev"
                onClick={handlePrevImg}
                aria-label={t('allProjects.previousImage')}
              >
                &#10094;
              </button>
            )}

            <img
              src={activeImg}
              alt={localizedActiveProject.title}
              className="mockup-img clickable"
              onClick={() => setIsModalOpen(true)}
            />

            {allScreenshots.length > 1 && (
              <button
                className="gallery-nav-btn next"
                onClick={handleNextImg}
                aria-label={t('allProjects.nextImage')}
              >
                &#10095;
              </button>
            )}
          </div>

          {activeProject.screenshots && activeProject.screenshots.length > 0 && (
            <div className="screenshots-gallery">
              <div
                className={`screenshot-thumb ${activeImg === activeProject.img ? "active" : ""}`}
                onClick={() => setActiveImg(activeProject.img)}
              >
                <img src={activeProject.img} alt={t('allProjects.mainPreview')} />
              </div>

              {activeProject.screenshots.map((screen, index) => (
                <div
                  key={index}
                  className={`screenshot-thumb ${activeImg === screen ? "active" : ""}`}
                  onClick={() => setActiveImg(screen)}
                >
                  <img src={screen} alt={`${t('allProjects.screenshot')} ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <div className="image-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="image-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label={t('allProjects.closePreview')}
            >
              <FaTimes />
            </button>

            {allScreenshots.length > 1 && (
              <>
                <button
                  className="modal-nav-btn prev"
                  onClick={handlePrevImg}
                  aria-label={t('allProjects.previousImage')}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="modal-nav-btn next"
                  onClick={handleNextImg}
                  aria-label={t('allProjects.nextImage')}
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <img
              src={activeImg}
              alt={localizedActiveProject.title}
              className="image-modal-img"
            />
          </div>
        </div>
      )}

      <hr className="section-divider" />

      <section
        className={`other-projects-section reveal-section ${otherProjectsVisible ? 'animate-reveal' : ''}`}
        ref={otherProjectsRef}
      >
        <h2 className="other-projects-heading">{t('allProjects.otherProjects')}</h2>

        <div className="projects-grid">
          {ProjectsData
            .filter((project) => project.id !== activeProject.id)
            .map((project) => {
              const localizedProject = localizeProject(project, language);

              return (
                <article
                  key={project.id}
                  className="project-card"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className="img-wrapper">
                    <img src={project.img} alt={localizedProject.title} />
                    <div className="card-overlay" />
                  </div>

                  <div className="project-info">
                    <h3>{localizedProject.title}</h3>
                    <p>
                      {localizedProject.description.length > 100
                        ? `${localizedProject.description.slice(0, 100)}...`
                        : localizedProject.description}
                    </p>
                    <button className="project-card-btn">
                      {t('allProjects.viewProject')}
                    </button>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </div>
  );
}
