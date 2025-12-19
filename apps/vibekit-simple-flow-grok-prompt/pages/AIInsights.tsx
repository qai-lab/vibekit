
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center md:text-left">AI Insights</h1>
          <p className="text-slate-600 text-center md:text-left">Curation of the most impactful developments in artificial intelligence.</p>
        </div>
        <div className="relative w-full md:w-80">
          <input 
            type="text" 
            placeholder="Search insights..." 
            className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredInsights.length > 0 ? (
          filteredInsights.map((insight) => (
            <div key={insight.id} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col group">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {insight.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{insight.source}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">{insight.title}</h2>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{insight.summary}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <a 
                  href={insight.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Full Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-xl text-slate-400">No insights found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIInsights;
