
import React, { useState } from 'react';
import Header from './components/Header';
import BentoGrid from './components/BentoGrid';
import CaseStudyModal from './components/CaseStudyModal';
import KnowledgeHub from './components/KnowledgeHub';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-6 py-24 text-center relative overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for high-vibe collaborations
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">VibeKit</span> <br />
              Portfolio
            </h1>
            
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
              Architecting digital experiences at the intersection of AI, aesthetics, and buttery-smooth code. We don't just build apps; we curate vibes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all flex items-center gap-2 group shadow-2xl shadow-white/10">
                View Showcase
                <span className="group-hover:translate-x-1 transition-transform">↓</span>
              </button>
              <button className="px-8 py-4 rounded-2xl glass font-bold text-white hover:bg-white/10 transition-all">
                Read the Manifesto
              </button>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <BentoGrid onSelectProject={(p) => setSelectedProject(p)} />

        {/* Knowledge Hub */}
        <KnowledgeHub />

        {/* Footer */}
        <footer className="py-24 px-6 text-center border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-8 mb-12">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">X / Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Dribbble</a>
            </div>
            <p className="text-slate-600 text-sm">
              &copy; 2024 VibeKit. Built with passion and prompt-engineering.
            </p>
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
