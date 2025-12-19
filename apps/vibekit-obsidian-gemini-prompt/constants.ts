
import { AppProject, PodcastEpisode, NewsItem } from './types';

export const APPS: AppProject[] = [
  {
    id: 'app-1',
    title: 'EcoSphere AI',
    thumbUrl: 'https://picsum.photos/seed/eco/800/600',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Tailwind'],
    story: 'A sustainability tracker that uses multi-modal AI to analyze grocery receipts and suggest low-carbon footprint alternatives.',
    prompts: [
      'Analyze this receipt for high-carbon items.',
      'Suggest a plant-based alternative for the milk listed here.',
      'Estimate the total CO2 impact of this shopping trip.'
    ],
    links: {
      github: 'https://github.com/example/ecosphere',
      live: 'https://ecosphere.example.com'
    }
  },
  {
    id: 'app-2',
    title: 'Nexus Flow',
    thumbUrl: 'https://picsum.photos/seed/nexus/800/600',
    techStack: ['Next.js', 'D3.js', 'PostgreSQL', 'Prisma'],
    story: 'An enterprise-grade supply chain visualization tool that identifies bottlenecks in real-time using advanced graph algorithms.',
    prompts: [
      'Show me all active shipments between Singapore and Rotterdam.',
      'Highlight the critical path for the semiconductor order.',
      'Predict delays based on current weather patterns in the Atlantic.'
    ],
    links: {
      github: 'https://github.com/example/nexus-flow',
      live: 'https://nexusflow.io'
    }
  },
  {
    id: 'app-3',
    title: 'Pulse Studio',
    thumbUrl: 'https://picsum.photos/seed/pulse/800/600',
    techStack: ['React', 'Web Audio API', 'Canvas', 'Firebase'],
    story: 'A collaborative music production environment where artists can generate MIDI sequences based on emotional descriptions.',
    prompts: [
      'Generate a lo-fi beat that feels like a rainy Tuesday.',
      'Add a melancholic cello progression in D minor.',
      'Sync these layers with a 90s hip-hop groove.'
    ],
    links: {
      github: 'https://github.com/example/pulse-studio'
    }
  }
];

export const PODCASTS: PodcastEpisode[] = [
  {
    id: 'pod-1',
    episodeTitle: 'The Future of Multi-Modal AI',
    guest: 'Dr. Elena Vance',
    duration: '45 mins',
    link: '#',
    date: '2024-10-12'
  },
  {
    id: 'pod-2',
    episodeTitle: 'Scaling React Apps to 10M Users',
    guest: 'Dan Abramov (Mock)',
    duration: '1h 12m',
    link: '#',
    date: '2024-08-05'
  },
  {
    id: 'pod-3',
    episodeTitle: 'Clean Code in the Age of LLMs',
    guest: 'Robert C. Martin (Mock)',
    duration: '58 mins',
    link: '#',
    date: '2024-05-20'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    headline: 'Zenith Portfolio Featured in TechCrunch',
    source: 'TechCrunch',
    date: '2024-11-01',
    summary: 'Developer creates a new standard for interactive portfolios using Gemini-integrated chat interfaces.',
    url: '#'
  },
  {
    id: 'news-2',
    headline: 'The Rise of Intelligent SPAs',
    source: 'The Verge',
    date: '2024-10-15',
    summary: 'How frontend engineers are leveraging local LLM models to provide offline-first intelligent UX.',
    url: '#'
  },
  {
    id: 'news-3',
    headline: 'TypeScript 5.6: What You Need to Know',
    source: 'Dev.to',
    date: '2024-09-28',
    summary: 'A deep dive into the latest features of TypeScript and how they improve dev productivity.',
    url: '#'
  }
];
