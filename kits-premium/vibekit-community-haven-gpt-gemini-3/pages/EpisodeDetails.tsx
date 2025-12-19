import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Play, Download, Share2, Calendar, Clock, 
  User, CheckCircle, ExternalLink, Radio, MessageCircle 
} from 'lucide-react';
import { EPISODES } from '../data';

const EpisodeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const episode = EPISODES.find(e => e.id === id);

  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center p-16 bg-brand-50 dark:bg-brand-900 rounded-[3rem] border border-brand-100 dark:border-brand-800">
          <h2 className="text-4xl font-black mb-6 text-brand-950 dark:text-white">Parlor Session Missing.</h2>
          <Link to="/podcast" className="px-8 py-3 bg-brand-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-brand-500/20">Return to The Parlor</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Hero / Header Section */}
      <section className="bg-brand-950 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={episode.cover} alt="" className="w-full h-full object-cover blur-3xl scale-150" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/podcast" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 hover:text-white mb-12 transition-all group">
            <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
            BACK TO THE PARLOR
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <div className="relative group">
                <img 
                  src={episode.cover} 
                  alt={episode.title} 
                  className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl border-4 border-white/10"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-brand-950/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-white text-brand-950 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                <Radio size={12} />
                <span>SESSION #{episode.id}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                {episode.title}
              </h1>
              
              <div className="flex flex-wrap gap-8 items-center text-brand-400 font-bold mb-12">
                <div className="flex items-center space-x-2">
                  <User size={18} className="text-brand-500" />
                  <span>{episode.guest}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} className="text-brand-500" />
                  <span>{new Date(episode.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} className="text-brand-500" />
                  <span>45 MINS</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-brand-500 text-white rounded-[2rem] font-black uppercase tracking-widest flex items-center space-x-3 shadow-xl shadow-brand-500/20 hover:bg-brand-600 transition-all">
                  <Play size={20} fill="currentColor" />
                  <span>Listen Now</span>
                </button>
                <button className="p-5 border-2 border-white/20 hover:border-white rounded-full text-white transition-all">
                  <Download size={20} />
                </button>
                <button className="p-5 border-2 border-white/20 hover:border-white rounded-full text-white transition-all">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          
          <div className="lg:col-span-2 space-y-24">
            {/* Show Notes */}
            <section>
              <h2 className="text-3xl font-black mb-8 flex items-center">
                <MessageCircle className="mr-4 text-brand-500" size={32} />
                Session Notes
              </h2>
              <div className="p-10 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-[3rem] text-xl text-brand-700 dark:text-brand-400 leading-relaxed font-medium shadow-sm">
                {episode.notes}
              </div>
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-3xl font-black mb-10 flex items-center">
                <CheckCircle className="mr-4 text-haven-amber" size={32} />
                Strategic Takeaways
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {episode.takeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-center space-x-6 p-8 bg-brand-50 dark:bg-brand-900/40 rounded-[2rem] border border-brand-100 dark:border-brand-800 shadow-sm group">
                    <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-800 flex items-center justify-center text-brand-500 shrink-0 font-black group-hover:bg-brand-500 group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <p className="text-lg font-bold text-brand-800 dark:text-brand-200">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Transcript Preview */}
            <section>
              <h2 className="text-3xl font-black mb-8">Full Transcript</h2>
              <div className="bg-brand-50 dark:bg-brand-950 p-10 rounded-[3rem] border border-brand-100 dark:border-brand-800 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-50 dark:from-brand-950 to-transparent"></div>
                <div className="font-mono text-sm leading-relaxed text-brand-600 dark:text-brand-400 whitespace-pre-wrap">
                  {episode.transcript}
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                  <button className="px-8 py-3 bg-white dark:bg-brand-900 text-brand-950 dark:text-white font-black uppercase tracking-widest rounded-2xl shadow-xl border border-brand-200 dark:border-brand-700 hover:scale-105 transition-transform text-xs">
                    Unlock Full Text
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-[3rem] p-10 sticky top-28 shadow-xl">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brand-400">The Guest</h3>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-2xl vibe-gradient flex items-center justify-center text-white font-black text-2xl shadow-lg">
                  {episode.guest[0]}
                </div>
                <div>
                  <h4 className="font-black text-xl">{episode.guest}</h4>
                  <p className="text-xs text-brand-500 font-bold uppercase tracking-widest">Collaborator</p>
                </div>
              </div>
              <p className="text-sm text-brand-600 dark:text-brand-400 font-medium leading-relaxed mb-10">
                {episode.guestBio}
              </p>

              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brand-400">Mentioned Seeds</h3>
              <div className="space-y-4 mb-10">
                {episode.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    className="flex items-center justify-between p-4 bg-brand-50 dark:bg-brand-800 rounded-2xl hover:bg-brand-100 transition-all border border-brand-100 dark:border-brand-700 group"
                  >
                    <span className="text-sm font-bold text-brand-950 dark:text-white">{link.label}</span>
                    <ExternalLink size={14} className="text-brand-400 group-hover:text-brand-500" />
                  </a>
                ))}
              </div>

              <div className="pt-10 border-t border-brand-100 dark:border-brand-800">
                <button className="w-full py-5 bg-brand-950 text-white rounded-[2rem] font-black uppercase tracking-widest text-[10px] flex items-center justify-center space-x-3 shadow-xl transition-all hover:bg-brand-900">
                  <Radio size={16} />
                  <span>Subscribe to The Parlor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;