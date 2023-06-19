import styles from "./page3.module.scss";

export default function Page3() {
  return (
    <>
      <div className={styles.page3_wrap}>
        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.column_box}>
              <div className={styles.column}>
                <h1>1</h1>
                <p>sdferbcvbdxfsdf</p>
                <p>tool</p>
                <ul className={styles.list}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
              <div className={styles.column}>
                <h1>2</h1>
                <p>sdferbcvbdxfsdf</p>
                <p>tool</p>
                <ul className={styles.list}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
              <div className={styles.column}>
                <h1>3</h1>
                <p>sdferbcvbdxfsdf</p>
                <p>tool</p>
                <ul className={styles.list}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
