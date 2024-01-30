import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css"
import { Context } from "@/store/state"
import { Suspense } from "react"
import Loading from "./loading"
config.autoAddCss = false

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: 'swap'
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
      <body className={inter.className}>
        <Context>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </Context>
      </body>
    </html>
  )
}
