'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Check } from 'lucide-react';

export default function Eligibility() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const eligibilityCards = [
    {
      title: 'Student Eligibility',
      description:
        'Open to Undergraduate and Postgraduate students from recognized Indian universities.',
      icon: '🎓',
    },
    {
      title: 'Fields of Study',
      description:
        'Students from Engineering, Arts, Commerce, Science, and other disciplines are welcome.',
      icon: '🌐',
    },
  ];

  const requirements = [
    'All Indian Universities Welcome',
    'Cross-Disciplinary Teams Encouraged',
    'Team Size: 1–3 Members',
    'On-site Final Round Participation Required',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="eligibility"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text gradient-purple-pink">
              Eligibility Criteria
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Check if you meet the requirements to participate
          </p>
        </motion.div>

        {/* Eligibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {eligibilityCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-dark border-glow rounded-lg p-8 text-center cursor-pointer group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{card.icon}</div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>

                <p className="text-foreground/70">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Requirements */}
        <motion.div
          variants={itemVariants}
          className="glass-dark border-glow rounded-lg p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Key Requirements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="flex-shrink-0"
                >
                  <Check className="w-6 h-6 text-electric-blue" />
                </motion.div>

                <span className="text-foreground/80 font-medium">
                  {req}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}