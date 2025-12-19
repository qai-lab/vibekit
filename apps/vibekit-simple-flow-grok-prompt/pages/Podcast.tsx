
import React from 'react';
import { PODCAST_EPISODES } from '../constants';

const Podcast: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">The VibeKit Podcast</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Deep dives into the philosophical and practical aspects of building in the AI era. 
          Conversations about coding, creativity, and the vibes that drive us.
        </p>
      </div>

      <div className="space-y-12">
        {PODCAST_EPISODES.map((ep) => (
          <div key={ep.id} className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-10 items-center">
            <div className="w-40 h-40 bg-indigo-600 rounded-3xl flex-shrink-0 flex items-center justify-center text-white">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">{ep.date}</span>
                <span className="text-sm text-slate-400">{ep.duration}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{ep.title}</h2>
              {ep.guest && (
                <p className="text-slate-500 font-medium mb-4">feat. {ep.guest}</p>
              )}
              <p className="text-slate-600 mb-8">{ep.description}</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4">
                <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </button>
                <div className="flex-grow h-1 bg-slate-200 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-indigo-500 rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-slate-500">00:00 / {ep.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 rounded-[40px] bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Never miss an episode.</h2>
        <p className="mb-8 opacity-80 max-w-md mx-auto">Subscribe on your favorite platform to get the latest insights delivered straight to your ears.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">Spotify</button>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">Apple Podcasts</button>
          <button className="bg-indigo-700 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-800 transition-colors">RSS Feed</button>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
