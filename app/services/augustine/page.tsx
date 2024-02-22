"use client";

import Image from "next/image";
import styles from ".././page.module.css";
import { BetterRoof } from "@/_components/betterRoof/roof";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>St. Augustine</h1>
      </div>
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.imageContainer}>
            <Image
              alt="gg"
              src="/aug.png"
              width={800}
              height={800}
              className={styles.imag}
            />
          </div>
          <div className={styles.descriptionAndButton}>
            <div className={styles.desc}>
              Roof Maxx is an innovative roof rejuvenation treatment that helps
              to extend the life of aging shingles, saving homeowners money on
              costly roof replacements. Recently, a Roof Maxx job was done in
              St. Augustine, Florida, where our team of certified technicians
              assessed the condition of the client&apos;s roof and determined
              that it could benefit from the treatment. Using a state-of-the-art
              sprayer, we applied the eco-friendly Roof Maxx treatment,
              restoring the natural oils in the shingles and making them more
              resistant to damage and wear. The process was quick, safe, and
              effective, and the client was pleased with the results. They now
              have the peace of mind of knowing that their roof is protected and
              they have extended its lifespan for years to come.
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
        <br />
      </div>
    </>
  );
}
