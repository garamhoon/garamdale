import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({href, target, children}) => {
  return <Link
    href={href}
    target={target}
    className="inline-block bg-primary hover:bg-secondary hover:text-primary text-white font-bold py-3 px-6 rounded-full transition duration-300"
  >
    {children}
  </Link>
}

export default ButtonLink;