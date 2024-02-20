import Image from "next/image";
import VideoPlayer from "../video/videoPlayer";
import styles from "./roofrep.module.css";

export const RoofReplacement = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.cont}>
        <div className={styles.header}>
          <h1>
            Roof Replacement Is A Messy
            <br />
            <i style={{ fontWeight: "400" }}>Expensive Hassle</i>
          </h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.heading}>
              <Image src="/shield.png" width={25} height={25} alt="icon" />
              <h2>Old Way</h2>
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
              <h2>New Way</h2>
            </div>
            <p>
              A Roof Maxx treatment is guaranteed to strengthen and extend the
              life of your roof by five years per treatment, saving 80% over
              replacement. Get 15 more years out of your roof by repeating
              treatments every five years.
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
