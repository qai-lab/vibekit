
import React, { useState, useEffect } from 'react';
import { APPS, PODCASTS, NEWS } from './constants';
import { AppCard } from './components/AppCard';
import { PodcastItem } from './components/PodcastItem';
import { NewsItemCard } from './components/NewsItemCard';
import { ChatBot } from './components/ChatBot';
import { ProjectDetails } from './components/ProjectDetails';
import { AppProject } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'apps' | 'podcasts' | 'news'>('apps');
  const [selectedProject, setSelectedProject] = useState<AppProject | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Navigation */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:scale-110 transition-transform">V</div>
              <div className="absolute -inset-1 bg-indigo-500/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter hidden sm:block">VibeKit<span className="text-indigo-500">.</span></span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {['apps', 'podcasts', 'news'].map((tab) => (
              <button 
                key={tab}
                onClick={() => {
                  setActiveTab(tab as any);
                  document.getElementById('content-hub')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:text-white ${activeTab === tab ? 'text-indigo-400' : 'text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <a href="mailto:vibe@vibekit.dev" className="group relative px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full overflow-hidden transition-all hover:pr-10">
              <span className="relative z-10">Get in touch</span>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      </header>

      {/* Vibe Coder Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] animate-pulse [animation-delay:2s]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8 py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Available for 2025 Partnerships</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
              The Original<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 animate-gradient">Vibe Coder.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 mb-14 max-w-2xl leading-relaxed font-medium">
              Architecting high-fidelity interfaces where <span className="text-white">logic meets intuition</span>. 
              I don't just build components; I orchestrate digital atmosphere.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <button 
                onClick={() => document.getElementById('content-hub')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:-translate-y-1 active:scale-95"
              >
                Experience the Vibe
              </button>
              
              <div className="flex items-center gap-6 px-8 py-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white leading-none">Senior</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mt-1">Frontend Arch</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white leading-none">99%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mt-1">Vibe Match</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-40">
           <span className="text-[9px] font-black uppercase tracking-[0.4em]">Scroll</span>
           <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>
      </section>

      {/* Content Hub */}
      <main id="content-hub" className="max-w-7xl mx-auto px-6 py-32">
        {/* Navigation Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Content Stream</h2>
            <p className="text-slate-500 max-w-md">Browse through technical implementations, deep-dive discussions, and curated industry news.</p>
          </div>

          <div className="flex p-1.5 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 w-fit">
            {(['apps', 'podcasts', 'news'] as const).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-slate-500 hover:text-white'}`}
              >
                {tab === 'apps' ? 'Projects' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <div className="min-h-[600px]">
          {activeTab === 'apps' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-700">
              {APPS.map(app => (
                <AppCard key={app.id} app={app} onClick={() => setSelectedProject(app)} />
              ))}
            </div>
          )}

          {activeTab === 'podcasts' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-12 duration-700">
              <div className="p-8 border border-indigo-500/20 bg-indigo-500/5 rounded-3xl mb-10">
                <h3 className="text-xl font-bold mb-2">Podcast Feed</h3>
                <p className="text-slate-400 text-sm">A collection of discussions on React architecture, AI integration, and the future of web design.</p>
              </div>
              {PODCASTS.map(pod => (
                <PodcastItem key={pod.id} podcast={pod} />
              ))}
            </div>
          )}

          {activeTab === 'news' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-700">
              {NEWS.map(n => (
                <NewsItemCard key={n.id} news={n} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Global Vibe CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-44">
        <div className="relative p-12 md:p-24 rounded-[48px] bg-gradient-to-br from-indigo-600 to-violet-700 overflow-hidden shadow-2xl shadow-indigo-500/20">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to shift the atmosphere?</h2>
            <p className="text-xl text-indigo-100/80 mb-12 font-medium">Currently accepting high-impact projects for Q2 2025. Let's build something that resonates.</p>
            <a href="mailto:vibe@vibekit.dev" className="inline-block px-12 py-6 bg-white text-black rounded-3xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black">V</div>
                <span className="text-2xl font-black tracking-tighter">VibeKit<span className="text-indigo-500">.</span></span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-10 text-lg">
                Crafting world-class digital experiences through the lens of Vibe Coding and React Excellence.
              </p>
              <div className="flex gap-8">
                {['Github', 'Twitter', 'Linkedin'].map(item => (
                  <a key={item} href="#" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">{item}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'Projects', 'Podcast', 'News', 'Archive'].map(item => (
                  <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start lg:items-end">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Studio Status</h4>
               <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Online & Ready</span>
               </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">© 2024 VibeKit. All digital rights reserved.</p>
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">Built with Passion & React & Gemini AI</p>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetails app={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default App;
