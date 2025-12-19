
import { AppProject, PodcastEpisode, NewsItem } from './types';

export const APPS: AppProject[] = [
  {
    id: 'app-1',
    title: 'SYNTHETIC ECOLOGY',
    thumbUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200',
    techStack: ['REACT', 'TYPESCRIPT', 'GEMINI AI', 'TAILWIND'],
    story: 'A SPECULATIVE SUSTAINABILITY FRAMEWORK UTILIZING MULTI-MODAL AI TO DECONSTRUCT GLOBAL CONSUMPTION PATTERNS AND REBUILD LOCALIZED CIRCULAR ECONOMIES THROUGH GENERATIVE LOGISTICS.',
    prompts: [
      'ANALYZE CONSUMPTION DATA FOR REGENERATIVE OPPORTUNITIES.',
      'GENERATE A LOCALIZED CIRCULAR ECONOMY MODEL.',
      'ESTIMATE CARBON SEQUESTRATION POTENTIAL.'
    ],
    links: {
      github: 'https://github.com/vibekit/synthetic-ecology',
      live: 'https://vibekit.agency/ecology'
    }
  },
  {
    id: 'app-2',
    title: 'LOGISTICS ARCHITECTURE',
    thumbUrl: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=1200',
    techStack: ['NEXT.JS', 'D3.JS', 'POSTGRES', 'PRISMA'],
    story: 'AN ENTERPRISE-GRADE VISUALIZATION ENGINE THAT MAPS GLOBAL SUPPLY CHAINS AS LIVING ORGANISMS, IDENTIFYING FLOW BOTTLENECKS BEFORE THEY MANIFEST PHYSICALLY.',
    prompts: [
      'RENDER THE CRITICAL PATH OF SEMICONDUCTOR FREIGHT.',
      'PREDICT DISRUPTION BASED ON GEOPOLITICAL VIBRANCY.',
      'VISUALIZE REAL-TIME MARITIME BOTTLENECKS.'
    ],
    links: {
      github: 'https://github.com/vibekit/logistics-arch',
      live: 'https://vibekit.agency/logistics'
    }
  },
  {
    id: 'app-3',
    title: 'SONIC BRUTALISM',
    thumbUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
    techStack: ['WEB AUDIO', 'CANVAS', 'FIREBASE', 'REACT'],
    story: 'A COLLABORATIVE AUDIO PRODUCTION SUITE DESIGNED FOR ARCHITECTURAL SOUNDSCAPES. TRANSLATING EMOTIONAL DESCRIPTIONS INTO RAW, BRUTALIST SONIC TEXTURES.',
    prompts: [
      'GENERATE A SOUNDSCAPE BASED ON CONCRETE TEXTURES.',
      'TRANSLATE BRUTALIST ARCHITECTURE INTO MIDI DATA.',
      'SYNTHESIZE VOID SPACES INTO AMBIENT DRONES.'
    ],
    links: {
      github: 'https://github.com/vibekit/sonic-brutalism'
    }
  }
];

export const PODCASTS: PodcastEpisode[] = [
  {
    id: 'pod-1',
    episodeTitle: 'THE ARCHITECTURE OF INTELLIGENCE',
    guest: 'DR. ELENA VANCE',
    duration: '48 MINS',
    link: '#',
    date: '24.10.12'
  },
  {
    id: 'pod-2',
    episodeTitle: 'SYSTEMIC DESIGN IN THE AGE OF LLMS',
    guest: 'SASHA GREY (DESIGN LEAD)',
    duration: '62 MINS',
    link: '#',
    date: '24.08.05'
  },
  {
    id: 'pod-3',
    episodeTitle: 'DECONSTRUCTING THE MODERN FRONTEND',
    guest: 'MARCUS AURELIUS (DEV)',
    duration: '54 MINS',
    link: '#',
    date: '24.05.20'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    headline: 'VIBEKIT DEFINES THE NEW AGENCY STANDARD',
    source: 'ARCHITECTURAL DIGEST',
    date: '01.11.24',
    summary: 'HOW A BOUTIQUE AGENCY IS MERGING AI WITH HIGH-CONCEPT BRUTALIST DESIGN TO REDEFINE THE DIGITAL LANDSCAPE.',
    url: '#'
  },
  {
    id: 'news-2',
    headline: 'THE DEATH OF THE TEMPLATE',
    source: 'WIRED',
    date: '15.10.24',
    summary: 'FRONTEND ENGINEERING IS NO LONGER ABOUT LAYOUTS; IT IS ABOUT ATMOSPHERE. VIBEKIT LEADS THE CHARGE.',
    url: '#'
  },
  {
    id: 'news-3',
    headline: 'GENERATIVE BRANDS',
    source: 'FAST COMPANY',
    date: '28.09.24',
    summary: 'EXPLORING HOW AI-DRIVEN BRAND IDENTITIES ARE RESPONDING TO USER BEHAVIOR IN REAL-TIME.',
    url: '#'
  }
];
