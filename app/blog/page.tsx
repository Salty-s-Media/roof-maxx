import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>Read Our Blog</h1>
      <br />
      <div className={styles.blogsGrid}>
        <Link href="/blog/p1">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 20, 2023</p>
            <h3 className={styles.blogTitle}>
              Best Roof Shingles in 2023: The Ultimate Buying Guide
            </h3>
            <p className={styles.blogExcerpt}>
              This guide to the cost of replacing shingles will specifically
              discuss how the...
            </p>
          </div>
        </Link>
        <Link href="/blog/p2">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 21, 2023</p>
            <h3 className={styles.blogTitle}>
              The Cost to Replace Shingles: A Homeowner&apos;s Guide
            </h3>
            <p className={styles.blogExcerpt}>
              Many factors affect the cost of replacing shingles, and costs can
              range...
            </p>
          </div>
        </Link>
        <Link href="/blog/p3">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 22, 2023</p>
            <h3 className={styles.blogTitle}>
              The Cost of a Metal Roof vs. Shingles
            </h3>
            <p className={styles.blogExcerpt}>
              When the time comes for a new roof on your home, consider the
              benefits each material provides...
            </p>
          </div>
        </Link>
        <Link href="/blog/p4">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 23, 2023</p>
            <h3 className={styles.blogTitle}>
              How Much Do Roofing Shingles Cost?
            </h3>
            <p className={styles.blogExcerpt}>
              Shingles are commonly used on both residential and commercial
              properties. If you&apos;re...
            </p>
          </div>
        </Link>
        <Link href="/blog/p5">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 24, 2023</p>
            <h3 className={styles.blogTitle}>
              Do Solar Panels Void Your Roof Warranty?
            </h3>
            <p className={styles.blogExcerpt}>
              Solar panels are a great investment that can lower your utility
              bills and may pay for themselves over time. They are an
              eco-friendly energy source...
            </p>
          </div>
        </Link>
        <Link href="/blog/p6">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 25, 2023</p>
            <h3 className={styles.blogTitle}>
              What Are The Cheapest Roofing Options?
            </h3>
            <p className={styles.blogExcerpt}>
              Is your roof showing signs of wear and tear? Are you wondering
              about the dangers of an aging roof—and considering the cheapest
              roofing options that meet your needs?
            </p>
          </div>
        </Link>
        <Link href="/blog/p7">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 26, 2023</p>
            <h3 className={styles.blogTitle}>
              7 Things to Consider When Replacing a Roof
            </h3>
            <p className={styles.blogExcerpt}>
              Completing a new roof installation may be critical to protecting
              your property from the elements. Given the expense and effort
              involved in installing a new roof...
            </p>
          </div>
        </Link>
        <Link href="/blog/p8">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 27, 2023</p>
            <h3 className={styles.blogTitle}>
              Roof Warranty Guide: What Every Property Owner Needs to Know
            </h3>
            <p className={styles.blogExcerpt}>
              When people think about protecting their roofs, they often think
              of annual maintenance, winter prep, and cleaning the gutters...
            </p>
          </div>
        </Link>
        <Link href="/blog/p9">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 28, 2023</p>
            <h3 className={styles.blogTitle}>
              Do Roofers Replace Roofs in the Winter?
            </h3>
            <p className={styles.blogExcerpt}>
              Harsh winter weather tends to expose the flaws and hazards of an
              aging roof...
            </p>
          </div>
        </Link>
        <Link href="/blog/p10">
          <div className={styles.blogCard}>
            <Image
              src="/aug.png"
              alt="gg"
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>April 29, 2023</p>
            <h3 className={styles.blogTitle}>
              Do You Need Rain Gutters On Your House?
            </h3>
            <p className={styles.blogExcerpt}>
              Of all the important features that keep your home safe and sound,
              the rain gutters...
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
