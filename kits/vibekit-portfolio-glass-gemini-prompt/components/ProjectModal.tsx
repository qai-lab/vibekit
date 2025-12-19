
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, PlayCircle, Wrench, MessageSquare, Zap, BookOpen } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 p-6 glass border-b border-white/10 flex justify-between items-center bg-black/40">
            <h2 className="text-2xl font-display font-bold">{project.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-12">
            {/* Hero Image & Tags */}
            <div className="space-y-6">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-64 sm:h-96 object-cover rounded-2xl border border-white/10"
              />
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Narrative Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-10">
                <section>
                  <div className="flex items-center gap-2 mb-4 text-purple-400">
                    <Zap className="w-5 h-5" />
                    <h3 className="font-display font-bold text-xl">How I Built It</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{project.howIBuiltIt}</p>
                </section>

                <section>
                  <div className="flex items-center gap-2 mb-4 text-indigo-400">
                    <MessageSquare className="w-5 h-5" />
                    <h3 className="font-display font-bold text-xl">Key Prompts</h3>
                  </div>
                  <div className="space-y-3">
                    {project.prompts.map((prompt, idx) => (
                      <div key={idx} className="p-4 glass rounded-xl border-l-4 border-l-indigo-500 text-sm italic text-slate-300">
                        "{prompt}"
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-2 mb-4 text-rose-400">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="font-display font-bold text-xl">Lessons Learned</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    {project.lessons.map((lesson, idx) => (
                      <li key={idx}>{lesson}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="space-y-10">
                <section>
                  <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5" /> Stack & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.toolsUsed.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-xs font-bold text-indigo-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="space-y-4 pt-6 border-t border-white/10">
                  <a href={project.githubUrl} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors">
                    <Github className="w-5 h-5" /> GitHub Repo
                  </a>
                  <a href={project.demoVideoUrl} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 glass border-white/20 rounded-xl font-bold hover:bg-white/5 transition-colors">
                    <PlayCircle className="w-5 h-5" /> Watch Demo
                  </a>
                  <a href={project.liveDemoUrl} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 glass border-white/20 rounded-xl font-bold hover:bg-white/5 transition-colors">
                    <ExternalLink className="w-5 h-5" /> Visit Site
                  </a>
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
