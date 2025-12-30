import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
// @ts-ignore: side-effect import of global CSS (Next.js app directory)
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://errornarrator.michaelyze.com"),
  title: {
    default: "Error Narrator - Hear Your Bugs Before You See Them",
    template: "%s | Error Narrator",
  },
  description:
    "Stop context switching between your UI and console. Error Narrator uses text-to-speech to narrate JavaScript errors in real-time.",
  keywords: [
    "error narrator",
    "javascript debugging",
    "text to speech errors",
    "react error handling",
    "npm package",
    "developer tools",
    "error monitoring",
    "TTS debugging",
    "accessibility",
    "frontend development",
  ],
  authors: [
    {
      name: "Michael Wondwossen Metaferia",
      url: "https://github.com/Mikewon98/error-narrator",
    },
  ],
  creator: "Michael Wondwossen Metaferia",
  publisher: "Michael Wondwossen Metaferia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://errornarrator.michaelyze.com",
    title: "Error Narrator - Hear Your Bugs Before You See Them",
    description:
      "Stop context switching between your UI and console. Error Narrator uses text-to-speech to narrate JavaScript errors in real-time.",
    siteName: "Error Narrator",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Error Narrator - Audio-First JavaScript Debugging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Error Narrator - Hear Your Bugs Before You See Them",
    description:
      "Stop context switching between your UI and console. Error Narrator uses text-to-speech to narrate JavaScript errors in real-time.",
    images: ["/og-image.png"], // Same as OpenGraph image
    creator: "@MichaelWon15943", // Replace with your Twitter handle if you have one
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "https://errornarrator.michaelyze.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
