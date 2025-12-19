
import React, { useState } from 'react';
import { AppProject } from '../types';
import { GoogleGenAI } from "@google/genai";

interface AppDetailProps {
  app: AppProject;
  onBack: () => void;
}

const AppDetail: React.FC<AppDetailProps> = ({ app, onBack }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [customHero, setCustomHero] = useState<string | null>(null);

  const generateAIVisual = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `A professional, ultra-minimalist tech hero visual for an AI product named "${app.title}". 
      Description: ${app.shortDescription}. 
      Aesthetic: Obsidian black glass, neon cyan accents, industrial precision, cinematic lighting, 8k resolution, high-end product photography. Dark mood. No text.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setCustomHero(`data:image/png;base64,${base64EncodeString}`);
          break;
        }
      }
    } catch (error) {
      console.error("Visual synthesize failed:", error);
      alert("ERR: ENCRYPTION_FAILURE. CHECK PROTOCOLS.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fade-in bg-black pt-24">
      {/* Hero Header */}
      <section className="relative h-[80vh] overflow-hidden bg-black border-b border-white/10">
        <img 
          src={customHero || app.heroImage} 
          alt={app.title} 
          className={`w-full h-full object-cover transition-all duration-1000 ${isGenerating ? 'opacity-20 blur-3xl scale-110' : 'opacity-40 scale-100 grayscale hover:grayscale-0'}`}
        />
        
        {isGenerating && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <div className="w-24 h-1 bg-cyan-400 animate-pulse mb-8 mx-auto"></div>
              <p className="text-cyan-400 font-black tracking-[0.8em] uppercase text-[10px] mono">Synthesizing Protocol...</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="absolute top-12 right-12 z-30">
          <button 
            onClick={generateAIVisual}
            disabled={isGenerating}
            className="group flex items-center gap-4 bg-white text-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-cyan-400 disabled:opacity-50"
          >
            Synthesize [AI]
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-12 lg:p-24">
          <div className="max-w-[1600px] mx-auto">
            <button 
              onClick={onBack}
              className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.5em] mb-12 transition-colors flex items-center gap-6"
            >
              <span className="w-12 h-[1px] bg-slate-500"></span>
              Return to Catalog
            </button>
            <h1 className="text-7xl md:text-[140px] font-black text-white mb-12 tracking-tighter uppercase leading-[0.85]">{app.title}</h1>
            <div className="flex flex-wrap gap-3">
              {app.techStack.map(tech => (
                <span key={tech} className="bg-white/5 border border-white/10 px-6 py-2 text-[10px] mono uppercase tracking-widest text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specification Grid */}
      <section className="py-40 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
            <div className="lg:col-span-2 space-y-32">
              <div className="border-l-4 border-cyan-400 pl-16">
                <h2 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] mb-12">// PRODUCT_BRIEF</h2>
                <p className="text-3xl md:text-5xl text-slate-300 leading-[1.1] font-light tracking-tight">{app.fullDescription}</p>
              </div>

              <div className="space-y-16">
                <h2 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] mb-4">// ARCHITECTURE_LOGS</h2>
                <p className="text-xl text-slate-500 leading-relaxed font-light">{app.howIBuiltIt}</p>
                
                <div className="bg-[#020617] border border-white/10 p-16 space-y-10">
                  <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Optimization Readouts</h3>
                  <div className="space-y-8">
                    {app.lessonsLearned.map((lesson, idx) => (
                      <div key={idx} className="flex gap-10 text-sm text-slate-400 font-light border-b border-white/5 pb-8 last:border-0">
                        <span className="text-cyan-400 mono font-black">LOG_0{idx + 1}</span>
                        {lesson}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="aspect-video w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 bg-slate-900">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={app.demoVideoUrl} 
                  title="System Feed" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-24">
                <div>
                  <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-10">Integration Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {app.toolsUsed.map(tool => (
                      <span key={tool} className="text-[9px] mono uppercase tracking-widest border border-white/10 px-4 py-2 text-slate-500">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-10">Recursive Prompts</h3>
                  <div className="space-y-4">
                    {app.prompts.map((prompt, idx) => (
                      <div key={idx} className="p-8 bg-white/5 border border-white/5 text-[11px] mono text-slate-500 italic leading-relaxed">
                        <span className="text-cyan-400/50 mb-2 block">/* QUERY_{idx} */</span>
                        "{prompt}"
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-16 border-t border-white/10 flex flex-col gap-4">
                  <a 
                    href={app.liveDemoUrl}
                    target="_blank"
                    className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] text-center hover:bg-cyan-400 transition-colors"
                  >
                    Initiate Interface
                  </a>
                  <a 
                    href={app.githubUrl}
                    target="_blank"
                    className="w-full py-6 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] text-center hover:bg-white/5 transition-colors"
                  >
                    Source Code [SSH]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDetail;
