
import { AppData } from './types';

export const DATABASE: AppData = {
  projects: [
    {
      id: "zenfocus-ai",
      title: "ZenFocus AI",
      description: "An intelligent mindfulness companion that analyzes your calendar and pulse to suggest micro-meditation moments.",
      thumbnail: "https://picsum.photos/seed/zen/800/600",
      category: "Productivity",
      stack: ["React", "TypeScript", "Tailwind", "Gemini API"],
      tools: ["v0.dev", "Bolt.new", "Supabase"],
      buildSteps: [
        "Architected the emotion-sensing engine using Gemini's native audio analysis.",
        "Integrated Google Calendar API to detect high-stress meeting blocks.",
        "Implemented real-time stress monitoring with browser-based heart rate approximation.",
        "Crafted a minimal, soothing UI using high-contrast typography and subtle blurs."
      ],
      prompts: [
        {
          label: "Core Reasoning Prompt",
          content: "You are a world-class mindfulness coach. Analyze the user's schedule (JSON below) and provide a 2-minute 'Zen Sprint' exercise based on their current stress level. Output must be structured JSON."
        },
        {
          label: "Style System Prompt",
          content: "Generate a Tailwind color palette for a mindfulness app. Focus on sage greens and soft indigos. Avoid aggressive reds."
        }
      ],
      lessons: [
        "Less is more: Users don't want more notifications, they want quiet ones.",
        "Gemini 2.5 Flash is incredibly efficient for sentiment analysis on meeting titles."
      ],
      sourceCode: "https://github.com/vibe-kit/zenfocus",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://zenfocus.ai",
      date: "2024-10-12"
    },
    {
      id: "vibe-chart",
      title: "VibeChart",
      description: "Visualize the sentiment of any codebase or document collection as a 3D topographic map.",
      thumbnail: "https://picsum.photos/seed/chart/800/600",
      category: "Developer Tools",
      stack: ["React", "Three.js", "Gemini 3 Pro", "D3.js"],
      tools: ["Cursor", "Shadcn UI", "Vercel"],
      buildSteps: [
        "Parsed 10,000+ lines of code into semantic blocks.",
        "Used Gemini to rank 'toxicity' vs 'vibe' of code comments.",
        "Generated a 3D mesh using D3-force and React Three Fiber.",
        "Optimized rendering performance for smooth 60fps navigation."
      ],
      prompts: [
        {
          label: "Code Analysis",
          content: "Analyze this file for emotional tone. Is the developer frustrated? Is the code written in a flow state? Return an array of scores (0-1)."
        }
      ],
      lessons: [
        "Code has an emotional signature that LLMs can actually pick up.",
        "Visualizing abstract metadata helps teams understand technical debt faster."
      ],
      sourceCode: "https://github.com/vibe-kit/vibechart",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://vibechart.app",
      date: "2024-11-05"
    },
    {
      id: "prompt-engine",
      title: "PromptEngine Pro",
      description: "A collaborative sandbox for refining and testing complex LLM prompts with version control.",
      thumbnail: "https://picsum.photos/seed/engine/800/600",
      category: "AI Infrastructure",
      stack: ["Next.js", "Prisma", "PostgreSQL", "OpenRouter"],
      tools: ["Clerk", "Radix UI", "Linear"],
      buildSteps: [
        "Built a diffing engine for multi-line system prompts.",
        "Created a 'Battle Royale' mode to compare two model outputs side-by-side.",
        "Implemented a tagging system for prompt library management."
      ],
      prompts: [
        {
          label: "Meta-Prompting",
          content: "Refactor the following prompt to be 30% more concise while retaining its specific instructions on tone and formatting."
        }
      ],
      lessons: [
        "Small changes in prompt phrasing lead to massive variance in structured output.",
        "Human feedback is still the gold standard for prompt quality."
      ],
      sourceCode: "https://github.com/vibe-kit/prompt-engine",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://promptengine.pro",
      date: "2024-09-20"
    },
    {
      id: "neural-news",
      title: "NeuralNews",
      description: "The first AI-generated daily newspaper, personalized to your hyper-specific technical interests.",
      thumbnail: "https://picsum.photos/seed/news/800/600",
      category: "Content",
      stack: ["Python", "React", "Pinecone", "Gemini 1.5 Flash"],
      tools: ["Docker", "AWS Lambda", "Supabase"],
      buildSteps: [
        "Automated scraping of 500+ RSS feeds and ArXiv pre-prints.",
        "Used RAG to find relevant context for new news stories.",
        "Generated high-quality summaries using Gemini with a 'Financial Times' style instruction."
      ],
      prompts: [{ label: "Journalistic Style", content: "Rewrite this technical paper as a front-page news story for a senior software engineer." }],
      lessons: ["Context is everything. A generic summary is useless."],
      sourceCode: "https://github.com/vibe-kit/neuralnews",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://neuralnews.ai",
      date: "2024-08-15"
    },
    {
      id: "creative-ghost",
      title: "CreativeGhost",
      description: "An AI pair-writer that learns your style and ghostwrites social media threads for you.",
      thumbnail: "https://picsum.photos/seed/ghost/800/600",
      category: "Creativity",
      stack: ["React", "Express", "MongoDB", "Gemini 2.5 Flash"],
      tools: ["Tailwind", "Replicate", "Midjourney"],
      buildSteps: [
        "Fine-tuned styles based on user's past 100 tweets.",
        "Built a thread-visualization tool.",
        "Integrated image generation for each tweet in a thread."
      ],
      prompts: [{ label: "Style Transfer", content: "Using the style of the user, explain why Vibe Kit development is the future." }],
      lessons: ["The balance between AI and human voice is delicate."],
      sourceCode: "https://github.com/vibe-kit/creativeghost",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://creativeghost.io",
      date: "2024-12-01"
    },
    {
      id: "debug-mate",
      title: "DebugMate",
      description: "A Chrome extension that watches you code and suggests fixes before you even hit 'Save'.",
      thumbnail: "https://picsum.photos/seed/debug/800/600",
      category: "Developer Tools",
      stack: ["JavaScript", "Chrome Extensions API", "Gemini Nano"],
      tools: ["Manifest V3", "WebAssembly", "Sentry"],
      buildSteps: [
        "Implemented a local inference bridge using Gemini Nano in Chrome.",
        "Created a non-intrusive UI overlay for code suggestions.",
        "Optimized for low-latency feedback loops."
      ],
      prompts: [{ label: "Real-time Fix", content: "The user just typed this: {CODE}. Is there a syntax error or logic flaw?" }],
      lessons: ["On-device AI is the ultimate privacy win for developers."],
      sourceCode: "https://github.com/vibe-kit/debugmate",
      demoVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveDemo: "https://debugmate.dev",
      date: "2025-01-10"
    }
  ],
  episodes: [
    {
      id: "ep1",
      title: "The Rise of VibeKit",
      description: "Exploring why the 'vibe' is becoming the primary metric for developer experience in 2025.",
      date: "2025-01-15",
      duration: "45:32",
      thumbnail: "https://picsum.photos/seed/pod1/400/400",
      audioUrl: "#",
      showNotes: "In this episode, we talk about the shift from logic-first to feel-first development and how AI is enabling a new class of builders.",
      transcript: [
        { speaker: "Host", text: "Welcome to VibeKit. Today we're talking about the death of the boilerplate.", time: "00:00" },
        { speaker: "Guest", text: "Exactly. If you're writing repetitive code in 2025, you're doing it wrong.", time: "00:15" }
      ]
    },
    {
      id: "ep2",
      title: "Natural Language as a Compiler",
      description: "Can we really build production apps using only prompts?",
      date: "2025-01-08",
      duration: "38:12",
      thumbnail: "https://picsum.photos/seed/pod2/400/400",
      audioUrl: "#",
      showNotes: "A deep dive into the current state of prompt-to-app tooling like v0, bolt, and cursor.",
      transcript: [
        { speaker: "Host", text: "Is the keyboard the new punch card?", time: "00:00" }
      ]
    },
    { id: "ep3", title: "Human in the Loop", description: "The ethics of AI co-creation.", date: "2024-12-28", duration: "52:10", thumbnail: "https://picsum.photos/seed/pod3/400/400", audioUrl: "#", showNotes: "Ethics notes here...", transcript: [] },
    { id: "ep4", title: "Scaling Small Teams", description: "How one-person startups are out-competing giants.", date: "2024-12-15", duration: "41:45", thumbnail: "https://picsum.photos/seed/pod4/400/400", audioUrl: "#", showNotes: "Scaling notes...", transcript: [] },
    { id: "ep5", title: "The Hardware Gap", description: "Will we ever run Pro-level models on our phones?", date: "2024-12-01", duration: "33:20", thumbnail: "https://picsum.photos/seed/pod5/400/400", audioUrl: "#", showNotes: "Hardware notes...", transcript: [] },
    { id: "ep6", title: "Building in Public", description: "Why showing your work is the ultimate moat.", date: "2024-11-20", duration: "48:00", thumbnail: "https://picsum.photos/seed/pod6/400/400", audioUrl: "#", showNotes: "BIP notes...", transcript: [] }
  ],
  posts: [
    {
      id: "post1",
      title: "Gemini 3 Pro: The Developer's New Best Friend",
      category: "News",
      excerpt: "Deep dive into the new reasoning capabilities that make complex coding tasks a breeze.",
      content: "Full content about Gemini 3 Pro reasoning capabilities and how it integrates with developer workflows...",
      date: "2025-01-20",
      image: "https://picsum.photos/seed/post1/1200/600",
      author: "Alex Rivers"
    },
    {
      id: "post2",
      title: "10 Prompts to Double Your UI Velocity",
      category: "Tutorial",
      excerpt: "Stop wasting time on CSS layout issues. Use these battle-tested prompts instead.",
      content: "Full tutorial content with specific prompt examples...",
      date: "2025-01-18",
      image: "https://picsum.photos/seed/post2/1200/600",
      author: "Alex Rivers"
    },
    { id: "post3", title: "Why I'm Moving to Bolt.new for Rapid Prototyping", category: "Opinion", excerpt: "The shift from local dev to cloud-native prompt environments.", content: "Full opinion piece...", date: "2025-01-15", image: "https://picsum.photos/seed/post3/1200/600", author: "Alex Rivers" },
    { id: "post4", title: "The State of AI Agents in Production", category: "Analysis", excerpt: "What works, what doesn't, and what's coming next.", content: "Full analysis content...", date: "2025-01-12", image: "https://picsum.photos/seed/post4/1200/600", author: "Alex Rivers" },
    { id: "post5", title: "Prompt Engineering vs. Fine-Tuning", category: "Deep Dive", excerpt: "When should you actually bother fine-tuning a model?", content: "Full comparison...", date: "2025-01-05", image: "https://picsum.photos/seed/post5/1200/600", author: "Alex Rivers" },
    { id: "post6", title: "AI-Native Design Patterns", category: "Design", excerpt: "UX is fundamentally changing. Here's how to design for the future.", content: "Full design article...", date: "2024-12-28", image: "https://picsum.photos/seed/post6/1200/600", author: "Alex Rivers" },
    { id: "post7", title: "Vector Databases Explained for Skeptics", category: "Tech", excerpt: "Do you really need Pinecone, or is PGVector enough?", content: "Full technical guide...", date: "2024-12-20", image: "https://picsum.photos/seed/post7/1200/600", author: "Alex Rivers" },
    { id: "post8", title: "The Future of Open Source LLMs", category: "News", excerpt: "Mistral, Llama, and the democratized AI landscape.", content: "Full news coverage...", date: "2024-12-15", image: "https://picsum.photos/seed/post8/1200/600", author: "Alex Rivers" },
    { id: "post9", title: "Building an AI SaaS in a Weekend", category: "Guide", excerpt: "A step-by-step roadmap from idea to first paying customer.", content: "Full guide content...", date: "2024-12-10", image: "https://picsum.photos/seed/post9/1200/600", author: "Alex Rivers" },
    { id: "post10", title: "Visual Storytelling with Imagen 4", category: "Creative", excerpt: "Pushing the boundaries of what's possible in generative art.", content: "Full creative post...", date: "2024-12-05", image: "https://picsum.photos/seed/post10/1200/600", author: "Alex Rivers" }
  ]
};
