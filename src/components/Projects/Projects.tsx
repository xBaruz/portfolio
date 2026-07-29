import React from 'react'
import "./Projects.css"
import { ProjectsData, localizeProject } from "../../data/ProjectsData"
import ProjectInterface from '../../data/ProjectInterface'
import { useNavigate } from 'react-router'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useLanguage } from '../../context/LanguageContext'

const Projects = () => {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useIntersectionObserver();
  const { language, t } = useLanguage();

  return (
    <section className="projects-section" id="projects-section">
      <div
        className={`reveal-section ${isVisible ? 'animate-reveal' : ''}`}
        ref={sectionRef}
      >
        <div className="top-section">
          <h2 className="skills-title">{t('projects.title')}</h2>
          <button className="main-styled cold" onClick={() => navigate("/projects")}>
            {t('projects.viewAll')} <span className="icon">→</span>
          </button>
        </div>

        <div className="projects-grid">
          {ProjectsData.slice(0, 6).map((project: ProjectInterface) => {
            const localizedProject = localizeProject(project, language);

            return (
              <article
                className="project-card"
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="project-thumb">
                  <img src={project.img} alt={localizedProject.title} />
                </div>

                <div className="project-content">
                  <h3 className="project-title">{localizedProject.title}</h3>
                  <p className="project-description">{localizedProject.description}</p>

                  {project.technologies.length > 0 && (
                    <div className="project-tags">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="project-tag-pill">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="project-tag-pill">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                  )}

                  <div className="project-actions">
                    <button className="btn-details">
                      {t('projects.viewProject')} <span className="icon">→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
