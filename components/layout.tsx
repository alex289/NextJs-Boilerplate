import { ReactNode } from 'react';

import Meta from '@/components/meta';

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Meta></Meta>
    {children}
    <style jsx global>{`
      body,
      html {
        height: 100%;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      *,
      ::after,
      ::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;
