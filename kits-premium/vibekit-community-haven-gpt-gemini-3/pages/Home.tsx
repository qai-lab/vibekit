import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Warehouse, Radio, Sprout, Leaf, Users, Heart } from 'lucide-react';
import { APPS, EPISODES, POSTS } from '../data';
import AppCard from '../components/AppCard';
import EpisodeCard from '../components/EpisodeCard';
import PostCard from '../components/PostCard';

const Home: React.FC = () => {
  const featuredApps = APPS.slice(0, 3);
  const latestEpisodes = EPISODES.slice(0, 2);
  const latestPosts = POSTS.slice(0, 4);

  return (
    <div className="space-y-40 pb-40 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/10 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-haven-amber/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-brand-100 dark:border-brand-800 shadow-sm">
            <Sparkles size={14} className="text-haven-amber" />
            <span>Cultivating the Next Era of Builders</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.95] text-brand-950 dark:text-white">
            Collective <br />
            <span className="vibe-text-gradient italic">Growth.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-brand-700 dark:text-brand-400 mb-14 leading-relaxed font-medium">
            A sanctuary for AI-native architects. We share tools, seeds of thought, and community wisdom in a regenerative hub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/apps" 
              className="w-full sm:w-auto px-12 py-5 bg-brand-500 hover:bg-brand-600 text-white rounded-3xl font-black uppercase tracking-widest shadow-2xl shadow-brand-500/20 transition-all flex items-center justify-center space-x-3 group"
            >
              <span>The Workshop</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="w-full sm:w-auto px-12 py-5 bg-white dark:bg-brand-900 text-brand-950 dark:text-white border-2 border-brand-100 dark:border-brand-800 rounded-3xl font-black uppercase tracking-widest hover:bg-brand-50 dark:hover:bg-brand-800 transition-all flex items-center justify-center space-x-3 shadow-sm"
            >
              <Users size={20} className="text-haven-amber" />
              <span>Meet The Architect</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-10 bg-white dark:bg-brand-900/30 rounded-[3rem] border border-brand-50 dark:border-brand-800 shadow-sm">
            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-500 mx-auto mb-8 shadow-inner">
              <Leaf size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4">Organic Growth</h3>
            <p className="text-brand-600 dark:text-brand-400 font-medium">We prioritize sustainable development over rapid, brittle scaling.</p>
          </div>
          <div className="p-10 bg-white dark:bg-brand-900/30 rounded-[3rem] border border-brand-50 dark:border-brand-800 shadow-sm">
            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-500 mx-auto mb-8 shadow-inner">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4">Human Heart</h3>
            <p className="text-brand-600 dark:text-brand-400 font-medium">AI is the tool, but community outcomes are the ultimate mission.</p>
          </div>
          <div className="p-10 bg-white dark:bg-brand-900/30 rounded-[3rem] border border-brand-50 dark:border-brand-800 shadow-sm">
            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-500 mx-auto mb-8 shadow-inner">
              <Warehouse size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4">Open Works</h3>
            <p className="text-brand-600 dark:text-brand-400 font-medium">Radical transparency in our code, prompts, and processes.</p>
          </div>
        </div>
      </section>

      {/* Featured Workshop Apps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-50 dark:bg-brand-900 text-brand-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 border border-brand-100 dark:border-brand-800">
              <Warehouse size={12} />
              <span>THE WORKSHOP</span>
            </div>
            <h2 className="text-5xl font-black mb-6 text-brand-950 dark:text-white">Active Creations</h2>
            <p className="text-brand-600 dark:text-brand-400 text-xl font-medium">Explore what's currently in bloom at the Haven.</p>
          </div>
          <Link to="/apps" className="px-8 py-3 bg-brand-50 dark:bg-brand-900 text-brand-600 dark:text-brand-300 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-100 transition-all border border-brand-100 dark:border-brand-800 flex items-center">
            View All Builds <ArrowRight size={16} className="ml-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Podcast + Greenhouse News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Latest Episodes (The Parlor) */}
          <div>
            <div className="flex justify-between items-end mb-16">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-haven-amber/10 text-haven-amber text-[10px] font-black uppercase tracking-widest rounded-full mb-4 border border-haven-amber/20">
                  <Radio size={12} />
                  <span>THE PARLOR</span>
                </div>
                <h2 className="text-4xl font-black text-brand-950 dark:text-white">Voice of Haven</h2>
              </div>
              <Link to="/podcast" className="text-brand-500 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                Full Parlor
              </Link>
            </div>
            <div className="space-y-10">
              {latestEpisodes.map(ep => (
                <EpisodeCard key={ep.id} episode={ep} />
              ))}
            </div>
          </div>

          {/* AI Greenhouse (Insights) */}
          <div>
            <div className="flex justify-between items-end mb-16">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-50 dark:bg-brand-900 text-brand-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-4 border border-brand-100 dark:border-brand-800">
                  <Sprout size={12} />
                  <span>THE GREENHOUSE</span>
                </div>
                <h2 className="text-4xl font-black text-brand-950 dark:text-white">Growth Reports</h2>
              </div>
              <Link to="/insights" className="text-brand-500 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                Read More
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {latestPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Hub Bloom Newsletter CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 dark:bg-brand-950 rounded-[4rem] p-16 md:p-32 relative overflow-hidden text-center text-white shadow-[0_50px_100px_-20px_rgba(20,83,45,0.3)]">
          <div className="absolute top-0 right-0 p-12 text-brand-500/10 pointer-events-none -rotate-12 translate-x-16 -translate-y-16">
            <Leaf size={400} />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">Join the Bloom.</h2>
            <p className="max-w-2xl mx-auto text-brand-300 mb-14 text-xl md:text-2xl leading-relaxed font-medium">
              We send out a weekly growth report with new workshop builds and greenhouse insights. No fluff, just growth.
            </p>
            <div className="max-w-lg mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 bg-white/5 p-2 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
              <input 
                type="email" 
                placeholder="architect@haven.com" 
                className="flex-grow bg-transparent px-8 py-5 focus:outline-none placeholder:text-brand-600 text-lg transition-all"
              />
              <button className="px-12 py-5 bg-brand-500 text-white font-black uppercase tracking-widest rounded-[2rem] hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 text-sm">
                Plant a Seed
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;