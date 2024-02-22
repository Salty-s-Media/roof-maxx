import Link from "next/link";
import styles from "./page.module.css";
import { BetterRoof } from "@/_components/betterRoof/roof";
import { TimeToChange } from "@/_components/timeChange/time";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>All Service Areas</h1>
      </div>
      <div className={styles.page}>
        <div className={styles.main2}>
          <Link href="/services/ormond" className={styles.lnk}>
            <div className={styles.locationCard}>
              <Image
                src="/app.jpg"
                width={512}
                height={512}
                alt="Ormond Beach"
              />
              <div className={styles.locationCardSep}>
                <MapPin
                  size={22}
                  color="orange"
                  style={{ marginRight: "0.5rem", marginLeft: "-1rem" }}
                />
                <h2>Ormond Beach</h2>
              </div>
            </div>
          </Link>
          <Link href="/services/daytona" className={styles.lnk}>
            <div className={styles.locationCard}>
              <Image
                src="/app.jpg"
                width={512}
                height={512}
                alt="Daytona Beach"
              />
              <div className={styles.locationCardSep}>
                <MapPin
                  size={22}
                  color="orange"
                  style={{ marginRight: "0.5rem", marginLeft: "-1rem" }}
                />
                <h2>Daytona Beach</h2>
              </div>
            </div>
          </Link>
          <Link href="/services/augustine" className={styles.lnk}>
            <div className={styles.locationCard}>
              <Image
                src="/app.jpg"
                width={512}
                height={512}
                alt="St. Augustine"
              />
              <div className={styles.locationCardSep}>
                <MapPin
                  size={22}
                  color="orange"
                  style={{ marginRight: "0.5rem", marginLeft: "-1rem" }}
                />
                <h2>St. Augustine</h2>
              </div>
            </div>
          </Link>
          <Link href="/services/palmcoast" className={styles.lnk}>
            <div className={styles.locationCard}>
              <Image src="/app.jpg" width={512} height={512} alt="Palm Coast" />
              <div className={styles.locationCardSep}>
                <MapPin
                  size={22}
                  color="orange"
                  style={{ marginRight: "0.5rem", marginLeft: "-1rem" }}
                />
                <h2>Palm Coast</h2>
              </div>
            </div>
          </Link>
          <Link href="/services/newsmyrna" className={styles.lnk}>
            <div className={styles.locationCard}>
              <Image
                src="/app.jpg"
                width={512}
                height={512}
                alt="New Smyrna Beach"
              />
              <div className={styles.locationCardSep}>
                <MapPin
                  size={22}
                  color="orange"
                  style={{ marginRight: "0.5rem", marginLeft: "-0.5rem" }}
                />
                <h2>New Smyrna Beach</h2>
              </div>
            </div>
          </Link>
        </div>
        <TimeToChange />
        <BetterRoof />
        <br />
      </div>
    </>
  );
}
