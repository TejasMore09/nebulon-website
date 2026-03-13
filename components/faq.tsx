'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Nebulon'26 Hackathon?",
      answer:
        "Nebulon'26 is a two-stage hackathon designed to encourage innovative solutions for real-world problems. In Round 1, teams submit a short PowerPoint presentation explaining their idea. The shortlisted teams then participate in the final round where they build a working prototype within 24 hours.",
    },
    {
      question: "How does the final 24-hour hackathon work?",
      answer:
        "Shortlisted teams will receive the final problem statement on 24 March. Teams will build their solution and working prototype from home within 24 hours. On 25 March, teams must arrive at the venue to present their solution and demonstrate the prototype to the judges.",
    },
    {
      question: "Who can participate in Nebulon'26?",
      answer:
        "Nebulon'26 is open to Undergraduate and Postgraduate students from recognized Indian universities across all disciplines including Engineering, Arts, Commerce, and Sciences. Teams can consist of 1–3 members, and solo participation is also allowed.",
    },
    {
      question: "How do we register?",
      answer:
        "Teams can register through the official Unstop event page linked on this website. After registration, teams must submit their Round 1 PPT proposal before the submission deadline.",
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text gradient-purple-blue">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Find answers to common questions about Nebulon'26
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg glass-dark border-glow overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-black/20 transition-colors duration-200"
              >
                <h3 className="text-left text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={24}
                    className="text-electric-blue flex-shrink-0"
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-black/20 text-foreground/80 border-t border-neon-purple/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Can't find your answer?
          </p>

          <a
            href="mailto:contact@nebulon.com"
            className="inline-block px-6 py-3 glass-dark border-glow rounded-lg text-electric-blue font-semibold hover:border-electric-blue/50 transition-colors duration-300"
          >
            <span className="block">Contact Us</span>
            <span className="block">Tejas More - +91 9930265897</span>
            <span className="block">Ayush Ahirwar - +91 83560 76031</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}