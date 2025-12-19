
import React from 'react';
import { APP_PROJECTS, PODCAST_EPISODES, AI_INSIGHTS } from '../constants';

interface HomeProps {
  onNavigate: (path: string, id?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 vibe-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            Creative Coding × AI
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
            VibeKit: Where <br />
            <span className="text-indigo-600">Creativity</span> Meets Code
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            Showcasing AI-driven apps built with innovative prompts and human taste. We build for the vibe, designed to inspire and simplify.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('apps')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:shadow-lg hover:scale-105 transition-all"
            >
              Explore My Apps
            </button>
            <button 
              onClick={() => onNavigate('podcast')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Listen to Podcast
            </button>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Apps</h2>
              <p className="text-slate-500">A collection of my recent AI experiments and tools.</p>
            </div>
            <button 
              onClick={() => onNavigate('apps')}
              className="hidden md:block text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              View all apps →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APP_PROJECTS.slice(0, 3).map((app) => (
              <div 
                key={app.id} 
                className="group cursor-pointer"
                onClick={() => onNavigate('app-detail', app.id)}
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-sm border border-slate-100">
                  <img 
                    src={app.thumbnail} 
                    alt={app.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{app.title}</h3>
                <p className="text-slate-600 line-clamp-2">{app.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Teaser */}
      <section className="py-24 vibe-gradient border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="w-full aspect-square rounded-3xl bg-slate-900 flex items-center justify-center p-12 relative shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">The VibeKit Podcast</h3>
                  <p className="text-indigo-300">Talking with thinkers and makers about the future of AI.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Newest Episode</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{PODCAST_EPISODES[0].title}</h2>
              <p className="text-slate-600 text-lg mb-8">{PODCAST_EPISODES[0].description}</p>
              <div className="flex items-center gap-4 mb-8">
                <img src="https://picsum.photos/seed/guest/48/48" alt="Guest" className="w-12 h-12 rounded-full ring-2 ring-indigo-100" />
                <div>
                  <p className="font-semibold text-slate-900">{PODCAST_EPISODES[0].guest}</p>
                  <p className="text-sm text-slate-500">{PODCAST_EPISODES[0].date} • {PODCAST_EPISODES[0].duration}</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('podcast')}
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
              >
                Listen to Episodes
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest AI Insights</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Staying ahead of the curve. Here's what's currently shaping the AI landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_INSIGHTS.slice(0, 3).map((insight) => (
              <div key={insight.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase mb-4">
                  {insight.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">{insight.title}</h3>
                <p className="text-slate-600 mb-6 text-sm line-clamp-3">{insight.summary}</p>
                <a 
                  href={insight.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold text-sm hover:underline"
                >
                  Read from {insight.source} →
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('insights')}
              className="px-8 py-3 bg-white border border-slate-200 text-slate-800 rounded-2xl font-semibold hover:bg-slate-50 transition-all shadow-sm"
            >
              Explore All Insights
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
