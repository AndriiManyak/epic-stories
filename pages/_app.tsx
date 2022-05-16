import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme";
import { ReactElement } from "react";
import { NextPage } from "next";
import { WithLayout } from "~/types/withLayout";

type Page<P = Record<string, unknown>> = NextPage<P> & WithLayout;

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
