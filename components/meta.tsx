import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';

const Meta = ({ title = 'NextJs Boilerplate' }: { title?: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { theme } = useTheme();

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="description" content="Nextjs boilerplate app" />
      <link rel="shortcut icon" href="/static/icon/favicon.ico" />
      {mounted && (
        <meta
          name="theme-color"
          content={theme === 'light' ? '#f9fafb' : '#222222'}
        />
      )}
    </Head>
  );
};

export default Meta;
