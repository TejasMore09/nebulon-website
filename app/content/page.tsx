'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BackgroundEffects from '@/components/background-effects';

type ContentType = 'all' | 'long-video' | 'images';

interface MediaContent {
  id: number;
  type: 'long-video' | 'images';
  title: string;
  description: string;
  hashtags: string[];
  mediaUrls?: string[];
  duration?: string;
  eventDate: string;
  socials: {
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    facebook?: string;
  };
}

/* REAL NEBULON SOCIALS */

const nebulonSocials = {
  instagram: 'tsi_nebulon',
  youtube: '@TSI_Official',
  linkedin: 'company/transstadia-institute',
  facebook: 'tsinebulon',
};

const contentData: MediaContent[] = [
  {
    id: 1,
    type: 'long-video',
    title: "Get Ready for Nebulon'26",
    description:
      "Official teaser video for Nebulon'26 techfest featuring innovation and gaming championships.",
    hashtags: ['#Nebulon26', '#Hackathon', '#Innovation'],
    mediaUrls: ['/nebulon-teaser.mp4'],
    duration: '0:30',
    eventDate: '2026-03-11',
    socials: nebulonSocials,
  },
  {
    id: 2,
    type: 'long-video',
    title: 'Be ready to interact with Mr. Gaston D\'Souza',
    description:
      'Exclusive interaction session with Mr. Gaston during Nebulon Techfest.',
    hashtags: ['#Nebulon26', '#TechTalk', '#Innovation', "#GastonDSouza"],
    mediaUrls: ['/gaston-group.mp4'],
    duration: '0:34',
    eventDate: '2026-03-10',
    socials: nebulonSocials,
  },
  {
    id: 3,
    type: 'long-video',
    title: 'Hype is Real !!!',
    description:
      'The Boss has arrived discussing innovation and challenges.',
    hashtags: ['#Nebulon26', '#Interview', '#Innovation', "BGMIChampionship", "#GastonDSouza"],
    mediaUrls: ['/gaston-interview.mp4'],
    duration: '0:34',
    eventDate: '2026-03-12',
    socials: nebulonSocials,
  },

  /* GALLERY STRUCTURE (HIDDEN UNTIL IMAGES ADDED) */

  {
    id: 4,
    type: 'images',
    title: 'Hackathon Photo Gallery',
    description: 'Photo highlights from Nebulon Hackathon.',
    hashtags: ['#Nebulon26', '#Hackathon'],
    mediaUrls: [],
    eventDate: '2026-03-13',
    socials: nebulonSocials,
  },
];

function SocialIcon({ platform, handle }: { platform: string; handle: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    facebook: <Facebook className="w-5 h-5" />,
  };

  const socialLinks: Record<string, string> = {
    instagram: `https://www.instagram.com/tsi_nebulon/`,
    youtube: `https://www.youtube.com/@tsi_nebulon`,
    linkedin: `https://www.linkedin.com/company/transstadia-institute/`,
    facebook: `https://www.facebook.com/profile.php?id=61586241640965`,
  };

  return (
    <a
      href={socialLinks[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-2 glass-dark rounded-full text-sm hover:bg-electric-blue/20 transition-colors"
    >
      {icons[platform]}
      <span className="hidden sm:inline">{handle}</span>
    </a>
  );
}

export default function ContentPage() {
  const [activeFilter, setActiveFilter] = useState<ContentType>('all');

  const filteredContent = contentData.filter((content) => {
    if (content.type === 'images' && (!content.mediaUrls || content.mediaUrls.length === 0)) {
      return false;
    }
    return activeFilter === 'all' || content.type === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-space-black relative">

      <BackgroundEffects />
      <Navbar />

      {/* HEADER */}

      <section className="relative z-20 py-20 md:py-32 px-4 max-w-7xl mx-auto">

        <div className="text-center mb-16 backdrop-blur-sm">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="gradient-text gradient-blue-pink">
              Content & Media
            </span>
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Explore videos and highlights from Nebulon'26
          </p>

        </div>

        {/* FILTER */}

        <div className="flex justify-center gap-3 mb-16">

          {[
            { label: 'All Content', value: 'all' },
            { label: 'Videos', value: 'long-video' },
            { label: 'Photos', value: 'images' },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as ContentType)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-neon-purple to-electric-blue text-white'
                  : 'glass-dark'
              }`}
            >
              {filter.label}
            </button>
          ))}

        </div>

      </section>

      {/* CONTENT */}

      <section className="relative z-20 px-4 md:px-8 max-w-7xl mx-auto pb-24">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >

          {filteredContent.map((content) => (

            <motion.div
              key={content.id}
              variants={itemVariants}
              className="glass-dark border-glow rounded-lg overflow-hidden"
            >

              <div className="grid md:grid-cols-3 gap-6 p-8">

                {/* MEDIA */}

                <div className="md:col-span-2">

                  {content.type === 'long-video' && content.mediaUrls && (

                    <div className="relative w-full max-w-md mx-auto aspect-[9/16] mb-6 rounded-lg overflow-hidden bg-black">

                      <video
                        src={content.mediaUrls[0]}
                        controls
                        playsInline
                        preload="metadata"
                        controlsList="nodownload noplaybackrate noremoteplayback"
                        disablePictureInPicture
                        className="w-full h-full object-contain bg-black"
                      />

                    </div>

                  )}

                  {content.type === 'images' && content.mediaUrls && (

                    <div className="grid grid-cols-2 gap-3 mb-6">

                      {content.mediaUrls.map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          className="rounded-lg object-cover"
                        />
                      ))}

                    </div>

                  )}

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {content.title}
                  </h3>

                  <p className="text-white/80 mb-4">
                    {content.description}
                  </p>

                  <p className="text-sm text-electric-blue font-semibold">
                    📅 {new Date(content.eventDate).toLocaleDateString()}
                  </p>

                </div>

                {/* RIGHT SIDE */}

                <div>

                  <h4 className="text-sm uppercase font-bold mb-4 text-white/70">
                    Hashtags
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-8">

                    {content.hashtags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 glass-dark rounded-full text-electric-blue"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <h4 className="text-sm uppercase font-bold mb-4 text-white/70">
                    Follow Us
                  </h4>

                  <div className="flex flex-col gap-2">

                    {content.socials.instagram && (
                      <SocialIcon platform="instagram" handle={content.socials.instagram} />
                    )}

                    {content.socials.youtube && (
                      <SocialIcon platform="youtube" handle={content.socials.youtube} />
                    )}

                    {content.socials.linkedin && (
                      <SocialIcon platform="linkedin" handle={content.socials.linkedin} />
                    )}

                    {content.socials.facebook && (
                      <SocialIcon platform="facebook" handle={content.socials.facebook} />
                    )}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </section>

      <Footer />

    </main>
  );
}