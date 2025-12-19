
import React from 'react';
import { Mail, Twitter, Github, Linkedin, MessageSquare, Zap, Target, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="relative mb-12">
            <div className="absolute -top-4 -left-4 w-32 h-32 vibe-gradient opacity-10 blur-2xl rounded-full"></div>
            <h1 className="text-5xl font-extrabold mb-8 relative">Hi, I'm a <br /><span className="vibe-text-gradient">VibeKit Builder.</span></h1>
            <p className="text-xl text-brand-600 dark:text-brand-400 leading-relaxed mb-6">
              I'm an indie builder and AI engineer obsessed with the future of software creation. 
              To me, "Vibe Coding" is the art of directing AI with taste, intuition, and high-level strategy rather than getting lost in the syntax of the past.
            </p>
            <p className="text-lg text-brand-600 dark:text-brand-400 leading-relaxed">
              I spend my days building small, focused apps with VibeKit, recording a podcast about the shift in engineering culture, and sharing my learnings with a community of thousands.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="text-yellow-500 mr-3" />
                What is Vibe Coding?
              </h2>
              <div className="space-y-4 text-brand-600 dark:text-brand-400">
                <p>It's a methodology that prioritizes the <strong>Outcome over the Implementation</strong>.</p>
                <p>In a world where LLMs can generate boilerplate in milliseconds, the value of a developer shifts from "how many lines of code can you write" to "how well can you define the vibe, the edge cases, and the architecture."</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="text-red-500 mr-3" />
                My Core Principles
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Taste is the only moat.',
                  'Ship fast, iterate with real users.',
                  'Agents are better than automation.',
                  'Context window is your workspace.',
                  'Prompting is programming.',
                  'Design as much as you build.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 p-4 bg-brand-50 dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-xl font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-brand-900 mix-blend-overlay group-hover:bg-transparent transition-all duration-700"></div>
            <img 
              src="https://picsum.photos/seed/builder/800/1000" 
              alt="The Builder" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-brand-950 to-transparent">
              <p className="text-white font-medium italic text-lg leading-relaxed">
                "We aren't building software anymore. We are curating intelligence into useful interfaces."
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <a href="#" className="flex items-center space-x-4 p-4 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl transition-colors">
                <Twitter className="text-blue-400" />
                <div>
                  <div className="text-xs font-bold text-brand-400 uppercase tracking-widest">Twitter</div>
                  <div className="font-bold">@vibekit</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-4 p-4 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl transition-colors">
                <Github className="text-brand-900 dark:text-white" />
                <div>
                  <div className="text-xs font-bold text-brand-400 uppercase tracking-widest">GitHub</div>
                  <div className="font-bold">vibekit</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-4 p-4 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl transition-colors">
                <Mail className="text-red-400" />
                <div>
                  <div className="text-xs font-bold text-brand-400 uppercase tracking-widest">Email</div>
                  <div className="font-bold">hello@vibekit.build</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-4 p-4 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl transition-colors">
                <MessageSquare className="text-purple-400" />
                <div>
                  <div className="text-xs font-bold text-brand-400 uppercase tracking-widest">Discord</div>
                  <div className="font-bold">Join the server</div>
                </div>
              </a>
            </div>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-5 py-4 bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Your message..." 
                rows={4}
                className="w-full px-5 py-4 bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
