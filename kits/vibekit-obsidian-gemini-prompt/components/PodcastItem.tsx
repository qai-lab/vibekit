
import React from 'react';
import { PodcastEpisode } from '../types';

interface PodcastItemProps {
  podcast: PodcastEpisode;
}

export const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  return (
    <div className="flex items-center p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-500 mr-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-slate-700 group-hover:border-indigo-400">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-1">{podcast.date}</div>
        <h4 className="font-bold text-white group-hover:text-indigo-400 transition-colors text-lg leading-tight">{podcast.episodeTitle}</h4>
        <div className="flex items-center gap-3 text-xs text-slate-500 mt-2 font-bold uppercase tracking-wider">
          <span>{podcast.guest}</span>
          <span className="w-1 h-1 rounded-full bg-slate-700"></span>
          <span>{podcast.duration}</span>
        </div>
      </div>
      <a href={podcast.link} className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:text-white hover:bg-slate-700 transition-all">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
      </a>
    </div>
  );
};
