import { useEffect } from 'react';
import { useTranslation } from './useTranslation';

interface SeoProps {
  title?: string;
  description?: string;
}

export const useSeo = ({ title, description }: SeoProps = {}) => {
  const { language } = useTranslation();

  useEffect(() => {
    const baseTitle = 'LEO FLEITH // DEV';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [title, description, language]);
};
