import styles from "./rev.module.css";

export const Rev = () => {
  return (
    <div className={styles.cont}>
      <h1>Reviews</h1>
      <div className={styles.cgrid}>
        <div className={styles.card}>
          <h2>Header</h2>
          <p>This is a description about a product and its really good.</p>
        </div>
        <div className={styles.card}>
          <h2>Header</h2>
          <p>This is a description about a product and its really good.</p>
        </div>
        <div className={styles.card}>
          <h2>Header</h2>
          <p>This is a description about a product and its really good.</p>
        </div>
      </div>
    </div>
  );
};
