import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Nebulon'26 | National Hackathon",
  description:
    "Nebulon'26: A 24-hour national hackathon where innovators build the future. Join the innovation challenge and compete for prizes worth ₹15,000+.",

  keywords: [
    "Nebulon",
    "Nebulon Hackathon",
    "Hackathon India",
    "Student Hackathon",
    "AI Hackathon",
    "Innovation Challenge",
  ],

  authors: [{ name: "Nebulon Team" }],

  openGraph: {
    title: "Nebulon'26 | National Hackathon",
    description: "Unleash the Innovation - 24 Hour Innovation Challenge",
    url: "https://nebulon26.com",
    siteName: "Nebulon'26",
    type: "website",

    images: [
      {
        url: "/nebulon-logo.png",
        width: 1200,
        height: 630,
        alt: "Nebulon Hackathon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nebulon'26 | National Hackathon",
    description: "Join the 24-hour innovation challenge",
    images: ["/nebulon-logo.png"],
  },

  icons: {
    icon: [
      { url: "/nebulon-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/nebulon-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/nebulon-logo.png",
    shortcut: "/nebulon-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}