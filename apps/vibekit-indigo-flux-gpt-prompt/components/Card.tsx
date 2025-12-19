
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentItem } from '../types';

interface CardProps {
  item: ContentItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const detailLink = `/${item.type}s/${item.id}`;
  
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
      <Link to={detailLink} className="block relative aspect-video overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {item.featured && (
            <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Featured</span>
          )}
          <span className="bg-slate-950/80 text-slate-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
            {item.type}
          </span>
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-medium text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">#{tag}</span>
          ))}
        </div>
        
        <Link to={detailLink}>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
            {item.title}
          </h3>
        </Link>
        
        <p className="mt-2 text-slate-400 text-sm line-clamp-2">
          {'shortDescription' in item ? item.shortDescription : 
           'showNotes' in item ? item.showNotes : 
           'content' in item ? item.content.substring(0, 100) : ''}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
          <span>{item.date}</span>
          <Link to={detailLink} className="text-indigo-500 font-semibold flex items-center gap-1 hover:text-indigo-400">
            View Details 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
