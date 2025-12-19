
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex items-center justify-between border-b border-cyan-500/10">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
             <div className="absolute inset-0 vibe-gradient rounded-full animate-pulse opacity-50 blur-sm"></div>
             <div className="relative w-8 h-8 bg-slate-950 rounded-full border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                <div className="w-4 h-4 vibe-gradient rotate-45 group-hover:rotate-180 transition-transform duration-700"></div>
             </div>
          </div>
          <div className="flex flex-col">
            <span className="font-space font-black text-xl tracking-tighter leading-none text-white">VibeKit</span>
            <span className="text-[7px] uppercase tracking-[0.5em] font-black text-cyan-400 opacity-80">LuminaFlow OS v4.0</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 border-l border-white/5 pl-10">
          <Link to="/" className={`group flex flex-col items-start ${location.pathname === '/' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover:text-cyan-500">01</span>
            <span className="text-xs font-bold text-slate-300 tracking-tight">Showcase</span>
          </Link>
          <Link to="/insights" className={`group flex flex-col items-start ${location.pathname === '/insights' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover:text-cyan-500">02</span>
            <span className="text-xs font-bold text-slate-300 tracking-tight">Insights</span>
          </Link>
          <Link to="/labs" className={`group flex flex-col items-start ${location.pathname === '/labs' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover:text-cyan-500">03</span>
            <span className="text-xs font-bold text-slate-300 tracking-tight">The Labs</span>
          </Link>
          <Link to="/docs" className={`group flex flex-col items-start ${location.pathname === '/docs' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover:text-cyan-500">04</span>
            <span className="text-xs font-bold text-slate-300 tracking-tight">Docs</span>
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end">
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">System Nominal</span>
           </div>
           <span className="text-[8px] font-mono text-slate-600">LATENCY: 14ms</span>
        </div>
        <button className="relative group px-6 py-2 bg-white text-black rounded-lg text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95">
          <span className="relative z-10">Deploy App</span>
          <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform"></div>
        </button>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="border-t border-cyan-500/10 pt-24 pb-12 px-6 mt-20 bg-slate-950/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black text-lg">V</div>
          <span className="font-space font-black text-2xl tracking-tighter">VibeKit</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-sm">
          Pioneering generative operating systems under the LuminaFlow architecture. We build the interfaces for the synthetic era.
        </p>
        <div className="mt-8 flex gap-4">
           {['TW', 'GH', 'LI', 'DS'].map(s => (
             <a key={s} href="#" className="w-10 h-10 glass flex items-center justify-center text-[10px] font-black text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all rounded-xl">{s}</a>
           ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-cyan-500">Resource Nodes</h4>
        <ul className="space-y-4 text-xs font-bold text-slate-400">
          <li><Link to="/docs" className="hover:text-cyan-400 transition-colors">Compute Allocations</Link></li>
          <li><Link to="/docs" className="hover:text-cyan-400 transition-colors">Model Documentation</Link></li>
          <li><Link to="/labs" className="hover:text-cyan-400 transition-colors">Experimental Prototypes</Link></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-cyan-500">Legal Core</h4>
        <ul className="space-y-4 text-xs font-bold text-slate-400">
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Neural Mesh</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Licensing</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Ethical AI Charter</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
       <div className="flex items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">© 2024 VibeKit-LuminaFlow-original</p>
          <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
          <p className="text-[10px] font-mono text-slate-600">UID: VK-882-SYNTH</p>
       </div>
       <div className="flex gap-4">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black rounded-full uppercase">Global Status: Online</span>
       </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <div className="scanline"></div>
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};
