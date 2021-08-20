import { ReactNode } from 'react';

import Container from '@material-ui/core/Container';

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
    <Container>
      <div>{children}</div>
    </Container>
  </>
);

export default Layout;
