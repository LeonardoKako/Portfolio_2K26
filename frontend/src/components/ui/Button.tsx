import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'surface';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center uppercase tracking-widest transition-all duration-300 overflow-hidden font-headline-md select-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-primary/90",
    outline: "bg-transparent border border-outline/20 text-on-surface hover:border-primary/50 hover:text-primary",
    ghost: "bg-transparent text-outline hover:text-primary hover:bg-primary/5",
    surface: "bg-surface-container-highest border border-outline/20 text-on-surface hover:border-primary/50"
  };

  const sizes = {
    sm: "px-md py-xs text-[12px]",
    md: "px-xl py-md text-headline-md",
    lg: "px-2xl py-lg text-[1.25rem]",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-md">
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </span>
      {/* Interactive Background Layer */}
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
