"use client";

import styles from "./page.module.css";

import { Header } from "@/_components/header/header";
import { Carousel } from "@/_components/logocarousel/logoCaro";
import { Process } from "@/_components/process/process";
import { BioCard } from "@/_components/biosavings/bio";
import { GoogleReviews } from "@/_components/GoogRev/googrev";
import { Adds } from "@/_components/addsUp/adds";
import { Toaster } from "react-hot-toast";
import { Protects } from "@/_components/protects/protects";
import { BetterRoof } from "@/_components/betterRoof/roof";
import { CustomerTestimony } from "@/_components/custCaro/custCaro";
import { RoofReplacement } from "@/_components/roofRep/roofRep";
import { TimeToChange } from "@/_components/timeChange/time";
import { Blogs } from "@/_components/blogs/blogs";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Process />
      <Carousel />
      <Protects />
      <RoofReplacement />
      <Adds />
      <BioCard />
      <TimeToChange />
      <BetterRoof />
      <CustomerTestimony />
      <Blogs />
      <GoogleReviews />
      <Toaster position="bottom-right" />
    </div>
  );
}
