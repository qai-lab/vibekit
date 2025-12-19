
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data';

export const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const app = SITE_DATA.apps.find(a => a.id === id);

  if (!app) return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-white">App Not Found</h1>
      <Link to="/apps" className="text-indigo-500 mt-4 block underline">Back to Apps</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/apps" className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 mb-8 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Gallery
      </Link>

      <img src={app.imageUrl} alt={app.title} className="w-full h-80 object-cover rounded-3xl shadow-2xl mb-12" />

      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {app.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/20">#{tag}</span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">{app.title}</h1>
        <p className="text-xl text-slate-300 leading-relaxed">{app.description}</p>
        
        <div className="flex gap-4 mt-8">
          {app.links.map(link => (
            <a key={link.label} href={link.url} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all">
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12">
        <section className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-indigo-500">⚡</span> Core Prompts
          </h2>
          <div className="space-y-4">
            {app.prompts.map((prompt, i) => (
              <div key={i} className="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm text-slate-300 relative">
                <div className="absolute top-0 right-0 p-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest">Input {i + 1}</div>
                {prompt}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-indigo-500">🎓</span> Lessons Learned
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {app.lessons.map((lesson, i) => (
              <li key={i} className="flex gap-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                <span className="text-indigo-500 font-bold text-lg">0{i + 1}.</span>
                <p className="text-slate-400">{lesson}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
