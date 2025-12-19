
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
      imageUrl: 'https://picsum.photos/seed/quantum/800/600',
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
      featured: false,
      imageUrl: 'https://picsum.photos/seed/weather/800/600',
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
      imageUrl: 'https://picsum.photos/seed/podcast1/800/800',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      showNotes: 'In this inaugural episode, we discuss why AI is not replacing programmers, but rather evolving the nature of what it means to write instructions for machines.',
      transcript: 'Welcome to the Vibe Coding podcast... [00:00:15] Today we are joined by Sarah Chen... [00:05:00] Coding is becoming more like creative direction...',
      tags: ['Future of Work', 'AI', 'Philosophy'],
      date: '2024-12-01'
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
      imageUrl: 'https://picsum.photos/seed/manifesto/1200/400',
      content: 'Vibe coding is the transition from syntax-driven development to intent-driven creation. It is the realization that the compiler is no longer the bottleneck—the imagination is.\n\n### Why Now?\nThe advent of Large Language Models has commoditized the production of boilerplate. We are entering an era where the architect and the builder are the same person, empowered by high-level reasoning systems...',
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
      imageUrl: 'https://picsum.photos/seed/gemini/1200/400',
      content: 'Gemini 2.5 Flash offers unprecedented speed and multimodal capabilities. In this post, we explore how to leverage its native audio processing for real-time applications...',
      tags: ['Gemini', 'Google API', 'Tutorial'],
      date: '2024-12-10'
    }
  ],
  tags: ['React', 'AI', 'Future of Work', 'Design', 'Strategy', 'Tutorial', 'WebGL']
};
