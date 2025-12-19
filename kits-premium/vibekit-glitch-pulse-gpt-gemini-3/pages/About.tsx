
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <section className="mb-32 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
            <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our DNA</span>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85]">Vibe <br /><span className="pulse-text-gradient">First.</span></h1>
            <p className="text-2xl text-slate-400 font-medium leading-tight mb-8">
              We believe engineering is no longer about writing code. It's about <span className="text-white italic">curating energy.</span>
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-bold">
              VibeKit is a sanctuary for the builders who use AI as a brush, not a crutch. We showcase software that has a soul.
            </p>
        </div>
        <div className="w-full lg:w-1/3 grid grid-cols-2 gap-4">
             {[1,2,3,4].map(i => (
                <div key={i} className={`aspect-square rounded-3xl pulse-gradient opacity-${i*20} transform rotate-${i*3}`}></div>
             ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
        <div className="p-12 glass-island rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 grayscale group-hover:grayscale-0 transition-all">🎯</div>
          <h3 className="text-3xl font-black text-white mb-6 tracking-tighter italic">Our Mission</h3>
          <p className="text-slate-400 text-lg font-bold leading-relaxed">
            To document the shift from low-level manual labor to high-level system orchestration. We track the vibe.
          </p>
        </div>
        <div className="p-12 bg-white text-black rounded-[3.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-6xl opacity-10">🌍</div>
          <h3 className="text-3xl font-black mb-6 tracking-tighter italic">Global Network</h3>
          <p className="text-slate-600 text-lg font-bold leading-relaxed">
            Connecting 82,000+ creators who are redefining the limits of generative software development daily.
          </p>
        </div>
      </div>

      <section id="contact" className="relative p-10 md:p-20 rounded-[4rem] overflow-hidden bg-zinc-900/50 border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 pulse-gradient blur-[140px] opacity-20 -mr-48 -mt-48"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Get in <span className="pulse-text-gradient">The Mix.</span></h2>
          <p className="text-slate-400 font-bold mb-16 text-lg leading-relaxed">Submit your project, pitch a podcast episode, or just say hi to the community.</p>
          
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 ml-2">Name</label>
                <input type="text" placeholder="Alex Rivers" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:border-pink-500 focus:outline-none transition-colors placeholder:text-slate-800" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 ml-2">Email</label>
                <input type="email" placeholder="alex@vibe.com" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:border-pink-500 focus:outline-none transition-colors placeholder:text-slate-800" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 ml-2">Message</label>
              <textarea rows={5} placeholder="Tell us about the vibe..." className="w-full bg-black/50 border border-white/10 rounded-[2rem] px-6 py-5 text-white font-bold focus:border-pink-500 focus:outline-none transition-colors placeholder:text-slate-800 resize-none"></textarea>
            </div>
            <button className="w-full py-6 pulse-gradient text-white font-black text-xl rounded-2xl transition-all shadow-2xl shadow-pink-600/30 hover:scale-[1.02] active:scale-[0.98]">
              Push Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
