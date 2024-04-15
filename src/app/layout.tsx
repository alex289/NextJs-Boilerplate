import '@/styles/global.css';

import clsx from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { type ReactNode } from 'react';

import Navbar from '@/components/navbar';
import { Provider } from '@/components/provider';

import type { Metadata, Viewport } from 'next';
import { env } from '@/env.mjs';

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://next-js-boilerplate-sable.vercel.app'),
    title: {
      default: 'NextJs Boilerplate',
      template: '%s | NextJs Boilerplate',
    },
    authors: [{ name: 'NextJs Boilerplate' }],
    applicationName: 'NextJs Boilerplate',
    description: 'Nextjs boilerplate app',
    openGraph: {
      title: 'NextJs Boilerplate',
      description: 'nextjs boilerplate website with presets',
      url: env.NEXT_PUBLIC_VERCEL_URL,
      siteName: 'NextJs Boilerplate',
      images: [
        {
          url: `${env.NEXT_PUBLIC_VERCEL_URL}/api/og`,
          width: 1920,
          height: 1080,
        },
      ],
      locale: 'en',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: 'NextJs Boilerplate',
      card: 'summary_large_image',
      description: 'nextjs boilerplate website with presets',
      images: [`${env.NEXT_PUBLIC_VERCEL_URL}/api/og`],
    },
    icons: {
      shortcut: '/static/icon/favicon.ico',
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#222222' },
  ],
  initialScale: 1,
  width: 'device-width',
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={clsx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning>
      <body className="bg-gray-50 transition-colors duration-500 dark:bg-gray-800 dark:text-gray-100">
        <Provider>
          <Navbar />
          <main className="px-10">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
