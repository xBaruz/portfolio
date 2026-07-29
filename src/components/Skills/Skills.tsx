import React, { useState } from 'react';
import {
  FaReact, FaJs, FaCss3Alt, FaPython,
  FaDocker, FaLinux, FaWindows, FaHtml5, FaGithub
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTypescript, SiRabbitmq, SiMongodb, SiRedis } from 'react-icons/si';
import { AiOutlineDotNet } from 'react-icons/ai';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useLanguage } from '../../context/LanguageContext';
import "./Skills.css";

type SkillCategory = 'frontend' | 'backend' | 'databases' | 'devops' | 'systems';
type FilterCategory = 'all' | SkillCategory;

const Skills = () => {
  const [active, setActive] = useState<FilterCategory>('all');
  const [sectionRef, isVisible] = useIntersectionObserver();
  const { t } = useLanguage();

  const filters: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: t('skills.all') },
    { id: 'frontend', label: t('skills.frontend') },
    { id: 'backend', label: t('skills.backend') },
    { id: 'databases', label: t('skills.databases') },
    { id: 'devops', label: t('skills.devops') },
    { id: 'systems', label: t('skills.systems') }
  ];

  const skills: { id: number; name: string; category: SkillCategory; icon: React.ReactNode }[] = [
    { id: 1, name: "React", category: "frontend", icon: <FaReact /> },
    { id: 2, name: "Next.js", category: "frontend", icon: <TbBrandNextjs /> },
    { id: 3, name: "TypeScript", category: "frontend", icon: <SiTypescript /> },
    { id: 4, name: "JavaScript", category: "frontend", icon: <FaJs /> },
    { id: 5, name: "HTML", category: "frontend", icon: <FaHtml5 /> },
    { id: 6, name: "CSS", category: "frontend", icon: <FaCss3Alt /> },
    { id: 7, name: ".NET / C#", category: "backend", icon: <AiOutlineDotNet /> },
    { id: 8, name: "ASP.NET Core", category: "backend", icon: <AiOutlineDotNet /> },
    { id: 9, name: "RabbitMQ", category: "backend", icon: <SiRabbitmq /> },
    { id: 10, name: "Spring Boot / Java", category: "backend", icon: <SiSpringboot /> },
    { id: 11, name: "Python", category: "backend", icon: <FaPython /> },
    { id: 12, name: "PostgreSQL", category: "databases", icon: <BiLogoPostgresql /> },
    { id: 13, name: "MySQL", category: "databases", icon: <SiMysql /> },
    { id: 14, name: "MongoDB", category: "databases", icon: <SiMongodb /> },
    { id: 15, name: "Redis", category: "databases", icon: <SiRedis /> },
    { id: 16, name: "Docker", category: "devops", icon: <FaDocker /> },
    { id: 17, name: "Git / GitHub", category: "devops", icon: <FaGithub /> },
    { id: 18, name: "Windows", category: "systems", icon: <FaWindows /> },
    { id: 19, name: "Linux", category: "systems", icon: <FaLinux /> }
  ];

  const filteredSkills = active === 'all'
    ? skills
    : skills.filter((skill) => skill.category === active);

  return (
    <section
      className={`skills-section reveal-section ${isVisible ? 'animate-reveal' : ''}`}
      id="skills-section"
      ref={sectionRef}
    >
      <h2 className="skills-title">{t('skills.title')}</h2>

      <div className="filters">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.id}
            className={`filter-option ${active === filter.id ? 'active' : ''}`}
            onClick={() => setActive(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="skills-cloud">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;