import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const Hero = () => {
  const { language } = useAppContext()
  const t = translations[language]
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isEventStarted, setIsEventStarted] = useState(false)

  useEffect(() => {
    const eventDate = new Date('April 22, 2026 18:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        setIsEventStarted(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: t.hero.days },
    { value: timeLeft.hours, label: t.hero.hours },
    { value: timeLeft.minutes, label: t.hero.minutes },
    { value: timeLeft.seconds, label: t.hero.seconds }
  ]

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/images/background.png" 
            alt="E-Commerce Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
            <motion.div
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                  "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 opacity-30"
            />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="gradient-text block text-center"
              >
                <div className="mt-4">
                  <div className="text-4xl md:text-6xl font-black text-white">
                    {t.hero.mainTitle}
                  </div>
                  <div className="text-2xl md:text-4xl font-black mt-2" style={{ color: '#00B1FF' }}>
                           {t.hero.comebackTitle}
                  </div>
                </div>
              </motion.div>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl md:text-3xl text-white mb-8 font-light"
            >
              {t.hero.subtitleText}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {t.hero.descriptionText}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-gradient-to-r from-neon-purple via-blue-500 to-neon-blue text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-neon-purple/50"
              >
                {t.hero.registerNow}
              </motion.button>

              {/* Event Date Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="text-gray-400 text-sm tracking-wider"
              >
                {t.hero.eventDate}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-8 h-12 border-2 border-neon-purple/50 rounded-full flex justify-center hover:border-neon-purple transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-4 bg-neon-purple rounded-full mt-2"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">{t.hero.scroll}</p>
        </motion.div>
      </section>
      
      {/* Countdown Timer intégré */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 opacity-30"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t.hero.eventStartsIn}
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              {t.hero.eventAnniversary}
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  {/* Number */}
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl md:text-6xl font-bold text-white text-center mb-2 relative z-10"
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.div>

                  {/* Label */}
                  <div className="text-sm md:text-base text-gray-400 text-center uppercase tracking-wider relative z-10">
                    {unit.label}
                  </div>

                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-full">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-gray-300 text-sm">
                {t.hero.eventDate}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
