import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'THE MAC | Modern Architectural Concept — Ahmedabad',
  description: 'THE MAC — Modern Architectural Concept. Premium architecture, interior design, and construction services in Ahmedabad. Transform your vision into reality.',
  generator: 'v0.app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#F9F9F9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
