
export interface AppProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  stack: string[];
  tools: string[];
  buildSteps: string[];
  prompts: { label: string; content: string }[];
  lessons: string[];
  sourceCode: string;
  demoVideo: string;
  liveDemo: string;
  date: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  thumbnail: string;
  audioUrl: string;
  showNotes: string;
  transcript: { speaker: string; text: string; time: string }[];
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface AppData {
  projects: AppProject[];
  episodes: PodcastEpisode[];
  posts: NewsPost[];
}
