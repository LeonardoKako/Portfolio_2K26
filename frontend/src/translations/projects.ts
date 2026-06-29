import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'unicesusc-intranet',
    title: 'Intranet Unicesusc',
    description: {
      'pt-BR': 'Infraestrutura de nuvem de nível empresarial para automação de sistemas. Implementando clusters neurais de auto-atendimento com protocolos de failover de latência zero.',
      'en-US': 'Enterprise-grade cloud infrastructure automation for distributed systems. Implementing auto-scaling neural clusters with zero-latency failover protocols.'
    },
    shortDescription: {
      'pt-BR': 'Infraestrutura de nuvem empresarial para automação de sistemas críticos.',
      'en-US': 'Enterprise cloud infrastructure for critical system automation.'
    },
    stack: ['NestJS', 'PostgreSQL', 'AWS', 'Docker'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArbaA8gI-UH6etQiCFLrWjsrxFcHLzc4NFf92YLAzlfEDgXrVDrOOyuCkqU1uykFCl28jKuZy3HdT0ZvjziVtsEeSN_PVisIhfSoDNEMPyrt4_48Ldb8Xfr2XgZKjsDLIczSe_usGNb9Czduf6qme9tz3ZyK0RoSh4OYKs7IdpdurESJChvtyVJEZKMWSGTGPm6xXp6Rs8VXNNBajuard5Hcv1Y-wU8nxRiNmlo-uaaUnC19SQ8NjAFfbx2aEbxmpbUQ2DNBYDI8q5',
    highlighted: true,
    date: '12/2025',
    githubUrl: 'https://github.com/leonardoKako',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder de vídeo
    deployUrl: 'https://github.com/leonardoKako' // Exemplo de deploy
  },
  {
    id: 'the-blog',
    title: 'The Blog',
    description: {
      'pt-BR': 'Uma experiência frontend pixel-perfect e altamente interativa. Focado em movimento fluido e acessibilidade intransigente.',
      'en-US': 'A pixel-perfect, highly interactive frontend experience. Focused on fluid motion and uncompromising accessibility.'
    },
    shortDescription: {
      'pt-BR': 'Experiência frontend pixel-perfect com animações fluidas e alta performance.',
      'en-US': 'Pixel-perfect frontend experience with fluid animations and performance.'
    },
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQsRunoo0zyoGXBKaqOsby75lJcpcPH-5l2qOcRyR5MYpd-GoaTzflTwterIuq2di2uJvA1IGM8eeKyPiZymtPW8OIfF6qkoEB4jXJoSGBFyb3zBx1EmH2RKVS18DnoltTPBABUaWflT-0YKnXPzRI4getcQQeLKRShAZlLkriQb7ewAzL73hzfRy2eP7j3TPpDgWea8v5i4N4GD14gmxlwjE6CQetxVOHUfS2qeCbXUrk6fAOdRlrU6W1eKfMSzOId0s1du-vGXqH',
    highlighted: true,
    date: '02/2026',
    githubUrl: 'https://github.com/leonardoKako',
    deployUrl: 'https://github.com/leonardoKako'
  },
  {
    id: 'chronos',
    title: 'Chronos',
    description: {
      'pt-BR': 'Plataforma B2B ponta a ponta gerenciando pipelines de dados complexos e fornecendo dashboards de análise em tempo real.',
      'en-US': 'End-to-end B2B platform managing complex data pipelines and providing real-time analytics dashboards.'
    },
    shortDescription: {
      'pt-BR': 'Plataforma B2B para gerenciamento de pipelines de dados e dashboards em tempo real.',
      'en-US': 'B2B platform for data pipeline management and real-time dashboards.'
    },
    stack: ['Node.js', 'PostgreSQL', 'React', 'TypeScript'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAayGzYsPXS4RZN21HmgZUHdxCTN4NMDnsDRT6dG8HHR4qZWlYFrsCgVroQt3oqCOe3p_833A2FdwpK14stnR1U7S4jOV7o4VL7MMY9N_Qu4kvfC92hA6bx9O0UydlBcvfZ5_JlVAr0V5xO408_-bKW0_BmDRm8hZ-JaDMS9sVp3QyXEMlN-CAOzvOYukE0AXVB4HzwkQ0tJ7DXDoJ_mOXj_TWpfF41K3OMzUPvlUVpN4jCiRuilpaJqFXKRwkf4QVBx16v6YWOCca3',
    highlighted: true,
    date: '08/2025',
    githubUrl: 'https://github.com/leonardoKako',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'efood',
    title: 'Efood',
    description: {
      'pt-BR': 'Dashboard altamente responsivo para monitoramento de transações em tempo real com latência abaixo de um segundo.',
      'en-US': 'Highly responsive dashboard for monitoring real-time transactions with sub-second latency.'
    },
    shortDescription: {
      'pt-BR': 'Dashboard responsivo para monitoramento de transações em tempo real.',
      'en-US': 'Responsive dashboard for real-time transaction monitoring.'
    },
    stack: ['React', 'TypeScript', 'D3.js'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXY4yo1dgQpjlOXXDSqE5dJ8VmJxhkhn6J69zaTYNOfqJSMSA7Wvkj4RUtUsTK2kznz-pmqbMjzwuZm6rCc3r_jvCTMBv3aNHVlV1UX1e5oJ8MYB5ELD3USL4tDskQFn8bxE5tw4DHoj4OsAqItrnz7igvVNVGvLFlpc3cxhaRgVWcCpXfJD-_mzXs_duWqE0BqldEQGqht8p_XuwVRDG9Wo3V35Mq5N3a93YQG-z0wM9DxoiEM5PA6DhD9hOa0OHFU_h46Lrj7-pR',
    date: '05/2025',
    githubUrl: 'https://github.com/leonardoKako',
    deployUrl: 'https://github.com/leonardoKako'
  },
  {
    id: 'cantina-sesi',
    title: 'Cantina SESI',
    description: {
      'pt-BR': 'Protocolo de rede mesh personalizado projetado para comunicação segura de IoT em ambientes industriais extremos.',
      'en-US': 'Custom mesh network protocol designed for secure IoT communication in extreme industrial environments.'
    },
    shortDescription: {
      'pt-BR': 'Protocolo de rede mesh para comunicação IoT em ambientes industriais.',
      'en-US': 'Mesh network protocol for industrial IoT communication.'
    },
    stack: ['Go', 'Protobuf', 'Docker'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPToTUG_1ueZ194898wPGk6YmoUQ1dJw9_aBj5gbkE4y6fphGzckS8ayx6uQNi0jbmKTwx2SIjKvv9uLjOh7EVAHlJavFpQ0U2tPYwmSIY28xqKifLWW0oDnXgqWK5NVPHfleQHb8DBFnXcYcvwCITF_nq2y4izGMYMxVWYnW2w9hRoscmUdYC2TqiMDMwCLc4yTTvSA659oBRddRdwYFZwiRnbVPXFy0XLa1FXgjT5XhGfe3hxM970WxJNPvk1QHTJN-O9r7gfp_x',
    date: '10/2024',
    githubUrl: 'https://github.com/leonardoKako',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];
