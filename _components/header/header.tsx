"use client";

import styles from "./header.module.css";
import Image from "next/image";
import { ContactForm } from "../contactForm/contactForm";
import { useEffect, useRef } from "react";

export const Header = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video play started successfully");
          })
          .catch((error) => {
            console.error("Video play failed:", error);
          });
      }
    }
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div id="hero" className={styles.videoContainer}>
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            className={styles.imag}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            disablePictureInPicture={true}
            aria-disabled={true}
          >
            <source src="/fadehero.mp4" />
          </video>
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
            aria-label="Call Now"
          >
            Call Now
          </button>
          <ContactForm />
        </div>
      </div>
    </>
  );
};
