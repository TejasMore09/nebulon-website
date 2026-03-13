'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  icon: string;
  gradient: string;
}

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: 'Opening Ceremony',
      category: 'Event',
      icon: '🎭',
      gradient: 'from-neon-purple to-electric-blue',
    },
    {
      id: 2,
      title: 'Team Collaboration',
      category: 'Hacking',
      icon: '💻',
      gradient: 'from-electric-blue to-neon-pink',
    },
    {
      id: 3,
      title: 'Prize Distribution',
      category: 'Awards',
      icon: '🏆',
      gradient: 'from-neon-pink to-neon-purple',
    },
    {
      id: 4,
      title: 'Mentoring Session',
      category: 'Workshop',
      icon: '🎓',
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      id: 5,
      title: 'Code Review',
      category: 'Judging',
      icon: '📋',
      gradient: 'from-electric-blue to-neon-purple',
    },
    {
      id: 6,
      title: 'Closing Celebration',
      category: 'Event',
      icon: '🎉',
      gradient: 'from-neon-pink to-electric-blue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text gradient-blue-pink">
              Event Highlights
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Moments from our unforgettable hackathon experience
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative group cursor-pointer ${
                index === 0 || index === 3 ? 'lg:col-span-1 lg:row-span-2' : ''
              }`}
              onClick={() => setSelectedId(image.id)}
            >
              {/* Image Card */}
              <div className="glass-dark border-glow rounded-lg overflow-hidden h-64 md:h-72 relative glow-purple group-hover:glow-blue transition-all duration-300">
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${image.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl md:text-7xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {image.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {image.title}
                  </h3>

                  {/* Category */}
                  <motion.div
                    className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {image.category}
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-white font-semibold text-lg">
                      Click to view
                    </p>
                  </motion.div>
                </motion.div>

                {/* Glow Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{
                    boxShadow: [
                      'inset 0 0 10px rgba(106, 0, 255, 0.2)',
                      'inset 0 0 20px rgba(0, 212, 255, 0.3)',
                      'inset 0 0 10px rgba(106, 0, 255, 0.2)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full"
              >
                {/* Modal Content */}
                <div className="glass-dark border-glow rounded-lg overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
                    {galleryImages.map((img) => (
                      img.id === selectedId && (
                        <motion.div
                          key={img.id}
                          className={`absolute inset-0 bg-gradient-to-br ${img.gradient} opacity-60 flex items-center justify-center`}
                        >
                          <div className="text-8xl">{img.icon}</div>
                        </motion.div>
                      )
                    ))}
                  </div>

                  {/* Details */}
                  <div className="p-6 md:p-8">
                    {galleryImages.map((img) => (
                      img.id === selectedId && (
                        <motion.div
                          key={img.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                            {img.title}
                          </h3>
                          <p className="text-foreground/70 text-lg mb-4">
                            {img.category}
                          </p>
                          <p className="text-foreground/60">
                            This moment captures the essence of Nebulon'26 -
                            innovation, collaboration, and achievement.
                          </p>
                        </motion.div>
                      )
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedId(null)}
                  className="absolute -top-12 right-0 text-white hover:text-electric-blue transition-colors duration-300"
                >
                  <X size={32} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
