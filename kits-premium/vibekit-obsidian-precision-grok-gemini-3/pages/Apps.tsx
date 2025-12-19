
import React from 'react';
import { APP_PROJECTS } from '../constants';

interface AppsProps {
  onNavigate: (path: string, id?: string) => void;
}

const Apps: React.FC<AppsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black min-h-screen pt-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 fade-in">
        <header className="mb-32 flex flex-col md:flex-row justify-between items-start gap-12 border-l-4 border-cyan-400 pl-12">
          <div className="max-w-2xl">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none">Product<br />Archive.</h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              An inventory of high-performance creative models developed at VibeKit Laboratories. Engineered for aesthetic precision.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 mono text-[10px] text-cyan-400 space-y-2 uppercase tracking-widest">
            <div>OBJECT_COUNT: 003</div>
            <div>SECTOR: CREATIVE_AI</div>
            <div>STATUS: ENCRYPTED</div>
          </div>
        </header>

        <div className="grid grid-cols-1 border-t border-white/10">
          {APP_PROJECTS.map((app) => (
            <div 
              key={app.id} 
              className="group flex flex-col lg:flex-row border-b border-white/10 hover:bg-slate-900/40 transition-all duration-700"
              onClick={() => onNavigate('app-detail', app.id)}
            >
              <div className="lg:w-1/3 aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border-r border-white/10">
                <img 
                  src={app.thumbnail} 
                  alt={app.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                />
              </div>
              <div className="lg:w-2/3 p-12 lg:p-24 flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">{app.title}</h3>
                  <div className="text-[10px] mono text-slate-600 uppercase tracking-[0.5em] mt-4">SERIAL_{app.id.slice(0,4).toUpperCase()}</div>
                </div>
                <p className="text-xl text-slate-400 mb-16 font-light leading-relaxed max-w-2xl">{app.shortDescription}</p>
                
                <div className="flex flex-wrap gap-4 mb-20">
                  {app.techStack.map(tech => (
                    <span key={tech} className="text-[10px] mono uppercase tracking-widest bg-white/5 px-6 py-2 text-slate-500 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-12 mt-auto">
                  <button 
                    className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-cyan-400 transition-all"
                  >
                    Specifications [LOAD]
                  </button>
                  <span className="text-xs font-black text-slate-600 uppercase tracking-widest group-hover:text-white transition-colors">
                    Click to Open Protocol →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
