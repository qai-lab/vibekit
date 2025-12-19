
import { Project, PodcastEpisode } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'lumina-v4',
    title: 'Lumina-V4 Engine',
    tagline: 'Hyper-realistic video synthesis with 14ms latency.',
    thumbnail: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200&h=800',
    techStack: ['PyTorch', 'Next.js', 'CUDA', 'WebGPU', 'TypeScript'],
    howIBuiltIt: 'Architected as a distributed inference engine. I utilized a custom diffusion transformer (DiT) model optimized for real-time browser playback via WebGPU, bypassing traditional server bottlenecks.',
    tools: ['Cursor', 'NVIDIA Warp', 'Claude 3.5 Sonnet', 'Weights & Biases'],
    prompts: [
      'Generate a cinematic tracking shot of a neon cyberpunk city...',
      'Optimize the attention mechanism for 4K frame consistency...',
      'Implement a temporal coherence loss function for stable video output.'
    ],
    lessonsLearnt: [
      'Real-time video synthesis requires aggressive VRAM management.',
      'WebGPU is the future of edge-based AI rendering.',
      'User-intent mapping is more important than raw pixel density.'
    ],
    sourceCodeUrl: 'https://github.com/vibe-kit/lumina-v4',
    liveDemoUrl: 'https://lumina.vibe',
    demoVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: 'AI'
  },
  {
    id: 'latent-vision',
    title: 'LatentVision Pro',
    tagline: 'Zero-shot image editing with natural language.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200&h=800',
    techStack: ['React', 'Tailwind', 'Gemini 3 Pro', 'Stable Diffusion XL'],
    howIBuiltIt: 'Built a multi-modal bridge between Gemini 3 and SDXL. The system interprets complex scene descriptions and translates them into precise latent space manipulations.',
    tools: ['v0', 'Replicate', 'GitHub Copilot'],
    prompts: [
      'Change the lighting in this photo to a warm golden hour glow...',
      'Add a floating crystalline structure in the background...',
      'Remove all distractions while maintaining the texture of the fabric.'
    ],
    lessonsLearnt: [
      'Masking accuracy is the bottleneck of linguistic image editing.',
      'ControlNet integration is essential for professional workflows.',
      'API cost management requires smart caching of latent vectors.'
    ],
    sourceCodeUrl: 'https://github.com/vibe-kit/latent-vision',
    liveDemoUrl: 'https://vision.vibe',
    category: 'AI'
  },
  {
    id: 'neural-canvas',
    title: 'NeuralCanvas',
    tagline: 'Collaborative AI workspace for design teams.',
    thumbnail: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1200&h=800',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    howIBuiltIt: 'Focused on multi-user "vibe-syncing." Users can collectively refine a prompt while seeing live generative previews in a shared infinite canvas.',
    tools: ['Linear', 'Vercel', 'Postman'],
    prompts: [
      'Create a shared state for prompt history with rollback features...',
      'Implement real-time cursors for collaborative AI brainstorming...',
      'Design a layer system that blends AI layers with vector art.'
    ],
    lessonsLearnt: [
      'State synchronization for AI outputs is complex due to non-determinism.',
      'Infinite canvas performance peaks at 2000+ nodes.',
      'Collaborative prompting needs a "lead" role to avoid chaos.'
    ],
    sourceCodeUrl: 'https://github.com/vibe-kit/neural-canvas',
    liveDemoUrl: 'https://canvas.vibe',
    category: 'Web'
  }
];

export const PODCASTS: PodcastEpisode[] = [
  {
    id: 'ep-1',
    title: 'Architecting Synthetic Worlds',
    date: 'Jan 15, 2024',
    duration: '42 mins',
    guest: 'Dr. Elena Ray',
    description: 'A deep dive into the math behind Lumina-V4 and how temporal consistency is finally being solved.',
    link: '#',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'ep-2',
    title: 'The Browser as a Supercomputer',
    date: 'Feb 02, 2024',
    duration: '35 mins',
    guest: 'Alex Rivera',
    description: 'Exploring WebGPU and the shift toward local-first AI processing for creative apps.',
    link: '#',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400&h=400'
  }
];
