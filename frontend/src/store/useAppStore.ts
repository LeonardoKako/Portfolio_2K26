import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '../types/portfolio';

interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  activeProjectModal: string | null;
  openProjectModal: (projectId: string) => void;
  closeProjectModal: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'pt-BR',
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set((state) => ({ 
        language: state.language === 'pt-BR' ? 'en-US' : 'pt-BR' 
      })),
      activeProjectModal: null,
      openProjectModal: (activeProjectModal) => set({ activeProjectModal }),
      closeProjectModal: () => set({ activeProjectModal: null }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({ language: state.language }),
    }
  )
);
