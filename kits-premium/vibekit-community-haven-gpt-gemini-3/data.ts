import { AppProject, Episode, Post } from './types';

export const APPS: AppProject[] = [
  {
    id: '1',
    name: 'PromptRefine',
    pitch: 'The A/B testing suite for your system prompts.',
    description: 'Iterate faster on LLM outputs by comparing results across models and versions side-by-side.',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
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
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
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
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
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
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
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
  }
];

export const EPISODES: Episode[] = [
  {
    id: 'e1',
    title: 'The Rise of Vibe Coding',
    guest: 'Andrej Karpathy',
    guestBio: 'Co-founder of OpenAI, former Director of AI at Tesla, and a pioneer in Software 2.0.',
    cover: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
    topics: ['Software 2.0', 'LLMs', 'Future of Work', 'Vibe Coding'],
    audioUrl: '#',
    notes: 'In this definitive session, we explore the transition from manual syntax to high-level architectural intent. Andrej explains why the "vibe" of a codebase is becoming more important than its boilerplate.',
    takeaways: [
      'The IDE is becoming an architectural collaborator, not just a text editor.',
      'Prompting is the highest level of programming language yet invented.',
      'Software 2.0 is fundamentally about differentiable logic.'
    ],
    links: [
      { label: 'Software 2.0 Post', url: 'https://karpathy.medium.com/software-2-0-7e5b1b03e13a' },
      { label: 'Vibe Coding Discussion', url: '#' }
    ],
    transcript: 'Welcome to The Parlor. Today we have a very special guest, Andrej Karpathy. We are discussing the massive shift in engineering culture...',
    date: '2024-12-01'
  },
  {
    id: 'e2',
    title: 'Agentic Workflows are the Future',
    guest: 'Andrew Ng',
    guestBio: 'Founder of DeepLearning.AI, Coursera, and Adjunct Professor at Stanford.',
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    topics: ['Agents', 'Iterative Processes', 'AI Safety', 'Education'],
    audioUrl: '#',
    notes: 'Andrew makes a compelling case for agentic workflows. He argues that the loop—the ability of a model to reflect and iterate—is more powerful than any single-turn inference.',
    takeaways: [
      'Iterative agents outperform zero-shot prompts by significant margins.',
      'We need to design for model failure through robust loop architectures.',
      'The cost of compute is dropping fast enough to make multi-turn agents standard.'
    ],
    links: [
      { label: 'Agentic Workflow Blog', url: '#' },
      { label: 'DeepLearning.AI Courses', url: 'https://deeplearning.ai' }
    ],
    transcript: 'I believe we are seeing a major shift in how we build AI applications. It is no longer about the prompt; it is about the workflow...',
    date: '2024-11-15'
  }
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    title: 'The 2025 Agentic Shift',
    summary: 'Why autonomous agents will replace simple chat interfaces by the end of next year.',
    category: 'Agents',
    content: `
      # The End of the Chat Box
      
      We are moving from "Chat-to-Search" to "Action-to-Result". The interface is becoming the outcome. In the next 12 months, we expect to see a massive migration of user attention from LLM chat interfaces to task-specific agents.
      
      ## Why Now?
      
      1. **Reliability**: Multi-turn agents can self-correct.
      2. **Context**: Agents can now hold 1M+ tokens in memory.
      3. **Tools**: We have standardized how models call external APIs.
      
      The hub is evolving. We are no longer just building tools; we are planting the seeds for autonomous ecosystems.
    `,
    date: '2024-12-10',
    author: 'Vibe Architect',
    quotes: [{ text: 'The agent is the app.', source: 'The Architect' }],
    relatedIds: ['p2', 'p3']
  },
  {
    id: 'p2',
    title: 'Why I Switched to Cursor',
    summary: 'A developer diary on how AI-native IDEs changed my build speed by 10x.',
    category: 'Startups',
    content: `
      # The IDE of the Future is Here
      
      It started with simple autocomplete. Then I realized I could just describe entire files. Cursor isn't just an editor; it's a co-architect.
      
      ## The 10x Factor
      
      - **Context Awareness**: It knows my entire repo.
      - **Natural Language Refactoring**: "Rewrite this using Tailwind's latest patterns."
      - **Vibe Integration**: It follows the architectural spirit I set.
      
      Building for the Community Haven became 10x faster once I stopped typing and started architecting.
    `,
    date: '2024-12-01',
    author: 'Vibe Architect',
    quotes: [],
    relatedIds: ['p1']
  }
];
