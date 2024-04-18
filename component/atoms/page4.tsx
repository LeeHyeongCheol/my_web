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
                  =======
                  <a
                    href="https://chocottoland.hange.jp/Event/tenken-collab/"
                    className={styles.figlet}
                  >
                    CHOCO
                  </a>
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

                  <a
                    href="https://chocottoland.hange.jp/Event/tenken-collab_webevent/"
                    className={styles.figlet}
                  >
                    CHOCO
                  </a>
                </div>
              </div>
              <div className={styles.modal_project}>
                <div className={styles.wrap}>
                  <a href="https://coconev.co.jp/" className={styles.figlet}>
                    COCONE V
                  </a>
                </div>
              </div>
              <div className={styles.modal_project}>
                <div className={styles.wrap}>
                  <a
                    href="https://event.hange.jp/202302/bejifuru_bingo/"
                    className={styles.figlet}
                  >
                    BINGO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
