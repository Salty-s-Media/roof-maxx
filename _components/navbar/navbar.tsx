import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "@/public/logo.svg";
import Image from "next/image";

export const Navbar = () => {
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
        <Link href="/services" className={styles.hoverUnderline}>
          Service Areas
        </Link>
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
