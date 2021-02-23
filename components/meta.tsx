import Head from 'next/head';

const Meta = ({ title = 'NextJs boilerplate' }: { title?: String }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default Meta;
