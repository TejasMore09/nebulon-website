'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-40 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-40 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-pink/15 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block mb-6 px-4 py-2 glass-dark border-glow rounded-full"
        >
          <span className="text-electric-blue font-semibold text-sm">
            ✨ National Level Hackathon
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block gradient-text gradient-purple-blue">
            NEBULON'26
          </span>
          <span className="block text-foreground mt-4">HACKATHON</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-foreground/80 mb-8"
        >
          Unleash the Innovation
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-electric-blue font-semibold mb-12"
        >
          24-Hour Innovation Challenge
        </motion.p>

        {/* Badge Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {[
            { label: 'National Level', icon: '🌟' },
            { label: '24 Hours', icon: '⏱️' },
            { label: '₹15,000 Prize Pool', icon: '🏆' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-dark border-glow rounded-lg p-4 cursor-pointer"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="text-foreground/90 font-medium">{badge.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://unstop.com/p/nebulon26-2026-transstadia-education-and-research-foundation-1654239"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-bold rounded-lg hover-glow hover:scale-105 transition-all duration-300 glow-purple"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="px-8 py-4 glass-dark border-glow text-white font-bold rounded-lg hover:border-electric-blue/50 transition-all duration-300"
          >
            View Details
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
