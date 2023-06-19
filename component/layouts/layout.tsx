import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <title></title>
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
