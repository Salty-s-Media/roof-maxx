import Link from "next/link";
import styles from "./page.module.css";
import { BetterRoof } from "@/_components/betterRoof/roof";
import { TimeToChange } from "@/_components/timeChange/time";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>Roofing Service Areas</h1>
      </div>
      <div className={styles.page}>
        <div className={styles.main}>
          Grids containing a picture of each location
          <Link href="/services/ormond">Ormond Beach</Link>
          <Link href="/services/daytona">Daytona Beach</Link>
          <Link href="/services/augustine">St. Augustine</Link>
          <Link href="/services/palmcoast">Palm Coast</Link>
          <Link href="/services/newsmyrna">New Smyrna Beach</Link>
        </div>
        <TimeToChange />
        <BetterRoof />
        <br />
      </div>
    </>
  );
}
