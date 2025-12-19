import React from 'react';
import { Mic, Headphones, Rss, Radio, Sparkles } from 'lucide-react';
import { EPISODES } from '../data';
import EpisodeCard from '../components/EpisodeCard';

const Podcast: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-24 gap-12">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 rounded-[1.5rem] vibe-gradient flex items-center justify-center text-white shadow-xl shadow-brand-500/20">
              <Radio size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500">THE PARLOR SESSION</span>
              <span className="text-xl font-black">HAVEN RADIO</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">Voices of the <br /><span className="vibe-text-gradient italic">Community Hub.</span></h1>
          <p className="text-xl text-brand-700 dark:text-brand-400 font-medium leading-relaxed">
            Unfiltered dialogues with architects, thinkers, and builders navigating the intersection of community, code, and artificial intelligence.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-3xl flex items-center space-x-3 font-black uppercase tracking-widest text-xs hover:bg-brand-50 dark:hover:bg-brand-800 transition-all shadow-sm">
            <Headphones size={20} className="text-brand-500" />
            <span>Apple</span>
          </button>
          <button className="px-8 py-4 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-3xl flex items-center space-x-3 font-black uppercase tracking-widest text-xs hover:bg-brand-50 dark:hover:bg-brand-800 transition-all shadow-sm">
            <div className="text-brand-500 font-black text-lg">S</div>
            <span>Spotify</span>
          </button>
          <button className="p-4 bg-brand-50 dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-2xl font-black hover:bg-brand-100 dark:hover:bg-brand-800 transition-all text-brand-500">
            <Rss size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-5xl">
        <div className="flex items-center space-x-4 mb-4">
           <Sparkles size={18} className="text-haven-amber" />
           <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-400">Archives of Growth</h2>
        </div>
        {EPISODES.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      {/* Parlor Bottom CTA */}
      <div className="mt-32 p-16 bg-brand-900 rounded-[4rem] text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-haven-amber/5 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h3 className="text-4xl font-black mb-8">Suggest a Voice.</h3>
          <p className="text-brand-300 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            Know an architect or builder with a story to tell? The Parlor is always open for new perspectives.
          </p>
          <button className="px-12 py-5 bg-white text-brand-950 font-black uppercase tracking-widest rounded-3xl hover:bg-brand-50 transition-all shadow-2xl text-sm">
            Nominate a Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Podcast;