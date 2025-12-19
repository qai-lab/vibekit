
import React, { useState } from 'react';
import { PODCASTS, AI_NEWS } from '../constants';

const KnowledgeHub: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="hub" className="py-48 px-8 max-w-[1800px] mx-auto border-t border-white/5 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        
        {/* Editorial Header */}
        <div className="lg:col-span-12 flex flex-col md:flex-row items-baseline justify-between gap-12 border-b border-white/5 pb-16">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#af9164] mb-4 block">Section II</span>
            <h2 className="text-8xl font-serif italic tracking-tighter">The Vibe Journal.</h2>
          </div>
          <div className="text-right">
             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">ISSUE NO. 001</p>
             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">AUTUMN / WINTER 2024</p>
          </div>
        </div>

        {/* Feature Stories (Podcasts) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          {PODCASTS.map((episode) => (
            <div key={episode.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-10 bg-neutral-900">
                {!imageErrors[episode.id] ? (
                  <img 
                    src={episode.image} 
                    alt={episode.title} 
                    onError={() => handleImageError(episode.id)}
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center italic font-serif text-[#af9164] text-4xl opacity-20">
                    Art {episode.id}
                  </div>
                )}
                <div className="absolute inset-0 bg-[#af9164]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-[#af9164] font-bold">
                  <span>{episode.date}</span>
                  <div className="w-1 h-1 rounded-full bg-[#af9164]/40"></div>
                  <span>{episode.duration}</span>
                </div>
                <h4 className="text-4xl font-serif italic text-white/90 group-hover:text-[#af9164] transition-colors duration-700 leading-tight">
                  {episode.title}
                </h4>
                <div className="flex items-center gap-6 group/link">
                  <div className="h-px w-8 bg-white/10 group-hover/link:w-16 transition-all duration-500"></div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 group-hover/link:text-white transition-colors">
                    Listen to Discussion
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* The Digest (AI News) */}
        <div className="lg:col-span-4">
          <div className="sticky top-40 space-y-20 p-12 border-l border-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#af9164]">Global Digest</h3>
            <div className="space-y-20">
              {AI_NEWS.map((news) => (
                <div key={news.id} className="group relative">
                  <div className="flex items-center gap-6 mb-6">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-700">Ref. {news.id}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-700">{news.source}</span>
                  </div>
                  <h4 className="text-2xl font-serif italic mb-6 text-[#fdfcf0]/90 group-hover:translate-x-4 transition-transform duration-700 leading-snug">
                    {news.headline}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light italic">
                    {news.summary}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-20">
               <button className="w-full py-8 border border-white/10 text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-[#fdfcf0] hover:text-[#080808] transition-all duration-700">
                 View Full Archives
               </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default KnowledgeHub;
