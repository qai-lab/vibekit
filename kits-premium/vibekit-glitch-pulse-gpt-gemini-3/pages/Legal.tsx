
import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const Legal: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const isPrivacy = type === 'privacy';

  return (
    <div className="max-w-3xl mx-auto px-4 py-32">
      <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-12 inline-block">← Back Home</Link>
      
      <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-16">
        {isPrivacy ? 'Privacy' : 'Terms'} <br />
        <span className="pulse-text-gradient">Policy.</span>
      </h1>

      <div className="prose prose-invert prose-pink max-w-none text-slate-400 font-bold space-y-8">
        <section>
          <h2 className="text-white text-2xl font-black uppercase tracking-tighter mb-4 italic">01. Overview</h2>
          <p>
            Welcome to VibeKit. We take your digital presence seriously. This document outlines how we operate within the high-frequency generative era.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-black uppercase tracking-tighter mb-4 italic">02. {isPrivacy ? 'Data Flow' : 'Usage Rights'}</h2>
          <p>
            {isPrivacy 
              ? "We don't collect data we don't need. Your interactions with our apps stay local where possible. Any data sent to our AI models is anonymized and used only for improving your specific generation session."
              : "All projects showcased here are the intellectual property of the VibeKit Collective. You are free to explore the prompts, but commercial use of our proprietary architectures requires explicit builder tier access."}
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-black uppercase tracking-tighter mb-4 italic">03. The Frequency</h2>
          <p>
            By using this site, you acknowledge that you are part of a research experiment into the future of vibe-driven development. Expect glitches, pulses, and unexpected beauty.
          </p>
        </section>

        <section className="pt-12 border-t border-white/5">
          <p className="text-slate-600 text-xs italic">
            Last updated: January 2025
          </p>
        </section>
      </div>
    </div>
  );
};
