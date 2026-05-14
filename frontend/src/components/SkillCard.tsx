import React from 'react';
import { Skill } from '../types/portfolio';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Globe, 
  Code2, 
  Layout, 
  Terminal, 
  Cpu, 
  Database, 
  GitBranch, 
  Container, 
  Cloud,
  Layers,
  Flame,
  Figma
} from 'lucide-react';

interface Props {
  skill: Skill;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'react':
    case 'nextjs': return Globe;
    case 'typescript': return Code2;
    case 'tailwindcss': return Layout;
    case 'nodejs': return Terminal;
    case 'nestjs': return Cpu;
    case 'postgresql':
    case 'mongodb': return Database;
    case 'git': return GitBranch;
    case 'docker': return Container;
    case 'aws': return Cloud;
    case 'vue': return Layers;
    case 'firebase': return Flame;
    case 'figma': return Figma;
    default: return Cpu;
  }
};

const SkillCard: React.FC<Props> = ({ skill }) => {
  const { language } = useTranslation();
  const Icon = getIcon(skill.id);

  return (
    <div className="group bg-surface-container/50 border border-outline/10 p-md hover:bg-surface-container hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
      <div className="flex justify-between items-center mb-sm relative z-10">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
          <h3 className="font-headline-md text-[13px] text-on-surface group-hover:text-primary transition-colors tracking-widest uppercase">
            {skill.name}
          </h3>
        </div>
        <span className="font-mono text-[9px] text-outline opacity-60 group-hover:opacity-100 transition-opacity">
          {skill.proficiency}%
        </span>
      </div>

      <div className="h-1 w-full bg-surface-container-lowest relative z-10 overflow-hidden">
        <div 
          className="h-full bg-primary/30 group-hover:bg-primary/60 transition-all duration-700 ease-out origin-left"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>

      {/* Detail visible on hover */}
      <p className="mt-2 font-body-sm text-[11px] text-on-surface-variant leading-tight opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        {skill.proficiencyDescription[language]}
      </p>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-[4px] h-[4px] bg-primary/0 group-hover:bg-primary/40 transition-colors" />
    </div>
  );
};

export default SkillCard;
