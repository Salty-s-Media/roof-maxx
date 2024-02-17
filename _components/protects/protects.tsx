import Image from "next/image";
import VideoPlayer from "../video/videoPlayer";
import styles from "./protect.module.css";

export const Protects = () => {
  return (
    <div className={styles.gutter}>
      <div className={styles.cont}>
        <div className={styles.vc}>
          <VideoPlayer src="3bfyi24yql" />
        </div>
        <div className={styles.description}>
          <h2>Roof Maxx Protects Your Entire Home</h2>
          <p>
            Your home can suffer significant damage from an old leaky roof,
            affecting everything from the roof to the foundation. However, Roof
            Maxx offers a solution that provides new roof protection,
            restoration, and rejuvenation without the exorbitant cost and
            inconvenience of a full replacement, which can disrupt your daily
            life.
          </p>
          <div className={styles.protections}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
                <path d="M6 18h12" />
                <path d="M6 14h12" />
                <rect width="12" height="12" x="6" y="10" />
              </svg>
              <span>Roofing Damage</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
              </svg>
              <span>Water Leaks</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m14.5 9-5 5" />
                <path d="m9.5 9 5 5" />
              </svg>
              <span>Wood Rot & Mold</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
