import Link from 'next/link';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="custom-nav z-50 mx-auto my-0 flex w-full max-w-4xl items-center justify-between bg-gray-50 p-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100 md:my-8 md:p-0">
      <div>
        <h1 className="p-1 text-xl font-semibold text-gray-900 dark:text-gray-100 sm:p-4">
          <Link href="/">NavTitle</Link>
        </h1>
      </div>
      <div className="flex ">
        <div className="md:pr-4">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium"
                onClick={() => setShowDropdown(showDropdown ? false : true)}>
                Dropdown
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                <div className="py-1" role="none">
                  <div className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100">
                    Item 1
                  </div>
                  <div className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100">
                    Item 2
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="mr-1 h-10 w-10 rounded-lg bg-gray-200 p-3 ring-gray-300 hover:ring-4 dark:bg-gray-700 md:mr-3"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200">
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
