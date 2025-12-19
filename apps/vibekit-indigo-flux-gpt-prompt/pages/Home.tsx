
import React from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const featuredItems = [
    ...SITE_DATA.apps.filter(a => a.featured),
    ...SITE_DATA.podcasts.filter(p => p.featured),
    ...SITE_DATA.insights.filter(i => i.featured)
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-indigo-950 p-8 md:p-16 mb-20">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-300 uppercase bg-indigo-900/50 rounded-full border border-indigo-500/30">
            Now Live: The Vibe Era
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Crafting Software in the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Age of Intelligence.</span>
          </h1>
          <p className="text-xl text-indigo-100/70 mb-10 leading-relaxed">
            A curated showcase of applications, deep conversations, and technical insights 
            dedicated to the philosophy of vibe coding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apps" className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-500/20">
              Explore Apps
            </Link>
            <Link to="/podcasts" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all border border-indigo-400/30">
              Listen to Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Editor's Picks</h2>
            <p className="text-slate-400">The most influential content of the week.</p>
          </div>
          <Link to="/apps" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">View All Content →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map(item => (
            <Card key={`${item.type}-${item.id}`} item={item} />
          ))}
        </div>
      </section>

      {/* Stats/Proof Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 border-y border-slate-900">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">12</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Vibe Apps</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">45+</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Podcasts</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">200k+</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Readers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">1k+</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Prompts</div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-20 p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-white mb-2">Stay in the Flow</h2>
          <p className="text-slate-400">Join 15,000+ developers receiving weekly prompts, lessons, and vibe updates.</p>
        </div>
        <form className="w-full max-w-md flex gap-2">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-grow bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
          />
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl transition-all">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};
