
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const categoryColors: Record<string, string> = {
    Agents: 'text-teal-600 bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800',
    Multimodal: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800',
    Chips: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800',
    Policy: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800',
    Startups: 'text-rose-600 bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800',
  };

  return (
    <Link 
      to={`/insights/${post.id}`}
      className="block p-6 bg-white dark:bg-brand-900 rounded-2xl border border-brand-100 dark:border-brand-800 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-1 rounded-md border text-[10px] font-bold uppercase tracking-widest ${categoryColors[post.category] || 'text-brand-500 bg-brand-50 border-brand-100'}`}>
          {post.category}
        </span>
        <span className="text-xs text-brand-400 font-semibold">
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-3 group-hover:text-brand-500 transition-colors leading-snug">
        {post.title}
      </h3>
      <p className="text-brand-600 dark:text-brand-400 text-sm line-clamp-2 mb-6 leading-relaxed">
        {post.summary}
      </p>
      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-400 group-hover:text-brand-500 transition-colors">
        Full Insight <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default PostCard;
