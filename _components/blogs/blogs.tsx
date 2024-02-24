import React from "react";
import styles from "./blogs.module.css";
import Image from "next/image";
import Link from "next/link";

export const Blogs = () => {
  const blogPosts = [
    {
      image: "/aug.png",
      date: "April 20, 2023",
      title: "Best Roof Shingles in 2023: The Ultimate Buying Guide",
      excerpt:
        "Roof installations are one of the most common home improvement projects across the United States...",
    },
    {
      image: "/daytona.png",
      date: "April 21, 2023",
      title: "The Cost of a Metal Roof vs. Shingles",
      excerpt:
        "When the time comes for a new roof on your home, consider the benefits each material provides...",
    },
    {
      image: "/local.png",
      date: "April 22, 2023",
      title: "The Cost to Replace Shingles: A Homeowner’s Guide",
      excerpt:
        "Many factors affect the cost of replacing shingles, and costs can range between...",
    },
  ];

  return (
    <div className={styles.blogsSection}>
      <div className={styles.blogsHeading}>
        <h2>Popular Blogs</h2>
        <Link href="/blog" className="btn">
          See More
        </Link>
      </div>
      <div className={styles.blogsGrid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.blogCard}>
            <Image
              src={post.image}
              alt={post.title}
              width={512}
              height={512}
              className={styles.blogImage}
            />
            <p className={styles.blogDate}>{post.date}</p>
            <h3 className={styles.blogTitle}>{post.title}</h3>
            <p className={styles.blogExcerpt}>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
