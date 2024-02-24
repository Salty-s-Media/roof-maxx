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
            <p className={styles.blogDate}>April 23, 2023</p>
            <h3 className={styles.blogTitle}>
              Best Roof Shingles in 2023: The Ultimate Buying Guide
            </h3>
            <p className={styles.blogExcerpt}>
              Many factors affect the cost of replacing shingles, and costs can
              range between...
            </p>
          </div>
        </Link>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
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
            Best Roof Shingles in 2023: The Ultimate Buying Guide
          </h3>
          <p className={styles.blogExcerpt}>
            Many factors affect the cost of replacing shingles, and costs can
            range between...
          </p>
        </div>
      </div>
    </div>
  );
}
