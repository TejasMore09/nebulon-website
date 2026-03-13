'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

interface Sponsor {
  name: string;
  category: 'title' | 'gold' | 'community';
  placeholder: string;
}

export default function Sponsors() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const sponsors: Sponsor[] = [
    // Title Sponsor
    {
      name: 'Title Sponsor',
      category: 'title',
      placeholder: 'TechCorp Global',
    },
    // Gold Sponsors
    {
      name: 'Gold Sponsor 1',
      category: 'gold',
      placeholder: 'InnovateLabs',
    },
    {
      name: 'Gold Sponsor 2',
      category: 'gold',
      placeholder: 'CloudSystems',
    },
    {
      name: 'Gold Sponsor 3',
      category: 'gold',
      placeholder: 'DevHub',
    },
    // Community Partners
    {
      name: 'Community Partner 1',
      category: 'community',
      placeholder: 'OpenSource Collective',
    },
    {
      name: 'Community Partner 2',
      category: 'community',
      placeholder: 'Dev Community',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
    const sizeClass =
      sponsor.category === 'title'
        ? 'md:col-span-2 p-8'
        : sponsor.category === 'gold'
          ? 'p-6'
          : 'p-6';

    const glowClass =
      sponsor.category === 'title'
        ? 'glow-intense'
        : sponsor.category === 'gold'
          ? 'glow-purple'
          : 'glow-blue';

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5 }}
        className={`${sizeClass} relative group`}
      >
        <div className={`glass-dark border-glow rounded-lg h-full flex items-center justify-center overflow-hidden ${glowClass} transition-all duration-300`}>
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <motion.div
            className="relative z-10 text-center"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo Placeholder */}
            <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-neon-purple/30 to-electric-blue/30 flex items-center justify-center">
              <span className="text-3xl md:text-5xl">🏢</span>
            </div>

            {/* Sponsor Name */}
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              {sponsor.placeholder}
            </h3>

            {/* Category Badge */}
            <motion.div
              className="inline-block mt-3 px-3 py-1 glass rounded-full text-xs font-semibold text-electric-blue"
              whileHover={{ scale: 1.1 }}
            >
              {sponsor.category === 'title'
                ? '🏆 Title Sponsor'
                : sponsor.category === 'gold'
                  ? '⭐ Gold Partner'
                  : '🤝 Community'}
            </motion.div>
          </motion.div>

          {/* Hover Glow Border */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            whileHover={{
              boxShadow: [
                'inset 0 0 10px rgba(106, 0, 255, 0.2)',
                'inset 0 0 20px rgba(0, 212, 255, 0.4)',
              ],
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="sponsors"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl" />
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
              Our Sponsors
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Powered by industry leaders and innovators
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-center text-sm font-semibold text-electric-blue mb-4">
            TITLE SPONSOR
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SponsorCard sponsor={sponsors[0]} />
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-center text-sm font-semibold text-neon-purple mb-4">
            GOLD SPONSORS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.slice(1, 4).map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </motion.div>

        {/* Community Partners */}
        <motion.div variants={itemVariants}>
          <p className="text-center text-sm font-semibold text-electric-blue mb-4">
            COMMUNITY PARTNERS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
            {sponsors.slice(4).map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-foreground/70 mb-4">
            Interested in sponsoring Nebulon'26?
          </p>
          <a
            href="mailto:sponsorship@nebulon26.com"
            className="inline-block px-6 py-2 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-bold rounded-lg hover-glow hover:scale-105 transition-all duration-300"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
