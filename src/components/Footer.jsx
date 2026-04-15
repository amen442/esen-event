import { motion } from 'framer-motion'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const Footer = () => {
  const { language } = useAppContext()
  const t = translations[language]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/images/logo.png" 
                alt="ESEN Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  console.error('Footer logo not found:', e.target.src);
                  // Fallback: show text logo if image fails
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl flex items-center justify-center shadow-lg" style={{display: 'none'}}>
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold gradient-text">ESEN</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800/50 backdrop-blur rounded-lg flex items-center justify-center hover:bg-blue-600/20 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                title="Facebook"
              >
                <img 
                  src="/assets/images/facebbok.webp" 
                  alt="Facebook" 
                  className="w-7 h-7 object-contain"
                />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800/50 backdrop-blur rounded-lg flex items-center justify-center hover:bg-pink-600/20 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                title="Instagram"
              >
                <img 
                  src="/assets/images/instagram.webp" 
                  alt="Instagram" 
                  className="w-7 h-7 object-contain"
                />
              </motion.a>
              <motion.a
                href="mailto:ambassadors@esen.tn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800/50 backdrop-blur rounded-lg flex items-center justify-center hover:bg-red-600/20 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                title="Email"
              >
                <img 
                  src="/assets/images/gmail.webp" 
                  alt="Gmail" 
                  className="w-7 h-7 object-contain"
                />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800/50 backdrop-blur rounded-lg flex items-center justify-center hover:bg-blue-700/20 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300"
                title="LinkedIn"
              >
                <img 
                  src="/assets/images/linkedin.webp" 
                  alt="LinkedIn" 
                  className="w-6 h-6 object-contain"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full mr-3"></span>
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-neon-purple transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {t.footer.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-neon-purple transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {t.footer.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#program')}
                  className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-neon-purple transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {t.footer.program}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#speakers')}
                  className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-neon-purple transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {t.footer.speakers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#register')}
                  className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-neon-purple transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {t.footer.register}
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full mr-3"></span>
              {t.footer.eventInfoTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <img 
                    src="/assets/images/date-removebg-preview.png" 
                    alt="Date" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <i className="fas fa-calendar text-neon-purple text-sm" style={{display: 'none'}}></i>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">{t.footer.date}</p>
                  <p className="text-gray-500 text-sm">{t.footer.dayOfWeek}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <img 
                    src="/assets/images/time.png" 
                    alt="Time" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <i className="fas fa-clock text-neon-purple text-sm" style={{display: 'none'}}></i>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">{t.footer.time}</p>
                  <p className="text-gray-500 text-sm">{t.footer.duration}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <img 
                    src="/assets/images/lieu.png" 
                    alt="Lieu" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <i className="fas fa-map-marker-alt text-neon-purple text-sm" style={{display: 'none'}}></i>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">{t.footer.location}</p>
                  <p className="text-gray-500 text-sm">{t.footer.locationDetails}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <i className="fas fa-ticket-alt text-neon-purple text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">{t.footer.freeRegistration}</p>
                  <p className="text-gray-500 text-sm">{t.footer.limitedSpots}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full mr-3"></span>
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <img 
                    src="/assets/images/gmail.webp" 
                    alt="Email" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <i className="fas fa-envelope text-neon-purple text-sm" style={{display: 'none'}}></i>
                </div>
                <div>
                  <a href="mailto:ambassadors@esen.tn" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 font-medium">
                    ambassadors@esen.tn
                  </a>
                  <p className="text-gray-500 text-sm">{t.footer.contactMain}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <img 
                    src="/assets/images/tel.webp" 
                    alt="Phone" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <i className="fas fa-phone text-neon-purple text-sm" style={{display: 'none'}}></i>
                </div>
                <div>
                  <a href="tel:+21671960000" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 font-medium">
                    {t.footer.phone}
                  </a>
                  <p className="text-gray-500 text-sm">{t.footer.workHours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <img 
                    src="/assets/images/web.png" 
                    alt="Website" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <i className="fas fa-globe text-neon-purple text-sm" style={{display: 'none'}}></i>
                </div>
                <div>
                  <a href="https://esen.rnu.tn/portail/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 font-medium">
                    {t.footer.website}
                  </a>
                  <p className="text-gray-500 text-sm">{t.footer.officialSite}</p>
                </div>
              </li>
            </ul>

            {/* Newsletter Section */}
            <div className="mt-6 p-4 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-lg border border-neon-purple/20">
              <p className="text-gray-300 text-sm mb-3">{t.footer.newsletterText}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-neon-purple/50 focus:bg-gray-800/70 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300"
                >
                  {t.footer.newsletterButton}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                {t.footer.copyright}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {t.footer.schoolName}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-y-[-2px]">
                {t.footer.privacyPolicy}
              </button>
              <button className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-y-[-2px]">
                {t.footer.termsOfService}
              </button>
              <button className="text-gray-400 hover:text-neon-purple transition-all duration-300 hover:translate-y-[-2px]">
                {t.footer.cookiePolicy}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
