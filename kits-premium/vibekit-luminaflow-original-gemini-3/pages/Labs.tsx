
import React from 'react';
import { PODCASTS } from '../constants';

export const Labs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-20 text-center">
        <h1 className="text-8xl font-black mb-6 tracking-tighter uppercase leading-none">The<br /><span className="vibe-text-gradient">Labs</span></h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Where we break things. Experimental models, unstable architectures, and the future of human-AI synthesis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="p-10 rounded-[50px] vibe-gradient overflow-hidden relative group cursor-pointer">
           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
              <span className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl">Request Access</span>
           </div>
           <div className="relative z-0 space-y-6">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] opacity-80">STABLE_DIFFUSION_NEXT</span>
              <h2 className="text-4xl font-black text-white leading-none uppercase">Project Obsidian</h2>
              <p className="text-white/70 text-lg">Hyper-dimensional image generation with tactile texture synthesis. 0.04s inference.</p>
           </div>
        </div>
        
        <div className="p-10 rounded-[50px] glass border-cyan-500/20 overflow-hidden relative group cursor-pointer">
           <div className="absolute inset-0 bg-cyan-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
              <span className="px-8 py-3 vibe-gradient text-white font-black uppercase tracking-widest text-xs rounded-xl">Join Waitlist</span>
           </div>
           <div className="relative z-0 space-y-6">
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] opacity-80">NEURAL_VOICE_v2</span>
              <h2 className="text-4xl font-black text-white leading-none uppercase">Project Echo</h2>
              <p className="text-slate-400 text-lg">Emotional speech synthesis that adapts to user baseline heart rate in real-time.</p>
           </div>
        </div>
      </div>

      <h2 className="text-4xl font-black uppercase mb-16 tracking-tighter">Researcher Spotlight</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {PODCASTS.map(ep => (
           <div key={ep.id} className="glass p-8 rounded-[40px] border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-cyan-500/10 p-1">
                 <img src={ep.thumbnail} alt={ep.guest} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-black mb-2 uppercase">{ep.guest}</h3>
              <p className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-6">Senior Neural Architect</p>
              <p className="text-sm text-slate-500 leading-relaxed italic mb-8">"{ep.description}"</p>
              <button className="text-[10px] font-black text-white uppercase tracking-widest hover:text-cyan-400 transition-colors">Read Paper ➔</button>
           </div>
         ))}
      </div>
    </div>
  );
};
