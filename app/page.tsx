"use client";

import styles from "./page.module.css";

import { Header } from "@/_components/header/header";
import { Navbar } from "@/_components/navbar/navbar";
import { Reviews } from "@/_components/reviews/reviews";
import { Footer } from "@/_components/footer/footer";

import { Lenis, useLenis } from "@studio-freight/react-lenis";
import { Router } from "next/router";
import { useEffect } from "react";
import { MobileNav } from "@/_components/mobileNav/m-nav";

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
      <Navbar />
      <MobileNav />
      <div className={styles.page}>
        <Header />
        <Reviews />
      </div>
      <Footer />
    </Lenis>
  );
}
