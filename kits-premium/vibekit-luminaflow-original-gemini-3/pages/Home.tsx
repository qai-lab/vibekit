
import React, { useEffect, useState } from 'react';
import { PROJECTS, PODCASTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { getAiNewsInsights } from '../services/geminiService';
import { NewsInsight } from '../types';

export const Home: React.FC = () => {
  const [news, setNews] = useState<NewsInsight[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoadingNews(true);
      const insights = await getAiNewsInsights();
      setNews(insights);
      setLoadingNews(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="space-y-32 pb-20">
      {/* Cinematic Hero */}
      <section className="px-6 pt-16 md:pt-32 max-w-7xl mx-auto relative overflow-visible">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] -z-10" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg glass mb-10 border-cyan-500/20 bg-cyan-500/5">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
              <span className="text-[9px] font-black tracking-[0.3em] uppercase text-cyan-400">System Kernel Initialized</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
              Synthetic<br />
              <span className="vibe-text-gradient">Realities.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-lg leading-relaxed font-medium mb-12">
              VibeKit is the next evolution of human-AI collaboration. Powered by LuminaFlow architecture to stream video from thoughts and images from dreams.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 vibe-gradient text-white font-black rounded-xl hover:scale-105 transition-transform shadow-2xl shadow-cyan-500/20 text-sm tracking-widest uppercase">
                Access Engine
              </button>
              <button className="px-10 py-5 glass border border-cyan-500/20 text-cyan-400 font-black rounded-xl hover:bg-cyan-400/10 transition-colors text-sm tracking-widest uppercase">
                View Docs
              </button>
            </div>
          </div>

          {/* Abstract Hero Visual/Dashboard */}
          <div className="hidden lg:block relative p-1 rounded-3xl vibe-gradient">
             <div className="bg-slate-950 rounded-[22px] p-8 aspect-square flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800')] bg-cover"></div>
                <div className="relative z-10 flex justify-between items-start">
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-cyan-500 uppercase">GPU CLUSTER 04</span>
                      <span className="text-2xl font-black text-white">98.2% Load</span>
                   </div>
                   <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                   </div>
                </div>
                
                <div className="relative z-10 space-y-4">
                   <div className="h-12 glass rounded-xl flex items-center px-4 justify-between border-cyan-500/20">
                      <span className="text-[10px] font-bold text-slate-400">TENSOR FLOW</span>
                      <div className="flex gap-1">
                         {[0.4, 0.6, 0.8, 0.5, 0.9, 0.4].map((h, i) => (
                           <div key={i} className="w-1 bg-cyan-500" style={{height: `${h*20}px`}}></div>
                         ))}
                      </div>
                   </div>
                   <div className="p-4 glass rounded-xl border-cyan-500/20">
                      <span className="text-[8px] font-black text-slate-500 mb-2 block uppercase tracking-widest">Active Generation Stream</span>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-indigo-500 animate-pulse"></div>
                         <div className="flex-1 space-y-1">
                            <div className="h-2 bg-white/10 rounded w-full"></div>
                            <div className="h-2 bg-white/5 rounded w-3/4"></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Models / Projects Section */}
      <section id="projects" className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Proprietary Models</h2>
            <p className="text-slate-500 max-w-xl font-medium">Our neural architectures are trained on premium dataset clusters to deliver unprecedented creative coherence.</p>
          </div>
          <div className="flex p-1 bg-slate-900 rounded-2xl border border-white/5">
             <button className="px-8 py-3 bg-cyan-500 text-white font-black text-xs rounded-xl shadow-lg shadow-cyan-500/20 uppercase tracking-widest">Active</button>
             <button className="px-8 py-3 text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">Archived</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Network Insights / News */}
      <section id="news" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/10 pointer-events-none" />
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-10">
               <div>
                 <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase leading-none">Global Neural<br /><span className="vibe-text-gradient">Telemetry</span></h2>
                 <p className="text-slate-500 font-medium">Tracking the emergence of AGI capabilities in real-time across the collective digital consciousness.</p>
               </div>
               
               <div className="space-y-4">
                  {[
                    { label: 'Token Saturation', val: '84%', color: 'bg-cyan-500' },
                    { label: 'Architectural Parity', val: '91%', color: 'bg-indigo-500' },
                    { label: 'Inference Precision', val: '99.2%', color: 'bg-blue-400' }
                  ].map(stat => (
                    <div key={stat.label} className="p-6 glass rounded-2xl border-white/5">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                          <span className="text-lg font-black text-white">{stat.val}</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${stat.color} rounded-full`} style={{width: stat.val}}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:col-span-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {loadingNews ? (
                    Array(4).fill(0).map((_, i) => (
                      <div key={i} className="glass p-10 rounded-3xl animate-pulse bg-white/[0.02]" />
                    ))
                  ) : (
                    news.map((item, idx) => (
                      <div key={idx} className="glass group p-10 rounded-[40px] border border-white/5 hover:border-cyan-500/30 transition-all hover:translate-y-[-4px] flex flex-col justify-between">
                         <div>
                            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[8px] font-black uppercase tracking-[0.3em] rounded-md mb-6 inline-block">{item.category}</span>
                            <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">{item.summary}</p>
                         </div>
                         <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[10px] font-black text-slate-600 uppercase">{item.source}</span>
                            <a href={item.url} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </a>
                         </div>
                      </div>
                    ))
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Spotlight */}
      <section id="podcast" className="px-6 max-w-7xl mx-auto">
         <div className="relative rounded-[60px] p-[1px] vibe-gradient overflow-hidden glow-cyan">
            <div className="bg-[#020617] rounded-[59px] p-16 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200')] opacity-[0.03] mix-blend-overlay"></div>
               <div className="relative z-10 space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">VibeKit Labs<br />Showcase</h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Early access models and experimental neural prototypes from our skunkworks department.</p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
                     {PODCASTS.slice(0, 3).map(ep => (
                       <div key={ep.id} className="group cursor-pointer">
                          <div className="w-24 h-24 mb-6 rounded-3xl overflow-hidden glass p-1 border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
                             <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover rounded-2xl" />
                          </div>
                          <h4 className="text-[10px] font-black uppercase text-cyan-400 tracking-[0.2em]">{ep.guest}</h4>
                       </div>
                     ))}
                  </div>

                  <div className="pt-10">
                    <button className="px-12 py-5 vibe-gradient text-white font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/30">
                       Enter The Labs
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};
