import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import logo from "@/public/logoMobile.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.lg}>
          <Link href="#">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.footerInfo}>
          <p>&copy; 2024 Roof Maxx Technologies LLC</p>
        </div>
      </div>
    </footer>
  );
};
