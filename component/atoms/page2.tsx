import React from "react";
import styles from "./page2.module.scss";
import Image from "next/image";

export default function Page2() {
  return (
    <>
      <div className={styles.page2}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>
            Hi, I’m Lee Hyeongcheol. Nice to meet you.
          </h1>
          <h2 className={styles.subtitle}>
            I am working with designers and planners to implement designs and
            functions on the web to meet the needs of various customers. They
            mainly implement the web using React.js, Next.js, and TypeScript,
            but they use Next.js to support API route and SEO and image
            processing, and React.js uses Redux to prevent mismatched types and
            functions through State Management and TypeScript, and implement
            Responsive to ensure that Chrome, Safari, Edge, and Mobile screens
            (iPhone, Galaxy) run the same way.
          </h2>
          <Image src="" alt="" />
        </div>
      </div>
    </>
  );
}
