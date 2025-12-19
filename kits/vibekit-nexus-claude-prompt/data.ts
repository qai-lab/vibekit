import { Project, Podcast, Insight } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Gemini Chat Nexus",
    oneLiner: "A multi-modal AI orchestrator with real-time video analysis.",
    description:
      "A powerful dashboard that utilizes the latest Gemini 2.5 Flash models to perform real-time video reasoning and context tracking.",
    thumbnail: "https://picsum.photos/seed/ai-nexus/800/450",
    techStack: ["React", "Gemini API", "Tailwind", "WebRTC"],
    process:
      'I started with a simple vision of "eyes for AI". Using conversational prompts, I guided the LLM to generate the WebRTC logic and frame processing hooks. We iterated over the UI 4 times to get that glassmorphism look just right.',
    prompts: [
      "Create a React hook that captures video frames from a canvas and sends them as base64 to an API every 1000ms.",
      "Refine the UI with a dark aesthetic, using blue and purple gradients for active states.",
      "Add error handling for browser media permissions and API rate limiting.",
    ],
    lessons:
      "Video processing in the browser is heavy. Offloading the frame-to-base64 conversion to a worker or optimizing frame rate is key to performance.",
    githubUrl: "#",
    demoUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Vibe Synth",
    oneLiner: "Generative ambient music synced to your focus levels.",
    description:
      "An experimental web app that uses neuro-feedback (simulated) to generate personalized ambient soundscapes.",
    thumbnail: "https://picsum.photos/seed/vibe-synth/800/450",
    techStack: ["Python", "FastAPI", "Three.js", "PyTorch"],
    process:
      "This was a true collab. I handled the WebAudio API logic while the AI generated the procedural generation algorithms for the pads and melodies.",
    prompts: [
      "Write a Three.js visualizer that reacts to frequency data from an AnalyserNode.",
      "Help me debug the latency issues in my WebSocket connection for real-time sound updates.",
    ],
    lessons:
      'Integrating 3D visuals with high-quality audio requires careful synchronization to avoid "visual lag".',
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "3",
    title: "Prompt Architect",
    oneLiner: "Visual node-based IDE for building complex AI workflows.",
    description:
      "A drag-and-drop interface to build multi-step LLM chains and test them against different models.",
    thumbnail: "https://picsum.photos/seed/prompt-arch/800/450",
    techStack: ["TypeScript", "React Flow", "Node.js", "OpenAI"],
    process:
      "Built in a single weekend. I vibe coded the core logic for the node graph first, then layered on the model providers.",
    prompts: [
      "Generate a schema for a node-based workflow where nodes can be prompt templates, model callers, or parsers.",
      'Implement a "Run" button that traverses the graph and executes nodes in topological order.',
    ],
    lessons:
      "State management for large graphs is tricky. Using a dedicated library like React Flow saved weeks of work.",
    githubUrl: "#",
    demoUrl: "#",
  },
];

export const PODCASTS: Podcast[] = [
  {
    id: "1",
    title: "The Future of Agency",
    guest: "Sam Altman (Simulated)",
    summary:
      "Discussing how personal AI agents will transform the way we interact with software.",
    date: "Oct 12, 2024",
    imageUrl: "https://picsum.photos/seed/podcast1/400/400",
  },
  {
    id: "2",
    title: "Vibe Coding 101",
    guest: "Andrej Karpathy (Simulated)",
    summary:
      "The shift from writing code line-by-line to orchestrating intent through dialogue.",
    date: "Oct 15, 2024",
    imageUrl: "https://picsum.photos/seed/podcast2/400/400",
  },
];

export const INSIGHTS: Insight[] = [
  {
    id: "1",
    title: "Why Context Windows are the new RAM",
    author: "Me",
    content:
      "As models move towards 1M+ context windows, the way we build RAG changes fundamentally. We might not need vector DBs for everything anymore...",
    tag: "Tech",
    date: "2025-11-01",
  },
  {
    id: "2",
    title: "The Rise of Small Models",
    author: "Demis Hassabis",
    content:
      "Flash-lite models are becoming so good that edge computing is finally feasible for complex reasoning tasks.",
    tag: "News",
    date: "2025-11-03",
  },
];
