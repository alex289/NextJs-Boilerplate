import { ReactNode } from 'react';
import { Inter } from '@next/font/google';

import Navbar from '@/components/navbar';
import ProviderWrapper from '@/components/ProviderWrapper';

import '@/styles/global.css';
import { ServerThemeProvider } from '@wits/next-themes';

const inter = Inter();

const Layout = ({ children }: { children: ReactNode }) => (
  <ServerThemeProvider attribute="class">
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-gray-50 transition-colors duration-500 dark:bg-gray-800 dark:text-gray-100">
        <ProviderWrapper>
          <Navbar />
          <main className="px-10">{children}</main>
        </ProviderWrapper>
      </body>
    </html>
  </ServerThemeProvider>
);

export default Layout;
