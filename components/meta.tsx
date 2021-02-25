import Head from 'next/head';

const Meta = ({ title = 'NextJs boilerplate' }: { title?: string }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default Meta;
