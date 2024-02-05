"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <a href="/">
          <Image src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.linksContainer} aria-label="Menu Area">
        <Link href="/" className={styles.hoverUnderline}>
          Home
        </Link>
        <div
          className={`${styles.dropdownContainer} ${styles.dropdownToggle}`}
          onClick={toggleDropdown}
        >
          <span className={styles.hoverUnderline}>
            Service Areas
            {showDropdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>

          {showDropdown && (
            <div
              className={styles.dropdownContent}
              onMouseLeave={toggleDropdown}
            >
              <Link href="/services/ormond" className={styles.dropdownItem}>
                Ormond Beach
              </Link>
              <Link href="/services/daytona" className={styles.dropdownItem}>
                Daytona Beach
              </Link>
              <Link href="/services/augustine" className={styles.dropdownItem}>
                St. Augustine
              </Link>
              <Link href="/services/palmcoast" className={styles.dropdownItem}>
                Palm Coast
              </Link>
              <Link href="/services/newsmyrna" className={styles.dropdownItem}>
                New Smyrna Beach
              </Link>
              <Link href="/services" className={styles.dropdownItem}>
                All Service Areas
              </Link>
            </div>
          )}
        </div>
        <Link href="/dealer" className={styles.hoverUnderline}>
          Local Dealer
        </Link>
        <Link href="/about" className={styles.hoverUnderline}>
          About
        </Link>
        <Link href="/faq" className={styles.hoverUnderline}>
          FAQ
        </Link>
      </div>
    </nav>
  );
};
