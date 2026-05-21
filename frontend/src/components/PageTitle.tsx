import React, { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ children, className = "" }) => {
  return (
    <h1
      className={`font-display-lg text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem] uppercase leading-[0.8] tracking-tighter text-on-surface ${className}`}
    >
      {children}
    </h1>
  );
};

export default PageTitle;
