import { motion } from 'framer-motion'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const About = () => {
  const { language } = useAppContext()
  const t = translations[language]

  const features = [
    {
      title: t.about.feature1Title,
      description: t.about.feature1Description,
      icon: "🚀"
    },
    {
      title: t.about.feature2Title,
      description: t.about.feature2Description,
      icon: "🤝"
    },
    {
      title: t.about.feature3Title,
      description: t.about.feature3Description,
      icon: "💡"
    },
    {
      title: t.about.feature4Title,
      description: t.about.feature4Description,
      icon: "🌐"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">{t.about.whyItMatters}</h3>
            <p className="text-gray-300 mb-6">
              {t.about.whyText1}
            </p>
            <p className="text-gray-300 mb-6">
              {t.about.whyText2}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-neon-purple/20 border border-neon-purple/50 rounded-full">
                <span className="text-neon-purple">{t.about.attendees}</span>
              </div>
              <div className="px-4 py-2 bg-neon-blue/20 border border-neon-blue/50 rounded-full">
                <span className="text-neon-blue">{t.about.speakers}</span>
              </div>
              <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                <span className="text-green-400">{t.about.content}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-bg p-6 rounded-xl border border-gray-700 hover:border-neon-purple/50 transition-all duration-300 card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            {t.about.whoShouldAttend}
          </h3>
          
          {/* Audience Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Academic Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card-bg border border-gray-700 rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎓</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.about.academicCommunity}</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {t.about.academicCommunityList.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </motion.div>

            {/* Economic Actors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card-bg border border-gray-700 rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💼</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.about.economicActors}</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {t.about.economicActorsList.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </motion.div>

            {/* Institutions & Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card-bg border border-gray-700 rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏛️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.about.institutionsMedia}</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {t.about.institutionsMediaList.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
            >
              {t.about.joinUs}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
