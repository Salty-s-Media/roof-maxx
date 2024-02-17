import Image from "next/image";
import VideoPlayer from "../video/videoPlayer";
import styles from "./roofrep.module.css";

export const RoofReplacement = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.cont}>
        <div className={styles.header}>
          <h1>
            Roof Replacement Is A Messy <span>Expensive Hassle</span>
          </h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.heading}>
              <Image src="/shield.png" width={25} height={25} alt="icon" />
              <h3>Old Way</h3>
            </div>
            <p>
              Roof replacement is a messy, expensive hassle now costing $15,000
              to $20,000 or more. With Roof Maxx, you can avoid the hassles and
              high cost of a replacement with a less expensive asphalt shingle
              roof rejuvenation.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>
              <Image src="/blocks.png" width={25} height={25} alt="icon" />
              <h3>New Way</h3>
            </div>
            <p>
              At a savings of about 80% over replacement, a Roof Maxx roof
              rejuvenation treatment is guaranteed to strengthen and extend the
              life of your roof by five years per treatment. With repeated
              treatments every five years, you can extend the life of your roof
              up to 15 years.
            </p>
          </div>
          <div className={`${styles.card} ${styles.lastCard}`}>
            <div className={styles.vc}>
              <VideoPlayer src="070cl60vgc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
