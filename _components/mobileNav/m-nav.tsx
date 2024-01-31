"use client";

import { useState } from "react";
import styles from "./mnav.module.css";
import Link from "next/link";

export const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.mobileNav}>
        <div className={styles.linksContainer} aria-label="Menu Area">
          <button
            className="btn menuButton"
            style={{
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
            onClick={toggleMenu}
          >
            Menu
          </button>
          <button
            className="btn2"
            onClick={() => window.open("tel:6123805285")}
            style={{
              backgroundColor: "var(--tsp)",
              color: "var(--text-color)",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            &#9742; 123-123-1234
          </button>
        </div>
      </div>
      {showMenu && (
        <div className={styles.fullMenuPg}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">FAQ</Link>
        </div>
      )}
    </>
  );
};
