
import React from 'react';
import { Terminal, Github, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase">VibeKit</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#podcast" className="hover:text-white transition-colors">Podcast</a>
          <a href="#trends" className="hover:text-white transition-colors">Trends</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="p-2 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="hidden sm:block px-4 py-2 bg-white text-black text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
