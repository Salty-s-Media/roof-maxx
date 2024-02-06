"use client";

import styles from "./header.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  }, []);

  return (
    <div className={styles.main}>
      {isLoading && <div className={styles.loadOverlay} />}
      <div className={styles.videoContainer}>
        <video
          src="/fadehero.mp4"
          width="100%"
          height="100%"
          className={styles.imag}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          disablePictureInPicture={true}
        />
      </div>
      <div className={styles.heading}>
        <h1>
          Think you need a new roof?
          <br />
          <span>Think again.</span>
        </h1>
        <p className={styles.desc}>
          Experience a seamless and non-disruptive alternative to costly roof
          replacement, utilizing our advanced restoration approach.
        </p>
      </div>
      <Image src="/grev.svg" alt="reviews" width={150} height={50} />
      <p style={{ color: "var(--tmg)" }}>5.0 of 1072 Google Reviews</p>
      <div className={styles.ctaArea}>
        <button
          className="btn"
          onClick={() => window.open("tel:3863562866")}
          aria-label="Watch Video"
        >
          Call Now
        </button>
        <button className="btn2" aria-label="Subscribe">
          Free Quote
        </button>
      </div>
    </div>
  );
};
