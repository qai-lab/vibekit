
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Cpu, Layers } from 'lucide-react';

const Methodology: React.FC = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Cognitive First",
      desc: "Designing for the user's mental model, not just their viewport."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Vibe Synthesis",
      desc: "Balancing generative unpredictability with structured elegance."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Agentic Logic",
      desc: "Building interfaces that anticipate intent through autonomous reasoning."
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Layered Fidelity",
      desc: "From high-level abstractions to atomic code precision."
    }
  ];

  return (
    <section id="methodology" className="max-w-screen-2xl mx-auto px-8 py-48 bg-[#030303]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4c3a1] mb-8 block">The Auteur Process</span>
          <h2 className="text-5xl md:text-7xl font-display leading-[0.9] mb-12">
            Engineering <br /> <span className="serif italic text-[#d4c3a1]">Elegance</span>.
          </h2>
          <p className="text-[#808080] text-lg font-light leading-relaxed max-w-md">
            Our methodology is a reductive journey from complex computational logic to simple, visceral human experiences. We treat code as an art form and AI as our primary medium.
          </p>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-white/5 bg-white/[0.01] hover:border-[#d4c3a1]/20 transition-all"
            >
              <div className="text-[#d4c3a1] mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-display mb-4">{pillar.title}</h3>
              <p className="text-sm text-[#808080] font-light leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
