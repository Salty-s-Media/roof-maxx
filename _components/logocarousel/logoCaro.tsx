import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";

const logos = [
  "/caro/cbs.png",
  "/caro/ri.png",
  "/caro/entr.png",
  "/caro/nbc.png",
  "/caro/usa.png",
  "/caro/clean1.png",
  "/caro/clean2.png",
  "/caro/clean3.png",
  "/caro/forbes.png",
  "/caro/usa.png",
  "/caro/inc.png",
];

export const Carousel = () => {
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={styles.carousel}>
      <div className={styles["carousel-inner"]}>
        {extendedLogos.map((logo, i) => (
          <div key={`logo-${i}`} className={styles.logo}>
            <Image
              src={logo}
              width={240}
              height={240}
              alt={logos[i % logos.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
