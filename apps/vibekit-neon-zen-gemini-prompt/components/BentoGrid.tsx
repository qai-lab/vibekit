
import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface BentoGridProps {
  onSelectProject: (project: Project) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onSelectProject }) => {
  return (
    <section id="showcase" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Showcase</h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          A collection of digital artifacts crafted with a prompt-first mindset and high-fidelity aesthetics.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => onSelectProject(project)}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 glass bento-card cursor-pointer ${project.gridSpan || ''}`}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] uppercase tracking-widest font-bold mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
              </div>
              
              {/* Tech Stack & Button (Visible on Hover) */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex gap-2">
                  {project.techStack.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-[10px] text-slate-500 font-mono">{tech}</span>
                  ))}
                </div>
                <button className="text-xs font-bold text-purple-400 flex items-center gap-1 group/btn">
                  View Study 
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
