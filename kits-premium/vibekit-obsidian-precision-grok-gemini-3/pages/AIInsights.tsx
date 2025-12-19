
import React, { useState } from 'react';
import { AI_INSIGHTS } from '../constants';

const AIInsights: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'News', 'Trends', 'Leader Insights'];

  const filteredInsights = AI_INSIGHTS.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         insight.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || insight.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-black min-h-screen pt-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 fade-in">
        <header className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <h1 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.8em] mb-8">Deep Learning Stream</h1>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none mb-12">Insight<br />Protocol.</h2>
            <p className="text-xl text-slate-500 font-light max-w-xl">A curated analytical feed of the generative frontier. Intelligence optimized for impact and architectural relevance.</p>
          </div>
          <div className="w-full lg:w-[400px]">
            <input 
              type="text" 
              placeholder="SEARCH_LOGS..." 
              className="w-full px-8 py-6 bg-slate-900 border border-white/10 text-[10px] mono text-white focus:outline-none focus:border-cyan-400 transition-all uppercase placeholder:text-slate-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="flex flex-wrap gap-4 mb-24 border-b border-white/10 pb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-black uppercase tracking-[0.4em] px-10 py-3 transition-all ${
                activeCategory === cat 
                  ? 'text-black bg-white' 
                  : 'text-slate-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border border-white/10 bg-white/5">
          {filteredInsights.length > 0 ? (
            filteredInsights.map((insight) => (
              <div key={insight.id} className="bg-black p-16 hover:bg-slate-900 transition-all flex flex-col group border border-white/5">
                <div className="flex justify-between items-center mb-16">
                  <span className="text-[10px] mono text-cyan-400 uppercase tracking-widest border border-cyan-400/30 px-4 py-1">
                    [{insight.category}]
                  </span>
                  <span className="text-[9px] mono text-slate-600 uppercase tracking-widest">SOURCE: {insight.source}</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-10 tracking-tight leading-tight group-hover:text-cyan-400 transition-colors uppercase">{insight.title}</h2>
                <p className="text-lg text-slate-500 mb-16 flex-grow font-light leading-relaxed">{insight.summary}</p>
                <div className="mt-auto">
                  <a 
                    href={insight.link} 
                    target="_blank" 
                    className="inline-flex items-center gap-6 group/link text-[10px] font-black text-white uppercase tracking-[0.5em] hover:text-cyan-400 transition-all"
                  >
                    ACCESS_PROTOCOL
                    <span className="w-12 h-[1px] bg-white group-hover/link:bg-cyan-400 group-hover/link:w-20 transition-all"></span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-60 text-center bg-black">
              <p className="text-[10px] mono text-slate-700 uppercase tracking-[0.8em]">ERR: NO_MATCHES_FOUND_IN_ARCHIVE</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
