'use client';

import Link from 'next/link';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import UserMenu from './user-menu';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 mx-auto my-0 flex w-full max-w-5xl items-center justify-between p-3 text-gray-900 dark:text-gray-100 md:my-8 md:p-0">
      <div>
        <h1 className="p-1 text-xl font-semibold text-gray-900 dark:text-gray-100 sm:p-4">
          <Link href="/">NavTitle</Link>
        </h1>
      </div>
      <div className="flex">
        <UserMenu />

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="mr-1 h-10 w-10 rounded-lg bg-gray-200 p-3 ring-gray-300 hover:ring-4 dark:bg-gray-700 md:mr-3"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
          {mounted && resolvedTheme === 'dark' ? (
            <Sun fill="#eaeaea" className="h-4 w-4 dark:text-gray-200" />
          ) : (
            <Moon fill="#222222" className="h-4 w-4 text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
