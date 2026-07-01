import { Project } from '../types/portfolio';

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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXY4yo1dgQpjlOXXDSqE5dJ8VmJxhkhn6J69zaTYNOfqJSMSA7Wvkj4RUtUsTK2kznz-pmqbMjzwuZm6rCc3r_jvCTMBv3aNHVlV1UX1e5oJ8MYB5ELD3USL4tDskQFn8bxE5tw4DHoj4OsAqItrnz7igvVNVGvLFlpc3cxhaRgVWcCpXfJD-_mzXs_duWqE0BqldEQGqht8p_XuwVRDG9Wo3V35Mq5N3a93YQG-z0wM9DxoiEM5PA6DhD9hOa0OHFU_h46Lrj7-pR',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArbaA8gI-UH6etQiCFLrWjsrxFcHLzc4NFf92YLAzlfEDgXrVDrOOyuCkqU1uykFCl28jKuZy3HdT0ZvjziVtsEeSN_PVisIhfSoDNEMPyrt4_48Ldb8Xfr2XgZKjsDLIczSe_usGNb9Czduf6qme9tz3ZyK0RoSh4OYKs7IdpdurESJChvtyVJEZKMWSGTGPm6xXp6Rs8VXNNBajuard5Hcv1Y-wU8nxRiNmlo-uaaUnC19SQ8NjAFfbx2aEbxmpbUQ2DNBYDI8q5',
    highlighted: true,
    date: '12/2025',
    githubUrl: 'https://github.com/LeonardoKako/Forms-Unicesusc',
    deployUrl: 'https://forms-unicesusc.vercel.app/'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAayGzYsPXS4RZN21HmgZUHdxCTN4NMDnsDRT6dG8HHR4qZWlYFrsCgVroQt3oqCOe3p_833A2FdwpK14stnR1U7S4jOV7o4VL7MMY9N_Qu4kvfC92hA6bx9O0UydlBcvfZ5_JlVAr0V5xO408_-bKW0_BmDRm8hZ-JaDMS9sVp3QyXEMlN-CAOzvOYukE0AXVB4HzwkQ0tJ7DXDoJ_mOXj_TWpfF41K3OMzUPvlUVpN4jCiRuilpaJqFXKRwkf4QVBx16v6YWOCca3',
    highlighted: true,
    date: '11/2025',
    githubUrl: 'https://github.com/LeonardoKako/SCAP-Admin'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQsRunoo0zyoGXBKaqOsby75lJcpcPH-5l2qOcRyR5MYpd-GoaTzflTwterIuq2di2uJvA1IGM8eeKyPiZymtPW8OIfF6qkoEB4jXJoSGBFyb3zBx1EmH2RKVS18DnoltTPBABUaWflT-0YKnXPzRI4getcQQeLKRShAZlLkriQb7ewAzL73hzfRy2eP7j3TPpDgWea8v5i4N4GD14gmxlwjE6CQetxVOHUfS2qeCbXUrk6fAOdRlrU6W1eKfMSzOId0s1du-vGXqH',
    highlighted: false,
    date: '01/2026',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPToTUG_1ueZ194898wPGk6YmoUQ1dJw9_aBj5gbkE4y6fphGzckS8ayx6uQNi0jbmKTwx2SIjKvv9uLjOh7EVAHlJavFpQ0U2tPYwmSIY28xqKifLWW0oDnXgqWK5NVPHfleQHb8DBFnXcYcvwCITF_nq2y4izGMYMxVWYnW2w9hRoscmUdYC2TqiMDMwCLc4yTTvSA659oBRddRdwYFZwiRnbVPXFy0XLa1FXgjT5XhGfe3hxM970WxJNPvk1QHTJN-O9r7gfp_x',
    highlighted: false,
    date: '10/2025',
    githubUrl: 'https://github.com/LeonardoKako/nathy-formatura',
    deployUrl: 'https://nathy-formatura.vercel.app/'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArbaA8gI-UH6etQiCFLrWjsrxFcHLzc4NFf92YLAzlfEDgXrVDrOOyuCkqU1uykFCl28jKuZy3HdT0ZvjziVtsEeSN_PVisIhfSoDNEMPyrt4_48Ldb8Xfr2XgZKjsDLIczSe_usGNb9Czduf6qme9tz3ZyK0RoSh4OYKs7IdpdurESJChvtyVJEZKMWSGTGPm6xXp6Rs8VXNNBajuard5Hcv1Y-wU8nxRiNmlo-uaaUnC19SQ8NjAFfbx2aEbxmpbUQ2DNBYDI8q5',
    highlighted: false,
    date: '09/2025',
    githubUrl: 'https://github.com/LeonardoKako/Intranet'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPToTUG_1ueZ194898wPGk6YmoUQ1dJw9_aBj5gbkE4y6fphGzckS8ayx6uQNi0jbmKTwx2SIjKvv9uLjOh7EVAHlJavFpQ0U2tPYwmSIY28xqKifLWW0oDnXgqWK5NVPHfleQHb8DBFnXcYcvwCITF_nq2y4izGMYMxVWYnW2w9hRoscmUdYC2TqiMDMwCLc4yTTvSA659oBRddRdwYFZwiRnbVPXFy0XLa1FXgjT5XhGfe3hxM970WxJNPvk1QHTJN-O9r7gfp_x',
    highlighted: false,
    date: '10/2025',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuQsRunoo0zyoGXBKaqOsby75lJcpcPH-5l2qOcRyR5MYpd-GoaTzflTwterIuq2di2uJvA1IGM8eeKyPiZymtPW8OIfF6qkoEB4jXJoSGBFyb3zBx1EmH2RKVS18DnoltTPBABUaWflT-0YKnXPzRI4getcQQeLKRShAZlLkriQb7ewAzL73hzfRy2eP7j3TPpDgWea8v5i4N4GD14gmxlwjE6CQetxVOHUfS2qeCbXUrk6fAOdRlrU6W1eKfMSzOId0s1du-vGXqH',
    highlighted: false,
    date: '08/2025',
    githubUrl: 'https://github.com/LeonardoKako/the-blog-nextjs'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAayGzYsPXS4RZN21HmgZUHdxCTN4NMDnsDRT6dG8HHR4qZWlYFrsCgVroQt3oqCOe3p_833A2FdwpK14stnR1U7S4jOV7o4VL7MMY9N_Qu4kvfC92hA6bx9O0UydlBcvfZ5_JlVAr0V5xO408_-bKW0_BmDRm8hZ-JaDMS9sVp3QyXEMlN-CAOzvOYukE0AXVB4HzwkQ0tJ7DXDoJ_mOXj_TWpfF41K3OMzUPvlUVpN4jCiRuilpaJqFXKRwkf4QVBx16v6YWOCca3',
    highlighted: false,
    date: '06/2025',
    githubUrl: 'https://github.com/LeonardoKako/chronos-pomodoro',
    deployUrl: 'https://andre-bittencourt.vercel.app/'
  }
];
