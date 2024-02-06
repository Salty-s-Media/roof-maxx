import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { MobileNav } from "@/_components/mobileNav/m-nav";
import { Navbar } from "@/_components/navbar/navbar";
import { Footer } from "@/_components/footer/footer";

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-pjs",
});

export const metadata: Metadata = {
  title: "Roof Maxx",
  description: "Alternative to costly roof replacement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={pjs.className}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
