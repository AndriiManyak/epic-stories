import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const GameContainerLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
