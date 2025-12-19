
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  howIBuiltIt: string;
  toolsUsed: string[];
  prompts: string[];
  lessons: string[];
  githubUrl: string;
  demoVideoUrl: string;
  liveDemoUrl: string;
  gridSpan?: string; // Tailwind grid span classes
}

export interface Podcast {
  id: string;
  title: string;
  summary: string;
  duration: string;
  date: string;
  audioUrl: string;
  coverImage: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  link: string;
  tag: string;
}
