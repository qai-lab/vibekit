import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ExternalLink, Github, Copy, Check, Terminal, 
  Cpu, Wrench, Lightbulb, PlayCircle, Calendar, Zap, Warehouse 
} from 'lucide-react';
import { APPS } from '../data';

const AppDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const app = APPS.find(a => a.id === id);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center p-16 bg-brand-50 dark:bg-brand-900 rounded-[3rem] border border-brand-100 dark:border-brand-800">
          <h2 className="text-4xl font-black mb-6">Archive Missing.</h2>
          <Link to="/apps" className="px-8 py-3 bg-brand-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-brand-500/20">Return to Workshop</Link>
        </div>
      </div>
    );
  }

  const copyPrompt = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedPrompt(content);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="bg-brand-50 dark:bg-brand-900/60 border-b border-brand-100 dark:border-brand-800 pt-20 pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 text-brand-500/5 pointer-events-none translate-x-32 -translate-y-32">
          <Warehouse size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/apps" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 hover:text-brand-700 mb-12 transition-all group">
            <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
            BACK TO WORKSHOP
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {app.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white dark:bg-brand-800/80 text-brand-600 dark:text-brand-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-brand-200 dark:border-brand-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">{app.name}</h1>
              <p className="text-2xl text-brand-700 dark:text-brand-400 mb-12 leading-relaxed font-medium">
                {app.description}
              </p>
              <div className="flex flex-wrap gap-6">
                <a href={app.liveUrl} className="px-10 py-5 bg-brand-500 hover:bg-brand-600 text-white rounded-3xl font-black uppercase tracking-widest flex items-center space-x-3 transition-all shadow-2xl shadow-brand-500/20">
                  <ExternalLink size={20} />
                  <span>Launch Live</span>
                </a>
                <a href={app.sourceUrl} className="px-10 py-5 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 text-brand-950 dark:text-white rounded-3xl font-black uppercase tracking-widest flex items-center space-x-3 hover:bg-brand-50 transition-all shadow-sm">
                  <Github size={20} />
                  <span>View Source</span>
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-haven-amber rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <img 
                src={app.thumbnail} 
                alt={app.name} 
                className="relative w-full aspect-[4/3] object-cover rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-8 border-white dark:border-brand-800"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Tech Stack */}
            <section>
              <h2 className="text-3xl font-black mb-10 flex items-center">
                <Cpu className="mr-4 text-brand-500" size={32} />
                Resource Palette
              </h2>
              <div className="flex flex-wrap gap-4">
                {app.techStack.map(tech => (
                  <div key={tech} className="px-6 py-3 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-2xl text-sm font-black uppercase tracking-widest shadow-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* Build Process */}
            <section>
              <h2 className="text-3xl font-black mb-12 flex items-center">
                <Terminal className="mr-4 text-haven-amber" size={32} />
                Workshop Log
              </h2>
              <div className="space-y-12">
                {app.buildProcess.map((step, idx) => (
                  <div key={idx} className="flex space-x-10 group/step">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl vibe-gradient flex items-center justify-center text-white text-base font-black shadow-lg shadow-brand-500/20 transition-transform group-hover/step:rotate-12">
                        {idx + 1}
                      </div>
                      {idx !== app.buildProcess.length - 1 && <div className="w-1 flex-grow bg-brand-100 dark:bg-brand-800 mt-4 rounded-full"></div>}
                    </div>
                    <div className="pb-12 flex-grow">
                      <h3 className="text-2xl font-black mb-4">{step.step}</h3>
                      <div className="p-8 bg-brand-50 dark:bg-brand-900/50 rounded-[2rem] border border-brand-100 dark:border-brand-800 text-lg text-brand-700 dark:text-brand-300 leading-relaxed font-medium">
                        {step.details}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Prompts */}
            <section>
              <h2 className="text-3xl font-black mb-12 flex items-center">
                <Lightbulb className="mr-4 text-haven-amber" size={32} />
                Architectural Prompts
              </h2>
              <div className="space-y-8">
                {app.prompts.map((prompt, idx) => (
                  <div key={idx} className="bg-white dark:bg-brand-900 rounded-3xl p-10 border border-brand-100 dark:border-brand-800 shadow-xl shadow-brand-500/5 group/prompt">
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        <h3 className="font-black text-xs uppercase tracking-[0.2em] text-brand-500">{prompt.title}</h3>
                      </div>
                      <button 
                        onClick={() => copyPrompt(prompt.content)}
                        className="p-3 bg-brand-50 dark:bg-brand-800 rounded-xl text-brand-400 hover:text-brand-500 transition-all active:scale-95"
                      >
                        {copiedPrompt === prompt.content ? <Check size={20} className="text-brand-500" /> : <Copy size={20} />}
                      </button>
                    </div>
                    <div className="p-8 bg-brand-950 rounded-2xl overflow-hidden">
                      <code className="block font-mono text-sm leading-relaxed whitespace-pre-wrap text-brand-100">
                        {prompt.content}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons */}
            <section>
              <h2 className="text-3xl font-black mb-10 flex items-center">
                <Zap className="mr-4 text-haven-amber" size={32} />
                Hard-Earned Seeds
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {app.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-center space-x-5 p-6 bg-brand-50 dark:bg-brand-900/40 border border-brand-100 dark:border-brand-800 rounded-3xl font-bold text-brand-800 dark:text-brand-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-800 flex items-center justify-center text-brand-500 shrink-0">
                      <Check size={20} />
                    </div>
                    <span className="text-lg">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-[3rem] p-10 sticky top-28 shadow-xl">
              <h3 className="text-xl font-black mb-8 flex items-center">
                <Wrench className="mr-3 text-brand-400" size={24} />
                Toolbox Assets
              </h3>
              <ul className="space-y-5 mb-12">
                {app.tools.map(tool => (
                  <li key={tool} className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-50 dark:ring-brand-900"></div>
                    <span className="text-base font-bold text-brand-950 dark:text-white">{tool}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-black mb-8 flex items-center">
                <Calendar className="mr-3 text-brand-400" size={24} />
                Workshop Timeline
              </h3>
              <div className="space-y-8">
                {app.timeline.map((event, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="text-[10px] font-black text-brand-500 pt-1 shrink-0 w-24 uppercase tracking-widest leading-none">
                      {event.date}
                    </div>
                    <div className="text-sm font-bold text-brand-800 dark:text-brand-300 leading-snug">
                      {event.milestone}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-brand-100 dark:border-brand-800">
                <button className="w-full py-5 bg-brand-100 dark:bg-brand-800 hover:bg-brand-200 dark:hover:bg-brand-700 rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 transition-all shadow-sm">
                  <PlayCircle size={20} className="text-brand-500" />
                  <span>Workshop Overview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;