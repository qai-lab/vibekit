
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight, Github, Twitter, Youtube, PlayCircle, Clock, Calendar, ChevronRight, Copy, Check } from 'lucide-react';
import { DATABASE } from './data';
import { AppProject, PodcastEpisode, NewsPost } from './types';

// --- Contexts ---
const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

// --- Helper Components ---
const Badge = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 ${className}`}>
    {children}
  </span>
);

const Button = ({ children, variant = "primary", className = "", ...props }: any) => {
  const base = "px-6 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-sm";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
    outline: "border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-900 dark:text-slate-100",
    ghost: "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
  };
  return <button className={`${base} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>{children}</button>;
};

const SectionHeader = ({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
);

// --- Layout Wrapper ---
const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: 'Showcase', path: '/showcase' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Insights', path: '/insights' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-black text-xs">VK</span>
            </div>
            <span className="hidden sm:inline">VIBEKIT</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors ${pathname.startsWith(link.path) ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-2" />
            <button onClick={toggleTheme} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} className="text-2xl font-bold">{link.name}</Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-32 pb-24">
        {children}
      </main>

      <footer className="border-t border-slate-100 dark:border-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-black mb-4">VIBEKIT</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              Building the future of human-AI collaboration, one experiment at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:scale-110 transition-transform"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:scale-110 transition-transform"><Github size={18} /></a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:scale-110 transition-transform"><Youtube size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/showcase" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">App Showcase</Link></li>
              <li><Link to="/podcast" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Podcast</Link></li>
              <li><Link to="/insights" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} VibeKit. All rights reserved. Built with Gemini and Vibe.
        </div>
      </footer>
    </div>
  );
};

// --- Page Components ---

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="mb-32">
        <div className="max-w-4xl">
          <Badge className="mb-6 inline-block bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">Now Building 2025</Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05]">
            Hacking the <br/><span className="text-slate-400 dark:text-slate-600">Vibe</span> of the Future.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
            I'm an indie AI builder crafting tools that feel like magic and work like magic. Exploring the intersection of LLMs, creativity, and clean code.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/showcase">
              <Button className="h-14 px-10 text-lg">View My Apps</Button>
            </Link>
            <Link to="/podcast">
              <Button variant="outline" className="h-14 px-10 text-lg">Listen to Podcast</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apps Preview */}
      <section className="mb-32">
        <SectionHeader title="Latest Drops" subtitle="A selection of my recent AI-native experiments." action={<Link to="/showcase" className="text-slate-900 dark:text-white flex items-center gap-1 font-bold group">View All <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATABASE.projects.slice(0, 3).map(project => (
            <Link to={`/app/${project.id}`} key={project.id} className="group relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <Badge className="mb-3">{project.category}</Badge>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 line-clamp-2">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[3rem] p-12 md:p-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Stay in the Flow.</h2>
        <p className="text-xl opacity-70 mb-12 max-w-xl mx-auto">Get notified about new experiments, prompts, and deep dives into the AI landscape.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input type="email" placeholder="email@example.com" className="bg-white/10 dark:bg-slate-100 border border-white/20 dark:border-slate-300 rounded-full px-8 py-4 focus:outline-none focus:ring-2 ring-indigo-500 flex-grow text-lg" />
          <Button className="h-full py-4 px-10 text-lg">Subscribe</Button>
        </div>
      </section>
    </div>
  );
};

const Showcase = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(DATABASE.projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' ? DATABASE.projects : DATABASE.projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="App Showcase" subtitle="Handcrafted AI experiments, from browser extensions to 3D visualizations." />
      
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map(project => (
          <Link to={`/app/${project.id}`} key={project.id} className="group flex flex-col h-full">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <Badge>{project.category}</Badge>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{project.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-900">
              {project.stack.slice(0, 3).map(s => (
                <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-slate-500">{s}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const AppDetail = () => {
  const { id } = useLocation().pathname.match(/\/app\/(.+)/) || [];
  const project = DATABASE.projects.find(p => p.id === id);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!project) return <div className="p-24 text-center font-bold">Project not found</div>;

  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <Link to="/showcase" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white mb-12 group transition-colors">
        <ArrowUpRight size={16} className="rotate-[225deg] group-hover:-translate-x-1 transition-transform" /> Back to Showcase
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div>
          <Badge className="mb-6">{project.category}</Badge>
          <h1 className="text-5xl md:text-6xl font-black mb-8">{project.title}</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10">{project.description}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <Button>Live Demo <ArrowUpRight size={18} /></Button>
            </a>
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><Github size={18} /> Source Code</Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 dark:border-slate-900">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Built With</h4>
              <div className="flex flex-wrap gap-1">
                {project.stack.map(s => <span key={s} className="text-sm font-semibold">{s} • </span>)}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Released</h4>
              <span className="text-sm font-semibold">{project.date}</span>
            </div>
          </div>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-24">
          <section>
            <h2 className="text-3xl font-bold mb-8">Build Journey</h2>
            <div className="space-y-12">
              {project.buildSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-4xl font-black text-slate-100 dark:text-slate-800 select-none">0{idx + 1}</span>
                  <p className="text-lg leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">System Prompts</h2>
            <div className="space-y-6">
              {project.prompts.map((p, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{p.label}</h4>
                    <button onClick={() => handleCopy(p.content, idx)} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      {copiedIndex === idx ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                  <p className="font-mono text-sm leading-relaxed whitespace-pre-wrap opacity-80">{p.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
            <ul className="space-y-4">
              {project.lessons.map((l, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <p className="text-lg text-slate-600 dark:text-slate-400">{l}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-12">
          <div className="sticky top-24">
            <h3 className="text-xl font-bold mb-6">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-sm font-medium border border-slate-200 dark:border-slate-800">
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2rem]">
              <h4 className="font-bold mb-4 text-indigo-600 dark:text-indigo-400">Watch Demo</h4>
              <p className="text-sm mb-6 opacity-70">A quick walk-through of the core features and tech stack.</p>
              <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600">
                  <PlayCircle size={20} /> Play Video
                </Button>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const Podcast = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="The Podcast" subtitle="Interviews with builders, thinkers, and hackers on the frontier of AI." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DATABASE.episodes.map(ep => (
          <Link to={`/episode/${ep.id}`} key={ep.id} className="group glass p-8 rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col sm:flex-row gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {ep.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {ep.duration}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors leading-tight">{ep.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{ep.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                Listen Now <PlayCircle size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const EpisodeDetail = () => {
  const { id } = useLocation().pathname.match(/\/episode\/(.+)/) || [];
  const ep = DATABASE.episodes.find(e => e.id === id);

  if (!ep) return <div className="p-24 text-center font-bold">Episode not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-16 text-center">
        <Badge className="mb-6">Episode {ep.id.replace('ep', '')}</Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{ep.title}</h1>
        <div className="flex items-center justify-center gap-6 text-slate-500 text-sm mb-12">
          <span className="flex items-center gap-1"><Calendar size={16} /> {ep.date}</span>
          <span className="flex items-center gap-1"><Clock size={16} /> {ep.duration}</span>
        </div>
        <div className="aspect-square max-w-sm mx-auto rounded-[3rem] overflow-hidden shadow-2xl mb-12">
          <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
        </div>
        <Button className="h-16 px-12 text-xl mx-auto"><PlayCircle size={28} /> Listen Now</Button>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">Show Notes</h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            {ep.showNotes}
          </div>
        </section>

        {ep.transcript.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-slate-100 dark:border-slate-800">Transcript</h2>
            <div className="space-y-8">
              {ep.transcript.map((t, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 font-mono">{t.time}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-indigo-500 mb-1">{t.speaker}</span>
                    <p className="text-lg leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const Insights = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'News', 'Tutorial', 'Opinion', 'Analysis', 'Deep Dive', 'Design', 'Tech', 'Guide', 'Creative'];
  const filteredPosts = filter === 'All' ? DATABASE.posts : DATABASE.posts.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Insights" subtitle="Curated thoughts on the AI revolution, coding trends, and the future of work." />
      
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredPosts.map(post => (
          <Link to={`/insights/${post.id}`} key={post.id} className="group">
            <div className="aspect-[2/1] rounded-3xl overflow-hidden mb-8 bg-slate-100 dark:bg-slate-900">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-slate-900 text-white dark:bg-white dark:text-slate-900">{post.category}</Badge>
                <span className="text-xs text-slate-400 font-bold">{post.date}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{post.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const PostDetail = () => {
  const { id } = useLocation().pathname.match(/\/insights\/(.+)/) || [];
  const post = DATABASE.posts.find(p => p.id === id);

  if (!post) return <div className="p-24 text-center font-bold">Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto px-6">
      <header className="mb-16 text-center">
        <Badge className="mb-6">{post.category}</Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">{post.title}</h1>
        <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
          <img src={`https://picsum.photos/seed/${post.author}/40/40`} className="w-10 h-10 rounded-full" />
          <div className="text-left">
            <span className="block font-bold text-slate-900 dark:text-white">{post.author}</span>
            <span className="block">{post.date}</span>
          </div>
        </div>
      </header>

      <div className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
        <img src={post.image} alt={post.title} className="w-full h-auto" />
      </div>

      <div className="prose prose-slate prose-lg dark:prose-invert max-w-none space-y-8 leading-relaxed text-slate-700 dark:text-slate-300">
        <p className="text-2xl font-medium text-slate-900 dark:text-white leading-relaxed mb-12">
          {post.excerpt}
        </p>
        <div className="content whitespace-pre-line">
          {post.content}
        </div>
      </div>
      
      <div className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <Link to="/insights" className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
           <ArrowUpRight size={18} className="rotate-[225deg]" /> All Insights
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost"><Twitter size={18} /></Button>
          <Button variant="ghost"><ArrowUpRight size={18} /></Button>
        </div>
      </div>
    </article>
  );
};

// --- App Entry ---
const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/app/:id" element={<AppDetail />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/episode/:id" element={<EpisodeDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<PostDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
