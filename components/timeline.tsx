'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const timeline = [
    {
      date: 'March 8',
      title: 'Registration Opens',
      description: 'Sign up and form your teams for the hackathon.',
      icon: '📝',
    },
    {
      date: 'March 18',
      title: 'Registration Deadline',
      description: 'Final day to register and secure your spot in the competition.',
      icon: '💡',
    },
    {
      date: 'March 19',
      title: 'Idea Submission Deadline',
      description: 'Submit your innovative ideas and project proposals.',
      icon: '💡',
    },
    {
      date: 'March 24',
      title: 'Problem Statement Release',
      description: 'Official problem statements and guidelines released.',
      icon: '📋',
    },
    {
      date: 'March 25',
      title: 'Final Presentation',
      description: 'Present your projects and compete for prizes.',
      icon: '🏁',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text gradient-purple-pink">
              Event Timeline
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Mark your calendars for these important dates
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-purple to-electric-blue opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass-dark border-glow rounded-lg p-6"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-electric-blue font-bold text-sm uppercase tracking-wider mb-1">
                        {item.date}
                      </h3>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex w-full md:w-0 justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-electric-blue glow-purple flex-shrink-0"
                    />
                  </div>

                  {/* Spacer for layout */}
                  <div className="w-full md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
