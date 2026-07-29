import React, { useEffect, useState } from 'react'
import "./Hero.css"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'

interface HeroProps {
  loading: boolean
}

const Hero: React.FC<HeroProps> = ({ loading }) => {
  const [fadeIn, setFadeIn] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    if (!loading) {
      setFadeIn(true)
    }
  }, [loading])

  const handleOpenCV = () => {
    window.open(
      `${import.meta.env.BASE_URL}cv.html?lang=${language}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section className={`hero-section ${fadeIn ? 'fade-in' : ''}`}>
      <div className="nebula"></div>
      <div className="hero-container">
        <div className="hero-left">
          <div className="upper-icon">{t('hero.badge')}</div>

          <h1>
            {t('hero.titleStart')} <span>{t('hero.titleAccent')}</span> {t('hero.titleEnd')}
          </h1>

          <div className="desc">
            {t('hero.description')}
          </div>

          <div className="button">
            <button className="main-styled" onClick={handleOpenCV}>
              {t('hero.cv')}
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/xbaruz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/xbaruz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:mazurek321.93@wp.pl" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-orbit-container">
            <div className="orbit-line" />

            <motion.a
              href="https://github.com/xbaruz"
              target="_blank"
              rel="noopener noreferrer"
              className="orbit-cube-wrapper"
              aria-label="GitHub"
            >
              <div className="cube-face face-front"><FaGithub /></div>
              <div className="cube-face face-back"><FaGithub /></div>
              <div className="cube-face face-left"><FaGithub /></div>
              <div className="cube-face face-right"><FaGithub /></div>
              <div className="cube-face face-top"><FaGithub /></div>
              <div className="cube-face face-bottom"><FaGithub /></div>
            </motion.a>

            <div className="orbit-center">
              <div className="center-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
