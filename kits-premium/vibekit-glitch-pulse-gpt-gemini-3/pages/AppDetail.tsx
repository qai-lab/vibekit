
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data';

export const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [imageError, setImageError] = useState(false);
  const app = SITE_DATA.apps.find(a => a.id === id);

  if (!app) return <div className="text-white p-20 text-center font-black">App not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden mb-20 bg-zinc-900 border border-white/5">
        {imageError ? (
          <div className="w-full h-full pulse-gradient opacity-20" />
        ) : (
          <img 
            src={app.imageUrl} 
            alt={app.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12">
          <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">{app.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-24">
          <section>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block">Concept</span>
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">{app.description}</p>
            
            <div className="flex gap-4 mt-12">
              {app.links.map(link => (
                <a key={link.label} href={link.url} className="px-10 py-4 bg-white text-black font-black rounded-full uppercase text-xs tracking-widest hover:scale-105 transition-all">
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className="bg-zinc-900/50 p-12 rounded-[3rem] border border-white/5">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pink-500 mb-10 italic">System Prompts</h2>
            <div className="space-y-6">
              {app.prompts.map((prompt, i) => (
                <div key={i} className="bg-black p-8 rounded-2xl border border-white/5 font-mono text-sm text-slate-400 relative">
                  <span className="text-pink-500 absolute -left-2 top-8 text-2xl font-black italic">#{i+1}</span>
                  {prompt}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-12">
          <div className="p-10 bg-white text-black rounded-[3rem]">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-slate-400">Engineering Log</h3>
            <ul className="space-y-6">
              {app.lessons.map((lesson, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-black text-xs">0{i+1}.</span>
                  <p className="text-sm font-bold leading-snug">{lesson}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-10 glass-island rounded-[3rem] text-center border-white/20">
             <h3 className="text-xl font-black text-white mb-4 italic uppercase">Get Beta Access</h3>
             <p className="text-slate-500 text-xs font-bold mb-8 uppercase tracking-widest">Limited to first 500 pulses.</p>
             <button className="w-full py-4 pulse-gradient rounded-full text-white font-black uppercase text-xs tracking-widest shadow-lg shadow-red-600/20">Connect Wallet</button>
          </div>
        </aside>
      </div>
    </div>
  );
};
