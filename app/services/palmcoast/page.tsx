"use client";

import Image from "next/image";
import styles from ".././page.module.css";
import { BetterRoof } from "@/_components/betterRoof/roof";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>Palm Coast</h1>
      </div>
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.imageContainer}>
            <Image
              alt="gg"
              src="/pc.png"
              width={800}
              height={800}
              className={styles.imag}
            />
          </div>
          <div className={styles.descriptionAndButton}>
            <div className={styles.desc}>
              Palm Coast, Florida, is a coastal city with beautiful homes and
              scenic views. Recently, a Roof Maxx job was done in Palm Coast to
              rejuvenate an aging roof. Our team of certified technicians
              inspected the roof and determined that it could benefit from the
              eco-friendly Roof Maxx treatment. They applied the treatment using
              a state-of-the-art sprayer, ensuring the shingles were evenly
              coated. The treatment restored the natural oils in the shingles,
              making them more durable and resistant to damage. The client was
              happy with the results, and they now know that their roof is
              protected and can withstand the harsh Florida weather for years to
              come. The Roof Maxx treatment is a cost-effective and sustainable
              solution for maintaining a roof's health, and it can save
              homeowners thousands of dollars in replacement costs.
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
