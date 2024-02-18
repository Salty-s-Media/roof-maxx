"use client";

import VideoPlayer from "../video/videoPlayer";
import styles from "./roof.module.css";

export const BetterRoof = () => {
  return (
    <div className={styles.masterContainer}>
      <div className={styles.left}>
        <h2>There may be a better roof on your house right now!</h2>
        <p>Give your roof the care it deserves.</p>
        <button
          className="btn2"
          onClick={() => window.open("tel:3863562866")}
          aria-label="Call Now"
        >
          Call Now (386) 356-2866
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.vc}>
          <VideoPlayer src="73ej0os76g" />
        </div>
      </div>
    </div>
  );
};
