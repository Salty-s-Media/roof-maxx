"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./process.module.css";

export const Process = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const dayNames = [
    "1. We Assess Your Roof",
    "2. We Apply Roof Maxx",
    "3. Five Years, Guaranteed",
  ];

  const toggleDay = (index: number) => {
    setActiveDay((prevActiveDay) => (prevActiveDay === index ? null : index));
  };

  return (
    <div className={styles.top}>
      <div className={styles.heading}>
        <h1>How It Works</h1>
        <p>
          Asphalt shingles have changed from what they once were, containing
          less asphalt, which causes them to dry out and fail faster. But,
          thanks to Roof Maxx's innovative technology, which uses 100% natural
          plant-based bio-oil, shingles can regain their flexibility and
          increase a roof's lifespan by five years immediately.
        </p>
      </div>
      <div className={styles.systemcontainer}>
        {dayNames.map((day, index) => (
          <div className={styles.day} key={index}>
            <div className={styles.dayheader} onClick={() => toggleDay(index)}>
              <h2>{day}</h2>
              <div className={styles.chevronIcons}>
                {activeDay === index ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            <ul
              className={
                activeDay === index
                  ? `${styles.tasklist} ${styles.visible}`
                  : styles.tasklist
              }
            >
              {index === 0 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Professional Assessment
                  </div>
                  <li className={styles.task}>
                    We’ll assess your roof and decide if it’s a good candidate
                    for Roof Maxx. If it is, we’ll make an appointment to apply
                    it. If it’s not, we’ll let you know why and whether we’ve
                    discovered leaks or other major issues that need repairing.
                  </li>
                </>
              )}
              {index === 1 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Bio-Oil Treatment
                  </div>
                  <li className={styles.task}>
                    We’ll perform a roof tune-up during our appointment and then
                    apply Roof Maxx. The whole process usually takes a couple of
                    hours max.
                  </li>
                </>
              )}
              {index === 2 && (
                <>
                  <div className={styles.systemcontainerh3}>Our Guarantee</div>
                  <li className={styles.task}>
                    Our rejuvenating oil will restore your shingles’ flexibility
                    and waterproofing for five years, ensuring maximum property
                    protection. And our warranty is transferable if you end up
                    moving within that time.
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
