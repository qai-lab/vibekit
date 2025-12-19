
import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface BentoGridProps {
  onSelectProject: (project: Project) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onSelectProject }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="showcase" className="py-48 px-8 max-w-[1800px] mx-auto">
      <div className="mb-32 flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="max-w-2xl">
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#af9164] mb-4 block">Section I</span>
          <h2 className="text-7xl font-serif italic leading-none mb-8">Selected Collection</h2>
          <p className="text-neutral-500 text-lg font-light leading-relaxed">
            A curation of procedural artifacts, each a unique study in the latent possibilities of autonomous creation.
          </p>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="px-6 py-2 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white cursor-pointer transition-colors">Filtered By: All</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[350px] gap-12">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => onSelectProject(project)}
            className={`group relative overflow-hidden bento-card cursor-pointer bg-[#0c0c0c] shadow-2xl ${project.gridSpan || ''}`}
          >
            {/* The "Frame" Effect */}
            <div className="absolute inset-0 border-[20px] border-[#080808] z-20 pointer-events-none group-hover:border-[10px] transition-all duration-1000"></div>
            
            {/* The Image or Fallback */}
            {!imageErrors[project.id] ? (
              <img 
                src={project.image} 
                alt={project.title}
                onError={() => handleImageError(project.id)}
                crossOrigin="anonymous"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-1000 z-0 scale-[1.2] group-hover:scale-100"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center opacity-10 transition-opacity duration-1000 group-hover:opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#080808]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #af9164 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute text-[10vw] font-serif italic text-[#af9164] whitespace-nowrap opacity-10 select-none">
                  {project.title}
                </div>
              </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
            
            {/* Content Labels */}
            <div className="absolute inset-0 p-12 flex flex-col justify-end z-30 pointer-events-none">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#af9164] text-[9px] font-bold uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <div className="flex-1 h-px bg-[#af9164]/20"></div>
                </div>
                <h3 className="text-4xl font-serif italic text-[#fdfcf0] mb-2">{project.title}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700">
                  <p className="text-neutral-400 text-sm font-light leading-relaxed mt-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Label Plaque (Top Right) */}
            <div className="absolute top-10 right-10 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#fdfcf0] px-4 py-2 flex items-center gap-3">
               <span className="text-[#080808] text-[8px] font-bold uppercase tracking-widest">
                 View Entry
               </span>
               <span className="text-[#080808] text-xs">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
