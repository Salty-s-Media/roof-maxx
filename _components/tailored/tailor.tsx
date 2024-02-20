"use client";

import Image from "next/image";
import { Carousel } from "../logocarousel/logoCaro";
import styles from "./tailor.module.css";
import VideoPlayer from "../video/videoPlayer";
import { ExtendLifespan } from "../extend/extend";

export const TailoredSolutions = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.topgrid}>
          <Image
            src="/deal.JPG"
            width={300}
            height={300}
            alt="gg"
            className={styles.imag2}
          />
          <Image
            src="/deal.JPG"
            width={300}
            height={300}
            alt="gg"
            className={styles.imag2}
          />
          <Image
            src="/deal.JPG"
            width={300}
            height={300}
            alt="gg"
            className={styles.imag2}
          />
          <Image
            src="/deal.JPG"
            width={300}
            height={300}
            alt="gg"
            className={styles.imag2}
          />
        </div>
        <h1>Tailored Solutions for Maximum Satisfaction</h1>
        <p>
          As a certified Roof Maxx Dealer, Noah is committed to providing his
          clients with cost-effective and environmentally friendly solutions for
          their roofing needs. Roof Maxx is a revolutionary roofing product that
          can extend the life of an existing roof by up to 15 years. This
          innovative product is made from natural plant-based oils that
          penetrate deep into the shingles, restoring their flexibility and
          preventing cracking and leaking.
        </p>
        <p>
          Noah is well-versed in the benefits of Roof Maxx and can help
          homeowners determine whether this product is the right choice for
          their roofing needs. He is dedicated to providing personalized
          solutions to each client, assessing their needs, and recommending the
          best action.
        </p>
        <button className="btn2" onClick={() => window.open("tel:3863562866")}>
          Call Now
        </button>
      </div>
      <div className={styles.grid}>
        <div className={styles.textContent}>
          <h1>
            <span style={{ fontStyle: "italic", fontWeight: "300" }}>
              Licensed Inspector
            </span>
            <br />
            in Florida
          </h1>

          <p>
            In addition to his expertise in Roof Maxx, Noah is a licensed
            Florida Home Inspector committed to providing professional
            inspection services to homeowners throughout Volusia County. He
            understands the importance of a thorough inspection and takes pride
            in providing accurate and reliable reports to his clients.
          </p>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.licenseSquare}>
            License No:
            <br />
            558 6847 8954
          </div>
          <Image
            src="/deal.JPG"
            width={450}
            height={450}
            alt="gg"
            className={styles.imag}
          />
        </div>
      </div>
      <Carousel />
      <div className={styles.grid}>
        <div className={styles.textContent2}>
          <h1>
            <span style={{ fontStyle: "italic", fontWeight: "300" }}>
              Cost-Effective
            </span>
            <br />
            Roofing Solutions
          </h1>
          <p>
            Noah's approach to roofing and home inspections is centered around
            helping homeowners save money and make informed decisions about
            their property. He understands that a roof replacement can be a
            significant expense, and he works diligently to provide
            cost-effective solutions that will extend the life of a roof and
            save homeowners money in the long run.
          </p>
        </div>
        <div className={styles.imageContent2}>
          <Image
            src="/local.png"
            width={450}
            height={450}
            alt="gg"
            className={styles.imag3}
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <h3>
            The roof looks beautiful, and I couldn&apos;t be happier! From start
            to finish, the process couldn&apos;t be easier.
          </h3>
          <p>Tim D.</p>
        </div>
        <div className={styles.vc}>
          <VideoPlayer src="orviqeak2o" />
        </div>
      </div>
      <div className={styles.cc}>{/* creative grid of images of Noah */}</div>
      <ExtendLifespan />
    </>
  );
};
