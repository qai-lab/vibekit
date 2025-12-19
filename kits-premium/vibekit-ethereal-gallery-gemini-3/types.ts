
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  prompt: string;
  lessons: string;
  category: 'web' | 'ai' | 'design';
  gridSpan?: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  date: string;
  image: string;
}

export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  time: string;
  summary: string;
}
