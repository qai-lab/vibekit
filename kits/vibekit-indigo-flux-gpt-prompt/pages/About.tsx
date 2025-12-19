
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="mb-20">
        <h1 className="text-5xl font-extrabold text-white mb-8">About <span className="text-indigo-500">VibeKit</span></h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-6">
          VibeKit was born out of a realization: we are living in the most creative era of software history. 
          When the cost of writing code drops to near-zero, the value of <span className="text-white font-semibold">architectural intent</span> and <span className="text-white font-semibold">visionary design</span> skyrockets.
        </p>
        <p className="text-xl text-slate-400 leading-relaxed mb-12">
          We curate the best examples of what happens when humans stop struggling with syntax and start focusing on the "vibe"—the soul of the software.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-400">To document the evolution of engineering as it shifts from manual labor to high-level orchestration.</p>
          </div>
          <div className="p-8 bg-indigo-900/20 border border-indigo-500/30 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Community</h3>
            <p className="text-indigo-100/70">A global collective of "vibe coders" building the future with AI assistants, no-code tools, and raw creativity.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 border border-slate-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Say Hello</h2>
          <p className="text-slate-400 mb-10">Have a project you want to showcase? Want to be a guest on the podcast? Reach out below.</p>
          
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
              <textarea rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"></textarea>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
