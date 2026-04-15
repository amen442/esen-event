import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AppProvider, useAppContext } from './contexts/AppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Panels from './components/Panels'
import Speakers from './components/Speakers'
import Register from './components/Register'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Partner from './components/Partner'
import ProfessionalIntro from './components/ProfessionalIntro'

function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <AnimatePresence>
        {showIntro && (
          <ProfessionalIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <Navbar isScrolled={isScrolled} />
          <main>
            <Hero />
            <About />
            <Program />
            <Panels />
            <Speakers />
            <Gallery />
            <Partner />
            <Register />
            <Footer />
          </main>
        </div>
      </motion.div>
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
