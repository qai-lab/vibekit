
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode; current: boolean }> = ({ to, children, current }) => (
  <Link 
    to={to} 
    className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
      current ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'
    }`}
  >
    {children}
  </Link>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating Island Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] max-w-2xl ${scrolled ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}`}>
        <div className="glass-island rounded-full px-4 py-3 flex items-center justify-between shadow-2xl">
          <Link to="/" className="flex items-center gap-2 px-2 group">
            <div className="w-8 h-8 pulse-gradient rounded-lg flex items-center justify-center font-black text-white text-lg shadow-[0_0_15px_rgba(255,0,85,0.5)] group-hover:animate-pulse">V</div>
            <span className="font-black text-sm tracking-tighter uppercase glitch-hover hidden sm:block">VibeKit</span>
          </Link>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink to="/apps" current={location.pathname === '/apps'}>Apps</NavLink>
            <NavLink to="/podcasts" current={location.pathname === '/podcasts'}>Radio</NavLink>
            <NavLink to="/insights" current={location.pathname === '/insights'}>Blog</NavLink>
          </div>

          <Link to="/join" className={`px-4 py-2 brand-gradient rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-600/20 ${location.pathname === '/join' ? 'ring-2 ring-white/50' : ''}`}>
            Join
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="py-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-10">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">TikTok</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">Twitter</a>
          </div>
          <div className="flex justify-center gap-6 mb-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <Link to="/legal/tos" className="hover:text-slate-400">Terms of Service</Link>
            <Link to="/legal/privacy" className="hover:text-slate-400">Privacy Policy</Link>
          </div>
          <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2025 VibeKit Collective / All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
