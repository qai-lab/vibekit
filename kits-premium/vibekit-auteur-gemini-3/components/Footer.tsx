
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto px-8 py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="font-display font-light text-4xl uppercase tracking-tighter block">VibeKit</span>
            <p className="text-sm text-[#808080] max-w-sm font-light leading-relaxed">
              Curating the synthetic frontier through obsessive detail and reductive design.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#808080] hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-[#808080] hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-[#808080] hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24">
          <div className="space-y-8">
            <h4 className="text-[8px] font-black uppercase tracking-[0.4em] text-[#d4c3a1]">Nav</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-[#808080]">
              <li><a href="#projects" className="hover:text-white transition-colors">Portfolios</a></li>
              <li><a href="#podcast" className="hover:text-white transition-colors">Episodes</a></li>
              <li><a href="#trends" className="hover:text-white transition-colors">Pulse Feed</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="text-[8px] font-black uppercase tracking-[0.4em] text-[#d4c3a1]">Social</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-[#808080]">
              <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-[8px] font-black uppercase tracking-[0.5em] text-[#444]">© 2024 VibeKit. All Rights Reserved.</p>
        <p className="text-[8px] font-black uppercase tracking-[0.5em] text-[#444]">Crafted with Computational Intent</p>
      </div>
    </footer>
  );
};

export default Footer;
