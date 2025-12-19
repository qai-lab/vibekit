
import React from 'react';
import { Terminal, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="font-display font-bold text-lg uppercase tracking-tight">VibeKit</span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            Designing digital futures through the lens of Vibe Coding and AI agents.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="p-3 glass rounded-2xl hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="p-3 glass rounded-2xl hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="p-3 glass rounded-2xl hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
        <p>© 2024 VibeKit Studio. All Rights Reserved.</p>
        <p className="flex items-center gap-1">Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> & AI Assistance</p>
      </div>
    </footer>
  );
};

export default Footer;
