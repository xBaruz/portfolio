import { createRoot } from 'react-dom/client'
import AllProjectsPage from './components/AllProjects/AllProjectsPage'
import './index.css'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <HashRouter>
      <div className="space-container">
        <div className="space-scene">
          <div className="grid-layer" />
          <div className="stars-layer" />
        </div>

        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/projects/:id" element={<AllProjectsPage />} />
        </Routes>
      </div>
    </HashRouter>
  </LanguageProvider>,
)
