import Image from "next/image";
import styles from "./page4.module.scss";

export default function Page4() {
  return (
    <>
      <div className={styles.page4_bg}>
        <div className={styles.page4_wrap}>
          <div>title</div>
          <div>description</div>
          <div className={styles.grid}>
            <div className={styles.column_project}>
              <div className={styles.modal_project}>
                <Image src="" alt="" />
              </div>
              <div className={styles.modal_project}>
                <Image src="" alt="" />
              </div>
              <div className={styles.modal_project}>
                <Image src="" alt="" />
              </div>
              <div className={styles.modal_project}>
                <Image src="" alt="" />
              </div>
              <div className={styles.modal_project}>
                <Image src="" alt="" />
              </div>
              <div className={styles.modal_project}>
                <Image src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
