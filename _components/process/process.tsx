"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./process.module.css";

export const Process = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const dayNames = [
    "1. We Assess your Roof",
    "2. We Apply RoofMaxx",
    "3. Five Years, Guaranteed",
  ];

  const toggleDay = (index: number) => {
    setActiveDay((prevActiveDay) => (prevActiveDay === index ? null : index));
  };

  return (
    <div className={styles.top}>
      <div className={styles.heading}>
        <h1>How It Works</h1>
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
                  <h3>Professional Assessment</h3>
                  <li className={styles.task}>
                    We’ll assess your roof And decide if it’s a good candidate
                    for Roof Maxx. If it is, we’ll make an appointment to apply
                    it. If it’s not, we’ll let you know why and whether we’ve
                    discovered leaks or other major issues that need repairing.
                  </li>
                </>
              )}
              {index === 1 && (
                <>
                  <h3>Bio-Oil Treatment</h3>
                  <li className={styles.task}>
                    We’ll perform a roof tune-up during our appointment and then
                    apply Roof Maxx. The whole process usually takes a couple of
                    hours max.
                  </li>
                </>
              )}
              {index === 2 && (
                <>
                  <h3>Our Guarantee</h3>
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
