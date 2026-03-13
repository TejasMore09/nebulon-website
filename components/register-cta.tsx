'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function RegisterCTA() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      id="register"
      ref={ref}
      className="py-24 md:py-40 px-4 md:px-8 max-w-6xl mx-auto relative"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 via-electric-blue/30 to-neon-pink/30 rounded-2xl blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text gradient-purple-blue">
              Ready to Innovate?
            </span>
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators building the future at Nebulon'26. 
            Showcase your talent, win prizes, and make an impact.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="https://unstop.com/o/viwuzEa?utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Logged_out_user"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-neon-purple via-electric-blue to-neon-pink text-white font-bold text-lg rounded-lg hover-glow transition-all duration-300 glow-intense border border-white/20"
            >
              Register Your Team Now
            </motion.button>
          </a>
        </motion.div>

        {/* Countdown or Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <div className="inline-block glass-dark border-glow rounded-lg p-6">
            <p className="text-sm text-foreground/60 uppercase tracking-wider mb-2">
              Limited Spots Available
            </p>
            <p className="text-foreground font-semibold">
              Registration closes on March 18, 2026
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
