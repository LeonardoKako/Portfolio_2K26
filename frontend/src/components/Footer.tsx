import React from "react";
import { useTranslation } from "../hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className='bg-surface-container-lowest w-full py-md mt-xl border-t border-outline/10'>
      <div className='max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-md'>
        <div className='font-headline-md text-headline-md text-primary'>
          LEO FLEITH // DEV
        </div>

        <div className='flex gap-md font-label-sm text-label-sm'>
          <a
            href='https://github.com/leonardoKako/'
            target="_blank"
            className='text-on-surface-variant hover:text-secondary transition-colors duration-200'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/leonardo-jo%C3%A3o-fleith/'
            target="_blank"
            className='text-on-surface-variant hover:text-secondary transition-colors duration-200'
          >
            LinkedIn
          </a>
        </div>

        <div className='font-label-sm text-label-sm text-on-surface-variant text-center md:text-right'>
          {t.footer.builtBy}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
