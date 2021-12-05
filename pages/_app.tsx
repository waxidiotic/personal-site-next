import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
