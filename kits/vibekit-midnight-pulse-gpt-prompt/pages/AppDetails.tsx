
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ExternalLink, Github, Copy, Check, Terminal, 
  Cpu, Wrench, Lightbulb, PlayCircle, Calendar, Zap 
} from 'lucide-react';
import { APPS } from '../data';

const AppDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const app = APPS.find(a => a.id === id);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">App not found</h2>
          <Link to="/apps" className="text-blue-500 hover:underline">Back to Gallery</Link>
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
    <div className="pb-24">
      {/* Hero Section */}
      <section className="bg-brand-50 dark:bg-brand-900/40 border-b border-brand-200 dark:border-brand-800 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/apps" className="inline-flex items-center text-sm font-bold text-brand-500 hover:text-blue-500 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            BACK TO GALLERY
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {app.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{app.name}</h1>
              <p className="text-xl text-brand-600 dark:text-brand-400 mb-8 leading-relaxed">
                {app.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={app.liveUrl} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center space-x-2 transition-all">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
                <a href={app.sourceUrl} className="px-6 py-3 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 text-brand-900 dark:text-white rounded-xl font-bold flex items-center space-x-2 hover:bg-brand-50 transition-all">
                  <Github size={18} />
                  <span>View Source</span>
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src={app.thumbnail} 
                alt={app.name} 
                className="relative w-full aspect-video object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Cpu className="mr-3 text-blue-500" size={24} />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {app.techStack.map(tech => (
                  <div key={tech} className="px-4 py-2 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-lg text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* How I Built It */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Terminal className="mr-3 text-green-500" size={24} />
                The Build Process
              </h2>
              <div className="space-y-8">
                {app.buildProcess.map((step, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full vibe-gradient flex items-center justify-center text-white text-xs font-bold">
                        {idx + 1}
                      </div>
                      {idx !== app.buildProcess.length - 1 && <div className="w-px flex-grow bg-brand-200 dark:bg-brand-800 mt-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-lg font-bold mb-2">{step.step}</h3>
                      <p className="text-brand-600 dark:text-brand-400">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Prompts */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Lightbulb className="mr-3 text-yellow-500" size={24} />
                Key Prompts Used
              </h2>
              <div className="space-y-6">
                {app.prompts.map((prompt, idx) => (
                  <div key={idx} className="bg-brand-50 dark:bg-brand-900/60 rounded-xl p-6 border border-brand-200 dark:border-brand-800">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-sm uppercase tracking-wider text-brand-500">{prompt.title}</h3>
                      <button 
                        onClick={() => copyPrompt(prompt.content)}
                        className="p-2 text-brand-400 hover:text-blue-500 transition-colors"
                      >
                        {copiedPrompt === prompt.content ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                    </div>
                    <code className="block font-mono text-sm leading-relaxed whitespace-pre-wrap text-brand-800 dark:text-brand-200">
                      {prompt.content}
                    </code>
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons learned section with Zap icon */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="mr-3 text-orange-500" size={24} />
                Lessons Learned
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {app.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start space-x-3 p-4 bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl">
                    <span className="mt-1 text-green-500"><Check size={16} /></span>
                    <span className="text-sm font-medium">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-2xl p-8 sticky top-24">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Wrench className="mr-2 text-brand-400" size={20} />
                The Toolbox
              </h3>
              <ul className="space-y-4 mb-10">
                {app.tools.map(tool => (
                  <li key={tool} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium">{tool}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Calendar className="mr-2 text-brand-400" size={20} />
                Timeline
              </h3>
              <div className="space-y-6">
                {app.timeline.map((event, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="text-[10px] font-bold text-brand-400 pt-1 shrink-0 w-20 uppercase tracking-tighter">
                      {event.date}
                    </div>
                    <div className="text-sm font-medium">
                      {event.milestone}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-brand-100 dark:border-brand-800">
                <button className="w-full py-3 bg-brand-100 dark:bg-brand-800 hover:bg-brand-200 dark:hover:bg-brand-700 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-colors">
                  <PlayCircle size={18} />
                  <span>Watch Build Video</span>
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
