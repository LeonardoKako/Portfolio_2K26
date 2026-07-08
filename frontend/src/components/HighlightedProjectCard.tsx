import React from 'react';
import { Project } from '../types/portfolio';
import { useTranslation } from '../hooks/useTranslation';
import { Terminal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  project: Project;
  index: number;
}

const HighlightedProjectCard: React.FC<Props> = ({ project, index }) => {
  const { language } = useTranslation();

  return (
    <Link 
      to="/projects"
      className="group relative bg-surface-container-high border border-outline/20 overflow-hidden hover:border-primary/40 transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Decorative Corner Details */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary/50 transition-colors z-20"></div>
      
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-md">
          <span className="text-primary font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
            <ArrowUpRight className="w-4 h-4" /> EXPLORAR PRODUÇÃO
          </span>
        </div>
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Overlay Index */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-outline/20 px-2 py-1 font-mono text-[10px] text-outline-variant z-20">
          PROJECT_ID: 00{index + 1}
        </div>
      </div>

      <div className="p-lg relative z-10">
        <div className="flex justify-between items-center mb-md">
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Terminal className="text-outline-variant w-4 h-4 opacity-50" />
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed min-h-[3rem]">
          {project.shortDescription[language]}
        </p>

        <div className="flex gap-xs flex-wrap">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-label-sm text-[10px] bg-surface-container-low text-on-surface-variant px-2 py-0.5 border border-outline/10 uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="font-label-sm text-[10px] text-outline px-1">+{project.stack.length - 3}</span>
          )}
        </div>
      </div>

      {/* Structural Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>
    </Link>
  );
};

export default HighlightedProjectCard;
