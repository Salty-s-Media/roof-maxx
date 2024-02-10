import React from "react";
import Image from "next/image";
import styles from "./adds.module.css";

export const Adds: React.FC = () => {
  const gridItems = [
    {
      icon: "/cup.png",
      title: "Landfill Waste",
      description:
        "10% of the construction waste in landfills is comprised of roofing materials.",
    },
    {
      icon: "/worker.png",
      title: "Impact",
      description:
        "Roof Maxx's treatment reduces roofing material waste in landfills by extending roof lifespan and promoting sustainability.",
    },
    {
      icon: "/tape.png",
      title: "Cost Benefits",
      description:
        "Roof Maxx offers a cost-effective and environmentally-friendly solution compared to traditional roof replacements, at a significantly lower cost.",
    },
    {
      icon: "/cup.png",
      title: "Extended Life",
      description:
        "Roof Maxx can prolong the lifespan of your roof by an additional 5 years with just one application, which translates to long-term cost savings and less waste.",
    },
    {
      icon: "/worker.png",
      title: "Longevity Boost",
      description:
        "Roof Maxx recommends treatments every 5 years to extend your roof's lifespan by up to 15 years and reduce environmental impact.",
    },
    { icon: "", title: "Read More", description: "" },
  ];

  return (
    <div className={styles.spc}>
      <h2 className={styles.header}>It All Adds Up</h2>
      <div className={styles.gridContainer}>
        {gridItems.map((item, index) => (
          <div key={index} className={styles.gridItem}>
            {index === 5 ? (
              <button className={styles.readMoreButton}>{item.title}</button>
            ) : (
              <>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
                <br />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
