'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import BackgroundEffects from '@/components/background-effects';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: 'NEBULON: TransStadia Institute’s Student-Led Tech & Gaming Fest!',
      description: 'Experience Nebulon’26 — a student-driven techfest bringing together innovation, coding, gaming, and creativity on one national stage.',
      fullContent: 'Join Nebulon\'26 hackathon - a 24-hour national level innovation challenge with ₹15,000+ prize pool. Form your team and showcase your innovative solutions to industry leaders.',
      date: '2026-03-08',
      category: 'announcement',
      icon: '📢',
      link: '/news/Nebulon-techfest-starts',
    },
    {
      id: 2,
      title: 'Nebulon\'26 Hackathon Registration Opens!',
      description: 'Limited slots available for the national level hackathon. Register your team now and join the innovation challenge.',
      fullContent: 'Join Nebulon\'26 hackathon - a 24-hour national level innovation challenge with ₹15,000+ prize pool. Form your team and showcase your innovative solutions to industry leaders.',
      date: '2026-03-10',
      category: 'announcement',
      icon: '📢',
      link: '/news/hackathon-registration-opens',
    },
    {
      id: 3,
      title: 'BGMI Championship Details Announced',
      description: 'Check out the tournament format, prize distribution, and registration details for the championship.',
      fullContent: 'The BGMI Championship 2026 features 6 matches across 2 days with a ₹9,000 prize pool. Squad format (4v4) with competitive gameplay on Erangel, Miramar, and Rondo.',
      date: '2026-03-10',
      category: 'announcement',
      icon: '📢',
      link: '/news/bgmi-championship-details',
    },
    {
      id: 4,
      title: 'Introducing Our Host',
      description: 'Get ready as our host takes the stage to drive the excitement of Nebulon’26 and keep the energy high throughout the event.',
      fullContent: 'This year\'s hackathon features 5 diverse problem domains: Healthcare Tech, FinTech, EdTech, Climate & Sustainability, and AI/ML Solutions.',
      date: '2026-03-11',
      category: 'announcement',
      icon: '📢',
      link: '/news/meet-our-host',
    },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-space-black relative">
      <BackgroundEffects />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-40 w-72 h-72 bg-electric-blue/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text gradient-blue-pink">
              Latest News & Updates
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg text-foreground/80"
          >
            Stay updated with announcements, event details, and exciting news from Nebulon Techfest
          </motion.p>
        </motion.div>
      </section>

      {/* News Timeline Feed */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          {/* Timeline */}
          <div className="space-y-0 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-electric-blue to-neon-pink" />

            {news.map((article, idx) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                className="relative pl-16 md:pl-0 pb-12 md:pb-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 md:top-6 -translate-x-1/2 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-purple to-electric-blue flex items-center justify-center border-4 border-space-black"
                  >
                    <span className="text-lg">{article.icon}</span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 10, boxShadow: '0 0 30px rgba(106, 0, 255, 0.4)' }}
                  className="glass-dark border-glow rounded-lg p-6 md:p-8 md:w-full cursor-pointer transition-all"
                >
                  {/* Date and Category */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <span className="text-sm text-neon-pink font-semibold">
                      {formatDate(article.date)}
                    </span>
                    <span className="inline-block text-xs px-3 py-1 glass-dark rounded-full text-electric-blue font-semibold capitalize w-fit">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={article.link}
                    className="inline-flex items-center text-electric-blue font-semibold hover:text-neon-pink transition-colors duration-200"
                  >
                    Read Full Article →
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
