
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group block relative overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] uppercase font-bold tracking-widest text-white border border-white/10">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>
      </div>
      
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
