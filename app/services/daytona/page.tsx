"use client";

import Image from "next/image";
import styles from ".././page.module.css";
import { BetterRoof } from "@/_components/betterRoof/roof";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>Daytona Beach</h1>
      </div>
      <div className={styles.page}>
        <div className={styles.hm}>
          <div className={styles.main}>
            <div className={styles.imageContainer}>
              <Image
                alt="gg"
                src="/daytona.png"
                width={800}
                height={800}
                className={styles.imag}
              />
            </div>
            <div className={styles.descriptionAndButton}>
              <div className={styles.desc}>
                Roof Maxx is a sustainable roofing treatment that helps restore
                the natural oils in aging shingles, extending their lifespan and
                saving homeowners money on costly roof replacements. In a recent
                Roof Maxx job in Ormond Beach, Florida, a team of certified
                technicians assessed the condition of the clients roof and
                determined that it could benefit from Roof Maxx treatment. They
                applied the treatment using a state-of-the-art sprayer, and the
                process was quick, safe, and effective. The client was pleased
                with the results and happy to know that they could prolong the
                life of their roof without compromising on quality or
                durability.
              </div>
              <div className={styles.dsc}>
                <button
                  className="btn"
                  onClick={() => window.open("tel:3863562866")}
                  aria-label="Contact Us"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <BetterRoof />
          <div style={{ height: "6rem" }} />
        </div>
      </div>
    </>
  );
}
