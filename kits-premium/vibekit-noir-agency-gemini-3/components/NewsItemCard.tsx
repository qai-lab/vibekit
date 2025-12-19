
import React from 'react';
import { NewsItem } from '../types';

interface NewsItemCardProps {
  news: NewsItem;
}

export const NewsItemCard: React.FC<NewsItemCardProps> = ({ news }) => {
  return (
    <div className="p-12 bg-black border border-zinc-900 hover:border-white transition-all duration-700 group flex flex-col h-full">
      <div className="flex justify-between items-start mb-12">
        <span className="text-[10px] font-bold text-[#FF0033] uppercase tracking-[0.4em]">{news.source}</span>
        <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{news.date}</span>
      </div>
      <h4 className="text-4xl font-bold text-white mb-8 tracking-tighter leading-none group-hover:text-[#FF0033] transition-colors">{news.headline.toUpperCase()}</h4>
      <p className="text-zinc-500 font-light text-lg mb-12 flex-1 leading-tight">{news.summary}</p>
      <div className="pt-8 border-t border-zinc-900">
        <a href={news.url} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white flex items-center gap-4 group-hover:gap-8 transition-all">
          Read Story
          <div className="w-12 h-px bg-zinc-800 group-hover:bg-[#FF0033]"></div>
        </a>
      </div>
    </div>
  );
};
