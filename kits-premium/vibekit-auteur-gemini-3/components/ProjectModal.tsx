
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench, MessageSquare, Zap, BookOpen, Globe, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/98 backdrop-blur-xl"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-7xl h-full sm:h-[90vh] bg-[#050505] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 p-8 sm:p-12 flex justify-between items-center border-b border-white/5 bg-[#050505]/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#d4c3a1]">Artifact Ref. {project.id}</span>
              <h2 className="text-4xl sm:text-5xl font-display font-light leading-none">{project.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4c3a1] hover:text-black transition-all group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-32 scrollbar-hide">
            {/* Main Visual & Brief */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-8 group overflow-hidden border border-white/5">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover transition-transform duration-[3s] group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200`;
                  }}
                />
              </div>
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div className="space-y-12">
                   <section>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4c3a1] mb-6 flex items-center gap-3">
                      <Wrench className="w-4 h-4" /> Technical Profile
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-4 py-2 border border-white/10 text-[10px] uppercase font-bold text-[#808080] tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4c3a1] mb-6 flex items-center gap-3">
                      <Zap className="w-4 h-4" /> Performance
                    </h3>
                    <p className="text-sm text-[#808080] font-light leading-relaxed">
                      Executed at sub-50ms latency using advanced Gemini-3-Flash edge inference.
                    </p>
                  </section>
                </div>

                <div className="pt-12 grid grid-cols-2 gap-4">
                  <a href={project.githubUrl} target="_blank" className="flex items-center justify-center gap-3 py-6 border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                    <Github className="w-4 h-4" /> Codebase
                  </a>
                  <a href={project.liveDemoUrl} target="_blank" className="flex items-center justify-center gap-3 py-6 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#d4c3a1] transition-all">
                    <Globe className="w-4 h-4" /> Runtime
                  </a>
                </div>
              </div>
            </div>

            {/* Narrative & Heuristics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
              <div className="lg:col-span-7 space-y-24">
                <section>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4c3a1] mb-10 flex items-center gap-4">
                    The Genesis Narrative
                  </h3>
                  <p className="text-2xl sm:text-3xl text-[#f2f2f2] font-light leading-snug">
                    {project.howIBuiltIt}
                  </p>
                </section>

                <section>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4c3a1] mb-10 flex items-center gap-4">
                    <MessageSquare className="w-4 h-4" /> Prompt Architecture
                  </h3>
                  <div className="space-y-6">
                    {project.prompts.map((prompt, idx) => (
                      <div key={idx} className="p-10 border border-white/10 bg-white/[0.02] serif text-2xl text-[#d4c3a1] font-light italic leading-relaxed">
                        "{prompt}"
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="lg:col-span-5">
                <section className="p-12 bg-white/[0.01] border border-[#d4c3a1]/10">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4c3a1] mb-10 flex items-center gap-4">
                    <BookOpen className="w-4 h-4" /> Knowledge Transfers
                  </h3>
                  <ul className="space-y-10">
                    {project.lessons.map((lesson, idx) => (
                      <li key={idx} className="group relative pl-8">
                        <div className="absolute left-0 top-1 w-[2px] h-full bg-[#d4c3a1]/20 group-hover:bg-[#d4c3a1] transition-colors"></div>
                        <p className="text-lg text-[#808080] font-light leading-relaxed group-hover:text-white transition-colors">
                          {lesson}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
