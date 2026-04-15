import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const Register = () => {
  const { language } = useAppContext()
  const t = translations[language]
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profile: '',
    organization: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isCheckingEmail, setIsCheckingEmail] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.form.fullNameRequired
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.form.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.form.emailInvalid
    } else {
      // Check email uniqueness using localStorage
      const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]')
      if (registeredEmails.includes(formData.email.toLowerCase())) {
        newErrors.email = t.form.emailAlreadyRegistered
      }
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t.form.phoneRequired
    } else if (!/^\d{2}\s\d{3}\s\d{3}$/.test(formData.phone)) {
      newErrors.phone = t.form.phoneFormat
    } else if (formData.phone.replace(/\s/g, '').length > 8) {
      newErrors.phone = t.form.phoneMaxDigits
    }
    
    if (!formData.profile) {
      newErrors.profile = t.form.profileRequired
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const scriptURL = "https://script.google.com/macros/s/AKfycbyRKK_193FUB4GBEhFm5cJDLVtbPZUtl88BBCIMqprDMckJq5I_a9RzyaRpprVgxO7KXw/exec"

    if (!validateForm()) return
    
    setIsSubmitting(true)

    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          profile: formData.profile,
          organization: formData.organization
        }),
        redirect: "follow"
      })

      setIsSubmitting(false)
      setIsSuccess(true)

      // Save email to localStorage for uniqueness check
      const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]')
      registeredEmails.push(formData.email.toLowerCase())
      localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails))

      // Réinitialiser le formulaire
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        profile: '',
        organization: ''
      })

    } catch (error) {
      setIsSubmitting(false)
      alert(t.form.errorAlert)
      console.error(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Limitation automatique pour le téléphone (max 8 chiffres)
    if (name === 'phone') {
      const digitsOnly = value.replace(/\s/g, '') // Supprime les espaces
      const cleanedValue = digitsOnly.replace(/\D/g, '') // Garde seulement les chiffres
      
      if (cleanedValue.length > 8) {
        return // Ne pas mettre à jour si plus de 8 chiffres
      }
      
      // Formatage automatique XX XXX XXX
      let formattedValue = cleanedValue
      if (cleanedValue.length >= 3) {
        formattedValue = cleanedValue.slice(0, 2) + ' ' + cleanedValue.slice(2, 5)
      }
      if (cleanedValue.length >= 5) {
        formattedValue = cleanedValue.slice(0, 2) + ' ' + cleanedValue.slice(2, 5) + ' ' + cleanedValue.slice(5, 8)
      }
      
      setFormData(prev => ({ ...prev, [name]: formattedValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSuccess) {
    return (
      <section id="register" className="py-20 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-card-bg p-12 rounded-2xl border border-gray-700"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.form.registrationSuccess}
            </h2>
            <p className="text-xl text-gray-300">
              {t.form.successMessage}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSuccess(false)}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
            >
              {t.form.newRegistration}
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-20 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.form.eventRegistrationTitle}</span>
          </h2>
          <p className="text-xl text-gray-300">
            {t.form.eventRegistrationDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-2xl mb-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name | Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {t.form.fullName} *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.form.fullNamePlaceholder}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.fullName && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-red-400 text-xs"
                  >
                    {errors.fullName}
                  </motion.p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {t.form.emailAddress} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70 ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-red-400 text-xs"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Row 2: Phone | Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {t.form.phoneNumber} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.form.phonePlaceholder}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70 ${
                    errors.phone ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.phone && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-red-400 text-xs"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </motion.div>

              {/* Profile Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {t.form.status} *
                </label>
                <select
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70 appearance-none cursor-pointer ${
                    errors.profile ? 'border-red-500' : 'border-gray-600'
                  }`}
                >
                  <option value="" className="bg-gray-800">{t.form.profilePlaceholder}</option>
                  <option value="etudiant" className="bg-gray-800">{t.form.profileStudent}</option>
                  <option value="alumni" className="bg-gray-800">{t.form.profileAlumni}</option>
                  <option value="professionnel" className="bg-gray-800">{t.form.profileProfessional}</option>
                  <option value="enseignant" className="bg-gray-800">{t.form.profileTeacher}</option>
                  <option value="autre" className="bg-gray-800">{t.form.profileOther}</option>
                </select>
                {errors.profile && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-red-400 text-xs"
                  >
                    {errors.profile}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Row 3: Organization (full width) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <label className="block text-gray-300 text-sm font-medium mb-2">
                {t.form.organizationLabel}
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder={t.form.organizationPlaceholder}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
              />
            </motion.div>

            {/* Row 4: Submit button (centered) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center pt-4"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.form.processingText}
                  </span>
                ) : (
                  t.form.submitButton
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Foot Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-gray-400">
              {t.form.requiredFields}
            </p>
          </motion.div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-2xl border border-purple-500/30"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl">🎉</span>
            <h3 className="text-2xl font-bold text-white">{t.form.freeRegistrationTitle}</h3>
          </div>
          <p className="text-gray-300 text-center">
            {t.form.freeRegistrationDescription}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Register
