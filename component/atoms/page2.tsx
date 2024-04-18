import styles from "./page2.module.scss";
import Image from "next/image";

export default function Page2() {
  return (
    <>
      <div className={styles.page2}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>Hi, I’m Lee. Nice to meet you.</h1>
          <h2 className={styles.subtitle}>
            Since beginning my journey as a freelance designer over 11 years
            <br />
            ago, done remote work for agencies, consulted for startups, and
            <br />
            collaborated with talented people to create digital products for
            <br />
            both business and consumer use. quietly confident, naturally
            <br />
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </h2>
          <Image src="" alt="" />
        </div>
      </div>
    </>
  );
}
