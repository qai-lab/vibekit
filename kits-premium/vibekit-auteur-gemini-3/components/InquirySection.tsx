
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const InquirySection: React.FC = () => {
  return (
    <section id="inquire" className="max-w-screen-2xl mx-auto px-8 py-48 bg-[#050505] border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4c3a1] mb-8 block">Engagement</span>
          <h2 className="text-5xl md:text-7xl font-display leading-[0.9] mb-12">
            Initiate a <br /> <span className="serif italic text-[#d4c3a1]">Dialogue</span>.
          </h2>
          <p className="text-[#808080] text-lg font-light leading-relaxed max-w-md">
            We are currently accepting inquiries for late 2024 partnerships. Reach out to discuss the intersection of your vision and our computational intent.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 text-[#d4c3a1]">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">studio@vibekit.ai</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#444]">Identity</label>
                <input 
                  type="text" 
                  placeholder="NAME / ORGANIZATION" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-[#d4c3a1] transition-colors placeholder:text-[#222] uppercase tracking-widest"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#444]">Direct</label>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-[#d4c3a1] transition-colors placeholder:text-[#222] uppercase tracking-widest"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#444]">Brief</label>
              <textarea 
                rows={4}
                placeholder="NARRATIVE OF YOUR INQUIRY" 
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-[#d4c3a1] transition-colors placeholder:text-[#222] uppercase tracking-widest resize-none"
              ></textarea>
            </div>
            
            <button className="group flex items-center gap-8 py-8 px-12 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#d4c3a1] transition-all w-full sm:w-auto">
              Send Transmission <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
