
import React, { useEffect } from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-5xl max-h-[90vh] glass rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-slate-400 text-sm">Case Study & Technical Deep Dive</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <span className="text-2xl text-white leading-none">&times;</span>
          </button>
        </div>
        
        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Visuals & Lessons */}
            <div className="space-y-10">
              <div className="aspect-video w-full rounded-3xl overflow-hidden glass border border-white/5 group relative">
                <div className="absolute inset-0 flex items-center justify-center bg-purple-600/10">
                   <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                   </div>
                </div>
                <img 
                  src={project.image} 
                  alt="Video Placeholder" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
              </div>
              
              <div>
                <h4 className="text-purple-400 font-bold uppercase tracking-widest text-[10px] mb-4">Lessons Learned</h4>
                <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed font-light">
                  <p>{project.lessons}</p>
                </div>
              </div>
            </div>
            
            {/* Right Column: Prompt & Tech */}
            <div className="space-y-10">
              <div>
                <h4 className="text-purple-400 font-bold uppercase tracking-widest text-[10px] mb-4">The Prompt Used</h4>
                <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 font-mono text-sm leading-relaxed text-slate-300 relative group">
                  <div className="absolute top-4 right-4 text-[10px] text-slate-600 bg-white/5 px-2 py-1 rounded">PROMPT</div>
                  <code className="block whitespace-pre-wrap italic">
                    "{project.prompt}"
                  </code>
                </div>
              </div>
              
              <div>
                <h4 className="text-purple-400 font-bold uppercase tracking-widest text-[10px] mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-8">
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-white shadow-xl shadow-purple-500/20 hover:opacity-90 transition-opacity">
                  Visit Project Repository
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
