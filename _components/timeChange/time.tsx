import { Check } from "lucide-react";
import styles from "./time.module.css";
import Image from "next/image";

export const TimeToChange = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.gridContainer}>
        <div className={styles.photoGrid}>
          <Image
            src="/otr.jpg"
            alt="Placeholder"
            width={512}
            height={512}
            className={styles.imag}
          />
          <Image
            src="/otr2.jpg"
            width={512}
            height={512}
            alt="Placeholder"
            className={styles.imag}
            style={{ marginTop: "-2rem" }}
          />
          <div className={styles.overlayImageContainer}>
            <Image
              src="/hrev.svg"
              width={512}
              height={512}
              alt="Placeholder"
              className={styles.imag2}
            />
          </div>
        </div>
        <div className={styles.contentArea}>
          <h1>Time for a change in Roofing!</h1>
          <h2>Did you know?</h2>
          <div className={styles.featureList}>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>
                18,000 residential roofs are replaced daily in the US.
              </span>
            </div>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>
                Shockingly, 90% of them don&apos;t require replacement.
              </span>
            </div>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>
                Roof replacement cost hometowners around $12,000 and cause
                numerous hassles.
              </span>
            </div>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>
                This results in a massive 13.5 million tons of unnecessary
                roofing waste yearly.
              </span>
            </div>
          </div>
          <div className={styles.horizontallyAlignedArea}>
            <div className={styles.cell}>
              <span className={styles.number}>366+</span>
              <div className={styles.description}>Houses Treated</div>
            </div>
            <div className={styles.cell}>
              <span className={styles.number}>$500k+</span>
              <div className={styles.description}>Saved For Customers</div>
            </div>
            <div className={styles.cell}>
              <span className={styles.number}>400+</span>
              <div className={styles.description}>Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
