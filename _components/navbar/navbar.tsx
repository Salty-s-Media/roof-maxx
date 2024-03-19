"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "@/public/logo.png";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFAQDropdown, setShowFAQDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleFAQDropdown = () => {
    setShowFAQDropdown(!showFAQDropdown);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <a href="/">
          <div style={{ height: "100%", position: "relative" }}>
            <Image src={logo} alt="logo" priority />
          </div>
        </a>
      </div>
      <div className={styles.linksContainer} aria-label="Menu Area">
        <Link href="/" className={styles.hoverUnderline}>
          Home
        </Link>
        <Link href="/how" className={styles.hoverUnderline}>
          How It Works
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
              style={{ left: "0px" }}
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

        <div
          className={`${styles.dropdownContainer} ${styles.dropdownToggle}`}
          onClick={toggleFAQDropdown}
        >
          <span className={styles.hoverUnderline}>
            FAQ
            {showFAQDropdown ? (
              <ChevronUp size={14} />
            ) : (
              <ChevronDown size={14} />
            )}
          </span>

          {showFAQDropdown && (
            <div
              className={styles.dropdownContent}
              style={{ minWidth: "110px", right: "0px" }}
              onMouseLeave={toggleFAQDropdown}
            >
              <Link href="/faq" className={styles.dropdownItem}>
                All FAQs
              </Link>
              <Link href="/blog" className={styles.dropdownItem}>
                Blog
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
