
import { AppData } from './types';

export const DATABASE: AppData = {
  projects: [
    {
      id: "zenfocus-ai",
      title: "ZenFocus AI",
      description: "A transcendental mindfulness companion architected to synthesize calm within the storm of digital existence.",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=90&w=1600",
      category: "Human Optimization",
      stack: ["React", "TypeScript", "Gemini API"],
      tools: ["v0.dev", "Supabase"],
      buildSteps: [
        "Synthesized emotion-sensing algorithms using high-fidelity audio analysis.",
        "Engineered Google Calendar integration for predictive stress mapping.",
        "Curated a visual sanctuary using monochromatic palettes and glass morphism."
      ],
      prompts: [
        {
          label: "Synthesizer Prompt",
          content: "You are an architect of silence. Evaluate the current digital cognitive load and propose a 90-second sensory recalibration."
        }
      ],
      lessons: [
        "In the age of noise, silence is the ultimate luxury.",
        "Minimalist interfaces reduce cognitive drag by 40%."
      ],
      sourceCode: "https://github.com/vibe-kit/zenfocus",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://zenfocus.ai",
      date: "2024.10"
    },
    {
      id: "vibe-chart",
      title: "VibeChart",
      description: "Cartography of the soul. Mapping the semantic sentiment of codebases onto 3D topographic landscapes.",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=90&w=1600",
      category: "Cartography",
      stack: ["Three.js", "Gemini 3 Pro", "D3.js"],
      tools: ["Cursor", "Shadcn UI"],
      buildSteps: [
        "Mapped 100k lines of code to emotional vectors.",
        "Rendered topographic meshes using custom GLSL shaders.",
        "Integrated real-time sentiment streaming from GitHub Webhooks."
      ],
      prompts: [
        {
          label: "Topographic Logic",
          content: "Translate this abstract logic flow into a series of elevation points based on cyclomatic complexity and comment sentiment."
        }
      ],
      lessons: [
        "Complexity has a visual weight that designers can exploit.",
        "Abstract data is best understood as physical terrain."
      ],
      sourceCode: "https://github.com/vibe-kit/vibechart",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://vibechart.app",
      date: "2024.11"
    },
    {
      id: "prompt-engine",
      title: "Manifesto Engine",
      description: "A sanctuary for language. Refine, version, and battle-test complex semantic instructions in a unified space.",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=90&w=1600",
      category: "Linguistic Infrastructure",
      stack: ["Next.js", "Prisma", "PostgreSQL"],
      tools: ["Clerk", "Radix UI"],
      buildSteps: [
        "Developed a semantic diffing engine for system prompts.",
        "Created an A/B testing suite for model response variance.",
        "Implemented shared libraries for enterprise-level prompt governance."
      ],
      prompts: [
        {
          label: "Semantic Refiner",
          content: "Distill this instruction to its atomic essence while maintaining 100% fidelity to the core constraints."
        }
      ],
      lessons: [
        "Language is the new high-level programming language.",
        "Version control for thought processes is the missing link in AI dev."
      ],
      sourceCode: "https://github.com/vibe-kit/prompt-engine",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://promptengine.pro",
      date: "2024.09"
    }
  ],
  episodes: [
    {
      id: "ep1",
      title: "The Ghost in the Code",
      description: "A meditation on why 'vibe' has replaced 'logic' as the north star of development.",
      date: "JAN 2025",
      duration: "45M",
      thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=90&w=800",
      audioUrl: "#",
      showNotes: "A deep dive into the subjective nature of AI-generated products and the return of craftsmanship in software engineering.",
      transcript: []
    },
    {
      id: "ep2",
      title: "Semantic Compilers",
      description: "Exploring the transition from typing syntax to expressing intent through natural language.",
      date: "JAN 2025",
      duration: "38M",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=90&w=800",
      audioUrl: "#",
      showNotes: "How tools like Cursor and Bolt are fundamentally altering the neurobiology of the developer.",
      transcript: []
    }
  ],
  posts: [
    {
      id: "post1",
      title: "The Avant-Garde of Intelligence",
      category: "Manifesto",
      excerpt: "Why the next era of AI isn't about more parameters, but more soul.",
      content: "We find ourselves at a precipice. The scaling laws have brought us power, but the next evolution requires elegance. We are moving from a period of industrial AI into the era of the Artisan. \n\nIn this publication, we explore how design fidelity and semantic clarity are becoming the only true differentiators in an age where code is a commodity.",
      date: "20.01.2025",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=90&w=1600",
      author: "Alex Rivers"
    },
    {
      id: "post2",
      title: "Atomic Linguistic Structures",
      category: "Technical",
      excerpt: "Designing prompts that survive the heat of high-concurrency production.",
      content: "A prompt is not just a string; it is a blueprint. In this tutorial, we break down the modular components of a resilient system instruction. We look at constraint-first design and why negative prompting is often more effective than positive reinforcement in zero-shot scenarios.",
      date: "18.01.2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=90&w=1600",
      author: "Alex Rivers"
    }
  ]
};
