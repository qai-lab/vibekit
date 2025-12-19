
import React from 'react';
import { AppProject } from '../types';

interface ProjectDetailsProps {
  app: AppProject;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ app, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <div className="relative h-64 sm:h-80">
            <img src={app.thumbUrl} alt={app.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>

          <div className="px-6 pb-8 -mt-12 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">{app.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {app.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-indigo-500 mb-3">Project Story</h3>
                  <p className="text-slate-300 leading-relaxed">{app.story}</p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-indigo-500 mb-3">AI Interaction Samples</h3>
                  <div className="space-y-3">
                    {app.prompts.map((prompt, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 italic text-sm flex gap-3">
                        <span className="text-indigo-500 font-mono select-none">PROMPT_0{i+1}</span>
                        "{prompt}"
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-indigo-500 mb-3">Links</h3>
                  <div className="flex flex-col gap-3">
                    {app.links.github && (
                      <a href={app.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span className="font-semibold text-sm">GitHub Repository</span>
                      </a>
                    )}
                    {app.links.live && (
                      <a href={app.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        <span className="font-semibold text-sm">Visit Project</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
