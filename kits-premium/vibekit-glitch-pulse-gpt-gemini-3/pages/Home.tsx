
import React, { useState } from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { ContentItem } from '../types';

const StoryCircle: React.FC<{ item: ContentItem }> = ({ item }) => {
  const [error, setError] = useState(false);
  
  return (
    <Link to={`/${item.type}s/${item.id}`} className="shrink-0 flex flex-col items-center gap-4 group">
      <div className="w-24 h-24 rounded-full p-1 pulse-gradient shadow-xl transform transition-all duration-500 group-hover:scale-110 active:scale-95">
        <div className="w-full h-full bg-black rounded-full overflow-hidden border-4 border-black ring-1 ring-white/10 flex items-center justify-center">
          {error ? (
            <span className="font-black text-white/20 text-xs uppercase italic">{item.title.charAt(0)}</span>
          ) : (
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              onError={() => setError(true)}
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
            />
          )}
        </div>
      </div>
      <span className="text-[9px] font-black text-slate-500 group-hover:text-white transition-colors truncate max-w-[100px] uppercase tracking-widest">{item.title}</span>
    </Link>
  );
};

export const Home: React.FC = () => {
  const allItems = [
    ...SITE_DATA.apps,
    ...SITE_DATA.podcasts,
    ...SITE_DATA.insights
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featured = allItems.filter(i => i.featured);
  const stories = allItems.slice(0, 10);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      {/* Stories Bar */}
      <div className="mb-24 mt-8">
        <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 ml-2 flex items-center gap-4">
          <span className="w-8 h-px bg-slate-800"></span> Live Streams
        </h2>
        <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-6 -mx-2 px-2 scroll-smooth">
          {stories.map(item => (
            <StoryCircle key={item.id} item={item} />
          ))}
          <Link to="/join" className="shrink-0 flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-white/10 transition-all cursor-pointer shadow-lg">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" /></svg>
              </div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Apply</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <header className="mb-32">
        <div className="relative">
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h1 className="text-8xl md:text-[12rem] font-black text-white leading-[0.8] tracking-tighter italic uppercase relative z-10">
            Feed <br />
            <span className="pulse-text-gradient">Your</span> <br />
            Mind.
          </h1>
        </div>
        
        <div className="mt-16 max-w-2xl">
           <p className="text-2xl md:text-3xl text-slate-400 font-bold leading-tight">
             Curating the high-frequency era. Every pixel is proof of the <span className="text-white underline decoration-pink-500/50 decoration-4 underline-offset-8">VibeKit</span> philosophy. 
             Join the generation of semantic builders.
           </p>
           <div className="mt-12 flex gap-6">
              <Link to="/apps" className="px-12 py-5 pulse-gradient rounded-full font-black text-white text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-600/20">
                Showcase
              </Link>
              <Link to="/about" className="px-12 py-5 glass-island rounded-full font-black text-white text-sm uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all">
                Our Story
              </Link>
           </div>
        </div>
      </header>

      {/* Featured Section */}
      <section className="mb-40">
        <div className="flex items-end justify-between mb-16 px-2">
            <div>
              <span className="text-pink-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Selected Works</span>
              <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">Prime Picks</h2>
            </div>
            <Link to="/apps" className="text-slate-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors pb-1 border-b border-slate-800">Browse All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 md:row-span-2">
            <Card item={featured[0] || SITE_DATA.apps[0]} />
          </div>
          {featured.slice(1, 5).map((item) => (
            <Card key={`${item.type}-${item.id}`} item={item} />
          ))}
        </div>
      </section>

      {/* Philosophy Section - Inline */}
      <section className="relative overflow-hidden py-32 bg-zinc-950 rounded-[4rem] border border-white/5 mb-40">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-12 text-center relative z-10">
           <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase italic">Software is a <br /><span className="pulse-text-gradient">Performance.</span></h2>
           <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed mb-12">
             We don't ship features. We ship frequencies. Every line of generated code is a conversation between human intent and machine logic.
           </p>
           <Link to="/insights/the-vibe-manifesto" className="text-white font-black uppercase text-sm tracking-[0.3em] hover:text-pink-500 transition-all inline-block border-b-2 border-pink-500 pb-2">Read the Manifesto</Link>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="text-center">
         <div className="inline-block p-1 pulse-gradient rounded-[3rem] shadow-2xl shadow-pink-600/10 transform hover:scale-[1.01] transition-all">
            <div className="bg-black px-16 py-20 rounded-[2.9rem] max-w-3xl">
               <h2 className="text-5xl font-black text-white mb-8 tracking-tighter italic uppercase">Stay Pulsing.</h2>
               <p className="text-slate-500 font-bold mb-12 text-lg">Weekly prompt drops and engineering deep-dives.</p>
               <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Input frequency (email)" 
                    className="flex-grow bg-zinc-900 border border-white/10 rounded-2xl px-8 py-5 text-white font-bold focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <button className="px-12 py-5 pulse-gradient rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl">Connect</button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};
