"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import VideoPlayer from "@/_components/video/videoPlayer";
import { BetterRoof } from "@/_components/betterRoof/roof";
import { GoogleReviews } from "@/_components/GoogRev/googrev";
import { Blogs } from "@/_components/blogs/blogs";

export default function Page() {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const dayNames = [
    "How Long Does a Roof Maxx Treatment Take",
    "How Does Roof Maxx Work?",
    "What Exactly Is Roof Maxx?",
  ];

  const toggleDay = (index: number) => {
    setActiveDay((prevActiveDay) => (prevActiveDay === index ? null : index));
  };
  return (
    <div className={styles.page}>
      <h1>Browse FAQs</h1>
      <div className={styles.systemcontainer}>
        {dayNames.map((day, index) => (
          <div className={styles.day} key={index}>
            <div className={styles.dayheader} onClick={() => toggleDay(index)}>
              <h2>{day}</h2>
              <div className={styles.chevronIcons}>
                {activeDay === index ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            <ul
              className={
                activeDay === index
                  ? `${styles.tasklist} ${styles.visible}`
                  : styles.tasklist
              }
            >
              {index === 0 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    How Long Does a Roof Maxx Treatment Take
                  </div>
                  <li className={styles.task}>
                    <div>
                      Roof Maxx treatment typically takes between 30 minutes to
                      a few hours, depending on your roof&apos;s size and
                      condition. Our technicians will assess your roof before
                      applying the treatment, estimating the time required based
                      on its state. Smaller, clean roofs may finish in as little
                      as 30 minutes, while larger roofs with issues like debris
                      or loose flashing may take longer. Prior to Roof Maxx
                      application, any necessary prep work, such as debris
                      removal and nail sealing, will be completed. Our
                      eco-friendly spray restores asphalt roof tiles&apos;
                      flexibility, reducing the likelihood of breakage and
                      leaks. For a personalized evaluation and treatment
                      estimate, contact us today.
                    </div>
                    <div>
                      <Image
                        src="/stepsToQualify.jpg"
                        width={512}
                        height={512}
                        alt="gg"
                      />
                    </div>
                  </li>
                </>
              )}
              {index === 1 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    How Does Roof Maxx Work?
                  </div>
                  <li className={styles.task}>
                    <div>
                      <i style={{ fontWeight: "600" }}>Short Answer:</i> Roof
                      Maxx&apos;s powerful plant-based oil penetrates deep into
                      the roof shingle&apos;s asphalt core replacing the
                      dried-out petrochemical oil. This restores flexibility and
                      waterproofing protection. <br /> <br /> You know how
                      people have their decks or driveways treated when they see
                      wear and tear and want to add life to their investment?
                      Roof Maxx does something similar for asphalt roofs, only
                      using a revolutionary new technology that soaks old,
                      brittle shingles with millions of micro-beads of
                      all-natural bio-oil to restore their flexibility and
                      prepare them to better protect your home. One Roof Maxx
                      application is guaranteed to add five years of life to an
                      asphalt roof. And with repeat applications every five
                      years, you can add up to 15 years of life to your asphalt
                      roof.
                    </div>
                    <div>
                      <VideoPlayer src="7yc99pqcks" />
                    </div>
                  </li>
                </>
              )}
              {index === 2 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    What Exactly Is Roof Maxx?
                  </div>
                  <li className={styles.task}>
                    <div>
                      For asphalt roofs, Roof Maxx is a quick, easy and
                      affordable alternative to a potentially complicated,
                      expensive and life-disrupting roof replacement. It&apos;s
                      a natural oil that can extend the life of an asphalt roof
                      by five years at a time, ideally starting when a roof is
                      around 6-10 years old, depending on the region. <br />
                      <br />
                      <i style={{ fontWeight: "600" }}>Here&apos;s why:</i> Roof
                      Maxx extends roof life by 6-8 years in southern climates
                      and 8-10 years in northern climates. It can also be
                      applied to roofs up to 30 years old, making them
                      environmentally friendly and safe for people, pets,
                      plants, and the environment. This treatment helps preserve
                      roofs and asphalt shingles, reducing waste.
                    </div>
                    <div>
                      <Image src="/pc.png" width={512} height={512} alt="gg" />
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ height: "2rem" }} />
      <Blogs />
      <BetterRoof />
      <GoogleReviews />
      <div style={{ height: "2rem" }} />
    </div>
  );
}
