import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useSeo } from "../hooks/useSeo";
import { skills } from "../data/skills";
import StackCard from "../components/StackCard";
import SkillCard from "../components/SkillCard";
import { Cpu, Layout, Server, Database, PenTool } from "lucide-react";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  useSeo({ title: t.nav.skills });

  const categories = [
    { id: "Frontend", icon: Layout },
    { id: "Backend", icon: Server },
    { id: "Infra", icon: Cpu },
    { id: "Design", icon: PenTool },
  ] as const;

  const coreSkills = skills.filter((s) => s.isCore);
  const otherSkills = skills.filter((s) => !s.isCore);

  return (
    <div className='max-w-container-max mx-auto px-gutter pb-xl pt-lg'>
      {/* Page Header */}
      <header className='mb-2xl animate-fade-up relative'>
        <div className='absolute -left-gutter top-0 w-1.5 h-full bg-primary opacity-20'></div>
        <h1 className='font-display-lg text-[4rem] md:text-[6rem] lg:text-[8rem] text-on-surface mb-sm tracking-tighter uppercase leading-[0.8]'>
          {t.skills_page.title.split(" ")[0]}
          <span className='text-primary'>
            {t.skills_page.title.split(" ")[1]}
          </span>
        </h1>
        <p className='font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l border-outline/20 pl-lg py-xs'>
          {t.skills_page.subtitle}
        </p>
      </header>

      {/* Section 1: PRIMARY STACK */}
      <section className='mb-3xl animate-fade-up'>
        <div className='flex items-center gap-md mb-xl'>
          <div className='h-px flex-1 bg-outline/10'></div>
          <h2 className='font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] whitespace-nowrap'>
            {t.skills_page.primaryStack}
          </h2>
          <div className='h-px flex-1 bg-outline/10'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg'>
          {coreSkills.map((skill, index) => (
            <StackCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      {/* Section 2: COMPLEMENTARY ARSENAL */}
      <section className='animate-fade-up delay-200'>
        <div className='flex items-center gap-md mb-xl'>
          <div className='h-px flex-1 bg-outline/10'></div>
          <h2 className='font-label-sm text-label-sm text-outline uppercase tracking-[0.4em] whitespace-nowrap'>
            {t.skills_page.complementary}
          </h2>
          <div className='h-px flex-1 bg-outline/10'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-xl'>
          {categories.map((category) => {
            const categorySkills = otherSkills.filter(
              (s) => s.category === category.id,
            );
            if (categorySkills.length === 0) return null;

            return (
              <div key={category.id} className='space-y-lg'>
                <div className='flex items-center gap-md border-b border-outline/10 pb-md'>
                  <category.icon className='w-5 h-5 text-primary opacity-60' />
                  <h3 className='font-headline-md text-headline-md text-on-surface uppercase tracking-widest'>
                    {category.id}
                  </h3>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-md'>
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
