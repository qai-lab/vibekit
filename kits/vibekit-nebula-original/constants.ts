
import { Project, PodcastEpisode } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-dream-studio',
    title: 'DreamStudio AI',
    tagline: 'Infinite creativity powered by Gemini 3.',
    thumbnail: 'https://picsum.photos/seed/dream/800/600',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Canvas API'],
    howIBuiltIt: 'Started with a high-level vibe: "A studio where words become worlds." I used a modular architectural pattern where the AI act as both the creative engine and the UI orchestrator.',
    tools: ['Claude 3.5 Sonnet', 'v0', 'Cursor', 'Gemini API'],
    prompts: [
      'Build a futuristic canvas interface with glassmorphism sidebar...',
      'Refactor the Gemini API hook to handle streaming image generation parts...',
      'Add a grain effect to the background using pure CSS gradients.'
    ],
    lessonsLearnt: [
      'Prompt engineering is just technical specs in natural language.',
      'Token optimization is critical for long-running creative sessions.',
      'The "vibe" determines 90% of user retention in early-stage products.'
    ],
    sourceCodeUrl: 'https://github.com/vibe-coder/dreamstudio',
    liveDemoUrl: 'https://dreamstudio-demo.vibe',
    demoVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: 'AI'
  },
  {
    id: 'syntax-sonics',
    title: 'SyntaxSonics',
    tagline: 'Translating source code into ambient soundscapes.',
    thumbnail: 'https://picsum.photos/seed/sonics/800/600',
    techStack: ['React', 'Tone.js', 'Web Audio API', 'TypeScript'],
    howIBuiltIt: 'Conceived as a way to "hear" technical debt. Higher complexity code generates dissonance, while clean abstractions produce harmonious synths.',
    tools: ['GitHub Copilot', 'Web Audio Inspector', 'Recharts'],
    prompts: [
      'Map AST node complexity to oscillator frequency...',
      'Create a circular visualization that pulses with the audio rhythm...',
      'Implement a "clean code" audio filter using low-pass manipulation.'
    ],
    lessonsLearnt: [
      'Web Audio API has significant performance overhead for large projects.',
      'Sonification of data reveals patterns visualizers often miss.',
      'Tone.js is incredibly powerful for declarative audio.'
    ],
    sourceCodeUrl: 'https://github.com/vibe-coder/syntaxsonics',
    liveDemoUrl: 'https://sonics.vibe',
    category: 'Web'
  },
  {
    id: 'neuro-notes',
    title: 'NeuroNotes',
    tagline: 'Brain-dead simple note taking for high-speed thinkers.',
    thumbnail: 'https://picsum.photos/seed/notes/800/600',
    techStack: ['Next.js', 'PostgreSQL', 'Tailwind', 'Vector DB'],
    howIBuiltIt: 'I wanted a tool that anticipates what I want to write next. Used semantic search to find related thoughts automatically.',
    tools: ['Linear', 'Vercel', 'Pinecone'],
    prompts: [
      'Create a note-taking app that feels like a conversation with yourself...',
      'Design a minimal slate interface with zero buttons visible until hover...',
      'Integrate vector search to suggest related notes in the sidebar.'
    ],
    lessonsLearnt: [
      'Less is truly more in UI design.',
      'Vector databases are game-changers for personalized productivity tools.',
      'SQLite is often enough for local-first vibes.'
    ],
    sourceCodeUrl: 'https://github.com/vibe-coder/neuronotes',
    liveDemoUrl: 'https://notes.vibe',
    category: 'Desktop'
  }
];

export const PODCASTS: PodcastEpisode[] = [
  {
    id: 'ep-1',
    title: 'The Death of the Senior Dev?',
    date: 'Oct 12, 2023',
    duration: '45 mins',
    guest: 'Andrej Karpathy',
    description: 'Exploring how AI is redefining the ceiling of individual productivity and what it means to be a "Software Architect" in 2024.',
    link: '#',
    thumbnail: 'https://picsum.photos/seed/pod1/400/400'
  },
  {
    id: 'ep-2',
    title: 'Vibe Coding vs. Engineering',
    date: 'Nov 05, 2023',
    duration: '38 mins',
    guest: 'Nat Friedman',
    description: 'Is shipping faster always better? A deep dive into the philosophy of the new coding era.',
    link: '#',
    thumbnail: 'https://picsum.photos/seed/pod2/400/400'
  },
  {
    id: 'ep-3',
    title: 'Agents are the New Apps',
    date: 'Dec 15, 2023',
    duration: '52 mins',
    guest: 'Sam Altman (AI Simulation)',
    description: 'A look into the near future where we don\'t use apps, we give instructions to our digital shadows.',
    link: '#',
    thumbnail: 'https://picsum.photos/seed/pod3/400/400'
  }
];
