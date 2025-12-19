
import React from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';

export const PodcastIndex: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-20">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 pulse-gradient rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(255,0,85,0.4)] transform -rotate-3">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" />
            </svg>
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Vibe <span className="pulse-text-gradient">Radio.</span></h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2">New episodes every Tuesday</p>
          </div>
        </div>
        <p className="text-slate-400 max-w-2xl text-xl font-medium leading-relaxed">
          Deep dives into the minds of the people building the future. Raw, unedited, and high-frequency conversations.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {SITE_DATA.podcasts.map(ep => (
          <Card key={ep.id} item={ep} />
        ))}
      </div>
    </div>
  );
};
