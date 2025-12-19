import React from 'react';
import { Mail, Twitter, Github, Linkedin, MessageSquare, Zap, Target, BookOpen, Leaf, Users, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <div className="relative mb-20">
            <div className="absolute -top-16 -left-16 w-64 h-64 vibe-gradient opacity-10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-brand-50 dark:bg-brand-900 text-brand-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-8 border border-brand-100 dark:border-brand-800 shadow-sm">
              <Sparkles size={12} className="text-haven-amber" />
              <span>THE ARCHITECT'S VISION</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-12 relative tracking-tighter leading-none">
              Building for <br />
              <span className="vibe-text-gradient italic">Connection.</span>
            </h1>
            <p className="text-2xl text-brand-700 dark:text-brand-300 leading-relaxed mb-12 font-medium">
              I am a community architect focused on the intersection of human taste and machine intelligence. 
            </p>
            <p className="text-lg text-brand-600 dark:text-brand-400 leading-relaxed max-w-xl font-medium">
              Software is no longer just code; it's the living space where our communities thrive. 
              My mission with the Haven is to cultivate an ecosystem where AI serves our deepest human needs for growth and belonging.
            </p>
          </div>

          <div className="space-y-24">
            <div>
              <h2 className="text-4xl font-black mb-10 flex items-center tracking-tight">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900 rounded-2xl mr-5 flex items-center justify-center text-haven-amber shadow-inner">
                  <Zap size={24} />
                </div>
                Haven Ethos
              </h2>
              <div className="space-y-8 text-brand-700 dark:text-brand-400 text-xl font-medium leading-relaxed">
                <p>We are graduating from "building" to "architecting." The bricks are now automated; our value lies in the design of the experience.</p>
                <p>The Community Haven provides the sanctuary, the seeds, and the tools to ensure we build with intention, not just efficiency.</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black mb-12 flex items-center tracking-tight">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900 rounded-2xl mr-5 flex items-center justify-center text-brand-500 shadow-inner">
                  <Target size={24} />
                </div>
                Foundational Pillars
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  'Regenerative community design.',
                  'Transparent open-source builds.',
                  'Taste-driven architecture.',
                  'Context over boilerplate.',
                  'Collaborative build loops.',
                  'Design for human outcomes.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-5 p-6 bg-white dark:bg-brand-900 rounded-[2rem] border border-brand-100 dark:border-brand-800 font-bold text-brand-800 dark:text-brand-200 shadow-xl shadow-brand-500/5 group hover:border-brand-500 transition-all">
                    <div className="w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-50 dark:ring-brand-800 group-hover:scale-125 transition-transform"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          <div className="aspect-[3/4] relative rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-8 border-white dark:border-brand-900">
            <div className="absolute inset-0 bg-brand-950/30 mix-blend-multiply transition-all duration-1000 group-hover:opacity-0"></div>
            <img 
              src="https://images.unsplash.com/photo-152207182399e-b89e7df91b62?auto=format&fit=crop&q=80&w=800" 
              alt="The Architect" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-16 bg-gradient-to-t from-brand-950 to-transparent">
              <p className="text-white font-black italic text-4xl leading-[1.1] tracking-tight">
                "Growth is a collective effort. We are just the gardeners."
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-brand-900/80 backdrop-blur-xl border border-brand-100 dark:border-brand-800 rounded-[4rem] p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 to-haven-amber"></div>
            <h2 className="text-4xl font-black mb-12 text-brand-950 dark:text-white tracking-tight">Reach the Haven</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <a href="#" className="flex items-center space-x-5 p-6 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-3xl transition-all border border-brand-100 dark:border-brand-800 group">
                <div className="p-4 bg-brand-50 dark:bg-brand-800 text-brand-500 rounded-2xl group-hover:scale-110 transition-transform"><Twitter size={24} /></div>
                <div>
                  <div className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">X / Twitter</div>
                  <div className="font-black text-brand-950 dark:text-white">@havenhub</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-5 p-6 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-3xl transition-all border border-brand-100 dark:border-brand-800 group">
                <div className="p-4 bg-brand-50 dark:bg-brand-800 text-brand-950 dark:text-white rounded-2xl group-hover:scale-110 transition-transform"><Github size={24} /></div>
                <div>
                  <div className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">GitHub</div>
                  <div className="font-black text-brand-950 dark:text-white">haven-archives</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-5 p-6 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-3xl transition-all border border-brand-100 dark:border-brand-800 group">
                <div className="p-4 bg-brand-50 dark:bg-brand-800 text-haven-amber rounded-2xl group-hover:scale-110 transition-transform"><Mail size={24} /></div>
                <div>
                  <div className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">Enquiries</div>
                  <div className="font-black text-brand-950 dark:text-white">hello@haven.hub</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-5 p-6 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-3xl transition-all border border-brand-100 dark:border-brand-800 group">
                <div className="p-4 bg-brand-50 dark:bg-brand-800 text-brand-500 rounded-2xl group-hover:scale-110 transition-transform"><MessageSquare size={24} /></div>
                <div>
                  <div className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">Collaborate</div>
                  <div className="font-black text-brand-950 dark:text-white">Nexus Discord</div>
                </div>
              </a>
            </div>
            
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Topic of architectural query" 
                className="w-full px-8 py-5 bg-brand-50 dark:bg-brand-950 border border-brand-100 dark:border-brand-800 rounded-3xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-lg"
              />
              <textarea 
                placeholder="Describe your vision for the community..." 
                rows={4}
                className="w-full px-8 py-5 bg-brand-50 dark:bg-brand-950 border border-brand-100 dark:border-brand-800 rounded-3xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-lg"
              ></textarea>
              <button className="w-full py-6 bg-brand-500 hover:bg-brand-600 text-white font-black uppercase tracking-widest rounded-3xl transition-all shadow-2xl shadow-brand-500/20 text-sm">
                Dispatch to The Architect
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;