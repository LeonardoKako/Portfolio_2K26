import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useSeo } from "../hooks/useSeo";
import LogCard from "../components/LogCard";
import { MapPin, History, Calendar, Activity } from "lucide-react";

const About: React.FC = () => {
  const { t } = useTranslation();
  useSeo({ title: t.nav.about });

  return (
    <div className='max-w-container-max mx-auto px-gutter pb-xl pt-lg'>
      {/* Page Header */}
      <header className='mb-2xl animate-fade-up'>
        <h1 className='font-display-lg text-[2.5rem] md:text-[7rem] lg:text-[9rem] text-on-surface mb-sm tracking-tighter uppercase leading-[0.8]'>
          {t.about.title1}
          <br />
          <span className='text-primary'>{t.about.title2}</span>
        </h1>
        <p className='font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l border-outline/20 pl-lg py-xs'>
          {t.about.description}
        </p>
      </header>

      {/* Identification & Operational Narrative */}
      <section className='mb-5xl grid grid-cols-1 lg:grid-cols-3 gap-md border-y border-outline/20 py-xl animate-fade-up delay-100'>
        {/* Bio Data Column */}
        <div className='space-y-md border-r border-outline/10 pr-lg'>
          <div>
            <span className='font-label-sm text-label-sm text-primary block mb-2 uppercase tracking-[0.3em]'>
              {t.about.identification.title}
            </span>
            <h2 className='font-display-lg text-4xl text-on-surface uppercase tracking-tight'>
              {t.about.identification.name}
            </h2>
            <p className='font-body-md text-primary italic opacity-80 text-lg'>
              {t.about.identification.role}
            </p>
          </div>

          <div className='grid grid-cols-1 gap-sm pt-md border-t border-outline/5'>
            <div className='flex items-center gap-4'>
              <MapPin className='w-4 h-4 text-primary opacity-60' />
              <span className='font-mono text-[11px] text-on-surface-variant uppercase tracking-widest'>
                {t.about.identification.location},{" "}
                {t.about.identification.country}
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <Calendar className='w-4 h-4 text-primary opacity-60' />
              <span className='font-mono text-[11px] text-on-surface-variant uppercase tracking-widest'>
                {t.about.identification.age}
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <History className='w-4 h-4 text-primary opacity-60' />
              <span className='font-mono text-[11px] text-on-surface-variant uppercase tracking-widest'>
                {t.about.identification.experience}
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <Activity className='w-4 h-4 text-primary opacity-60' />
              <div className='flex items-center gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                <span className='font-mono text-[11px] text-on-surface uppercase tracking-widest'>
                  STATUS: {t.about.identification.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Column */}
        <div className='lg:col-span-2 lg:pl-2xl pt-xl lg:pt-0'>
          <span className='font-label-sm text-label-sm text-primary block mb-6 uppercase tracking-[0.4em]'>
            {t.about.narrative.title}
          </span>
          <p className='font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-xl mb-lg'>
            {t.about.narrative.text}
          </p>

          <div className='mt-2xl grid grid-cols-2 md:grid-cols-4 gap-md opacity-40'>
            {t.about.narrative.tags.map((tag) => (
              <div
                key={tag}
                className='border border-outline/20 p-3 text-center'
              >
                <span className='font-mono text-[10px] tracking-[0.5em]'>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Log */}
      <section className='mb-5xl space-y-xl animate-fade-up delay-200'>
        <div className='flex items-end justify-between border-b border-primary/30 pb-4 mb-lg'>
          <h2 className='font-display-lg text-[2.5rem] md:text-[3.5rem] text-on-surface uppercase leading-none mt-lg'>
            {t.about.professional_log.title1} <span className='text-primary'>{t.about.professional_log.title2}</span>
          </h2>
          <span className='font-mono text-[10px] text-outline hidden md:block tracking-widest uppercase'>
            {t.about.professional_log.version}
          </span>
        </div>

        <div className='grid grid-cols-1 gap-lg'>
          {t.about.professional_log.experiences.map((exp, index) => (
            <LogCard
              key={index}
              entry={exp}
              index={index}
              type='professional'
            />
          ))}
        </div>
      </section>

      {/* Academic Log */}
      <section className='space-y-xl animate-fade-up delay-300'>
        <div className='flex items-end justify-between border-b border-outline/30 pb-4 mb-lg'>
          <h2 className='font-display-lg text-[2.5rem] md:text-[3.5rem] text-on-surface uppercase leading-none  mt-lg'>
            {t.about.academic_log.title1} <span className='text-outline'>{t.about.academic_log.title2}</span>
          </h2>
          <span className='font-mono text-[10px] text-outline hidden md:block tracking-widest uppercase'>
            {t.about.academic_log.version}
          </span>
        </div>

        <div className='grid grid-cols-1 gap-lg'>
          {t.about.academic_log.entries.map((edu, index) => (
            <LogCard key={index} entry={edu} index={index} type='academic' />
          ))}
        </div>
      </section>

      {/* Footer Industrial Accent */}
      <div className='mt-4xl pt-xl border-t border-outline/5 flex justify-between items-center opacity-30'>
        <div className='font-mono text-[10px] uppercase tracking-widest'>
          {t.about.footer.sync}
        </div>
        <div className='font-mono text-[10px] uppercase tracking-widest'>
          {t.about.footer.encrypted}
        </div>
      </div>
    </div>
  );
};

export default About;
