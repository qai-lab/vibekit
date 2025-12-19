
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, ChevronRight } from 'lucide-react';
import { AppProject } from '../types';

interface AppCardProps {
  app: AppProject;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="group bg-white dark:bg-brand-900 rounded-xl overflow-hidden border border-brand-200 dark:border-brand-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={app.thumbnail} 
          alt={app.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
           <Link 
            to={`/apps/${app.id}`}
            className="w-full py-2 bg-white text-brand-950 rounded-lg text-sm font-bold flex items-center justify-center space-x-1 hover:bg-blue-50 transition-colors"
          >
            <span>View Details</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
      
      <div className="p-6 flex flex-grow flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {app.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-brand-900 dark:text-white group-hover:text-blue-500 transition-colors">
          {app.name}
        </h3>
        
        <p className="text-brand-600 dark:text-brand-400 text-sm mb-6 flex-grow">
          {app.pitch}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-brand-100 dark:border-brand-800">
          <div className="flex space-x-3">
             <a 
              href={app.sourceUrl} 
              className="p-1.5 text-brand-400 hover:text-brand-900 dark:hover:text-white transition-colors"
              title="Source Code"
            >
              <Code size={18} />
            </a>
            <a 
              href={app.liveUrl} 
              className="p-1.5 text-brand-400 hover:text-brand-900 dark:hover:text-white transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <Link 
            to={`/apps/${app.id}`}
            className="text-xs font-bold text-brand-400 uppercase tracking-widest hover:text-blue-500 transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
