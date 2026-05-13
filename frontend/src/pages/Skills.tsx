import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useSeo } from '../hooks/useSeo';
import { skills } from '../data/skills';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  useSeo({ title: t.nav.skills });

  const categories = ['Frontend', 'Backend', 'Infra', 'Design'] as const;

  return (
    <div className="max-w-container-max mx-auto px-gutter pb-xl pt-lg">
      <header className="mb-xl animate-fade-up">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-sm tracking-tighter uppercase">
          Technical Arsenal
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-outline/40 pl-sm py-xs">
          A structured breakdown of core competencies, preferred frameworks, and infrastructure tooling. Built for performance, scaled for durability.
        </p>
      </header>

      {categories.map((category, catIndex) => (
        <section 
          key={category} 
          className="mb-xl animate-fade-up"
          style={{ animationDelay: `${catIndex * 100}ms` }}
        >
          <div className="flex items-center gap-sm mb-md pb-xs border-b border-outline/20">
            <h2 className="font-headline-md text-headline-md text-primary uppercase">
              {category}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
