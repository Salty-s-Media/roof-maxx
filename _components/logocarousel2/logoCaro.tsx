import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";

const logos = [
  "/caro3/1.png",
  "/caro3/2.png",
  "/caro3/3.png",
  "/caro3/4.png",
  "/caro3/5.png",
  "/caro3/6.png",
  "/caro3/7.png",
  "/caro3/8.png",
  "/caro3/9.png",
  "/caro3/10.png",
  "/caro3/11.png",
  "/caro3/12.png",
];

export const Carousel2 = () => {
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {extendedLogos.map((logo, i) => (
          <div key={`logo-${i}`} className={styles.logo}>
            <Image
              src={logo}
              width={115}
              height={100}
              alt={logos[i % logos.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
