
import React from 'react';
import { AppProject } from '../types';

interface AppDetailProps {
  app: AppProject;
  onBack: () => void;
}

const AppDetail: React.FC<AppDetailProps> = ({ app, onBack }) => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={app.heroImage} 
          alt={app.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Apps
            </button>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">{app.title}</h1>
            <div className="flex flex-wrap gap-3">
              {app.techStack.map(tech => (
                <span key={tech} className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Column */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Introduction</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{app.fullDescription}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">How I Built It</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{app.howIBuiltIt}</p>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    Lessons Learned
                  </h3>
                  <ul className="space-y-4">
                    {app.lessonsLearned.map((lesson, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-600">
                        <span className="text-indigo-500 font-bold">•</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Demo Video</h2>
                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={app.demoVideoUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-12">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {app.toolsUsed.map(tool => (
                      <span key={tool} className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">AI Prompts Shared</h3>
                  <div className="space-y-4">
                    {app.prompts.map((prompt, idx) => (
                      <div key={idx} className="p-4 bg-indigo-50 rounded-2xl border-l-4 border-indigo-500 italic text-sm text-slate-700">
                        "{prompt}"
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <div className="flex flex-col gap-4">
                    <a 
                      href={app.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-center hover:bg-indigo-700 transition-colors shadow-md"
                    >
                      View Live Demo
                    </a>
                    <a 
                      href={app.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-bold text-center hover:bg-slate-50 transition-colors"
                    >
                      GitHub Repo
                    </a>
                  </div>
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
