import React from 'react';
import { Skill } from '../types/portfolio';
import { useTranslation } from '../hooks/useTranslation';

interface Props {
  skill: Skill;
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  const { language } = useTranslation();

  return (
    <div className="bg-surface-container border border-outline/10 p-md flex flex-col gap-sm hover:border-primary/40 transition-all group relative overflow-hidden">
      <div className="flex justify-between items-center mb-sm">
        <h3 className="font-headline-md text-[14px] text-on-surface group-hover:text-primary transition-colors tracking-widest uppercase">
          {skill.name}
        </h3>
        <div className="flex items-center gap-2">
          {skill.since && (
            <span className="font-mono text-[9px] text-outline uppercase">
              {skill.since}
            </span>
          )}
          <div className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary group-hover:animate-pulse transition-colors"></div>
        </div>
      </div>

      <p className="font-body-sm text-[12px] text-on-surface-variant leading-tight min-h-[2.5rem]">
        {skill.proficiencyDescription[language]}
      </p>

      <div className="h-[2px] w-full bg-surface-container-highest mt-2 overflow-hidden">
        <div 
          className="bg-primary/40 group-hover:bg-primary h-full transition-all duration-1000 origin-left" 
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
