'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="backdrop-blur-lg bg-background/40 border-b border-gray-200 fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">garamdale</Link>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/about" className="hover:text-primary text-primary">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
