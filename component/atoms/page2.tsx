import React from 'react';
import styles from "./page2.module.scss";
import Image from "next/image";

export default function Page2() {
  return (
    <>
      <div className={styles.page2}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>Hi, I’m Lee Hyeongcheol. Nice to meet you.</h1>
          <h2 className={styles.subtitle}>
            「Front-end Engineer」としてデザイナーと企画者と協力してデザインと機能をウェブに実装したりとか多様な顧客のニーズを満たし、
            エラーを予防できるようウェブを実装するために努力しています。主に「React.js、Next.js、TypeScript」を活用してウェブを実装していますが、
            Next.js を活用して APIRoutes および SEO サポート、イメージ処理などをして、 React.js では Redux を活用して全域の状態管理および
            TypeScript を通じて合わない TYPE や関数のエラーを事前に予防しています。そして Chrome、Safari、Edge およびモバイル画面(iphone、Galaxy)も同様に実行されるようにResponsive を実装しています。
           </h2>
          <Image src="" alt="" />
        </div>
      </div>
    </>
  );
}


