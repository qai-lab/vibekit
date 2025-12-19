
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const contributorImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200"
  ];

  return (
    <section className="relative min-h-screen flex items-center px-8 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] bg-fixed opacity-95">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4c3a1]/5 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#d4c3a1]/40"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#d4c3a1]">Intelligence meets Intention</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[10rem] font-display leading-[0.8] mb-12 tracking-tight"
            >
              The <span className="serif italic text-[#d4c3a1] font-light">Auteur</span> of <br />
              <span className="relative">
                Code
                <div className="absolute -right-12 bottom-4 w-24 h-[1px] bg-white/10 hidden xl:block"></div>
              </span> & Spirit.
            </motion.h1>
          </div>
          
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-end items-end pb-12">
            <div className="rotate-90 origin-right translate-y-12">
              <span className="text-[8px] font-bold uppercase tracking-[0.8em] text-[#444] whitespace-nowrap">Est. MMXXIV — Global Studio</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mt-12 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-xl md:text-2xl text-[#808080] font-light leading-relaxed">
              Synthesizing <span className="text-white">algorithmic depth</span> with visceral aesthetics. 
              We don't just prompt; we compose the future of agency.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="lg:col-span-7 flex flex-col md:flex-row gap-12 md:items-center justify-end"
          >
            <div className="flex -space-x-4">
              {contributorImages.map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-[#111] overflow-hidden">
                  <img 
                    src={src} 
                    alt="Contributor" 
                    className="w-full h-full object-cover grayscale filter brightness-90 hover:grayscale-0 transition-all duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?background=111&color=d4c3a1&name=A${i}`;
                    }}
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-black bg-[#d4c3a1] flex items-center justify-center text-black text-[10px] font-black cursor-pointer hover:bg-white transition-colors">+</div>
            </div>
            
            <a href="#projects" className="group flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-[#d4c3a1] group-hover:scale-110">
                <ArrowDown className="w-5 h-5 group-hover:text-[#d4c3a1] transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll Archive</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.02] -z-10"></div>
      <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/[0.02] -z-10"></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/[0.02] -z-10"></div>
    </section>
  );
};

export default Hero;
