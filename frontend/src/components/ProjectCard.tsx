import React from 'react';
import { Project } from '../types/portfolio';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowUpRight, Github, Play } from 'lucide-react';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const { language, t } = useTranslation();

  return (
    <article
      className="group relative bg-surface-container-high border border-outline/20 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(129,216,172,0.15)] animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[500px]`}>
        <div className="lg:w-3/5 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
        <div className="lg:w-2/5 p-lg flex flex-col justify-between bg-surface-container-highest/50 backdrop-blur-sm">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-md gap-sm sm:gap-md">
              <h2 className="font-headline-lg text-[2.5rem] lg:text-[3rem] text-primary leading-none uppercase tracking-tighter text-center sm:text-left">
                {project.title}
              </h2>
              <span className="font-label-sm text-label-sm border border-outline/30 px-sm py-xs bg-surface/50">
                {project.date}
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed text-center sm:text-left">
              {project.description[language]}
            </p>
            <div className="flex flex-wrap gap-xs justify-center sm:justify-start">
              {project.stack.map(tech => (
                <span key={tech} className="bg-surface-container-low font-label-sm text-label-sm px-sm py-1 border border-outline/20 text-on-surface uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-xl flex flex-col sm:flex-row flex-wrap gap-md w-full">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-sm bg-surface-container-lowest border border-outline/20 text-on-surface font-headline-md text-headline-md py-sm rounded hover:bg-surface-container hover:border-primary/50 transition-all group/btn"
              >
                <Github className="w-5 h-5 group-hover/btn:text-primary transition-colors" />
                {t.projects.githubBtn}
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-sm bg-surface-container-lowest border border-outline/20 text-on-surface font-headline-md text-headline-md py-sm rounded hover:bg-surface-container hover:border-primary/50 transition-all group/btn"
              >
                <Play className="w-4 h-4 fill-current group-hover/btn:text-primary transition-colors" />
                {t.projects.videoBtn}
              </a>
            )}
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-sm bg-primary text-on-primary font-headline-md text-headline-md py-sm rounded hover:drop-shadow-[0_0_15px_rgba(129,216,172,0.4)] transition-all group/btn"
              >
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                {t.projects.demoBtn}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
