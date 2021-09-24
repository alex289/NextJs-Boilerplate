import { ReactNode } from 'react';

import Meta from '@/components/meta';
import ThemeButton from '@/components/theme-button';

const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <div className="bg-white dark:bg-black">
    <Meta title={title} />
    <ThemeButton />
    <main
      className="flex flex-col justify-center px-8 bg-white dark:bg-black"
      id="skip"
    >
      {children}
    </main>
  </div>
);

export default Layout;
