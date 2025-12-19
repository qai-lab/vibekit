
import React, { useState } from 'react';
import { AppProject } from '../types';

interface ProjectDetailsProps {
  app: AppProject;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ app, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-all duration-700"
        onClick={onClose}
      />
      <div className="relative w-full h-full max-w-[1600px] bg-black border border-zinc-900 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-700">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-50 p-4 border border-white/10 text-white hover:bg-[#FF0033] hover:border-[#FF0033] transition-all"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Side */}
        <div className="flex-1 overflow-y-auto order-2 md:order-1 p-12 md:p-24 bg-black">
          <div className="max-w-2xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF0033] mb-12">Case Study 0{app.id.split('-')[1]}</div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-12">{app.title.toUpperCase()}</h2>
            
            <div className="flex flex-wrap gap-4 mb-20">
              {app.techStack.map(tech => (
                <span key={tech} className="px-6 py-2 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-24">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF0033] mb-8">Concept</h3>
                <p className="text-2xl font-light text-zinc-300 leading-tight">{app.story}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF0033] mb-8">AI Architecture</h3>
                <div className="space-y-6">
                  {app.prompts.map((prompt, i) => (
                    <div key={i} className="py-6 border-b border-zinc-900 text-xl text-zinc-500 italic">
                      "{prompt}"
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 flex gap-8">
                {app.links.live && (
                  <a href={app.links.live} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#FF0033] hover:text-white transition-all">
                    Launch Project
                  </a>
                )}
                {app.links.github && (
                  <a href={app.links.github} target="_blank" rel="noopener noreferrer" className="px-12 py-5 border border-zinc-800 text-xs font-bold uppercase tracking-[0.3em] hover:border-white transition-all">
                    Source Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="flex-1 order-1 md:order-2 bg-zinc-950 relative overflow-hidden h-64 md:h-auto border-l border-zinc-900">
          {!imageLoaded && !imageError && (
             <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
               <span className="text-[12px] font-bold uppercase tracking-[0.6em] text-zinc-700">Sourcing_Assets</span>
             </div>
          )}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
              <span className="text-[12px] font-bold uppercase tracking-widest text-zinc-800">No_Signal</span>
            </div>
          ) : (
            <img 
              src={app.thumbUrl} 
              alt={app.title} 
              className={`w-full h-full object-cover grayscale transition-all duration-2000 hover:grayscale-0 ${imageLoaded ? 'opacity-80 hover:opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
        </div>
      </div>
    </div>
  );
};
