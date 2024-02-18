import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>The Story of Roof Maxx</h1>
      </div>
      <div className={styles.page}>
        <h1>Hello, About Page!</h1>
      </div>
    </>
  );
}
