"use client";

import { BioCard } from "@/_components/biosavings/bio";
import styles from "./page.module.css";

import { Header } from "@/_components/header/header";
import { Carousel } from "@/_components/logocarousel/logoCaro";
import { Process } from "@/_components/process/process";

import { Lenis, useLenis } from "@studio-freight/react-lenis";
import { Router } from "next/router";
import { useEffect } from "react";
import { GoogleReviews } from "@/_components/GoogRev/googrev";
import { Adds } from "@/_components/addsUp/adds";

export default function Home() {
  const lenis = useLenis();

  useEffect(() => {
    function onHashChangeStart(url: string) {
      url = "#" + url.split("#").pop();
      lenis.scrollTo(url);
    }

    Router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      Router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [lenis]);

  return (
    <Lenis root>
      <div className={styles.page}>
        <Header />
        <Process />
        <Carousel />

        <Adds />
        <BioCard />
        <GoogleReviews />
      </div>
    </Lenis>
  );
}
