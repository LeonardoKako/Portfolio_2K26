import { header } from './header';
import { home } from './home';
import { about } from './about';
import { projectsSection } from './projectsSection';
import { contact } from './contact';
import { footer } from './footer';
import { skillsSection } from './skillsSection';

export const translations = {
  "pt-BR": {
    nav: header["pt-BR"],
    hero: home["pt-BR"],
    about: about["pt-BR"],
    projects: projectsSection["pt-BR"],
    contact: contact["pt-BR"],
    footer: footer["pt-BR"],
    skills_page: skillsSection["pt-BR"],
  },
  "en-US": {
    nav: header["en-US"],
    hero: home["en-US"],
    about: about["en-US"],
    projects: projectsSection["en-US"],
    contact: contact["en-US"],
    footer: footer["en-US"],
    skills_page: skillsSection["en-US"],
  }
};
