
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentItem } from '../types';

interface CardProps {
  item: ContentItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const detailLink = `/${item.type}s/${item.id}`;
  
  return (
    <div className="group relative aspect-[3/4] bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,0,85,0.2)]">
      <Link to={detailLink} className="block w-full h-full relative">
        {imageError ? (
          <div className="w-full h-full pulse-gradient opacity-20 flex items-center justify-center">
            <span className="font-black text-white/20 text-4xl italic uppercase tracking-tighter opacity-10">{item.title}</span>
          </div>
        ) : (
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
        
        {/* Top Badges */}
        <div className="absolute top-6 left-6 flex gap-2">
          {item.featured && (
            <span className="px-3 py-1 pulse-gradient rounded-full text-[9px] font-black text-white uppercase tracking-widest shadow-lg">Hot</span>
          )}
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/10">
            {item.type}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="text-2xl font-black text-white leading-tight mb-2 transform group-hover:-translate-y-2 transition-transform duration-500 uppercase tracking-tighter italic">
              {item.title}
            </h3>
            
            <p className="text-slate-400 text-xs font-bold line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              {'shortDescription' in item ? item.shortDescription : 
               'showNotes' in item ? item.showNotes : 
               'content' in item ? item.content.substring(0, 80) + '...' : ''}
            </p>

            <div className="mt-6 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[8px] font-black text-white/50 border border-white/10 px-2 py-1 rounded-full uppercase tracking-widest">#{tag}</span>
              ))}
            </div>
        </div>
      </Link>
    </div>
  );
};
