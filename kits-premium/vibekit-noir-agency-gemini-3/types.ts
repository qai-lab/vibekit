
export interface AppProject {
  id: string;
  title: string;
  thumbUrl: string;
  techStack: string[];
  story: string;
  prompts: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface PodcastEpisode {
  id: string;
  episodeTitle: string;
  guest: string;
  duration: string;
  link: string;
  date: string;
}

export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  date: string;
  summary: string;
  url: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
