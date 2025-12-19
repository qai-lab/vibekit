
export interface Project {
  id: string;
  title: string;
  tagline: string;
  thumbnail: string;
  techStack: string[];
  howIBuiltIt: string;
  tools: string[];
  prompts: string[];
  lessonsLearnt: string[];
  sourceCodeUrl: string;
  liveDemoUrl: string;
  demoVideoUrl?: string;
  category: 'Web' | 'AI' | 'Mobile' | 'Desktop';
}

export interface PodcastEpisode {
  id: string;
  title: string;
  date: string;
  duration: string;
  guest: string;
  description: string;
  link: string;
  thumbnail: string;
}

export interface NewsInsight {
  title: string;
  summary: string;
  source: string;
  url: string;
  category: string;
}
