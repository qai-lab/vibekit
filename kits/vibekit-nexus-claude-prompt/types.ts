
export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  process: string;
  prompts: string[];
  lessons: string;
  githubUrl: string;
  demoUrl: string;
  videoUrl?: string;
}

export interface Podcast {
  id: string;
  title: string;
  guest: string;
  summary: string;
  date: string;
  audioUrl?: string;
  imageUrl: string;
}

export interface Insight {
  id: string;
  title: string;
  author: string;
  content: string;
  tag: 'News' | 'Tech' | 'Opinion' | 'AI';
  date: string;
}
