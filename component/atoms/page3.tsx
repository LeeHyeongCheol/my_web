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
                <h2>Frontend Developer</h2>
                <p className={styles.text_primary}>Languages :</p>
                <p>React,Next.js,TypeScript,JavaScript</p>
                <p className={styles.text_primary}>Tool</p>
                <ul className={styles.list}>
                  <li>Bootstrap</li>
                  <li>Github</li>
                  <li>Vercel</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className={styles.column}>
                <h1>2</h1>
                <h2>Design</h2>
                <h2>tool</h2>
                <ul className={styles.list}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
              <div className={styles.column}>
                <h1>3</h1>
                <h2>협업툴</h2>
                <h2>tool</h2>
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
