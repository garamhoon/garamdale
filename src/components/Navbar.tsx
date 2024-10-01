'use client';

import React from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold sm:inline-block">garamdale</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>

    // <nav className="backdrop-blur-lg bg-background/40 border-b border-gray-200 fixed w-full z-20">
    //   <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    //     <div className="text-2xl font-bold text-primary">
    //       <Link href="/">garamdale</Link>
    //     </div>
    //     <ul className="flex space-x-6 text-lg">
    //       <li>
    //         <Link href="/about" className="hover:text-primary text-primary">
    //           About Me
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
