
import React from 'react';
import { PODCAST_EPISODES } from '../constants';

const Podcast: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 fade-in">
        <div className="text-center mb-40">
          <h1 className="text-[10px] font-black text-cyan-400 uppercase tracking-[1em] mb-12">Transmission Center</h1>
          <h2 className="text-7xl md:text-[120px] font-black text-white tracking-tighter uppercase leading-none mb-16">Radio<br />Frequency.</h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1 bg-cyan-400/30 animate-pulse" style={{ height: `${Math.random() * 60 + 10}px`, animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {PODCAST_EPISODES.map((ep) => (
            <div key={ep.id} className="group glass-card p-12 lg:p-16 border border-white/5 hover:border-cyan-400/40 transition-all duration-700">
              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="relative w-48 h-48 bg-slate-900 border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
                  <svg className="w-20 h-20 text-white/20 group-hover:text-cyan-400/40 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                    <span className="text-[10px] mono text-cyan-400 uppercase tracking-[0.4em]">[{ep.date}]</span>
                    <span className="text-[10px] mono text-slate-500 uppercase tracking-widest">{ep.duration} / DIGITAL_FEED</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">{ep.title}</h3>
                  {ep.guest && (
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">FEAT. SOURCE: {ep.guest}</p>
                  )}
                  <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">{ep.description}</p>
                  
                  <div className="flex items-center gap-8">
                    <button className="w-16 h-16 bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-all active:scale-90">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                    <div className="flex-grow">
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-cyan-400"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
