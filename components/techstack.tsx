'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function TechStack() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐋' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
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
              Recommended Tech Stack
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Popular technologies for building your projects
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotateZ: 5,
                boxShadow: '0 10px 30px rgba(106, 0, 255, 0.4)',
              }}
              className="glass-dark border-glow rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer h-32 group relative overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <p className="font-semibold text-foreground text-sm">
                  {tech.name}
                </p>
              </div>

              {/* Glow Effect */}
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
