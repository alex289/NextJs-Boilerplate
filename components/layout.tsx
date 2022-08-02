import { ReactNode, Suspense } from 'react';

import Meta from '@/components/meta';
import Navbar from '@/components/navbar';

const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <>
    <Meta title={title} />
    <Navbar />
    <main className="px-10">
      <Suspense>{children}</Suspense>
    </main>
  </>
);

export default Layout;
