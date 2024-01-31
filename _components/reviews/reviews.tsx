"use client";

import styles from "./reviews.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Reviews = () => {
  useEffect(() => {
    const animWrapper = document.querySelector(".gc"); //without this, CLS!!!

    const trigger = ScrollTrigger.create({
      trigger: ".ac",
      pin: false,
      start: "bottom bottom",
      end: "+=5",
    });

    let tl = gsap.timeline();

    tl.to(animWrapper, {
      y: "-50",
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".ac",
      start: () => trigger?.start,
      end: () => trigger?.end,
      scrub: 1,
    });

    return () => {
      trigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="gc">
      <div className="ac">
        <div className={styles.cont}>
          <h1>Reviews</h1>
          <div className={styles.cgrid}>
            <div className={styles.card}>
              {/* image container here, rounded, same margin as others h2 and p */}
              <h2>Header</h2>
              <p>This is a description about a product and its really good.</p>
            </div>
            <div className={styles.card}>
              <h2>Header</h2>
              <p>This is a description about a product and its really good.</p>
            </div>
            <div className={styles.card}>
              <h2>Header</h2>
              <p>This is a description about a product and its really good.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
