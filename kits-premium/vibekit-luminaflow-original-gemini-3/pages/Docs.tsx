
import React from 'react';

export const Docs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-20">
      <aside className="lg:w-64 space-y-10 sticky top-32 h-fit">
         <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">Getting Started</h4>
            <ul className="space-y-2 text-sm font-bold text-slate-400">
               <li className="text-cyan-400">Overview</li>
               <li className="hover:text-white cursor-pointer transition-colors">Authentication</li>
               <li className="hover:text-white cursor-pointer transition-colors">Rate Limits</li>
            </ul>
         </div>
         <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">Core Models</h4>
            <ul className="space-y-2 text-sm font-bold text-slate-400">
               <li className="hover:text-white cursor-pointer transition-colors">Lumina-V4</li>
               <li className="hover:text-white cursor-pointer transition-colors">Vision Pro</li>
               <li className="hover:text-white cursor-pointer transition-colors">Echo Audio</li>
            </ul>
         </div>
      </aside>

      <div className="flex-1 space-y-20">
         <section>
            <h1 className="text-6xl font-black mb-10 tracking-tighter uppercase leading-none">System<br /><span className="vibe-text-gradient">Infrastructure</span></h1>
            <p className="text-xl text-slate-500 max-w-2xl font-medium mb-12">LuminaFlow OS is built on a decentralized compute grid spanning 14 countries. This ensures low-latency generation for mission-critical creative apps.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 glass rounded-[32px] border-white/5 space-y-4">
                  <h3 className="text-lg font-black uppercase">Edge Compute</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Leveraging WebGPU and local-first caching to reduce inference round-trips by 84% compared to legacy cloud providers.</p>
               </div>
               <div className="p-8 glass rounded-[32px] border-white/5 space-y-4">
                  <h3 className="text-lg font-black uppercase">Safety Matrix</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Automated latent-space filtering prevents adversarial injection and ensures output alignment with ethical charters.</p>
               </div>
            </div>
         </section>

         <section className="space-y-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Quick Implementation</h2>
            <div className="p-8 bg-slate-900 rounded-[32px] font-mono text-sm overflow-x-auto border border-white/5 relative group">
               <div className="absolute top-4 right-4 text-[10px] font-black text-slate-600 uppercase">JavaScript</div>
               <pre className="text-cyan-400">
{`const vibe = new VibeKit({
  apiKey: 'SYNTH_882',
  model: 'lumina-v4'
});

const output = await vibe.generate({
  prompt: 'A dreamlike forest...',
  steps: 25,
  guidance: 7.5
});`}
               </pre>
            </div>
         </section>

         <section className="p-12 vibe-gradient rounded-[40px] text-center space-y-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Need a dedicated GPU Cluster?</h2>
            <p className="text-white/80 max-w-lg mx-auto font-medium">For enterprise deployments requiring 100k+ generations per hour, we offer private cloud partitions.</p>
            <button className="px-10 py-4 bg-white text-black font-black rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-transform">Contact Core Devs</button>
         </section>
      </div>
    </div>
  );
};
