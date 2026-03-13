'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation routes
  const mainNavLinks = [
    { name: 'Hackathon', href: '/' },
    { name: 'BGMI', href: '/bgmi' },
    { name: 'News', href: '/news' },
    { name: 'Content', href: '/content' },
  ];

  // Section links for hackathon landing page
  const hackathonSectionLinks = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Themes', href: '#domains' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'FAQ', href: '#faq' },
  ];

  const registerLink =
    "https://unstop.com/o/viwuzEa?utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Logged_out_user";

  const isHackathonPage = pathname === '/';

  const isLinkActive = (href: string) => {
    if (href.startsWith('#')) return false;
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">

            <Image
              src="/favicon.png"
              alt="Nebulon Logo"
              width={40}
              height={40}
              className="rounded-md"
            />

            <span className="hidden sm:inline text-sm md:text-lg font-bold gradient-text gradient-purple-blue">
              NEBULON'26
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">

            {mainNavLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }} className="relative">

                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isLinkActive(link.href)
                      ? 'text-electric-blue'
                      : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {link.name}

                  {isLinkActive(link.href) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple to-electric-blue"
                      layoutId="navbar-underline"
                    />
                  )}
                </Link>

              </motion.div>
            ))}

          </div>

          {/* Section Navigation (Hackathon Page Only) */}
          {isHackathonPage && (
            <div className="hidden md:flex lg:hidden items-center space-x-2">

              {hackathonSectionLinks.slice(0,4).map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="relative px-2 py-2 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}

                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neon-purple to-electric-blue"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />

                </motion.a>
              ))}

            </div>
          )}

          {/* Register Button */}
          <motion.a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 30px rgba(106, 0, 255, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-semibold rounded-lg glow-purple transition-all duration-300 relative overflow-hidden group"
          >

            {/* Shine animation */}
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />

            <span className="relative">Register Now - Hackathon</span>

          </motion.a>
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-dark"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-16 md:top-20 left-0 right-0 bg-space-black/95 border-b border-neon-purple/30 p-4 space-y-2"
          >

            {/* Main Routes */}
            <div className="space-y-2 pb-4 border-b border-neon-purple/20">

              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isLinkActive(link.href)
                      ? 'bg-neon-purple/20 text-electric-blue'
                      : 'text-foreground/80 hover:text-foreground hover:bg-neon-purple/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

            </div>

            {/* Section links if hackathon page */}
            {isHackathonPage && (
              <div className="space-y-2 pb-4">

                <p className="text-xs text-foreground/50 px-3 font-semibold uppercase">
                  On this page
                </p>

                {hackathonSectionLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-neon-purple/10 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

              </div>
            )}

            {/* Register button */}
            {/*<a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-semibold rounded-lg text-center glow-purple text-sm"
            >
              Register Now
            </a>*/}

          </motion.div>

        )}

      </div>
    </nav>
  );
}