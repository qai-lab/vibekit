
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 vibe-gradient rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
          <span className="text-white font-bold text-xl">V</span>
        </div>
        <span className="font-space font-bold text-2xl tracking-tight hidden sm:block">VibeKit</span>
      </Link>
      
      <div className="flex items-center gap-8">
        <a href="#projects" className="text-sm font-medium hover:text-purple-400 transition-colors">Projects</a>
        <a href="#news" className="text-sm font-medium hover:text-purple-400 transition-colors">AI Insights</a>
        <a href="#podcast" className="text-sm font-medium hover:text-purple-400 transition-colors">Podcast</a>
        <button className="hidden md:block px-5 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-purple-100 transition-all active:scale-95">
          Work with me
        </button>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="border-t border-white/5 pt-20 pb-10 px-6 mt-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="max-w-xs">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 vibe-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-space font-bold text-xl">VibeKit</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Crafting the future of software through intuition, AI, and the perfect vibe. Based in the Digital Ether.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
        <div>
          <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-gray-500">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#projects" className="hover:text-white">Showcase</a></li>
            <li><a href="#podcast" className="hover:text-white">Podcast</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-gray-500">Connect</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">GitHub</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
        <div className="hidden sm:block">
          <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-gray-500">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
      <p>© 2024 VibeKit. All rights reserved.</p>
      <p>Built with Gemini & Curiosity.</p>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};
