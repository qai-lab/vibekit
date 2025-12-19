
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 border-white/20"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Pioneering the AI Frontier</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1]"
        >
          Architecture for the <br />
          <span className="gradient-text tracking-tighter italic">AI Generation.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Specializing in <strong>Vibe Coding</strong>—where human intuition meets agentic reasoning. 
          I build intelligent interfaces that don't just solve problems, they understand context.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            View My Projects <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-colors">
            Read My Bio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
