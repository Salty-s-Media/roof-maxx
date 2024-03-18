import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";

const logos = [
  "/caro/forbes.png",
  "/caro/entr.png",
  "/caro/inc.png",
  "/caro/usa.png",
  "/caro/cbs.png",
  "/caro/ri.png",
  "/caro/nbc.png",
  "/caro/clean1.png",
  "/caro/clean2.png",
];

export const Carousel = () => {
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
