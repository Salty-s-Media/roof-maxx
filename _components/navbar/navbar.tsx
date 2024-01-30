import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "@/public/logo.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.linksContainer} aria-label="Menu Area">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
};
