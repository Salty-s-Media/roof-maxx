import styles from "./bio.module.css";

export const BioCard = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.cont}>
        <div className={styles.banner}>
          <div className={styles.item}>
            <h3>103,000,000</h3>
            <p>Sq.Ft. Treated</p>
          </div>
          <div className={styles.item}>
            <h3>130,467</h3>
            <p>Tons of Waste Saved</p>
          </div>
          <div className={styles.item}>
            <h3>297</h3>
            <p>Roof Maxx Contractors</p>
          </div>
        </div>
      </div>
    </div>
  );
};
