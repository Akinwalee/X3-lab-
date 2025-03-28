import Footer from "@/components/sections/footer"
import Header from "@/components/sections/header"
import type { Metadata } from "next"
import { mont } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mont.className} space-y-6`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
