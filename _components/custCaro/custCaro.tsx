import React, { useState, useEffect } from "react";
import VideoPlayer from "../video/videoPlayer";
import styles from "./cust.module.css";
import { ContactForm } from "../contactForm/contactForm";

export const CustomerTestimony = () => {
  const testimonials = [
    {
      description:
        "They have treated my own personal house twice. Please take my word for it. It does work.",
      author: "Jerry Linkhorn",
      at: "Ohio's Top Home Inspector",
      title: "Take my word for it - This stuff works.",
    },
    {
      description:
        "Roofs are costly, and we want to prolong ours as long as possible. That's why we chose Roof Maxx.",
      author: "Angie Barton",
      at: "Roof Maxx Verified Customer",
      title: "Roof Maxx Protects Your Entire Home.",
    },
    {
      description:
        "Since the Roof Maxx has been installed. We havent lost one shingle, and this roof is twenty years old.",
      author: "James Gonte",
      at: "Florida Home Inspector",
      title: "Not One Shingle Has Blown Off.",
    },
  ];
  const videoId = ["plmaf0i77l", "6nt26wikvi", "roq95e7pkf"];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  return (
    <>
      <div className={styles.header}>
        <h2>Roof Maxx Works, But Don&apos;t Just Take Our Word For It</h2>
        <div className={styles.buttons}>
          <button className="btn" style={{ fontSize: "1rem" }}>
            Call Now
          </button>
          <ContactForm />
        </div>
      </div>

      <div className={styles.masterContainer}>
        <div className={styles.left}>
          <div className={styles.vc}>
            <VideoPlayer
              key={currentTestimonialIndex}
              src={videoId[currentTestimonialIndex]}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h2>{testimonials[currentTestimonialIndex].title}</h2>
          <p>{testimonials[currentTestimonialIndex].description}</p>
          <br />
          <div
            style={{
              height: "45px",
              borderLeft: "5px solid var(--btn-bg)",
              paddingLeft: "10px",
              textAlign: "left",
            }}
          >
            <h3>{testimonials[currentTestimonialIndex].author}</h3>
            <p style={{ color: "var(--tg)" }}>
              {testimonials[currentTestimonialIndex].at}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => setCurrentTestimonialIndex(0)}
          className={`${styles.circleButton} ${
            currentTestimonialIndex === 0 ? styles.activeCircleButton : ""
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentTestimonialIndex(1)}
          className={`${styles.circleButton} ${
            currentTestimonialIndex === 1 ? styles.activeCircleButton : ""
          }`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentTestimonialIndex(2)}
          className={`${styles.circleButton} ${
            currentTestimonialIndex === 2 ? styles.activeCircleButton : ""
          }`}
        >
          3
        </button>
      </div>
    </>
  );
};
