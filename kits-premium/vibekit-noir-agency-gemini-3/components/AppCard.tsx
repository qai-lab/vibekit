
import React, { useState } from 'react';
import { AppProject } from '../types';

interface AppCardProps {
  app: AppProject;
  onClick: () => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="group relative cursor-pointer flex flex-col bg-black overflow-hidden transition-all duration-700 pb-4 border-b border-zinc-900 hover:border-white"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-zinc-800">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-zinc-700">Loading_Asset</span>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-800 bg-zinc-950">
            <span className="text-[9px] uppercase font-bold tracking-[0.4em] opacity-40">Asset_Unavailable</span>
          </div>
        ) : (
          <img 
            src={app.thumbUrl} 
            alt={app.title} 
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 ${imageLoaded ? 'opacity-50 group-hover:opacity-100' : 'opacity-0'}`}
          />
        )}
        
        <div className="absolute bottom-6 left-6">
          <span className="px-6 py-2 bg-white text-black text-[9px] font-bold uppercase tracking-widest shadow-2xl">0{app.id.split('-')[1]}</span>
        </div>
      </div>

      <div className="pt-10 flex flex-col">
        <div className="flex items-center gap-6 mb-6">
           {app.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#FF0033]">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-4xl font-bold mb-6 tracking-tighter leading-none group-hover:translate-x-4 transition-transform">{app.title}</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.4em] group-hover:text-white transition-colors">Study Case_</span>
          <div className="w-12 h-px bg-zinc-800 group-hover:w-24 transition-all duration-700 group-hover:bg-[#FF0033]"></div>
        </div>
      </div>
    </div>
  );
};
