
export interface AppProject {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  heroImage: string;
  techStack: string[];
  howIBuiltIt: string;
  toolsUsed: string[];
  prompts: string[];
  lessonsLearned: string[];
  githubUrl: string;
  demoVideoUrl: string;
  liveDemoUrl: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  guest?: string;
  audioUrl: string;
  date: string;
  duration: string;
}

export interface AIInsight {
  id: string;
  title: string;
  summary: string;
  source: string;
  link: string;
  category: 'News' | 'Trends' | 'Leader Insights';
  author?: string;
}
