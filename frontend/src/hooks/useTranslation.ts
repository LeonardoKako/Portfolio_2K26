import { useAppStore } from '../store/useAppStore';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const { language } = useAppStore();
  
  const t = translations[language];

  return { t, language };
};
