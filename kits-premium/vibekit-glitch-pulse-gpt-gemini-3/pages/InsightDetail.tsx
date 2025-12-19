
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data';

export const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [imageError, setImageError] = useState(false);
  const post = SITE_DATA.insights.find(i => i.id === id);

  if (!post) return <div className="p-20 text-white font-black text-center text-4xl">Insight not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-16 text-center">
        <Link to="/insights" className="group inline-flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-all font-black text-xs uppercase tracking-widest">
           <div className="w-8 h-8 rounded-full glass-island flex items-center justify-center group-hover:scale-110 transition-transform">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
           </div>
           Back to Insights
        </Link>
        
        <div className="mb-8">
            <span className="px-5 py-2 pulse-gradient text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg">{post.category}</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.9] italic">{post.title}</h1>
        
        <div className="flex justify-center items-center gap-6 text-slate-400 text-xs font-black uppercase tracking-widest">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full pulse-gradient p-0.5">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white font-black text-[10px]">
                   {post.author.split(' ').map(n => n[0]).join('')}
                </div>
             </div>
             <span>Written by <span className="text-white">{post.author}</span></span>
          </div>
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
          <span>{post.date}</span>
        </div>
      </header>

      <div className="relative mb-24 group bg-zinc-900 border border-white/5 rounded-[3.5rem] overflow-hidden">
        <div className="absolute -inset-4 pulse-gradient blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
        {imageError ? (
          <div className="relative w-full aspect-[21/9] pulse-gradient opacity-10" />
        ) : (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            onError={() => setImageError(true)}
            className="relative w-full aspect-[21/9] object-cover rounded-[3.5rem] shadow-2xl border border-white/10" 
          />
        )}
      </div>

      <article className="max-w-3xl mx-auto">
        <div className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed whitespace-pre-wrap selection:bg-pink-500 selection:text-white">
          {post.content}
        </div>

        <div className="mt-24 pt-12 border-t border-white/5">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 mb-8">Metadata & Tags</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span key={tag} className="px-6 py-3 bg-zinc-900 border border-white/5 text-slate-500 font-black rounded-2xl text-xs uppercase tracking-widest hover:text-white hover:border-pink-500/30 transition-all cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-24 glass-island p-12 rounded-[3.5rem] border border-white/10 text-center">
            <h3 className="text-3xl font-black text-white mb-6">Enjoyed the vibe?</h3>
            <p className="text-slate-500 mb-10 font-bold">Share this insight with your network or join the discussion.</p>
            <div className="flex justify-center gap-4">
                 <button className="px-10 py-5 pulse-gradient text-white font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">Share Insight</button>
            </div>
        </div>
      </article>
    </div>
  );
};
