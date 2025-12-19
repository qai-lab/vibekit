
import React from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';

export const InsightsIndex: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-24 text-center max-w-4xl mx-auto">
        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Deep Dives & Thinking</span>
        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">AI <span className="brand-text-gradient">Logic.</span></h1>
        <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed">
          The philosophy behind the code. Exploring how generative models are fundamentally altering the way we build systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {SITE_DATA.insights.map(post => (
          <Card key={post.id} item={post} />
        ))}
      </div>
    </div>
  );
};
