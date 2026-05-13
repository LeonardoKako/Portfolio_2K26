import { Skill } from '../types/portfolio';

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    proficiency: 90,
    proficiencyDescription: {
      'pt-BR': 'Arquitetura de componentes, hooks e otimização de performance.',
      'en-US': 'Component architecture, hooks, and performance optimization.'
    },
    since: '2022',
    isCore: true,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    proficiency: 85,
    proficiencyDescription: {
      'pt-BR': 'SSR, SSG, App Router e padrões de edge computing.',
      'en-US': 'SSR, SSG, App Router, and edge computing patterns.'
    },
    since: '2021',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    proficiency: 88,
    proficiencyDescription: {
      'pt-BR': 'APIs escaláveis, microsserviços e integração de sistemas.',
      'en-US': 'Scalable APIs, microservices, and system integration.'
    },
    since: '2022',
    isCore: true,
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'Backend',
    proficiency: 75,
    proficiencyDescription: {
      'pt-BR': 'Arquitetura modular, injeção de dependência e TypeORM.',
      'en-US': 'Modular architecture, dependency injection, and TypeORM.'
    },
    since: '2022',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Backend',
    proficiency: 80,
    proficiencyDescription: {
      'pt-BR': 'Modelagem de dados relacional e otimização de queries.',
      'en-US': 'Relational data modeling and query optimization.'
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Infra',
    proficiency: 70,
    proficiencyDescription: {
      'pt-BR': 'Containerização de aplicações e orquestração básica.',
      'en-US': 'Application containerization and basic orchestration.'
    },
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Infra',
    proficiency: 65,
    proficiencyDescription: {
      'pt-BR': 'Implantação e gerenciamento de serviços em nuvem.',
      'en-US': 'Deployment and management of cloud services.'
    },
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    proficiency: 85,
    proficiencyDescription: {
      'pt-BR': 'Prototipagem de alta fidelidade e sistemas de design.',
      'en-US': 'High-fidelity prototyping and design systems.'
    },
  },
];
