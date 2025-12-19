
import React from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';

export const PodcastIndex: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-white">The Vibe <span className="text-indigo-500">Podcast</span></h1>
        </div>
        <p className="text-slate-400 max-w-2xl text-lg">
          Weekly conversations with engineers, designers, and visionaries redefining the software landscape in the AI age.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SITE_DATA.podcasts.map(ep => (
          <Card key={ep.id} item={ep} />
        ))}
      </div>
    </div>
  );
};
