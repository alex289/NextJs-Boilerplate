import { ReactNode } from 'react';

import Meta from '@/components/meta';

const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <>
    <Meta title={title}></Meta>
    {children}
  </>
);

export default Layout;
