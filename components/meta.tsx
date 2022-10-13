import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';

type Props = {
  title?: string;
  ogImageText?: string;
};

const Meta = ({ title = 'NextJs Boilerplate', ogImageText }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { theme } = useTheme();

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="description" content="Nextjs boilerplate app" />
      <link rel="shortcut icon" href="/static/icon/favicon.ico" />
      <meta
        name="description"
        content="nextjs boilerplate website with presets"
      />
      <meta
        property="og:url"
        content="https://next-js-boilerplate-sable.vercel.app"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="nextjs boilerplate website with presets"
      />
      <meta
        property="og:image"
        content={`/api/og${ogImageText ? '?title=' + ogImageText : ''}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="next-js-boilerplate-sable.vercel.app"
      />
      <meta
        property="twitter:url"
        content="https://next-js-boilerplate-sable.vercel.app"
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="nextjs boilerplate website with presets"
      />
      <meta
        name="twitter:image"
        content={`/api/og${ogImageText ? '?title=' + ogImageText : ''}`}
      />
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
