
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Github, Linkedin, Twitter, Youtube, 
  ArrowRight, ExternalLink, Play, Code, Cpu, 
  ChevronDown, Sparkles, Podcast as PodcastIcon, Newspaper, Terminal, Zap, Shield,
  Activity, Radio, Database, Info, Wifi, Clock, Send, MessageSquare, Globe, Lock
} from 'lucide-react';
import { PROJECTS, PODCASTS, INSIGHTS } from './data';
import { Project, Insight } from './types';

// Safe Image Component for Gaming Aesthetics
const SafeImage: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string; 
  aspectRatio?: string;
}> = ({ src, alt, className = "", aspectRatio = "aspect-video" }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-900 border border-white/5 ${aspectRatio} ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
           <Zap className="text-[#00ff88] animate-pulse" size={24} />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] p-4 text-center">
          <Shield className="text-[#ff003c] mb-2" size={32} />
          <span className="text-[10px] uppercase font-black text-[#ff003c]/70 tracking-tighter">Asset Security Failure</span>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        />
      )}
    </div>
  );
};

// HUD Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString([], { hour12: false })), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'FILES', href: '#projects', icon: <Database size={14} /> },
    { name: 'BROADCAST', href: '#podcasts', icon: <Radio size={14} /> },
    { name: 'BANK', href: '#insights', icon: <Lock size={14} /> },
    { name: 'SIGNAL', href: '#contact', icon: <MessageSquare size={14} /> },
  ];

  return (
    <nav className="fixed w-full z-50 p-6 flex justify-center pointer-events-none">
      <div className="max-w-7xl w-full flex justify-between items-center bg-black/80 border border-white/10 backdrop-blur-md px-8 py-3 rounded-sm pointer-events-auto">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#00ff88] text-black flex items-center justify-center rounded-sm transition-transform group-hover:rotate-180">
              <Terminal size={20} />
            </div>
            <span className="font-gamer text-lg text-white font-black tracking-tighter">VIBE<span className="text-[#00ff88]">KIT</span></span>
          </a>
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold text-gray-500">
             <div className="flex items-center gap-2 border-l border-white/10 pl-6"><Clock size={14} className="text-[#00ff88]" /> {time}</div>
             <div className="flex items-center gap-2"><Wifi size={14} className="text-[#ff003c]" /> 22 MS</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-gray-400 hover:text-[#00ff88] transition-all group">
              {link.icon} <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-[#ff003c] text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,0,60,0.4)]">
            DEPLOY SIGNAL
          </a>
        </div>

        <button className="md:hidden text-[#00ff88]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-[60] flex flex-col p-12 gap-10">
          <button className="self-end text-[#ff003c]" onClick={() => setIsOpen(false)}><X size={48} /></button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-black text-[#00ff88] font-gamer">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const StatBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[9px] font-black uppercase tracking-tighter text-gray-500">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-1.5 bg-white/5 overflow-hidden">
      <div className="h-full transition-all duration-1000 ease-out" style={{ width: `${value}%`, backgroundColor: color }} />
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#00ff88]/30 transition-all duration-300 cursor-pointer corner-border p-1" onClick={onClick}>
      <SafeImage src={project.thumbnail} alt={project.title} className="grayscale group-hover:grayscale-0 transition-all" />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-black text-white font-gamer group-hover:text-[#00ff88] transition-colors">{project.title}</h3>
          <span className="text-[9px] font-black px-2 py-0.5 border border-[#ff003c] text-[#ff003c]">{project.id}</span>
        </div>
        
        <div className="space-y-3">
          <StatBar label="Complexity" value={project.stats.complexity} color="#00ff88" />
          <StatBar label="Vibe Index" value={project.stats.vibe} color="#ff003c" />
        </div>

        <p className="text-gray-500 text-xs font-bold leading-relaxed uppercase">{project.oneLiner}</p>

        <div className="pt-4 flex gap-2 overflow-x-auto scrollbar-hide">
           {project.techStack.map(t => (
             <span key={t} className="text-[8px] px-2 py-1 bg-white/5 text-gray-500 border border-white/10 uppercase font-black whitespace-nowrap">{t}</span>
           ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[#00ff88]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
         <div className="px-6 py-3 bg-[#00ff88] text-black font-black uppercase text-sm tracking-tighter shadow-[0_0_30px_#00ff88]">Initialize Protocol</div>
      </div>
    </div>
  );
};

const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/98 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#080808] border border-[#00ff88]/20 flex flex-col md:flex-row overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-500 hover:text-[#ff003c] z-10 transition-colors"><X size={32} /></button>
        
        <div className="w-full md:w-96 border-r border-white/10 bg-black p-10 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-12">
            <div>
              <span className="text-[10px] font-black text-[#00ff88] tracking-[0.4em] mb-4 block">ACTIVE_SEC_PROTO: {project.id}</span>
              <h2 className="text-4xl font-black font-gamer text-white leading-none">{project.title}</h2>
            </div>
            <div className="space-y-6">
              <StatBar label="Power Level" value={project.stats.power} color="#00ff88" />
              <StatBar label="Logic Depth" value={project.stats.complexity} color="#ff003c" />
              <StatBar label="Aesthetics" value={project.stats.vibe} color="#ffffff" />
            </div>
            <div className="space-y-4">
               <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Stack Loadout</h4>
               <div className="flex flex-wrap gap-2">
                 {project.techStack.map(t => (
                   <span key={t} className="px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] font-black text-gray-400">{t}</span>
                 ))}
               </div>
            </div>
          </div>
          <div className="mt-12 space-y-4">
             <button className="w-full py-4 bg-[#00ff88] text-black font-black font-gamer uppercase hover:scale-[1.02] transition-all">Launch Link</button>
             <button className="w-full py-4 border border-white/10 text-white font-black uppercase text-sm hover:bg-white/5 transition-all">Download Assets</button>
          </div>
        </div>

        <div className="flex-1 p-10 md:p-16 overflow-y-auto space-y-16">
          <div className="aspect-video bg-black border border-white/10 relative group">
             {project.videoUrl ? (
               <iframe src={project.videoUrl} className="w-full h-full" allowFullScreen />
             ) : (
               <SafeImage src={project.thumbnail} alt={project.title} className="w-full h-full opacity-60" />
             )}
             <div className="absolute top-4 left-4 p-2 bg-black/80 text-[#00ff88] text-[9px] font-black border border-[#00ff88]/30">STREAMS_OK // 2160P</div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
               <h3 className="text-2xl font-black text-[#00ff88] font-gamer flex items-center gap-4"><Zap size={24} /> Mission Brief</h3>
               <p className="text-gray-400 text-lg font-medium leading-relaxed uppercase tracking-tight">{project.description}</p>
            </div>
            <div className="space-y-8">
               <h3 className="text-2xl font-black text-[#ff003c] font-gamer flex items-center gap-4"><Shield size={24} /> Audit Trail</h3>
               <p className="text-gray-500 text-sm font-mono leading-relaxed uppercase">{project.lessons}</p>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-10 border border-white/5 space-y-8">
             <h3 className="text-2xl font-black text-white font-gamer flex items-center gap-4"><Terminal size={24} className="text-[#00ff88]" /> Command Logs</h3>
             <div className="space-y-6">
                {project.prompts.map((p, i) => (
                  <div key={i} className="flex gap-6 items-start">
                     <span className="text-xs font-black text-gray-700 font-mono mt-1">LOG_0{i+1}</span>
                     <p className="text-gray-400 italic text-sm leading-relaxed border-l-2 border-[#00ff88]/50 pl-6">"{p}"</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Module */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
           <div className="absolute top-1/4 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00ff88] to-transparent"></div>
           <div className="absolute top-1/3 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#ff003c] to-transparent"></div>
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="z-10 text-center px-6 max-w-6xl space-y-12">
           <div className="inline-flex items-center gap-4 px-6 py-2 bg-black border border-[#00ff88]/40 text-[#00ff88] text-[10px] font-black uppercase tracking-[0.6em] animate-pulse">
             System_Online // V2.4.9
           </div>
           
           <h1 className="text-7xl md:text-[160px] font-black font-gamer leading-[0.85] tracking-tighter text-white">
              VIBE<span className="text-[#00ff88] glitch-text" data-text="KIT">KIT</span><br/>
              <span className="text-2xl md:text-5xl opacity-40 block mt-4 font-gamer">ARCHITECT_SYSTEM_OS</span>
           </h1>

           <p className="text-gray-500 max-w-3xl mx-auto uppercase font-black text-sm md:text-xl leading-tight tracking-tight">
              Syntax is legacy. <span className="text-white">Intent</span> is current. Building the next generation of software via high-frequency AI orchestration.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-12">
              <a href="#projects" className="px-14 py-6 bg-[#00ff88] text-black font-black font-gamer uppercase text-lg shadow-[0_0_40px_#00ff88] hover:scale-105 transition-all">
                 Enter Terminal
              </a>
              <a href="#podcasts" className="text-white font-black uppercase text-sm font-gamer flex items-center gap-4 hover:text-[#ff003c] transition-colors group">
                 <Radio size={24} className="group-hover:animate-pulse" /> Comm Channel
              </a>
           </div>
        </div>

        <a href="#projects" className="absolute bottom-16 left-1/2 -translate-x-1/2 text-zinc-800 flex flex-col items-center gap-4">
           <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll to Decode</span>
           <ChevronDown className="animate-bounce" size={32} />
        </a>
      </section>

      {/* Stats Dashboard */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
           {[
             { label: 'Uptime', val: '99.9%', icon: <Activity className="text-[#00ff88]" /> },
             { label: 'Latency', val: '24ms', icon: <Wifi className="text-[#ff003c]" /> },
             { label: 'Agents', val: '14 Active', icon: <Cpu className="text-white" /> },
             { label: 'Secure', val: 'AES-256', icon: <Shield className="text-blue-500" /> },
           ].map((s, i) => (
             <div key={i} className="space-y-4">
                <div className="flex justify-center">{s.icon}</div>
                <div className="text-3xl font-black font-gamer">{s.val}</div>
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{s.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex items-end gap-8 mb-24">
           <div className="w-16 h-16 bg-[#00ff88] flex items-center justify-center rounded-sm">
              <Database size={32} className="text-black" />
           </div>
           <div>
              <h2 className="text-6xl font-black font-gamer leading-none">THE_TERMINAL</h2>
              <p className="text-gray-500 mt-3 text-xs font-black uppercase tracking-[0.4em]">Encrypted Project Logs // Ready for Deployment</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
          ))}
        </div>
      </section>

      {/* Podcasts Section */}
      <section id="podcasts" className="py-40 bg-black border-y border-[#ff003c]/20">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex items-center gap-8 mb-24">
              <h2 className="text-6xl font-black font-gamer text-[#ff003c]">COMM_FEED</h2>
              <div className="flex-1 h-[1px] bg-white/5"></div>
           </div>
           <div className="grid lg:grid-cols-2 gap-12">
             {PODCASTS.map(pod => (
               <div key={pod.id} className="flex flex-col md:flex-row gap-10 p-10 bg-zinc-900/30 border border-white/5 group hover:bg-zinc-900 transition-all">
                  <div className="w-full md:w-52 h-52 shrink-0 grayscale group-hover:grayscale-0 transition-all">
                     <SafeImage src={pod.imageUrl} alt={pod.title} aspectRatio="aspect-square" />
                  </div>
                  <div className="flex flex-col justify-between py-2 space-y-6">
                     <div className="space-y-4">
                        <span className="text-[10px] font-black text-[#00ff88] tracking-widest uppercase">{pod.date}</span>
                        <h3 className="text-3xl font-black font-gamer text-white leading-none">{pod.title}</h3>
                        <p className="text-xs text-gray-500 uppercase font-black leading-relaxed">
                          Guest: {pod.guest} // {pod.summary}
                        </p>
                     </div>
                     <button className="flex items-center gap-6 text-white font-black uppercase text-xs tracking-widest hover:text-[#00ff88] transition-colors">
                        <div className="w-14 h-14 bg-[#ff003c] flex items-center justify-center shadow-[0_0_20px_#ff003c] group-hover:scale-110 transition-all">
                           <Play size={20} fill="white" />
                        </div>
                        Open Signal Link
                     </button>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-12 gap-12">
           <div>
              <h2 className="text-6xl font-black font-gamer">INTEL_BANK</h2>
              <p className="text-gray-500 mt-4 text-xs font-black uppercase tracking-[0.3em]">Encrypted Intelligence Stream</p>
           </div>
           <div className="flex gap-4">
              {['TECH', 'AI', 'OPINION'].map(tag => (
                <button key={tag} className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] font-black uppercase hover:border-[#00ff88] transition-all">
                  {tag}
                </button>
              ))}
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {INSIGHTS.map(insight => (
            <div key={insight.id} className="p-12 bg-white/[0.02] border border-white/5 group hover:border-[#00ff88]/30 transition-all">
               <div className="flex items-center gap-6 mb-10">
                  <span className="px-3 py-1 bg-[#00ff88] text-black text-[10px] font-black uppercase">{insight.tag}</span>
                  <span className="text-gray-600 text-[10px] font-black uppercase">{insight.date}</span>
               </div>
               <h3 className="text-4xl font-black font-gamer mb-10 group-hover:text-[#00ff88] transition-colors leading-tight">{insight.title}</h3>
               <p className="text-gray-500 text-sm font-bold uppercase leading-relaxed mb-12">{insight.content}</p>
               <button className="text-[#00ff88] font-black text-xs tracking-[0.4em] uppercase flex items-center gap-6 group-hover:gap-10 transition-all">
                  Access Intellectual Property <ArrowRight size={20} />
               </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-zinc-950 border-t border-[#ff003c]">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
            <h2 className="text-6xl font-black font-gamer text-white glitch-text" data-text="DEPLOY_SIGNAL">DEPLOY_SIGNAL</h2>
            <div className="bg-black p-12 border border-white/10 space-y-12 corner-border">
               <div className="grid md:grid-cols-2 gap-10">
                  <div className="text-left space-y-2">
                     <label className="text-[10px] font-black text-[#ff003c] uppercase">Sender_Ident</label>
                     <input type="text" placeholder="GUEST_123..." className="w-full bg-zinc-900 border border-white/10 p-5 text-white font-black uppercase text-sm focus:border-[#00ff88] outline-none transition-all" />
                  </div>
                  <div className="text-left space-y-2">
                     <label className="text-[10px] font-black text-[#ff003c] uppercase">Target_Channel</label>
                     <input type="email" placeholder="SECURE_MAIL..." className="w-full bg-zinc-900 border border-white/10 p-5 text-white font-black uppercase text-sm focus:border-[#00ff88] outline-none transition-all" />
                  </div>
               </div>
               <div className="text-left space-y-2">
                  <label className="text-[10px] font-black text-[#ff003c] uppercase">Encrypted_Message</label>
                  <textarea rows={6} placeholder="INITIATE DATA TRANSMISSION..." className="w-full bg-zinc-900 border border-white/10 p-5 text-white font-black uppercase text-sm focus:border-[#00ff88] outline-none transition-all" />
               </div>
               <button className="w-full py-6 bg-[#ff003c] text-white font-black font-gamer uppercase text-xl shadow-[0_0_30px_#ff003c] hover:scale-105 transition-all flex items-center justify-center gap-4">
                  Deploy Signal <Send size={24} />
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-40 bg-black border-t border-white/10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-24 mb-32">
               <div className="space-y-12">
                  <a href="#" className="text-5xl font-black font-gamer text-white uppercase tracking-tighter">VIBE<span className="text-[#00ff88]">KIT</span></a>
                  <p className="text-gray-500 text-2xl font-black uppercase leading-none">
                     Future-Proofing <br/> Software Through <br/> <span className="text-[#00ff88]">Intent</span>.
                  </p>
                  <div className="flex gap-6">
                     {[Github, Linkedin, Twitter, Youtube].map((Icon, i) => (
                       <a key={i} href="#" className="p-5 bg-zinc-900 border border-white/5 text-gray-500 hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-all">
                          <Icon size={24} />
                       </a>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-12 lg:col-span-2">
                  <div className="space-y-8">
                     <h4 className="text-[#ff003c] font-black uppercase text-xs tracking-widest">Sectors</h4>
                     <ul className="space-y-6 text-gray-500 font-black text-sm uppercase">
                        <li><a href="#projects" className="hover:text-white transition-colors">Files Terminal</a></li>
                        <li><a href="#podcasts" className="hover:text-white transition-colors">Broadcasting</a></li>
                        <li><a href="#insights" className="hover:text-white transition-colors">Intel Bank</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">Signal Ops</a></li>
                     </ul>
                  </div>
                  <div className="space-y-8">
                     <h4 className="text-[#ff003c] font-black uppercase text-xs tracking-widest">Sys_Specs</h4>
                     <div className="p-6 bg-zinc-900 border border-white/5 space-y-6">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase">
                           <span className="text-gray-500">Global Uptime</span>
                           <span className="text-[#00ff88]">100.0%</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase">
                           <span className="text-gray-500">Encryption</span>
                           <span className="text-[#00ff88]">Quantum_Safe</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase">
                           <span className="text-gray-500">Core OS</span>
                           <span className="text-[#00ff88]">GEMINI_3_PRV</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
               <div className="text-[10px] font-black text-gray-700 uppercase tracking-[0.5em]">© 2024 VIBEKIT_NETWORKS // ALL RIGHTS SECURED</div>
               <div className="flex items-center gap-4 text-[10px] font-black text-[#00ff88] uppercase tracking-widest animate-pulse">
                  <Globe size={14} /> Global Node: Connected
               </div>
            </div>
         </div>
      </footer>

      {/* Ticker */}
      <div className="fixed bottom-0 left-0 w-full h-10 bg-black/90 border-t border-[#00ff88]/20 flex items-center px-8 z-40">
         <div className="flex gap-20 whitespace-nowrap animate-marquee">
            {[1,2,3].map(i => (
              <span key={i} className="text-[9px] font-black text-[#00ff88] opacity-60 font-mono tracking-widest uppercase">
                 SYS_BOOT_COMPLETE // LATENCY: 24MS // GEMINI_TOKEN_SPEED: 180 T/S // UPTIME: 1420:04:12 // SIGNAL: STRONG // ARCHITECT_CONNECTED
              </span>
            ))}
         </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
