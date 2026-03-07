'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const highlights = [
    {
      title: 'Innovation Hub',
      description: 'Connect with brilliant minds and collaborate on groundbreaking ideas.',
      icon: '💡',
    },
    {
      title: 'Learn & Grow',
      description: 'Enhance your skills and gain hands-on experience with cutting-edge technologies.',
      icon: '📚',
    },
    {
      title: 'Win Big',
      description: 'Compete for amazing prizes and recognition from industry experts.',
      icon: '🎯',
    },
    {
      title: 'Build Together',
      description: 'Form lasting connections and build your professional network.',
      icon: '🤝',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
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
            <span className="gradient-text gradient-purple-blue">
              Where Innovators Build the Future
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nebulon'26 is a platform for talented individuals to showcase their skills, 
            collaborate with peers, and create solutions that matter. Join us for an 
            unforgettable 24-hour innovation challenge.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-dark border-glow rounded-lg p-6 cursor-pointer"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-foreground/70">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
