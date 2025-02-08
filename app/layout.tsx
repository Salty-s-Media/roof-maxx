import './globals.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { MobileNav } from '@/_components/mobileNav/m-nav';
import { Navbar } from '@/_components/navbar/navbar';
import { Footer } from '@/_components/footer/footer';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-pjs',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.roofamp.com'),
  keywords: [
    'roof maxx',
    'roofing services',
    'roof repair',
    'roof replacement',
    'roofing contractor',
    'roofing solutions',
    'roofing repair near me',
    'best roofing company',
    'affordable roofing services',
    'roofing maintenance',
    'roofing inspection',
    'roofing repair services',
    'roofing repair cost',
    'roofing repair quotes',
    'roofing repair reviews',
    'roofing repair tips',
    'roofing repair FAQ',
    'roofing repair guide',
    'roofing repair advice',
    'roofing repair tips',
    'roofing repair cost',
    'roofing repair quotes',
    'roofing repair reviews',
    'roofing repair tips',
    'roofing repair FAQ',
    'roofing repair guide',
    'roofing repair advice',
  ],
  title: {
    default: 'Roof Amp - Affordable Roofing Solutions',
    template: '%s | Roof Amp',
  },
  description:
    "Discover Roof Amp's cost effective alternative to roof replacement designed to keep your roof in great condition.",
  openGraph: {
    determiner: 'auto',
    title: 'Roof Amp - Your Go-To for Affordable Roofing Solutions',
    description:
      "Discover Roof Amp's cost effective alternative to roof replacement designed to keep your roof in top condition.",
    images: [
      {
        url: '/logo.svg',
        width: 305,
        height: 80,
        alt: 'Roof Amp Logo',
      },
    ],
    url: 'https://www.roofamp.com',
    siteName: 'Roof Amp',
    locale: 'en_US',
    type: 'website',
  },
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
