
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const categoryColors: Record<string, string> = {
    Agents: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
    Multimodal: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    Chips: 'text-green-500 bg-green-50 dark:bg-green-900/20',
    Policy: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
    Startups: 'text-pink-500 bg-pink-50 dark:bg-pink-900/20',
  };

  return (
    <Link 
      to={`/insights/${post.id}`}
      className="block p-6 bg-white dark:bg-brand-900 rounded-xl border border-brand-200 dark:border-brand-800 hover:border-blue-500/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${categoryColors[post.category] || 'text-brand-500 bg-brand-100'}`}>
          {post.category}
        </span>
        <span className="text-xs text-brand-400 font-medium">
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-500 transition-colors leading-tight">
        {post.title}
      </h3>
      <p className="text-brand-600 dark:text-brand-400 text-sm line-clamp-2 mb-6">
        {post.summary}
      </p>
      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-400 group-hover:text-blue-500 transition-colors">
        Read Insight <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default PostCard;
