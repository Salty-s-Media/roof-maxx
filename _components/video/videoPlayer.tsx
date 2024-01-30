"use client";

import { useState, useEffect } from "react";
import styles from "./videos.module.css";
import { useInView } from "react-intersection-observer";

const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [ref, inView] = useInView();
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    if (inView) {
      setIframeSrc(src);
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.videoContainer}>
      {iframeSrc && (
        <>
          <iframe
            src={iframeSrc}
            title="Wistia Video"
            frameBorder="0"
            scrolling="no"
            name="wistia_embed"
            width="100%"
            height="100%"
          />
          <script
            src="https://fast.wistia.net/assets/external/E-v1.js"
            async
          ></script>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
