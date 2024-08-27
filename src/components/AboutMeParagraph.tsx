import React from 'react';

interface AboutMeParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

const AboutMeParagraph: React.FC<AboutMeParagraphProps> = ({ className, children }) => {
  return <p className={`text-lg leading-relaxed ${className}`}>{children}</p>;
};

export default AboutMeParagraph;
