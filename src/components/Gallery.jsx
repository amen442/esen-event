import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../contexts/AppContext'
import { translations } from '../locales/translations'

const Gallery = () => {
  const { language } = useAppContext()
  const t = translations[language]
  const [selectedImage, setSelectedImage] = useState(null)

  // Données des moments forts des éditions précédentes avec images réelles
  const galleryImages = [
    {
      id: 1,
      src: '/assets/images/galerie/2013.jpg',
      thumbnail: '/assets/images/galerie/2013.jpg',
      title: 'ESEN 10 Ans - Célébration inaugurale',
      year: '2013',
      category: 'cérémonie',
      description: 'Première grande célébration de l excellence digitale à l ESEN'
    },
    {
      id: 2,
      src: '/assets/images/galerie/2015.jpg',
      thumbnail: '/assets/images/galerie/2015.jpg',
      title: 'ESEN 12 Ans - Forum innovation',
      year: '2015',
      category: 'forum',
      description: 'Rencontres entre étudiants et professionnels du digital'
    },
    {
      id: 3,
      src: '/assets/images/galerie/2017.jpg',
      thumbnail: '/assets/images/galerie/2017.jpg',
      title: 'ESEN 14 Ans - Conférence internationale',
      year: '2017',
      category: 'conférence',
      description: 'Présentation des nouvelles tendances du e-commerce mondial'
    },
    {
      id: 4,
      src: '/assets/images/galerie/2019.jpg',
      thumbnail: '/assets/images/galerie/2019.jpg',
      title: 'ESEN 16 Ans - Gala d excellence',
      year: '2019',
      category: 'gala',
      description: 'Soirée prestigieuse de remise des prix et networking'
    },
    {
      id: 5,
      src: '/assets/images/galerie/image1.jpg',
      thumbnail: '/assets/images/galerie/image1.jpg',
      title: 'ESEN 18 Ans - Exposition technologique',
      year: '2021',
      category: 'exposition',
      description: 'Présentation des projets innovants et startups étudiantes'
    },
    {
      id: 6,
      src: '/assets/images/galerie/image2.jpg',
      thumbnail: '/assets/images/galerie/image2.jpg',
      title: 'ESEN 20 Ans - Sommet digital',
      year: '2023',
      category: 'sommet',
      description: 'Rassemblement des leaders du e-commerce nord-africain'
    },
    {
      id: 7,
      src: '/assets/images/galerie/image3.jpg',
      thumbnail: '/assets/images/galerie/image3.jpg',
      title: 'ESEN 22 Ans - Vision future',
      year: '2024',
      category: 'vision',
      description: 'Projection sur l avenir du commerce digital et de l innovation'
    },
    {
      id: 8,
      src: '/assets/images/galerie/image5.jpg',
      thumbnail: '/assets/images/galerie/image5.jpg',
      title: 'ESEN 11 Ans - Workshop pratique',
      year: '2014',
      category: 'atelier',
      description: 'Sessions hands-on sur les technologies émergentes'
    },
    {
      id: 9,
      src: '/assets/images/galerie/images4.jpg',
      thumbnail: '/assets/images/galerie/images4.jpg',
      title: 'ESEN 13 Ans - Hackathon digital',
      year: '2016',
      category: 'compétition',
      description: 'Compétition de développement et d innovation digitale'
    },
    {
      id: 10,
      src: '/assets/images/galerie/imarge6.jpg',
      thumbnail: '/assets/images/galerie/imarge6.jpg',
      title: 'ESEN 15 Ans - Forum partenaires',
      year: '2018',
      category: 'partenariat',
      description: 'Rencontre stratégique avec les entreprises partenaires'
    }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(147, 51, 234, 0.05) 35px, rgba(147, 51, 234, 0.05) 70px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.gallery.title}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            {t.gallery.description}
          </motion.p>
        </motion.div>

        {/* Gallery Horizontal Scroll */}
        <div className="overflow-hidden mb-12">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
            style={{ width: 'max-content' }}
          >
            {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="group flex-shrink-0 w-80"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-neon-purple/50 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-widescreen relative overflow-hidden">
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23374151"/%3E%3C/svg%3E';
                        e.target.className = 'w-full h-full object-cover';
                      }}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="px-3 py-1 bg-neon-purple/80 backdrop-blur-sm rounded text-xs font-medium">
                      {image.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/80 transition-colors duration-300 text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-widescreen overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23374151"/%3E%3C/svg%3E';
                  e.target.className = 'w-full h-full object-contain';
                }}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-transparent via-gray-900/95 to-gray-900">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-neon-purple/80 backdrop-blur-sm rounded text-sm font-medium">
                    {selectedImage.year}
                  </span>
                  <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {selectedImage.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
