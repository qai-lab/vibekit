
import React from 'react';
import { APP_PROJECTS, AI_INSIGHTS } from '../constants';

interface HomeProps {
  onNavigate: (path: string, id?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="fade-in bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden tech-gradient">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 text-cyan-400 text-[9px] mono uppercase tracking-[0.4em] mb-12">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                System Status: Operational
              </div>
              <h1 className="text-7xl md:text-[140px] font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase">
                Silicon<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-slate-800">With Soul.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl mb-16 leading-relaxed">
                VibeKit architectures the next generation of AI-native interfaces. High-fidelity design meets recursive neural processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <button 
                  onClick={() => onNavigate('apps')}
                  className="px-12 py-6 bg-white text-black text-xs font-black uppercase tracking-[0.3em] hover:bg-cyan-400 transition-all duration-500"
                >
                  Explore Inventory
                </button>
                <button 
                  onClick={() => onNavigate('about')}
                  className="px-12 py-6 border border-white/10 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all"
                >
                  The Manifesto
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="w-full aspect-square glass-card rounded-full p-20 border-cyan-400/20 animate-spin-slow">
                <div className="w-full h-full border border-cyan-400/10 rounded-full flex items-center justify-center">
                  <div className="w-2/3 h-2/3 border border-cyan-400/20 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-[80px] font-black text-white leading-none">AI</div>
                <div className="text-[10px] mono text-cyan-400 tracking-[0.8em] uppercase mt-4">VibeKit OS v3</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>
      </section>

      {/* Inventory Preview */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-16">
            <div>
              <h2 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.6em] mb-6">// SECTOR_01</h2>
              <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">Product Lineage.</h3>
            </div>
            <button onClick={() => onNavigate('apps')} className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-cyan-400 transition-colors mt-8 md:mt-0">
              Full Archive [03] →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {APP_PROJECTS.map((app, idx) => (
              <div 
                key={app.id} 
                className="group relative cursor-pointer bg-[#020617] border border-white/5 p-12 overflow-hidden transition-all duration-700 hover:bg-slate-900"
                onClick={() => onNavigate('app-detail', app.id)}
              >
                <div className="relative z-10">
                  <div className="text-[10px] mono text-slate-600 mb-8 uppercase tracking-widest">ID_PROTOCOL: 0{idx+1}</div>
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tighter group-hover:text-cyan-400 transition-colors uppercase">{app.title}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-2 mb-12">{app.shortDescription}</p>
                  <div className="flex gap-2">
                    {app.techStack.slice(0, 2).map(t => (
                      <span key={t} className="text-[9px] mono border border-white/10 px-3 py-1 text-slate-400 group-hover:border-cyan-400/30 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
                {/* Image Reveal on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                  <img src={app.thumbnail} className="w-full h-full object-cover grayscale" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Stream */}
      <section className="py-40 bg-[#020617]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-32">
            <h2 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.8em] mb-8">Neural Stream</h2>
            <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase">Intelligence.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
            {AI_INSIGHTS.slice(0, 3).map((insight) => (
              <div key={insight.id} className="p-16 border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors group">
                <div className="text-[10px] mono text-cyan-400 uppercase tracking-widest mb-12">[{insight.category}]</div>
                <h4 className="text-2xl font-bold text-white mb-8 tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">{insight.title}</h4>
                <p className="text-slate-500 mb-12 text-sm font-light leading-relaxed">{insight.summary}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 border-b border-white/5 pb-2 inline-block">SOURCE: {insight.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
