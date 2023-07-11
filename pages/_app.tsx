import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../component/layouts/layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
