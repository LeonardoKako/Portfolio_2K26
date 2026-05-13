import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useSeo } from '../hooks/useSeo';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { Copy, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { copy } = useCopyToClipboard();
  useSeo({ title: t.nav.contact });

  const email = 'fleithkako@gmail.com';

  return (
    <main className="flex-grow flex items-center justify-center pt-xl px-gutter max-w-container-max mx-auto w-full relative min-h-[80vh]">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-12 gap-md opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="col-span-1 border-r border-primary h-full"></div>
        ))}
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center z-10 relative animate-fade-up">
        {/* Structural Line */}
        <div className="h-16 w-[1px] bg-outline-variant mb-md opacity-50"></div>
        
        <div className="text-center mb-xl">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-sm tracking-tighter uppercase">
            {t.contact.title.split(' ')[0]} <span className="text-primary">{t.contact.title.split(' ')[1]}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Email Bento Card */}
        <div className="w-full bg-surface-container rounded border border-outline-variant/40 p-lg flex flex-col items-center justify-center relative group overflow-hidden hover:border-primary/30 transition-colors duration-500 mb-md shadow-[inset_0_0_0_0.5px_rgba(129,216,172,0.05)]">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="font-label-sm text-label-sm text-primary mb-md tracking-widest uppercase">
            {t.contact.directTransmission}
          </div>
          <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-lg break-all text-center tracking-wide">
            {email}
          </div>
          <button
            onClick={() => copy(email)}
            className="bg-primary text-on-primary font-headline-md text-[16px] px-lg py-sm rounded flex items-center gap-sm hover:shadow-[0_0_20px_rgba(129,216,172,0.3)] transition-all duration-300 group/btn"
          >
            <Copy className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" />
            {t.contact.copyEmail}
          </button>
        </div>

        {/* Links Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-md">
          <a
            href="https://github.com/fleithkako"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-low rounded border border-outline-variant/30 p-md flex items-center justify-between group hover:bg-surface-container hover:border-outline-variant transition-all duration-300"
          >
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded bg-surface border border-outline/20 flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <div className="font-headline-md text-headline-md text-on-surface text-[18px]">GITHUB</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">// View Repositories</div>
              </div>
            </div>
            <ArrowRight className="text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="https://linkedin.com/in/kfleith"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-low rounded border border-outline-variant/30 p-md flex items-center justify-between group hover:bg-surface-container hover:border-outline-variant transition-all duration-300"
          >
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded bg-surface border border-outline/20 flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-headline-md text-headline-md text-on-surface text-[18px]">LINKEDIN</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">// Professional Network</div>
              </div>
            </div>
            <ArrowRight className="text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Terminal Decorative Element */}
        <div className="mt-xl w-full max-w-md mx-auto opacity-60">
          <div className="flex items-center gap-xs mb-xs">
            <div className="w-2 h-2 rounded-full bg-error"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded p-sm font-label-sm text-label-sm text-on-surface-variant">
            &gt; status: {t.contact.status}<br />
            &gt; connection: {t.contact.connection}<br />
            <span className="text-primary animate-pulse">_</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
