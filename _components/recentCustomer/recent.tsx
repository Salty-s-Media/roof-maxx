import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./recent.module.css";
import { MapPin } from "lucide-react";

export const RecentCustomers = () => {
  const images = [
    { src: "/aug.png", alt: "gg", location: "Daytona Beach, FL" },
    { src: "/caro2/c2.jpg", alt: "gg", location: "Huntersville, NC" },
    { src: "/caro2/c3.jpg", alt: "gg", location: "Kennewick, WA" },
    { src: "/caro2/c4.jpg", alt: "gg", location: "Washington, DC" },
    { src: "/caro2/c5.jpg", alt: "gg", location: "Ashburn, VA" },
    { src: "/caro2/c6.jpg", alt: "gg", location: "Columbus, OH" },
    { src: "/caro2/c7.jpg", alt: "gg", location: "Gettysburg, PA" },
    { src: "/caro2/c8.jpg", alt: "gg", location: "Sauk City, WI" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.gutter}>
      <div className={styles.grid}>
        <div className={styles.heading}>
          <h2>Recent Customers Across The Country</h2>
        </div>
        <div className={styles.imageCarousel}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <Image
                src={image.src}
                width={1080}
                height={720}
                alt={image.alt}
                className={styles.imag}
              />
              <br />
              <div className={styles.grid2}>
                <MapPin color="var(--btn-bg)" size={24} />
                <h3>{image.location}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
