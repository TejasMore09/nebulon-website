'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/tsi_nebulon/',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61586241640965',
      label: 'Facebook',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@tsi_nebulon',
      label: 'YouTube',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nebulon-transstadia-0489b13b5',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="relative bg-space-black/80 border-t border-neon-purple/20">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/favicon.png"
                alt="Nebulon Logo"
                width={36}
                height={36}
                className="rounded-md"
              />

              <span className="text-lg font-bold gradient-text gradient-purple-blue">
                NEBULON'26
              </span>
            </div>

            <p className="text-foreground/60 text-sm">
              Where innovation meets opportunity. A 24-hour hackathon for brilliant minds to build impactful solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4 text-center md:text-left">
              Quick Links
            </h4>

            <ul className="space-y-2 text-center md:text-left">
              {[
                { name: 'About', href: '#about' },
                { name: 'Timeline', href: '#timeline' },
                { name: 'Prizes', href: '#prizes' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-electric-blue transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:ml-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">
              Get In Touch
            </h4>

            <div className="flex items-start space-x-2 text-foreground/60 text-sm mb-4">
              <Mail size={16} className="mt-1" />

              <div className="flex flex-col gap-1">
                <a
                  href="mailto:tejasmore464@gmail.com"
                  className="hover:text-electric-blue transition-colors"
                >
                  tejasmore464@gmail.com
                </a>

                <a
                  href="mailto:ayushahirwar1999@gmail.com"
                  className="hover:text-electric-blue transition-colors"
                >
                  ayushahirwar1999@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 glass-dark rounded-lg border border-neon-purple/30 hover:border-electric-blue/50 transition-colors duration-300"
                  title={social.label}
                >
                  <social.icon size={16} className="text-electric-blue" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Nebulon Hackathon. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}