import Image from "next/image";
import styles from "./rev.module.css";

export const Rev = () => {
  return (
    <div className={styles.cont}>
      <h1>Reviews</h1>
      <div className={styles.cgrid}>
        <div className={styles.card}>
          <div className={styles.top}>
            "This was a great experience overall, and it was very efficient and
            fast. Very friendly service."
          </div>
          <div className={styles.btmn}>
            <div className={styles.profileContainer}>
              <Image
                src="/stepsToQualify.jpg"
                alt="gg"
                width={40}
                height={40}
                className={styles.circularProfile}
              />
            </div>
            <div className={styles.btmnp}>Christine G.</div>
            <div className={styles.sep} />
            <Image src="/grev.svg" alt="reviews" width={120} height={50} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            "This was a great experience overall, and it was very efficient and
            fast. Very friendly service."
          </div>
          <div className={styles.btmn}>
            <div className={styles.profileContainer}>
              <Image
                src="/stepsToQualify.jpg"
                alt="gg"
                width={40}
                height={40}
                className={styles.circularProfile}
              />
            </div>
            <div className={styles.btmnp}>Christine G.</div>
            <div className={styles.sep} />
            <Image src="/grev.svg" alt="reviews" width={120} height={50} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            "This was a great experience overall, and it was very efficient and
            fast. Very friendly service."
          </div>
          <div className={styles.btmn}>
            <div className={styles.profileContainer}>
              <Image
                src="/stepsToQualify.jpg"
                alt="gg"
                width={40}
                height={40}
                className={styles.circularProfile}
              />
            </div>
            <div className={styles.btmnp}>Christine G.</div>
            <div className={styles.sep} />
            <Image src="/grev.svg" alt="reviews" width={120} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
