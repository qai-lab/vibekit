import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, User, Clock, Share2, 
  Bookmark, MessageSquare, Tag, Sprout, Heart 
} from 'lucide-react';
import { POSTS } from '../data';

const InsightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center p-16 bg-brand-50 dark:bg-brand-900 rounded-[3rem] border border-brand-100 dark:border-brand-800">
          <h2 className="text-4xl font-black mb-6">Seed Missing.</h2>
          <Link to="/insights" className="px-8 py-3 bg-brand-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-brand-500/20">Return to Greenhouse</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Article Header */}
      <header className="pt-32 pb-20 border-b border-brand-100 dark:border-brand-900 relative">
        <div className="absolute top-0 right-0 p-32 text-brand-500/5 pointer-events-none -translate-y-20 translate-x-20">
          <Sprout size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/insights" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 hover:text-brand-700 mb-12 transition-all group">
            <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
            BACK TO GREENHOUSE
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-brand-50 dark:bg-brand-900 text-brand-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-brand-100 dark:border-brand-800">
              {post.category}
            </span>
            <span className="px-3 py-1 bg-haven-amber/10 text-haven-amber text-[10px] font-black uppercase tracking-widest rounded-full border border-haven-amber/20">
              FEATURED LOG
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[1.1] text-brand-950 dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-brand-50 dark:border-brand-900">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full vibe-gradient flex items-center justify-center text-white font-black text-lg">
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-black text-brand-950 dark:text-white">{post.author}</p>
                <p className="text-xs text-brand-400 font-bold uppercase tracking-widest">Architect</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8 text-brand-400 font-bold text-xs uppercase tracking-widest">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>8 MIN READ</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Main Reading Area */}
          <article className="flex-grow">
            <div className="prose prose-xl prose-brand dark:prose-invert max-w-none">
              {/* Render content as styled markdown-like blocks */}
              <div className="space-y-12 text-xl leading-relaxed text-brand-800 dark:text-brand-300 font-medium">
                {post.content.split('\n\n').map((para, i) => {
                   if (para.startsWith('# ')) return <h2 key={i} className="text-4xl font-black text-brand-950 dark:text-white mt-20 mb-10 tracking-tight">{para.replace('# ', '')}</h2>;
                   if (para.startsWith('## ')) return <h3 key={i} className="text-2xl font-black text-brand-950 dark:text-white mt-16 mb-6 tracking-tight">{para.replace('## ', '')}</h3>;
                   if (para.startsWith('1. ') || para.startsWith('- ')) return (
                     <ul key={i} className="space-y-4 my-8 pl-6">
                        {para.split('\n').map((item, j) => (
                          <li key={j} className="flex items-start space-x-4">
                            <div className="w-2 h-2 rounded-full bg-brand-500 mt-3 shrink-0"></div>
                            <span>{item.replace(/^[0-9.-]\s+/, '')}</span>
                          </li>
                        ))}
                     </ul>
                   );
                   return <p key={i}>{para}</p>;
                })}
              </div>
            </div>

            {/* Quote Block */}
            {post.quotes.length > 0 && (
              <div className="my-24 p-16 bg-brand-50 dark:bg-brand-900/40 rounded-[4rem] border border-brand-100 dark:border-brand-800 relative">
                <div className="absolute top-0 left-12 -translate-y-1/2 p-4 bg-brand-500 rounded-2xl text-white shadow-xl">
                  <MessageSquare size={32} fill="currentColor" />
                </div>
                <blockquote className="text-3xl md:text-4xl font-black italic tracking-tight text-brand-950 dark:text-white mb-8">
                  "{post.quotes[0].text}"
                </blockquote>
                <cite className="text-sm font-black uppercase tracking-[0.3em] text-brand-500 not-italic">
                  — {post.quotes[0].source}
                </cite>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="mt-24 pt-12 border-t border-brand-100 dark:border-brand-900 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                 <button className="flex items-center space-x-2 text-brand-400 hover:text-brand-500 transition-colors">
                   <Heart size={20} />
                   <span className="text-xs font-black uppercase tracking-widest">42 Blooms</span>
                 </button>
                 <button className="flex items-center space-x-2 text-brand-400 hover:text-brand-500 transition-colors">
                   <MessageSquare size={20} />
                   <span className="text-xs font-black uppercase tracking-widest">12 Comments</span>
                 </button>
              </div>
              <div className="flex items-center space-x-4">
                 <button className="p-3 bg-brand-50 dark:bg-brand-900 rounded-xl text-brand-500 hover:scale-110 transition-transform shadow-sm">
                   <Share2 size={18} />
                 </button>
                 <button className="p-3 bg-brand-50 dark:bg-brand-900 rounded-xl text-brand-500 hover:scale-110 transition-transform shadow-sm">
                   <Bookmark size={18} />
                 </button>
              </div>
            </div>
          </article>

          {/* Table of Contents / Quick Links */}
          <aside className="lg:w-64 shrink-0 hidden lg:block">
            <div className="sticky top-32 space-y-12">
               <div>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-400 mb-8">Growth Topics</h4>
                 <div className="flex flex-wrap gap-2">
                   {['AI Strategy', 'UX Design', 'Future', 'Tech'].map(t => (
                     <span key={t} className="px-3 py-1.5 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-xl text-[10px] font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest shadow-sm">
                       {t}
                     </span>
                   ))}
                 </div>
               </div>

               <div className="p-8 bg-brand-950 rounded-[2.5rem] text-white">
                 <Sprout size={24} className="text-brand-500 mb-6" />
                 <h4 className="font-black text-lg mb-4 leading-tight">Join the Greenhouse</h4>
                 <p className="text-brand-400 text-xs font-bold leading-relaxed mb-8">
                   Get deep-dives like this in your inbox every Sunday.
                 </p>
                 <button className="w-full py-3 bg-brand-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-brand-500/20">
                   Subscribe
                 </button>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default InsightDetails;