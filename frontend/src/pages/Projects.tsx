import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useSeo } from "../hooks/useSeo";
import { projects } from "../translations/projects";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageTitle from "../components/PageTitle";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  useSeo({ title: t.nav.projects });

  return (
    <div className='max-w-container-max mx-auto px-gutter pb-xl pt-lg'>
      <header className='mb-xl animate-fade-up'>
        <div className='border-l-[6px] border-primary pl-md md:pl-lg'>
          <span className='font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-sm block opacity-80'>
            {t.projects.selectedWorks}
          </span>
          <PageTitle>
            {t.projects.heroTitle.split(" ")[0]}
            <br />
            <span className='text-outline-variant'>
              {t.projects.heroTitle.split(" ")[1]}
            </span>
          </PageTitle>
        </div>
      </header>

      <section className='grid grid-cols-1 gap-lg mb-xl'>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* CTA Section (Propaganda) */}
      <section className='mt-xl animate-fade-up'>
        <div className='relative bg-surface-container-highest border border-outline/20 rounded overflow-hidden group'>
          {/* Decorative Grid Background */}
          <div
            className='absolute inset-0 opacity-10 pointer-events-none'
            style={{
              backgroundImage:
                "linear-gradient(to right, #81d8ac 1px, transparent 1px), linear-gradient(to bottom, #81d8ac 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className='relative z-10 p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg'>
            <div className='max-w-2xl'>
              <h2 className='font-display-lg text-[2.5rem] md:text-[4rem] leading-none mb-md uppercase tracking-tighter'>
                {t.projects.cta.title1} <span className='text-primary'>{t.projects.cta.title2}</span> {t.projects.cta.title3}
              </h2>
              <p className='font-body-lg text-body-lg text-on-surface-variant'>
                {t.projects.cta.description}
              </p>
            </div>

            <Link
              to='/contact'
              className='bg-primary text-background font-headline-md text-[18px] text-headline-md px-lg py-md rounded hover:drop-shadow-[0_0_25px_rgba(129,216,172,0.5)] hover:scale-105 transition-all flex items-center gap-md group/btn'
            >
              {t.projects.cta.button}
              <ArrowRight className='w-6 h-6 group-hover/btn:translate-x-2 transition-transform' />
            </Link>
          </div>

          {/* Bottom structural accent */}
          <div className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50'></div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
