
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl font-black mb-6">404</h1>
          <p className="text-gray-400 mb-8 text-xl">Project not found in the vibe ether.</p>
          <Link to="/" className="px-8 py-4 bg-white text-black font-bold rounded-2xl">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Header & Back Button */}
      <div className="px-6 max-w-7xl mx-auto mb-12 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          Back to Portfolio
        </button>
        
        <div className="flex gap-4">
          <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white text-black font-bold rounded-xl hover:bg-purple-50 transition-colors">
            Live Demo
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden mb-12 shadow-2xl border border-white/5">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">{project.title}</h1>
            <p className="text-xl text-gray-300 font-light">{project.tagline}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-16">
             <div>
               <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">How I built it</h3>
               <p className="text-xl text-gray-300 leading-relaxed font-light">{project.howIBuiltIt}</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">Tools Used</h3>
                   <div className="flex flex-wrap gap-3">
                     {project.tools.map(tool => (
                       <span key={tool} className="px-4 py-2 glass rounded-xl text-sm font-medium border-white/5">{tool}</span>
                     ))}
                   </div>
                </div>
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">Tech Stack</h3>
                   <div className="flex flex-wrap gap-3">
                     {project.techStack.map(tech => (
                       <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium border border-white/5">{tech}</span>
                     ))}
                   </div>
                </div>
             </div>

             <div>
               <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">The Prompts</h3>
               <div className="space-y-4">
                 {project.prompts.map((prompt, i) => (
                   <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 relative group hover:bg-white/[0.05] transition-colors">
                     <div className="absolute top-4 right-4 text-[10px] font-bold text-gray-600">PROMPT {i + 1}</div>
                     <p className="text-sm font-mono text-gray-400 italic">"{prompt}"</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Sidebar / Lessons */}
          <div className="space-y-12">
            <div className="glass p-8 rounded-[32px] border-white/10 sticky top-32">
               <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                 <span className="w-2 h-6 bg-purple-500 rounded-full" />
                 Lessons Learnt
               </h3>
               <ul className="space-y-6">
                 {project.lessonsLearnt.map((lesson, i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <span className="text-purple-500 font-bold text-lg leading-none">{i + 1}.</span>
                     <p className="text-sm text-gray-400 leading-relaxed">{lesson}</p>
                   </li>
                 ))}
               </ul>
               
               {project.demoVideoUrl && (
                 <div className="mt-12 pt-12 border-t border-white/10">
                   <h3 className="text-lg font-bold mb-6">Demo Video</h3>
                   <a 
                     href={project.demoVideoUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block aspect-video rounded-2xl overflow-hidden relative group"
                   >
                     <img src={`https://picsum.photos/seed/${project.id}-video/400/225`} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-xl group-hover:scale-110 transition-transform">
                           <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                     </div>
                   </a>
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="px-6 max-w-7xl mx-auto pt-20 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {PROJECTS.filter(p => p.id !== project.id).map(p => (
             <Link key={p.id} to={`/project/${p.id}`} className="glass group overflow-hidden rounded-3xl p-4 transition-all hover:-translate-y-2">
               <img src={p.thumbnail} className="aspect-video object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-500" />
               <h4 className="font-bold group-hover:text-purple-400 transition-colors">{p.title}</h4>
               <p className="text-xs text-gray-500">{p.tagline}</p>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};
