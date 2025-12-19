
import React, { useState, useEffect } from 'react';
import { APPS, PODCASTS, NEWS } from './constants';
import { AppCard } from './components/AppCard';
import { PodcastItem } from './components/PodcastItem';
import { NewsItemCard } from './components/NewsItemCard';
import { ChatBot } from './components/ChatBot';
import { ProjectDetails } from './components/ProjectDetails';
import { AppProject } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'home' | 'work' | 'studio' | 'journal'>('home');
  const [selectedProject, setSelectedProject] = useState<AppProject | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CLIENT_IMAGES = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF0033]">
      {/* Navigation */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
          <div 
            onClick={() => setActiveView('home')}
            className="flex items-center gap-1 cursor-pointer group"
          >
            <span className="text-3xl font-bold tracking-tighter leading-none group-hover:text-[#FF0033] transition-colors uppercase">Vibekit<span className="text-[#FF0033]">.</span></span>
          </div>

          <nav className="hidden lg:flex items-center gap-16">
            {(['work', 'studio', 'journal'] as const).map((view) => (
              <button 
                key={view}
                onClick={() => setActiveView(view)}
                className={`text-[11px] font-bold tracking-[0.3em] uppercase transition-all hover:text-[#FF0033] ${activeView === view ? 'text-[#FF0033]' : 'text-zinc-500'}`}
              >
                {view}
              </button>
            ))}
          </nav>

          <div className="flex items-center">
             <a href="mailto:hello@vibekit.agency" className="text-[10px] font-bold uppercase tracking-[0.3em] px-10 py-4 border border-white/20 hover:bg-[#FF0033] hover:border-[#FF0033] hover:text-white transition-all">
              Initiate Project
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="pt-20">
        {activeView === 'home' && (
          <div className="animate-in fade-in duration-1000">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-8">
              <div className="max-w-[1800px] mx-auto w-full relative z-10">
                <div className="max-w-7xl">
                  <h1 className="text-[14vw] lg:text-[11vw] font-bold mb-10 leading-[0.8] tracking-tighter animate-reveal">
                    RADICAL<br />
                    <span className="text-outline">SYSTEMS.</span>
                  </h1>
                  
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mt-16 animate-reveal" style={{ animationDelay: '0.2s' }}>
                    <p className="text-2xl lg:text-4xl text-zinc-400 max-w-2xl leading-[1.1] font-light">
                      WE ARE A BOUTIQUE COLLECTIVE DESIGNING <span className="text-white font-medium">HIGH-FIDELITY ATMOSPHERES</span> FOR THE NEW INTERNET.
                    </p>
                    
                    <div className="flex items-center gap-10">
                      <div className="flex -space-x-4">
                        {CLIENT_IMAGES.map((src, i) => (
                          <div key={i} className="w-14 h-14 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                            <img src={src} className="w-full h-full object-cover grayscale opacity-80" alt={`Client ${i}`} />
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-2xl font-bold tracking-tighter">50+ SHIPS</div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mt-1">GLOBAL IMPACT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Anchor */}
              <div className="absolute bottom-16 right-12 flex items-center gap-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-700">Explore Work</span>
                <div className="w-32 h-px bg-zinc-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF0033] translate-x-[-100%] animate-[slide_3s_infinite]"></div>
                </div>
              </div>
            </section>

            {/* Featured Work Grid Preview */}
            <section className="px-8 pb-48">
              <div className="max-w-[1800px] mx-auto">
                <div className="flex items-baseline justify-between mb-24 border-b border-zinc-900 pb-12">
                   <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter italic">Featured Work<span className="text-[#FF0033]">.</span></h2>
                   <button onClick={() => setActiveView('work')} className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-colors">View All Projects</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {APPS.map(app => (
                    <AppCard key={app.id} app={app} onClick={() => setSelectedProject(app)} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeView === 'work' && (
          <div className="px-8 py-32 animate-in fade-in slide-in-from-bottom-12 duration-1000">
             <div className="max-w-[1800px] mx-auto">
                <div className="mb-32">
                   <h1 className="text-[8vw] font-bold tracking-tighter leading-none mb-12">ALL SHIPS<span className="text-[#FF0033]">.</span></h1>
                   <p className="text-2xl text-zinc-500 max-w-2xl font-light">A COMPLETE REPOSITORY OF OUR EXPERIMENTAL AND COMMERCIAL IMPLEMENTATIONS.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {APPS.map(app => (
                    <AppCard key={app.id} app={app} onClick={() => setSelectedProject(app)} />
                  ))}
                </div>
             </div>
          </div>
        )}

        {activeView === 'studio' && (
          <div className="px-8 py-32 animate-in fade-in slide-in-from-bottom-12 duration-1000">
             <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                   <div>
                      <h1 className="text-[8vw] font-bold tracking-tighter leading-none mb-16">STUDIO<span className="text-[#FF0033]">.</span></h1>
                      <div className="space-y-12 max-w-xl">
                        <p className="text-4xl font-light leading-tight text-zinc-300">
                          WE ARE ARCHITECTS OF THE DIGITAL VOID. BASED IN TOKYO AND SAN FRANCISCO, WE SPECIALIZE IN HIGH-END REACT ARCHITECTURES AND ARTIFICIAL INTELLIGENCE.
                        </p>
                        <p className="text-xl text-zinc-500 font-light leading-relaxed">
                          FOUNDED ON THE PRINCIPLES OF BRUTALIST MINIMALISM, VIBEKIT IS A RESPONSE TO THE OVER-TEMPLATE-IZATION OF THE WEB. WE BUILD SYSTEMS THAT FEEL ALIVE.
                        </p>
                      </div>
                   </div>
                   <div className="flex flex-col justify-center">
                      <div className="grid grid-cols-2 gap-8">
                         {[
                           { label: 'ENGINEERING', items: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'] },
                           { label: 'INTELLIGENCE', items: ['Gemini Pro', 'Multi-modal AI', 'RAG Systems', 'Neural Branding'] },
                           { label: 'CULTURE', items: ['Brutalism', 'Minimalism', 'Editorial Design', 'Atmosphere'] },
                           { label: 'LOGISTICS', items: ['Global Delivery', 'Cloud Native', 'CI/CD Mastery', 'Edge Computing'] }
                         ].map(group => (
                           <div key={group.label} className="p-10 border border-zinc-900">
                             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF0033] mb-8">{group.label}</h4>
                             <ul className="space-y-3">
                                {group.items.map(item => (
                                  <li key={item} className="text-lg font-light text-zinc-400">{item}</li>
                                ))}
                             </ul>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}

        {activeView === 'journal' && (
           <div className="px-8 py-32 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="max-w-[1800px] mx-auto">
                 <div className="mb-32">
                    <h1 className="text-[8vw] font-bold tracking-tighter leading-none mb-12">JOURNAL<span className="text-[#FF0033]">.</span></h1>
                    <p className="text-2xl text-zinc-500 max-w-2xl font-light">OBSERVATIONS, DIALOGUES, AND UPDATES FROM THE CORE.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-12">
                       <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF0033] mb-12 border-b border-zinc-900 pb-4">Latest Insights</h2>
                       {NEWS.map(n => (
                         <NewsItemCard key={n.id} news={n} />
                       ))}
                    </div>
                    <div className="space-y-12">
                       <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF0033] mb-12 border-b border-zinc-900 pb-4">Dialogues</h2>
                       {PODCASTS.map(pod => (
                         <PodcastItem key={pod.id} podcast={pod} />
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        )}
      </div>

      {/* Persistent CTA */}
      <section className="px-8 py-48 bg-[#050505]">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative p-24 lg:p-48 bg-[#FF0033] text-white overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-[2] rotate-12 transition-transform duration-1000 group-hover:rotate-[30deg]">
               <span className="text-[400px] font-black leading-none">V</span>
            </div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <h2 className="text-6xl lg:text-[9vw] font-bold leading-[0.85] tracking-tighter mb-16">START THE<br />CONVERSION.</h2>
              <a href="mailto:hello@vibekit.agency" className="px-20 py-8 bg-white text-black text-2xl font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95">
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Footer */}
      <footer className="bg-black py-48 border-t border-zinc-900">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-32 mb-32">
            <div className="lg:col-span-2">
              <span className="text-5xl font-bold tracking-tighter mb-12 block leading-none uppercase">Vibekit<span className="text-[#FF0033]">.</span></span>
              <p className="text-zinc-500 max-w-sm text-2xl font-light leading-snug mb-12">
                A STRATEGIC DIGITAL COLLECTIVE ENGINEERING AESTHETIC INFRASTRUCTURE.
              </p>
              <div className="flex gap-12">
                {['Instagram', 'Twitter', 'GitHub', 'LinkedIn'].map(item => (
                  <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 hover:text-[#FF0033] transition-colors">{item}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF0033] mb-12">Capabilities</h4>
              <ul className="space-y-6">
                {['Brand Systems', 'Core Development', 'Intelligence R&D', 'Architectural UX'].map(item => (
                  <li key={item} className="text-2xl font-light text-zinc-400 italic">{item}</li>
                ))}
              </ul>
            </div>

            <div className="lg:text-right">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF0033] mb-12">Presence</h4>
               <p className="text-3xl font-bold tracking-tighter mb-2">TYO / SFO</p>
               <a href="mailto:hello@vibekit.agency" className="text-2xl font-light text-zinc-600 hover:text-white transition-colors">hello@vibekit.agency</a>
            </div>
          </div>
          
          <div className="pt-24 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-12 opacity-40">
            <p className="text-[9px] font-bold uppercase tracking-[0.5em]">VIBEKIT.AGENCY © 2024 NOIR_THEME_V3</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#FF0033]">BEYOND_THE_VOID</p>
          </div>
        </div>
      </footer>

      {/* Modals & Tools */}
      {selectedProject && (
        <ProjectDetails app={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
      <ChatBot />
    </div>
  );
};

export default App;
