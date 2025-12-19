
export interface AppProject {
  id: string;
  name: string;
  pitch: string;
  description: string;
  thumbnail: string;
  tags: string[];
  techStack: string[];
  liveUrl: string;
  sourceUrl: string;
  demoVideo?: string;
  buildProcess: {
    step: string;
    details: string;
  }[];
  tools: string[];
  prompts: {
    title: string;
    content: string;
  }[];
  lessons: string[];
  timeline: {
    date: string;
    milestone: string;
  }[];
}

export interface Episode {
  id: string;
  title: string;
  guest: string;
  guestBio: string;
  cover: string;
  topics: string[];
  audioUrl: string;
  notes: string;
  takeaways: string[];
  links: { label: string; url: string }[];
  transcript: string;
  date: string;
}

export interface Post {
  id: string;
  title: string;
  summary: string;
  category: 'Agents' | 'Multimodal' | 'Chips' | 'Policy' | 'Startups';
  content: string;
  date: string;
  author: string;
  quotes: { text: string; source: string }[];
  relatedIds: string[];
}
