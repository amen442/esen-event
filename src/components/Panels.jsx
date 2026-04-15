import { motion } from 'framer-motion'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const Panels = () => {
  const { language } = useAppContext()
  const t = translations[language]

  // Opening Speakers
  const openingSpeakers = [

    {
      name: "M. Sofiene Hemissi",
      role: "Ministre - Ministère des Technologies de la Communication",
      photo: "/assets/images/Ouverture-officielle/M. Sofiene Hemissi.png"
    },
        {
      name: "M. Ameur Cherif",
      role: "Président - Université de la Manouba",
      photo: "/assets/images/Ouverture-officielle/M. Ameur Cherif.png"
    },
    {
      name: "Mme Jihene El Ouakdi",
      role: "Président du Conseil d'Administration",
      photo: "/assets/images/Ouverture-officielle/Mme jihene el ouakdi.png"
    },
    {
      name: "Rim-Saied",
      role: "PDG S2T",
      photo: "/assets/images/Ouverture-officielle/Rim-Saied.png"
    }
  ]

  // Panel 2 Speakers
  const panel2Speakers = [
    {
      name: "Khabeb Hadhri",
      role: "Directeur du Développement du Commerce Electronique et de l'Economie Immatérielle - Ministère de Commerce",
      photo: "/assets/images/Panel 2/Khabeb_Hadhri.png"
    },
    {
      name: "Mohammed El Kamel",
      role: "CEO & Co-founder of Sellmax",
      photo: "/assets/images/Panel 2/mohmmed-el kamel.png"
    },
    {
      name: "Walid Kooli",
      role: "Expert accompagnateur en e-commerce et stratégies digitales",
      photo: "/assets/images/Panel 2/walid-kooli.png"
    },
    {
      name: "Sarah Lamine",
      role: "CEO - Convergen",
      photo: "/assets/images/Panel 2/Sarah_Lamine.png"
    },
    {
      name: "Sabry Maârufi",
      role: "CMO of Shipper",
      photo: "/assets/images/Panel 2/Sabry_Maaroufi-removebg-preview.png"
    }
  ]

  // Panel 1 Speakers
  const panel1Speakers = [
    {
      name: "Sami Ghazali",
      role: "Directeur Général Economie Numérique - MTC",
      photo: "/assets/images/Panel 1/Sami_Ghazali-removebg-preview.png"
    },
    {
      name: "Imed Hidri",
      role: "Secrétaire Général UMA 2010 - 2017",
      photo: "/assets/images/panel 1/Imed Hidri.png"
    },
    {
      name: "Chokri Mabkhout",
      role: "Président UMA 2010 - 2017",
      photo: "/assets/images/Panel 1/Chokri_Mabkhout-removebg-preview.png"
    },
    {
      name: "Jouheina Gherib",
      role: "Présidente UMA 2017 - 2024",
      photo: "/assets/images/Panel 1/Jouheina_Gherib-removebg-preview.png"
    },
    {
      name: "Samir Zarai",
      role: "Secrétaire Général ESEN 2018 – Auj.",
      photo: "/assets/images/panel 1/Samir Zarai.png"
    },
    {
      name: "Mohamed Anis Bach Tobji",
      role: "Directeur ESEN 2020 - 2024",
      photo: "/assets/images/Panel 1/Mohamed_Anis_Bach_Tobji-removebg-preview.png"
    },
    {
      name: "Sonia Bousselmi",
      role: "Secrétaire Général ESEN 2016 - 2018",
      photo: "/assets/images/panel 1/Sonia Bousselmi.png"
    },
    {
      name: "Rim Jellouli",
      role: "Directrice ESEN 2010 - 2017",
      photo: "/assets/images/Panel 1/Rim_Jellouli-removebg-preview.png"
    },
    {
      name: "Jamel Bouziri",
      role: "Secrétaire Général ESEN 2011 - 2016",
      photo: "/assets/images/Panel 1/Jamel_Bouziri-removebg-preview.png"
    },
    {
      name: "Malek Ghenima",
      role: "Directeur ESEN 2004-2010",
      photo: "/assets/images/panel 1/Malek Ghenima.png"
    }
  ]

  // Panel 3 Speakers
  const panel3Speakers = [
    {
      name: "Asma Kamoun",
      role: "CEO - Social Media Conseils",
      photo: "/assets/images/Panel 3/Asma_Kamoun-removebg-preview.png"
    },
    {
      name: "Ayoub Ben Gader",
      role: "Founder of mybesthome | Content creator",
      photo: "/assets/images/Panel 3/Ayoub_Ben_Gader.png"
    },
    {
      name: "Yossra Boukhchina",
      role: "Finance, Administrative & HR Director (alumni de l'ESEN)",
      photo: "/assets/images/Panel 3/Yossra_Boukhchina.png"
    },
    {
      name: "Dhia Mazhoud",
      role: "Content Creator | Social Media Marketing Specialist | Founder of Brima Digital (alumni de l'ESEN)",
      photo: "/assets/images/Panel 3/dhia_mazhoud.png"
    },
    {
      name: "Ramy Ben Mohamed",
      role: "Content Creator (alumni de l'ESEN)",
      photo: "/assets/images/Panel 3/ramy_ben_mohamed.png"
    },
  ]

  return (
    <section id="panels" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Opening */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.panels.openingTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              {t.panels.openingTime}
            </p>
            <p className="text-xl text-gray-300">
              {t.panels.openingDescription}
            </p>
          </motion.div>

          {/* Opening Speakers - Same design as Panel 1 & 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {openingSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="text-center transition-all duration-300"
              >
                <div className="w-40 h-40 overflow-hidden mx-auto mb-4 rounded-lg">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {speaker.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Panel 1 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.panels.panel1Title}
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              {t.panels.panel1Time}
            </p>
            <p className="text-xl text-gray-300">
              {t.panels.panel1Description}
            </p>
          </motion.div>

          {/* Panel 1 Speakers - 10 persons (5+5 layout) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {panel1Speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="text-center transition-all duration-300"
              >
                <div className="w-40 h-40 overflow-hidden mx-auto mb-4 rounded-lg">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {speaker.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Panel 2 */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.panels.panel2Title}
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              {t.panels.panel2Time}
            </p>
            <p className="text-xl text-gray-300">
              {t.panels.panel2Description}
            </p>
          </motion.div>

          {/* Panel 2 Speakers - 5 persons with more space */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {panel2Speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="text-center transition-all duration-300"
              >
                <div className="w-40 h-40 overflow-hidden mx-auto mb-4 rounded-lg">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {speaker.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Panel 3 */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.panels.panel3Title}
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              {t.panels.panel3Time}
            </p>
            <p className="text-xl text-gray-300">
              {t.panels.panel3Description}
            </p>
          </motion.div>

          {/* Panel 3 Speakers - 5 persons with more space */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {panel3Speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="text-center transition-all duration-300"
              >
                <div className="w-40 h-40 overflow-hidden mx-auto mb-4 rounded-lg">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {speaker.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Panels
