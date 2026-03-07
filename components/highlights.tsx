'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function Highlights() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const phases = [
    {
      round: 'Round 1',
      title: 'Idea Submission',
      description: 'Submit your innovative ideas and compete with other participants.',
      details: ['March 19 - Deadline', 'Virtual Submission', 'Team Size: 1-3 members'],
      icon: '💻',
    },
    {
      round: 'Round 2',
      title: 'Live Presentation',
      description: 'Present your project to judges and demonstrate your innovation.',
      details: ['March 25 - Finals', 'Live Event', 'Prize Announcement'],
      icon: '🚀',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl" />
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
              Competition Phases
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            A two-phase approach to showcase your innovation
          </p>
        </motion.div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-dark border-glow rounded-lg p-8 cursor-pointer relative overflow-hidden group"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <h3 className="text-2xl font-bold text-electric-blue mb-2">
                  {phase.round}
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {phase.title}
                </h4>
                <p className="text-foreground/70 mb-6">{phase.description}</p>

                <div className="space-y-2">
                  {phase.details.map((detail, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-neon-pink">▸</span>
                      <span className="text-foreground/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
