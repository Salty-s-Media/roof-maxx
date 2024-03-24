"use client";

import { useState } from "react";
import styles from "./director.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const DirectorCards = () => {
  const [isCard1, setIsCard1] = useState(true);

  const toggleCard = () => {
    setIsCard1(!isCard1);
  };
  return (
    <div className={styles.cont}>
      <div className={`${styles.card1} ${isCard1 ? styles.active : ""}`}>
        <div>
          <p>
            My brother and I could see the staggering number of roofs at risk
            across the country and wanted to do something about it. Now, through
            Roof Maxx, we&apos;re looking out for asphalt roofs, the people
            under them, their hard-earned money and the planet.
          </p>
          <br />
          <br />
          <h3>Mike Feazel</h3>
          <p style={{ fontSize: "14px" }}>CEO, Roof Maxx</p>
        </div>
      </div>
      <div className={`${styles.card2} ${isCard1 ? "" : styles.active}`}>
        <div>
          <p>
            Roof Maxx not only provides a green solution to a petroleum-based
            challenge of losing petroleum oils from a shingle, but also can be
            as low as 20% of the costs of replacing an old roof.
          </p>
          <br />
          <br />
          <h3>Barry McGraw</h3>
          <p style={{ fontSize: "14px" }}>
            Director of Product Development and Commercialization
            <br /> Ohio Soybean Council
          </p>
        </div>
      </div>
      <div className={styles.toggleMenu}>
        <button onClick={toggleCard}>
          <ArrowLeft size={12} color="black" />
        </button>
        <button onClick={toggleCard}>
          <ArrowRight size={12} color="black" />
        </button>
      </div>
      <br />
    </div>
  );
};
