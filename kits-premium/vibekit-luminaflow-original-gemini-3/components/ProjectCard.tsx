
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps { project: Project; }

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <Link 
      to={`/project/${project.id}`}
      className="group block relative overflow-hidden rounded-[32px] glass transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl hover:shadow-cyan-500/10 border-white/5 hover:border-cyan-500/20"
    >
      <div className="aspect-[4/3] overflow-hidden relative image-placeholder">
        {loading && <div className="absolute inset-0 shimmer z-10" />}
        
        {imgError ? (
          <div className="absolute inset-0 vibe-gradient flex items-center justify-center">
            <div className="text-center p-6">
              <span className="text-4xl block mb-2 opacity-50">🤖</span>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/70">Neural Preview Unavailable</p>
            </div>
          </div>
        ) : (
          <img 
            src={project.thumbnail} 
            alt={project.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoading(false)}
            onError={() => {
              setImgError(true);
              setLoading(false);
            }}
            className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 ${loading ? 'opacity-0' : 'opacity-100'}`}
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 2).map(tech => (
            <span key={tech} className="px-3 py-1 bg-cyan-500/10 backdrop-blur-md rounded-full text-[9px] uppercase font-black tracking-widest text-cyan-400 border border-cyan-500/20">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-black mb-1 text-white group-hover:text-cyan-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-medium">
          {project.tagline}
        </p>
      </div>
      
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300">
        <div className="w-12 h-12 vibe-gradient rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
