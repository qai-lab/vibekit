
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data';

export const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = SITE_DATA.insights.find(i => i.id === id);

  if (!post) return <div className="p-12 text-white">Post not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <Link to="/insights" className="text-indigo-500 font-bold text-sm uppercase tracking-widest mb-4 inline-block">← Back to Insights</Link>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">{post.title}</h1>
        <div className="flex justify-center items-center gap-4 text-slate-500 text-sm font-medium">
          <span>By <span className="text-white">{post.author}</span></span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 rounded">{post.category}</span>
        </div>
      </header>

      <img src={post.imageUrl} alt={post.title} className="w-full aspect-[21/9] object-cover rounded-3xl mb-12 shadow-2xl" />

      <article className="prose prose-invert prose-indigo max-w-none text-slate-300 text-lg leading-relaxed whitespace-pre-wrap">
        {post.content}
      </article>

      <div className="mt-16 pt-8 border-t border-slate-900">
        <h3 className="text-xl font-bold text-white mb-4">Related Tags</h3>
        <div className="flex gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-lg text-sm">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
