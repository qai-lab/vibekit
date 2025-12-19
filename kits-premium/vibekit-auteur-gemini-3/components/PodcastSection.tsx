
import React from 'react';
import { Play, Mic2, Clock, Calendar } from 'lucide-react';
import { podcasts } from '../data';

const PodcastSection: React.FC = () => {
  return (
    <section id="podcast" className="max-w-screen-2xl mx-auto px-8 py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
        <div>
          <div className="flex items-center gap-3 text-[#d4c3a1] mb-6">
            <Mic2 className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Audio Archive</span>
          </div>
          <h2 className="text-5xl font-display leading-tight">VibeCast <span className="serif text-[#d4c3a1]">Sessions</span></h2>
        </div>
        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#808080] hover:text-[#d4c3a1] transition-colors flex items-center gap-4">
          Discovery on Spotify <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center"><Play className="w-3 h-3 fill-[#808080] text-[#808080]" /></div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {podcasts.map((episode) => (
          <div key={episode.id} className="group flex flex-col sm:flex-row gap-10 p-10 hairline-border bg-white/[0.01] hover:bg-white/[0.03] transition-all">
            <div className="relative w-full sm:w-56 aspect-square overflow-hidden shrink-0">
              <img 
                src={episode.coverImage} 
                alt={episode.title} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-[#d4c3a1] rounded-full flex items-center justify-center text-black shadow-2xl">
                  <Play className="w-6 h-6 fill-black" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between py-4">
              <div>
                <div className="flex items-center gap-6 text-[8px] font-bold uppercase tracking-[0.2em] text-[#808080] mb-6">
                  <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-[#d4c3a1]" /> {episode.date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-[#d4c3a1]" /> {episode.duration}</span>
                </div>
                <h3 className="text-2xl font-display group-hover:text-[#d4c3a1] transition-colors mb-6">{episode.title}</h3>
                <p className="text-[#808080] text-sm font-light leading-relaxed line-clamp-2">{episode.summary}</p>
              </div>
              
              <button className="mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white border-b border-[#d4c3a1]/30 pb-2 w-fit hover:border-[#d4c3a1] transition-all">
                Execute Audio
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastSection;
