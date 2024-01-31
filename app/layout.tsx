import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/_components/loadingscreen/loadingscreen";

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-pjs",
});

export const metadata: Metadata = {
  title: "RoofMaxx",
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
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
