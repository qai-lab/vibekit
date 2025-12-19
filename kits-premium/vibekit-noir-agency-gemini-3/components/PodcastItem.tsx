
import React from 'react';
import { PodcastEpisode } from '../types';

interface PodcastItemProps {
  podcast: PodcastEpisode;
}

export const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center py-12 border-b border-zinc-900 hover:border-white transition-colors group">
      <div className="md:w-32 mb-6 md:mb-0">
        <span className="text-5xl font-bold italic text-zinc-800 group-hover:text-white transition-colors">0{podcast.id.split('-')[1]}</span>
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF0033] mb-4">{podcast.date}</div>
        <h4 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none mb-4 group-hover:translate-x-4 transition-transform">{podcast.episodeTitle.toUpperCase()}</h4>
        <div className="flex items-center gap-6">
          <span className="text-sm text-zinc-500 font-medium">{podcast.guest}</span>
          <span className="w-8 h-px bg-zinc-800"></span>
          <span className="text-sm text-zinc-600 uppercase font-bold tracking-widest">{podcast.duration}</span>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <a href={podcast.link} className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-[#FF0033] group-hover:border-[#FF0033] transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </a>
      </div>
    </div>
  );
};
