/**
 * Content Management System for MDX files
 * Loads and parses articles and media from content folder
 */

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: 'announcement' | 'update' | 'tutorial' | 'feature';
  coverImage?: string;
  author?: string;
  featured?: boolean;
  content?: string;
}

export interface MediaItem {
  slug: string;
  title: string;
  description: string;
  type: 'video' | 'gallery' | 'image';
  platform: string;
  coverImage?: string;
  content?: string;
  featured?: boolean;
}

// Mock articles - in production, these would be loaded from MDX files
export const articles: Article[] = [
  {
    slug: 'hackathon-registrations',
    title: 'Nebulon\'26 Hackathon Registration Opens!',
    description: 'Limited slots available for the national level hackathon. Register your team now.',
    date: '2026-03-10',
    category: 'announcement',
    featured: true,
    author: 'Nebulon Team',
    content: 'Exciting news! Registration for Nebulon\'26 is now live on Unstop...',
  },
  {
    slug: 'bgmi-announcement',
    title: 'BGMI Championship Details Announced',
    description: 'Check out the tournament format, prize distribution, and registration details.',
    date: '2026-03-08',
    category: 'update',
    author: 'Gaming Team',
    content: 'We are thrilled to announce the complete details of our BGMI Championship...',
  },
  {
    slug: 'judges-revealed',
    title: 'Meet Our Expert Judges',
    description: 'Learn about the industry leaders who will be evaluating your innovative solutions.',
    date: '2026-03-05',
    category: 'feature',
    author: 'Nebulon Team',
    content: 'This year, we have assembled an incredible panel of judges from leading tech companies...',
  },
  {
    slug: 'hackathon-themes',
    title: 'Hackathon Themes Revealed',
    description: 'Explore 5 exciting problem statements and domains for the hackathon.',
    date: '2026-03-01',
    category: 'update',
    featured: true,
    author: 'Event Team',
    content: 'The themes for Nebulon\'26 hackathon have been carefully selected to cover emerging technologies...',
  },
];

// Mock media items
export const mediaItems: MediaItem[] = [
  {
    slug: 'hackathon-promo',
    title: 'Hackathon Promo Video',
    description: 'Get hyped for Nebulon\'26 with our official promotional video',
    type: 'video',
    platform: 'YouTube',
    featured: true,
  },
  {
    slug: 'event-highlights',
    title: 'Event Highlights',
    description: 'Amazing moments from our previous events',
    type: 'gallery',
    platform: 'Instagram',
  },
  {
    slug: 'judge-spotlights',
    title: 'Judge Spotlights',
    description: 'Meet the industry experts judging Nebulon\'26',
    type: 'video',
    platform: 'LinkedIn',
  },
  {
    slug: 'team-photos',
    title: 'Team Photos',
    description: 'Behind the scenes with participating teams',
    type: 'gallery',
    platform: 'Instagram',
  },
  {
    slug: 'winning-projects',
    title: 'Winning Projects',
    description: 'Showcase of award-winning projects from previous years',
    type: 'gallery',
    platform: 'YouTube',
    featured: true,
  },
  {
    slug: 'behind-scenes',
    title: 'Behind the Scenes',
    description: 'How we make Nebulon happen',
    type: 'video',
    platform: 'TikTok',
  },
];

/**
 * Get all articles, optionally filtered by category
 */
export function getArticles(category?: string): Article[] {
  if (category) {
    return articles.filter((article) => article.category === category);
  }
  return articles;
}

/**
 * Get featured articles
 */
export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured).slice(0, 3);
}

/**
 * Get a single article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/**
 * Get all media items
 */
export function getMediaItems(type?: string): MediaItem[] {
  if (type) {
    return mediaItems.filter((item) => item.type === type);
  }
  return mediaItems;
}

/**
 * Get featured media items
 */
export function getFeaturedMedia(): MediaItem[] {
  return mediaItems.filter((item) => item.featured).slice(0, 3);
}

/**
 * Get a single media item by slug
 */
export function getMediaBySlug(slug: string): MediaItem | undefined {
  return mediaItems.find((item) => item.slug === slug);
}

/**
 * Search articles and media
 */
export function search(query: string): (Article | MediaItem)[] {
  const lowerQuery = query.toLowerCase();
  const articleResults = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(lowerQuery) ||
      a.description.toLowerCase().includes(lowerQuery)
  );
  const mediaResults = mediaItems.filter(
    (m) =>
      m.title.toLowerCase().includes(lowerQuery) ||
      m.description.toLowerCase().includes(lowerQuery)
  );
  return [...articleResults, ...mediaResults];
}
