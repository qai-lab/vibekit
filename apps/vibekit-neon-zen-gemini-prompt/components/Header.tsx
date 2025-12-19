
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
            V
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            VibeKit
          </span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <li className="hover:text-purple-400 transition-colors cursor-pointer"><a href="#showcase">Showcase</a></li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer"><a href="#hub">Knowledge Hub</a></li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">About</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">Contact</li>
        </ul>
        
        <button className="bg-white text-slate-900 px-5 py-2 rounded-xl text-sm font-bold hover:bg-purple-50 transition-all active:scale-95 shadow-lg shadow-white/5">
          Get in Touch
        </button>
      </nav>
    </header>
  );
};

export default Header;
