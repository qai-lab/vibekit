
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Twitter, Youtube, 
  ArrowRight, ExternalLink, Play, Code, Cpu, 
  ChevronDown, Sparkles, Podcast as PodcastIcon, Newspaper
} from 'lucide-react';
import { PROJECTS, PODCASTS, INSIGHTS } from './data';
import { Project, Insight } from './types';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Podcasts', href: '#podcasts' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030014]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <Cpu size={28} className="text-blue-500" />
          <span>VIBEKIT</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white hover:glow-text transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030014] border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Use React.FC to handle React's special props like 'key' and ensure type compatibility when used in maps
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div className="group glass-card rounded-2xl overflow-hidden hover:gradient-border transition-all duration-500 cursor-pointer" onClick={onClick}>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold flex items-center gap-2">
            View Details <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{project.oneLiner}</p>
      </div>
    </div>
  );
};

// Use React.FC for consistent typing across custom components
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#030014]/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-[#0a0a1a] rounded-3xl border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          {project.videoUrl ? (
            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
              <iframe 
                src={project.videoUrl} 
                className="w-full h-full" 
                title="Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          ) : (
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-auto rounded-2xl mb-12 shadow-2xl border border-white/10"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="text-blue-500" /> Overview
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Code className="text-purple-500" /> Build Process
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {project.process}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Cpu className="text-blue-400" /> Key Prompts
                </h2>
                <div className="space-y-4">
                  {project.prompts.map((prompt, idx) => (
                    <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-sm text-gray-400 italic">
                      "{prompt}"
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-6 glass-card rounded-2xl border border-white/10">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 glass-card rounded-2xl border border-white/10">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold">Lessons Learned</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.lessons}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href={project.demoUrl} 
                  className="w-full py-4 bg-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all"
                >
                  Live Demo <ExternalLink size={18} />
                </a>
                <a 
                  href={project.githubUrl} 
                  className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  Source Code <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InsightsFeed = () => {
  const [activeTag, setActiveTag] = useState<Insight['tag'] | 'All'>('All');
  
  const filteredInsights = activeTag === 'All' 
    ? INSIGHTS 
    : INSIGHTS.filter(i => i.tag === activeTag);

  return (
    <section id="insights" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">AI Insights</h2>
          <p className="text-gray-400 max-w-xl">Deep dives into the future of LLMs, agentic workflows, and the evolution of software development.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['All', 'News', 'Tech', 'AI'].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTag === tag ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredInsights.map(insight => (
          <div key={insight.id} className="p-8 glass-card rounded-3xl hover:border-purple-500/30 transition-all group">
            <div className="flex items-center gap-2 mb-6">
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${insight.tag === 'News' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : insight.tag === 'Tech' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
                {insight.tag}
              </span>
              <span className="text-xs text-gray-500">{insight.date}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{insight.title}</h3>
            <p className="text-gray-400 mb-8 line-clamp-3">{insight.content}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">By {insight.author}</span>
              <button className="text-purple-400 flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-4 animate-bounce">
            <Sparkles size={16} /> Now open for collaborations
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
            Vibe Coded <br /> 
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent glow-text">
              with AI ✨
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            I build hyper-functional apps through conversational dialogue with large language models. The future is built on intent, not just syntax.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
              The Podcast <PodcastIcon size={20} />
            </a>
          </div>
        </div>

        <a href="#projects" className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-pulse">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold">Scroll Down</span>
            <ChevronDown size={24} />
          </div>
        </a>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-xl">Each of these projects was conceived and refined through collaborative AI workflows.</p>
          </div>
          <div className="text-sm font-mono text-gray-500">
            TOTAL_EXPERIMENTS: {PROJECTS.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcasts" className="py-24 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <PodcastIcon className="text-blue-500" size={32} />
            <h2 className="text-4xl font-extrabold">AI Conversations</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PODCASTS.map(podcast => (
              <div key={podcast.id} className="flex flex-col md:flex-row gap-8 glass-card p-8 rounded-3xl group">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img src={podcast.imageUrl} alt={podcast.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <span className="text-xs font-bold text-blue-400 mb-2 block">{podcast.date}</span>
                    <h3 className="text-2xl font-bold mb-3">{podcast.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">feat. <span className="text-white font-medium">{podcast.guest}</span> — {podcast.summary}</p>
                  </div>
                  <button className="flex items-center gap-3 text-white font-bold hover:text-blue-400 transition-colors w-fit">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={16} fill="white" />
                    </div>
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <InsightsFeed />

      {/* Footer */}
      <footer id="contact" className="py-24 border-t border-white/10 bg-[#02000c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2 space-y-8">
              <a href="#" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-3">
                <Cpu size={36} className="text-blue-500" />
                VIBEKIT
              </a>
              <p className="text-gray-400 max-sm text-lg leading-relaxed">
                Pioneering the era of conversation-driven development. Building software at the speed of thought.
              </p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter, Youtube].map((Icon, idx) => (
                  <a key={idx} href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#podcasts" className="hover:text-white transition-colors">Podcasts</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Built With</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-3 glass-card rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-sm font-medium">Gemini 2.5 Flash</span>
                </div>
                <div className="flex items-center gap-3 p-3 glass-card rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                    <Code size={16} />
                  </div>
                  <span className="text-sm font-medium">React + Tailwind</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <p className="text-gray-500 text-sm">© 2024 VibeKit Portfolio. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              Made with <span className="text-red-500">❤️</span> and a whole lot of prompts.
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
