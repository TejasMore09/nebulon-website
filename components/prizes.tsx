'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Trophy } from 'lucide-react';

export default function Prizes() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const prizes = [
    {
      position: 'Runner Up',
      amount: '₹5,000',
      description: 'Second prize and recognition',
      icon: '🥈',
      rank: 2,
      gradient: 'from-electric-blue to-electric-blue/50',
    },
    {
      position: 'Winner',
      amount: '₹7,000',
      description: 'Grand prize and trophy',
      icon: '🏆',
      rank: 1,
      gradient: 'from-neon-purple to-electric-blue',
      featured: true,
    },
    {
      position: 'Third Prize',
      amount: '₹3,000',
      description: 'Third prize and certificate',
      icon: '🥉',
      rank: 3,
      gradient: 'from-neon-pink to-neon-pink/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="prizes"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl" />
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
            <span className="gradient-text gradient-purple-pink">
              Prize Pool
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            ₹15,000 in prizes and recognition for top performers
          </p>
        </motion.div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={
                prize.featured
                  ? { scale: 1.08, y: -20 }
                  : { scale: 1.05, y: -10 }
              }
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                prize.featured ? 'md:col-span-1 md:row-span-2' : ''
              }`}
            >
              {/* Card Content */}
              <div
                className={`relative h-full glass-dark border-glow p-8 flex flex-col items-center justify-center text-center ${
                  prize.featured ? 'md:scale-105' : ''
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-20 z-0`}
                />

                {/* Content */}
                <motion.div
                  className="relative z-10"
                  animate={prize.featured ? { y: [0, -10, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Icon */}
                  <div className="text-6xl mb-4">{prize.icon}</div>

                  {/* Position */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {prize.position}
                  </h3>

                  {/* Amount */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-4xl md:text-5xl font-bold gradient-text gradient-purple-blue mb-2">
                      {prize.amount}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm md:text-base">
                    {prize.description}
                  </p>

                  {/* Certificate Badge */}
                  <motion.div
                    className="mt-6 inline-block px-3 py-1 glass-dark rounded-full text-xs font-semibold text-electric-blue"
                    whileHover={{ scale: 1.1 }}
                  >
                    + Certificate
                  </motion.div>
                </motion.div>

                {/* Ranking Indicator */}
                {prize.featured && (
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-neon-purple to-electric-blue rounded-full flex items-center justify-center text-white font-bold glow-purple"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    1
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Prize Pool */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/70">
            Total Prize Pool:{' '}
            <span className="font-bold gradient-text gradient-blue-pink text-2xl">
              ₹15,000
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
