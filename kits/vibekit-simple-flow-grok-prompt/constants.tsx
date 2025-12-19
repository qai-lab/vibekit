
import { AppProject, PodcastEpisode, AIInsight } from './types';

export const APP_PROJECTS: AppProject[] = [
  {
    id: 'aura-chat',
    title: 'Aura Chat',
    shortDescription: 'A mindful AI companion that helps you navigate daily stress with soft, empathetic responses.',
    fullDescription: 'Aura Chat was born from the idea that AI shouldn\'t just be a utility, but a presence that contributes to your emotional well-being. Using the Gemini API, I crafted a persona that prioritizes calm, empathy, and constructive reflection over cold facts.',
    thumbnail: 'https://picsum.photos/seed/aura/600/400',
    heroImage: 'https://picsum.photos/seed/aurabig/1200/600',
    techStack: ['React', 'Gemini API', 'Tailwind CSS', 'Node.js'],
    howIBuiltIt: 'The journey started with a deep dive into prompt engineering. I spent weeks refining the "System Instruction" to ensure Aura wouldn\'t sound like a typical chatbot. I used Framer Motion for the breathing animations that sync with the AI\'s response speed.',
    toolsUsed: ['Google AI Studio', 'VS Code', 'Figma', 'Framer Motion'],
    prompts: [
      'Respond as a gentle, wise friend who uses metaphors from nature. Keep your tone soft and avoid clinical language.',
      'Explain the concept of "impermanence" to someone feeling overwhelmed by a deadline.'
    ],
    lessonsLearned: [
      'Iterate prompts for tone, not just for accuracy.',
      'Visual cues (like pulsing lights) significantly enhance user empathy towards AI.',
      'Latency is okay if the animation makes the "wait" feel intentional.'
    ],
    githubUrl: 'https://github.com/vibecoder/aura-chat',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    liveDemoUrl: 'https://aura-chat.example.com'
  },
  {
    id: 'echo-flow',
    title: 'Echo Flow',
    shortDescription: 'Generate lo-fi soundscapes based on your current project\'s coding "vibe".',
    fullDescription: 'Echo Flow listens to your keystroke patterns and uses generative AI to compose a unique, non-distracting ambient soundtrack that matches your flow state.',
    thumbnail: 'https://picsum.photos/seed/echo/600/400',
    heroImage: 'https://picsum.photos/seed/echobig/1200/600',
    techStack: ['Web Audio API', 'React', 'Gemini Flash 1.5'],
    howIBuiltIt: 'I integrated the Web Audio API to handle the synthesizer nodes and used Gemini to analyze snippets of code "style" (heavy logic vs simple styling) to determine the musical scales used.',
    toolsUsed: ['Ableton Live (for samples)', 'TensorFlow.js', 'Vite'],
    prompts: [
      'Analyze this React component and describe its "musical mood" in terms of rhythm, tempo, and texture.',
      'If this code was a rainy afternoon in Tokyo, what chords would be playing?'
    ],
    lessonsLearned: [
      'Generative music requires strict constraints to avoid discord.',
      'Integrating live browser audio with AI analysis is surprisingly performant.'
    ],
    githubUrl: 'https://github.com/vibecoder/echo-flow',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    liveDemoUrl: 'https://echo-flow.example.com'
  },
  {
    id: 'zen-docs',
    title: 'Zen Docs',
    shortDescription: 'Transforms messy technical documentation into clear, poetic, and beautiful guides.',
    fullDescription: 'Technical writing is often dry. Zen Docs uses LLMs to restructure documentation into a narrative flow that is easier for the human brain to process.',
    thumbnail: 'https://picsum.photos/seed/zen/600/400',
    heroImage: 'https://picsum.photos/seed/zenbig/1200/600',
    techStack: ['Next.js', 'Markdown-it', 'Gemini Pro'],
    howIBuiltIt: 'I focused on the AST (Abstract Syntax Tree) of the markdown files. The AI doesn\'t just rewrite text; it suggests better structural hierarchies based on common mental models.',
    toolsUsed: ['PostCSS', 'Zustand', 'OpenAPI'],
    prompts: [
      'Rewrite this API endpoint description to follow the "Inverted Pyramid" journalistic style.',
      'Explain this recursive function using a metaphor related to Russian Nesting Dolls.'
    ],
    lessonsLearned: [
      'Less is more; the AI often tries to add too much fluff.',
      'Preserving code snippets during rewriting is a major engineering challenge.'
    ],
    githubUrl: 'https://github.com/vibecoder/zen-docs',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    liveDemoUrl: 'https://zen-docs.example.com'
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep1',
    title: 'The Soul of the Prompt',
    description: 'We discuss why treating AI prompts like poetry leads to better software than treating them like computer commands.',
    guest: 'Sarah Chen, Creative Technologist',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    date: 'Oct 12, 2023',
    duration: '42 min'
  },
  {
    id: 'ep2',
    title: 'Low-Code, High-Vibe',
    description: 'How the democratization of coding through AI is creating a new class of digital artists.',
    guest: 'Marcus Thorne, Indie Maker',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    date: 'Nov 05, 2023',
    duration: '35 min'
  },
  {
    id: 'ep3',
    title: 'Designing for Silence',
    description: 'Exploring the minimalist aesthetic in modern AI interfaces. Can we have too much information?',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    date: 'Dec 20, 2023',
    duration: '50 min'
  }
];

export const AI_INSIGHTS: AIInsight[] = [
  {
    id: '1',
    title: 'The Shift to Agentic Workflows',
    summary: 'Andrew Ng highlights why iterative agentic workflows might be more impactful than larger model parameters this year.',
    source: 'DeepLearning.AI',
    link: 'https://www.deeplearning.ai/the-batch/',
    category: 'Trends'
  },
  {
    id: '2',
    title: 'Gemini 2.5 and Multimodal Mastery',
    summary: 'The latest updates show a massive leap in how models perceive real-time video and audio feeds.',
    source: 'Google AI Blog',
    link: 'https://blog.google/technology/ai/',
    category: 'News'
  },
  {
    id: '3',
    title: 'Why Creativity is the Ultimate Moat',
    summary: 'Sam Altman discusses how human taste becomes the differentiator in a world of infinite AI content.',
    source: 'Lex Fridman Podcast',
    link: 'https://lexfridman.com/podcast/',
    category: 'Leader Insights'
  },
  {
    id: '4',
    title: 'Sustainable AI: The Energy Question',
    summary: 'Yann LeCun argues for more efficient architectures that mimic biological efficiency.',
    source: 'Meta AI',
    link: 'https://ai.meta.com/blog/',
    category: 'Leader Insights'
  },
  {
    id: '5',
    title: 'Local LLMs: Privacy as a Feature',
    summary: 'The trend of running models on-device is growing as hardware catches up with software demands.',
    source: 'Towards Data Science',
    link: 'https://towardsdatascience.com/',
    category: 'Trends'
  }
];
