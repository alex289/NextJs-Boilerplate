import Head from 'next/head';

const Meta = ({ title = 'NextJs Boilerplate' }: { title?: string }) => (
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
    <link rel="shortcut icon" href="/static/icon/favicon.ico" />
  </Head>
);

export default Meta;
