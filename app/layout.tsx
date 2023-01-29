'use client';
import { ReactNode } from 'react';

import Navbar from '@/components/navbar';
import { Inter } from '@next/font/google';

import '@/styles/global.css';
import { ThemeProvider } from 'next-themes';

const normal = Inter();

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={normal.className}>
    <ThemeProvider attribute="class">
      <body className="bg-gray-50 transition-colors duration-500 dark:bg-gray-800 dark:text-gray-100">
        <Navbar />
        <main className="px-10">{children}</main>
      </body>
    </ThemeProvider>
  </html>
);

export default Layout;
