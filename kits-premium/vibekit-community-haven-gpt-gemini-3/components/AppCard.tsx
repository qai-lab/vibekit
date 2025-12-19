import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, ChevronRight } from 'lucide-react';
import { AppProject } from '../types';

interface AppCardProps {
  app: AppProject;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="group bg-white dark:bg-brand-900 rounded-3xl overflow-hidden border border-brand-100 dark:border-brand-800 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={app.thumbnail} 
          alt={app.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
           <Link 
            to={`/apps/${app.id}`}
            className="w-full py-3 bg-white text-brand-950 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-brand-50 transition-colors shadow-2xl"
          >
            <span>Enter Workshop</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
      
      <div className="p-8 flex flex-grow flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {app.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-3 py-1 bg-brand-50 dark:bg-brand-800/50 text-brand-600 dark:text-brand-300 text-[10px] font-black uppercase tracking-[0.1em] rounded-full border border-brand-100 dark:border-brand-700">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-extrabold mb-3 text-brand-950 dark:text-white group-hover:text-brand-500 transition-colors">
          {app.name}
        </h3>
        
        <p className="text-brand-600 dark:text-brand-400 text-sm mb-8 flex-grow leading-relaxed font-medium">
          {app.pitch}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-brand-50 dark:border-brand-800">
          <div className="flex space-x-4">
             <a 
              href={app.sourceUrl} 
              className="w-10 h-10 rounded-full border border-brand-100 dark:border-brand-700 flex items-center justify-center text-brand-400 hover:text-brand-600 dark:hover:text-white hover:bg-brand-50 dark:hover:bg-brand-800 transition-all"
              title="Open Source"
            >
              <Code size={18} />
            </a>
            <a 
              href={app.liveUrl} 
              className="w-10 h-10 rounded-full border border-brand-100 dark:border-brand-700 flex items-center justify-center text-brand-400 hover:text-brand-600 dark:hover:text-white hover:bg-brand-50 dark:hover:bg-brand-800 transition-all"
              title="Visit Hub"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <Link 
            to={`/apps/${app.id}`}
            className="text-[10px] font-black text-brand-500 uppercase tracking-[0.2em] flex items-center group/link"
          >
            <span>Specs</span>
            <ChevronRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppCard;