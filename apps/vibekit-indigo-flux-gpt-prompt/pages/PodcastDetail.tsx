
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data';

export const PodcastDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'notes' | 'transcript'>('notes');
  const episode = SITE_DATA.podcasts.find(p => p.id === id);

  if (!episode) return <div className="p-12 text-white">Episode not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/podcasts" className="text-slate-400 hover:text-indigo-400 mb-8 inline-block">← All Episodes</Link>
      
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <img src={episode.imageUrl} alt={episode.title} className="w-full md:w-80 h-80 object-cover rounded-3xl shadow-xl" />
        <div className="flex-grow">
          <span className="text-indigo-500 font-bold uppercase tracking-widest text-sm">Season {episode.season} • Episode {episode.episodeNumber}</span>
          <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">{episode.title}</h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
            <audio controls src={episode.audioUrl} className="w-full h-12 filter invert" />
            <div className="mt-4 flex justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
              <span>Length: {episode.duration}</span>
              <span>Released: {episode.date}</span>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            {episode.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-tighter">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-800 mb-8 flex gap-8">
        <button 
          onClick={() => setActiveTab('notes')}
          className={`pb-4 text-sm font-bold tracking-widest uppercase transition-all ${activeTab === 'notes' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-slate-500 hover:text-white'}`}
        >
          Show Notes
        </button>
        <button 
          onClick={() => setActiveTab('transcript')}
          className={`pb-4 text-sm font-bold tracking-widest uppercase transition-all ${activeTab === 'transcript' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-slate-500 hover:text-white'}`}
        >
          Transcript
        </button>
      </div>

      <div className="prose prose-invert max-w-none">
        {activeTab === 'notes' ? (
          <div className="text-slate-300 text-lg leading-relaxed whitespace-pre-wrap">{episode.showNotes}</div>
        ) : (
          <div className="text-slate-400 font-mono text-sm leading-relaxed whitespace-pre-wrap bg-slate-950 p-8 rounded-2xl border border-slate-900">{episode.transcript}</div>
        )}
      </div>
    </div>
  );
};
