"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./process.module.css";
import Image from "next/image";

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
          thanks to Roof Maxx&apos;s innovative technology, which uses 100%
          natural plant-based bio-oil, shingles can regain their flexibility and
          increase a roof&apos;s lifespan by five years immediately.
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
                    <div>
                      We&apos;ll assess your roof and decide if it&apos;s a good
                      candidate for Roof Maxx. If it is, we&apos;ll make an
                      appointment to apply it. If it&apos;s not, we&apos;ll let
                      you know why and whether we&apos;ve discovered leaks or
                      other major issues that need repairing.
                    </div>
                    <div>
                      <Image
                        src="/stepsToQualify.jpg"
                        width={512}
                        height={512}
                        alt="Helping"
                      />
                    </div>
                  </li>
                </>
              )}
              {index === 1 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Bio-Oil Treatment
                  </div>
                  <li className={styles.task}>
                    <div>
                      We&apos;ll perform a roof tune-up during our appointment
                      and then apply Roof Maxx. The whole process usually takes
                      a couple of hours max.
                    </div>
                    <div>
                      <Image
                        src="/nsb.png"
                        width={512}
                        height={512}
                        alt="roof treatment"
                      />
                    </div>
                  </li>
                </>
              )}
              {index === 2 && (
                <>
                  <div className={styles.systemcontainerh3}>Our Guarantee</div>
                  <li className={styles.task}>
                    <div>
                      Our rejuvenating oil will restore your shingles&apos;
                      flexibility and waterproofing for five years, ensuring
                      maximum property protection. And our warranty is
                      transferable if you end up moving within that time.
                    </div>
                    <div>
                      <Image
                        src="/pc.png"
                        width={512}
                        height={512}
                        alt="lawnsign"
                      />
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bc}>
        <button
          className={`btn2 ${styles.btnC}`}
          onClick={() => window.open("tel:3863562866")}
          aria-label="Call Now"
        >
          Call Now (386) 356-2866
        </button>
      </div>
    </div>
  );
};
