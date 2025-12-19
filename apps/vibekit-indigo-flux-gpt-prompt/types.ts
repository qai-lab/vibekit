
export interface AppContent {
  id: string;
  type: 'app';
  title: string;
  description: string;
  shortDescription: string;
  featured: boolean;
  imageUrl: string;
  tags: string[];
  prompts: string[];
  lessons: string[];
  links: { label: string; url: string }[];
  date: string;
}

export interface PodcastEpisode {
  id: string;
  type: 'podcast';
  title: string;
  episodeNumber: number;
  season: number;
  duration: string;
  featured: boolean;
  imageUrl: string;
  audioUrl: string;
  showNotes: string;
  transcript: string;
  tags: string[];
  date: string;
}

export interface InsightPost {
  id: string;
  type: 'insight';
  title: string;
  category: 'Coding' | 'Strategy' | 'Future' | 'Tools';
  author: string;
  featured: boolean;
  imageUrl: string;
  content: string;
  tags: string[];
  date: string;
}

export type ContentItem = AppContent | PodcastEpisode | InsightPost;

export interface SiteData {
  apps: AppContent[];
  podcasts: PodcastEpisode[];
  insights: InsightPost[];
  tags: string[];
}
