import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image
          src="/shingle.jpg"
          width={720}
          height={512}
          alt="Blog Post Image"
          className={styles.image}
        />
        <h1 className={styles.title}>
          Understanding Solar Panels and Roof Warranties
        </h1>
        <p className={styles.date}>April 26, 2023</p>
        <div className={styles.content}>
          <p>
            Solar panels offer energy savings and environmental benefits, but
            their installation could impact your roof warranty. Learn what you
            need to know to protect your investment.
          </p>
          <h2>Types of Roofing Warranties</h2>
          <p>
            Roof warranties typically cover materials and workmanship. Ensure
            your solar panel installation aligns with these warranty terms to
            avoid potential issues.
          </p>
          <h2>Solar Panel Warranties</h2>
          <p>
            Understand the warranties associated with solar panels, including
            product, power, and workmanship guarantees, to safeguard your
            investment in renewable energy.
          </p>
          <h2>Potential Voiding Factors</h2>
          <p>
            Improper installation of solar panel racking systems or additions
            like flashing can void your roofing warranty. Consult with your
            roofing company before installation to mitigate risks.
          </p>
          <h2>Dealing with Warranty Voiding</h2>
          <p>
            If your roof warranty is voided by solar panel installation, address
            the issue with the solar installer, who should cover damages under
            their workmanship guarantee.
          </p>
          <h2>Post-Installation Considerations</h2>
          <p>
            Regularly check your roof for any issues post-installation and
            maintain communication with both your roofing company and solar
            installer to address concerns promptly.
          </p>
          <p>
            For expert advice on roofing and warranties, contact Roof Maxx at
            (855) ROOFMAXX.
          </p>
        </div>
        <br />
        <Link href="/blog">
          <button className="btn2">Back to Blog</button>
        </Link>
        <footer className={styles.footer}>
          <p>&copy; 2024 Roof Maxx</p>
        </footer>
      </div>
    </div>
  );
}
