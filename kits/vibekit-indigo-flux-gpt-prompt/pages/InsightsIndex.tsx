
import React from 'react';
import { SITE_DATA } from '../data';
import { Card } from '../components/Card';

export const InsightsIndex: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white mb-4">AI <span className="text-indigo-500">Insights</span></h1>
        <p className="text-slate-400 text-lg">
          Strategic analysis and technical deep-dives into the future of software development, engineering management, and AI architecture.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SITE_DATA.insights.map(post => (
          <Card key={post.id} item={post} />
        ))}
      </div>
    </div>
  );
};
