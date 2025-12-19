
import { Project, Podcast, NewsItem } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'NeuroFlow Dash',
    description: 'An AI-driven productivity ecosystem that adapts to your cognitive patterns.',
    thumbnail: 'https://picsum.photos/800/600?random=1',
    techStack: ['React', 'Gemini API', 'Tailwind', 'Framer Motion'],
    howIBuiltIt: 'NeuroFlow Dash was born from the need to bridge the gap between static task lists and dynamic human focus. I utilized the Gemini 1.5 Flash model to analyze user interaction logs and predict peak focus hours.',
    toolsUsed: ['Cursor', 'v0.dev', 'Google AI Studio'],
    prompts: [
      'Generate a system architecture for a focus-tracking app using local storage and Gemini API.',
      'Refine the UI/UX for a minimalist dark theme dashboard.'
    ],
    lessons: [
      'Real-time streaming from Gemini requires robust error handling.',
      'Minimalism is hard when features are complex.'
    ],
    githubUrl: 'https://github.com',
    demoVideoUrl: 'https://youtube.com',
    liveDemoUrl: 'https://neuroflow.app',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: '2',
    title: 'VibeVision AI',
    description: 'Computer vision app that generates poetic descriptions of your environment.',
    thumbnail: 'https://picsum.photos/800/600?random=2',
    techStack: ['Next.js', 'TensorFlow.js', 'GPT-4o'],
    howIBuiltIt: 'Built as an experiment in "Vibe Coding", this app uses camera frames to trigger LLM-generated poetry.',
    toolsUsed: ['VS Code', 'Midjourney', 'React Aria'],
    prompts: ['Analyze this camera frame and write a haiku about the mood.'],
    lessons: ['Camera API permissions are tricky on mobile Safari.'],
    githubUrl: 'https://github.com',
    demoVideoUrl: 'https://youtube.com',
    liveDemoUrl: 'https://vibevision.io',
    gridSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: '3',
    title: 'SynthChat',
    description: 'High-fidelity audio translation assistant.',
    thumbnail: 'https://picsum.photos/800/600?random=3',
    techStack: ['Web Audio API', 'React', 'Whisper'],
    howIBuiltIt: 'Focused on low-latency audio processing for seamless live translation.',
    toolsUsed: ['Bolt.new', 'Claude 3.5 Sonnet'],
    prompts: ['Implement a circular audio visualizer using Canvas API.'],
    lessons: ['Latency is the enemy of conversation.'],
    githubUrl: 'https://github.com',
    demoVideoUrl: 'https://youtube.com',
    liveDemoUrl: 'https://synthchat.live',
    gridSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: '4',
    title: 'FluxEngine',
    description: 'A generative design tool for architects.',
    thumbnail: 'https://picsum.photos/800/600?random=4',
    techStack: ['Three.js', 'React-Three-Fiber', 'Stable Diffusion'],
    howIBuiltIt: 'Leveraging diffusion models to generate 3D meshes based on verbal descriptors.',
    toolsUsed: ['Replicate', 'React Three Fiber'],
    prompts: ['Generate a parametric structure based on organic curves.'],
    lessons: ['3D rendering on the web is resource intensive.'],
    githubUrl: 'https://github.com',
    demoVideoUrl: 'https://youtube.com',
    liveDemoUrl: 'https://fluxengine.design',
    gridSpan: 'md:col-span-2 md:row-span-1'
  }
];

export const podcasts: Podcast[] = [
  {
    id: 'p1',
    title: 'The Rise of Vibe Coding',
    summary: 'Exploring how AI tools are shifting the paradigm from syntax to systems.',
    duration: '42:15',
    date: 'Oct 12, 2024',
    audioUrl: '#',
    coverImage: 'https://picsum.photos/400/400?random=10'
  },
  {
    id: 'p2',
    title: 'Agentic Workflows 101',
    summary: 'Deep dive into how LLMs are becoming autonomous agents in our IDEs.',
    duration: '38:00',
    date: 'Oct 05, 2024',
    audioUrl: '#',
    coverImage: 'https://picsum.photos/400/400?random=11'
  }
];

export const news: NewsItem[] = [
  {
    id: 'n1',
    title: 'Gemini 2.0 Rumors Heat Up: Multimodal Mastery?',
    source: 'AI Insider',
    timestamp: '2h ago',
    link: '#',
    tag: 'Trending'
  },
  {
    id: 'n2',
    title: 'NVIDIA Unveils New H200 Blackwell Architecture',
    source: 'TechPulse',
    timestamp: '5h ago',
    link: '#',
    tag: 'Hardware'
  },
  {
    id: 'n3',
    title: 'OpenAI Preview: o1-mini reasoning benchmarks soar',
    source: 'FutureLoop',
    timestamp: '1d ago',
    link: '#',
    tag: 'Benchmarks'
  },
  {
    id: 'n4',
    title: 'The Ethics of Human-AI Relationships in 2025',
    source: 'The Verge',
    timestamp: '2d ago',
    link: '#',
    tag: 'Ethics'
  }
];
