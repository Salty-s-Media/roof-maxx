import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./process.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Process = () => {
  useEffect(() => {
    const animWrapper = document.querySelector(".gc");

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
    <div className="gc" style={{ color: "var(--text-color)" }}>
      <div className="ac">
        <div className={styles.cont}>
          <h1>How It Works</h1>
          <p className={styles.desc}>
            Asphalt shingles have changed from what they once were, containing
            less asphalt, which causes them to dry out and fail faster. But,
            thanks to Roof Maxx's innovative technology, which uses 100% natural
            plant-based bio-oil, shingles can regain their flexibility and
            increase a roof's lifespan by five years immediately.
          </p>
          <div className={styles.cgrid}>
            <div className={styles.col}>
              <h3>1. We Assess Your Roof</h3>
              <div className={styles.card}>img</div>
            </div>
            <div className={styles.col}>
              <h3>2. We Apply Roof Maxx</h3>
              <div className={styles.card}>img</div>
            </div>
            <div className={styles.col}>
              <h3>3. Five Years, Guaranteed</h3>
              <div className={styles.card}>img</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
