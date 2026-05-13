import React from 'react';
import { Skill } from '../types/portfolio';
import { useTranslation } from '../hooks/useTranslation';

interface Props {
  skill: Skill;
}

const StackCard: React.FC<Props> = ({ skill }) => {
  const { language, t } = useTranslation();

  return (
    <div className="bg-surface-container-high border border-outline/10 p-lg group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary/30 transition-colors"></div>
      
      <div className="flex justify-between items-start mb-md">
        <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <div className="flex flex-col items-end gap-1">
          {skill.isCore && (
            <span className="font-label-sm text-[10px] bg-primary/10 text-primary px-2 py-0.5 border border-primary/20 uppercase tracking-tighter">
              {t.skills_page.coreTech}
            </span>
          )}
          {skill.since && (
            <span className="font-mono text-[9px] text-outline uppercase">
              {t.skills_page.since} {skill.since}
            </span>
          )}
        </div>
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed min-h-[3rem]">
        {skill.proficiencyDescription[language]}
      </p>

      <div className="space-y-2">
        <div className="flex justify-between font-mono text-[10px] text-outline uppercase tracking-widest">
          <span>PROFICIENCY</span>
          <span>{skill.proficiency}%</span>
        </div>
        <div className="h-1 bg-surface-container-lowest overflow-hidden border border-outline/5">
          <div 
            className="h-full bg-primary transition-all duration-1000 ease-out origin-left"
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
      </div>

      {/* Industrial Accent */}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary/40 group-hover:w-full transition-all duration-700"></div>
    </div>
  );
};

export default StackCard;
