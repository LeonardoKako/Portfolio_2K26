import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useSeo } from '../hooks/useSeo';
import { Layers, Palette, Router as RouterIcon, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  useSeo({ title: t.nav.about });

  return (
    <div className="max-w-container-max mx-auto px-gutter pb-xl pt-lg">
      <header className="mb-xl animate-fade-up">
        <h1 className="font-display-lg text-display-lg text-on-background mb-4 uppercase">
          {t.about.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          {t.about.description}
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline/20 mb-xl rounded border border-outline/20 overflow-hidden animate-fade-up delay-100">
        {/* Phase 01: Design */}
        <div className="bg-surface-container-low p-lg relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="flex items-center gap-sm mb-md">
            <span className="font-label-sm text-label-sm text-outline px-2 py-1 border border-outline/30 rounded">PHASE 01</span>
            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface uppercase">{t.about.phase1.title}</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">
            {t.about.phase1.description}
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-sm">
              <Palette className="text-primary mt-1 w-5 h-5" />
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface mb-1 uppercase">{t.about.phase1.skill1}</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant">{t.about.phase1.skill1Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-sm">
              <Layers className="text-primary mt-1 w-5 h-5" />
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface mb-1 uppercase">{t.about.phase1.skill2}</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant">{t.about.phase1.skill2Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 02: IT */}
        <div className="bg-surface-container p-lg relative group border-t lg:border-t-0 lg:border-l border-outline/20">
          <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="flex items-center gap-sm mb-md">
            <span className="font-label-sm text-label-sm text-primary px-2 py-1 border border-primary/30 rounded bg-primary/10">PHASE 02</span>
            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface uppercase">{t.about.phase2.title}</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">
            {t.about.phase2.description}
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-sm">
              <RouterIcon className="text-secondary mt-1 w-5 h-5" />
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface mb-1 uppercase">{t.about.phase2.skill1}</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant">{t.about.phase2.skill1Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-sm">
              <Terminal className="text-secondary mt-1 w-5 h-5" />
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface mb-1 uppercase">{t.about.phase2.skill2}</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant">{t.about.phase2.skill2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intersection */}
      <section className="bg-surface-container-highest rounded border border-outline/20 p-lg relative overflow-hidden animate-fade-up delay-200">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #88938b 1px, transparent 1px), linear-gradient(to bottom, #88938b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 max-w-4xl">
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-4 uppercase">{t.about.intersection.title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            {t.about.intersection.description}
          </p>
          <div className="flex flex-wrap gap-sm">
            {t.about.intersection.tags.map(tag => (
              <span key={tag} className="font-label-sm text-label-sm text-background bg-primary px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
