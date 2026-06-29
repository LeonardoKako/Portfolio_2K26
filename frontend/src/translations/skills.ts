import { Skill } from '../types/portfolio';
import { 
  Globe, 
  Code2, 
  Layout, 
  Terminal, 
  Cpu, 
  Database, 
  GitBranch, 
  Container, 
  Cloud,
  Layers,
  Flame,
  Figma,
  ShieldCheck,
  KeyRound
} from 'lucide-react';

export const mainSkills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    proficiency: 95,
    proficiencyDescription: {
      'pt-BR': 'Arquitetura de componentes, hooks e otimização de performance.',
      'en-US': 'Component architecture, hooks, and performance optimization.'
    },
    since: '2023',
    isCore: true,
    icon: Globe,
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
    since: '2024',
    isCore: true,
    icon: Code2,
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
    since: '2024',
    isCore: true,
    icon: Layout,
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
    since: '2023',
    isCore: true,
    icon: Terminal,
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
    since: '2025',
    isCore: true,
    icon: Cpu,
  },
  {
    id: 'jwt',
    name: 'JWT',
    category: 'Backend',
    proficiency: 90,
    proficiencyDescription: {
      'pt-BR': 'Autenticação segura, tokens de acesso, refresh tokens e estratégias de segurança.',
      'en-US': 'Secure authentication, access tokens, refresh tokens, and security strategies.'
    },
    since: '2024',
    isCore: true,
    icon: KeyRound,
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
    since: '2024',
    isCore: true,
    icon: Database,
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
    since: '2025',
    isCore: true,
    icon: Database,
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Database',
    proficiency: 85,
    proficiencyDescription: {
      'pt-BR': 'Banco de dados em nuvem, PostgreSQL, autenticação e real-time subscriptions.',
      'en-US': 'Cloud databases, PostgreSQL, authentication, and real-time subscriptions.'
    },
    since: '2025',
    isCore: true,
    icon: Database,
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
    since: '2022',
    isCore: true,
    icon: GitBranch,
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
    since: '2026',
    isCore: true,
    icon: Container,
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
    since: '2026',
    isCore: true,
    icon: Cloud,
  },
];

export const anotherSkills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    proficiency: 95,
    proficiencyDescription: {
      'pt-BR': 'Desenvolvimento web moderno, ES6+, APIs do navegador e manipulação DOM.',
      'en-US': 'Modern web development, ES6+, browser APIs, and DOM manipulation.'
    },
    since: '2022',
    isCore: false,
    icon: Code2,
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
    since: '2025',
    isCore: false,
    icon: Globe,
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
    since: '2025',
    isCore: false,
    icon: Layers,
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'Frontend',
    proficiency: 80,
    proficiencyDescription: {
      'pt-BR': 'Testes unitários e de integração, mocks e asserções.',
      'en-US': 'Unit and integration testing, mocks, and assertions.'
    },
    since: '2024',
    isCore: false,
    icon: ShieldCheck,
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
    since: '2025',
    isCore: false,
    icon: Flame,
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
    since: '2023',
    isCore: false,
    icon: Figma,
  },
];
