import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useSeo } from "../hooks/useSeo";
import { projects } from "../translations/projects";
import HighlightedProjectCard from "../components/HighlightedProjectCard";
import Button from "../components/ui/Button";
import { ArrowRight, Code2, Cpu, Globe, Terminal } from "lucide-react";
import leoFoto from "../assets/bio/leo.jpg";

const Home: React.FC = () => {
  const { t } = useTranslation();
  useSeo({ title: "Home" });

  const highlightedProjects = projects.filter((p) => p.highlighted).slice(0, 3);

  return (
    <div className='max-w-container-max mx-auto px-gutter pb-xl'>
      {/* Hero Section */}
      <section className='min-h-[80vh] flex flex-col lg:flex-row items-center gap-xl py-xl relative'>
        {/* Background Decorative Elements */}
        <div className='absolute top-20 right-0 font-mono text-[10px] text-primary/20 writing-vertical-rl hidden lg:block select-none'>
          LAT: -27.5954° S // LONG: -48.5480° W // ALT: 3.0M
        </div>

        <div className='flex-1 z-10'>
          <div className='border-l-[6px] border-primary pl-lg mb-lg'>
            <span className='font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-sm block opacity-80'>
              {t.hero.est}
            </span>
            <h1 className='font-display-lg text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem] uppercase leading-[0.8] tracking-tighter animate-fade-up'>
              {t.hero.title.split(" // ")[0]}
              <br />
              <span className='text-outline-variant text-[3.5rem] md:text-[5rem] lg:text-[7rem] opacity-50'>
                {t.hero.title.split(" // ")[1]}
              </span>
            </h1>
          </div>

          <p className='font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-xl animate-fade-up delay-100 leading-relaxed border-l border-outline/20 pl-lg'>
            {t.hero.subtitle}
          </p>

          <div className='flex items-center gap-lg animate-fade-up delay-200'>
            <div className='flex flex-col'>
              <span className='font-label-sm text-[10px] text-outline uppercase'>
                {t.hero.availability}
              </span>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
                <span className='font-headline-sm text-headline-sm text-on-surface'>
                  {t.hero.openToWork}
                </span>
              </div>
            </div>
            <div className='w-px h-10 bg-outline/20'></div>
            <div className='flex flex-col'>
              <span className='font-label-sm text-[10px] text-outline uppercase'>
                {t.hero.locationLabel}
              </span>
              <span className='font-headline-sm text-headline-sm text-on-surface uppercase'>
                {t.hero.location}
              </span>
            </div>
          </div>
        </div>

        <div className='flex-1 relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] border border-outline/20 rounded overflow-hidden group animate-fade-up delay-300'>
          {/* Overlay Details */}
          <div className='absolute top-4 left-4 z-20 flex flex-col gap-2'>
            <div className='bg-surface/80 backdrop-blur-md border border-outline/20 p-2 font-mono text-[10px] text-primary flex items-center gap-2'>
              <Terminal className='w-3 h-3' />
              USER_ID: lEO_FLEITH
            </div>
          </div>

          <div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60'></div>

          <img
            src={leoFoto}
            alt='K. Fleith'
            className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100'
          />

          <div className='absolute bottom-6 right-6 z-20'>
            <div className='bg-primary text-background px-4 py-2 font-display-sm text-[14px] uppercase tracking-widest skew-x-[-12deg]'>
              {t.hero.buildVersion}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Marquee */}
      <section className='py-xl overflow-hidden border-y border-outline/10 bg-surface-container-low/30 -mx-gutter px-gutter'>
        <div className='flex whitespace-nowrap animate-marquee'>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className='flex items-center gap-xl mx-xl'>
              <span className='font-display-lg text-[2rem] text-outline-variant uppercase'>
                React.js
              </span>
              <span className='w-2 h-2 rounded-full bg-primary/40'></span>
              <span className='font-display-lg text-[2rem] text-outline-variant uppercase'>
                TypeScript
              </span>
              <span className='w-2 h-2 rounded-full bg-primary/40'></span>
              <span className='font-display-lg text-[2rem] text-outline-variant uppercase'>
                Node.js
              </span>
              <span className='w-2 h-2 rounded-full bg-primary/40'></span>
              <span className='font-display-lg text-[2rem] text-outline-variant uppercase'>
                Next.js
              </span>
              <span className='w-2 h-2 rounded-full bg-primary/40'></span>
              <span className='font-display-lg text-[2rem] text-outline-variant uppercase'>
                PostgreSQL
              </span>
              <span className='w-2 h-2 rounded-full bg-primary/40'></span>
              <span className='font-display-lg text-[2rem] text-outline-variant uppercase'>
                Docker
              </span>
              <span className='w-2 h-2 rounded-full bg-primary/40'></span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-xl'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-xl gap-md'>
          <div className='border-l-[6px] border-primary pl-lg'>
            <span className='font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-sm block opacity-80'>
              {t.hero.gallerySubtitle}
            </span>
            <h2 className='font-display-lg text-[3rem] md:text-[5rem] uppercase leading-none tracking-tighter'>
              {t.hero.galleryTitle}
            </h2>
          </div>
          <div className='font-mono text-[10px] text-outline-variant hidden md:block uppercase'>
            {t.hero.galleryListing}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mb-xl'>
          {highlightedProjects.map((project, index) => (
            <HighlightedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className='flex justify-center mt-xl'>
          <Button
            to='/projects'
            variant='primary'
            icon={ArrowRight}
            className='min-w-[320px]'
          >
            {t.hero.viewAllProjects}
          </Button>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className='py-xl grid grid-cols-1 md:grid-cols-3 gap-px bg-outline/10 border border-outline/10 rounded overflow-hidden'>
        {[
          { label: t.hero.stats.projects, value: "12+", icon: Globe },
          { label: t.hero.stats.experience, value: "01+", icon: Cpu },
          { label: t.hero.stats.codeLines, value: "450K+", icon: Code2 },
        ].map((stat, i) => (
          <div
            key={i}
            className='bg-background p-lg flex flex-col items-center text-center group hover:bg-surface-container-low transition-colors'
          >
            <stat.icon className='w-8 h-8 text-primary mb-md opacity-40 group-hover:opacity-100 transition-opacity' />
            <span className='font-display-lg text-[3rem] text-on-surface leading-none mb-2'>
              {stat.value}
            </span>
            <span className='font-label-sm text-label-sm text-outline uppercase tracking-widest'>
              {stat.label}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
