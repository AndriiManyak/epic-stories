import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

export const FullPageLayout = ({ children, header, footer }: Props) => {
  return (
    <Layout>
      {header}
      <Main>{children}</Main>
      {footer}
    </Layout>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const Main = styled.main`
  flex-grow: 1;
`;
