
import React, { useState, useMemo } from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';

export const Apps: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredApps = useMemo(() => {
    return SITE_DATA.apps.filter(app => {
      const matchesSearch = app.title.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !selectedTag || app.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <header className="mb-20">
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter italic uppercase">Market.</h1>
        <div className="flex flex-wrap gap-2 mt-10">
          <button 
            onClick={() => setSelectedTag(null)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
              selectedTag === null ? 'bg-white text-black border-white' : 'border-white/10 text-slate-500 hover:text-white'
            }`}
          >
            All
          </button>
          {SITE_DATA.tags.map(tag => (
            <button 
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                selectedTag === tag ? 'bg-white text-black border-white' : 'border-white/10 text-slate-500 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredApps.map(app => (
          <Card key={app.id} item={app} />
        ))}
      </div>
    </div>
  );
};
