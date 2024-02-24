"use client";

import Image from "next/image";
import styles from ".././page.module.css";
import { BetterRoof } from "@/_components/betterRoof/roof";
import { GoogleReviews } from "@/_components/GoogRev/googrev";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>New Smyrna Beach</h1>
      </div>
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.imageContainer}>
            <Image
              alt="gg"
              src="/nsb.png"
              width={800}
              height={800}
              className={styles.imag}
            />
          </div>
          <div className={styles.descriptionAndButton}>
            <div className={styles.desc}>
              New Smyrna Beach is a beautiful coastal city in Florida where a
              recent Roof Maxx job was completed to restore an aging roof. Our
              team of certified Roof Maxx technicians inspected the roof and
              determined that it could benefit from the eco-friendly treatment.
              They applied the treatment using a specialized sprayer, ensuring
              even coverage of the shingles. The Roof Maxx treatment made them
              more damage-resistant by rejuvenating the natural oils in the
              shingles and extending their lifespan. The process was quick,
              safe, and effective, and the client was thrilled with the results.
              They now have a protected roof that can withstand Florida&apos;s
              harsh weather conditions for years. Roof Maxx is a sustainable and
              cost-effective solution for maintaining a healthy roof, saving
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
        <GoogleReviews />
        <BetterRoof />
        <br />
      </div>
    </>
  );
}
