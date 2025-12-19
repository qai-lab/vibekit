
import React, { useState } from 'react';
import Header from './components/Header';
import BentoGrid from './components/BentoGrid';
import CaseStudyModal from './components/CaseStudyModal';
import KnowledgeHub from './components/KnowledgeHub';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen selection:bg-[#af9164]/20 bg-[#080808] text-[#fdfcf0]">
      <Header />
      
      <main className="pt-32">
        {/* High-End Hero Section */}
        <section className="px-8 py-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#af9164]/5 to-transparent pointer-events-none"></div>
          
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 text-left">
              <div className="flex items-center gap-6 mb-16 overflow-hidden">
                <div className="w-16 h-px bg-[#af9164]/40"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#af9164] animate-pulse">
                  EST. 2024 / TOKYO
                </span>
              </div>
              
              <h1 className="text-[12vw] md:text-[9vw] font-serif font-light tracking-tighter leading-[0.8] italic mb-16">
                The Muse <br />
                <span className="not-italic font-extralight text-[#af9164] opacity-80">of the</span> <br />
                Machine.
              </h1>
              
              <div className="max-w-xl">
                <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed mb-16 tracking-wide italic border-l border-[#af9164]/20 pl-8">
                  "Architecture is frozen music. Code is liquid dream. 
                  We curate the intersection where logic dissolves into pure aesthetic surrealism."
                </p>
                
                <div className="flex items-center gap-12">
                  <button 
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-full border border-[#fdfcf0]/20 flex items-center justify-center group-hover:border-[#af9164] transition-colors duration-700">
                      <span className="text-2xl group-hover:translate-y-1 transition-transform">↓</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Explore Collection</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4 relative h-[600px]">
              <div className="absolute top-0 right-0 origin-top-right rotate-90 text-[10px] font-bold tracking-[1em] uppercase text-neutral-800 whitespace-nowrap">
                Aesthetic Integrity — Minimalist Design — Surreal Computing
              </div>
              <div className="absolute bottom-0 right-12 w-px h-64 bg-gradient-to-t from-[#af9164]/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <BentoGrid onSelectProject={(p) => setSelectedProject(p)} />

        {/* Manifesto Section */}
        <section id="manifesto" className="py-48 px-8 max-w-[1800px] mx-auto border-t border-white/5 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif italic text-white/5 pointer-events-none select-none">
             Credo
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div className="space-y-12">
                 <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#af9164]">Section III / The Manifesto</span>
                 <h2 className="text-7xl font-serif italic leading-none">Code as <br/> Divine Logic.</h2>
              </div>
              <div className="space-y-12 text-neutral-400 text-lg font-light leading-relaxed">
                 <p className="border-l border-[#af9164]/30 pl-12">
                   We believe the screen is not a boundary, but a window into a deeper reality. Our mission is to bridge the gap between the algorithmic and the sublime.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <h4 className="text-[#fdfcf0] font-serif italic text-xl">I. Intention</h4>
                       <p className="text-sm">Every pixel must serve a purpose. We reject the decorative in favor of the essential.</p>
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-[#fdfcf0] font-serif italic text-xl">II. Silence</h4>
                       <p className="text-sm">In a world of noise, silence is the ultimate luxury. Our interfaces breathe.</p>
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-[#fdfcf0] font-serif italic text-xl">III. Transcendence</h4>
                       <p className="text-sm">Technology should elevate the human spirit, not distract it. We build for the soul.</p>
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-[#fdfcf0] font-serif italic text-xl">IV. Infinity</h4>
                       <p className="text-sm">The digital realm is infinite. We explore its furthest reaches through code.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Knowledge Hub */}
        <KnowledgeHub />

        {/* Inquiry Section */}
        <section id="inquiry" className="py-48 px-8 max-w-[1800px] mx-auto border-t border-white/5">
           <div className="max-w-4xl mx-auto text-center space-y-16">
              <h2 className="text-8xl font-serif italic leading-tight">Begin a <br/> Conversation.</h2>
              <p className="text-neutral-500 text-xl font-light italic">Currently accepting select inquiries for the Autumn 2025 season.</p>
              
              <form className="space-y-12 text-left pt-12" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10 pb-12">
                    <input type="text" placeholder="Name" className="bg-transparent border-none outline-none text-2xl font-serif italic text-white placeholder:text-neutral-700 w-full" />
                    <input type="email" placeholder="Email" className="bg-transparent border-none outline-none text-2xl font-serif italic text-white placeholder:text-neutral-700 w-full" />
                 </div>
                 <textarea placeholder="Describe your vision..." className="bg-transparent border-none outline-none text-2xl font-serif italic text-white placeholder:text-neutral-700 w-full min-h-[200px]" />
                 <button type="submit" className="w-full py-10 border border-[#af9164] text-[10px] font-bold uppercase tracking-[0.8em] text-[#af9164] hover:bg-[#af9164] hover:text-[#080808] transition-all duration-700">
                    Send Inquiry
                 </button>
              </form>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-48 px-8 border-t border-white/5 bg-[#050505]">
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
            <div className="space-y-8">
              <div className="text-2xl font-serif italic" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>VibeKit.</div>
              <p className="text-neutral-600 text-sm max-w-xs leading-relaxed">
                Dedicated to the preservation of high-fidelity digital artifacts and the advancement of aesthetic engineering.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <h5 className="text-[9px] font-bold uppercase tracking-widest text-[#af9164]">Index</h5>
                <ul className="text-neutral-500 text-xs space-y-4 font-light">
                  <li className="hover:text-white transition-colors cursor-pointer" onClick={() => document.getElementById('showcase')?.scrollIntoView({behavior:'smooth'})}>Collection</li>
                  <li className="hover:text-white transition-colors cursor-pointer" onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior:'smooth'})}>Manifesto</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Press Kit</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-[9px] font-bold uppercase tracking-widest text-[#af9164]">Social</h5>
                <ul className="text-neutral-500 text-xs space-y-4 font-light">
                  <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Twitter / X</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Are.na</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 text-right flex flex-col items-end">
              <p className="text-neutral-500 text-[9px] uppercase tracking-[0.4em] font-bold">
                Current Status: Curating
              </p>
              <div className="text-4xl font-serif italic text-neutral-700">
                Silence is Luxury.
              </div>
              <p className="text-neutral-800 text-[10px] tracking-widest uppercase mt-12">
                © 2024 VibeKit Museum of Code. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Case Study Modal */}
      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
