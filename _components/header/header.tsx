import styles from "./header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.videoContainer}>
        <Image
          src="/bg2.jpg"
          alt="bg"
          width={1320}
          height={1080}
          className={styles.imag}
          priority={true}
        />
      </div>
      <div className={styles.heading}>
        <h1>
          Think you need a new roof? <span>Think again.</span>
        </h1>
        <p className={styles.desc}>
          Experience a seamless and non-disruptive alternative to costly roof
          replacement, utilizing our advanced restoration approach.
        </p>
      </div>
      <div className={styles.ctaArea}>
        <button className="btn" aria-label="Watch Video">
          Call Now
        </button>
        <button className="btn2" aria-label="Subscribe">
          Free Quote
        </button>
      </div>
    </div>
  );
};
