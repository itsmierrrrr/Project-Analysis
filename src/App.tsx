import { AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AnimatedBackground } from './components/AnimatedBackground'
import { CommandPalette } from './components/CommandPalette'
import { CustomCursor } from './components/CustomCursor'
import { TopNav } from './components/TopNav'
import { ThemeProvider } from './context/theme-context'
import { useTheme } from './context/use-theme'
import { projects } from './data/projects'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

function Shell() {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setMenuOpen(true)
      }

      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  const actions = useMemo(
    () => [
      { label: 'Go to archive', description: 'Return to the project grid', run: () => navigate('/') },
      ...projects.map((project) => ({
        label: project.title,
        description: project.category,
        run: () => navigate(`/analysis/${project.slug}`),
      })),
      {
        label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
        description: 'Toggle the interface theme',
        run: toggleTheme,
      },
    ],
    [navigate, theme, toggleTheme],
  )

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--page-bg)] text-[color:var(--page-text)]">
      <AnimatedBackground />
      <CustomCursor />
      <TopNav onCommandMenu={() => setMenuOpen(true)} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      <CommandPalette
        key={menuOpen ? 'command-open' : 'command-closed'}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        actions={actions}
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  )
}

export default App
