import React from "react";
import { Skill } from "../types/portfolio";
import { useTranslation } from "../hooks/useTranslation";
import { Cpu } from "lucide-react";

interface Props {
  skill: Skill;
  index: number;
}

const StackCard: React.FC<Props> = ({ skill, index }) => {
  const { language, t } = useTranslation();
  const Icon = skill.icon || Cpu;
  const serial = `MOD-${String(index + 1).padStart(2, "0")}`;

  return (
    <div className='bg-surface-container-high border border-outline/10 p-lg group hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col gap-md'>
      {/* Grid Pattern Background */}
      <div
        className='absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none'
        style={{
          backgroundImage: "radial-gradient(var(--primary) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Header Info */}
      <div className='flex justify-between items-center relative z-10'>
        <div className='flex flex-col'>
          <span className='font-mono text-[10px] text-primary tracking-[0.3em] mb-1 opacity-70'>
            {serial}
          </span>
          <h3 className='font-display-lg text-[1.8rem] md:text-[2.2rem] text-on-surface leading-[0.8] uppercase tracking-tighter group-hover:text-primary transition-colors'>
            {skill.name}
          </h3>
        </div>
        <div className='w-12 h-12 bg-background border border-outline/20 flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:border-primary/40 transition-all shadow-[4px_4px_0px_rgba(129,216,172,0.1)] group-hover:shadow-[4px_4px_0px_rgba(129,216,172,0.2)]'>
          <Icon className='w-6 h-6' />
        </div>
      </div>

      {/* Description */}
      <p className='font-body-md text-body-md text-on-surface-variant/90 leading-relaxed relative z-10 min-h-[3rem]'>
        {skill.proficiencyDescription[language]}
      </p>

      {/* Footer Meta */}
      <div className='flex justify-between items-center pt-4 border-t border-outline/10 relative z-10'>
        <div className='flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
          <span className='font-mono text-[10px] text-outline uppercase tracking-[0.2em]'>
            Active_Session
          </span>
        </div>
        {skill.since && (
          <div className='flex flex-col items-end'>
            <span className='font-mono text-[9px] text-primary/60 uppercase tracking-widest'>
              {t.skills_page.since}
            </span>
            <span className='font-display-lg text-2xl text-primary leading-none'>
              {skill.since}
            </span>
          </div>
        )}
      </div>

      {/* Industrial Accents */}
      <div className='absolute top-0 right-0 w-2 h-2 bg-primary/20'></div>
      <div className='absolute bottom-0 left-0 w-24 h-[1px] bg-primary/40 group-hover:w-full transition-all duration-700'></div>
    </div>
  );
};

export default StackCard;
