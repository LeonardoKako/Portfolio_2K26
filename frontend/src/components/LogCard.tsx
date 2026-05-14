import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface LogEntry {
  date: string;
  role: string;
  company: string;
  description: string;
}

interface Props {
  entry: LogEntry;
  index: number;
  type: 'professional' | 'academic';
}

const LogCard: React.FC<Props> = ({ entry, index, type }) => {
  const isFirst = index === 0;
  const Icon = type === 'professional' ? Briefcase : GraduationCap;

  return (
    <div className="group grid grid-cols-1 md:grid-cols-4 bg-surface-container-low border border-outline/10 hover:border-primary/40 transition-all duration-500 overflow-hidden">
      <div className="p-lg border-b md:border-b-0 md:border-r border-outline/10 bg-surface-container/50 flex flex-col justify-between group-hover:bg-primary/[0.02] transition-colors">
        <div>
          <p className={`font-mono text-[10px] mb-2 tracking-widest ${isFirst ? 'text-primary' : 'text-outline'}`}>
            {entry.date}
          </p>
          <h3 className="font-headline-md text-xl text-on-surface leading-tight uppercase group-hover:text-primary transition-colors">
            {entry.role}
          </h3>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-outline group-hover:text-primary transition-colors" />
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            {entry.company}
          </p>
        </div>
      </div>
      <div className="md:col-span-3 p-lg relative">
        {/* Decorative Grid Pattern for first item */}
        {isFirst && (
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        )}
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed relative z-10">
          {entry.description}
        </p>
      </div>
    </div>
  );
};

export default LogCard;
