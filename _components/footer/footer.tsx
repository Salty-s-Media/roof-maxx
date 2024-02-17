"use client";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/logoMobile.svg" alt="logo" width={225} height={50} />
          </Link>
        </div>
        <div className={styles.column}>
          <h3>Our Company</h3>
          <ul>
            <li>
              <Link href="/how">How It Works</Link>
            </li>
            <li>
              <Link href="/services">Service Areas</Link>
            </li>
            <li>
              <Link href="/dealer">Local Dealer</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Help and Advice</h3>
          <ul>
            <li>
              <Link href="#">Contact Form</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Social Media</h3>
          <ul>
            <li>
              <Link href="https://www.instagram.com/roofamp/">Instagram</Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/roofmaxxormondbeach">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={goToTop} className="btn2">
          Go to Top
        </button>
      </div>
    </footer>
  );
};
