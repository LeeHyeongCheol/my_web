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
                  <li>Visual Studio Code</li>
                  <li>Vercel</li>
                  <li>Terminal</li>
                  <li>Ionic</li>
                </ul>
              </div>
              <div className={styles.column}>
                <h1>2</h1>
                <h2>CI/CD</h2>
                <br />
                <br />
                <p className={styles.text_primary}>Tool</p>
                <ul className={styles.list}>
                  <li>Jenkins</li>
                  <li>GitLab</li>
                </ul>
              </div>
              <div className={styles.column}>
                <h1>3</h1>
                <h2>チームワーク</h2>
                <br />
                <br />
                <p className={styles.text_primary}>Tool</p>
                <ul className={styles.list}>
                  <li>Slack</li>
                  <li>Jira</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
