import { Skill } from '../types/portfolio';

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    proficiency: 95,
    proficiencyDescription: {
      'pt-BR': 'Arquitetura de componentes, hooks e otimização de performance.',
      'en-US': 'Component architecture, hooks, and performance optimization.'
    },
    since: '2022',
    isCore: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 92,
    proficiencyDescription: {
      'pt-BR': 'Tipagem estática, interfaces e desenvolvimento robusto.',
      'en-US': 'Static typing, interfaces, and robust development.'
    },
    since: '2022',
    isCore: true,
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'Frontend',
    proficiency: 95,
    proficiencyDescription: {
      'pt-BR': 'Estilização utilitária, layouts responsivos e design systems.',
      'en-US': 'Utility-first styling, responsive layouts, and design systems.'
    },
    since: '2022',
    isCore: true,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    proficiency: 90,
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
    proficiency: 85,
    proficiencyDescription: {
      'pt-BR': 'Arquitetura modular, injeção de dependência e TypeORM.',
      'en-US': 'Modular architecture, dependency injection, and TypeORM.'
    },
    since: '2022',
    isCore: true,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    proficiency: 88,
    proficiencyDescription: {
      'pt-BR': 'Modelagem de dados relacional e otimização de queries.',
      'en-US': 'Relational data modeling and query optimization.'
    },
    isCore: true,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    proficiency: 82,
    proficiencyDescription: {
      'pt-BR': 'Bancos NoSQL, agregações e escalabilidade horizontal.',
      'en-US': 'NoSQL databases, aggregations, and horizontal scaling.'
    },
    isCore: true,
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Infra',
    proficiency: 92,
    proficiencyDescription: {
      'pt-BR': 'Versionamento avançado, GitFlow e resolução de conflitos.',
      'en-US': 'Advanced versioning, GitFlow, and conflict resolution.'
    },
    isCore: true,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Infra',
    proficiency: 85,
    proficiencyDescription: {
      'pt-BR': 'Containerização de aplicações e orquestração básica.',
      'en-US': 'Application containerization and basic orchestration.'
    },
    isCore: true,
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Infra',
    proficiency: 75,
    proficiencyDescription: {
      'pt-BR': 'Implantação e gerenciamento de serviços em nuvem (S3, EC2).',
      'en-US': 'Deployment and management of cloud services (S3, EC2).'
    },
    isCore: true,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    proficiency: 88,
    proficiencyDescription: {
      'pt-BR': 'SSR, SSG, App Router e otimização SEO.',
      'en-US': 'SSR, SSG, App Router, and SEO optimization.'
    },
    since: '2021',
    isCore: false,
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    proficiency: 70,
    proficiencyDescription: {
      'pt-BR': 'Desenvolvimento reativo e Composition API.',
      'en-US': 'Reactive development and Composition API.'
    },
    isCore: false,
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Infra',
    proficiency: 80,
    proficiencyDescription: {
      'pt-BR': 'Autenticação, Firestore e Realtime Database.',
      'en-US': 'Authentication, Firestore, and Realtime Database.'
    },
    isCore: false,
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
    isCore: false,
  },
];
