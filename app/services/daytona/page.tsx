"use client";

import Image from "next/image";
import styles from ".././page.module.css";
import { BetterRoof } from "@/_components/betterRoof/roof";
import { GoogleReviews } from "@/_components/GoogRev/googrev";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>Daytona Beach</h1>
      </div>
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.imageContainer}>
            <Image
              alt="DaytonaFL"
              src="/daytona.png"
              width={800}
              height={800}
              className={styles.imag}
            />
          </div>
          <div className={styles.descriptionAndButton}>
            <div className={styles.desc}>
              Getting a Roof Maxx treatment in Daytona Beach, Florida, can be an
              excellent investment for homeowners looking to extend the life of
              their roofs and save money on costly replacements. Roof Maxx is a
              sustainable, eco-friendly roof rejuvenation treatment that helps
              restore the natural oils in aging shingles, making them more
              resistant to damage and wear. The process is simple, safe, and
              effective and can be completed in just a few hours, depending on
              the roof size. Our team of certified Roof Maxx technicians will
              assess the roof&apos;s condition and determine if it is suitable
              for treatment. The client was pleased with the results and happy
              to know that they could prolong the life of their roof without
              compromising on quality or durability.
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
