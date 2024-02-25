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
          The Cost to Replace Shingles: A Homeowner&apos;s Guide
        </h1>
        <p className={styles.date}>April 21, 2023</p>
        <div className={styles.content}>
          <p>
            Many factors affect the cost of replacing shingles, and costs can
            range between $5,000 to $12,000 per job. The price fluctuates
            depending on your location, the type of shingles you want, and the
            size of your home.
          </p>
          <p>
            This guide to the cost of replacing shingles will specifically
            discuss how the size of your roof and the type of shingles can
            vastly affect roofing costs.
          </p>
          <h2>How Does Size Affect Roof Cost?</h2>
          <p>
            Roof size affects roofing pricing in two significant ways: Labor and
            materials.
          </p>
          <h3>Labor</h3>
          <p>
            Labor is probably around 60% of the entire cost of a new roof, and
            it&apos;s no wonder why. Roofing is demanding physical work.
          </p>
          <p>
            The amount of labor needed will depend on the size of your roof.
            More extensive roofs require more time and effort.
          </p>
          <p>
            Part of labor costs also involves the steepness of your roof. If you
            have a flat roof, then labor won&apos;t cost as much because of the
            ease of maneuverability. If your roof pitch is steep, labor costs
            may increase because of the dangers and extra equipment needed to do
            the roofing safely.
          </p>
          <h3>Materials</h3>
          <p>
            Materials are the other essential part of the roofing cost. The
            bigger the roof, the more materials will be required. The price of
            roofing materials is usually expressed in square feet.
          </p>
          <p>
            The material you choose to cover your roof with will also affect the
            total price of the roofing. As mentioned before, the cost of
            shingles is by square feet, and different types of shingles have
            different prices per square foot.
          </p>
          <h2>Different Types of Shingles</h2>
          <p>
            Here are the most common types of shingles, their pros and cons, and
            their average prices.
          </p>
          <h3>ASPHALT SHINGLE</h3>
          <p>
            Asphalt is the most common shingle type used for roofing homes
            because it&apos;s the most inexpensive ($3.50 to $5 per square foot)
            with a lifespan of 10 to 30 years, depending on the style. You can
            choose from a wide range of colors and thicknesses for each shingle.
          </p>
          <p>
            Asphalt shingles are best for homes in the Northwest and Northeast
            because of their waterproof nature. The biggest detractors for this
            type of shingle are that they&apos;re vulnerable to temperature
            fluctuations and have the shortest lifespan of all roofing
            materials.
          </p>
          <h3>COMPOSITE SHINGLE</h3>
          <p>
            Composite shingles are suitable for houses all over the country but
            run expensive ($4 or more per square foot). The lifespan of
            composite shingles is around 20 to 50 years.
          </p>
          <h3>WOOD SHINGLE</h3>
          <p>
            Wood shingles are made from softwoods like pine, cedar, or spruce.
            This type of shingle is popular for aesthetics but requires much
            upkeep to maintain its appearance. Cost-wise, wood shingles are
            expensive ($4.50 to $9 per square foot), and the lifespan depends on
            the type of wood used.
          </p>
          <h3>CLAY SHINGLE</h3>
          <p>
            Clay shingles are durable and fireproof but can run high in price
            ($7 to $10 per square foot). These shingles usually come with a
            50-year warranty.
          </p>
          <h3>METAL SHINGLE</h3>
          <p>
            Metal roof shingles are about $3 per square foot. Be aware that it’s
            louder when things hit a metal roof than it is with other materials.
          </p>
          <h3>SLATE SHINGLE</h3>
          <p>
            Slate is a higher-end material for shingles and is priced as such
            ($16 or more per square foot). These shingles are durable and can
            withstand high winds and extreme temperatures. Slate also has the
            longest lifespan out of all the shingle materials listed here, with
            an average of 100 years.
          </p>
          <h2>Can You Shingle Your Own Roof?</h2>
          <p>
            Technically yes, but there are many things you must consider.
            Safety, physical needs, and the tools required for roofing are
            significant factors.
          </p>
          <p>
            You may need a building permit if you&apos;re considering doing your
            roof yourself. Be sure to check into financing your project before
            you start, too. Another thing to consider is that your home
            insurance may not cover your roof if not done by professionals.
          </p>
          <p>
            With all that in mind, it would be nice to not need to replace your
            shingles, right? Applying RoofMaxx to your shingles will
            significantly extend and improve the life of your roof. Contact us
            today and save yourself money and time by choosing to rejuvenate
            your roof rather than dealing with the cost of replacing shingles
            completely.
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
