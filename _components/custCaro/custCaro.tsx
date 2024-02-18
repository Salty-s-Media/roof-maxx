import React, { useState, useEffect } from "react";
import VideoPlayer from "../video/videoPlayer";
import styles from "./cust.module.css";

export const CustomerTestimony = () => {
  const testimonials = [
    {
      videoId: "plmaf0i77l",
      description:
        "They have treated my own personal house twice. Please take my word for it. It does work.",
      author: "Jerry Linkhorn",
      title: "Ohios Top Home Inspector",
    },
    {
      videoId: "6nt26wikvi",
      description:
        "Since the Roof Maxx has been installed. We havent lost one shingle, and this roof is twenty years old.",
      author: "James Gonte",
      title: "Not One Shingle Has Blown Off",
    },
    {
      videoId: "roq95e7pkf",
      description: "Yet another testimonial goes here...",
      author: "Angie Barton",
      title: "Roof Maxx Protects Your Entire Home",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % testimonials.length
        );
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { videoId, description, author, title } =
    testimonials[currentTestimonialIndex];

  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <h2>Roof Maxx Works, But Don&apos;t Just Take Our Word For It</h2>
        <div className={styles.buttons}>
          <button className="btn">Call Now</button>
          <button className="btn2">Get Free Quote</button>
        </div>
      </div>
      <div className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}>
        <div className={styles.videoCarousel}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.videoId}
              style={{
                display: index === currentTestimonialIndex ? "block" : "none",
              }}
            >
              <div className={styles.vc}>
                <VideoPlayer src={testimonial.videoId} />
              </div>
              <h3>{testimonial.title}</h3>
              <p>{testimonial.description}</p>
              <p>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
