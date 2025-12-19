
import { Project, PodcastEpisode, NewsItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aetheris',
    description: 'A study on digital transcendence. Procedural forms that mimic biological growth within a sterile silicon environment.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    techStack: ['WebGL', 'GLSL', 'Gemini 3'],
    prompt: 'A floating crystalline structure composed of mercury and light, refracting a spectrum of gold and silver across an infinite dark canvas.',
    lessons: 'In the space between code and art, intent is everything. Minimalism is the ultimate sophistication. Complexity should be felt, not seen.',
    category: 'design',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: '2',
    title: 'Monolith UI',
    description: 'Experimental interface architecture inspired by 20th-century brutalist monuments and the silence of deep space.',
    image: 'https://images.unsplash.com/photo-1449156001931-8283327360e3?w=1200&auto=format&fit=crop&q=80',
    techStack: ['React', 'Typography', 'Architecture'],
    prompt: 'Ultra-minimalist monolithic structure in a desert landscape, sharp shadows, cinematic lighting, 8k resolution, photorealistic.',
    lessons: 'Negative space is not empty; it is a structural element that provides gravity to the content it surrounds.',
    category: 'web',
    gridSpan: 'md:col-span-2 md:row-span-1'
  },
  {
    id: '3',
    title: 'Latent Dreams',
    description: 'An archive of neural hallucinations captured during the early hours of generative synthesis.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&auto=format&fit=crop&q=80',
    techStack: ['AI Core', 'Stable Diffusion', 'Curation'],
    prompt: 'A silk fabric floating in mid-air, morphing into a human face and then into a cloud of gold dust, hyper-detailed surrealism.',
    lessons: 'The machine does not dream, it iterates. Curation is the act of finding the ghost in the machine.',
    category: 'ai',
    gridSpan: 'md:col-span-1 md:row-span-2'
  },
  {
    id: '4',
    title: 'The Void',
    description: 'A sensory deprivation experience designed to highlight the beauty of the single, perfect pixel.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&auto=format&fit=crop&q=80',
    techStack: ['Canvas', 'Audio', 'Minimalism'],
    prompt: 'Pure black texture with subtle grain, a single gold thread running horizontally, macro photography, shallow depth of field.',
    lessons: 'True luxury is the ability to ignore the noise. The Void is a reminder of our digital origin.',
    category: 'design',
    gridSpan: 'md:col-span-1 md:row-span-1'
  }
];

export const PODCASTS: PodcastEpisode[] = [
  {
    id: 'p1',
    title: 'Philosophy of the Pixel',
    duration: '45 min',
    date: 'Dec 2024',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    title: 'Silence in Interface',
    duration: '32 min',
    date: 'Nov 2024',
    image: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    title: 'The AI as Surrealist',
    duration: '58 min',
    date: 'Oct 2024',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&auto=format&fit=crop&q=80'
  }
];

export const AI_NEWS: NewsItem[] = [
  {
    id: 'n1',
    headline: 'The Aesthetic Singularity',
    source: 'The Art Chronicle',
    time: 'Recent',
    summary: 'Exploration of how machine learning models are beginning to define a new standard for high-fidelity surrealism in digital media.'
  },
  {
    id: 'n2',
    headline: 'Brutalism in Digital Spaces',
    source: 'Design Theory',
    time: 'Featured',
    summary: 'The return to raw materials and uncompromising geometry in luxury web applications and architectural visualization.'
  },
  {
    id: 'n3',
    headline: 'Ethical Curation',
    source: 'Modern Museum',
    time: 'Archive',
    summary: 'The evolving role of the human artist as a curator in a world of infinite, automated digital production.'
  }
];
