import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Calendar, User } from 'lucide-react';
import { Episode } from '../types';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <Link 
      to={`/podcast/${episode.id}`}
      className="group flex flex-col sm:flex-row bg-white dark:bg-brand-900 rounded-[2.5rem] border border-brand-100 dark:border-brand-800 hover:border-haven-amber/50 hover:shadow-2xl hover:shadow-haven-amber/5 transition-all overflow-hidden"
    >
      <div className="sm:w-64 aspect-square overflow-hidden shrink-0 relative">
        <img 
          src={episode.cover} 
          alt={episode.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-brand-950/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-haven-amber text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">New Episode</span>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-brand-400 mb-4 space-x-4">
            <span className="flex items-center space-x-1.5">
              <Calendar size={12} className="text-brand-500" />
              <span>{new Date(episode.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock size={12} className="text-brand-500" />
              <span>45 MIN</span>
            </span>
          </div>
          <h3 className="text-2xl font-extrabold mb-4 group-hover:text-haven-amber transition-colors leading-tight">{episode.title}</h3>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-800 flex items-center justify-center text-brand-400">
              <User size={14} />
            </div>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-bold">
              With <span className="text-brand-950 dark:text-white">{episode.guest}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-800 flex items-center justify-center text-haven-amber group-hover:bg-haven-amber group-hover:text-white transition-all shadow-sm">
              <Play size={20} fill="currentColor" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest text-brand-950 dark:text-white group-hover:translate-x-1 transition-transform">
              Listen in The Parlor
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;