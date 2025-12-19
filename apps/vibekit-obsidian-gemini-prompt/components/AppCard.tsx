
import React from 'react';
import { AppProject } from '../types';

interface AppCardProps {
  app: AppProject;
  onClick: () => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative cursor-pointer bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={app.thumbUrl} 
          alt={app.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
        
        <div className="absolute top-4 right-4">
          <div className="bg-slate-950/40 backdrop-blur-md p-2 rounded-full border border-white/10 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {app.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded border border-indigo-500/20">
              {tech}
            </span>
          ))}
          {app.techStack.length > 3 && (
            <span className="text-[10px] text-slate-500 self-center font-bold">+{app.techStack.length - 3}</span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">{app.title}</h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">{app.story}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex -space-x-1.5 overflow-hidden">
            {app.prompts.slice(0, 3).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[8px] text-slate-500 font-bold uppercase">
                AI
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
            Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </div>
      </div>
    </div>
  );
};
