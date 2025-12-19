
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Calendar } from 'lucide-react';
import { Episode } from '../types';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <Link 
      to={`/podcast/${episode.id}`}
      className="group flex flex-col md:flex-row bg-white dark:bg-brand-900 rounded-xl border border-brand-200 dark:border-brand-800 hover:border-blue-500/50 transition-all overflow-hidden"
    >
      <div className="md:w-48 aspect-square overflow-hidden shrink-0">
        <img 
          src={episode.cover} 
          alt={episode.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center text-xs text-brand-500 mb-2 space-x-3">
            <span className="flex items-center space-x-1">
              <Calendar size={12} />
              <span>{new Date(episode.date).toLocaleDateString()}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock size={12} />
              <span>45 min</span>
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{episode.title}</h3>
          <p className="text-brand-600 dark:text-brand-400 text-sm line-clamp-2 mb-4">
            Guest: <span className="text-brand-900 dark:text-white font-medium">{episode.guest}</span> — {episode.notes}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Play size={16} fill="currentColor" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-brand-400 group-hover:text-brand-900 dark:group-hover:text-white transition-colors">
            Listen Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
