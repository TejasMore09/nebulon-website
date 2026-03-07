'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Themes', href: '#domains' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'FAQ', href: '#faq' },
  ];

  const registerLink =
    "https://unstop.com/p/nebulon26-2026-transstadia-education-and-research-foundation-1654239";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="/favicon.png"
              alt="Nebulon Logo"
              width={60}
              height={60}
              className="rounded-md"
            />

            <span className="hidden sm:inline text-lg font-bold gradient-text gradient-purple-blue">
              NEBULON'26
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 hover:glow"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Register Button */}
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-semibold rounded-lg hover-glow hover:scale-105 transition-transform duration-300 glow-purple"
          >
            Register Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-dark"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-space-black/95 border-b border-neon-purple/30 p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:glow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-2 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-semibold rounded-lg text-center glow-purple"
            >
              Register Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}