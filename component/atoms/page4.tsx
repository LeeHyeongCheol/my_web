import React from "react";
import Image from "next/image";
import styles from "./page4.module.scss";
import Link from "next/link";

export default function Page4() {
  return (
    <>
      <div className={styles.page4_bg}>
        <div className={styles.page4_wrap}>
          <h1>My Recent Work</h1>
          <div className={styles.grid}>
            <div className={styles.column_project}>
              <div className={styles.modal_project}>
                <div className={styles.wrap}>
                  <Link
                    href="https://chocottoland.hange.jp/Event/tenken-collab_webevent/"
                    target="_blank"
                  >
                    <div className={styles.figlet}>Chocottoland-Project</div>
                  </Link>
                </div>
              </div>
              <div className={styles.modal_project}>
                <div className={styles.wrap}>
                  <Link
                    href="https://event.hange.jp/202302/bejifuru_bingo/"
                    target="_blank"
                  >
                    <div className={styles.figlet}>Bejifurubingo-Project</div>
                  </Link>
                </div>
              </div>
              <div className={styles.modal_project}>
                <div className={styles.wrap}>
                  <Link
                    href="https://coconev.co.jp/"
                    target="_blank"
                    className={styles.figlet}
                  >
                    COCONE V
                  </Link>
                </div>
              </div>
              <div className={styles.modal_project}>
                <div className={styles.wrap}>
                  <Link
                    href="https://chocottoland.hange.jp/anniversary/17th/vote/"
                    target="_blank"
                    className={styles.figlet}
                  >
                    Chocottoland-Vote
                  </Link>
                </div>
              </div>
              <div className={styles.modal_project}>
                <div className={styles.wrap}>
                  <Link
                    href="https://www.oemoriplus.jp/"
                    target="_blank"
                    className={styles.figlet}
                  >
                    Oekaki-Plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
