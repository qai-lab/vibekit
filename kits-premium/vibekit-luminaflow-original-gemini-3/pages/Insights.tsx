
import React, { useEffect, useState } from 'react';
import { getAiNewsInsights } from '../services/geminiService';
import { NewsInsight } from '../types';

export const Insights: React.FC = () => {
  const [news, setNews] = useState<NewsInsight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const data = await getAiNewsInsights();
      setNews(data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-20">
        <h1 className="text-7xl font-black mb-6 tracking-tighter uppercase leading-none">Neural<br /><span className="vibe-text-gradient">Insights</span></h1>
        <p className="text-xl text-slate-500 max-w-2xl font-medium">Deep analysis of the global generative ecosystem. Updated every millisecond via decentralized telemetry nodes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
           {loading ? (
             Array(5).fill(0).map((_, i) => (
               <div key={i} className="glass p-10 rounded-[40px] animate-pulse h-64" />
             ))
           ) : (
             news.map((item, idx) => (
               <div key={idx} className="glass group p-10 rounded-[40px] border border-white/5 hover:border-cyan-500/20 transition-all">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[8px] font-black uppercase tracking-widest rounded">{item.category}</span>
                    <span className="text-[10px] font-mono text-slate-600 uppercase">{item.source}</span>
                 </div>
                 <h2 className="text-3xl font-black mb-6 group-hover:text-cyan-400 transition-colors leading-tight">{item.title}</h2>
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">{item.summary}</p>
                 <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors">
                   View Full Analysis ➔
                 </a>
               </div>
             ))
           )}
        </div>

        <div className="space-y-12">
           <div className="glass p-10 rounded-[40px] border-cyan-500/10 sticky top-32">
              <h3 className="text-lg font-black mb-8 uppercase tracking-widest flex items-center gap-3">
                 <div className="w-2 h-6 vibe-gradient rounded-full"></div>
                 Global Grid Metrics
              </h3>
              <div className="space-y-8">
                 {[
                   { label: 'Diffusion Flux', val: '4.2 TH/s', trend: '+12%', color: 'text-emerald-400' },
                   { label: 'Token Liquidity', val: '98.9%', trend: 'Stable', color: 'text-cyan-400' },
                   { label: 'Synthesized Mass', val: '1.4 PB', trend: '+42%', color: 'text-indigo-400' }
                 ].map(stat => (
                   <div key={stat.label} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                         <span>{stat.label}</span>
                         <span className={stat.color}>{stat.trend}</span>
                      </div>
                      <div className="text-2xl font-black text-white">{stat.val}</div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full vibe-gradient w-3/4"></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
