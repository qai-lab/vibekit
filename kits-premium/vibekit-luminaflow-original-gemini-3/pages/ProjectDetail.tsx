
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-8xl font-black mb-6 vibe-text-gradient">404</h1>
          <p className="text-slate-500 mb-10 text-xl font-bold">Node missing from grid.</p>
          <Link to="/" className="px-10 py-5 vibe-gradient text-white font-black rounded-xl uppercase tracking-widest text-xs">Return to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-40">
      {/* OS-Style Header */}
      <div className="px-6 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center group-hover:border-cyan-500/30 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </div>
          Exit Model Preview
        </button>
        
        <div className="flex gap-4">
          <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass rounded-xl border-white/10 hover:border-cyan-500/30 text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-3 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Kernel Source
          </a>
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-3 vibe-gradient text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20">
            Launch Engine
          </a>
        </div>
      </div>

      {/* Detail Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden mb-16 shadow-2xl border border-cyan-500/10 image-placeholder p-[1px] vibe-gradient">
          <div className="bg-[#020617] w-full h-full rounded-[47px] overflow-hidden relative">
            {loading && <div className="absolute inset-0 shimmer z-10" />}
            
            {imgError ? (
              <div className="absolute inset-0 vibe-gradient flex items-center justify-center opacity-40">
                 <h1 className="text-6xl md:text-9xl font-black text-white/10 tracking-tighter uppercase select-none">{project.title}</h1>
              </div>
            ) : (
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                onLoad={() => setLoading(false)}
                onError={() => {
                  setImgError(true);
                  setLoading(false);
                }}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`} 
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-16 left-16 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                 <span className="w-10 h-1 bg-cyan-500 rounded-full"></span>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400">Project Profile // {project.id}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">{project.title}</h1>
              <p className="text-xl text-slate-400 font-medium max-w-xl">{project.tagline}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
             <div className="p-10 glass rounded-[40px] border-cyan-500/10">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-8">Architectural Overview</h3>
               <p className="text-2xl text-slate-300 leading-snug font-medium tracking-tight">{project.howIBuiltIt}</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">Resource Stack</h3>
                   <div className="flex flex-wrap gap-3">
                     {project.tools.map(tool => (
                       <span key={tool} className="px-5 py-2.5 glass rounded-xl text-[11px] font-bold text-slate-300 border border-white/5 hover:border-cyan-500/30 transition-all cursor-default">{tool}</span>
                     ))}
                   </div>
                </div>
                <div className="space-y-6">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">Neural Core</h3>
                   <div className="flex flex-wrap gap-3">
                     {project.techStack.map(tech => (
                       <span key={tech} className="px-5 py-2.5 bg-white/5 rounded-xl text-[11px] font-bold text-slate-400 border border-white/5 hover:bg-white/10 transition-all cursor-default">{tech}</span>
                     ))}
                   </div>
                </div>
             </div>

             <div className="space-y-10">
               <div className="flex items-center gap-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">Prompt Sequence</h3>
                  <div className="flex-1 h-[1px] bg-white/5"></div>
               </div>
               <div className="grid grid-cols-1 gap-4">
                 {project.prompts.map((prompt, i) => (
                   <div key={i} className="group p-8 rounded-[32px] bg-slate-900/30 border border-white/5 relative hover:border-cyan-500/20 transition-all">
                     <div className="absolute top-8 right-8 text-[8px] font-black text-slate-700 tracking-[0.3em] uppercase">Instruction Vector {i + 1}</div>
                     <p className="text-sm font-mono text-slate-400 italic leading-relaxed group-hover:text-slate-200 transition-colors">"{prompt}"</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="lg:col-span-4">
            <div className="glass p-10 rounded-[40px] border-cyan-500/10 sticky top-32 space-y-12">
               <div>
                  <h3 className="text-lg font-black mb-10 flex items-center gap-4 uppercase tracking-tighter">
                    <span className="w-1.5 h-6 vibe-gradient rounded-full" />
                    Model Optimization
                  </h3>
                  <ul className="space-y-8">
                    {project.lessonsLearnt.map((lesson, i) => (
                      <li key={i} className="flex gap-5 items-start">
                        <span className="text-cyan-500 font-black text-sm font-mono mt-1">[{i + 1}]</span>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">{lesson}</p>
                      </li>
                    ))}
                  </ul>
               </div>
               
               {project.demoVideoUrl && (
                 <div className="pt-10 border-t border-white/5">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">Output Sample 4K</h3>
                   <a 
                     href={project.demoVideoUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block aspect-video rounded-[32px] overflow-hidden relative group bg-black p-[1px] vibe-gradient"
                   >
                     <div className="bg-black w-full h-full rounded-[31px] overflow-hidden relative">
                        <img 
                          src={`https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=60&w=600`} 
                          alt="Video Preview"
                          className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                           </div>
                        </div>
                     </div>
                   </a>
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Propagation / Other Projects */}
      <section className="px-6 max-w-7xl mx-auto pt-32 border-t border-white/5">
        <div className="flex justify-between items-center mb-16">
           <h2 className="text-3xl font-black uppercase tracking-tighter">Propagation Grid</h2>
           <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors">Return to Root ➔</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {PROJECTS.filter(p => p.id !== project.id).map(p => (
             <Link key={p.id} to={`/project/${p.id}`} className="glass group overflow-hidden rounded-[40px] p-6 transition-all hover:translate-y-[-8px] hover:border-cyan-500/30">
               <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-white/5">
                 <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
               </div>
               <h4 className="text-xl font-black mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{p.title}</h4>
               <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{p.category} // CLUSTER</p>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};
