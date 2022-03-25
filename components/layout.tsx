import { ReactNode } from 'react';

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
    <main className="container mx-4 sm:mx-auto">{children}</main>
  </>
);

export default Layout;
