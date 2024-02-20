"use client";

import VideoPlayer from "@/_components/video/videoPlayer";
import styles from "./page.module.css";
import { Carousel } from "@/_components/logocarousel/logoCaro";
import { TailoredSolutions } from "@/_components/tailored/tailor";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.spc}>
          <h1>Meet Your Local Dealer</h1>
          <p>
            Noah is a certified Roof Maxx Dealer and a licensed Florida Home
            Inspector dedicated to providing homeowners with top-quality roofing
            solutions and professional inspection services.
          </p>
        </div>
        <div className={styles.vc}>
          <VideoPlayer src="lhxl8kpb80" />
        </div>
        <br />
      </div>
      <div className={styles.page}>
        <TailoredSolutions />
      </div>
    </>
  );
}
