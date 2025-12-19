
import { SiteData } from './types';

export const SITE_DATA: SiteData = {
  apps: [
    {
      id: 'quantum-todo',
      type: 'app',
      title: 'Quantum Task Manager',
      shortDescription: 'A todo app that manages probabilistic tasks across multiple timelines.',
      description: 'The Quantum Task Manager is a prototype application built to demonstrate the capabilities of high-frequency state updates in React. It uses a custom hook system to simulate tasks that might or might not exist depending on user observation.',
      featured: true,
      imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200&h=1600',
      tags: ['React', 'Framer Motion', 'State Management'],
      prompts: [
        'Create a React application that manages a list of tasks with a probabilistic "existence" state.',
        'Implement a custom hook useObservation that triggers a collapse of the wave function when a task is clicked.'
      ],
      lessons: [
        'Deterministic UI state can be boring; adding entropy increases user engagement.',
        'Framer Motion layout transitions are essential for "vibe-centric" software.'
      ],
      links: [
        { label: 'GitHub Repo', url: '#' },
        { label: 'Live Demo', url: '#' }
      ],
      date: '2024-10-15'
    },
    {
      id: 'neo-weather',
      type: 'app',
      title: 'Neo Weather Forecast',
      shortDescription: 'Cyberpunk inspired weather visualizations with real-time particle effects.',
      description: 'Neo Weather reimagines how we consume meteorological data. Instead of boring charts, it uses WebGL to render atmospheric conditions as immersive background environments.',
      featured: true,
      imageUrl: 'https://images.unsplash.com/photo-1461747541664-bf5f6793130c?auto=format&fit=crop&q=80&w=1200&h=1600',
      tags: ['WebGL', 'API Integration', 'Design'],
      prompts: [
        'Build a weather app using OpenWeather API with a Blade Runner 2049 aesthetic.',
        'Use Three.js to create a rain effect that scales with the humidity percentage.'
      ],
      lessons: [
        'GPU-accelerated rendering in the browser is more accessible than ever.',
        'Data doesn’t have to be clinical; it can be evocative.'
      ],
      links: [
        { label: 'Open Source Code', url: '#' }
      ],
      date: '2024-11-02'
    },
    {
      id: 'synth-brain',
      type: 'app',
      title: 'Synth Brain OS',
      shortDescription: 'A minimalist desktop environment running entirely within the browser via LLM logic.',
      description: 'Synth Brain OS is a playground for exploring how operating systems might look if they were built from the ground up to be purely semantic and LLM-driven.',
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=1600',
      tags: ['AI', 'OS Design', 'React'],
      prompts: [
        'Simulate a terminal where every command is interpreted as a natural language request.',
        'Implement a file system where "folders" are actually categorized embedding clusters.'
      ],
      lessons: [
        'Semantic file systems are the next frontier for user experience.',
        'LLMs can act as a bridge between user intent and complex system APIs.'
      ],
      links: [
        { label: 'View Prototype', url: '#' }
      ],
      date: '2024-12-20'
    }
  ],
  podcasts: [
    {
      id: 'ep-01-the-death-of-code',
      type: 'podcast',
      title: 'The Death of the Traditional Coder',
      episodeNumber: 1,
      season: 1,
      duration: '45:20',
      featured: true,
      imageUrl: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800&h=800',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      showNotes: 'In this inaugural episode, we discuss why AI is not replacing programmers, but rather evolving the nature of what it means to write instructions for machines.',
      transcript: 'Welcome to the Vibe Coding podcast... [00:00:15] Today we are joined by Sarah Chen... [00:05:00] Coding is becoming more like creative direction...',
      tags: ['Future of Work', 'AI', 'Philosophy'],
      date: '2024-12-01'
    },
    {
      id: 'ep-02-silicon-souls',
      type: 'podcast',
      title: 'Silicon Souls: Can AI Have a Vibe?',
      episodeNumber: 2,
      season: 1,
      duration: '52:10',
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1478737270239-2fccd27ee8fb?auto=format&fit=crop&q=80&w=800&h=800',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      showNotes: 'We explore the intangible qualities of software that make it feel "alive" or "soulless," and how prompt engineering influences the final "energy" of a product.',
      transcript: '[00:00:00] Start of show. [00:10:00] Defining "Vibe" in the context of neural networks. [00:30:00] The human element in curated generations.',
      tags: ['AI Aesthetics', 'Curation', 'Design'],
      date: '2024-12-15'
    }
  ],
  insights: [
    {
      id: 'the-vibe-manifesto',
      type: 'insight',
      title: 'The Vibe Coding Manifesto',
      category: 'Strategy',
      author: 'Alex River',
      featured: true,
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600',
      content: 'Vibe coding is the transition from syntax-driven development to intent-driven creation. It is the realization that the compiler is no longer the bottleneck—the imagination is.\n\n### Why Now?\nThe advent of Large Language Models has commoditized the production of boilerplate. We are entering an era where the architect and the builder are the same person, empowered by high-level reasoning systems.\n\n### The Three Pillars\n1. **Intent over Implementation**: Focus on the *why*, let the machine handle the *how*.\n2. **Iterative Refinement**: Code is no longer a monument; it is a conversation.\n3. **Atmospheric Engineering**: The UX should reflect the underlying intelligence.',
      tags: ['Manifesto', 'Strategy', 'Vibe Coding'],
      date: '2024-12-05'
    },
    {
      id: 'gemini-2-guide',
      type: 'insight',
      title: 'Mastering Gemini 2.5 Flash',
      category: 'Tools',
      author: 'Jordan Tech',
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=600',
      content: 'Gemini 2.5 Flash offers unprecedented speed and multimodal capabilities. In this post, we explore how to leverage its native audio processing for real-time applications. From voice-enabled agents to complex multi-modal analysis, the possibilities are expanding exponentially with this new iteration of the Flash series.',
      tags: ['Gemini', 'Google API', 'Tutorial'],
      date: '2024-12-10'
    },
    {
      id: 'future-of-dev-tools',
      type: 'insight',
      title: 'The Next Generation of IDEs',
      category: 'Future',
      author: 'Dev Master',
      featured: true,
      imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1200&h=600',
      content: 'IDEs are moving away from file trees and towards mental maps. We predict that by 2026, the primary interface for coding will be a collaborative canvas shared between the human developer and multiple specialized AI agents.',
      tags: ['IDEs', 'Workflow', 'Predictions'],
      date: '2025-01-05'
    }
  ],
  tags: ['React', 'AI', 'Future of Work', 'Design', 'Strategy', 'Tutorial', 'WebGL', 'OS Design', 'Aesthetics']
};
