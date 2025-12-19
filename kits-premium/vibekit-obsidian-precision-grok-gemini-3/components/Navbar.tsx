
import React, { useState } from 'react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Core', path: 'home' },
    { name: 'Inventory', path: 'apps' },
    { name: 'Frequencies', path: 'podcast' },
    { name: 'Protocols', path: 'insights' },
    { name: 'Manifesto', path: 'about' },
  ];

  const handleRequestAccess = () => {
    // In a real app we'd use a context or global state, 
    // for this one-page prototype we can just trigger a prompt or custom behavior
    const event = new CustomEvent('requestAccess');
    window.dispatchEvent(event);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center gap-12">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-4 group"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-white/20 group-hover:border-cyan-400 group-hover:rotate-45 transition-all duration-500"></div>
                <span className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">V</span>
              </div>
              <div className="hidden lg:block">
                <span className="text-sm font-black text-white tracking-[0.4em] uppercase">VibeKit</span>
                <div className="text-[9px] mono text-slate-500 uppercase tracking-widest mt-0.5">Obsidian Precision v3.0</div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-cyan-400 ${
                  currentPath === link.path ? 'text-cyan-400' : 'text-slate-500'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-10 w-[1px] bg-white/10 mx-2"></div>
            <button 
              onClick={() => {
                alert("Initiating secure request protocol...");
              }}
              className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all active:scale-95"
            >
              Request Access
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 animate-slideDown overflow-y-auto max-h-screen">
          <div className="px-6 py-20 space-y-10 flex flex-col items-center text-center">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => { onNavigate(link.path); setIsOpen(false); }}
                className={`block w-full text-2xl font-black uppercase tracking-[0.2em] ${
                  currentPath === link.path ? 'text-cyan-400' : 'text-slate-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              className="mt-8 px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-cyan-400 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Secure Entry
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
