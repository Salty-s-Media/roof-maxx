"use client";

import { Carousel } from "@/_components/logocarousel/logoCaro";
import styles from "./page.module.css";
import Image from "next/image";
import VideoPlayer from "@/_components/video/videoPlayer";
import { GoogleReviews } from "@/_components/GoogRev/googrev";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.spc}>
          <h1>How It Works</h1>
          <p>
            We evaluate the eligibility of your roof for our rejuvenation
            treatment. If it meets the criteria, we administer our Roof Maxx
            solution to prolong the lifespan of your shingles.
          </p>
        </div>
        <div className={styles.vc}>
          <VideoPlayer src="35we73mbiv" />
        </div>
        <br />
      </div>
      <div className={styles.page}>
        <Carousel />
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.smallVc}>
              <Image
                src="/stepsToQualify.jpg"
                alt="gg"
                width={512}
                height={512}
                className={styles.imag}
              />
            </div>
            <div className={styles.description}>
              <div className={styles.hwH}>
                <div className={styles.hiwN}>
                  <h3>1</h3>
                </div>
                <h2 className={styles.descriptionHeader}>
                  We Assess Your Roof
                </h2>
              </div>
              <p>
                At Roof Maxx, we prioritize providing the most effective care
                for your roof. Our team of professionals meticulously examines
                the condition of your roof to determine its eligibility for our
                revitalization procedure. If we confirm that your roof is an
                appropriate candidate, we will arrange a convenient appointment
                to administer our Roof Maxx solution. However, if we discover
                any significant concerns or leaks during the evaluation process
                that require fixing, we will promptly inform you of the
                situation and provide expert recommendations to resolve them.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.smallVc}>
              <Image
                src="/app.jpg"
                alt="gg"
                width={512}
                height={512}
                className={styles.imag}
              />
            </div>
            <div className={styles.description}>
              <div className={styles.hwH}>
                <div className={styles.hiwN}>
                  <h3>2</h3>
                </div>
                <h2 className={styles.descriptionHeader}>We Apply Roof Maxx</h2>
              </div>
              <p>
                At the time of our scheduled appointment, we perform an
                extensive roof inspection to detect any potential concerns.
                Following that, we carry out a roof tune-up to guarantee that
                your roof is in optimal shape. Lastly, we apply Roof Maxx to
                your roof, which typically requires only a few hours to
                complete. Our efficient and effective approach ensures that you
                can enjoy a revitalized roof promptly.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.smallVc}>
              <Image
                src="/fyg.jpg"
                alt="gg"
                width={512}
                height={512}
                className={styles.imag}
              />
            </div>
            <div className={styles.description}>
              <div className={styles.hwH}>
                <div className={styles.hiwN}>
                  <h3>3</h3>
                </div>
                <h2 className={styles.descriptionHeader}>
                  Five Years, Guaranteed
                </h2>
              </div>
              <p>
                Our restorative oil can revive the suppleness and
                water-resistant properties of your shingles for five years,
                guaranteeing optimal protection for your property. Furthermore,
                our warranty is transferable in the event of you relocating
                during that period.
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn2"
          onClick={() => window.open("tel:3863562866")}
          aria-label="Call Now"
          style={{
            width: "95%",
            textAlign: "center",
            fontSize: "1rem",
            marginTop: "2rem",
          }}
        >
          Call Now
        </button>
        <br />
        <br />
        <GoogleReviews />
      </div>
      <div className={styles.hiwspc} />
    </>
  );
}
