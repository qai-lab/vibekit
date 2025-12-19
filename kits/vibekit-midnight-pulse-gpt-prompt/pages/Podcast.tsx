
import React from 'react';
import { Mic, Headphones, Rss } from 'lucide-react';
import { EPISODES } from '../data';
import EpisodeCard from '../components/EpisodeCard';

const Podcast: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl vibe-gradient flex items-center justify-center text-white">
              <Mic size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-500">The VibeKit Show</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Deep Dives into the <span className="vibe-text-gradient">AI Mindset</span>.</h1>
          <p className="text-lg text-brand-600 dark:text-brand-400">
            Conversations with founders, engineers, and philosophers about how generative AI is reshaping creativity and development.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl flex items-center space-x-2 font-bold hover:bg-brand-50 dark:hover:bg-brand-800 transition-colors">
            <Headphones size={18} className="text-blue-500" />
            <span>Apple</span>
          </button>
          <button className="px-6 py-3 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl flex items-center space-x-2 font-bold hover:bg-brand-50 dark:hover:bg-brand-800 transition-colors">
            <div className="text-green-500 font-bold">S</div>
            <span>Spotify</span>
          </button>
          <button className="p-3 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl font-bold hover:bg-brand-50 dark:hover:bg-brand-800 transition-colors">
            <Rss size={18} className="text-orange-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl">
        {EPISODES.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default Podcast;
