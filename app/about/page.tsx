import Image from "next/image";
import styles from "./page.module.css";
import VideoPlayer from "@/_components/video/videoPlayer";
import { DirectorCards } from "@/_components/directCards/director";
import { ExtendLifespan } from "@/_components/extend/extend";
import { Cloud, Factory, Leaf } from "lucide-react";
import { ContactForm } from "@/_components/contactForm/contactForm";

export default function Page() {
  return (
    <>
      <div className={styles.header}>
        <h1>The Story of Roof Maxx</h1>
      </div>

      <div className={styles.page}>
        <div className={styles.grid}>
          <Image
            src="/mikeandtodd.png"
            width={480}
            height={409}
            alt="gg"
            className={styles.imag}
          />
          <div className={styles.head}>
            <h1>Mike and Todd</h1>
            <p>Our founders</p>
          </div>
        </div>
        <div className={styles.row2}>
          <Image
            src="/sticker1.png"
            width={175}
            height={175}
            alt="gg"
            className={styles.imag2}
          />
          <p>Mike and Todd in their early roofing days.</p>
          <Image
            src="/sticker2.png"
            width={180}
            height={180}
            alt="gg"
            className={styles.imag3}
          />
          <p>
            Mike and Todd the year they sold Feazel Roofing and moved on to roof
            preservation.
          </p>
        </div>

        <div className={styles.grid2}>
          <div className={styles.ac}>
            <h2>We&apos;ve walked the walk as roofers.</h2>
            <br />
            <p>
              In 1988, brothers Mike and Todd Feazel established a roofing
              business that evolved into one of the most successful and largest
              in the US after 25 years of dedication. Over time, they became
              experts on roofs and witnessed the evolution and growth of the
              industry, including changes in the manufacturing of asphalt
              shingles due to oil refining advancements. <br />
              <br />
              With the decrease in available asphalt, manufacturing costs
              increased, and manufacturers began using less asphalt, reducing
              the number of natural oils that provide flexibility to shingles
              and making them less durable against harsh weather conditions.
              Consequently, the lifespan of asphalt roofs has reduced compared
              to previous years, leading to several class-action roofing
              lawsuits.
            </p>
          </div>
          <div className={styles.vc}>
            <VideoPlayer src="uavj84jjr5" />
          </div>
        </div>
        <DirectorCards />
        <div className={styles.grid2}>
          <div className={styles.ac}>
            <h2 style={{ color: "var(--btn-bg2)" }}>
              Now we&apos;re proud to be roof preservers..
            </h2>
            <br />
            <p>
              In 2013, Mike and Todd sold their roofing business to shift their
              focus towards roof sustainability. They explored innovative
              technologies that could prolong the life of roofs, eliminating the
              need for premature replacements. During their research, they
              stumbled upon remarkable advancements from Battelle Laboratories,
              the world&apos;s biggest private research and development company,
              which eventually led to the birth of Roof Maxx.
            </p>
          </div>
          <div className={styles.vc}>
            <Image
              src="/easy.png"
              width={600}
              height={469}
              alt="gg"
              className={styles.imag}
            />
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.vc}>
            <Image
              src="/easy2.png"
              width={600}
              height={501}
              alt="gg"
              className={styles.imag}
            />
          </div>
          <div className={styles.ac}>
            <h2>Keeping asphalt roofs alive and well.</h2>
            <br />
            <p>
              Over time, shingles lose their natural oil and become fragile and
              brittle. Fortunately, Roof Maxx provides a solution to this
              problem. Our soy fusion technology involves saturating shingles
              with all-natural bio-oil, which replenishes their flexibility.
              This enables asphalt roofs to endure varying temperatures and
              harsh weather conditions just like a new roof would.
            </p>
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.ac}>
            <h2 style={{ color: "var(--btn-bg2)" }}>
              Keeping shingles out of landfills as well.
            </h2>
            <br />
            <p>
              Roof Maxx is a safe and food-grade solution that poses no harm to
              individuals, pets, property, or the environment. A single
              application of Roof Maxx can effectively preserve the durability
              of asphalt shingles for up to five years, and with regular
              treatments every five years, it can potentially extend the
              lifespan of a roof for up to 15 years. We take pride in our
              commitment to reducing construction waste in landfills and
              promoting a sustainable future with every roof we treat.
            </p>
          </div>
          <div className={styles.vc}>
            <Image
              src="/easy3.png"
              width={600}
              height={501}
              alt="gg"
              className={styles.imag}
            />
          </div>
        </div>
        <div className={styles.bioSavings}>
          <h1>Applying Roof Maxx to just one home, saves</h1>
          <div className={styles.grid3}>
            <div className={styles.item}>
              <Leaf size={32} />
              <h3>3.8 Tons</h3>
              <p>of waste from landfills</p>
            </div>
            <div className={styles.item}>
              <Cloud size={32} />
              <h3>80 kg</h3>
              <p>of CO2 emissions</p>
            </div>
            <div className={styles.item}>
              <Factory size={32} />
              <h3>1420 kg</h3>
              <p>of CO2 emissions from shingle manufacturing</p>
            </div>
          </div>
        </div>
        <div className={styles.moreSupport}>
          <h1>More support for Roof Maxx</h1>
          <br />
          <div className={styles.grid4}>
            <div className={styles.medCard}>
              <Image src="/1.png" width={129} height={70} alt="gg" />
              <p>
                Roof Maxx has been certified by the USDA as a plant-based
                product with 86% bio-based content.
              </p>
            </div>
            <div className={styles.medCard}>
              <Image src="/2.png" width={175} height={70} alt="gg" />
              <p>
                Roof Maxx has been certified by the USDA as a plant-based
                product with 86% bio-based content.
              </p>
            </div>
            <div className={styles.medCard}>
              <Image src="/3.png" width={70} height={70} alt="gg" />
              <p>
                World Bio Markets, a leading conference driving change in the
                global bio-economy, named Roof Maxx one of the 10 most dynamic
                and inspiring startups of 2019.
              </p>
            </div>
            <div className={styles.medCard}>
              <Image src="/4.png" width={139} height={70} alt="gg" />
              <p>
                Roof Maxx has been certified by the USDA as a plant-We were a
                2018 Bio-based Material of the Year award finalist for our
                collaboration with the Ohio Soybean Council in the creation of
                Roof Maxx.product with 86% bio-based content.
              </p>
            </div>
            <div className={styles.medCard}>
              <Image src="/5.png" width={70} height={70} alt="gg" />
              <p>
                Roof Maxx honored as a 2022 recipient of the Real Leaders Eco
                Innovation Award, which applies to companies with innovative
                environmental solutions for the greater good.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
        <ExtendLifespan />
      </div>
    </>
  );
}
