import React from 'react';
import { Skill } from '../types/portfolio';
import { useTranslation } from '../hooks/useTranslation';

interface Props {
  skill: Skill;
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  const { language } = useTranslation();

  return (
    <div className="bg-surface-container border border-outline/20 p-md rounded flex flex-col gap-md hover:border-primary/40 transition-all group relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
      
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded border border-primary/30 flex items-center justify-center bg-primary/5 text-primary font-headline-md text-xl shadow-[inset_0_0_12px_rgba(129,216,172,0.1)]">
          {skill.name.substring(0, 2).toUpperCase()}
        </div>
        {skill.since && (
          <span className="font-label-sm text-[10px] px-2 py-0.5 rounded-full border border-outline/20 bg-surface text-on-surface-variant uppercase tracking-tighter">
            Since {skill.since}
          </span>
        )}
      </div>

      <div>
        <h3 className="font-headline-md text-lg text-on-surface group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant mt-1">
          {skill.proficiencyDescription[language]}
        </p>
        <div className="h-0.5 w-full bg-surface-container-highest mt-3 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-1000" 
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
