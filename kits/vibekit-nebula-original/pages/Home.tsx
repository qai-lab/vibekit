
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
      {/* Hero Section */}
      <section className="px-6 pt-12 md:pt-24 max-w-7xl mx-auto relative">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-pink-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-white/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-purple-200">Open for new Vibes</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
            We don't just build.<br />
            <span className="vibe-text-gradient">We vibe code.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
            Merging human intuition with the raw power of Large Language Models to ship experiences that define the new era of computing.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
              Explore Projects
            </a>
            <a href="#podcast" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-colors">
              Listen to Podcast
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Latest Creations</h2>
            <p className="text-gray-400 max-w-lg">A handpicked selection of apps built using high-frequency vibe coding methodologies.</p>
          </div>
          <div className="hidden md:flex gap-4">
             <div className="px-6 py-3 glass rounded-full text-sm font-medium border-white/10 hover:border-purple-500/50 cursor-pointer transition-colors">All Apps</div>
             <div className="px-6 py-3 border border-white/5 rounded-full text-sm font-medium hover:bg-white/5 cursor-pointer transition-colors text-gray-400">AI Experimental</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* AI News & Insights Section */}
      <section id="news" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/5 -z-10" />
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">The AI Pulse</h2>
            <p className="text-gray-400">Real-time trends and insights curated by our proprietary Gemini news engine.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {loadingNews ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="glass p-6 rounded-3xl animate-pulse space-y-4">
                    <div className="h-4 w-1/4 bg-white/10 rounded" />
                    <div className="h-6 w-3/4 bg-white/10 rounded" />
                    <div className="h-4 w-full bg-white/10 rounded" />
                  </div>
                ))
              ) : (
                news.map((item, idx) => (
                  <div key={idx} className="glass group p-8 rounded-3xl border-l-4 border-l-transparent hover:border-l-purple-500 transition-all hover:bg-white/[0.05]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-2 block">{item.category}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.summary}</p>
                    <div className="flex items-center justify-between">
                       <span className="text-xs text-gray-500 font-medium">via {item.source}</span>
                       <a href={item.url} className="text-xs font-bold text-white underline decoration-purple-500 underline-offset-4">Read Insight</a>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full group-hover:bg-purple-600/30 transition-all" />
               <div className="relative glass p-10 rounded-[40px] border-white/10">
                 <h4 className="text-2xl font-bold mb-6">Expert Perspectives</h4>
                 <div className="space-y-8">
                    {[
                      { name: 'Sam Altman', quote: 'The cost of intelligence is collapsing. Focus on building things that couldn\'t exist before.' },
                      { name: 'Andrej Karpathy', quote: 'Coding is shifting from "how" to "what". You are the conductor, LLMs are the orchestra.' },
                      { name: 'Demis Hassabis', quote: 'AI will solve the world\'s hardest problems, starting with biology and finishing with energy.' }
                    ].map((expert, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
                        <div>
                          <p className="text-sm italic text-gray-300 mb-1 leading-relaxed">"{expert.quote}"</p>
                          <p className="text-xs font-bold text-white">— {expert.name}</p>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="px-6 max-w-7xl mx-auto">
        <div className="glass p-12 rounded-[50px] relative overflow-hidden border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 vibe-gradient opacity-10 blur-[100px] -z-10" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="flex-1 space-y-8">
               <h2 className="text-5xl font-black leading-tight">Vibe Coding<br /><span className="text-purple-500">The Podcast</span></h2>
               <p className="text-gray-400 text-lg">Hosted by a digital nomad, featuring the minds shaping our synthetic future. New episodes every Tuesday.</p>
               <div className="flex gap-4">
                 <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-purple-50 transition-colors">Spotify</button>
                 <button className="px-6 py-3 glass rounded-xl font-bold hover:bg-white/10 transition-colors">Apple Podcasts</button>
               </div>
             </div>
             
             <div className="flex-1 w-full space-y-4">
               {PODCASTS.map(ep => (
                 <div key={ep.id} className="flex gap-6 p-4 rounded-2xl bg-black/40 hover:bg-black/60 transition-colors border border-white/5 items-center group cursor-pointer">
                   <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                     <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                   </div>
                   <div className="flex-1">
                     <h4 className="font-bold text-sm mb-1 line-clamp-1">{ep.title}</h4>
                     <p className="text-xs text-gray-500 italic">Guest: {ep.guest} • {ep.duration}</p>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 max-w-5xl mx-auto pb-20">
         <div className="vibe-gradient p-1 rounded-[40px]">
           <div className="bg-[#030712] rounded-[38px] p-12 text-center space-y-8">
             <h2 className="text-4xl font-bold">Stay in the Vibe</h2>
             <p className="text-gray-400 max-w-lg mx-auto">Get the latest on AI tools, prompts, and case studies delivered to your inbox weekly.</p>
             <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="you@example.com" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 text-white" />
               <button className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-purple-50 transition-colors">Subscribe</button>
             </form>
           </div>
         </div>
      </section>
    </div>
  );
};
