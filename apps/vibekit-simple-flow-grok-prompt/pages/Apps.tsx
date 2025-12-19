
import React from 'react';
import { APP_PROJECTS } from '../constants';

interface AppsProps {
  onNavigate: (path: string, id?: string) => void;
}

const Apps: React.FC<AppsProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 fade-in">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Apps & Experiments</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Every project here started with a simple question: "What if code felt more like magic?" 
          Discover a collection of AI-native applications designed with a focus on simplicity and vibe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {APP_PROJECTS.map((app) => (
          <div key={app.id} className="group flex flex-col h-full bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden h-72">
              <img 
                src={app.thumbnail} 
                alt={app.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 right-6 flex gap-2">
                {app.techStack.slice(0, 2).map(tech => (
                  <span key={tech} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 border border-white/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{app.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{app.shortDescription}</p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => onNavigate('app-detail', app.id)}
                  className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Learn More
                </button>
                <a 
                  href={app.liveDemoUrl}
                  className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                  title="Live Demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
