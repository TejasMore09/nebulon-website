'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function RegistrationCounter() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  const targetCount = 100;

  useEffect(() => {
    if (!inView) return;

    const increment = targetCount / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative"
      >
        <div className="glass-dark border-glow rounded-lg p-8 md:p-12 text-center overflow-hidden glow-intense">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-electric-blue/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <motion.div className="relative z-10">
            {/* Icon */}
            <motion.div
              className="text-5xl md:text-6xl mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👥
            </motion.div>

            {/* Counter */}
            <div className="flex items-baseline justify-center gap-2">
              <motion.div
                className="text-6xl md:text-7xl font-bold gradient-text gradient-purple-blue"
                key={count}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {count}
              </motion.div>
              <span className="text-3xl md:text-4xl text-electric-blue font-bold">
                +
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-xl md:text-2xl text-foreground font-semibold">
              Teams Registered
            </p>

            {/* Subtitle */}
            <p className="mt-2 text-foreground/70 text-lg">
              Join the innovation movement today!
            </p>

            {/* Progress Bar */}
            <motion.div
              className="mt-8 h-2 bg-foreground/10 rounded-full overflow-hidden max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-neon-purple via-electric-blue to-neon-pink"
                initial={{ width: 0 }}
                animate={{ width: inView ? '75%' : 0 }}
                transition={{ duration: 2 }}
              />
            </motion.div>

            {/* Capacity Info */}
            <p className="mt-4 text-foreground/60 text-sm">
              Limited teams only - few spots remaining
            </p>
          </motion.div>

          {/* Glow Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            animate={{
              boxShadow: [
                'inset 0 0 20px rgba(106, 0, 255, 0.2), inset 0 0 40px rgba(0, 212, 255, 0.1)',
                'inset 0 0 30px rgba(106, 0, 255, 0.4), inset 0 0 50px rgba(0, 212, 255, 0.2)',
                'inset 0 0 20px rgba(106, 0, 255, 0.2), inset 0 0 40px rgba(0, 212, 255, 0.1)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
