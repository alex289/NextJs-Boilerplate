import Layout from '@/components/layout';

import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-screen justify-center">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 dark:text-gray-200 md:text-[5rem]">
          Next.Js <span className="text-indigo-500">Boilerplate</span>
        </h1>
      </div>
    </Layout>
  );
};

export default Index;
