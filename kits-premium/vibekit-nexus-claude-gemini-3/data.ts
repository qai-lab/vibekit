
import { Project, Podcast, Insight } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'X-001',
    title: 'GEMINI NEXUS',
    oneLiner: 'Multi-modal AI orchestrator for spatial reasoning.',
    description: 'A high-performance command center utilizing Gemini 2.5 Flash for real-time video stream analysis. Built to bridge the gap between computer vision and natural language intent.',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500',
    techStack: ['React', 'Gemini API', 'WebRTC', 'FastAPI'],
    process: 'Orchestrated via a recursive feedback loop with AI agents. I defined the core state machine, while the AI generated the complex WebRTC handshake logic and frame-processing kernels.',
    prompts: [
      'Initialize a React context for managing multi-modal video streams.',
      'Optimize base64 frame conversion for 30fps throughput.',
      'Design a HUD-inspired UI component for object tracking overlays.'
    ],
    lessons: 'Latency is the enemy of spatial AI. Moving to a binary WebSocket protocol reduced delay by 40%.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    stats: { complexity: 88, vibe: 94, power: 99 }
  },
  {
    id: 'X-002',
    title: 'NEURAL SYNTH',
    oneLiner: 'Generative audio landscapes for deep work states.',
    description: 'An AI-driven synthesizer that generates evolving ambient textures based on user focus metrics and bio-feedback data streams.',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800&h=500',
    techStack: ['Three.js', 'WebAudio', 'PyTorch', 'Next.js'],
    process: 'True human-AI collaboration. I handled the frequency modulation logic, and used AI to generate procedural Three.js shader materials that react to the music.',
    prompts: [
      'Create a GLSL fragment shader for a pulsating nebula effect.',
      'Map neural focus levels to low-pass filter resonance.',
    ],
    lessons: 'Visual synchronization is more important than visual quality for immersive experiences.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    stats: { complexity: 72, vibe: 98, power: 81 }
  },
  {
    id: 'X-003',
    title: 'TERMINAL IDE',
    oneLiner: 'Prompt-first development environment.',
    description: 'A visual programming language where you "vibe code" entire applications by connecting intent nodes rather than writing syntax.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500',
    techStack: ['TypeScript', 'React Flow', 'Docker', 'Node.js'],
    process: 'A self-hosted experiment. I used the IDE to build parts of itself, creating a meta-circular development flow with Gemini as the lead architect.',
    prompts: [
      'Implement topological sorting for a directed acyclic graph of AI agents.',
      'Build a sandboxed execution environment for generated JS code snippets.',
    ],
    lessons: 'Circular dependencies in AI-generated code require a robust unit testing harness.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    stats: { complexity: 96, vibe: 85, power: 92 }
  }
];

export const PODCASTS: Podcast[] = [
  {
    id: 'P-1',
    title: 'THE AGENTIC ERA',
    guest: 'GEMINI 1.5 PRO (SIM)',
    summary: 'A deep dive into autonomous software agents and the death of manual UI interactions.',
    date: 'OCT 20, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2fccd2c7862a?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'P-2',
    title: 'VIBE CODING 201',
    guest: 'ANDREJ K. (SIM)',
    summary: 'Mastering the art of conversational orchestration in a post-syntax world.',
    date: 'OCT 25, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'I-1',
    title: 'LLM AS THE COMPILER',
    author: 'VIBEKIT_CORE',
    content: 'The future of development is declarative. We describe the "What", the AI compiles the "How" in real-time.',
    tag: 'Tech',
    date: '2024-11-05'
  },
  {
    id: 'I-2',
    title: 'LATENCY IS THE NEW RAM',
    author: 'NET_OPS',
    content: 'As models get smarter, the bottleneck shifts from reasoning quality to token-per-second throughput.',
    tag: 'AI',
    date: '2024-11-08'
  }
];
