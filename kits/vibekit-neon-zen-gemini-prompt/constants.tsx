
import { Project, PodcastEpisode, NewsItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Nexus',
    description: 'A generative AI dashboard for real-time visualization of LLM latent spaces.',
    image: 'https://picsum.photos/seed/neon/800/600',
    techStack: ['React', 'Three.js', 'Gemini API', 'Framer Motion'],
    prompt: 'Create a high-fidelity 3D visualizer using Three.js that maps semantic vectors into a neon-colored cluster map. Use soft glow shaders and Inter typography.',
    lessons: 'Visualizing abstract data requires a balance between literal representation and artistic vibe. Integrating Gemini for real-time labeling improved UX significantly.',
    category: 'ai',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: '2',
    title: 'Synth Commerce',
    description: 'Minimalist headless commerce engine built with prompt-first engineering.',
    image: 'https://picsum.photos/seed/commerce/600/400',
    techStack: ['Next.js', 'Tailwind', 'Stripe'],
    prompt: 'A minimalist e-commerce storefront layout with ultra-thin borders, mono-spaced price tags, and buttery smooth page transitions.',
    lessons: 'Micro-interactions are the soul of high-end commerce. Less is more when the vibe is right.',
    category: 'web',
    gridSpan: 'md:col-span-2 md:row-span-1'
  },
  {
    id: '3',
    title: 'Cyber Curator',
    description: 'Automated content curation engine using multi-modal AI agents.',
    image: 'https://picsum.photos/seed/curator/600/800',
    techStack: ['Python', 'FastAPI', 'React'],
    prompt: 'Design a feed that feels like a terminal from the future. Use scan-line effects on images and green-on-black text highlights.',
    lessons: 'Agentic workflows reduce human friction but require robust error handling for "hallucinated" layouts.',
    category: 'ai',
    gridSpan: 'md:col-span-1 md:row-span-2'
  },
  {
    id: '4',
    title: 'VibeOS',
    description: 'A personal operating system shell running entirely in the browser.',
    image: 'https://picsum.photos/seed/os/600/400',
    techStack: ['TypeScript', 'Vite', 'Canvas'],
    prompt: 'Build a draggable window system with glassmorphism. Each window should have a unique gradient border based on its content type.',
    lessons: 'State management for nested windows is tricky but essential for a desktop-class web experience.',
    category: 'design',
    gridSpan: 'md:col-span-1 md:row-span-1'
  }
];

export const PODCASTS: PodcastEpisode[] = [
  {
    id: 'p1',
    title: 'The Rise of the Vibe Coder',
    duration: '45 min',
    date: 'Oct 24, 2024',
    image: 'https://picsum.photos/seed/pod1/200/200'
  },
  {
    id: 'p2',
    title: 'Prompt Engineering vs Software Architecture',
    duration: '32 min',
    date: 'Oct 12, 2024',
    image: 'https://picsum.photos/seed/pod2/200/200'
  },
  {
    id: 'p3',
    title: 'Building Aesthetic AI Agents',
    duration: '58 min',
    date: 'Sep 28, 2024',
    image: 'https://picsum.photos/seed/pod3/200/200'
  }
];

export const AI_NEWS: NewsItem[] = [
  {
    id: 'n1',
    headline: 'Gemini 3.0 Pro Image Preview Released',
    source: 'Google DeepMind',
    time: '2h ago',
    summary: 'A massive leap in visual fidelity and prompt adherence for generative media.'
  },
  {
    id: 'n2',
    headline: 'Agentic Workflows taking over Dev Shops',
    source: 'TechCrunch',
    time: '5h ago',
    summary: 'New surveys show 40% of startups are now using AI agents for internal dev-ops.'
  },
  {
    id: 'n3',
    headline: 'The Future of Interface Design is Multimodal',
    source: 'Medium',
    time: '1d ago',
    summary: 'Why text-only LLMs are becoming a thing of the past in modern UI/UX.'
  }
];
