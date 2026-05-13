export type Language = 'pt-BR' | 'en-US';

export interface Project {
  id: string;
  title: string;
  description: Record<Language, string>;
  stack: string[];
  image: string;
  githubUrl?: string;
  deployUrl?: string;
  highlighted?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: Record<Language, string>;
  period: string;
  description: Record<Language, string>;
  isCurrent?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Infra' | 'Design';
  proficiency: number; // 0 to 100
  proficiencyDescription: Record<Language, string>;
  since?: string;
  isCore?: boolean;
}

export interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  icon: string;
  label: Record<Language, string>;
}
