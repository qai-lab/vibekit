
import React, { useState } from 'react';
import { Newspaper, Bell, Search, Filter } from 'lucide-react';
import { POSTS } from '../data';
import PostCard from '../components/PostCard';

const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ['Agents', 'Multimodal', 'Chips', 'Policy', 'Startups'];

  const filteredPosts = selectedCategory 
    ? POSTS.filter(p => p.category === selectedCategory)
    : POSTS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Main Feed */}
        <div className="lg:col-span-2 flex-grow">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-extrabold mb-4">AI Briefing</h1>
              <p className="text-brand-600 dark:text-brand-400">Curated insights on the most important shifts in AI.</p>
            </div>
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-bold border border-blue-200 dark:border-blue-800">
              <Bell size={16} />
              <span>Get Alerts</span>
            </button>
          </div>

          {/* Featured Quote or Spotlight */}
          <div className="mb-16 p-8 bg-gradient-to-br from-brand-900 to-brand-800 dark:from-blue-900/40 dark:to-purple-900/40 rounded-2xl border border-brand-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Newspaper size={120} />
             </div>
             <span className="inline-block px-2 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-6">
               Spotlight
             </span>
             <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
               "We are entering an era where the architect matters more than the builder."
             </h2>
             <p className="text-blue-200 text-sm">
               The latest trend report on Vibe Coding and the future of engineering. 
               <a href="#" className="ml-2 underline font-bold">Read the Whitepaper</a>
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 shrink-0">
          <div className="sticky top-24 space-y-12">
            {/* Search */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-6">Search Briefs</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Query insights..." 
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-6">Filter by Topic</h3>
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`text-left px-4 py-3 rounded-xl transition-all font-medium text-sm flex items-center justify-between ${
                    !selectedCategory ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-brand-100 dark:hover:bg-brand-800'
                  }`}
                >
                  <span>All Categories</span>
                  {!selectedCategory && <Filter size={14} />}
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-4 py-3 rounded-xl transition-all font-medium text-sm flex items-center justify-between ${
                      selectedCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-brand-100 dark:hover:bg-brand-800 text-brand-600 dark:text-brand-400'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[10px] font-bold opacity-50">
                      {POSTS.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Insights */}
            <div className="p-6 bg-brand-50 dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-2xl">
              <h3 className="text-sm font-bold mb-4">On the Radar</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5"></div>
                  <p className="text-xs font-medium text-brand-600 dark:text-brand-400">DeepSeek V3 Benchmarks (Expected Dec 20)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-xs font-medium text-brand-600 dark:text-brand-400">Apple Intelligence 2.0 Feature Drop</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Insights;
