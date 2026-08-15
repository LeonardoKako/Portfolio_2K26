import { Project } from '../types/portfolio';
import mediaryImg from '../assets/projects/mediary.png';
import formsUnicesuscImg from '../assets/projects/forms-unicesusc.vercel.app_.png';
import scapAdminImg from '../assets/projects/scap-admin.png';
import arteDigitalImg from '../assets/projects/arte-digital-floripa.vercel.app_.png';
import nathyFormaturaImg from '../assets/projects/nathy-formatura.vercel.app_.png';
import andreFormaturaImg from '../assets/projects/andre-bittencourt.vercel.app_.png';
import chronosImg from '../assets/projects/chronos-leonardo.vercel.app_.png';
import intranetImg from '../assets/projects/intranet.png';
import theBlogImg from '../assets/projects/theblog.png';

export const projects: Project[] = [
  {
    id: 'mediary',
    title: 'Mediary',
    description: {
      'pt-BR': 'Aplicativo de diário de saúde estruturado como calendário, permitindo ao usuário registrar sintomas diários para acompanhamento médico. Suporta criação e edição de perfil de saúde completo. Usuário teste: usuario@mediary.com / Senha: 123456.',
      'en-US': 'Health diary app designed as a calendar, allowing users to track daily symptoms for medical monitoring. Supports full profile creation and editing. Test User: usuario@mediary.com / Password: 123456.'
    },
    shortDescription: {
      'pt-BR': 'Diário de saúde em formato de calendário para registro e acompanhamento de sintomas.',
      'en-US': 'Calendar-based health diary to record and monitor daily symptoms.'
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Supabase', 'Docker', 'Railway'],
    image: mediaryImg,
    highlighted: true,
    date: '02/2026',
    githubUrl: 'https://github.com/LeonardoKako/Mediary',
    deployUrl: 'https://mediary-henna.vercel.app'
  },
  {
    id: 'formularios-unicesusc',
    title: 'Formulários Unicesusc',
    description: {
      'pt-BR': 'Desenvolvido para atender às necessidades organizacionais da instituição, permitindo que usuários enviem solicitações de eventos com confirmação e recebimento de feedbacks diretamente por e-mail.',
      'en-US': 'Developed to meet the organizational needs of the university, allowing users to submit event requests with email confirmation and feedback.'
    },
    shortDescription: {
      'pt-BR': 'Sistema de solicitações de eventos acadêmicos e feedbacks automatizados por e-mail.',
      'en-US': 'Academic event request system with automated email feedback.'
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL', 'Supabase', 'Docker'],
    image: formsUnicesuscImg,
    highlighted: true,
    date: '07/2026',
    githubUrl: 'https://github.com/LeonardoKako/Forms-Unicesusc',
    deployUrl: 'https://formularioeventos.unicesusc.edu.br/'
  },
  {
    id: 'scap-admin',
    title: 'Scap Admin',
    description: {
      'pt-BR': 'Sistema completo de controle de acesso empresarial para gerenciamento de usuários, setores e logs de entrada e saída. Inclui um simulador de acesso integrado para geração dinâmica de registros.',
      'en-US': 'Complete business access control system to manage users, departments, and entry/exit logs. Includes an integrated access simulator for dynamic log generation.'
    },
    shortDescription: {
      'pt-BR': 'Gerenciamento de controle de acesso corporativo com simulador de logs.',
      'en-US': 'Corporate access control management with log simulator.'
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL', 'Docker'],
    image: scapAdminImg,
    highlighted: true,
    date: '05/2026',
    videoUrl: 'https://youtu.be/Bt42eIvcru4',
    githubUrl: 'https://github.com/LeonardoKako/SCAP-Admin'
  },
  {
    id: 'intranet-corporativa',
    title: 'Intranet',
    description: {
      'pt-BR': 'Projeto inicial de um portal de intranet corporativa para centralização de tarefas, documentos e atividades internas do setor da empresa. Projeto atualmente pausado.',
      'en-US': 'Initial stage of a corporate intranet portal for centralizing tasks, documents, and internal department activities. Project currently on hold.'
    },
    shortDescription: {
      'pt-BR': 'Portal de intranet inicial para centralização de documentos e atividades.',
      'en-US': 'Initial intranet portal for centralizing documents and activities.'
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'TypeORM', 'PostgreSQL'],
    image: intranetImg,
    highlighted: false,
    date: '12/2025',
    videoUrl: 'https://youtu.be/vYatGFRGcZI',
    githubUrl: 'https://github.com/LeonardoKako/Intranet'
  },
  {
    id: 'chronos-pomodoro',
    title: 'Chronos Pomodoro',
    description: {
      'pt-BR': 'Gerenciador de tarefas e foco utilizando a técnica Pomodoro. Oferece controle de configurações de tempos e cores, salvando todos os dados localmente no navegador.',
      'en-US': 'Task and focus manager using the Pomodoro technique. Offers configurations for timers and theme colors, saving all data locally in the browser.'
    },
    shortDescription: {
      'pt-BR': 'Timer de foco baseado na técnica Pomodoro com armazenamento local.',
      'en-US': 'Focus timer based on the Pomodoro technique with local storage.'
    },
    stack: ['React', 'TypeScript', 'CSS'],
    image: chronosImg,
    highlighted: false,
    date: '06/2025',
    githubUrl: 'https://github.com/LeonardoKako/chronos-pomodoro',
    deployUrl: 'https://andre-bittencourt.vercel.app/'
  },
  {
    id: 'arte-digital-floripa',
    title: 'Arte Digital Floripa',
    description: {
      'pt-BR': 'Landing-page interativa criada para digitalizar e expor obras de arte físicas, contando com um painel de administração específico para a adição e edição do acervo artístico. O projeto segue em desenvolvimento.',
      'en-US': 'Interactive landing page designed to digitalize and showcase physical artworks, featuring a specific admin panel for collection additions and edits. Project remains in development.'
    },
    shortDescription: {
      'pt-BR': 'Landing-page de exposição e gerenciamento de acervo de arte digital.',
      'en-US': 'Landing page to showcase and manage digital art collections.'
    },
    stack: ['React', 'JavaScript', 'CSS', 'Node.js', 'Supabase'],
    image: arteDigitalImg,
    highlighted: false,
    date: '07/2026',
    githubUrl: 'https://github.com/LeonardoKako/Arte_Digital_Floripa',
    deployUrl: 'https://arte-digital-floripa.vercel.app/'
  },
  {
    id: 'formatura-nathalia',
    title: 'Formatura Nathalia',
    description: {
      'pt-BR': 'Landing-page personalizada desenvolvida com foco em performance e design responsivo para divulgar a formatura de medicina da Dra. Nathalia Fleith.',
      'en-US': 'Custom landing page built with a focus on performance and responsive design to advertise Dr. Nathalia Fleith\'s medical graduation.'
    },
    shortDescription: {
      'pt-BR': 'Landing-page comemorativa da formatura de medicina da Dra. Nathalia Fleith.',
      'en-US': 'Celebratory landing page for Dr. Nathalia Fleith\'s medical graduation.'
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    image: nathyFormaturaImg,
    highlighted: false,
    date: '02/2026',
    githubUrl: 'https://github.com/LeonardoKako/nathy-formatura',
    deployUrl: 'https://nathy-formatura.vercel.app/'
  },
  {
    id: 'formatura-andre',
    title: 'André Formatura',
    description: {
      'pt-BR': 'Landing-page elegante e responsiva desenvolvida para a divulgação e comemoração da formatura de medicina do Dr. André Bittencourt.',
      'en-US': 'Elegant and responsive landing page built for advertising and celebrating Dr. André Bittencourt\'s medical graduation.'
    },
    shortDescription: {
      'pt-BR': 'Landing-page comemorativa da formatura de medicina do Dr. André Bittencourt.',
      'en-US': 'Celebratory landing page for Dr. André Bittencourt\'s medical graduation.'
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    image: andreFormaturaImg,
    highlighted: false,
    date: '11/2025',
    githubUrl: 'https://github.com/LeonardoKako/formatura-andre',
    deployUrl: 'https://andre-bittencourt.vercel.app/'
  },
  {
    id: 'the-blog-fullstack',
    title: 'The Blog',
    description: {
      'pt-BR': 'Blog fullstack interativo com rotas protegidas que permite aos usuários cadastrados gerenciar publicações pessoais e comentar em postagens existentes.',
      'en-US': 'Fullstack interactive blog with protected routes allowing registered users to manage personal publications and comment on existing posts.'
    },
    shortDescription: {
      'pt-BR': 'Plataforma de blog fullstack interativa com autenticação e banco de dados.',
      'en-US': 'Fullstack interactive blog platform with authentication and database.'
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TypeORM', 'SQLite'],
    image: theBlogImg,
    highlighted: false,
    date: '05/2025',
    githubUrl: 'https://github.com/LeonardoKako/the-blog-nextjs',
    videoUrl: 'https://www.loom.com/share/71950973e3c34a519156d6bdf3e5612a?sid=98cbbd7a-8623-4d8e-a835-5ef32a864d6e'
  }
];
