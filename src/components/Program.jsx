import { motion } from 'framer-motion'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const Program = () => {
  const { language } = useAppContext()
  const t = translations[language]

  const schedule = t.program.schedule

  const getTypeColor = (type) => {
    switch (type) {
      case 'keynote':
        return 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50'
      case 'panel':
        return 'bg-green-500/20 border-green-500/50'
      case 'workshop':
        return 'bg-orange-500/20 border-orange-500/50'
      case 'case-study':
        return 'bg-pink-500/20 border-pink-500/50'
      case 'insight':
        return 'bg-cyan-500/20 border-cyan-500/50'
      case 'chat':
        return 'bg-yellow-500/20 border-yellow-500/50'
      default:
        return 'bg-gray-500/20 border-gray-500/50'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'keynote':
        return '🎯'
      case 'panel':
        return '👥'
      case 'workshop':
        return '🔧'
      case 'case-study':
        return '📚'
      case 'insight':
        return '💡'
      case 'chat':
        return '🔥'
      default:
        return '☕'
    }
  }

  return (
    <section id="program" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.program.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.program.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-purple to-neon-blue opacity-30"></div>

          <div className="space-y-8">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Time Badge */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="inline-block px-4 py-2 bg-neon-purple/20 border border-neon-purple/50 rounded-full">
                    <span className="text-neon-purple font-semibold">{item.time}</span>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 w-8 h-8 bg-dark-bg border-4 border-neon-purple rounded-full flex items-center justify-center">
                  <span className="text-xs">{getTypeIcon(item.type)}</span>
                </div>

                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl border ${getTypeColor(item.type)} card-hover`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    {item.speaker && (
                      <p className="text-neon-purple font-semibold mb-3">{item.speaker}</p>
                    )}
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 p-8 rounded-2xl border border-neon-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-white">{t.program.downloadSchedule}</h3>
            <p className="text-gray-300 mb-6">
              {t.program.downloadDescription}
            </p>
            <motion.a
              href="/assets/E-commerce le retour.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
            >
              {t.program.downloadPDF}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Program
