
import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setImageError(false);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 animate-in fade-in zoom-in-95 duration-1000 cubic-bezier(0.2, 0, 0, 1)">
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-[#080808]/98 backdrop-blur-3xl" 
        onClick={onClose}
      ></div>
      
      {/* Full Screen Container */}
      <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden bg-transparent">
        
        {/* Close Button - Floating */}
        <button 
          onClick={onClose}
          className="absolute top-12 right-12 z-[1100] w-16 h-16 rounded-full border border-white/20 hover:border-[#af9164] flex items-center justify-center transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#af9164] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 text-xl text-white group-hover:text-[#080808] transition-colors leading-none">&times;</span>
        </button>

        {/* Left: Immersive Visual */}
        <div className="w-full md:w-3/5 h-[50vh] md:h-full relative overflow-hidden bg-neutral-900 group">
          {!imageError ? (
            <img 
              src={project.image} 
              alt={project.title} 
              onError={() => setImageError(true)}
              crossOrigin="anonymous"
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[4000ms] grayscale group-hover:grayscale-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#080808]">
               <span className="text-[12vw] font-serif italic text-[#af9164] opacity-10 select-none uppercase tracking-tighter">
                  {project.title}
               </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          
          <div className="absolute bottom-24 left-24 max-w-xl">
             <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#af9164] mb-8 block">Collection {project.id}</span>
             <h2 className="text-[8vw] font-serif italic text-[#fdfcf0] leading-[0.8] tracking-tighter mb-12">
               {project.title}
             </h2>
             <div className="flex gap-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 bg-white/5 px-4 py-2 border border-white/10">
                    {tech}
                  </span>
                ))}
             </div>
          </div>
        </div>
        
        {/* Right: Detailed Content */}
        <div className="w-full md:w-2/5 h-[50vh] md:h-full overflow-y-auto px-12 md:px-24 py-24 md:py-48 custom-scrollbar bg-[#0a0a0a]/50 backdrop-blur-md border-l border-white/5">
          <div className="space-y-32">
            
            {/* Philosophical Roots */}
            <div className="space-y-12">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#af9164]">Philosophical Base</h4>
              <p className="text-3xl font-serif italic text-neutral-300 leading-snug font-light">
                "{project.lessons}"
              </p>
            </div>
            
            {/* The Prompt */}
            <div className="space-y-12">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#af9164]">The Latent Command</h4>
              <div className="p-12 bg-neutral-950 border-l-2 border-[#af9164]/40 font-serif italic text-2xl text-neutral-400 leading-relaxed shadow-2xl">
                "{project.prompt}"
              </div>
            </div>

            {/* CTA */}
            <div className="pt-12">
              <button className="w-full py-10 bg-[#fdfcf0] text-[#080808] text-[10px] font-bold uppercase tracking-[0.8em] hover:bg-[#af9164] hover:text-[#fdfcf0] transition-all duration-700 shadow-2xl">
                Open Registry
              </button>
              <div className="mt-12 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-neutral-700">
                <span>Ref: 00481-VX</span>
                <span>Location: Tokyo Studio</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
