import React from 'react';
import styles from "./page1.module.scss";
import profile_img from "../../public/profile_2.png";
import device from "../../public/device.png";
import Image from "next/image";

export default function Page1() {
  return (
      <div className={styles.page1}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>Frontend Developer</h1>
          <h2 className={styles.subtitle}>
            I code beautifully simple things, and I love what I do.
          </h2>
          <Image className={styles.pfimg} src={profile_img} alt="" />
          <Image className={styles.dvimg} src={device} alt="" />
        </div>
      </div>
  );
}
