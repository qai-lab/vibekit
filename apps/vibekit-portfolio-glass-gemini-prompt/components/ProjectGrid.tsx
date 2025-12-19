
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-display font-bold mb-4">Project Showcase</h2>
        <p className="text-slate-400 max-w-xl">A collection of experiments, MVPs, and production apps built in the era of AI-native development.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => onProjectClick(project)}
            className={`group relative overflow-hidden rounded-[2rem] glass border-white/10 cursor-pointer ${project.gridSpan || ''}`}
          >
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-300 max-w-xs line-clamp-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/10 rounded-md backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-white text-black rounded-full transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
