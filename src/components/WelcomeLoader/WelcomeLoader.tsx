import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import "./WelcomeLoader.css"

interface WelcomeLoaderProps {
  loading: boolean
  setLoading: (value: boolean) => void
}

const WelcomeLoader: React.FC<WelcomeLoaderProps> = ({ loading }) => {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (!loading) {
      setFadeOut(true)

      const timeout = window.setTimeout(() => {
        setVisible(false)
      }, 1200)

      return () => window.clearTimeout(timeout)
    }
  }, [loading])

  if (!visible) {
    return null
  }

  return (
    <div className={`welcome-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="space-container">
        <div className="space-scene">
          <div className="grid-layer" />
          <div className="stars-layer" />
        </div>
        <div className="nebula"></div>
        <div className="cyber-grid-bg">
          <div className="grid-lines"></div>
          <div className="horizon-glow"></div>
        </div>
        <div className="content">
          <div className="header">
            <h1>
              {t('loader.titleStart')} <span className="styled">{t('loader.titleAccent')}</span>
            </h1>
          </div>

          <div className="spinner-container">
            <svg className="spinner-svg" viewBox="0 0 50 50">
              <circle className="spinner-track" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
              <circle className="spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
            </svg>
          </div>

          <h2>{t('loader.loading')}</h2>
        </div>
      </div>
    </div>
  )
}

export default WelcomeLoader
