import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donatien Rouzeirol | D�veloppeur web",
  description:
    "D�veloppeur web freelance � Bordeaux, France. Cr�ation de sites web premium, rapides et optimis�s SEO (React, JavaScript, performance).",
  keywords: [
    "Donatien Rouzeirol",
    "d�veloppeur web Bordeaux",
    "d�veloppeur freelance Bordeaux",
    "cr�ation site web Bordeaux",
    "React",
    "JavaScript",
    "SEO"
  ],
  authors: [{ name: "Donatien Rouzeirol" }],
  robots: { index: true, follow: true },
  metadataBase: new URL("https://donatien-rouzeirol.fr"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/"
    }
  },
  openGraph: {
    title: "Donatien Rouzeirol | D�veloppeur web",
    description:
      "D�veloppeur web freelance � Bordeaux, France. Sites web premium, rapides et optimis�s SEO.",
    url: "https://donatien-rouzeirol.fr/",
    siteName: "Donatien Rouzeirol",
    images: [
      {
        url: "/assets/images/cafe-cosy-800.webp"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Donatien Rouzeirol | D�veloppeur web",
    description: "Sites web premium, rapides et optimis�s SEO � Bordeaux.",
    images: ["/assets/images/cafe-cosy-800.webp"]
  },
  themeColor: "#0f1115",
  other: {
    "geo.region": "FR-NAQ",
    "geo.placename": "Bordeaux"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/DR-favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/assets/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/assets/fonts/playfair-display-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/cafe-cosy-800.webp"
          imagesrcset="/assets/images/cafe-cosy-480.webp 480w, /assets/images/cafe-cosy-800.webp 800w, /assets/images/cafe-cosy-1200.webp 1200w"
          imagesizes="(max-width: 768px) 90vw, 520px"
        />
        <meta name="geo.region" content="FR-NAQ" />
        <meta name="geo.placename" content="Bordeaux" />
      </head>
      <body>{children}</body>
    </html>
  );
}
