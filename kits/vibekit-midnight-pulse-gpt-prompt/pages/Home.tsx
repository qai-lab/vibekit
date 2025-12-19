
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Podcast as PodcastIcon, Newspaper } from 'lucide-react';
import { APPS, EPISODES, POSTS } from '../data';
import AppCard from '../components/AppCard';
import EpisodeCard from '../components/EpisodeCard';
import PostCard from '../components/PostCard';

const Home: React.FC = () => {
  const featuredApps = APPS.slice(0, 3);
  const latestEpisodes = EPISODES.slice(0, 2);
  const latestPosts = POSTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200 dark:border-blue-800">
            <Sparkles size={14} />
            <span>Building the AI-Native Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            VibeKit <br />
            <span className="vibe-text-gradient">Showcase.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-600 dark:text-brand-400 mb-10 leading-relaxed">
            I build apps with intuition, AI agents, and high-quality prompts. 
            Exploring the boundary where code becomes a vibe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/apps" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>View Apps</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/podcast" 
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-brand-900 text-brand-900 dark:text-white border border-brand-200 dark:border-brand-800 rounded-xl font-bold hover:bg-brand-50 dark:hover:bg-brand-800 transition-all flex items-center justify-center space-x-2"
            >
              <PodcastIcon size={20} className="text-blue-500" />
              <span>Listen to Podcast</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
              <Zap className="text-yellow-500" />
              <span>Latest Creations</span>
            </h2>
            <p className="text-brand-600 dark:text-brand-400">Experimental apps and production tools built with AI.</p>
          </div>
          <Link to="/apps" className="text-blue-500 font-bold text-sm hover:underline flex items-center">
            All Apps <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Podcast + News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Latest Episodes */}
          <div>
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl font-bold flex items-center space-x-3">
                <PodcastIcon className="text-red-500" />
                <span>Podcast Highlights</span>
              </h2>
              <Link to="/podcast" className="text-blue-500 font-bold text-sm hover:underline">
                Listen All
              </Link>
            </div>
            <div className="space-y-6">
              {latestEpisodes.map(ep => (
                <EpisodeCard key={ep.id} episode={ep} />
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div>
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl font-bold flex items-center space-x-3">
                <Newspaper className="text-green-500" />
                <span>AI Insights Feed</span>
              </h2>
              <Link to="/insights" className="text-blue-500 font-bold text-sm hover:underline">
                Full Briefing
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {latestPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 dark:bg-blue-600 rounded-3xl p-10 md:p-16 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
            <Sparkles size={160} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Stay ahead of the vibe.</h2>
          <p className="max-w-xl mx-auto text-blue-100 mb-10 text-lg">
            Join 5,000+ builders getting weekly insights on agentic workflows and AI product design.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-blue-200"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
