
import React from 'react';
import { Play, Mic2, Clock, Calendar } from 'lucide-react';
import { podcasts } from '../data';

const PodcastSection: React.FC = () => {
  return (
    <section id="podcast" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 mb-4">
            <Mic2 className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Latest Episodes</span>
          </div>
          <h2 className="text-3xl font-display font-bold">VibeCast</h2>
        </div>
        <button className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2">
          View all episodes on Spotify <Play className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {podcasts.map((episode) => (
          <div key={episode.id} className="glass p-6 rounded-[2.5rem] flex flex-col sm:flex-row gap-6 hover:bg-white/5 transition-all group">
            <div className="relative w-full sm:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
              <img src={episode.coverImage} alt={episode.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                  <Play className="w-6 h-6 fill-black" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 uppercase font-bold tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {episode.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {episode.duration}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-indigo-400 transition-colors">{episode.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">{episode.summary}</p>
              </div>
              
              <button className="mt-6 flex items-center gap-2 text-sm font-bold bg-white text-black px-6 py-2 rounded-xl w-fit hover:bg-slate-200 transition-colors">
                Listen Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastSection;
