
import React from 'react';
import { motion } from 'framer-motion';

const CognitiveLab: React.FC = () => {
  return (
    <section id="lab" className="max-w-screen-2xl mx-auto px-8 py-48 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4c3a1]/5 -z-10 blur-[120px]"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] overflow-hidden grayscale contrast-125 border border-white/10 shadow-2xl bg-[#111]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
              alt="Designer Portrait" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200";
              }}
            />
          </div>
          <div className="absolute -bottom-12 -right-12 p-12 bg-[#050505] border border-white/10 hidden xl:block">
            <span className="serif italic text-[#d4c3a1] text-4xl">Obsessive Detail.</span>
          </div>
        </div>
        
        <div className="lg:col-span-6 space-y-12">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4c3a1] mb-8 block">The Creative Lead</span>
            <h2 className="text-5xl md:text-6xl font-display leading-[0.9]">Synthesizing <span className="serif italic text-[#d4c3a1]">Thought</span> into Pixels.</h2>
          </div>
          
          <div className="space-y-6 text-[#808080] font-light leading-relaxed text-lg">
            <p>
              I am an architect of digital experiences, operating at the intersection of high-fidelity design and advanced machine reasoning. My work is a continuous exploration of how technology can feel less like a tool and more like an extension of human intent.
            </p>
            <p>
              With over a decade of experience in the Silicon Valley ecosystem, I have transitioned from pure engineering to a hybrid "Auteur" model—where the vision is the code, and the code is the vision.
            </p>
          </div>
          
          <div className="pt-8 grid grid-cols-2 gap-12">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white mb-4">Core Philosophy</p>
              <p className="text-sm text-[#808080]">Reductive minimalism through algorithmic complexity.</p>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white mb-4">Primary Stacks</p>
              <p className="text-sm text-[#808080]">TypeScript, Python, PyTorch, React, Three.js.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CognitiveLab;
