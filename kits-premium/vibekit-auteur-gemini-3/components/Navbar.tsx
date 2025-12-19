
import React from 'react';
import { Github, Twitter, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-8 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Minimalist Monogram Logo */}
        <div 
          className="pointer-events-auto flex items-center gap-4 group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="relative w-10 h-10 border border-[#d4c3a1]/30 flex items-center justify-center overflow-hidden transition-all group-hover:border-[#d4c3a1]">
            <span className="serif text-[#d4c3a1] text-xl absolute transition-transform group-hover:-translate-y-12">V</span>
            <span className="serif text-[#d4c3a1] text-xl absolute translate-y-12 transition-transform group-hover:translate-y-0">K</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-light text-sm tracking-[0.4em] uppercase leading-none">VibeKit</span>
            <span className="text-[7px] text-[#808080] tracking-[0.6em] uppercase mt-1">Auteur Studio</span>
          </div>
        </div>
        
        {/* Architectural Floating Nav */}
        <div className="pointer-events-auto hidden md:flex items-center px-10 py-4 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-[#808080] gap-10 shadow-2xl">
          <a href="#projects" className="hover:text-[#d4c3a1] transition-colors relative group">
            Artifacts
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4c3a1] transition-all group-hover:w-full"></span>
          </a>
          <a href="#methodology" className="hover:text-[#d4c3a1] transition-colors relative group">
            Philosophy
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4c3a1] transition-all group-hover:w-full"></span>
          </a>
          <a href="#lab" className="hover:text-[#d4c3a1] transition-colors relative group">
            The Lab
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4c3a1] transition-all group-hover:w-full"></span>
          </a>
          <a href="#podcast" className="hover:text-[#d4c3a1] transition-colors relative group">
            VibeCast
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4c3a1] transition-all group-hover:w-full"></span>
          </a>
          <a href="#trends" className="hover:text-[#d4c3a1] transition-colors relative group">
            Pulse
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4c3a1] transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="pointer-events-auto flex items-center gap-6">
          <button 
            onClick={() => scrollTo('inquire')}
            className="hidden sm:block px-8 py-3 border border-[#d4c3a1]/20 text-[#d4c3a1] text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#d4c3a1] hover:text-black transition-all"
          >
            Inquire
          </button>
          <div className="p-3 glass rounded-full md:hidden">
            <Menu className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
