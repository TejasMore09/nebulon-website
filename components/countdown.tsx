'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

interface CountdownUnit {
  label: string;
  value: number;
}

export default function Countdown() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [countdownUnits, setCountdownUnits] = useState<CountdownUnit[]>([
    { label: 'Days', value: 0 },
    { label: 'Hours', value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 },
  ]);

  useEffect(() => {
    const deadline = new Date('2026-03-18T23:59:59+05:30'); // IST deadline

    const updateCountdown = () => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdownUnits([
          { label: 'Days', value: 0 },
          { label: 'Hours', value: 0 },
          { label: 'Minutes', value: 0 },
          { label: 'Seconds', value: 0 },
        ]);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdownUnits([
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds },
      ]);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

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
    <section
      id="countdown"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text gradient-blue-pink">
              Registration Closes In
            </span>
          </h2>

          <p className="text-lg text-foreground/70">
            Deadline: 18 March 2026 • 11:59 PM IST
          </p>
        </motion.div>

        {/* Countdown Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {countdownUnits.map((unit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="glass-dark border-glow rounded-lg p-6 text-center relative overflow-hidden">
                <motion.div
                  key={unit.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl md:text-6xl font-bold gradient-text gradient-purple-blue mb-2">
                    {String(unit.value).padStart(2, '0')}
                  </div>

                  <p className="text-foreground/70 font-semibold text-sm md:text-base">
                    {unit.label}
                  </p>
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{
                    boxShadow: [
                      'inset 0 0 20px rgba(106,0,255,0.2), inset 0 0 40px rgba(0,212,255,0.1)',
                      'inset 0 0 30px rgba(106,0,255,0.4), inset 0 0 50px rgba(0,212,255,0.2)',
                      'inset 0 0 20px rgba(106,0,255,0.2), inset 0 0 40px rgba(0,212,255,0.1)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-foreground/80 text-lg">
            Don't miss out on this incredible opportunity to showcase your skills!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}