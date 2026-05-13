import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useSeo } from "../hooks/useSeo";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import {
  Copy,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Button from "../components/ui/Button";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { copy } = useCopyToClipboard();
  useSeo({ title: t.nav.contact });

  const email = "fleithkako@gmail.com";

  const socialLinks = [
    {
      platform: "GITHUB",
      url: "https://github.com/fleithkako",
      icon: Github,
      label: "// REPOSITORIES",
    },
    {
      platform: "LINKEDIN",
      url: "https://linkedin.com/in/kfleith",
      icon: Linkedin,
      label: "// PROFESSIONAL",
    },
    {
      platform: "INSTAGRAM",
      url: "https://instagram.com/leokako",
      icon: Instagram,
      label: `// ${t.contact.instagram}`,
    },
    {
      platform: "WHATSAPP",
      url: "https://wa.me/5548988445100",
      icon: MessageCircle,
      label: `// ${t.contact.whatsapp}`,
    },
  ];

  return (
    <main className='min-h-screen pt-xl px-gutter max-w-container-max mx-auto w-full relative pb-xl'>
      {/* Background Decorative Element */}
      <div className='absolute top-0 right-0 font-mono text-[10px] text-primary/10 writing-vertical-rl hidden lg:block select-none h-full pt-xl'>
        CONTACT_MODULE // EST. 2024 // CONNECTING_NODES
      </div>

      <div className='max-w-5xl mx-auto animate-fade-up'>
        {/* Header Section */}
        <section className='mb-xl border-l-[6px] border-primary pl-lg'>
          <span className='font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-sm block opacity-80'>
            {t.contact.directTransmission}
          </span>
          <h1 className='font-display-lg text-[3.5rem] md:text-[5rem] lg:text-[6rem] uppercase leading-[0.9] tracking-tighter mb-md'>
            VAMOS{" "}
            <span className='text-outline-variant opacity-50'>CONSTRUIR</span>
            <br />
            ALGO <span className='text-primary'>SÓLIDO</span>.
          </h1>
          <p className='font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed'>
            {t.contact.subtitle}
          </p>
        </section>

        <div className='flex flex-col gap-md'>
          {/* Main Contact Action - Horizontal Banner */}
          <div className='w-full bg-surface-container-high border border-outline/20 p-lg md:px-xl md:py-lg relative group overflow-hidden flex flex-col md:flex-row items-center justify-between gap-lg'>
            <div className='absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/30'></div>

            <div className='flex flex-col items-center md:items-start text-center md:text-left overflow-hidden'>
              <span className='font-mono text-[10px] text-outline uppercase tracking-[0.2em] mb-xs'>
                [ PROTOCOLO E-MAIL ]
              </span>
              <h2 className='font-display-lg text-[1.5rem] md:text-[2.2rem] text-on-surface truncate w-full'>
                {email}
              </h2>
            </div>

            <div className='flex flex-col items-center md:items-end gap-sm shrink-0'>
              <Button
                variant='primary'
                icon={Copy}
                onClick={() => copy(email)}
                className='w-full md:w-auto'
                size='md'
              >
                {t.contact.copyEmail}
              </Button>
              <div className='flex items-center gap-md text-outline font-mono text-[10px] uppercase'>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></span>
                  ENCAMINHAMENTO SEGURO
                </span>
                <span className='w-px h-3 bg-outline/20'></span>
                <span>RESPOSTA EM 24H</span>
              </div>
            </div>
          </div>

          {/* Social Links Grid - 2x2 or 4x1 */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md'>
            {socialLinks.map((link, i) => (
              <a
                key={link.platform}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex flex-col p-lg bg-surface-container border border-outline/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300'
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className='flex justify-between items-start mb-md'>
                  <div className='w-10 h-10 flex items-center justify-center bg-background border border-outline/20 text-on-surface-variant group-hover:text-primary transition-colors'>
                    <link.icon className='w-5 h-5' />
                  </div>
                  <ArrowUpRight className='w-4 h-4 text-outline/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
                </div>
                <div>
                  <div className='font-headline-md text-[14px] text-on-surface tracking-widest uppercase'>
                    {link.platform}
                  </div>
                  <div className='font-mono text-[10px] text-outline'>
                    {link.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
