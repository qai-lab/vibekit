import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Warehouse, LayoutGrid, List, Sparkles } from 'lucide-react';
import { APPS } from '../data';
import AppCard from '../components/AppCard';

const Apps: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'Newest' | 'Popular'>('Newest');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    APPS.forEach(app => app.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredApps = useMemo(() => {
    return APPS.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           app.pitch.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || app.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    }).sort((a, b) => {
      if (sortBy === 'Newest') return b.id.localeCompare(a.id);
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, selectedTag, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-20 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-50 dark:bg-brand-900 text-brand-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 border border-brand-100 dark:border-brand-800 shadow-sm">
          <Warehouse size={12} />
          <span>ACTIVE BUILDS</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">The Workshop.</h1>
        <p className="text-xl text-brand-600 dark:text-brand-400 max-w-2xl leading-relaxed font-medium">
          A showcase of prototypes and platforms cultivated in our community experiments. Open source and open for use.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mb-12">
        <div className="relative flex-grow group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-haven-amber rounded-3xl blur-md opacity-10 group-focus-within:opacity-30 transition-opacity"></div>
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-400" size={20} />
            <input 
              type="text"
              placeholder="Search workshop archives..."
              className="w-full pl-16 pr-6 py-5 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-3xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-lg font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="relative group">
            <select 
              className="appearance-none bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-3xl px-8 py-5 pr-14 focus:outline-none focus:ring-4 focus:ring-brand-500/10 font-black uppercase tracking-widest text-xs cursor-pointer transition-all hover:bg-brand-50 shadow-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option>Newest</option>
              <option>Popular</option>
            </select>
            <SlidersHorizontal className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" size={18} />
          </div>
        </div>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-3 mb-16">
        <button 
          onClick={() => setSelectedTag(null)}
          className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
            !selectedTag 
              ? 'bg-brand-500 border-brand-500 text-white shadow-xl shadow-brand-500/20' 
              : 'bg-white dark:bg-brand-900 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 hover:border-brand-400'
          }`}
        >
          All Projects
        </button>
        {allTags.map(tag => (
          <button 
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
              selectedTag === tag
                ? 'bg-brand-500 border-brand-500 text-white shadow-xl shadow-brand-500/20' 
                : 'bg-white dark:bg-brand-900 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 hover:border-brand-400'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-brand-50 dark:bg-brand-900/40 rounded-[3rem] border-2 border-dashed border-brand-200 dark:border-brand-800">
          <div className="w-20 h-20 bg-white dark:bg-brand-900 rounded-full flex items-center justify-center text-brand-200 mx-auto mb-8">
             <Warehouse size={40} />
          </div>
          <p className="text-2xl font-black mb-6 text-brand-950 dark:text-white">Workshop query empty.</p>
          <button 
            onClick={() => {setSearchQuery(''); setSelectedTag(null);}}
            className="px-8 py-3 bg-brand-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-brand-500/20 transition-all hover:scale-105"
          >
            Reset Archives
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-32 p-12 bg-haven-amber/10 rounded-[3rem] border border-haven-amber/20 text-center">
        <h3 className="text-2xl font-black mb-4 flex items-center justify-center space-x-3">
          <Sparkles className="text-haven-amber" />
          <span>Have a build to share?</span>
        </h3>
        <p className="text-brand-700 dark:text-brand-400 font-medium mb-8 max-w-xl mx-auto">
          We are always looking for community contributions to feature in the Workshop.
        </p>
        <button className="px-10 py-4 bg-haven-amber text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-haven-amber/20 transition-all hover:bg-haven-amber/90">
          Submit to Workshop
        </button>
      </div>
    </div>
  );
};

export default Apps;