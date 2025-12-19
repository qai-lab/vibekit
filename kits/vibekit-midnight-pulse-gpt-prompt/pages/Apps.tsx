
import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
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
      return a.name.localeCompare(b.name); // Mocking popular with alpha
    });
  }, [searchQuery, selectedTag, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-4">App Showcase</h1>
        <p className="text-brand-600 dark:text-brand-400 max-w-2xl">
          A collection of experiments, tools, and platforms built during my vibe coding journey.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-10">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400" size={20} />
          <input 
            type="text"
            placeholder="Search apps, tags, tech..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <div className="relative">
            <select 
              className="appearance-none bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl px-5 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option>Newest</option>
              <option>Popular</option>
            </select>
            <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" size={16} />
          </div>
        </div>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button 
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
            !selectedTag 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
              : 'bg-white dark:bg-brand-900 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800'
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button 
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              selectedTag === tag
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-white dark:bg-brand-900 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-brand-500">No apps found matching your filters.</p>
          <button 
            onClick={() => {setSearchQuery(''); setSelectedTag(null);}}
            className="mt-4 text-blue-500 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;
