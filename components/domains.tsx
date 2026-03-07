'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function Domains() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const domains = [
    {
      title: 'Healthcare Tech',
      description: 'Build solutions for better healthcare delivery and patient outcomes.',
      icon: '🏥',
      color: 'from-neon-purple',
    },
    {
      title: 'FinTech',
      description: 'Create innovative financial solutions and digital payment systems.',
      icon: '💰',
      color: 'from-electric-blue',
    },
    {
      title: 'EdTech',
      description: 'Develop tools that revolutionize education and learning experiences.',
      icon: '📚',
      color: 'from-neon-pink',
    },
    {
      title: 'Sustainability',
      description: 'Address environmental challenges with tech-driven solutions.',
      icon: '🌍',
      color: 'from-electric-blue',
    },
    {
      title: 'Smart Cities',
      description: 'Build applications that make urban living smarter and safer.',
      icon: '🏙️',
      color: 'from-neon-purple',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="domains"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
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
              Problem Domains
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Choose from diverse themes and build solutions that impact the world
          </p>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                y: -10,
                boxShadow: '0 20px 40px rgba(106, 0, 255, 0.3)',
              }}
              className="relative group overflow-hidden rounded-lg glass-dark border-glow p-6 cursor-pointer h-full"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${domain.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {domain.title}
                </h3>
                <p className="text-foreground/70 text-sm">{domain.description}</p>


              </div>

              {/* Border Glow on Hover */}
              <motion.div
                className="absolute inset-0 rounded-lg border border-electric-blue/0 group-hover:border-electric-blue/50 transition-colors duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
