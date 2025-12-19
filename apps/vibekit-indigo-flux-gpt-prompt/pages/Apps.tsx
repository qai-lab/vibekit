
import React, { useState, useMemo } from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';

export const Apps: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredApps = useMemo(() => {
    return SITE_DATA.apps.filter(app => {
      const matchesSearch = app.title.toLowerCase().includes(search.toLowerCase()) || 
                            app.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !selectedTag || app.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">Vibe-Coded <span className="text-indigo-500">Apps</span></h1>
        <p className="text-slate-400 max-w-2xl text-lg">
          Practical demonstrations of AI-assisted engineering. Each app includes the original prompts and technical lessons learned during development.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Search apps..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-12 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              selectedTag === null ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            All Tags
          </button>
          {SITE_DATA.tags.map(tag => (
            <button 
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                selectedTag === tag ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map(app => (
            <Card key={app.id} item={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-slate-900/50 rounded-3xl border border-slate-800">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-xl font-bold text-white mb-2">No apps found</h3>
          <p className="text-slate-400">Try adjusting your search or filters.</p>
          <button 
            onClick={() => {setSearch(''); setSelectedTag(null);}}
            className="mt-6 text-indigo-500 font-bold hover:text-indigo-400"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};
