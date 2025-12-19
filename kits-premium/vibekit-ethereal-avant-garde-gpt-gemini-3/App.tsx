
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight, Github, Twitter, PlayCircle, Image as ImageIcon, Check, Copy } from 'lucide-react';
import { DATABASE } from './data';

// --- Contexts ---
const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

// --- Components ---

const Label = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <span className={`text-[10px] font-black uppercase tracking-ultra-wide text-slate-400 dark:text-slate-600 flex items-center gap-6 ${className}`}>
    <span className="w-16 h-[1px] bg-current opacity-20" />
    {children}
  </span>
);

const LuxuryButton = ({ children, variant = "primary", className = "", ...props }: any) => {
  const base = "px-14 py-6 text-[10px] font-black uppercase tracking-ultra-wide transition-all duration-1000 disabled:opacity-50 inline-flex items-center justify-center gap-4 group relative overflow-hidden";
  const variants = {
    primary: "bg-black text-white dark:bg-white dark:text-black hover:tracking-[0.55em]",
    outline: "border border-slate-200 dark:border-slate-800 text-black dark:text-white hover:border-black dark:hover:border-white",
    ghost: "text-slate-400 hover:text-black dark:hover:text-white"
  };
  return (
    <button className={`${base} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-700" />
      </span>
    </button>
  );
};

const CinematicImage = ({ src, alt, className = "", aspect = "aspect-[4/5]" }: { src: string; alt: string; className?: string; aspect?: string }) => {
  const [status, setStatus] = useState<'loading' | 'complete' | 'error'>('loading');
  const optimizedSrc = `${src}&auto=format&fit=crop&q=90&w=1400`;

  return (
    <div className={`relative overflow-hidden bg-slate-50 dark:bg-[#080808] ${aspect} ${className}`}>
      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300 dark:text-slate-800 uppercase tracking-ultra-wide text-[10px] gap-4">
          <ImageIcon size={24} strokeWidth={1} />
          <span className="serif-display italic font-light opacity-40">Visual Fragment Missing</span>
        </div>
      ) : (
        <img 
          src={optimizedSrc} 
          alt={alt} 
          onLoad={() => setStatus('complete')}
          onError={() => setStatus('error')}
          className={`w-full h-full object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-[3000ms] ease-out ${status === 'complete' ? 'scale-100 opacity-100 blur-0' : 'scale-110 opacity-0 blur-xl'}`}
          loading="lazy"
        />
      )}
      
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-[#080808]">
          <div className="w-20 h-[1px] bg-slate-200 dark:bg-slate-800 animate-pulse" />
        </div>
      )}
      
      <div className="absolute inset-8 border border-white/10 pointer-events-none" />
    </div>
  );
};

const NavItem = ({ to, children, active }: { to: string; children?: React.ReactNode; active: boolean }) => (
  <Link 
    to={to} 
    className={`text-[10px] uppercase tracking-ultra-wide transition-all duration-1000 relative py-2 group ${active ? 'text-black dark:text-white font-black' : 'text-slate-300 dark:text-slate-700 hover:text-black dark:hover:text-white'}`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-black dark:bg-white transition-transform duration-1000 origin-right ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'}`} />
  </Link>
);

// --- Layout ---
const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-1000">
      <nav className="fixed top-0 left-0 right-0 z-50 h-36 flex items-center border-b border-slate-100/20 dark:border-slate-900/20 glass transition-all duration-1000">
        <div className="max-w-[2000px] w-full mx-auto px-8 md:px-28 flex items-center justify-between">
          <Link to="/" className="text-2xl serif-display font-light tracking-[0.3em] group flex items-baseline gap-2">
            VIBEKIT<span className="text-[10px] tracking-normal font-sans font-black italic text-indigo-500">AVANT</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-20">
            <NavItem to="/showcase" active={pathname.startsWith('/showcase')}>Collection</NavItem>
            <NavItem to="/podcast" active={pathname.startsWith('/podcast')}>Dialogue</NavItem>
            <NavItem to="/insights" active={pathname.startsWith('/insights')}>Archives</NavItem>
            <button onClick={toggleTheme} className="ml-10 text-slate-300 dark:text-slate-700 hover:text-black dark:hover:text-white transition-colors">
              {isDark ? <Sun size={16} strokeWidth={1} /> : <Moon size={16} strokeWidth={1} />}
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-4">
            {isMenuOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-black z-[60] flex flex-col items-center justify-center gap-16 animate-fade-in p-12 text-center">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12"><X size={48} strokeWidth={1} /></button>
            <Link to="/showcase" className="serif-display text-6xl font-light italic hover:tracking-tighter transition-all duration-700">Collection</Link>
            <Link to="/podcast" className="serif-display text-6xl font-light italic hover:tracking-tighter transition-all duration-700">Dialogue</Link>
            <Link to="/insights" className="serif-display text-6xl font-light italic hover:tracking-tighter transition-all duration-700">Archives</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-56 pb-80">
        {children}
      </main>

      <footer className="py-64 px-8 md:px-28 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-32">
          <div className="md:col-span-6 space-y-16">
            <h2 className="serif-display text-7xl md:text-9xl leading-[0.85] font-light">Ethereal<br/><span className="italic text-slate-200 dark:text-slate-900">Logic.</span></h2>
            <p className="text-slate-400 max-w-md leading-loose text-[12px] uppercase tracking-[0.4em] font-light">
              Crafting high-fidelity artifacts in the liminal space between machine and mind.
            </p>
          </div>
          <div className="md:col-span-3 space-y-12">
            <Label>Selected Curations</Label>
            <ul className="space-y-6 text-[12px] uppercase tracking-ultra-wide text-slate-500 font-black">
              <li><Link to="/showcase" className="hover:text-black dark:hover:text-white transition-colors">The Catalog</Link></li>
              <li><Link to="/podcast" className="hover:text-black dark:hover:text-white transition-colors">Dialogue Archives</Link></li>
              <li><Link to="/insights" className="hover:text-black dark:hover:text-white transition-colors">Manifesto Lab</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-12">
            <Label>Social Transmission</Label>
            <ul className="space-y-6 text-[12px] uppercase tracking-ultra-wide text-slate-500 font-black">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub Manifest</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Studio Email</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[2000px] mx-auto mt-64 pt-16 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-ultra-wide text-slate-300 dark:text-slate-800 font-black gap-10">
          <span>&copy; MMXXV VIBEKIT AVANT-GARDE STUDIO</span>
          <div className="flex gap-20">
            <span>TOKYO GALLERY</span>
            <span>PARIS BUREAU</span>
            <span>BERLIN STUDIO</span>
          </div>
          <span>ETHEREAL INTEL</span>
        </div>
      </footer>
    </div>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-8 md:px-28">
      <section className="min-h-[90vh] flex flex-col justify-center mb-96">
        <div className="overflow-hidden mb-16">
          <Label className="animate-slide-up">Avant-Garde Laboratory / Release Vol. 25</Label>
        </div>
        <h1 className="serif-display text-[14vw] md:text-[11vw] leading-[0.75] tracking-tighter mb-24 animate-reveal-scale font-light">
          Abstract<br/>
          <span className="italic text-slate-100 dark:text-slate-900">Essence.</span><br/>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-32 animate-fade-in [animation-delay:1200ms]">
          <p className="max-w-4xl text-4xl md:text-5xl text-slate-400 leading-tight font-light italic serif-display">
            A visceral intersection where machine reasoning meets uncompromising digital luxury.
          </p>
          <div className="flex shrink-0">
            <Link to="/showcase"><LuxuryButton>Access Collection</LuxuryButton></Link>
          </div>
        </div>
      </section>

      <section className="mb-[40rem]">
        <div className="flex items-center justify-between mb-32 border-b border-slate-100 dark:border-slate-900 pb-20">
          <h2 className="serif-display text-7xl italic font-light tracking-tight">Recent Archives</h2>
          <Link to="/showcase" className="text-[12px] font-black uppercase tracking-ultra-wide hover:tracking-[0.6em] transition-all">View All Selections</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-32 items-end">
          <div className="md:col-span-8 animate-slide-up">
            <Link to={`/app/${DATABASE.projects[0].id}`} className="group block">
              <CinematicImage src={DATABASE.projects[0].thumbnail} alt={DATABASE.projects[0].title} aspect="aspect-[16/10]" className="mb-16 shadow-3xl" />
              <div className="space-y-8">
                <h3 className="serif-display text-8xl mb-4 group-hover:italic transition-all duration-1000">{DATABASE.projects[0].title}</h3>
                <Label>{DATABASE.projects[0].category}</Label>
              </div>
            </Link>
          </div>
          
          <div className="md:col-span-4 animate-slide-up [animation-delay:400ms]">
            <Link to={`/app/${DATABASE.projects[1].id}`} className="group block mb-40 md:mb-0">
              <CinematicImage src={DATABASE.projects[1].thumbnail} alt={DATABASE.projects[1].title} aspect="aspect-[3/4]" className="mb-16 shadow-2xl" />
              <h3 className="serif-display text-6xl mb-4 group-hover:italic transition-all duration-1000">{DATABASE.projects[1].title}</h3>
              <Label>{DATABASE.projects[1].category}</Label>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-96 flex flex-col items-center text-center border-y border-slate-100 dark:border-slate-900">
        <Label className="mb-20">The Communiqué</Label>
        <h2 className="serif-display text-8xl md:text-[10vw] mb-24 leading-[0.95] font-light italic">Refined<br/>Future.</h2>
        <div className="w-full max-w-4xl border-b border-black dark:border-white py-16 flex items-center group">
          <input 
            type="email" 
            placeholder="MAILING LIST — ACCESS GRANTED" 
            className="bg-transparent border-none outline-none flex-grow text-[14px] tracking-ultra-wide placeholder:text-slate-200 dark:placeholder:text-slate-800 font-black uppercase" 
          />
          <button className="text-[14px] font-black tracking-ultra-wide hover:tracking-[0.7em] transition-all">JOIN ARCHIVE</button>
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
    <div className="max-w-[2000px] mx-auto px-8 md:px-28 animate-fade-in">
      <header className="mb-80">
        <div className="overflow-hidden mb-16">
          <Label className="animate-slide-up">Catalog of Works / MMXXV Series</Label>
        </div>
        <h1 className="serif-display text-[11vw] leading-[0.8] mb-28 animate-slide-up [animation-delay:200ms] font-light">Curated<br/><span className="italic text-slate-100 dark:text-slate-900">Selections.</span></h1>
        
        <div className="flex flex-wrap gap-x-28 gap-y-12 border-t border-slate-100 dark:border-slate-900 pt-20 overflow-x-auto pb-10">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`text-[12px] uppercase tracking-ultra-wide transition-all whitespace-nowrap ${filter === cat ? 'text-black dark:text-white font-black underline underline-offset-[24px] decoration-2' : 'text-slate-300 dark:text-slate-700 hover:text-black dark:hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-[30rem]">
        {filteredProjects.map((project, idx) => (
          <Link to={`/app/${project.id}`} key={project.id} className={`group animate-slide-up`} style={{ animationDelay: `${(idx % 3) * 250}ms` }}>
            <div className={`transition-transform duration-[2000ms] ease-out ${idx % 2 === 1 ? 'md:mt-64' : ''}`}>
              <CinematicImage 
                src={project.thumbnail} 
                alt={project.title} 
                aspect="aspect-[3/4]"
                className="mb-20 shadow-xl group-hover:shadow-[0_100px_150px_-40px_rgba(0,0,0,0.6)] transition-all duration-1000" 
              />
              <div className="space-y-10">
                <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-900 pb-8">
                  <h3 className="serif-display text-6xl leading-none group-hover:italic transition-all duration-1000 tracking-tighter">{project.title}</h3>
                  <span className="text-[11px] tracking-widest text-slate-200 dark:text-slate-900 font-black italic">INV. 0{idx + 1}</span>
                </div>
                <p className="text-slate-400 text-xl leading-relaxed max-w-sm font-light italic">{project.description}</p>
                <div className="pt-12 flex flex-wrap gap-6">
                  {project.stack.slice(0, 3).map(s => (
                    <span key={s} className="text-[10px] uppercase tracking-ultra-wide border border-slate-100 dark:border-slate-900 px-8 py-4 text-slate-500 font-black group-hover:border-black dark:group-hover:border-white transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const AppDetail = () => {
  const { id } = useParams();
  const project = DATABASE.projects.find(p => p.id === id);

  if (!project) return <div className="p-96 text-center serif-display text-5xl italic font-light opacity-30">Record Void.</div>;

  return (
    <div className="max-w-[2000px] mx-auto px-8 md:px-28 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-[35rem] items-center">
        <div className="lg:col-span-6 space-y-24">
          <div className="overflow-hidden">
            <Label className="animate-slide-up">Technical Manuscript {project.id.length} / MMXXV</Label>
          </div>
          <h1 className="serif-display text-[12vw] md:text-[10vw] leading-[0.75] mb-24 animate-slide-up [animation-delay:200ms] italic font-light tracking-tighter">{project.title}</h1>
          
          <div className="space-y-20 animate-fade-in [animation-delay:600ms]">
            <div className="max-w-3xl border-l-2 border-slate-100 dark:border-slate-900 pl-16">
              <Label className="mb-12">Manifesto</Label>
              <p className="text-4xl md:text-5xl text-slate-500 leading-tight font-light italic serif-display">{project.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-32 py-24 border-y border-slate-100 dark:border-slate-900">
              <div className="space-y-10">
                <Label>Syntax</Label>
                <div className="flex flex-wrap gap-8">
                  {project.stack.map(s => <span key={s} className="text-[12px] uppercase tracking-ultra-wide font-black">{s}</span>)}
                </div>
              </div>
              <div className="space-y-10">
                <Label>Category</Label>
                <span className="text-[12px] font-black tracking-ultra-wide uppercase text-indigo-500">{project.category}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 pt-20 animate-fade-in [animation-delay:900ms]">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <LuxuryButton>Access Interface</LuxuryButton>
            </a>
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
              <LuxuryButton variant="outline">View Manifest</LuxuryButton>
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-6 lg:pl-32 animate-reveal-scale">
          <CinematicImage src={project.thumbnail} alt={project.title} aspect="aspect-[3/4]" className="shadow-[0_120px_200px_-40px_rgba(0,0,0,0.7)]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-40 mb-96">
        <div className="md:col-span-4">
          <div className="sticky top-72 space-y-16">
            <h2 className="serif-display text-8xl leading-none font-light italic tracking-tight">Curation<br/>Analysis.</h2>
            <div className="w-32 h-[1px] bg-black dark:bg-white opacity-20" />
            <p className="text-slate-400 leading-loose text-[12px] uppercase tracking-ultra-wide font-light">Documenting the refined synthesis of digital high-fashion.</p>
          </div>
        </div>
        <div className="md:col-span-8 space-y-96">
          <section className="animate-fade-in">
            <Label className="mb-24">Development Cycle</Label>
            <div className="space-y-40">
              {project.buildSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-20 items-start group border-b border-slate-100 dark:border-slate-900 pb-24">
                  <span className="serif-display text-9xl text-slate-100 dark:text-slate-900 font-black italic select-none">0{idx + 1}</span>
                  <p className="text-4xl md:text-5xl font-light leading-snug max-w-3xl pt-8 italic tracking-tight">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-[#060606] p-20 md:p-48 animate-fade-in shadow-inner relative overflow-hidden">
             <div className="absolute top-0 right-0 p-16 serif-display text-[25vw] opacity-5 pointer-events-none font-black italic">CODE</div>
            <Label className="mb-32 relative z-10">Linguistic Core / System Prompting</Label>
            <div className="space-y-48 relative z-10">
              {project.prompts.map((p, idx) => (
                <div key={idx} className="space-y-16">
                  <h4 className="serif-display text-4xl italic font-light opacity-50">{p.label}</h4>
                  <div className="relative group">
                    <pre className="font-mono text-sm md:text-lg leading-[2.6] p-24 bg-white dark:bg-[#020202] border border-slate-100 dark:border-slate-900 overflow-x-auto selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black shadow-3xl">
                      {p.content}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Podcast = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-8 md:px-28 animate-fade-in">
      <header className="mb-[30rem]">
        <div className="overflow-hidden mb-16">
          <Label className="animate-slide-up">Dialogue Catalog / Sonic Archives</Label>
        </div>
        <h1 className="serif-display text-[12vw] leading-[0.8] mb-20 animate-slide-up [animation-delay:200ms] font-light italic">Sonic<br/>Fragments.</h1>
        <p className="text-4xl text-slate-400 max-w-5xl font-light italic serif-display leading-tight">Meditations at the horizon of biological intuition and machine reason.</p>
      </header>

      <div className="space-y-64">
        {DATABASE.episodes.map((ep, idx) => (
          <Link to={`/episode/${ep.id}`} key={ep.id} className="group grid grid-cols-1 md:grid-cols-12 gap-24 items-center border-b border-slate-100 dark:border-slate-900 pb-48 animate-slide-up" style={{ animationDelay: `${idx * 300}ms` }}>
            <div className="md:col-span-1 serif-display text-7xl text-slate-100 dark:text-slate-900 italic font-black">
              INV{idx + 1}
            </div>
            <div className="md:col-span-3">
              <div className="relative group overflow-hidden rounded-full aspect-square border-2 border-slate-100 dark:border-slate-900 p-4">
                 <CinematicImage src={ep.thumbnail} alt={ep.title} aspect="aspect-square" className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-[4000ms]" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-1000">
                    <PlayCircle size={80} strokeWidth={1} className="text-white animate-reveal-scale" />
                 </div>
              </div>
            </div>
            <div className="md:col-span-5 space-y-12">
              <div className="flex gap-16">
                <Label>{ep.date}</Label>
                <Label>{ep.duration} TRANS</Label>
              </div>
              <h3 className="serif-display text-7xl md:text-8xl group-hover:italic transition-all duration-1000 leading-none tracking-tighter">{ep.title}</h3>
              <p className="text-slate-400 text-2xl italic font-light max-w-xl leading-relaxed">{ep.description}</p>
            </div>
            <div className="md:col-span-3 flex justify-end">
               <div className="text-[12px] font-black uppercase tracking-ultra-wide group-hover:mr-24 transition-all flex items-center gap-8">
                  Initiate Dialogue <ArrowUpRight size={24} />
               </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-8 md:px-28 animate-fade-in">
      <header className="mb-[30rem]">
        <div className="overflow-hidden mb-16">
          <Label className="animate-slide-up">Editorial Archive / Manifesto</Label>
        </div>
        <h1 className="serif-display text-[12vw] leading-[0.8] mb-20 animate-slide-up [animation-delay:200ms] font-light">Semantic<br/><span className="italic text-slate-100 dark:text-slate-900">Analysis.</span></h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-48 gap-y-[40rem]">
        {DATABASE.posts.map((post, idx) => (
          <Link to={`/insights/${post.id}`} key={post.id} className="group animate-slide-up" style={{ animationDelay: `${idx * 300}ms` }}>
            <div className={`transition-transform duration-[3000ms] ${idx % 2 === 1 ? 'md:mt-80' : ''}`}>
              <CinematicImage src={post.image} alt={post.title} aspect="aspect-[16/9]" className="mb-20 shadow-3xl grayscale-[0.8] group-hover:grayscale-0 transition-all duration-[4000ms]" />
              <div className="space-y-12">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-900 pb-10">
                  <Label>{post.category}</Label>
                  <span className="text-[11px] tracking-widest text-slate-300 dark:text-slate-700 uppercase font-black">{post.date} PUB</span>
                </div>
                <h3 className="serif-display text-8xl leading-[0.85] group-hover:italic transition-all duration-1000 tracking-tighter">{post.title}</h3>
                <p className="text-slate-500 text-3xl leading-relaxed font-light italic max-w-3xl">{post.excerpt}</p>
                <div className="pt-16">
                  <span className="text-[12px] font-black uppercase tracking-[0.6em] border-b-2 border-black dark:border-white pb-6 group-hover:text-indigo-500 group-hover:border-indigo-500 transition-all inline-block">Study Manuscript</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const EpisodeDetail = () => {
  const { id } = useParams();
  const ep = DATABASE.episodes.find(e => e.id === id);
  if (!ep) return <div className="p-96 text-center serif-display text-5xl italic animate-fade-in opacity-30">Silence Found.</div>;
  return (
    <div className="max-w-[1600px] mx-auto px-8 md:px-28 pb-[30rem] animate-fade-in">
      <div className="text-center mb-80">
        <Label className="justify-center mb-20 animate-slide-up">Dialogue Capture — {ep.id}</Label>
        <h1 className="serif-display text-[11vw] md:text-[9vw] leading-[0.85] mb-28 animate-slide-up [animation-delay:200ms] italic font-light tracking-tighter">{ep.title}</h1>
        <div className="flex justify-center gap-24 text-slate-300 dark:text-slate-800 text-[12px] uppercase tracking-[0.5em] mb-40 animate-fade-in [animation-delay:400ms] font-black">
          <span>{ep.date}</span>
          <span>{ep.duration} MASTER RECORD</span>
        </div>
        <div className="animate-reveal-scale [animation-delay:600ms] mb-40">
          <CinematicImage src={ep.thumbnail} alt={ep.title} aspect="aspect-square" className="max-w-xl mx-auto rounded-full shadow-[0_150px_200px_-50px_rgba(0,0,0,0.7)]" />
        </div>
        <LuxuryButton className="scale-[1.3] animate-fade-in [animation-delay:800ms]">Initiate Streaming</LuxuryButton>
      </div>
      <article className="max-w-5xl mx-auto space-y-32 animate-fade-in [animation-delay:1000ms]">
        <h3 className="serif-display text-6xl italic font-light border-b border-slate-100 dark:border-slate-900 pb-16 mb-16 opacity-30">Archival Annotations</h3>
        <p className="text-5xl leading-[1.4] font-light italic text-slate-500 serif-display">{ep.showNotes}</p>
      </article>
    </div>
  );
};

const PostDetail = () => {
  const { id } = useParams();
  const post = DATABASE.posts.find(p => p.id === id);
  if (!post) return <div className="p-96 text-center serif-display text-5xl italic animate-fade-in opacity-30">Archive Void.</div>;
  return (
    <div className="max-w-[1400px] mx-auto px-8 md:px-28 pb-[30rem] animate-fade-in">
      <header className="mb-80 text-center">
        <Label className="justify-center mb-24 animate-slide-up">Manifesto Vol. {post.id.replace('post','')}</Label>
        <h1 className="serif-display text-[11vw] md:text-[8vw] leading-[0.8] mb-32 italic animate-slide-up [animation-delay:200ms] font-light tracking-tighter">{post.title}</h1>
        <div className="flex items-center justify-center gap-16 animate-fade-in [animation-delay:400ms]">
          <div className="w-20 h-20 rounded-full overflow-hidden grayscale border-2 border-slate-100 dark:border-slate-900 p-1.5">
             <CinematicImage src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300`} alt={post.author} aspect="aspect-square" className="rounded-full" />
          </div>
          <div className="text-left text-[12px] tracking-ultra-wide uppercase font-black">
            <span className="block mb-2">{post.author} / CURATOR</span>
            <span className="block text-slate-300 dark:text-slate-800 font-normal">{post.date} RELEASE</span>
          </div>
        </div>
      </header>
      <div className="animate-reveal-scale [animation-delay:600ms] mb-80">
        <CinematicImage src={post.image} alt={post.title} aspect="aspect-[21/9]" className="shadow-[0_180px_250px_-60px_rgba(0,0,0,0.7)]" />
      </div>
      <div className="max-w-5xl mx-auto space-y-40 animate-fade-in [animation-delay:800ms]">
        <p className="text-6xl serif-display leading-[1.05] italic text-black dark:text-white font-light tracking-tight border-l-8 border-indigo-500 dark:border-indigo-400 pl-20">
          {post.excerpt}
        </p>
        <div className="text-3xl leading-[2.6] font-light text-slate-500 dark:text-slate-500 space-y-20 whitespace-pre-line border-t border-slate-100 dark:border-slate-900 pt-40">
          {post.content}
        </div>
      </div>
    </div>
  );
};

// --- App Component ---
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
