
import { AppProject, Episode, Post } from './types';

export const APPS: AppProject[] = [
  {
    id: '1',
    name: 'PromptRefine',
    pitch: 'The A/B testing suite for your system prompts.',
    description: 'Iterate faster on LLM outputs by comparing results across models and versions side-by-side.',
    thumbnail: 'https://picsum.photos/seed/app1/800/600',
    tags: ['Agentic', 'Developer Tool', 'SaaS'],
    techStack: ['Next.js', 'Tailwind', 'Gemini API', 'PostgreSQL'],
    liveUrl: '#',
    sourceUrl: '#',
    tools: ['Cursor', 'v0', 'Claude 3.5 Sonnet'],
    buildProcess: [
      { step: 'Ideation', details: 'Identified the pain point of prompt regression during local development.' },
      { step: 'Vibe Coding', details: 'Used natural language to architect the database schema with Cursor.' }
    ],
    prompts: [
      { title: 'The Architect Prompt', content: 'Design a high-performance comparison engine for text diffs. Focus on minimal latency and clean UI components.' }
    ],
    lessons: ['Caching is hard', 'Prompt versioning is the new git'],
    timeline: [
      { date: '2024-10-01', milestone: 'MVP Launch' },
      { date: '2024-11-15', milestone: '1k Beta Users' }
    ]
  },
  {
    id: '2',
    name: 'VoiceVibe',
    pitch: 'Real-time conversational AI for high-stakes interviews.',
    description: 'A low-latency voice assistant that helps you practice technical interviews with real-time feedback.',
    thumbnail: 'https://picsum.photos/seed/app2/800/600',
    tags: ['Voice', 'Education', 'Mobile'],
    techStack: ['React Native', 'Gemini Live API', 'Deepgram'],
    liveUrl: '#',
    sourceUrl: '#',
    tools: ['Expo', 'Replit'],
    buildProcess: [
      { step: 'Core Tech', details: 'Integrating Gemini 2.5 Flash Native Audio for <200ms response times.' }
    ],
    prompts: [
      { title: 'System Persona', content: 'You are a friendly but rigorous technical interviewer from a Tier 1 tech company.' }
    ],
    lessons: ['WebSockets are tricky on mobile', 'Voice UX requires zero visual friction'],
    timeline: [
      { date: '2024-09-20', milestone: 'Genesis' }
    ]
  },
  {
    id: '3',
    name: 'AgentStore',
    pitch: 'A marketplace for specialized autonomous agents.',
    description: 'Find and deploy pre-configured agents for research, coding, and content creation.',
    thumbnail: 'https://picsum.photos/seed/app3/800/600',
    tags: ['Agentic', 'Web3', 'Marketplace'],
    techStack: ['Solana', 'LangChain', 'OpenAI'],
    liveUrl: '#',
    sourceUrl: '#',
    tools: ['Anchor', 'Spline'],
    buildProcess: [
      { step: 'Smart Contracts', details: 'Building the escrow system for agent subscriptions.' }
    ],
    prompts: [
      { title: 'Agent Logic', content: 'Generate a meta-prompt for a research agent that cites sources in MLA format.' }
    ],
    lessons: ['Decentralized compute is expensive', 'UX is still the biggest hurdle in crypto'],
    timeline: [
      { date: '2024-11-01', milestone: 'Public Alpha' }
    ]
  },
  {
    id: '4',
    name: 'VisionBoard AI',
    pitch: 'Transform your sketches into architectural renderings.',
    description: 'An iPad app that uses local diffusion models to turn rough scribbles into beautiful buildings.',
    thumbnail: 'https://picsum.photos/seed/app4/800/600',
    tags: ['Multimodal', 'iPad', 'Design'],
    techStack: ['SwiftUI', 'CoreML', 'Stable Diffusion'],
    liveUrl: '#',
    sourceUrl: '#',
    tools: ['Xcode', 'Midjourney'],
    buildProcess: [
      { step: 'Model Optimization', details: 'Quantizing SDXL to run smoothly on M2 iPads.' }
    ],
    prompts: [
      { title: 'Refinement', content: 'Enhance this pencil sketch into a photorealistic modern villa at sunset.' }
    ],
    lessons: ['Thermal throttling is real', 'Pencil latency must be <10ms'],
    timeline: [
      { date: '2024-08-01', milestone: 'Initial concept' }
    ]
  },
  {
    id: '5',
    name: 'RAG-Router',
    pitch: 'Intelligent routing for your RAG pipeline.',
    description: 'Save 50% on LLM costs by routing queries to the smallest effective model.',
    thumbnail: 'https://picsum.photos/seed/app5/800/600',
    tags: ['RAG', 'Cost-Optimized', 'Infrastructure'],
    techStack: ['Python', 'FastAPI', 'Redis'],
    liveUrl: '#',
    sourceUrl: '#',
    tools: ['PyCharm', 'Weights & Biases'],
    buildProcess: [
      { step: 'Data Collection', details: 'Benchmarking 100k queries across 5 model providers.' }
    ],
    prompts: [
      { title: 'Classification', content: 'Decide if this user query requires high-level reasoning or basic extraction.' }
    ],
    lessons: ['Classification latency adds up', 'Flash models are underrated'],
    timeline: [
      { date: '2024-12-05', milestone: 'OSS Release' }
    ]
  },
  {
    id: '6',
    name: 'VibeCheck',
    pitch: 'Semantic monitoring for your production LLMs.',
    description: 'Detect "bad vibes" in model outputs before your users do.',
    thumbnail: 'https://picsum.photos/seed/app6/800/600',
    tags: ['Monitoring', 'SaaS', 'NLP'],
    techStack: ['Astro', 'Pinecone', 'D3.js'],
    liveUrl: '#',
    sourceUrl: '#',
    tools: ['VS Code', 'Gradio'],
    buildProcess: [
      { step: 'Embedding Strategy', details: 'Using hybrid search to find outliers in model logs.' }
    ],
    prompts: [
      { title: 'Metric Definition', content: 'Create a scoring system for brand alignment in conversational responses.' }
    ],
    lessons: ['Drift is hard to quantify', 'Visualization matters more than raw logs'],
    timeline: [
      { date: '2024-11-28', milestone: 'Seed Round' }
    ]
  }
];

export const EPISODES: Episode[] = [
  {
    id: 'e1',
    title: 'The Rise of Vibe Coding',
    guest: 'Andrej Karpathy',
    guestBio: 'Co-founder of OpenAI, former Director of AI at Tesla.',
    cover: 'https://picsum.photos/seed/ep1/600/600',
    topics: ['Software 2.0', 'LLMs', 'Future of Work'],
    audioUrl: '#',
    notes: 'In this episode, we dive deep into how coding is evolving from syntax-level mastery to high-level architectural vibes.',
    takeaways: ['Prompting is just high-level programming', 'Logic is still king'],
    links: [{ label: 'Software 2.0 Post', url: '#' }],
    transcript: 'Welcome to the podcast. Today we are talking about the shift in engineering culture...',
    date: '2024-12-01'
  },
  {
    id: 'e2',
    title: 'Agentic Workflows are the Future',
    guest: 'Andrew Ng',
    guestBio: 'Founder of DeepLearning.AI, Coursera.',
    cover: 'https://picsum.photos/seed/ep2/600/600',
    topics: ['Agents', 'Iterative Processes', 'AI Safety'],
    audioUrl: '#',
    notes: 'Andrew explains why the iterative loop of agents is more important than raw model performance.',
    takeaways: ['Small models + agents > Big models alone', 'Reflection is key'],
    links: [{ label: 'Agentic Workflow Blog', url: '#' }],
    transcript: 'I believe we are seeing a major shift in how we build AI applications...',
    date: '2024-11-15'
  },
  {
    id: 'e3',
    title: 'Designing for the AI-First Era',
    guest: 'Brian Chesky',
    guestBio: 'CEO of Airbnb.',
    cover: 'https://picsum.photos/seed/ep3/600/600',
    topics: ['Design', 'UX', 'AI Strategy'],
    audioUrl: '#',
    notes: 'How Airbnb is rethinking the guest experience using large multimodal models.',
    takeaways: ['UI should disappear', 'Personalization is the goal'],
    links: [],
    transcript: 'Design is not just how it looks, it is how the AI interacts with you...',
    date: '2024-11-01'
  },
  {
    id: 'e4',
    title: 'The Hardware of Intelligence',
    guest: 'Jensen Huang',
    guestBio: 'CEO of NVIDIA.',
    cover: 'https://picsum.photos/seed/ep4/600/600',
    topics: ['Chips', 'Data Centers', 'Energy'],
    audioUrl: '#',
    notes: 'Exploring the massive infrastructure required to power the global AI revolution.',
    takeaways: ['Compute is the new oil', 'Scaling is not over'],
    links: [],
    transcript: 'The next industrial revolution is happening in data centers...',
    date: '2024-10-15'
  },
  {
    id: 'e5',
    title: 'Solopreneurship with AI',
    guest: 'Pieter Levels',
    guestBio: 'Founder of NomadList, PhotoAI.',
    cover: 'https://picsum.photos/seed/ep5/600/600',
    topics: ['Indie Hacking', 'Profitability', 'Automation'],
    audioUrl: '#',
    notes: 'Pieter shares how he runs a multi-million dollar empire with zero employees and lots of AI bots.',
    takeaways: ['Ship fast, vibe check later', 'Monetize from day one'],
    links: [],
    transcript: 'I dont code anymore, I just tell the AI what to build...',
    date: '2024-10-01'
  },
  {
    id: 'e6',
    title: 'Crypto and AI Convergence',
    guest: 'Vitalik Buterin',
    guestBio: 'Co-founder of Ethereum.',
    cover: 'https://picsum.photos/seed/ep6/600/600',
    topics: ['Web3', 'Decentralized AI', 'ZK Proofs'],
    audioUrl: '#',
    notes: 'Discussing the role of verifiable compute in an era of deepfakes.',
    takeaways: ['Identity is the problem', 'Privacy is a feature'],
    links: [],
    transcript: 'AI needs a decentralization layer to ensure it remains open...',
    date: '2024-09-15'
  }
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    title: 'The 2025 Agentic Shift',
    summary: 'Why autonomous agents will replace simple chat interfaces by the end of next year.',
    category: 'Agents',
    content: 'We are moving from "Chat-to-Search" to "Action-to-Result". The interface is becoming the outcome...',
    date: '2024-12-10',
    author: 'Vibe Coder',
    quotes: [{ text: 'The agent is the app.', source: 'Me' }],
    relatedIds: ['p2', 'p3']
  },
  {
    id: 'p2',
    title: 'NVIDIA BlackWell: A Deep Dive',
    summary: 'Breaking down the technical specs of the next generation of AI chips.',
    category: 'Chips',
    content: '1.8TB/s bandwidth and the FP4 precision format are game changers for inference speed...',
    date: '2024-12-08',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: ['p4']
  },
  {
    id: 'p3',
    title: 'Open Source vs Closed Source: The Gap Closes',
    summary: 'Llama 3.1 and Mistral Large have changed the math for enterprise builders.',
    category: 'Policy',
    content: 'You no longer need to pay the "OpenAI Tax" for 90% of production use cases...',
    date: '2024-12-05',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  },
  {
    id: 'p4',
    title: 'Why I Switched to Cursor',
    summary: 'A developer diary on how AI-native IDEs changed my build speed by 10x.',
    category: 'Startups',
    content: 'It started with simple autocomplete, then I realized I could just describe files...',
    date: '2024-12-01',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  },
  {
    id: 'p5',
    title: 'The Ethics of Synthetic Data',
    summary: 'Is the internet running out of training data? The debate on model collapse.',
    category: 'Multimodal',
    content: 'If models train on model output, do they converge on mediocrity? New research says...',
    date: '2024-11-28',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  },
  {
    id: 'p6',
    title: 'Token Economics in the LLM Age',
    summary: 'How to price your AI SaaS when compute costs are dynamic.',
    category: 'Startups',
    content: 'Moving away from per-user pricing to tiered usage based on token complexity...',
    date: '2024-11-20',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  },
  {
    id: 'p7',
    title: 'Robotaxi Reality Check',
    summary: 'Teslas FSD vs Waymo: Analyzing the latest disengagement reports.',
    category: 'Agents',
    content: 'Vision-only systems are finally showing maturity in complex urban environments...',
    date: '2024-11-15',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  },
  {
    id: 'p8',
    title: 'AI Regulation: The SB-1047 Aftermath',
    summary: 'What Californias veto means for the future of open models.',
    category: 'Policy',
    content: 'The balance between safety and innovation is still being struck in the courts...',
    date: '2024-11-10',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  },
  {
    id: 'p9',
    title: 'Multimodal Everything',
    summary: 'Gemini 2.5 Flash and the era of seeing/hearing apps.',
    category: 'Multimodal',
    content: 'Interleaved text and image inputs are unlocking new categories of mobile apps...',
    date: '2024-11-05',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  },
  {
    id: 'p10',
    title: 'The "Vibe" is the Specs',
    summary: 'How to hire engineers in a world where AI writes the boilerplate.',
    category: 'Startups',
    content: 'We need taste makers and architects, not just syntax experts...',
    date: '2024-11-01',
    author: 'Vibe Coder',
    quotes: [],
    relatedIds: []
  }
];
