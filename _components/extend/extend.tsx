import Image from "next/image";
import styles from "./extend.module.css";

export const ExtendLifespan = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.grid}>
        <div className={styles.textContent}>
          <h1>Call Now and Extend Your Roof's Lifespan</h1>
          <p>Give your roof the care it deserves!</p>
          <button className="btn">Call Now</button>
          <button className="btn2">Free Quote</button>
        </div>
        <div className={styles.imageContent}>
          <Image
            src="/local.png"
            width={450}
            height={450}
            alt="gg"
            className={styles.imag}
          />
        </div>
      </div>
    </div>
  );
};
