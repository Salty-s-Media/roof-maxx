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
            style={{ fontSize: "16px" }}
            onClick={toggleMenu}
          >
            Menu
          </button>
          <button
            className="btn2"
            onClick={() => window.open("tel:3863562866")}
            style={{
              fontSize: "16px",
              backgroundColor: "var(--tsp)",
              color: "var(--text-color)",
            }}
          >
            386-356-2866
          </button>
        </div>
      </div>
      {showMenu && (
        <div className={styles.fullMenuPg} onClick={toggleMenu}>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/how" onClick={toggleMenu}>
            How It Works
          </Link>
          <Link href="/services" onClick={toggleMenu}>
            Service Areas
          </Link>
          <Link href="/dealer" onClick={toggleMenu}>
            Local Dealer
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/faq" onClick={toggleMenu}>
            FAQ
          </Link>
        </div>
      )}
    </>
  );
};
