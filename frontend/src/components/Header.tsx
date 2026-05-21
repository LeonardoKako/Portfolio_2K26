import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useAppStore } from '../store/useAppStore';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useAppStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/projects', label: t.nav.projects },
    { path: '/about', label: t.nav.about },
    { path: '/skills', label: t.nav.skills },
    { path: '/contact', label: t.nav.contact },
  ];

  const handleDownloadCv = () => {
    const cvPath = language === 'pt-BR' ? '/CV_PT.pdf' : '/CV_EN.pdf';
    window.open(cvPath, '_blank');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-lg border-b border-outline/20">
      <div className="flex justify-between items-center w-full px-gutter h-xl max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md tracking-tighter text-primary">
          LEO FLEITH // DEV
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label-sm text-label-sm transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(129,216,172,0.5)] ${
                location.pathname === link.path 
                  ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                  : 'text-on-surface-variant font-medium'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm uppercase tracking-widest"
          >
            <Globe className="w-4 h-4" />
            {language === 'pt-BR' ? 'PT' : 'EN'}
          </button>
          
          <button
            onClick={handleDownloadCv}
            className="hidden md:flex items-center gap-sm bg-primary text-on-primary px-4 py-2 rounded font-headline-md text-[14px] hover:shadow-[0_0_15px_rgba(129,216,172,0.3)] transition-shadow"
          >
            {t.nav.downloadCv}
          </button>

          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-container border-b border-outline/20 p-md flex flex-col gap-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-on-surface-variant font-medium font-label-sm text-label-sm hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleDownloadCv}
            className="bg-primary text-on-primary px-4 py-2 rounded font-headline-md text-center"
          >
            {t.nav.downloadCv}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
