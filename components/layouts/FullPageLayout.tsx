import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

export const FullPageLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Main>{children}</Main>
    </Layout>
  );
};

const Layout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const Main = styled.main`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
`;
