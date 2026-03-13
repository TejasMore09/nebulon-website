'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BackgroundEffects from '@/components/background-effects';

const articles = {
  'Nebulon-techfest-starts': {
    title: 'Nebulon\'26 Hackathon Registration Opens!',
    date: '2026-03-08',
    category: 'announcement',
    icon: '📢',
    description: 'Limited slots available for the national level hackathon. Register your team now and join the innovation challenge.',
    content: `
TransStadia Institute (TSI) is proud to announce Nebulon 2K26, a student-led Tech and Gaming Fest that brings together innovation, competition, and student engagement. Scheduled to take place on 24–25 March 2026 at the TransStadia Institute campus, Nebulon aims to create an exciting platform for students to showcase their skills and collaborate with peers.

The event will feature three main segments: a Hackathon, where teams will work on industry-relevant challenges in a 24-hour problem-solving format; a BGMI Tournament, bringing together competitive gaming squads; and a Fun Zone with interactive challenges and activities for all participants.

Organized by the students of TransStadia Institute, Nebulon reflects the institute’s focus on fostering creativity, teamwork, and innovation among young minds. The event is expected to attract students from multiple colleges across Mumbai, offering them an opportunity to compete, connect, and experience a vibrant campus atmosphere.

With Nebulon, TransStadia Institute continues its commitment to encouraging student-led initiatives that combine technology, gaming, and collaborative learning.
    `,
    imageUrl: '/news%201st%20img.png',
  },
  'hackathon-registration-opens': {
    title: 'Nebulon\'26 Hackathon Registration Opens!',
    date: '2026-03-10',
    category: 'announcement',
    icon: '📢',
    description: 'Check out the tournament format, prize distribution, and registration details for the championship.',
    content: `
Nebulon'26 Hackathon is officially opening registrations! This is your chance to be part of a 24-hour national level innovation challenge that brings together some of the brightest minds in technology.

With a prize pool of ₹15,000, this hackathon offers not just rewards, but an opportunity to showcase your innovation skills, network with industry professionals, and make an impact.

**Why participate in Nebulon'26?**
- National Level Competition
- ₹15,000 Prize Pool
- 24-Hour Innovation Challenge
- Expert Judges from Industry
- Networking Opportunities
- Amazing Prizes and Recognition

**Registration Details:**
- Limited Slots Available
- Team Size: 1-3 members
- Registration Portal: Unstop
- Hackathon Themes: Healthcare Tech, FinTech, EdTech, Climate & Sustainability, AI/ML Solutions

Don't miss this opportunity! Register your team now on Unstop and prepare to showcase your innovation.
    `,
    imageUrl: '/news%202nd%20img.png',
  },
  'bgmi-championship-details': {
    title: 'BGMI Championship Details Announced',
    date: '2026-03-10',
    category: 'announcement',
    icon: '📢',
    description: 'Learn about the industry leaders who will be evaluating your innovative solutions.',
    content: `
The Nebulon BGMI Championship 2026 is here! Presented by TransStadia Institute, this championship brings competitive gaming to the next level.

**Tournament Highlights:**
- Event Dates: 24-25 March 2026
- Venue: TransStadia Institute - Mumbai Campus (Kalina)
- Prize Pool: ₹9,000
- Format: Squad (4 Players + 1 Optional Substitute)
- Game Mode: TPP (Third Person Perspective)
- Maps: Erangel, Miramar, Rondo

**Tournament Structure:**
- 6 Matches across 2 days
- Day 1: 4 Matches
- Day 2: 4 Matches
- Maps rotate: Erangel, Miramar, Rondo, Erangel


**Eligibility:**
- Open to college students
- 4 players per team (1 optional substitute)
- Valid BGMI Account required
- Registration Deadline: 22 March 2026

Register your squad now on the BGMI page!
    `,
    imageUrl: '/news%203rd%20img.jpeg',
  },
  'meet-our-host': {
    title: 'Our Host - Mr. Gaston D\'Souza',
    date: '2026-03-11',
    category: 'announcement',
    icon: '📢',
    description: 'Get ready as our host takes the stage to drive the excitement of Nebulon’26 and keep the energy high throughout the event.',
    content: `
We are excited to welcome Gaston D’Souza as the official host for Nebulon’26. With over two decades of experience as a corporate trainer and motivational speaker, Gaston has inspired individuals and organizations through his powerful insights on leadership, growth, and professional excellence.

**Who is Gaston D’Souza?**
- Renowned corporate trainer and motivational speaker
- Over 20 years of experience empowering individuals and teams
- Founder of Gaston D’Souza Inc
- Specializes in leadership development, professional growth, and performance enhancement
- Known for delivering impactful sessions that inspire transformation

At Nebulon’26, Gaston will bring his dynamic energy and experience to the stage, guiding participants through the excitement of the fest. His presence will add inspiration, motivation, and a powerful voice to the celebration of innovation, technology, and creativity.
    `,
    imageUrl: '/news%204th%20img.png',
  },
};

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <main className="min-h-screen bg-space-black relative">
        <BackgroundEffects />
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link href="/news" className="text-electric-blue hover:text-neon-pink transition-colors">
            Back to News
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-space-black relative">
      <BackgroundEffects />
      <Navbar />

      {/* Article Header */}
      <section className="pt-32 pb-8 px-4 md:px-8 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-pink transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to News
          </Link>

          {/* Category & Date */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <span className="inline-block text-xs px-3 py-1 glass-dark rounded-full text-electric-blue font-semibold w-fit">
              {article.category.toUpperCase()}
            </span>
            <span className="text-sm text-foreground/60">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Featured Image */}
          <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden mb-12 glass-dark border-glow">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-16">
            <div className="glass-dark border-glow rounded-lg p-8 md:p-12">
              {article.content.split('\n').map((paragraph, idx) => {
                if (paragraph.trim() === '') return null;
                if (paragraph.startsWith('**')) {
                  return (
                    <h3 key={idx} className="text-xl md:text-2xl font-bold text-electric-blue mt-6 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={idx} className="text-foreground/80 ml-6 mb-2">
                      {paragraph.replace('-', '')}
                    </li>
                  );
                }
                return (
                  <p key={idx} className="text-foreground/80 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark border-glow rounded-lg p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Take Action?
            </h3>
            <p className="text-foreground/80 mb-8">
              Join Nebulon'26 and be part of the innovation revolution!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://unstop.com/o/viwuzEa?lb=0biHaJ3m&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Tejasmor9031"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-bold rounded-lg glow-purple hover:scale-105 transition-transform duration-300"
              >
                Register Now Hackathon
              </a>

              <a
                href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiBPdLMr3oXaXbjgiLB8W8MDRJSRZHggemdoqFjYnyps6IUQ/viewform?usp=send_form&pli=1&authuser=0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-bold rounded-lg glow-purple hover:scale-105 transition-transform duration-300"
              >
                Register Now BGMI
              </a>
            </div>
          </motion.div>

          {/* More Articles */}
          <div className="mt-16 pt-8 border-t border-neon-purple/30">
            <p className="text-foreground/60 mb-4">More from News:</p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(articles).map(([articleSlug, data]) => {
                if (articleSlug === slug) return null;
                return (
                  <Link
                    key={articleSlug}
                    href={`/news/${articleSlug}`}
                    className="px-4 py-2 glass-dark border-glow rounded-lg text-sm hover:border-electric-blue/50 transition-colors"
                  >
                    {data.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
