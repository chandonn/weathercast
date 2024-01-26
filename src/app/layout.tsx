import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css"
config.autoAddCss = false

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400"]
})

export const metadata: Metadata = {
  title: "WeatherCast",
  description: "Weather forecasting application built with Nextjs, Reactjs, and Typescript",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
