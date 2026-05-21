import { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'unicesusc',
    company: 'Unicesusc',
    role: {
      'pt-BR': 'Desenvolvedor Fullstack / Infraestrutura',
      'en-US': 'Fullstack Developer / Infrastructure'
    },
    period: '2022 - Present',
    description: {
      'pt-BR': 'Arquitetando e mantendo infraestrutura crítica de TI, aplicando os mesmos princípios de estrutura para garantir alta disponibilidade e performance robusta.',
      'en-US': 'Architecting and maintaining critical IT infrastructure, applying the same principles of structure to ensure high availability and robust performance.'
    },
    isCurrent: true,
  },
  {
    id: 'mega-eletron',
    company: 'Mega Elétron',
    role: {
      'pt-BR': 'Designer Gráfico',
      'en-US': 'Graphic Designer'
    },
    period: '2018 - 2022',
    description: {
      'pt-BR': 'Masterizando comunicação visual. Projetar significava estabelecer hierarquia, guiar o olhar e equilibrar a teoria das cores para transmitir mensagens complexas de forma eficiente.',
      'en-US': 'Mastering visual communication. Designing meant establishing hierarchy, guiding the eye, and balancing color theory to convey complex messages efficiently.'
    },
  },
];
