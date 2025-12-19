
import React from 'react';
import { PODCASTS, AI_NEWS } from '../constants';

const KnowledgeHub: React.FC = () => {
  return (
    <section id="hub" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Podcasts */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Podcast Episodes</h2>
            <p className="text-slate-500 text-sm">Deep dives into the intersection of code and aesthetics.</p>
          </div>
          
          <div className="space-y-4">
            {PODCASTS.map((episode) => (
              <div key={episode.id} className="group glass p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all flex items-center gap-5 cursor-pointer">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={episode.image} alt={episode.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <div className="w-6 h-6 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] text-purple-400 font-bold">{episode.date}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{episode.duration}</span>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-purple-400 transition-colors">{episode.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <button className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2 group">
            Listen on Spotify 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        
        {/* Right Side: AI News Feed */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">AI News Feed</h2>
            <p className="text-slate-500 text-sm">Curated updates from the frontier of intelligence.</p>
          </div>
          
          <div className="space-y-6">
            {AI_NEWS.map((news) => (
              <div key={news.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-purple-500 before:to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">{news.source}</span>
                  <span className="text-[10px] text-slate-600">{news.time}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-white/90">{news.headline}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{news.summary}</p>
              </div>
            ))}
          </div>
          <button className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2 group">
            View Archive 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default KnowledgeHub;
