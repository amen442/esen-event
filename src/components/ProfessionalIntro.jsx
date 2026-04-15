import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProfessionalIntro = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState('initial')
  const [showParticles, setShowParticles] = useState(false)

  const timeline = [
    { year: 2004, label: "Foundation" },
    { year: 2010, label: "Growth" },
    { year: 2015, label: "Digital Shift" },
    { year: 2020, label: "Innovation" },
    { year: 2026, label: "Impact" }
  ]

  useEffect(() => {
    const phases = [
      { name: 'initial', duration: 800 },
      { name: 'timeline', duration: 3000 },
      { name: 'celebration', duration: 1500 },
      { name: 'final', duration: 1000 },
      { name: 'complete', duration: 500 }
    ]

    let currentIndex = 0
    const advancePhase = () => {
      if (currentIndex < phases.length - 1) {
        currentIndex++
        setCurrentPhase(phases[currentIndex].name)
        
        if (phases[currentIndex].name === 'celebration') {
          setShowParticles(true)
        }
        
        if (phases[currentIndex].name === 'complete') {
          setTimeout(() => onComplete(), 300)
        } else {
          setTimeout(advancePhase, phases[currentIndex].duration)
        }
      }
    }

    const timer = setTimeout(advancePhase, phases[0].duration)
    return () => clearTimeout(timer)
  }, [onComplete])

  const Particle = ({ delay }) => (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0.3],
        x: [0, (Math.random() - 0.5) * 200],
        y: [0, -Math.random() * 150 - 50]
      }}
      transition={{
        duration: 2,
        delay: delay,
        ease: "easeOut"
      }}
      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
    />
  )

  const Flame = ({ delay, x, y }) => (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0,
        rotate: 0
      }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1.5, 0.5],
        rotate: [0, 180, 360],
        y: [0, -80 - Math.random() * 40],
        x: [0, (Math.random() - 0.5) * 60]
      }}
      transition={{
        duration: 2.5 + Math.random() * 1,
        delay: delay,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
      className="absolute w-2 h-4"
      style={{
        left: `${x}%`,
        bottom: `${y}%`
      }}
    >
      <motion.div
        animate={{
          background: [
            "linear-gradient(to top, #ff6b35, #f7931e, #ffd700)",
            "linear-gradient(to top, #ff4757, #ff6348, #ffa502)",
            "linear-gradient(to top, #ff6b35, #f7931e, #ffd700)"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-full h-full rounded-full blur-sm"
      />
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-8">
        {/* Phase 1: Initial text */}
        <AnimatePresence>
          {currentPhase === 'initial' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.p
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-2xl md:text-3xl font-light text-gray-400 tracking-wide"
              >
                Since 2004...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: Timeline */}
        <AnimatePresence>
          {currentPhase === 'timeline' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Timeline line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(147, 51, 234, 0.8)",
                      "0 0 10px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 h-full"
                />
              </motion.div>

              {/* Timeline milestones */}
              <div className="absolute inset-0 flex justify-between items-center">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.5,
                      duration: 0.6
                    }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-3 h-3 bg-white rounded-full mx-auto mb-2 relative"
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(255, 255, 255, 0.5)",
                            "0 0 20px rgba(255, 255, 255, 0.8)",
                            "0 0 10px rgba(255, 255, 255, 0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                      />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.5 + 0.3 }}
                      className="text-xs md:text-sm text-gray-400 font-medium"
                    >
                      {item.year}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.5 + 0.5 }}
                      className="text-xs text-gray-500 mt-1"
                    >
                      {item.label}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 3: Celebration */}
        <AnimatePresence>
          {currentPhase === 'celebration' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="text-center relative"
            >
              {/* Light burst effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl" />
              </motion.div>

              {/* Flame effects - festive elements */}
              {showParticles && [...Array(15)].map((_, i) => (
                <Flame 
                  key={`flame-${i}`} 
                  delay={i * 0.1}
                  x={20 + (i * 4)}
                  y={10 + Math.random() * 20}
                />
              ))}

              {/* Particles */}
              {showParticles && [...Array(20)].map((_, i) => (
                <Particle key={i} delay={i * 0.05} />
              ))}

              {/* Main text */}
              <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10"
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide"
                >
                  22 Years of
                  <span className="block font-normal bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl md:text-2xl text-gray-400 font-light"
                >
                  ESEN Anniversary
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 4: Final transition */}
        <AnimatePresence>
          {currentPhase === 'final' && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-light text-white tracking-wide"
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ESEN
                </span>
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ProfessionalIntro
