import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nebulon'26 | National Hackathon",
  description:
    "Nebulon'26: A 24-hour national hackathon where innovators build the future. Join us for an exciting innovation challenge with prizes worth ₹15,000+.",

  keywords: [
    'Nebulon',
    'Nebulon Hackathon',
    'Hackathon India',
    'Student Hackathon',
    'Innovation Challenge',
    'AI Hackathon',
  ],

  authors: [{ name: 'Nebulon Team' }],

  openGraph: {
    title: "Nebulon'26 | National Hackathon",
    description: 'Unleash the Innovation - 24 Hour Innovation Challenge',
    type: 'website',
    url: 'https://nebulon26.com',
    siteName: "Nebulon'26",
    images: [
      {
        url: '/nebulon-logo.png',
        width: 512,
        height: 512,
        alt: "Nebulon Hackathon Logo",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Nebulon'26 | National Hackathon",
    description: 'Join the 24-hour innovation challenge',
    images: ['/nebulon-logo.png'],
  },

  icons: {
    icon: [
      { url: '/nebulon-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/nebulon-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/nebulon-logo.png',
    shortcut: '/nebulon-logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}