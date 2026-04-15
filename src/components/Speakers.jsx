import { motion } from 'framer-motion'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const Speakers = () => {
  const { language } = useAppContext()
  const t = translations[language]

  const partners = [
    { name: "ATODD", logo: "/assets/images/logos_entreprises/ATODD.png" },
    { name: "Bee Coders", logo: "/assets/images/logos_entreprises/Bee_Coders.png" },
    { name: "Heads App", logo: "/assets/images/logos_entreprises/Heads_App.png" },
    { name: "OpusLab", logo: "/assets/images/logos_entreprises/OpusLab.png" },
    { name: "Qualipro", logo: "/assets/images/logos_entreprises/Qualipro.png" },
    { name: "Startup Village", logo: "/assets/images/logos_entreprises/Startup_Village.png" },
    { name: "Virtual Dev", logo: "/assets/images/logos_entreprises/Virtual_Dev.png" },
    { name: "Wikistartup", logo: "/assets/images/logos_entreprises/Wikistartup.png" }
  ]

  return (
    <section id="speakers" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Exposants & Partenaires</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos partenaires stratégiques et exposants qui façonnent l'écosystème du e-commerce en Tunisie
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto object-contain transition-all duration-300 mx-auto"
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 p-8 rounded-2xl border border-neon-purple/30"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Devenez Partenaire</h3>
          <p className="text-gray-300 mb-6">
            Rejoignez-nous pour célébrer 22 ans d'excellence dans le e-commerce académique tunisien
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
          >
            Contacter le partenariat
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Speakers
