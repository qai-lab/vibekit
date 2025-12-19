
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="max-w-screen-2xl mx-auto px-8 py-48">
      <div className="mb-32 flex flex-col lg:flex-row justify-between items-end gap-12">
        <div className="max-w-xl">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4c3a1] mb-6 block">Gallery Vol. 1</span>
          <h2 className="text-5xl md:text-7xl font-display leading-[0.9]">Selected <span className="serif italic text-[#d4c3a1]">Artifacts</span></h2>
        </div>
        <p className="text-[#808080] text-sm font-light max-w-sm leading-relaxed mb-2">
          A curate selection of research prototypes focusing on the intersection of human cognitive flow and generative reasoning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onProjectClick(project)}
            className={`group relative cursor-pointer ${project.gridSpan || 'md:col-span-6'}`}
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:h-[600px] overflow-hidden bg-[#0a0a0a] border border-white/10">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ease-out opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
              
              <div className="absolute top-6 right-6 p-4 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 border border-white/10">
                <ArrowUpRight className="w-5 h-5 text-[#d4c3a1]" />
              </div>

              <div className="absolute bottom-0 left-0 p-8 sm:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#d4c3a1]">Ref. {idx + 1}</span>
                  <div className="h-[1px] w-8 bg-[#d4c3a1]/30"></div>
                </div>
                <h3 className="text-4xl sm:text-6xl font-display text-white mb-4 leading-none">{project.title}</h3>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all delay-100">
                   {project.techStack.slice(0, 3).map(tech => (
                     <span key={tech} className="text-[7px] font-black uppercase tracking-[0.3em] text-[#d4c3a1]">
                       {tech}
                     </span>
                   ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-start opacity-60 group-hover:opacity-100 transition-opacity">
               <p className="text-[#808080] text-[10px] uppercase tracking-widest leading-relaxed max-w-xs">
                 {project.description}
               </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-48 flex justify-center">
        <button className="group flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-full border border-[#d4c3a1]/20 flex items-center justify-center transition-all group-hover:border-[#d4c3a1] group-hover:bg-[#d4c3a1] group-hover:text-black">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#808080] group-hover:text-[#d4c3a1]">Full Archive</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectGrid;
