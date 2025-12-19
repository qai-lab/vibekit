
import React, { useState } from 'react';
// Added missing Link import
import { Link } from 'react-router-dom';
import { Newspaper, Bell, Search, Filter, Sprout, Leaf, ArrowRight } from 'lucide-react';
import { POSTS } from '../data';
import PostCard from '../components/PostCard';

const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ['Agents', 'Multimodal', 'Chips', 'Policy', 'Startups'];

  const filteredPosts = selectedCategory 
    ? POSTS.filter(p => p.category === selectedCategory)
    : POSTS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col lg:flex-row gap-24">
        
        {/* Main Feed */}
        <div className="lg:col-span-2 flex-grow">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-20 gap-8">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-50 dark:bg-brand-900 text-brand-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 border border-brand-100 dark:border-brand-800">
                <Sprout size={12} />
                <span>GROWTH LOGS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">The Greenhouse.</h1>
              <p className="text-xl text-brand-600 dark:text-brand-400 font-medium leading-relaxed max-w-lg">
                Fresh insights on the evolving AI landscape, curated for community architects.
              </p>
            </div>
            <button className="flex items-center space-x-3 px-8 py-4 bg-brand-500 text-white rounded-3xl text-xs font-black uppercase tracking-widest shadow-xl shadow-brand-500/20 hover:bg-brand-600 transition-all">
              <Bell size={18} />
              <span>Subscribe to Blooms</span>
            </button>
          </div>

          {/* Featured Greenhouse Spotlight */}
          <div className="mb-20 p-12 bg-brand-950 rounded-[3rem] border border-brand-800 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-12 text-brand-500/10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               <Leaf size={240} />
             </div>
             <div className="relative z-10">
               <span className="inline-block px-4 py-1.5 bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-8 shadow-lg">
                 ROOT INSIGHT
               </span>
               <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                 "Taste is the new <span className="vibe-text-gradient italic">Technical Debt.</span>"
               </h2>
               <p className="text-brand-300 text-xl font-medium mb-12 max-w-xl leading-relaxed">
                 A fundamental shift is occurring. How we design our interactions matters more than the efficiency of our code.
               </p>
               <Link to="#" className="inline-flex items-center text-brand-400 font-black text-xs uppercase tracking-[0.2em] hover:text-white transition-colors group/link">
                 Download Growth Report <ArrowRight size={16} className="ml-3 group-hover/link:translate-x-2 transition-transform" />
               </Link>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-96 shrink-0">
          <div className="sticky top-28 space-y-16">
            {/* Search */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-950 dark:text-white mb-8">Greenhouse Search</h3>
              <div className="relative group">
                <div className="absolute -inset-1 bg-brand-500/10 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Query archives..." 
                    className="w-full pl-12 pr-6 py-4 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-950 dark:text-white mb-8">Greenhouse Sections</h3>
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`text-left px-6 py-4 rounded-2xl transition-all font-black uppercase tracking-widest text-[10px] flex items-center justify-between border ${
                    !selectedCategory 
                      ? 'bg-brand-500 text-white border-brand-500 shadow-xl shadow-brand-500/20' 
                      : 'hover:bg-brand-50 dark:hover:bg-brand-800 border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400'
                  }`}
                >
                  <span>All Seeds</span>
                  {!selectedCategory && <Filter size={14} />}
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-6 py-4 rounded-2xl transition-all font-black uppercase tracking-widest text-[10px] flex items-center justify-between border ${
                      selectedCategory === cat 
                        ? 'bg-brand-500 text-white border-brand-500 shadow-xl shadow-brand-500/20' 
                        : 'hover:bg-brand-50 dark:hover:bg-brand-800 border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[10px] font-black opacity-40 px-2 py-0.5 bg-brand-50 dark:bg-brand-800 rounded-md">
                      {POSTS.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Insights */}
            <div className="p-10 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-[2.5rem] shadow-xl shadow-brand-500/5">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 flex items-center">
                <Sprout size={16} className="mr-3 text-brand-500" />
                Coming into Bloom
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-haven-amber mt-1.5 shadow-lg shadow-haven-amber/40"></div>
                  <div>
                    <p className="text-xs font-black text-brand-950 dark:text-white uppercase tracking-widest mb-1">Dec 20</p>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">DeepSeek V3 Benchmarks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-500 mt-1.5 shadow-lg shadow-brand-500/40"></div>
                  <div>
                    <p className="text-xs font-black text-brand-950 dark:text-white uppercase tracking-widest mb-1">Jan 05</p>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">Apple Intelligence 2.0</p>
                  </div>
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
