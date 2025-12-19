
import React from 'react';
import { Newspaper, ChevronRight, Share2, Flame } from 'lucide-react';
import { news } from '../data';

const AITrends: React.FC = () => {
  return (
    <section id="trends" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-rose-500/10 rounded-2xl">
          < Newspaper className="w-6 h-6 text-rose-500" />
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold">AI Trends Dashboard</h2>
          <p className="text-slate-400 text-sm">Curation of the world's most critical AI developments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-4">
          {news.map((item) => (
            <div key={item.id} className="glass p-6 rounded-3xl hover:bg-white/5 transition-all border border-white/5 hover:border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded-md">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-500">{item.timestamp}</span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-rose-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400 flex items-center gap-2">Source: <span className="text-slate-200 font-medium">{item.source}</span></p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 glass border-white/10 rounded-xl hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <a href={item.link} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold transition-all">
                  Read More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
            <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-indigo-400">
              <Flame className="w-5 h-5" /> Weekly Insight
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              "The most powerful programming language is now English. Systems thinking is superseding syntax mastery."
            </p>
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/100/100?grayscale" className="w-10 h-10 rounded-full border border-white/20" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tight">VibeKit Insights</p>
                <p className="text-[10px] text-slate-500">Curated by AI Agents</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-[2.5rem] border-white/5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Subscribe to AI-First</h4>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="you@email.com" 
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold transition-colors">
                Get Weekly Digest
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrends;
