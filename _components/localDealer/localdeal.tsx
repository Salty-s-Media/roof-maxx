import Image from "next/image";
import styles from "./localdeal.module.css";

export const LocalDealer = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2>local dealer</h2>
          <h3>
            Meet your local
            <br />
            <span style={{ color: "var(--btn-bg)" }}>Roof Maxx</span> dealer
          </h3>
          <p>
            Noah is a certified Roof Maxx Dealer and licensed Florida Home
            Inspector dedicated to providing homeowners with top-quality roofing
            solutions and professional inspection services.
            <br />
            <br />
            Get Your Roof Maximized with Noah: Trusted Dealer and Licensed
            Inspector in Florida.
          </p>
          <br />
          <button className="btn2">Learn More</button>
        </div>
        <div className={styles.right}>
          <div className={styles.sticker}>
            <Image
              src="/5starnoah.png"
              width={180}
              height={142}
              alt="gg"
              style={{ marginTop: "0.75rem" }}
            />
          </div>
          <video
            src="/fadehero.mp4"
            width="100%"
            height="100%"
            className={styles.imag}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            disablePictureInPicture={true}
            aria-label="background video"
          />
        </div>
      </div>
    </div>
  );
};
