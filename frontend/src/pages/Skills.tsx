import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useSeo } from "../hooks/useSeo";
import { skills } from "../translations/skills";
import StackCard from "../components/StackCard";
import SkillCard from "../components/SkillCard";
import { Layout, Server, Cpu, Layers } from "lucide-react";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  useSeo({ title: t.nav.skills });

  const coreSkills = skills.filter((s) => s.isCore);
  const otherSkills = skills.filter((s) => !s.isCore);

  const stackCategories = [
    { id: "Frontend", icon: Layout },
    { id: "Backend", icon: Server },
    { id: "Database", icon: Server },
    { id: "Infra", icon: Cpu },
  ] as const;

  return (
    <div className='max-w-container-max mx-auto px-gutter pb-xl pt-lg'>
      {/* Page Header */}
      <header className='mb-2xl animate-fade-up relative'>
        <div className='absolute -left-gutter top-0 w-1.5 h-full bg-primary opacity-20'></div>
        <h1 className='font-display-lg text-[4rem] md:text-[6rem] lg:text-[8rem] text-on-surface mb-sm tracking-tighter uppercase leading-[0.8]'>
          {t.skills_page.title.split(" ")[0]}
          <br />
          <span className='text-primary'>
            {t.skills_page.title.split(" ")[1]}
          </span>
        </h1>
        <p className='font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l border-outline/20 pl-lg py-xs'>
          {t.skills_page.subtitle}
        </p>
      </header>

      {/* Section 1: CORE OPERATING SYSTEM (Primary Stack grouped by category) */}
      <section className='mb-3xl animate-fade-up'>
        <div className='flex items-center gap-md mb-xl'>
          <div className='h-px w-12 bg-primary'></div>
          <h2 className='font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] whitespace-nowrap'>
            {t.skills_page.coreStack}
          </h2>
          <div className='h-px flex-1 bg-outline/10'></div>
        </div>

        <div className='space-y-6xl'>
          {stackCategories.map((category) => {
            const categoryCoreSkills = coreSkills.filter(
              (s) => s.category === category.id,
            );
            if (categoryCoreSkills.length === 0) return null;

            return (
              <div key={category.id} className='space-y-sm'>
                <div className='flex items-center gap-md mt-12'>
                  <category.icon className='w-6 h-6 text-primary opacity-60' />
                  <h3 className='font-headline-md text-2xl text-on-surface uppercase tracking-[0.2em]'>
                    {category.id}
                  </h3>
                  <div className='h-px flex-1 bg-outline/10'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-lg'>
                  {categoryCoreSkills.map((skill, index) => (
                    <StackCard key={skill.id} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: ANOTHER SKILLS (Other Skills) */}
      <section className='animate-fade-up delay-200 mt-24'>
        <div className='flex items-center gap-md mb-6'>
          <div className='h-px w-12 bg-outline/40'></div>
          <div className='flex items-center gap-3'>
            <Layers className='w-5 h-5 text-outline opacity-60' />
            <h2 className='font-label-sm text-label-sm text-outline uppercase tracking-[0.4em] whitespace-nowrap'>
              {t.skills_page.complementary}
            </h2>
          </div>
          <div className='h-px flex-1 bg-outline/10'></div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-md'>
          {otherSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      {/* Footer Industrial Accent */}
      <div className='mt-3xl pt-xl border-t border-outline/5 flex justify-between items-center opacity-30'>
        <div className='font-mono text-[10px] uppercase tracking-widest'>
          {t.skills_page.footer.buildLog}
        </div>
        <div className='font-mono text-[10px] uppercase tracking-widest'>
          {t.skills_page.footer.encrypted}
        </div>
      </div>
    </div>
  );
};

export default Skills;
