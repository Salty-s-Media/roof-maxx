import React, { useState, useEffect } from "react";
import VideoPlayer from "../video/videoPlayer";
import styles from "./cust.module.css";

export const CustomerTestimony = () => {
  const testimonials = [
    {
      description:
        "They have treated my own personal house twice. Please take my word for it. It does work.",
      author: "Jerry Linkhorn",
      title: "Ohio's Top Home Inspector",
    },

    {
      description:
        "Roofs are costly, and we want to prolong ours as long as possible. That's why we chose Roof Maxx.",
      author: "Angie Barton",
      title: "Roof Maxx Protects Your Entire Home",
    },
    {
      description:
        "Since the Roof Maxx has been installed. We havent lost one shingle, and this roof is twenty years old.",
      author: "James Gonte",
      title: "Not One Shingle Has Blown Off",
    },
  ];
  const videoId = ["plmaf0i77l", "6nt26wikvi", "roq95e7pkf"];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleTestimonialIndexChange = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % testimonials.length
        );
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { description, author, title } = testimonials[currentTestimonialIndex];

  return (
    <>
      <div className={styles.header}>
        <h2>Roof Maxx Works, But Don&apos;t Just Take Our Word For It</h2>
        <div className={styles.buttons}>
          <button className="btn" style={{ fontSize: "1rem" }}>
            Call Now
          </button>
          <button className="btn2" style={{ fontSize: "1rem" }}>
            Get Free Quote
          </button>
        </div>
      </div>
      <div
        className={isVisible ? styles.fadeInAnimation : styles.fadeOutAnimation}
      >
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
            <h3>{testimonials[currentTestimonialIndex].author}</h3>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => handleTestimonialIndexChange(0)}
          className={`${styles.circleButton} ${
            currentTestimonialIndex === 0 ? styles.activeCircleButton : ""
          }`}
        >
          1
        </button>
        <button
          onClick={() => handleTestimonialIndexChange(1)}
          className={`${styles.circleButton} ${
            currentTestimonialIndex === 1 ? styles.activeCircleButton : ""
          }`}
        >
          2
        </button>
        <button
          onClick={() => handleTestimonialIndexChange(2)}
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
