"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import VideoPlayer from "@/_components/video/videoPlayer";
import { BetterRoof } from "@/_components/betterRoof/roof";
import { GoogleReviews } from "@/_components/GoogRev/googrev";
import { Blogs } from "@/_components/blogs/blogs";
import { ContactForm } from "@/_components/contactForm/contactForm";

export default function Page() {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const dayNames = [
    "How Long Does a Roof Maxx Treatment Take",
    "How Does Roof Maxx Work?",
    "What Exactly Is Roof Maxx?",
    "What's Roof Maxx Made Of?",
    "If I Need a New Roof, Can Roof Maxx Help?",
    "Is Roof Maxx Safe?",
    "Can Roof Maxx Help New Roofs Last Longer?",
    "Can I Buy Roof Maxx Directly From You?",
    "Will Roof Maxx Seal My Roof from Leaks?",
    "If I'm Selling My House, Should I Still Use Roof Maxx?",
    "Can Roof Maxx Help New Roofs Last Longer?",
    "What Does Roof Maxx's 5-Year Flexibility Warranty Cover?",
    "How Much Does a Roof Maxx Treatment Cost?",
    "Will Roof Maxx Change the Appearance of My Roof?",
    "When Should I Treat My Roof with Roof Maxx?",
    "What Are the Weather Requirements for Roof Maxx?",
    "Does Roof Maxx Pose a Fire Risk?",
    "Will a Roof Maxx Treatment Void My Shingle Warranty?",
    "Will Roof Maxx Affect My Home Insurance Coverage?",
  ];

  const toggleDay = (index: number) => {
    setActiveDay((prevActiveDay) => (prevActiveDay === index ? null : index));
  };
  return (
    <div className={styles.page}>
      <h1>Browse FAQs</h1>
      <div className={styles.systemcontainer}>
        {dayNames.map((day, index) => (
          <div className={styles.day} key={index}>
            <div className={styles.dayheader} onClick={() => toggleDay(index)}>
              <h2>{day}</h2>
              <div className={styles.chevronIcons}>
                {activeDay === index ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            <ul
              className={
                activeDay === index
                  ? `${styles.tasklist} ${styles.visible}`
                  : styles.tasklist
              }
            >
              {index === 0 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    How Long Does a Roof Maxx Treatment Take
                  </div>
                  <li className={styles.task}>
                    <div>
                      Roof Maxx treatment typically takes between 30 minutes to
                      a few hours, depending on your roof&apos;s size and
                      condition. Our technicians will assess your roof before
                      applying the treatment, estimating the time required based
                      on its state. Smaller, clean roofs may finish in as little
                      as 30 minutes, while larger roofs with issues like debris
                      or loose flashing may take longer. Prior to Roof Maxx
                      application, any necessary prep work, such as debris
                      removal and nail sealing, will be completed. Our
                      eco-friendly spray restores asphalt roof tiles&apos;
                      flexibility, reducing the likelihood of breakage and
                      leaks. For a personalized evaluation and treatment
                      estimate, contact us today.
                    </div>
                    <div>
                      <Image
                        src="/stepsToQualify.jpg"
                        width={512}
                        height={512}
                        alt="Helping"
                      />
                    </div>
                  </li>
                </>
              )}
              {index === 1 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    How Does Roof Maxx Work?
                  </div>
                  <li className={styles.task}>
                    <div>
                      <i style={{ fontWeight: "600" }}>Short Answer:</i> Roof
                      Maxx&apos;s powerful plant-based oil penetrates deep into
                      the roof shingle&apos;s asphalt core replacing the
                      dried-out petrochemical oil. This restores flexibility and
                      waterproofing protection. <br /> <br /> You know how
                      people have their decks or driveways treated when they see
                      wear and tear and want to add life to their investment?
                      Roof Maxx does something similar for asphalt roofs, only
                      using a revolutionary new technology that soaks old,
                      brittle shingles with millions of micro-beads of
                      all-natural bio-oil to restore their flexibility and
                      prepare them to better protect your home. One Roof Maxx
                      application is guaranteed to add five years of life to an
                      asphalt roof. And with repeat applications every five
                      years, you can add up to 15 years of life to your asphalt
                      roof.
                    </div>
                    <div>
                      <VideoPlayer src="7yc99pqcks" />
                    </div>
                  </li>
                </>
              )}
              {index === 2 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    What Exactly Is Roof Maxx?
                  </div>
                  <li className={styles.task}>
                    <div>
                      For asphalt roofs, Roof Maxx is a quick, easy and
                      affordable alternative to a potentially complicated,
                      expensive and life-disrupting roof replacement. It&apos;s
                      a natural oil that can extend the life of an asphalt roof
                      by five years at a time, ideally starting when a roof is
                      around 6-10 years old, depending on the region. <br />
                      <br />
                      <i style={{ fontWeight: "600" }}>Here&apos;s why:</i> Roof
                      Maxx extends roof life by 6-8 years in southern climates
                      and 8-10 years in northern climates. It can also be
                      applied to roofs up to 30 years old, making them
                      environmentally friendly and safe for people, pets,
                      plants, and the environment. This treatment helps preserve
                      roofs and asphalt shingles, reducing waste.
                    </div>
                    <div>
                      <Image
                        src="/pc.png"
                        width={512}
                        height={512}
                        alt="LawnCard"
                      />
                    </div>
                  </li>
                </>
              )}
              {index === 3 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    What&apos;s Roof Maxx Made Of?
                  </div>
                  <li className={styles.task}>
                    <div>
                      The primary ingredient in Roof Maxx is a plant-based,
                      food-grade, non-toxic oil. These plant based oils are not
                      only the primary ingredient in Roof Maxx, but also in
                      recent upgraded technology in new award-winning Goodyear
                      tires. We love being in good company. Using plant-based
                      technology, Roof Maxx was able to use the oil in these
                      plant-based ingredients to replace lost oil in shingles.
                      The oil is fused into millions of tiny micro-beads that
                      can quickly penetrate shingles and give them back their
                      flexibility, durability, and waterproofing abilities. It
                      works almost immediately and gives shingles back the
                      ability to shed water, slows down granule loss, therefore,
                      keeping them in place longer, and even withstand the blunt
                      force that can break shingles.
                    </div>
                    <div>
                      When shingles are made, there are petrochemical oils
                      within the shingles&apos; asphalt that allow them to
                      expand and contract with the weather. Over time, this oil
                      dries out and causes shingles to become brittle. Roof Maxx
                      wanted to find a way to replace these lost oils. Our spray
                      is made solely from all-natural, food-based products which
                      also helps us to reduce our environmental footprint. A
                      Roof Maxx treatment replaces the petrochemical oils
                      naturally found in asphalt that have evaporated with an
                      all-natural bio-friendly oil to give shingles the
                      flexibility and durability needed to help withstand the
                      elements.
                    </div>
                  </li>
                </>
              )}
              {index === 4 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    If I Need a New Roof, Can Roof Maxx Help?
                  </div>
                  <li className={styles.task}>
                    <div>
                      The first thing to consider is that you may not actually
                      need a new roof. We&apos;ve helped thousands of property
                      owners avoid asphalt roof replacements, even if their
                      roofs required a few repairs first. Usually, as long as
                      you haven&apos;t had ongoing leaks, significant rotting
                      and decay, extreme sagging, and/or shingles blowing off,
                      Roof Maxx could be an option for you. We&apos;ve created a
                      revolutionary roofing spray that extends the lifespan of
                      your roof up to 15 years. This oil rejuvenates your old
                      roof shingles, restoring their flexibility closer to that
                      of new roof shingles. Additionally, a Roof Maxx treatment
                      decreases the loss of the protective top coating. In both
                      cases, this helps your roof stand up to wind, hail, and
                      rain, just like a new roof.
                    </div>
                    <div>
                      A single treatment with our roofing spray puts life back
                      into your aging roof. As soon as it&apos;s applied, the
                      spray goes to work immediately. The spray soaks into your
                      dried out shingles and replaces the life-saving chemicals
                      needed to keep your shingles strong. Our spray is
                      impervious to weather and soaks in for up to 72 hours. At
                      Roof Maxx, we&apos;re dedicated to saving you money and
                      giving you peace of mind. Rather than replacing your roof,
                      a timely and expensive process, we restore it to make it
                      like new again. Our treatment ensures your roof is
                      waterproof and strong, keeping you safe and dry no matter
                      what the weather. Contact a nearby Roof Maxx dealer for an
                      assessment that will tell you if we can help you avoid a
                      roof replacement.
                    </div>
                  </li>
                </>
              )}
              {index === 5 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Is Roof Maxx Safe?
                  </div>
                  <li className={styles.task}>
                    <div>
                      Yes. Roof Maxx is safe for people, pets, property, and the
                      environment. It&apos;s actually been certified as a{" "}
                      <a
                        href="https://www.biopreferred.gov/BioPreferred/"
                        style={{ textDecoration: "underline" }}
                      >
                        USDA BioPreferred product.
                      </a>{" "}
                      As your roof gets older, the oils inside begin to dry out,
                      causing the shingles to become brittle. As a result, they
                      no longer have the flexibility needed to withstand the
                      elements and they slowly begin to break apart. Roof Maxx
                      rejuvenates your roof by restoring the shingles to near
                      the durability and water-proofing levels they reached when
                      they were new. This is accomplished when millions of
                      microbeads saturate the brittle parts of your roof,
                      similar to the way moisturizer works for your skin. The
                      all-natural oils also improve the granule adhesion,
                      meaning the shingles are less prone to damage during
                      strong winds.While Roof Maxx is easily soaked up and
                      retained by asphalt shingles, it can be rinsed off any
                      other surface with a garden hose. Within 30 minutes, the
                      product will be completely absorbed, so rain won&apos;t be
                      a problem.
                    </div>
                    <div>
                      It is also a non-flammable product, so it will not
                      increase the risk of fire or the spreading of flames. When
                      you have a new roof installed or a roofer makes repairs,
                      you will most likely find nails and garbage surrounding
                      your house, even after they&apos;ve cleaned up. With Roof
                      Maxx, not only is there no oily residue leftover from our
                      treatments, but you won&apos;t have to worry about other
                      messes in your yard when we&apos;re through. Is Roof Maxx
                      safe? Yes, Roof Maxx is a scientifically formulated,
                      natural, safe, plant-based roof rejuvenating spray
                      treatment that was developed by Battelle Labs, the
                      world&apos;s largest private research and development
                      company. Contact Roof Maxx today for more information
                      about our all-natural treatments for your roof.
                      <br />
                      <br />
                      <ContactForm />
                    </div>
                  </li>
                </>
              )}
              {index === 6 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Can Roof Maxx Help New Roofs Last Longer?
                  </div>
                  <li className={styles.task}>
                    <div>
                      <i style={{ fontWeight: "600" }}>Short Answer:</i> We do
                      not suggest treating with Roof Maxx until the top granule
                      coating begins shedding off. Once this begins to happen,
                      it&apos;s a sign the roof is undergoing stress during
                      contraction and expansion. Be aware that if your asphalt
                      roof is less than 6-8 years old and you live in warmer
                      southern climates or is less than 8-10 years old and you
                      live in northern climates, it may still have much of its
                      original oil. This means it likely won&apos;t need to be
                      treated with Roof Maxx just yet. But, if your roof is
                      close to those age ranges, it&apos;s best to have a Roof
                      Maxx dealer at least check it for granule loss and other
                      issues to see if Roof Maxx can start extending the life of
                      your roof (by 5 years!) right now. Contact us today with
                      any questions or inquiries. We look forward to showing you
                      the difference Roof Maxx can make when it comes to
                      sustaining and beautifully maintaining your roof.
                      <br />
                      <br />
                      <ContactForm />
                    </div>
                  </li>
                </>
              )}
              {index === 7 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Can I Buy Roof Maxx Directly From You?
                  </div>
                  <li className={styles.task}>
                    <div>
                      <i style={{ fontWeight: "600" }}>Short Answer:</i> A Roof
                      Maxx treatment must be completed by one of our approved
                      contractors.
                    </div>
                  </li>
                </>
              )}
              {index === 8 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Will Roof Maxx Seal My Roof from Leaks?
                  </div>
                  <li className={styles.task}>
                    <div>
                      <i style={{ fontWeight: "600" }}>Short Answer:</i> No,
                      because 99% of roof leaks occur at the flashings, the most
                      leak-prone areas of the roof, such as around chimneys and
                      skylights or along a wall. <br />
                      <br />
                      We do offer an optional Roof Tune-up Package for roofs
                      that need a little TLC. Our Roof Tune-up focuses on the
                      most common issues in an effort to minimize or potentially
                      stop any current or future leaks. Contact Roof Maxx for
                      more information about how our all-natural treatments can
                      help extend the life of your roof.
                      <br />
                      <br />
                      <ContactForm />
                    </div>
                    <div>
                      <VideoPlayer src="grdqclqorw" />
                    </div>
                  </li>
                </>
              )}
              {index === 9 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Is There a Benefit to Having My Roof Treated with Roof Maxx
                    If I&apos;m Selling My House?
                  </div>
                  <li className={styles.task}>
                    <div>
                      Definitely! We&apos;ve heard of many situations in which
                      older roofs have caused home deals to fall through. Or,
                      just as bad, a potential home buyer will ask a seller to
                      reduce the price of a home by $10,000 or more because the
                      roof shows signs of aging. The good news is that Roof Maxx
                      has saved hundreds of real estate transactions in which
                      the roof was a point of contention—and our warranty is
                      fully transferable without restrictions. Contact a nearby
                      Roof Maxx dealer for an assessment to find out if your
                      roof could benefit from Roof Maxx
                    </div>
                  </li>
                </>
              )}
              {index === 10 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Can Roof Maxx Help New Roofs Last Longer?
                  </div>
                  <li className={styles.task}>
                    <div>
                      The primary ingredient in Roof Maxx is a plant-based,
                      food-grade, non-toxic oil. These plant based oils are not
                      only the primary ingredient in Roof Maxx, but also in
                      recent upgraded technology in new award-winning Goodyear
                      tires. We love being in good company. Using plant-based
                      technology, Roof Maxx was able to use the oil in these
                      plant-based ingredients to replace lost oil in shingles.
                      The oil is fused into millions of tiny micro-beads that
                      can quickly penetrate shingles and give them back their
                      flexibility, durability, and waterproofing abilities. It
                      works almost immediately and gives shingles back the
                      ability to shed water, slows down granule loss, therefore,
                      keeping them in place longer, and even withstand the blunt
                      force that can break shingles.
                    </div>
                    <div>
                      When shingles are made, there are petrochemical oils
                      within the shingles&apos; asphalt that allow them to
                      expand and contract with the weather. Over time, this oil
                      dries out and causes shingles to become brittle. Roof Maxx
                      wanted to find a way to replace these lost oils. Our spray
                      is made solely from all-natural, food-based products which
                      also helps us to reduce our environmental footprint. A
                      Roof Maxx treatment replaces the petrochemical oils
                      naturally found in asphalt that have evaporated with an
                      all-natural bio-friendly oil to give shingles the
                      flexibility and durability needed to help withstand the
                      elements.
                    </div>
                  </li>
                </>
              )}
              {index === 11 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    What Does Roof Maxx&apos;s 5-Year Flexibility Warranty
                    Cover?
                  </div>
                  <li className={styles.task}>
                    <div>
                      Roof Maxx Technologies proudly offers a five-year
                      flexibility warranty. What Does Roof Maxx&apos;s 5-year
                      Flexibility Warranty Cover? It guarantees that the asphalt
                      shingles we treat will remain flexible for at least five
                      years from the date of treatment. And since we know you
                      may not necessarily live under the same roof for the next
                      five years, our warranty is fully transferable without
                      restrictions. It remains valid even if the shingle
                      manufacturer&apos;s warranty is void because of transfer
                      restrictions, time or any other limitation included in
                      manufacturers&apos; warranties. See the full Roof Maxx
                      flexibility warranty for more details. We want you to know
                      that the asphalt shingles treated with Roof Maxx will
                      perform as originally designed and warranted by the
                      shingle manufacturer for a period of at least five (5)
                      years from the date of your treatment.
                    </div>
                    <div>
                      Roof Maxx restores asphalt shingles closer to their
                      original levels of flexibility, which allows them to
                      expand and contract as needed with changes in temperature
                      and weather. Our safe plant-based product adds life and
                      function to your asphalt shingles so your home gets the
                      protection you need from your roof. The Roof Maxx
                      Flexibility Warranty is still valid even if your
                      manufacturer&apos;s warranty is (or becomes) void due to
                      time or transfer restrictions. This is not a warranty
                      against leaks from faulty installation or other damage
                      sustained by the roof (hail, high winds, etc.). However,
                      if under normal operating and weather conditions the
                      treated shingles lose their proper operating flexibility,
                      granular adhesion characteristics, or structural integrity
                      or performance, your Certified Roof Maxx Dealer will
                      retreat all affected areas on a simple prorated basis
                      (over 60-month warranty period). Contact us today to learn
                      more about Roof Maxx and what it can do for you!
                    </div>
                  </li>
                </>
              )}
              {index === 12 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    How Much Does a Roof Maxx Treatment Cost?
                  </div>
                  <li className={styles.task}>
                    <div>
                      A Roof Maxx treatment offers a cost-effective alternative
                      to a complete roof replacement, saving homeowners
                      significantly. It&apos;s about 20% of the cost of a full
                      replacement, making it a more affordable option. Given the
                      recent increase in roof replacement costs due to Covid-19,
                      Roof Maxx treatments represent considerable savings. For
                      instance, a quality roofing system typically costs over
                      $12,000, while a Roof Maxx treatment is under $2,500. The
                      cost depends on the roof&apos;s size, complexity, and
                      accessibility. Roof Maxx treatments are quicker and less
                      disruptive than full replacements, avoiding the noise and
                      mess. Another cost factor will be whether your roof needs
                      a tune-up or any extra preparations to make sure
                      everything is intact before we apply Roof Maxx. This may
                      include replacing plumbing boots, sealing nail pops and/or
                      caulking around flashing. All told, a treatment from Roof
                      Maxx will likely save you a significant amount of money.
                      It can also save you a lot of hassle. Contact us today for
                      more information. See what Roof Maxx can do for your home.
                      <br />
                      <ContactForm />
                    </div>
                    <div>
                      <VideoPlayer src="rcbxevzm0l" />
                    </div>
                  </li>
                </>
              )}
              {index === 13 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    When Should I Treat My Asphalt Shingles with Roof Maxx?
                  </div>
                  <li className={styles.task}>
                    <div>
                      The best time to treat asphalt shingles with Roof Maxx is
                      when the roof tiles start to show signs of drying out and
                      losing their flexibility. This usually happens when the
                      roof is between 6 and 10 years old. However, sometimes we
                      treat roofs that are 15 to 20 years old and have even been
                      able to save roofs up to 30 years old. Asphalt roofs begin
                      drying out and becoming brittle at different rates,
                      depending on your region and the intensity of the
                      sun&apos;s UV rays in your area. Most roofs are ready for
                      a Roof Maxx treatment by the time they are 10 years old.
                      But don&apos;t worry if your roof is older than that and
                      hasn&apos;t yet been treated. When we come across older
                      roofs, it isn&apos;t uncommon for them to have had a few
                      repairs done before we&apos;ve been called in to treat
                      them. In many cases, we&apos;ve been able to repair and
                      extend the life of older asphalt roof shingles by
                      restoring their flexibility.
                    </div>
                    <div>
                      The biggest sign to look for is a loss of flexibility in
                      the roof shingles. So, how do you know if your shingles
                      are drying out and losing their flexibility? Asphalt
                      shingles contain asphalt granules, which are the small,
                      sand-like pebbles that stick together when the
                      shingles&apos; natural oils are still intact. But once
                      those oils start to dry out with age, the granules begin
                      flaking off and you may see them in your gutters,
                      downspouts, etc. Other signs your roof is drying out
                      include black stains and streaks or shingles cracking,
                      breaking, and curling. Each roof is different, so we
                      recommend having a local dealer evaluate whether yours is
                      a good candidate for Roof Maxx.
                    </div>
                  </li>
                </>
              )}
              {index === 14 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    What Are the Weather Requirements for Roof Maxx?
                  </div>
                  <li className={styles.task}>
                    <div>
                      Weather conditions must be dry, with the temperature above
                      36 degrees Fahrenheit, for Roof Maxx to be applied
                      successfully. These weather requirements allow the
                      treatment to fully penetrate the shingles and soak into
                      the asphalt. This question is especially likely to come up
                      in winter months and wet climates. While dry weather is
                      required for applying Roof Maxx, don&apos;t worry if it
                      rains an hour or more after the treatment. Depending on
                      your climate, it can take 30 minutes to an hour for the
                      treatment to soak in. Roof Maxx will penetrate the
                      shingles and fully soak into the asphalt within one hour,
                      leaving your roof fully treated and protected from the
                      elements. Once it has soaked into the asphalt tiles, the
                      Roof Maxx treatment cannot be washed away by rain.
                    </div>
                    <div>
                      Because Roof Maxx is a water-based, all-natural saturant,
                      the roof can even be slightly damp before treatment. Your
                      local technician will examine the roof before application
                      to make sure conditions are perfect for applying the
                      treatment so that it will soak in and revive your roof.
                      Roof Maxx is an eco-friendly spray that is applied
                      directly to the asphalt shingles on your roof. Weather can
                      be very draining on an asphalt roof. Sun, rain, snow, and
                      wind all take a toll on a roof, causing the tiles to age
                      and dry out, becoming brittle and fragile. Algae can even
                      grow on asphalt tiles, also making them brittle. Brittle
                      tiles break, crack, and leak, which can lead to expensive
                      and time-intensive repairs. Roof Maxx&apos;s treatment
                      coats the asphalt tiles and soaks in, creating a
                      waterproof weather barrier that extends the life of your
                      roof. It is a great investment for protecting against
                      weather and sun damage. Plus, the all-natural Roof Maxx
                      formula is natural and safe for humans and pets.
                    </div>
                  </li>
                </>
              )}
              {index === 15 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    What&apos;s Roof Maxx Made Of?
                  </div>
                  <li className={styles.task}>
                    <div>
                      The primary ingredient in Roof Maxx is a plant-based,
                      food-grade, non-toxic oil. These plant based oils are not
                      only the primary ingredient in Roof Maxx, but also in
                      recent upgraded technology in new award-winning Goodyear
                      tires. We love being in good company. Using plant-based
                      technology, Roof Maxx was able to use the oil in these
                      plant-based ingredients to replace lost oil in shingles.
                      The oil is fused into millions of tiny micro-beads that
                      can quickly penetrate shingles and give them back their
                      flexibility, durability, and waterproofing abilities. It
                      works almost immediately and gives shingles back the
                      ability to shed water, slows down granule loss, therefore,
                      keeping them in place longer, and even withstand the blunt
                      force that can break shingles.
                    </div>
                    <div>
                      When shingles are made, there are petrochemical oils
                      within the shingles&apos; asphalt that allow them to
                      expand and contract with the weather. Over time, this oil
                      dries out and causes shingles to become brittle. Roof Maxx
                      wanted to find a way to replace these lost oils. Our spray
                      is made solely from all-natural, food-based products which
                      also helps us to reduce our environmental footprint. A
                      Roof Maxx treatment replaces the petrochemical oils
                      naturally found in asphalt that have evaporated with an
                      all-natural bio-friendly oil to give shingles the
                      flexibility and durability needed to help withstand the
                      elements.
                    </div>
                  </li>
                </>
              )}
              {index === 16 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Does Roof Maxx Pose a Fire Risk?
                  </div>
                  <li className={styles.task}>
                    <div>
                      Testing has found and proved that Roof Maxx treatment has
                      no effect on fire risk or spread of flame on an asphalt
                      shingle roof. During its development, Roof Maxx was tested
                      by The Ohio State University Department of Food,
                      Agricultural, and Biological Engineering in line with the
                      standards of the American Society for Testing. Roof Maxx
                      was subjected to a number of safety and functional tests,
                      including fire safety. It&apos;s interesting how they
                      answered the question, “Does Roof Maxx pose a fire risk?”
                      Two roofs were tested. One was treated with Roof Maxx, and
                      the other was not. The edges of both roofs were ignited
                      with gas torches and burned for 10 minutes. After the
                      test, the damage caused by the flames was examined and
                      measured. The two roofs showed no difference: the spread
                      of flame and the flame damage was the same on the treated
                      and the untreated shingles. The conclusion? Application of
                      Roof Maxx does not increase the risk of fire or the rate a
                      fire will spread.
                    </div>
                    <div>
                      Ohio State University testing showed evidence that Roof
                      Maxx significantly enhances shingle flexibility, adhesion,
                      and hail resistance. It also restores shingle permeability
                      closer to that of new shingles. If you are interested in
                      full results, including a photo of fire damage on both
                      treated and untreated roof shingles, download the full
                      testing report. If you have any other questions about the
                      safety of Roof Maxx or how it works, contact us today.
                    </div>
                  </li>
                </>
              )}
              {index === 17 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Will a Roof Maxx Treatment Void My Shingle Warranty?
                  </div>
                  <li className={styles.task}>
                    <div>
                      You want your roof covered just as well as it covers your
                      house. That&apos;s why we offer our own warranty for Roof
                      Maxx treatments. It&apos;s also why shingle manufacturers
                      cover their products. Your Roof Maxx treatment does not
                      affect your shingle warranty. So far we&apos;ve had no
                      indication that applying Roof Maxx to asphalt shingles
                      will void or limit any sort of warranty in any way. In
                      fact, we&apos;ve never heard of a manufacturer&apos;s
                      warranty claim being denied because Roof Maxx was applied.
                      We take our commitment to covering your shingles
                      seriously. We stand by our 5-year flexibility warranty. We
                      also look into shingle manufacturer warranties to make
                      sure your roof stays covered.
                    </div>
                    <div>
                      That&apos;s not just hearsay. We have done the research
                      for you to get the most informed warranty information
                      available. Our attorneys have researched major shingle
                      manufacturers&apos; warranties and consulted with industry
                      organizations on the matter as well. When you get your
                      shingles treated with Roof Maxx, you can extend the life
                      of your roof. We are so confident in our product that we
                      offer our own warranty. Roof Maxx Technologies, LLC,
                      proudly warrants that the asphalt shingles treated with
                      Roof Maxx will perform as originally designed and
                      warranted by the shingle manufacturer for a period of at
                      least five (5) years from the date of your treatment. The
                      Roof Maxx Flexibility Warranty is still valid even if your
                      manufacturer&apos;s warranty is (or becomes) void due to
                      time or transfer restrictions. This is not a warranty
                      against leaks from faulty installation or other damage
                      sustained by the roof (hail, high winds).
                    </div>
                  </li>
                </>
              )}
              {index === 18 && (
                <>
                  <div className={styles.systemcontainerh3}>
                    Will Roof Maxx Affect My Home Insurance Coverage?
                  </div>
                  <li className={styles.task}>
                    <div>
                      Most likely in a positive way, if at all! For example,
                      there have been many instances where a Roof Maxx
                      application has helped property owners get insurance
                      coverage after receiving an insurance notice about their
                      roof needing replacing. Of course, every situation is
                      different, so we can&apos;t make any guarantees. But your
                      local Roof Maxx dealer can help point you in the right
                      direction.
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ height: "2rem" }} />
      <Blogs />
      <BetterRoof />
      <GoogleReviews />
      <div style={{ height: "2rem" }} />
    </div>
  );
}
