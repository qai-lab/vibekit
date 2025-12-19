
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="border-l-4 border-cyan-400 pl-12 sticky top-40">
            <h1 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.8em] mb-12">The Manifesto</h1>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-16">
              Silicon<br />with<br />Soul.
            </h2>
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-white/10"></div>
              <div className="w-12 h-1 bg-cyan-400"></div>
              <div className="w-12 h-1 bg-white/10"></div>
            </div>
          </div>
          
          <div className="space-y-20">
            <section>
              <div className="p-12 lg:p-20 bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-[10px] mono text-slate-800 uppercase tracking-widest">Ver_3.0.4</div>
                <p className="text-3xl text-slate-300 font-light leading-snug mb-12">
                  In an era defined by brute-force computation, VibeKit stands for intentionality. We believe AI shouldn't just be an engine of efficiency, but a partner in aesthetic expression.
                </p>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  VibeKit Laboratories explores the intersection of high-fidelity design and recursive neural processing. We build interfaces that respect human taste while leveraging the infinite potential of silicon. Every pixel is calculated; every interaction is felt.
                </p>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 border border-white/5 bg-[#020617] hover:border-cyan-400/30 transition-all duration-500">
                <div className="text-[10px] mono text-cyan-400 mb-8 tracking-[0.4em] uppercase">Protocol_01</div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Intentionality</h3>
                <p className="text-slate-500 font-light leading-relaxed">We reject automation for its own sake. Our models are tuned to prioritize the 'vibe'—the emotional resonance of the output.</p>
              </div>
              <div className="p-12 border border-white/5 bg-[#020617] hover:border-cyan-400/30 transition-all duration-500">
                <div className="text-[10px] mono text-cyan-400 mb-8 tracking-[0.4em] uppercase">Protocol_02</div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">High Fidelity</h3>
                <p className="text-slate-500 font-light leading-relaxed">Software should feel like an expensive instrument. We focus on the texture, the sound, and the visual depth of AI interaction.</p>
              </div>
            </section>

            <section className="pt-20 border-t border-white/5">
              <h2 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-12">Laboratory Personnel</h2>
              <div className="flex flex-col gap-12">
                <div className="flex justify-between items-end border-b border-white/5 pb-8">
                  <div>
                    <div className="text-xl font-bold text-white mb-2">Architect_Zero</div>
                    <div className="text-[10px] mono text-cyan-400 uppercase tracking-widest">Lead Systems Design</div>
                  </div>
                  <div className="text-[10px] mono text-slate-700 uppercase tracking-widest">[ENCRYPTED_ID]</div>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-8">
                  <div>
                    <div className="text-xl font-bold text-white mb-2">Neural_Operator</div>
                    <div className="text-[10px] mono text-cyan-400 uppercase tracking-widest">LLM Refinement</div>
                  </div>
                  <div className="text-[10px] mono text-slate-700 uppercase tracking-widest">[ENCRYPTED_ID]</div>
                </div>
              </div>
            </section>

            <div className="pt-20">
              <button className="w-full py-10 bg-white text-black font-black uppercase tracking-[0.8em] text-xs hover:bg-cyan-400 transition-all active:scale-95">
                Join the Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
