
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data';

export const PodcastDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'notes' | 'transcript'>('notes');
  const [imageError, setImageError] = useState(false);
  const episode = SITE_DATA.podcasts.find(p => p.id === id);

  if (!episode) return <div className="p-20 text-white font-black text-center text-4xl">Episode not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link to="/podcasts" className="group inline-flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-all font-black text-xs uppercase tracking-widest">
        <div className="w-8 h-8 rounded-full glass-island flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        All Episodes
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start mb-24">
        <div className="relative group shrink-0">
          <div className="absolute inset-0 pulse-gradient blur-3xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
          {imageError ? (
            <div className="relative w-full max-w-sm md:w-[400px] h-[400px] pulse-gradient opacity-10 rounded-[3rem] border border-white/10" />
          ) : (
            <img 
              src={episode.imageUrl} 
              alt={episode.title} 
              onError={() => setImageError(true)}
              className="relative w-full max-w-sm md:w-[400px] h-[400px] object-cover rounded-[3rem] shadow-2xl border border-white/10" 
            />
          )}
        </div>
        
        <div className="flex-grow text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 text-pink-500 font-black uppercase tracking-[0.2em] text-[10px] rounded-full mb-6">
            Season {episode.season} • Episode {episode.episodeNumber}
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">{episode.title}</h1>
          
          <div className="glass-island rounded-[2.5rem] p-8 mb-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-6 mb-6">
                 <button className="w-16 h-16 pulse-gradient rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </button>
                 <div className="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full pulse-gradient"></div>
                 </div>
            </div>
            <audio src={episode.audioUrl} className="hidden" />
            <div className="flex justify-between text-slate-500 text-[10px] font-black uppercase tracking-widest px-2">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> {episode.duration}</span>
              <span>{episode.date}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {episode.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-zinc-900 border border-white/5 text-slate-400 text-[10px] font-black rounded-full uppercase tracking-widest">#{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex gap-12 mb-12 border-b border-white/5">
          <button 
            onClick={() => setActiveTab('notes')}
            className={`pb-6 text-sm font-black tracking-widest uppercase transition-all relative ${activeTab === 'notes' ? 'text-white' : 'text-slate-500 hover:text-white'}`}
          >
            Show Notes
            {activeTab === 'notes' && <div className="absolute bottom-0 left-0 right-0 h-1 pulse-gradient rounded-full"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('transcript')}
            className={`pb-6 text-sm font-black tracking-widest uppercase transition-all relative ${activeTab === 'transcript' ? 'text-white' : 'text-slate-500 hover:text-white'}`}
          >
            Transcript
            {activeTab === 'transcript' && <div className="absolute bottom-0 left-0 right-0 h-1 pulse-gradient rounded-full"></div>}
          </button>
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'notes' ? (
            <div className="text-slate-400 text-xl font-medium leading-relaxed space-y-6">
              {episode.showNotes.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : (
            <div className="text-slate-300 font-mono text-base leading-relaxed whitespace-pre-wrap glass-island p-10 rounded-[3rem] border border-white/5 bg-zinc-900/30">
              <div className="text-pink-500 mb-8 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span> Raw Data Stream
              </div>
              {episode.transcript}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
