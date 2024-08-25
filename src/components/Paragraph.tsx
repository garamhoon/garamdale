import React from "react";

const Paragraph: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <p className="text-lg text-text-primary leading-relaxed">
    {children}
  </p>
}

export default Paragraph;