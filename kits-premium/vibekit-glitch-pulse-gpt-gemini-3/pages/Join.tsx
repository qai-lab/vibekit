
import React from 'react';

export const Join: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <div className="text-center mb-24">
        <span className="text-pink-500 font-black uppercase tracking-[0.5em] text-xs mb-8 block">Member Access</span>
        <h1 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none mb-10">
          Join the <br />
          <span className="pulse-text-gradient">Collective.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
          Be the first to get access to early builds, raw prompt fragments, and exclusive live sessions with the creators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="glass-island p-12 rounded-[3.5rem] border border-white/10 hover:border-pink-500/50 transition-all group">
          <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform">💌</div>
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Inner Circle</h3>
          <p className="text-slate-400 font-bold mb-8">Get the "Pulse Report" every Friday — a curated list of tools and insights we're actually using.</p>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-slate-600">Free Forever</span>
            <button className="text-pink-500 font-black uppercase text-[10px] tracking-[0.2em]">Sign Up →</button>
          </div>
        </div>

        <div className="glass-island p-12 rounded-[3.5rem] border border-white/10 hover:border-cyan-400/50 transition-all group">
          <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform">⚡</div>
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Builder Tier</h3>
          <p className="text-slate-400 font-bold mb-8">Access to our private Discord, source code repositories, and weekly code-along vibe sessions.</p>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-slate-600">$10 / Month</span>
            <button className="text-cyan-400 font-black uppercase text-[10px] tracking-[0.2em]">Apply Now →</button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900/50 p-1 rounded-[3rem] border border-white/10">
        <div className="bg-black p-12 rounded-[2.9rem] flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">Enter the Stream</h3>
                <p className="text-slate-500 font-bold">Input your data to receive the frequency.</p>
            </div>
            <form className="w-full md:w-auto flex flex-col sm:flex-row gap-4 flex-1" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:ring-2 focus:ring-pink-500 flex-grow"
                />
                <button className="px-10 py-4 pulse-gradient rounded-2xl text-white font-black uppercase text-xs tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-red-600/20">
                  Join
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};
