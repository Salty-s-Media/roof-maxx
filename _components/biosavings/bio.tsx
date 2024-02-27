import Image from "next/image";
import styles from "./bio.module.css";

export const BioCard = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.cont}>
        <div className={styles.banner}>
          <div className={styles.item}>
            <Image src="/tape.png" alt="tape" width={50} height={50} />
            <h1>103,000,000</h1>
            <p>Sq.Ft. Treated</p>
          </div>
          <div className={styles.item}>
            <Image src="/cup.png" alt="cup" width={50} height={50} />
            <h1>130,467</h1>
            <p>Tons of Waste Saved</p>
          </div>
          <div className={styles.item}>
            <Image src="/worker.png" alt="worker" width={50} height={50} />
            <h1>297</h1>
            <p>Roof Maxx Contractors</p>
          </div>
        </div>
      </div>
    </div>
  );
};
