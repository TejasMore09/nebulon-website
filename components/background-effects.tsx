'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];

    // Create particles - responsive count based on screen size
    const createParticles = () => {
      const colors = [
        'rgba(106, 0, 255, 0.5)',
        'rgba(0, 212, 255, 0.5)',
        'rgba(255, 46, 154, 0.3)',
      ];

      // Reduce particle count on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 20 : 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
        }

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.globalAlpha = particle.opacity * 2;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas for particles - responsive opacity */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-40 sm:opacity-50 md:opacity-60"
      />

      {/* Animated gradient orbs - responsive sizes */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Purple Nebula */}
        <motion.div
          className="absolute rounded-full blur-3xl bg-neon-purple/20 
            w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          style={{
            top: '10%',
            right: '5%',
          }}
        />

        {/* Blue Nebula */}
        <motion.div
          className="absolute rounded-full blur-3xl bg-electric-blue/15
            w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 2,
          }}
          style={{
            bottom: '10%',
            left: '5%',
          }}
        />

        {/* Pink Nebula - hidden on mobile */}
        <motion.div
          className="absolute rounded-full blur-3xl bg-neon-pink/10
            hidden sm:block w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 4,
          }}
          style={{
            top: '50%',
            right: '10%',
          }}
        />
      </motion.div>
    </>
  );
}
