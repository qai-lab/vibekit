
import React from 'react';
import { NewsItem } from '../types';

interface NewsItemCardProps {
  news: NewsItem;
}

export const NewsItemCard: React.FC<NewsItemCardProps> = ({ news }) => {
  return (
    <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-indigo-500/30 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-indigo-500/20">{news.source}</span>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{news.date}</span>
      </div>
      <h4 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-400 transition-colors">{news.headline}</h4>
      <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">{news.summary}</p>
      <div className="pt-6 border-t border-slate-800">
        <a href={news.url} className="text-xs font-black uppercase tracking-widest text-slate-300 hover:text-indigo-400 flex items-center gap-2 transition-colors">
          Read Full Report 
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  );
};
