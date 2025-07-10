import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be defined, check your .env file or environment variables on your hosting provider');
}

export const metadata: Metadata = {
  icons: {
    icon: 'images/favicons/favicon.ico',
    shortcut: 'images/favicons/favicon.ico',
    apple: 'images/favicons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: 'images/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: 'images/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
  manifest: 'images/favicons/site.webmanifest',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),

  title: {
    default: "Rehat Springbed",
    template: "%s | Rehat Springbed",
  },
  description: "Rehat Springbed menyediakan kasur nyaman dan tahan lama untuk tidur lebih sehat. Didukung tim ahli dan layanan terbaik untuk kenyamanan Anda.",

  openGraph: {
    title: 'Rehat Springbed',
    description: 'Kasur nyaman dan tahan lama untuk tidur lebih sehat.',
    url: 'https://rehatspringbed.id/',
    siteName: 'Rehat Springbed',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Rehat Springbed OG Image',
      },
    ],
    type: 'website',
    locale: 'id_ID',
  },

  // Bro doesn't have twitter
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Rehat Springbed',
  //   description: 'Kasur nyaman dan tahan lama untuk tidur lebih sehat.',
  //   images: ['/images/opengraph-image.png'],
  //   site: '@',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color-mix(in_srgb,var(--background)_60%,transparent)]`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
