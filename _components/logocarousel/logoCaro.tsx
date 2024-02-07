import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";

const logos = [
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
  "/pbs.png",
];

export const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles["carousel-inner"]}>
        {logos.flatMap((logo, i) => [
          <div key={`logo-${i}`} className={styles.logo}>
            <Image src={logo} width={240} height={240} alt={logos[i]} />
          </div>,
          <div key={`dup1-${i}`} className={styles.logo}>
            <Image src={logo} width={240} height={240} alt={logos[i]} />
          </div>,
        ])}
      </div>
    </div>
  );
};
