'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '@/components/navbar';
import BackgroundEffects from '@/components/background-effects';
import Footer from '@/components/footer';

export default function BGMIPage() {
  const [expandedRule, setExpandedRule] = useState<number | null>(null);
  const eventData = {
  title: 'NEBULON BGMI CHAMPIONSHIP 2026',
  presenter: 'Presented by TransStadia Institute',
  dates: '24-25 March 2026',
  venue: 'TransStadia Institute',
  prizePool: '₹9,000',
  format: 'Squad (4 players per team)',
  registrationDeadline: '22 / 03 / 2026',
  contact: [
    'Tanvir Ansari – +91 8097745883',
    'Sarthak Mainkar – +91 96194 52895',
    'Rahul Shanigarapu – +91 98671 33510',
  ],
  instagram: '@tsi_nebulon',
};

  const maps = [
    { id: 1, name: 'Erangel', match: 'Match 1' },
    { id: 2, name: 'Miramar', match: 'Match 2' },
    { id: 3, name: 'Rondo', match: 'Match 3' },
    { id: 4, name: 'Erangel', match: 'Match 4' },

  ];

  const pointSystem = [
    { placement: '#1', points: '10' },
    { placement: '#2', points: '6' },
    { placement: '#3', points: '5' },
    { placement: '#4', points: '4' },
    { placement: '#5', points: '3' },
    { placement: '#6', points: '2' },
    { placement: '#7-8', points: '1' },
    { placement: '#9-16', points: '0' },
  ];

  const rules = [
    {
      title: 'General Rules',
      items: [
        'All players must use their own BGMI accounts during the tournament.',
        'Every team must consist of 4 main players (with optional 1 substitute).',
        'All participants must report to the lobby 30 minutes before match time.',
        'Teams failing to join the room before the start time may be disqualified for that match.',
        'Any unsportsmanlike behaviour, abuse, or cheating will result in immediate disqualification.',
        'The decision of the tournament organizers and referees is final.',
      ],
    },
    {
      title: 'Tournament Format',
      items: [
        'The tournament will be played in Squad (4 players) format.',
        'Matches will be conducted on Erangel / Miramar / Rondo.',
        'Each day will consist of multiple matches to determine rankings.',
        'The winner will be decided based on total points (placement + kills).',
        'Day 1 – 4 matches | Day 2 – 4 matches',
      ],
    },
    {
      title: 'Game Settings',
      items: [
        'Mode: TPP (Third Person Perspective)',
        'Team: Squad',
        'Map: Erangel / Miramar / Rondo',
        'Perspective: Locked to TPP',
        'All matches will be played in custom rooms provided by organizers.',
      ],
    },
    {
      title: 'Prohibited Actions',
      items: [
        'Use of hacks, cheats, or third-party tools',
        'Teaming up with enemy squads',
        'Intentional disconnects or sabotaging matches',
        'Exploiting in-game glitches',
        'Violations may lead to match disqualification or tournament ban.',
      ],
    },
    {
      title: 'Technical Issues',
      items: [
        'Players are responsible for their own internet connection and device performance.',
        'If a player disconnects, the match will continue without restart.',
        'In case of server crash or room issue, the match may be restarted at the organizer\'s discretion.',
      ],
    },
    {
      title: 'Lobby Rules',
      items: [
        'Players must not start fighting before the plane path begins.',
        'Changing team members after the tournament begins is not allowed without approval.',
        'All players must keep their in-game names consistent with registration.',
        'Players must be present in their allotted slot before the match begins. Failure to do so may result in the player being removed from the lobby for that match.',
      ],
    },
    {
      title: 'Sportsmanship',
      items: [
        'Respect other players and tournament staff.',
        'Toxic behaviour, harassment, or abuse will lead to penalties or disqualification.',
      ],
    },
    {
      title: 'Tiebreaker & Organizer Rights',
      items: [
        'If two teams have the same points: Placement Points will decide the winners.',
        'The tournament organizers reserve the right to: Modify rules if necessary, Disqualify players violating rules, Resolve disputes.',
        'All decisions made by organizers will be final and binding.',
      ],
    },
  ];

  const eligibility = [
    'Open for all students (colleges, schools)',
    'Each team must have 4 players (squad format) + 1 Optional Substitute',
    'All players must have a valid BGMI account with a minimum account level of 30 to be eligible to participate',
    'Team captain must fill the registration form',
    'Ensure all BGMI IDs & UIDs are entered correctly',
    'Teams must join the official WhatsApp group after registration for match updates',
  ];

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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-40 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-40 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 glass-dark border-glow rounded-full"
          >
            <span className="text-neon-pink font-semibold text-sm">
              🎮 Gaming Championship
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block gradient-text gradient-blue-pink">
              BGMI CHAMPIONSHIP
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8"
          >
            Competitive Mobile Gaming Tournament
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8"
          >
            {[
              { label: 'Prize Pool', value: '₹9,000' },
              { label: 'Matches', value: 'Multiple Rounds' },
              { label: 'Format', value: 'Squad (4 Player)' },
            ].map((item, idx) => (
              <div key={idx} className="glass-dark border-glow rounded-lg p-4">
                <p className="text-xs text-foreground/70 uppercase font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-lg sm:text-xl font-bold gradient-text gradient-blue-pink">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiBPdLMr3oXaXbjgiLB8W8MDRJSRZHggemdoqFjYnyps6IUQ/viewform?usp=send_form&pli=1&authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-lg glow-pink hover:scale-110 transition-transform duration-300"
          >
            Register Team
          </motion.a>
        </motion.div>
      </section>

      {/* Event Info */}
      <section id="details" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text gradient-blue-pink">Event Details</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { label: 'Event Dates', value: eventData.dates },
              { label: 'Venue', value: eventData.venue },
              { label: 'Prize Pool', value: eventData.prizePool },
              { label: 'Format', value: eventData.format },
              { label: 'Registration Deadline', value: eventData.registrationDeadline },
              { label: 'Contact', value: eventData.contact },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-dark border-glow rounded-lg p-4 sm:p-6"
              >
                <p className="text-xs sm:text-sm text-foreground/60 uppercase font-semibold mb-2">
                  {item.label}
                </p>
                {Array.isArray(item.value) ? (
                  <div className="space-y-1">
                    {item.value.map((contact, i) => (
                      <p key={i} className="text-sm sm:text-base font-bold text-electric-blue">
                        {contact}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm sm:text-base font-bold text-electric-blue">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Map Schedule */}
      <section id="maps" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text gradient-blue-pink">Map Schedule</span>
            </h2>
            <p className="text-foreground/70">8 matches across 2 days with rotating maps</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
          >
            {maps.map((map, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-dark border-glow rounded-lg p-6 text-center cursor-pointer"
              >
                <p className="text-sm text-electric-blue uppercase font-semibold mb-2">
                  {map.match}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-2">{map.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Points System */}
      <section id="points" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text gradient-blue-pink">Points System</span>
            </h2>
            <p className="text-foreground/70">Standard competitive format with placement + kill points</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="glass-dark border-glow rounded-lg p-6 md:p-8 overflow-x-auto"
          >
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-neon-purple/30">
                  <th className="py-3 px-4 text-foreground font-semibold">Placement</th>
                  <th className="py-3 px-4 text-foreground font-semibold">Points</th>
                  <th className="py-3 px-4 text-foreground font-semibold">Placement</th>
                  <th className="py-3 px-4 text-foreground font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 4 }).map((_, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-neon-purple/20">
                    <td className="py-3 px-4 text-electric-blue font-bold">
                      {pointSystem[rowIdx * 2]?.placement}
                    </td>
                    <td className="py-3 px-4 text-neon-pink font-bold">
                      {pointSystem[rowIdx * 2]?.points}
                    </td>
                    <td className="py-3 px-4 text-electric-blue font-bold">
                      {pointSystem[rowIdx * 2 + 1]?.placement}
                    </td>
                    <td className="py-3 px-4 text-neon-pink font-bold">
                      {pointSystem[rowIdx * 2 + 1]?.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-center mt-6 text-foreground/80 font-semibold">
              1 Finish = 1 Kill Point | Total Score = Placement Points + Kill Points
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text gradient-blue-pink">Eligibility & Requirements</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-electric-blue mb-4">Eligibility</h3>
              <ul className="space-y-3">
                {eligibility.slice(0, 3).map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="text-neon-pink font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-electric-blue mb-4">Important Instructions</h3>
              <ul className="space-y-3">
                {eligibility.slice(3).map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="text-neon-pink font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Rules Accordion */}
      <section id="rules" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text gradient-blue-pink">Rules & Regulations</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {rules.map((rule, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-dark border-glow rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedRule(expandedRule === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-neon-purple/10 transition-colors"
                >
                  <h3 className="text-lg font-bold text-electric-blue text-left">
                    {rule.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedRule === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-neon-pink" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedRule === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-neon-purple/30"
                    >
                      <ul className="p-6 space-y-2">
                        {rule.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                            <span className="text-neon-pink font-bold mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text gradient-blue-pink">Compete?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Limited registration slots available! Register your team now and join the championship.
          </p>
          <motion.a
            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiBPdLMr3oXaXbjgiLB8W8MDRJSRZHggemdoqFjYnyps6IUQ/viewform?usp=send_form&pli=1&authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-lg glow-pink hover:scale-110 transition-transform duration-300"
          >
            Register Your Team
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}